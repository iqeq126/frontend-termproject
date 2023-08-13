// 뒤로 가기를 막는 함수
window.history.forward(); function noBack(){ 
    window.history.forward();
}

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 5,
    breakpoints : { // 반응형 설정이 가능 width값으로 조정
        '@2.0': {
            slidesPerView : 5,
            spaceBetween: 10,
        },

        '@4.0': {
            slidesPerView : 7,
            spaceBetween: 10,
        },

        '@6.0': {
            slidesPerView : 12,
            spaceBetween: 10,
        },

    },
    
    // Optional parameters
    direction: 'horizontal',

    
    // If we need pagination
    pagination: {
    el: '.swiper-pagination',
    autoHeight : true,
    clickable : true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
    },

    // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    autoHeight : true,
    },

    // And if we need scrollbar
    scrollbar: {
    el: '.swiper-scrollbar',
    },
});