$(() => {
    

    if ('function' === typeof MediaPlayer) {
		[].forEach.call(document.querySelectorAll('audio[controls]'), function (media) {
			player = media.player = new MediaPlayer(media, {
				svgs: {
					play: 'images/btn_play.svg',
					pause: 'images/btn_pause.svg',
				},
			})
		})		
	}



	

})