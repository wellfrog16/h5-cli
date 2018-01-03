define([
    'jquery',
    'helper',
    'swiper',
    'frameplayer',
    'text!../components/flow.html!strip',
    'video2',
    'jquery.hammer'],
function ($, helper, Swiper, frameplayer, htmlFlow, video2) {
    return () => {
        $('body').append(htmlFlow);


        var sections = [];

        // 场景1
        sections[0] = {
            init(){     // 场景初始化

            },
            handle(){   // 打开场景时要执行的操作
                sections[0].movie();
            },
            movie(){    // 动画
                console.log('场景1动画');
            },
            close(){    // 退出时执行
                console.log('场景1退出');
            }
        };

        // 场景2
        sections[1] = {
            init(){     // 场景初始化
                video2($('.section2 .video-box span'), ()=>{
                    console.log('视频结束');
                });
            },
            handle(){   // 打开场景时要执行的操作
                sections[1].movie();
            },
            movie(){    // 动画
                console.log('场景2动画');
            },
            close(){    // 退出时执行
                console.log('场景2退出');
            }
        };

        // 场景3
        sections[2] = {
            init(){     // 场景初始化
                new Swiper('#swiper1', {
                    pagination : '#swiper1p',
                    loop: true
                });
            },
            handle(){   // 打开场景时要执行的操作
                sections[2].movie();
            },
            movie(){    // 动画
                console.log('场景3动画');
            },
            close(){    // 退出时执行
                console.log('场景3退出');
            }
        };

        // 场景4
        sections[3] = {
            init(){     // 场景初始化

                // 联系我们
                $('.section4 .btContact').hammer().on('tap', ()=>{
                    $('.section4 .contact').fadeIn();
                });

                $('.section4 .contact .cancel').hammer().on('tap', ()=>{
                    $('.section4 .contact').fadeOut();
                });

                // 分享提示
                $('.section4 .btShare').hammer().on('tap', ()=>{
                    $('.section4 .share').fadeIn();
                });

                $('.section4 .share').hammer().on('tap', ()=>{
                    $('.section4 .share').fadeOut();
                });
            },
            handle(){   // 打开场景时要执行的操作
                sections[3].movie();
            },
            movie(){    // 动画
                console.log('场景4动画');
            },
            close(){    // 退出时执行
                console.log('场景4退出');
            }
        };

        // 场景5
        sections[4] = {
            init(){     // 场景初始化

            },
            handle(){   // 打开场景时要执行的操作
                sections[4].movie();
            },
            movie(){    // 动画
                console.log('场景5动画');
            },
            close(){    // 退出时执行
                console.log('场景5退出');
            }
        };

        new Swiper('#mainSwiper', {
            direction : 'vertical',
            onInit: function(){

                // 各个场景初始化
                for (const item of sections) {
                    item.init();
                }
            },
            onSlideChangeEnd: function(swiper){
                helper.tryFun(sections[swiper.realIndex].handle);
                helper.tryFun(sections[swiper.previousIndex].close);
            }
        });

        return sections;
    };
});

















