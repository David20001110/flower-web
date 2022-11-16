// 滑動置錨點位置
$(function(){
    $(".menu a").click(function(){
        var btn = $(this).attr("href");/* 返回屬性與值 */
        var pos = $(btn).offset(); /* 抓取相對的座標位置 */
        $("html,body").animate({scrollTop: pos.top},1000); /* 變數pos的top(y軸) */
        /* $("html,body").animate({scrollTop: pos.top-$('#navbar')},1000); */
    });
});

// 滑動置卷軸位置
$("#gotop").click(function(){
    $("html,body").animate({scrollTop:0},1000);
}) /* 因為前面已經有document read"$(function)(){};" */

// 置點按鈕淡出淡入
$(window).scroll(function(){
    if($(this).scrollTop()>300){
        $("#gotop").stop().fadeTo(500,1);
    }
    else{
        $("#gotop").stop().fadeOut(0.5);
    }
});
//smoove
$('.smoove').smoove({
    offset: '30%'
})


// $(function(){
//     $(".menu a").click(function(){
//         var btn = $(this).attr("href");/* attr是屬性 返回屬性與值 */
//         var pos = $(btn).offset();
//         $("html,body").animate({scrollTop:pos.top},1000);
//     });
// });
