// 유튜브 웹스토리보이 참고

$(function(){

    // 메뉴 시작
    $(".nav > ul > li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown();
    })
    $(".nav > ul > li").mouseout(function(){
        $(this).find(".submenu").stop().slideUp();
    })
    // 메뉴 끝

    // 슬라이드 시작
    let currentindex = 0;
    $(".sliderwrap").append($(".sliding").first().clone(true));

    setInterval(()=>{
        currentindex++;
        $(".sliderwrap").animate({marginTop: -100 * currentindex + "vh"}, 600);

        if(currentindex ==3){
            setTimeout(()=>{
                $(".sliderwrap").animate({marginTop: 0}, 0);
                currentindex = 0;
            }, 700);
        }
    }, 3000);
    // 슬라이드 끝

    // 모달 레이어 팝업창 시작
    $(".popup-btn").click(function(){
        $(".popup-review").show();
    })
    $(".popup-close").click(function(){
        $(".popup-review").hide();
    })
    // 모달 레이어 팝업창 끝
});