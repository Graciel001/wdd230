// Hamburger menu
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');

hamButton.addEventListener('click', () =>{
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});


// HERO SHOT VIDEO
// Load the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Replace the 'ytplayer' element with an iframe and
// YouTube player after the API code downloads.
var player;
var videoId = "3dG_lrGpunQ";

function onYouTubePlayerAPIReady() {
    player = new YT.Player('ytplayer', {
        playerVars: {
            enablejsapi: 1,
            autoplay: 1,
            autohide: 1,
            wmode: 'transparent',
            iv_load_policy: 3,
            branding: 0,
            fs: 0,
            controls: 0,
            mute: 1,
            modestbranding: 1,
            loop: 1,
            rel: 0,
            showinfo: 0,
            playlist: videoId
        },
        videoId: videoId,
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}

function onPlayerStateChange(el) {
    var ytplayer = document.getElementById('ytplayer');

    if (el.data === 0) {
        ytplayer.style.opacity = "0";
    }
    if (el.data === 1) {
        ytplayer.style.opacity = "1";
    }
}

var fullScreenAvailable = document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled;

// Assuming YTPlayer is defined elsewhere
YTPlayer.opt.realfullscreen = isIframe() || !fullScreenAvailable ? false : YTPlayer.opt.realfullscreen;
