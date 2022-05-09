/* main2.js */
var divWidth;
var limitsize=768;


window.addEventListener('load',function(){

    divWidth = document.querySelector('body').offsetWidth;

    window.addEventListener('resize',function(){
        divWidth = document.querySelector('body').offsetWidth;
    });

/* ------------------------------------------------------- */
    //모바일

    //햄버거 버튼_주메뉴 열기
    var body = document.querySelector('body');
    var mob = document.querySelector('.mob'); 
    var moBtnClose = document.querySelector('.moBtn_close'); 
    var bg = document.querySelector('.bg');
    var moBtn = document.querySelector('.moBtn');
    
    moBtn.addEventListener('click',function(){
        body.classList.add('on')
        mob.classList.add('on');
        moBtnClose.classList.add('on');
        bg.classList.add('on');
        this.style.display = 'none';
    });

    //모바일 주메뉴 닫기
    moBtnClose.addEventListener('click',function(){
        body.classList.remove('on')
        mob.classList.remove('on');
        moBtnClose.classList.remove('on');
        bg.classList.remove('on');
        moBtn.style.display = 'block';
    });

    //jQeury의 .is(":visible") 대신 : element.offsetWidth > 0 && element.offsetHeight > 0;
    //hasClass 대신 : classList.contains('on');
    //animate 대신 : css로 작성, transition 추가

    //모바일 주메뉴 리스트 열기
    var mobGnbLi = document.querySelectorAll('.mob_gnb > ul > li');
    mobGnbLi.forEach(function(item){
        item.addEventListener('click',function(e){
            e.preventDefault();
            this.classList.toggle('on');
        });
    });

    // 모바일 고객센터
    var mobTopMenu = document.querySelectorAll('.mob_topMenu > dd')[4];
    mobTopMenu.addEventListener('click',function(){
        this.classList.toggle('on');

    });

/* ------------------------------------------------------- */
    //주메뉴
    var gnbMenu = document.querySelectorAll('.gnb>ul>li');
    var headerWrap = document.querySelector('.header_wrap');
    var formSrch = document.querySelector('form.srch');
    var srchOpen = document.querySelector('.srch_open');
    var topMenuDD = document.querySelectorAll('dl.topMenu>dd');
    var subMenu = document.querySelectorAll('.gnb>ul>li>ul');

    for(var i = 0; i < gnbMenu.length; i++){
        gnbMenu[i].addEventListener('mouseover',function(){
            if(divWidth < limitsize) return false; //더이상 진행안함. 리턴값을 false로 반환.

            if (divWidth.offsetWidth > 0 && divWidth.offsetHeight > 0) {
                formSrch.classList.remove('on');
                srchOpen.classList.remove('on');
            }
            if (topMenuDD[4].classList.contains('on')) {
                topMenuDD[4].classList.remove('on');
            }
            headerWrap.classList.add('on');
            subMenu.forEach(function(item) {
                item.classList.add('on');
            });
        }); 

        gnbMenu[i].addEventListener('mouseout',function(){
            headerWrap.classList.remove('on');
            subMenu.forEach(function(item) {
                item.classList.remove('on');
            });
        }); 

    };


/* ------------------------------------------------------- */
    // //로그인 이미지
    var appear ="";
    var loop = "";
    //appear
    for(var i = 0; i < 57; i++){
        if(i < 10){
            appear += "<img src='images/appear/appear_0000" + i + ".png' alt='로그인버튼" + i + "' />";
        }else{
            appear += "<img src='images/appear/appear_000" + i + ".png' alt='로그인버튼" + i + "' />";
        }
        document.querySelector(".info .appear").innerHTML = appear;
    }
    //loop
    for(var i = 0; i < 82; i++){
        if(i < 10){
            loop += "<img src='images/loop/loop_0000" + i + ".png' alt='로그인버튼" + i + "' />";
        }else{
            loop += "<img src='images/loop/loop_000" + i + ".png' alt='로그인버튼" + i + "' />";
        }
        document.querySelector(".info .loop").innerHTML = loop;
    }

    // 로그인 애니메이션
    var appearImg = document.querySelectorAll(".appear>img");
    for(var k = 0; k < 57; k++){
        appearImg[k].style.animation = "ani 2.85s linear " + (k * 0.05) + "s 1 normal";
    }
    var loopImg = document.querySelectorAll(".loop>img");
    for(var k = 0; k < 82; k++){
        loopImg[k].style.animation = "ani 4.1s linear " + (2.85 + 0.05 * k) + "s infinite normal"
    }


/* ------------------------------------------------------- */
    // 퀵메뉴 이미지
    var quick1 = "";
    for(var i = 0; i < 20; i++){
        if(i < 10){
            quick1 += '<img src="images/quick01/quick01_0000' + i + '.png"></img>'
        }else{
            quick1 += '<img src="images/quick01/quick01_000' + i + '.png"></img>'
        }
    };
    document.querySelector("span.quick1").innerHTML = quick1;

    var quick2 = "";
    for(var i = 0; i < 20; i++){
        if(i < 10){
            quick2 += '<img src="images/quick02/quick02_0000' + i + '.png"></img>'
        }else{
            quick2 += '<img src="images/quick02/quick02_000' + i + '.png"></img>'
        }
    };
    document.querySelector("span.quick2").innerHTML = quick2;

    var quick3 = "";
    for(var i = 0; i < 20; i++){
        if(i < 10){
            quick3 += '<img src="images/quick03/quick03_0000' + i + '.png"></img>'
        }else{
            quick3 += '<img src="images/quick03/quick03_000' + i + '.png"></img>'
        }
    };
    document.querySelector("span.quick3").innerHTML = quick3;

    var quick4 = "";
    for(var i = 0; i < 20; i++){
        if(i < 10){
            quick4 += '<img src="images/quick04/quick04_0000' + i + '.png"></img>'
        }else{
            quick4 += '<img src="images/quick04/quick04_000' + i + '.png"></img>'
        }
    };
    document.querySelector("span.quick4").innerHTML = quick4;

    //마우스 올렸을 때
    var content1Li = document.querySelectorAll(".content1 ul li");

    content1Li.forEach(function(item){
        item.addEventListener("mouseover",function(){
            for(var i = 0; i < 20; i++){
                var imgLi = this.children[0].children[0].children;
                imgLi[i].style.animation = "hoverAni 1s linear " + (i * 0.05) + "s 1 normal";
            }
        });
    });
    //마우스 뗏을때
    content1Li.forEach(function(item){
        item.addEventListener("mouseout",function(){
            for(var i = 0; i < 20; i++){
                var imgLi = this.children[0].children[0].children;
                imgLi[i].style.animation = "none";
            }
        });
    });

/* ------------------------------------------------------- */
    //검색열기
    var srchOpen = document.querySelector('span.srch_open');
    var srch = document.querySelector("form.srch");
    srchOpen.addEventListener('click',function(){
        this.classList.toggle('on');
        srch.classList.toggle('on');

        if(this.classList.contains('on')){
            this.children[0].setAttribute("title","검색입력서식 닫기")
        }else{
            this.children[0].setAttribute("title","검색입력서식 열기")
        }
    });

/* ------------------------------------------------------- */
    //고객센터 열기
    topMenuDD[4].addEventListener('click',function(){
        this.classList.toggle('on');

        if(this.classList.contains('on')){
            this.children[0].setAttribute("title","검색입력서식 닫기")
        }else{
            this.children[0].setAttribute("title","검색입력서식 열기")
        }
    });


/* ------------------------------------------------------- */
    //배너
    var bnnNum = 0;
    var lastNum = document.querySelectorAll('.banner_frame > section').length - 1;
    var bannerLi = document.querySelectorAll('.banner_frame > section');
    var bannerWid = document.querySelector('body>section').offsetWidth;
    var prev = document.querySelector('.prev');
    var next = document.querySelector('.next');
    var bannFrame = document.querySelector(".banner_frame");
    var bannFrameOn = document.querySelector(".banner_frame.on");
    var arrowBtn = document.querySelectorAll('.arrow a');
    var rollingBtn = document.querySelectorAll('.rolling a');
    var banner_rollA = document.querySelectorAll('.banner_roll a')

    window.addEventListener('resize',function(){
        bannerWid = document.querySelector('body>section').offsetWidth;
    });

    //배너-다음
    next.addEventListener('click',function(){
        bnnNum++;
        if(bnnNum > lastNum) {
            bnnNum = 0;
        }
        bannFrame.classList.add('on');
        bannFrame.style.left = bnnNum * (-bannerWid) + "px";
        
        if(bannerLi[bnnNum].classList.contains('white')){
            arrowBtn.forEach(function(item){
                item.classList.add('white');
            })
            rollingBtn.forEach(function(item){
                item.classList.add('white');
            })
        }else{
            arrowBtn.forEach(function(item){
                item.classList.remove('white');
            })
            rollingBtn.forEach(function(item){
                item.classList.remove('white');
            })
        }
        rollingBtn.forEach(function(item){
            item.classList.remove('on');
        })
        banner_rollA[bnnNum].classList.add('on');
    });

    //배너-이전
    prev.addEventListener('click',function(){
        bnnNum--;
        if(bnnNum < 0) {
            bnnNum = lastNum;
        }
        bannFrame.style.left = bnnNum * (-bannerWid) + "px";

        if(bannerLi[bnnNum].classList.contains('white')){
            arrowBtn.forEach(function(item){
                item.classList.add('white');
            })
            rollingBtn.forEach(function(item){
                item.classList.add('white');
            })
        }else{
            arrowBtn.forEach(function(item){
                item.classList.remove('white');
            })
            rollingBtn.forEach(function(item){
                item.classList.remove('white');
            })
        }
        rollingBtn.forEach(function(item){
            item.classList.remove('on');
        })
        banner_rollA[bnnNum].classList.add('on');
    });

    //오토배너
    function autoBanner(){
        bnnNum++;
        if(bnnNum > lastNum) {
            bnnNum = 0;
        }
        bannFrame.style.left = bnnNum * (-bannerWid) + "px";
        
        if(bannerLi[bnnNum].classList.contains('white')){
            arrowBtn.forEach(function(item){
                item.classList.add('white');
            })
            rollingBtn.forEach(function(item){
                item.classList.add('white');
            })
        }else{
            arrowBtn.forEach(function(item){
                item.classList.remove('white');
            })
            rollingBtn.forEach(function(item){
                item.classList.remove('white');
            })
        }
        rollingBtn.forEach(function(item){
            item.classList.remove('on');
        })
        banner_rollA[bnnNum].classList.add('on');
    }

    var autoBann = setInterval(autoBanner,5000);


    //재생 멈춤
    var flag = true;
    var play = document.querySelector('a.play');
    play.addEventListener('click',function(){
        if(flag){
            clearInterval(autoBann);
            this.classList.add('pause');
            flag = false;
        }else{
            autoBann = setInterval(autoBanner,5000);
            this.classList.remove('pause');
            flag = true;
        }
    });

    var banner_rollLi = document.querySelectorAll('.banner_roll li');

        banner_rollLi.forEach(function(item){
            item.addEventListener('click',rollAction);
        });

        function rollAction(item){
            curRoll = item.currentTarget; //클릭이벤트가 전달된 엘리먼트
            parentRoll = curRoll.parentElement // 연결된 엘리먼트의 부모
            childRoll = parentRoll.children; // 부모 엘리먼트의 자식 엘리먼트들
            bnnNum = Array.from(childRoll).indexOf(curRoll); //배열중에서 인덱스 번호 찾기
            bannFrame.style.left = bnnNum * (-bannerWid) + "px";
        
            if(bannerLi[bnnNum].classList.contains('white')){
                arrowBtn.forEach(function(item){
                    item.classList.add('white');
                })
                rollingBtn.forEach(function(item){
                    item.classList.add('white');
                })
            }else{
                arrowBtn.forEach(function(item){
                    item.classList.remove('white');
                })
                rollingBtn.forEach(function(item){
                    item.classList.remove('white');
                })
            }
            rollingBtn.forEach(function(item){
                item.classList.remove('on');
            })
            banner_rollA[bnnNum].classList.add('on');
        }


/* ------------------------------------------------------- */
    //content3
    var content3Li = document.querySelectorAll('.conten3_inner > div > ul > li');

    content3Li.forEach(function(item){
        item.addEventListener('mouseover',function(){
            this.classList.add('on');
        });
        item.addEventListener('mouseout',function(){
        this.classList.remove('on');
        });
    });

    //대분류
    var group = document.querySelectorAll(".conten3_inner>ul>li>a");
    var groupView = document.querySelectorAll(".conten3_inner>div>ul>li")
    var ent = document.querySelectorAll(".conten3_inner>div>ul>li.ent");
    var shop = document.querySelectorAll(".conten3_inner>div>ul>li.shop");
    var diner = document.querySelectorAll(".conten3_inner>div>ul>li.diner");
    var box = document.querySelectorAll(".conten3_inner>div>ul>li.box");

    group.forEach(function(item){
        item.addEventListener('click',function(e){
            e.preventDefault();

            group.forEach(function(item){
                item.classList.remove('on');
            });
            this.classList.add('on');
            
            var className = this.parentElement.className; //.getAttribute("class")로도 가져올 수있음.
            
            //클릭한 메뉴의 li만 보여주기
            groupView.forEach(function(item){
                    item.style.display = "none"
                });

            switch(className) {
                case 'all':
                    groupView.forEach(function(item){
                        item.style.display = "block"
                    });
                    break;
                case 'ent':
                    ent.forEach(function(item){
                        item.style.display = "block";
                    });
                    break;
                case 'shop':
                    shop.forEach(function(item){
                        item.style.display = "block"
                    });
                    break;
                case 'diner':
                    diner.forEach(function(item){
                        item.style.display = "block"
                    });
                    break;
                case 'box':
                    box.forEach(function(item){
                        item.style.display = "block"
                    });
                    break;
            };
        });
    });


/* ------------------------------------------------------- */
    //패밀리 사이트
    var familySite = document.querySelector('.family_site>a')
    familySite.addEventListener('click',function(e){
        e.preventDefault();
        this.parentElement.classList.toggle('on');

        if(this.parentElement.classList.contains('on')){
            this.setAttribute("title","계열사 바로가기 닫기");
        }else{
            this.setAttribute("title","계열사 바로가기 열기")
        };
    });

/* ------------------------------------------------------- */
    //스크롤 탑, 도넛 움직임
    var scrollTopBtn = document.querySelector('.top');

    window.addEventListener('scroll',function(){
        var scrollY = window.scrollY; //함수 안쪽에 작성해야 스크롤할때마다의 값을 확인할 수 있다.

        if(scrollY < 100){
            scrollTopBtn.classList.remove('on','ab');
        }else if(scrollY >= 100 && scrollY < 2820){
            scrollTopBtn.classList.add('on');
            scrollTopBtn.classList.remove('ab');
        }else{
            scrollTopBtn.classList.add('ab');
        }

        if(divWidth < limitsize){
            if(scrollY < 100){
                scrollTopBtn.classList.remove('on','ab');
            }else if(scrollY >= 100 && scrollY < 4935){
                scrollTopBtn.classList.add('on');
                scrollTopBtn.classList.remove('ab');
            }else{
                scrollTopBtn.classList.add('ab');
            }
        }

        // 도넛



    });//스크롤 이벤트

    //top버튼_위로가기
    scrollTopBtn.addEventListener('click',function(e){
        e.preventDefault();
        window.scroll({top:0,left:0,behavior:'smooth'})
    });


/* ------------------------------------------------------- */
}); //window.onload

/* 

*css속성값은 -없이 카멜케이스로 작성
"background-color":"red"
box.style.backgroundColor = "red";

*css 값을 여러개 넣을 때
box.style.cssText = "color:#000; background-color: red;";

element.textContent = "Text"
*/