// 剧本

define([
    'jquery',
    'helper',
    'loader',
    'music',
    'movie',
    'flow',
    'text!../components/block.html!strip',
    'text!../views/index.html!strip'],
function ($, helper, loader, music, movie, flow, htmlBlock, htmlIndex) {
    return () => {
        // 加载jquery插件
        helper.jqueryPlugins();

        // rem修正
        helper.fixRem();

        // 如果是手机端，加载横屏提示
        if (!helper.isPC) { $('body').append(htmlBlock); }

        // 零、预加载
        loader(()=>{
            // 一、背景音乐，参数是是否自动播放，自动播放需要到最外层的index.html里设置
            music(false);

            // 二、主流程，先初始化
            var sections = flow();
            

            // 三、逐帧动画
            let mv = movie((fplayer) =>{
                console.log('播放完成');
                fplayer.target.fadeOut();

                sections[0].handle();
            });

            mv.play();



            // $('body').append(htmlIndex);
            // console.log('123');
        });
    };
});

















