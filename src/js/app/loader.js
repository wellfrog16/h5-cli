// 加载

define([
    'jquery',
    'createjs',
    'helper',
    'frameplayer',
    'text!../components/loading.html!strip',
    'jquery.browser'],
($, createjs, helper, frameplayer, htmlLoading) => {
    return (callback) => {

        // 如果小于ie9，则取消loading（createjs不支持）;
        if($.browser.msie && $.browser.version < 9) {
            return callback();
        }

        // img标签方式加载图片
        var loader = new createjs.LoadQueue(false);
        
        // 关键！----设置并发数  
        loader.setMaxConnections(5);
        // 关键！---一定要将其设置为 true, 否则不起作用。  
        loader.maintainScriptOrder = true;

        // 加载loading页要用的资源
        var source = [
            { 'src': 'main/landscape.png' },
            { 'src': 'main/loading.jpg' },
        ];

        loader.on('complete', onComplete);
        loader.loadManifest(source, true, 'assets/img/');

        var t = null;
        const el = '.sys-loading';

        function onComplete() {
            $('body').append(htmlLoading);
            
            t = frameplayer({
                target: $(`${el} .movie`),
                total: 66,
                row: 10,
                loop: true,
                loopDelay: 0,
                //loopTimes:3,
                fps: 6,
                scale: 1.5,
                autosize : false,
                // onProgress(frame){
                //     console.log(frame);
                // }
            });

            //t.breakpoint(20);
            t.play();

            mainload();
        }


        function mainload() {
            var loader = new createjs.LoadQueue(false);
            
            // 关键！----设置并发数  
            loader.setMaxConnections(5);
            // 关键！---一定要将其设置为 true, 否则不起作用。  
            loader.maintainScriptOrder = true;
    
            // 加载项目页面要用的资源
            var source = [
                { 'src': 'icon/music.png' },
                { 'src': 'open/frame.jpg' },
            ];
    
            // 音频资源在本地
            // loader.installPlugin(createjs.Sound);
            // loader.loadFile({ id: 'h5-bg', src: 'assets/audio/bg.mp3' });

            // 外部mp3连接需要服务器设置允许跨域？
            // loader.loadFile({ id: 'h5-bg', src: 'http://tronm.oss-cn-shanghai.aliyuncs.com/ctrip/aa/music.mp3' });
            

            loader.on('progress', onProgress);
            loader.on('complete', onComplete);
            loader.loadManifest(source, true, 'assets/img/');
    
            function onComplete() {
                // 延迟关闭
                setTimeout(() => {
                    t.stop();
                    $(el).fadeOut();
                    helper.tryFun(callback);
                }, 500);

                // console.log('资源加载完成');
            }
    
            function onProgress() {
                //console.log(loader.progress);
                $(`${el} span`).text((loader.progress * 100 | 0) + ' %');
                $(`${el} .progress div`).css('width', (loader.progress * 100 | 0) + '%');
            }
        }
    };
});

















