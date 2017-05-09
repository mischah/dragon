'use strict'

import './polyfills.js' // Element.classList polyfill
import touchy from './touchy.js' // cross event
import { getParent, toArray, isInput, lookUpByElm } from './utils'
import Container from './container'
import { decorator as middle } from 'middle.js'

let doc = document

if ( !window.dragonSpace )
	window.dragonSpace = {}
let space = window.dragonSpace

// ==============================================================================================================================================================
// Dragon =====================================================================================================================================================
// =============================================================================================================================================================
/** is group of containers with same settings */
export default class Dragon {

	constructor( config ) {

		config = config || {}

		if ( typeof config.length !== 'undefined' ) // is array-like
			config = { containers: toArray( config ) }

		this.initSpace( config.space )
		this.space = space
		space.dragons.push( this )

		this.config = config
		this.defaults = {
			mirrorContainer: doc.body
		}
		this.id = config.id || 'dragonID_' + Date.now()
		this.containers = []

		// init
		this.addContainers()
	}

	@middle
	initSpace( newSpace ) {

		if ( newSpace )
			space = newSpace

		if ( !space.dragons ) { // initialisation
			space.dragons = []
			touchy( document.documentElement, 'add', 'mousedown', this.grab.bind( this ) )
		}

		if ( !space.Dragon )
			space.Dragon = Dragon
	}

	@middle
	addContainers( containerElms, config ) {

		containerElms = containerElms || this.config.containers

		if ( !containerElms ) return

		let len = containerElms.length

		for( let i = 0, elm; i < len; i++) {

			elm = containerElms[i]

			if ( this.getContainer( elm ) ) {

				console.warn( 'container already registered', elm )
			}
			else {

				this.containers.push( new Container( this, elm, config ) )
			}
		}
	}

	@middle
	getContainer( elm, own ) {

		if ( own )
			return this.containers[ lookUpByElm( this.containers, elm ) ]

		let dragons = space.dragons
		let dragonsLen = dragons.length

		for ( let i = 0, ii; i < dragonsLen; i++ ) {

			ii = lookUpByElm( dragons[ i ].containers, elm )

			if ( ii > -1 )
				return dragons[ i ].containers[ ii ]
		}

		return null;
	}

	@middle
	grab( e ) {

		let item = e.target
		let source
		let container
		let index

		if ( isInput( item ) ) { // see also: github.com/bevacqua/dragula/issues/208
			e.target.focus() // fixes github.com/bevacqua/dragula/issues/176
			return
		}

		while ( getParent( item ) && !this.getContainer( getParent( item ), item, e ) ) {
			item = getParent( item ) // drag target should be a top element
		}
		source = getParent( item )
		if ( !source ) {
			return
		}

		index = lookUpByElm( this.containers, source )
		container = this.containers[ index ]
		return container.grab( e, item, source )
	}

	@middle
	findDropTarget( elementBehindCursor ) {

		let target = elementBehindCursor
		while ( target && !this.getContainer( target ) ) {
			target = getParent( target )
		}
		return target
	}

	@middle
	getConfig( prop ) {

		prop = this.config.hasOwnProperty( prop ) ? this.config[ prop ] : this.defaults[ prop ]
		return typeof prop == 'function' ? prop() : prop
	}

}
