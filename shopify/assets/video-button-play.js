const btnVideoPlay = document.querySelectorAll('.btn-video-play');
btnVideoPlay.forEach((btn) => {
    btn.addEventListener('click', () => {
        let video = btn.nextElementSibling;
        if (btn.classList.contains('btn-hidden')) {
            btn.classList.remove('btn-hidden');
            video.pause();
            video.removeAttribute('controls');
        } else {
            btn.classList.add('btn-hidden');
            video.play();
            video.setAttribute('controls', 'controls');
        }
    });
});