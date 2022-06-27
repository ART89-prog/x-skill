$(() => {
    

    if ('function' === typeof MediaPlayer) {
		[].forEach.call(document.querySelectorAll('audio[controls]'), function (media) {
			player = media.player = new MediaPlayer(media, {
				svgs: {
				    play: 'images/sprite.svg#ic_play',
					pause: 'images/sprite.svg#ic_pause'
				},
			})
		})		
	}



	

})