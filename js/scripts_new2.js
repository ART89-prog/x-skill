$(() => {
    
	// Аудио сообщения
	const audios = document.querySelectorAll('.audio_wave'),
		inits = []

	var i = 0

	audios.forEach(el => {
		inits[i] = WaveSurfer.create({
			container: el,
			waveColor: '#ABAAE2',
			progressColor: el.classList.contains('light') ? '#fff' : '#0B00D8',
			cursorColor: 'transparent',
			barWidth: 2,
			barRadius: 20,
			cursorWidth: 0,
			height: 66,
			barGap: 2
		})

		inits[i].load(el.getAttribute('data-file'))

		inits[i].on('finish', function () {
		    $('.audio_message .btn.active').toggleClass('active');
		});

		i++
	})

	i = 0
	$('.audio_message .btn').each(function () {
		$(this).attr('data-index', i)
		i++
	})

	let audio_wave_new;
	let newWave;

	$('body').on('click', '.audio_message .btn', function (e) {
		let index = $(this).data('index')

		$(this).toggleClass('active')
		if($(this).hasClass("btn_new"))
		{
			newWave.playPause(newWave)	
		}
		else
		{
			inits[index].playPause(inits[index])
		}
		
	})


	


	

	

})