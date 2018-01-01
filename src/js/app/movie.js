define([
    'jquery',
    'frameplayer',
    'text!../components/movie.html!strip',
    'jquery.hammer'],
function ($, frameplayer, htmlMovie) {
    return (callback) => {
        $('body').append(htmlMovie);

        var t = frameplayer({
            target: $(`.sys-movie .movie`),
            total: 36,
            row: 8,
            loop: false,
            loopDelay: 0,
            //loopTimes:3,
            fps: 6,
            scale: 640/300,
            autosize : false,
            finishedCallback(fplayer){
                callback(fplayer);
            }
        });

        // 调整返回目标
        t.target = $('.sys-movie');

        // 点击退出
        t.target.hammer().on('tap', ()=> {
            t.stop();
            t.target.fadeOut();
        });

        return t;
    };
});

















