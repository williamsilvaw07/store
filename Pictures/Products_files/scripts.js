// phone navbar toggle 

const toggleButton = document.querySelector('.toggle-menu');
const navBar = document.querySelector('.nav-bar');
toggleButton.addEventListener('click', () => {
    navBar.classList.toggle('toggle');
});



//end



//fixed header



$(window).scroll(function () {
    if ($(window).scrollTop() > 1) {

        $("header").addClass('header_fixed')
        $(".navbar li").addClass("nav_fiexed")
        $(".logo ").addClass('logo_fixed')
        $(".toggle-menu").addClass('toogle_fixed')
        $(".icon").addClass('icon_scroll')
        $(".flaticon-shopping-cart:before ").addClass('scroll_icon')
        $(".cart_number").addClass('cart_number_scroll')
    }
})

$(window).scroll(function () {
    if ($(window).scrollTop() < 1) {

        $("header").removeClass('header_fixed')
        $(".navbar li").removeClass("nav_fiexed")
        $(".logo ").removeClass('logo_fixed');
        $(".toggle-menu").removeClass('toogle_fixed')
        $(".icon").removeClass('icon_scroll')
        $(".flaticon-shopping-cart:before ").removeClass('scroll_icon')
        $(".cart_number").removeClass('cart_number_scroll')

    }
})


///end




////products cards 




$(".small_business").mouseover(function () {
    $(".small_business").toggleClass("small_business_clicked")
    $(".add_cart_small").addClass("add_cart_black")

})



$(".small_business").mouseout(function () {
    $(".small_business").toggleClass("small_business_clicked")
    $(".add_cart_small").removeClass("add_cart_black")

})









$(".self_business").mouseover(function () {
    $(".self_business").toggleClass("small_business_clicked")
    $(".add_cart_small").addClass("add_cart_black")

})



$(".self_business").mouseout(function () {
    $(".self_business").toggleClass("small_business_clicked")
    $(".add_cart_small").removeClass("add_cart_black")

})









$(".small_business").mouseover(function () {
    $(".small_business").toggleClass("small_business_clicked")
    $(".add_cart_small").addClass("add_cart_black")

})



$(".small_business").mouseout(function () {
    $(".small_business").toggleClass("small_business_clicked")
    $(".add_cart_small").removeClass("add_cart_black")

})
