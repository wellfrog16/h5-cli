define([
    'jquery',
    'helper',
    'createjs',
    'text!../components/video2.html!strip',
    'jquery.hammer'],
function ($, helper, createjs, htmlVideo) {
    return (autoplay) => {
        $('body').append(htmlVideo);



    };
});


