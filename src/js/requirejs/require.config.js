require.config({
    //optimize: 'none',
    baseUrl: 'js',

    buildCSS: false,
    inlineText : true,

    config : {
        i18n : {
            locale : (function(){
                try {
                    var lang = 'en',
                        reg=new RegExp('(^| )lang=([^;]*)(;|$)'),
                        m = {'en':true, 'zh-cn': true},
                        arr = document.cookie.match(reg);
                    if(arr){lang = unescape(arr[2]);}
                    if(!m[lang]) { lang = 'en';}
                    return lang;
                }
                catch(e) {
                    // 打包环境
                }
            })()
        }
    },

    map: {
        '*': {
            'css': 'requirejs/css.min'
        }
    },

    paths: {
        // lib
        // ------------------------------------
        // requirejs
        'text' : 'requirejs/text',
        'i18n': 'requirejs/i18n',

        // jquery
        //'jquery': 'lib/jquery/jquery-3.1.0.min',
        'jquery': 'lib/jquery/jquery-1.12.4.min',
        'jquery.cookie': 'lib/jquery/jquery.cookie',
        'jquery.browser': 'lib/jquery/jquery.browser',
        'jquery.hammer': 'lib/jquery/jquery.hammer',
        'jquery.fullPage': 'lib/jquery/jquery.fullPage',
        'hammer': 'lib/jquery/hammer.min',
        'jquery.scrollTo': 'lib/jquery/jquery.scrollTo',

        'swiper': 'lib/swiper/swiper-3.4.2.jquery.min',

        'bootstrap': 'lib/bootstrap/bootstrap-3.3.7.min',

        'create': 'lib/createjs/createjs-2015.11.26.min',
        'createjs': 'lib/createjs/createjs',

        // 轮播
        'slick' : 'lib/slick/slick',

        // 滚动条
        'iscroll' : 'lib/iscroll/iscroll-5.2.0',

        // helper
        'helper': 'lib/helper-es5/helper',
        'frameplayer': 'lib/helper-es5/frameplayer',

        // app
        // ------------------------------------
        'script' : 'app-es5/script',
        'loader' : 'app-es5/loader',
        'music' : 'app-es5/music',
        'movie': 'app-es5/movie',
        'flow': 'app-es5/flow',
        'video1': 'app-es5/video1',
        'video2': 'app-es5/video2'
    },

    shim: {
        //'bootstrap' : ['jquery'],
        //'bootstrap' : ['css!./lib/bootstrap/bootstrap-3.3.7.min.css'],
        'swiper': ['jquery', 'css!./lib/swiper/swiper-3.4.2.min.css'],
        //'jquery.fullPage' : ['jquery', 'css!./lib/jquery/jquery.fullPage.css'],
        //'jquery.cookie' : ['jquery']
    },

    //shim : {
    //    'moduleName' : {
    //        deps: ['jquery'],
    //        exports : '模块的全局变量',
    //        init: function(QQ) {
    //            return QQ;
    //        }
    //    },

    //    'bootstrap': ['jquery'],

    //    'modernizr': {
    //        exports: 'Modernizr'
    //    }
    //},

    waitSeconds: 30,
    urlArgs : '_=' + new Date().getTime()
});