//main.js

/* 로그인 이미지 */
//appear_00000 ~ appear_00056
var appear = "";
var loop = "";
$(document).ready(function() {

    // 로그인 애니메이션
    // appear
    for(var i = 0; i < 57; i++){
        if(i < 10) i = '0' + i;
        appear += '<img src="images/appear/appear_000' + i + '.png">';
        //$(".info .appear").html(appear);
    };
    $(".info .appear").html(appear);


    //loop_00000 ~ loop_00081
    for(var i = 0; i < 82; i++){
        if(i < 10) i = '0' + i;
        loop += '<img src="images/loop/loop_000' + i + '.png">';
        //$(".info .loop").html(loop);
    };
    // $(".loop").html(appear);
    $(".loop").html(loop);

    /* 로그인 애니메이션 */
    for(var k = 0; k < 57; k++){
        $(".appear > img").eq(k).css({"animation":"ani 2.85s linear " + (k * 0.05) + "s 1 normal"});
    }

    for(var k = 0; k < 82; k++){
        $(".info .loop > img").eq(k).css({"animation":"ani 4.1s linear " + (2.85 + 0.05 * k) + "s infinite normal"});
    }
    // naem 총시간 속도 시작시간 반복여부 종료후진행방향

/*------------------------------------------------------------------------------------*/
// 주메뉴
$(".gnb > ul > li > a").bind("mouseover focus",function(){
    console.log("마우스엔터");
    if( $("form.srch").is(":visible") ) {
        $("form.srch").removeClass("on");
        $(".srch_open").removeClass("on");
    };

    if( $("dl.topMenu > dd").eq(4).hasClass("on") ) {

        $("dl.topMenu > dd").eq(4).removeClass("on");
    }

    $(".header_wrap").css({"height":"450px"});
    $(".gnb > ul > li > ul").css({"display":"block"});
});

$(".gnb").bind("mouseleave blur",function(){
    $(".header_wrap").css({"height":"120px"});
    $(".gnb > ul > li > ul").css({"display":"none"});
});

/*------------------------------------------------------------------------------------*/
    /* 검색열기 */
    $("span.srch_open").click(function(){
        $(this).toggleClass("on");
        $("form.srch").toggleClass("on");
    });

    // 고객센터 열기
    $(".topMenu > dd").eq(4).click(function(){
        $(this).toggleClass("on");
    });


/*-------------------------------------------------------------------------------------*/
    // 배너
    $(".banner_roll a").eq(0).addClass("on");

    var $bnnNum = 0;
    var $lastNum = $(".banner_frame > section").size() - 1;
    var $banner_w = $("body > section").width();

    //리사이즈
    $(window).resize(function(){
        $banner_w = $("body > section").width();
    });

    // 다음
    $(".next").click(function(){
        $bnnNum++;
        if($bnnNum > $lastNum) $bnnNum = 0;
        $(".banner_frame").stop().animate({"left":$bnnNum * (-$banner_w)},600,"linear",function(){ //기차가 움직이고 콜백함수 호출
            if($(".banner_frame > section").eq($bnnNum).hasClass("white")){
                $(".arrow > a").addClass("white");
                $(".rolling a").addClass("white");
            } else{
                $(".arrow > a").removeClass("white");
                $(".rolling a").removeClass("white");
            }
            $(".banner_roll a").removeClass("on");
            $(".banner_roll a").eq($bnnNum).addClass("on");
        });
    });

    // 이전
    $(".prev").click(function(){
        $bnnNum--;
        if($bnnNum < 0) $bnnNum = $lastNum;
        $(".banner_frame").stop().animate({"left":$bnnNum * (-$banner_w)},600,"linear",function(){
            if($(".banner_frame > section").eq($bnnNum).hasClass("white")){
                $(".arrow > a").addClass("white");
                $(".rolling a").addClass("white");
            } else{
                $(".arrow > a").removeClass("white");
                $(".rolling a").removeClass("white");

            }
            $(".banner_roll a").removeClass("on");
            $(".banner_roll a").eq($bnnNum).addClass("on");
        });
    });

     // 오토배너(넥스트 버튼을 일정한 시간만큼 누르는거)
    function autoBanner(){
        // next 버튼 눌렀을 때
        $bnnNum++;
        if($bnnNum > $lastNum) $bnnNum = 0;
        $(".banner_frame").stop().animate({"left":$bnnNum * (-$banner_w)},600,"linear",function(){ //기차가 움직이고 콜백함수 호출
            if($(".banner_frame > section").eq($bnnNum).hasClass("white")){
                $(".arrow > a").addClass("white");
                $(".rolling a").addClass("white");
            } else{
                $(".arrow > a").removeClass("white");
                $(".rolling a").removeClass("white");
            }
            $(".banner_roll a").removeClass("on");
            $(".banner_roll a").eq($bnnNum).addClass("on");
        });
    };

    //일정한 시간만큼 계속 반복
    var $autoBnn = setInterval(autoBanner,5000);
    
    // 재생멈춤
    var flag = true;
    $("a.play").click(function(){
        if(flag){
            clearInterval($autoBnn);
            $(this).addClass("pause");
            flag = false;
        }else{
            $autoBnn = setInterval(autoBanner,5000);
            flag = true;
            $(this).removeClass("pause");
        }
    });

    // 클릭한 롤링의 해당배너로 이동
    var $banner = $(".banner_roll a").click(function(){
        //var idx = $(this).parent().index();

        $bnnNum = $banner.index(this);
        $(".banner_frame").stop().animate({"left":$bnnNum * (-$banner_w)},600,"linear",function(){ //기차가 움직이고 콜백함수 호출
            if($(".banner_frame > section").eq($bnnNum).hasClass("white")){
                $(".arrow > a").addClass("white");
                $(".rolling a").addClass("white");
            } else{
                $(".arrow > a").removeClass("white");
                $(".rolling a").removeClass("white");
            }
            $(".banner_roll a").removeClass("on");
            $(".banner_roll a").eq($bnnNum).addClass("on");
        });
    });


/*-------------------------------------------------------------------------------------*/
    //가로세로 전활할 때 화면의 너비가 달라지는 것에 대해서 바른 위치에 있도록 적용
    $("body>section").bind("orientationchage",function(){
        $banner_w = $("body > section").width();
        $(".banner_frame").animate({"left":$bnnNum * -$banner_w},600,"linear");
    });

    //모바일에서
    $("body > section").bind("swipeleft",function(){
        $(".next").trigger("click");
    });
    $("body > section").bind("swiperight",function(){
        $(".prev").trigger("click");
    });


/*-------------------------------------------------------------------------------------*/
    // 퀵메뉴 이미지
    // quick01_00000 ~ 00019
    var quick1 = "";
    for(var i = 0; i < 20; i++){
        if(i < 10){
            quick1 += '<img src="images/quick01/quick01_0000' + i + '.png"></img>'
        }else{
            quick1 += '<img src="images/quick01/quick01_000' + i + '.png"></img>'
        }
    };
    $(".quick1").html(quick1);

    // quick02_00000 ~ 00019
    var quick2 = "";
    for(var i = 0; i < 20; i++){
        if(i < 10){
            quick2 += '<img src="images/quick02/quick02_0000' + i + '.png"></img>'
        }else{
            quick2 += '<img src="images/quick02/quick02_000' + i + '.png"></img>'
        }
    };
    $(".quick2").html(quick2);

    // quick03_00000 ~ 00019
    var quick3 = "";
    for(var i = 0; i < 20; i++){
        if(i < 10){
            quick3 += '<img src="images/quick03/quick03_0000' + i + '.png"></img>'
        }else{
            quick3 += '<img src="images/quick03/quick03_000' + i + '.png"></img>'
        }
    };
    $(".quick3").html(quick3);

    // quick04_00000 ~ 00019
    var quick4 = "";
    for(var i = 0; i < 20; i++){
        if(i < 10){
            quick4 += '<img src="images/quick04/quick04_0000' + i + '.png"></img>'
        }else{
            quick4 += '<img src="images/quick04/quick04_000' + i + '.png"></img>'
        }
    };
    $(".quick4").html(quick4);



    // 마우스 올렸을 때
    $(".content1 ul li").hover(function(){
        //마우스 올렸을 때
        for(var i = 0; i < 20; i++){
            $(this).find("img").eq(i).css({"animation":"hoverAni 1s linear " + (i * 0.05) + "s 1 normal"});
        }
    },function(){
        //마우스 뗏을때
        $(this).find("span").children("img").css({"animation":"none"});

    });

    /*---------------------------------------------------------------------------*/
    //circle_wrap
    $(window).scroll(function(){
        var scroll = $(this).scrollTop();
        console.log(scroll);

        if(scroll < 150) {
            $("div.top").removeClass("on");
        }
        if(scroll >= 150 && scroll < 2465) {
            $("div.top").removeClass("ab");
            $("div.top").addClass("on");
        }
        if(scroll >= 2465) {
            $("div.top").addClass("ab");
        }


        //도넛
        $(".doughnut_Left_L").css({"top":71 + scroll * 0.5});
        $(".doughnut_Left_s").css({"top":796 + scroll * 1.1});
        $(".doughnut_Left").css({"top":1726 + scroll * 0.1});

        $(".doughnut_Center_M").css({"top":722 + scroll * 0.1});
        $(".doughnut_Center_s").css({"top":991 + scroll * 1.1});

        $(".doughnut_right_M").css({"top":365 + scroll * 0.5});
        $(".doughnut_right_s").css({"top":947 + scroll * 0.1});
        $(".doughnut_right").css({"top":-300 + scroll * 0.7});
    });

    

    /*---------------------------------------------------------------------------*/
    //content3
    $(".conten3_inner > div > ul > li").hover(function(){
        //마우스 올렸을 때
        $(this).addClass("on");
    
    },function(){
        //마우스 뗏을때
        $(this).removeClass("on");
    });

    //대분류
    $(".conten3_inner > ul > li").bind("click focus",function(e){
        e.preventDefault();
        $(".conten3_inner > ul > li").removeClass("on");
        $(this).addClass("on");


        //클릭한 메뉴의 data-group과 동일한 li만 보여주기
        var $groupName = $(this).data("group"); //li의 data-group 가져오기
        var liList = $(".conten3_inner > div > ul > li");
        $(".conten3_inner > div > ul > li").hide();
        switch ($groupName) {
            case 'all':
                $(".conten3_inner > div > ul > li").show();
                break;
            case 'ent':
                $(".conten3_inner > div > ul > li[data-group='ent']").show();
                break;
            case 'shop':
                $(".conten3_inner > div > ul > li[data-group='shop']").show();
                break;
            case 'diner':
                $(".conten3_inner > div > ul > li[data-group='diner']").show();
                break;
            case 'box':
                $(".conten3_inner > div > ul > li[data-group='box']").show();
                break;
        };

    });

    // 패밀리 사이트
    $(".family_site").bind("click focus",function(e){
        e.preventDefault();
        $(this).toggleClass("on");

        if($(this).hasClass("on")){
            $(this).children("a").attr("title","닫기")
        }else{
            $(this).children("a").attr("title","열기")
        }
    });
        
    

});