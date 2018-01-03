// 剧本

define([
    'jquery',
    'helper',
    'loader',
    'music',
    'movie',
    'flow',
    'text!../components/block.html!strip'],
function ($, helper, loader, music, movie, flow, htmlBlock) {
    return () => {
        // 加载jquery插件
        helper.jqueryPlugins();

        // rem修正
        helper.fixRem();

        // 如果是手机端，加载横屏提示
        if (!helper.isPC) { $('body').append(htmlBlock); }

        // 0、预加载
        loader(()=>{
            // 1、背景音乐，参数是是否自动播放，自动播放需要到最外层的index.html里设置
            music(false);

            // 2、主流程，先初始化
            var sections = flow();
            

            // 3、逐帧动画
            let mv = movie((fplayer) =>{
                console.log('播放完成');
                fplayer.target.fadeOut();

                // 3.1、进入主流程
                sections[0].handle();
            });

            mv.play();



            // $('body').append(htmlIndex);
            // console.log('123');
        });
    };
});

















