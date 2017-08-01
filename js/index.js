/**
 * Created by jianshuaz on 2017-07-17.
 */
$(document).ready(function () {
    var skin1=localStorage.skin1;
    var skin2=localStorage.skin2;
    var skin3=localStorage.skin3;

    $("#En").click(
        function () {
            $(".s-msg").text("Message");
            $(".s-skin").text("Skin");
            $(".unknown-setting").text("City");
            $(".unknown-text").text("Weather Information");
            $(".nav-news").text("News");
            $(".nav-video").text("Video");
            $(".nav-academic").text("Academic");
            $(".nav-map").text("Maps");
            $(".nav-login").text("Login");
            $(".nav-more").text("More");
            $(".nav-com").text("Community");
            $(".skinnav-nav-name").text("Popular");
            $(".search-button").text("Search");
            $(".s-menu-recommend").text("Recommend");
            $(".s-menu-nav").text("Nav");
            $(".s-menu-video").text("Video");


        }
    )
    $("#Ch").click(
        function () {
            $(".s-msg").text("消息");
            $(".s-skin").text("换肤");
            $(".unknown-setting").text("设置城市");
            $(".unknown-text").text("查看天气信息，");
            $(".nav-news").text("新闻");
            $(".nav-video").text("视频");
            $(".nav-academic").text("学术");
            $(".nav-map").text("地图");
            $(".nav-login").text("登陆");
            $(".nav-more").text("更多产品");
            $(".nav-com").text("贴吧");
            $(".skinnav-nav-name").text("热门");
            $(".search-button").text("百度一下");
            $(".s-menu-recommend").text("推荐");
            $(".s-menu-nav").text("导航");
            $(".s-menu-video").text("视频");





        }
    )
    // Mine nav
    $("#s-mblock-title").click(
    function () {
        $("#s-mblock-content").toggle();
        $("#s-mblock-up").toggleClass("s-mblock-up");

    }
    )

    // mine nav close
    $("#sui-dialog-close").click(
        function () {
            $("#sui-dialog").hide();
            $("#manager-btn-text").removeClass("manager-btn-text-2");

        }
    )
    //

    $("#tips-manager-btn").click(
        function () {
            $("#sui-dialog").toggle();
            $("#manager-btn-text").toggleClass("manager-btn-text-2");

        }
    )

    // recommend
    $("#1").click(
        function () {
            $("#s_menu_mine").removeClass("current");
            $("#2").removeClass("current");
            $("#3").removeClass("current");
            $("#1").addClass("current");

            $("#s-xmancard").hide();
            $("#s-content-3").hide();
            $("#s-content-2").hide();
            $("#s-content-1").show();

        }
    )
    // nav
    $("#2").click(
        function () {
            $("#1").removeClass("current");
            $("#s_menu_mine").removeClass("current");
            $("#3").removeClass("current");
            $("#2").addClass("current");

            $("#s-xmancard").hide();
            $("#s-content-3").hide();
            $("#s-content-1").hide();
            $("#s-content-2").show();

        }
    )
    // video
    $("#3").click(
        function () {
            $("#s_menu_mine").removeClass("current");
            $("#2").removeClass("current");
            $("#1").removeClass("current");
            $("#3").addClass("current");

            $("#s-xmancard").hide();
            $("#s-content-2").hide();
            $("#s-content-1").hide();
            $("#s-content-3").show();
        }
    )
    //
    $("#s_menu_mine").click(
        function () {
            $("#1").removeClass("current");
            $("#2").removeClass("current");
            $("#3").removeClass("current");
            $("#s_menu_mine").addClass("current");
            $("#s-content-2").hide();
            $("#s-content-3").hide();
            $("#s-content-1").hide();
            $("#s-xmancard").show();

        }
    )

    //
    $(".video-item").mouseenter(
        function(){
            $(this).find(".tag-sort").hide();
            $(this).find(".dustbin").show();        }
    )

    $(".video-item").mouseleave(
        function(){
            $(this).find(".dustbin").hide();
            $(this).find(".tag-sort").show();
        }
    )
    // 返回顶部特效
    $(".to-top").mouseenter(
        function(){
        $("#top-icon").hide();
        $(".icon-mask").show();        }
    )

    $(".to-top").mouseleave(
        function(){
            $(".icon-mask").hide();
            $("#top-icon").show();
        }
    )

    $(window).scroll(function () {
        if($(window).scrollTop()>10){
                    $(".top-feed").css("visibility","visible");

        }
        if($(window).scrollTop()==0){
            $(".top-feed").css("visibility","hidden");

        }
    });

    $(".to-top").click(function () {
        var speed=200;//滑动的速度
        $('body,html').animate({ scrollTop: 0 }, speed);
        // $(".top-feed").css("visibility","hidden");
        return false;
    });
    
    // hide skin bar
    $(".s-skin-up").click(
        function () {
            $(".s-skin-layer").css("top","-500px");
        }
    )

    //show skin bar
    $(".s-skin").click(
        function () {
            $(".s-skin-layer").css("top","0px");

        }
    )

    //
    $("#skin1").click(
        function () {
            $(".s-skin-container").css({
                "background-color":"#404040;",
                "background-image":"url(./img/nav-icon/skin1-a.jpg)"
            })
            $(".bg-img").attr('src',"./img/nav-icon/logo_white.png")
            $("#s_main").css({
                "background-color":"white",
               "opacity":"0.8"
            })
             // $(".s-skin-container").style.backgroundColor;
            // console.log(skin)
            var target=document.getElementById("s-skin-container");
            target.style.backgroundImage=skin1;
            console.log(target.style.backgroundImage);
            localStorage.skin1=skin1;
            localStorage.removeItem('skin2')
            localStorage.removeItem('skin3');


        }
    )
    $("#skin2").click(
        function () {
            $(".s-skin-container").css({
                "background-color":"#404040;",
                "background-image":"url(./img/nav-icon/skin2-a.jpg)"
            })
            $(".bg-img").attr('src',"./img/nav-icon/logo_white.png")
            $("#s_main").css({
                "background-color":"white",
                "opacity":"0.8"
            })
            var target=document.getElementById("s-skin-container");
            target.style.backgroundImage=skin2;
            console.log(target.style.backgroundImage);
            localStorage.skin2=skin2;
            localStorage.removeItem('skin1');
            localStorage.removeItem('skin3');
        }
    )
    $("#skin3").click(
        function () {
            $(".s-skin-container").css({
                "background-color":"#404040;",
                "background-image":"url(./img/nav-icon/skin3-a.jpg)"
            })
            $(".bg-img").attr('src',"./img/nav-icon/logo_white.png")
            $("#s_main").css({
                "background-color":"white",
                "opacity":"0.8"
            })
            var target=document.getElementById("s-skin-container");
            target.style.backgroundImage=skin3;
            console.log(target.style.backgroundImage);
            localStorage.skin3=skin3;
            localStorage.removeItem('skin2');
            localStorage.removeItem('skin1');
        }

    )
    $("#skin-remove").click(
        function () {
            localStorage.removeItem('skin2');
            localStorage.removeItem('skin1');
            localStorage.removeItem('skin3');

            $(".s-skin-container").css({
                "background-color":"white;",
                "background-image":"none"
            })
            $(".bg-img").attr('src',"./img/baidu_logo.jpeg")
            $("#s_main").css({
                "background-color":"white",
                "opacity":"1"
            })

        }

    )
    if(skin1){
        $(".s-skin-container").css({
            "background-color":"#404040;",
            "background-image":"url(./img/nav-icon/skin1-a.jpg)"
        })
        $(".bg-img").attr('src',"./img/nav-icon/logo_white.png")
        $("#s_main").css({
            "background-color":"white",
            "opacity":"0.8"
        })
        return;
    }
    if(skin2){
        $(".s-skin-container").css({
            "background-color":"#404040;",
            "background-image":"url(./img/nav-icon/skin2-a.jpg)"
        })
        $(".bg-img").attr('src',"./img/nav-icon/logo_white.png")
        $("#s_main").css({
            "background-color":"white",
            "opacity":"0.8"
        })
        return;

    }
    if(skin3){
        $(".s-skin-container").css({
            "background-color":"#404040;",
            "background-image":"url(./img/nav-icon/skin3-a.jpg)"
        })
        $(".bg-img").attr('src',"./img/nav-icon/logo_white.png")
        $("#s_main").css({
            "background-color":"white",
            "opacity":"0.8"
        })
        return;

    }
})