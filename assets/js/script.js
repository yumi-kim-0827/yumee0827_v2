$(document).ready(function(){

    window.onload = () => {
        // 스크롤 이벤트를 감지하는 이벤트 리스너를 만들어줍니다.
        window.addEventListener('scroll', function () {
            console.log('스크롤 이벤트 감지!!')
            const distanceFromHtml =  window.pageYOffset;
            console.log('HTML 시작점으로부터의 거리', distanceFromHtml);
            const visual_img = document.querySelector('.section1 .scroll_visual_area .img_wrap img');

            if(distanceFromHtml < 901){
                visual_img.src ='images/scroll_1.jpg';
            }else if(distanceFromHtml >902, distanceFromHtml < 1099){
                visual_img.src ='images/scroll_2.jpg';
            }else if(distanceFromHtml >1100, distanceFromHtml < 1299){
                visual_img.src ='images/scroll_3.jpg';
            }else{
                visual_img.src ='images/scroll_4.jpg';
            }
        });
    };

    //타이틀 밑줄 애니메이션
    function animate_1(){
        var $svg = $('svg').drawsvg({
            duration: 3000,
        });
        $svg.drawsvg('animate');
    }
    animate_1();
    setInterval(animate_1, 4000);


    if (window.matchMedia("(min-width:768px)").matches){
        //click area  애니메이션
        $(".section3 .click_area ul").mouseenter(function(){
            $(".section3 .click_area ul").animate({top: '-35px'});
        });
        $(".section3 .click_area ul").mouseleave(function(){
            $(".section3 .click_area ul").animate({top: '0'});
        });
        $(".section3 .emoji_ani").mouseenter(function(){
            $(".section3 .emoji_ani img").stop().animate({zoom:1.2});
        });
        $(".section3 .emoji_ani").mouseleave(function(){
            $(".section3 .emoji_ani img").stop().animate({zoom:1});
        });
    }
    
    

    //GSAP 애니메이션 라이브러리 적용(pc만)
    
    gsap.registerPlugin(ScrollTrigger);
    //section1 메인 이미지 크기 스크롤 애니메이션
    gsap.to('.section1 .scroll_visual_area .img_wrap', {
        width:'100vw',
        height:'200vh',
        borderRadius:'800',
        scrollTrigger:{
            trigger:'.section1 .scroll_visual_area .img_wrap',
            start:'top bottom',
            scrub:true
        }
    });
    //section1 매인 배경색 스크롤 애니메이션
    gsap.to('.section1 .scroll_visual_area', {
        backgroundColor:'#333',
        scrollTrigger:{
            trigger:'.section1 .scroll_visual_area .img_wrap',
            start:'center center',
            scrub:true,
        }
    });
    //header 스크롤 위로 숨겨지는 애니메이션
    gsap.to('header', {
        yPercent:-100,
        scrollTrigger:{
            trigger:'header',
            start:'100px',
            scrub:1,
        }
    });
    //카테고리 썸네일 이미지 애니메이션
    const img_wraps = gsap.utils.toArray('.section2 .list_img_wrap');
    const listbox = gsap.utils.toArray('.section2 .list_box');
    img_wraps.forEach(box => {
    gsap.to(box, { 
        width:'100%',
        scrollTrigger:{
            trigger:box,
            start:'top bottom',
            end:'top center',
            scrub:2,
        }
    })
    });
    //section4 텍스트 띠 스크롤 애니메이션
    gsap.to('.section4 .slide_text_area:first-child .slide_text', {
        left:'0',
        scrollTrigger:{
            trigger:'.section4 .slide_text_area',
            start:'top bottom',
            scrub:true,
        }
    });
    //section4 텍스트 띠 스크롤 애니메이션
    gsap.from('.section4 .slide_text_area:last-child .slide_text', {
        left:'0',
        scrollTrigger:{
            trigger:'.section4 .slide_text_area',
            start:'top bottom',
            scrub:true,
        }
    });
    //section5 버튼 화살표 마우스호버 애니메이션
    gsap.utils.toArray(".button_list").forEach((button_list) => {
    let arrows = button_list.querySelector(".hover_arrows"),
        tl = gsap.timeline({ paused: true });
    tl.to(arrows, { 
        left: 0,
        opacity:1
     });
    button_list.addEventListener("mouseenter", () => tl.timeScale(0.4).play());
    button_list.addEventListener("mouseleave", () => tl.timeScale(3).reverse());
    });
    //section6 'DOWN-' 텍스트 스크롤 슬라이드 애니메이션
    gsap.from('.section6 p:first-child', {
        left:'150',
        scrollTrigger:{
            trigger:'.section6',
            start:'top center',
            scrub:true,
        }
    });
    //section6 'LOAD HERE-' 텍스트 스크롤 슬라이드 애니메이션
    gsap.from('.section6 p:last-child', {
        left:'-150',
        scrollTrigger:{
            trigger:'.section6',
            start:'top center',
            scrub:true,
        }
    });
  });