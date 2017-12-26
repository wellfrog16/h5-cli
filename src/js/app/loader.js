// 加载

define([
    'jquery',
    'createjs',
    'helper',
    'frameplayer',
    'text!../views/loading.html!strip',
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

        var source = [
            { 'src': 'main/landscape.png' },
            { 'src': 'main/loading.jpg' },
        ];

        loader.on('complete', onComplete);
        loader.loadManifest(source, true, 'assets/img/');

        var t = null;

        function onComplete() {
            $('body').append(htmlLoading);
            
            t = frameplayer({
                target: $('.movie'),
                total: 66,
                row: 10,
                loop: true,
                loopDelay: 0,
                //loopTimes:3,
                fps: 6,
                scale: 1.5,
                autosize : false,
                onProgress(frame){
                    console.log(frame);
                }
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
    
            var source = [
                { 'src': 'main/loading.jpg' }        
            ];
    
            loader.on('progress', onProgress);
            loader.on('complete', onComplete);
            loader.loadManifest(source, true, 'assets/img/');
    
            function onComplete() {
                // t.stop();
                // $('.loading').fadeOut();
                // helper.tryFun(callback);

                // console.log('资源加载完成');
            }
    
            function onProgress() {
                //console.log(loader.progress);
                $('.loading span').text((loader.progress * 100 | 0) + ' %');
                $('.loading .progress div').css('width', (loader.progress * 100 | 0) + '%');
            }
        }
    };
});

















