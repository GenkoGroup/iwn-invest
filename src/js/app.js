import * as flsFunctions from './modules/functions.js'
import { Fancybox } from '@fancyapps/ui'

window.addEventListener('load', e => {
	Fancybox.bind('[data-fancybox="gallery-room"]', {
		//
	})
	flsFunctions.isWebP()

	flsFunctions.scrollAnchor()
	// flsFunctions.addShadowHeader()
	flsFunctions.scrollTop()
	flsFunctions.initializedSlider()
	flsFunctions.dynamicAnchorHeader()
	// flsFunctions.showMobMenu()
	flsFunctions.wowAnimationInit()
})
