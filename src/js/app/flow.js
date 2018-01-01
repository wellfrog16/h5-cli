define([
    'jquery',
    'helper',
    'swiper',
    'frameplayer',
    'text!../components/flow.html!strip',
    'jquery.hammer'],
function ($, helper, swiper, frameplayer, htmlFlow) {
    return (callback) => {
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
                console.log(`场景1动画`)
            },
            close(){    // 退出时执行
                console.log(`场景1退出`)
            }
        }

        // 场景2
        sections[1] = {
            init(){     // 场景初始化

            },
            handle(){   // 打开场景时要执行的操作
                sections[1].movie();
            },
            movie(){    // 动画
                console.log(`场景2动画`)
            },
            close(){    // 退出时执行
                console.log(`场景2退出`)
            }
        }

        // 场景3
        sections[2] = {
            init(){     // 场景初始化

            },
            handle(){   // 打开场景时要执行的操作
                sections[2].movie();
            },
            movie(){    // 动画
                console.log(`场景3动画`)
            },
            close(){    // 退出时执行
                console.log(`场景3退出`)
            }
        }

        // 场景4
        sections[3] = {
            init(){     // 场景初始化

            },
            handle(){   // 打开场景时要执行的操作
                sections[3].movie();
            },
            movie(){    // 动画
                console.log(`场景4动画`)
            },
            close(){    // 退出时执行
                console.log(`场景4退出`)
            }
        }

        var mySwiper = new Swiper('.sys-swiper .swiper-container', {
            direction : 'vertical',
            onInit: function(){
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

















