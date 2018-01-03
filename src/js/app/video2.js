define([
    'jquery',
    'helper',
    'createjs',
    'text!../components/video2.html!strip',
    'jquery.hammer'],
function ($, helper, createjs, htmlVideo) {
    return (button, callback) => {
        $('body').append(htmlVideo);

        // 视频绑定
        var video = $('.sys-video2 video');
        button.hammer().on('tap', ()=> {

            $('.sys-video2').show();
            $('.sys-block').css('z-index', '-1');

            var vid = ['2EC1EE594D2A5F8E9C33DC5901307461', '5DE2D95ADDDA73A49C33DC5901307461'];
            $.get('https://www.canon.com.cn/video/invoking/m/getMobile?vid=' + vid[0], (json) => {
                
                // 设置视频地址
                video.attr('src', json.value[0].copy);
                video[0].play();

            }, 'jsonp');


        });

        video.on('timeupdate', function () {

            // 视频结束前1秒执行
            if (video[0].duration > 0 && video[0].currentTime > video[0].duration - 1) {
                video[0].pause();
                callback();
            }
        });

        video.on('pause', function () {

            $('.sys-video2').hide();
            $('.sys-block').css('z-index', '9999');
            video[0].pause();
            callback();
        });
    };
});


