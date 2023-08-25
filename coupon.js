
window.addEventListener('scroll', function(){
if (0 == window.scrollY){
    $('.navbar-brand').css('font-size', '30px');
}
else{
    $('.navbar-brand').css('font-size', '20px');
}
})
$('.essay').on('scroll', function(){
var 스크롤양 = document.querySelector('.essay').scrollTop;
var 실제높이 = document.querySelector('.essay').scrollHeight;
var 높이 = document.querySelector('.essay').clientHeight;
if (스크롤양 + 높이 >= 실제높이 - 1){
    alert('귀하는 모든 개인정보 수집에 동의하였습니다.');
}
})
window.addEventListener('scroll', function(){
var 스크롤양 = document.querySelector('html').scrollTop;
var 높이 = document.querySelector('html').clientHeight;
var 실제높이 = document.querySelector('html').scrollHeight;
$('.nav-line').css('width', +((스크롤양) / (실제높이 - 높이)) * 105+'%');
})









var picture = 1;

$('.next').on('click', function(){
if (picture != 5){
    $('.slide-container').css('transform', 'translateX(-'+picture * 60+'vw)');
    $('#img'+ picture).removeClass('slide-box-change');
    $('#img' + (picture + 1)).addClass('slide-box-change');
    picture+=1;
}

})

$('.prev').on('click', function(){
if (picture != 1){
    $('.slide-container').css('transform', 'translateX(-'+((picture * 60)-120) +'vw)');
    $('#img'+ picture).removeClass('slide-box-change');
    $('#img' + (picture - 1)).addClass('slide-box-change');
    picture-=1;
}
})


$('#img1').addClass('slide-box-change');
$('.slide-1').on('click', function(){
    $('.slide-container').css('transform', 'translateX(0vw)');
    $('#img1').addClass('slide-box-change');
    $('#img2').removeClass('slide-box-change');
    $('#img3').removeClass('slide-box-change');
    $('#img4').removeClass('slide-box-change');
    $('#img5').removeClass('slide-box-change');
    picture = 1;
})
$('.slide-2').on('click', function(){
    $('.slide-container').css('transform', 'translateX(-60vw)');
    $('#img1').removeClass('slide-box-change');
    $('#img2').addClass('slide-box-change');
    $('#img3').removeClass('slide-box-change');
    $('#img4').removeClass('slide-box-change');
    $('#img5').removeClass('slide-box-change');
    picture = 2;
})
$('.slide-3').on('click', function(){
    $('.slide-container').css('transform', 'translateX(-120vw)');
    $('#img1').removeClass('slide-box-change');
    $('#img2').removeClass('slide-box-change');
    $('#img3').addClass('slide-box-change');
    $('#img4').removeClass('slide-box-change');
    $('#img5').removeClass('slide-box-change');
    picture = 3;
})
$('.slide-4').on('click', function(){
    $('.slide-container').css('transform', 'translateX(-180vw)');
    $('#img1').removeClass('slide-box-change');
    $('#img2').removeClass('slide-box-change');
    $('#img3').removeClass('slide-box-change');
    $('#img4').addClass('slide-box-change');
    $('#img5').removeClass('slide-box-change');
    picture = 4;
})
$('.slide-5').on('click', function(){
    $('.slide-container').css('transform', 'translateX(-240vw)');
    $('#img1').removeClass('slide-box-change');
    $('#img2').removeClass('slide-box-change');
    $('#img3').removeClass('slide-box-change');
    $('#img4').removeClass('slide-box-change');
    $('#img5').addClass('slide-box-change');
    picture = 5;
})



$('#close').on('click', function(){
    $('.black-bg').removeClass('show-modal-black')
    $('.white-bg').removeClass('show-modal-white')
})
$('#open').on('click', function(){
    $('.black-bg').addClass('show-modal-black')
    $('.white-bg').addClass('show-modal-white')
})
$('#send').on('click', function(){
if($(':text').val() == '' || $(':password').val() == ''){
    alert('이메일과 비밀번호를 정확히 기입하세요.');
    return false;
}
if($(':password').val().length < 6){
    alert('비밀번호는 6자 이상이여야 합니다.')
    return false;
}
})
$(':text').on('change', function(){
    $(':text').css('border-color', 'black')
})
$(':password').on('change', function(){
    $(':password').css('border-color', 'black')
})
var i = 0;
$('#change-mode').on('click', function(){
    i += 1;
    if (i % 2 == 1){
        $('#change-mode').text('Light mode');
        $('#change-mode').css({'color': 'black', 'background-color': 'white'});
        $('body').css('color', 'white');
        $('.main-bg').css('background-color', 'black');
        $('.white-bg').css('background-color', 'black');
        $(':text').css('background-color', 'grey');
        $(':password').css('background-color', 'grey');
        $('input').addClass('white-placeholder');
        $('body').css('background-color', 'rgb(123, 124, 137)')
        $('.alert').addClass('alert-change');
        $('.essay').css('background-color', 'black')
    }
    else{
        $('#change-mode').text('Dark mode')
        $('#change-mode').css({'color': 'white', 'background-color': 'black'});
        $('body').css('color', 'black');
        $('.main-bg').css('background-color', 'lightgrey');
        $('.white-bg').css('background-color', 'white');
        $(':text').css('background-color', 'white');
        $(':password').css('background-color', 'white');
        $('input').removeClass('white-placeholder');
        $('body').css('background-color', 'rgb(200, 199, 227)');
        $('.alert').removeClass('alert-change');
        $('.essay').css('background-color', 'white')
    }

})
var second = 60;
setInterval(function(){
second -= 1;
if (second <= 0){
    $('.alert').hide()
}
$('#more-give-text').text(second);
}, 1000)



