'use strict';

(function () {
    let player;

    window.onYouTubeIframeAPIReady = function () {
        window.setTimeout(() => {
            let yts = document.getElementsByClassName('youtube');
            if (yts.length != 1)
                return;

            let youtube = yts[0];

            let videoId = youtube.getAttribute('data-videoId');

            let el = document.createElement('div');
            youtube.appendChild(el);
            player = new YT.Player(el, {
                videoId: videoId,
                playerVars: { rel: 0 },
                autoplay: 1,
                disablekb: 1
            });
        });
    }

    document.getElementById('play').onclick = () => {
        if (player.getPlayerState() == 1) {
            player.pauseVideo();
        }
        else {
            player.playVideo();
        }
    };
})();
