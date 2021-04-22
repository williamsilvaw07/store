// phone navbar toggle

const toggleButton = document.querySelector(".toggle-menu");
const navBar = document.querySelector(".nav-bar");
toggleButton.addEventListener("click", () => {
    navBar.classList.toggle("toggle");
});

//end
//fixed header

$(window).scroll(function () {
    if ($(window).scrollTop() > 1) {
        $("header").addClass("header_fixed");
        $(".navbar li").addClass("nav_fiexed");
        $(".logo ").addClass("logo_fixed");
        $(".toggle-menu").addClass("toogle_fixed");
        $(".icon").addClass("icon_scroll");
        $(".flaticon-shopping-cart:before ").addClass("scroll_icon");
        $(".cart_number").addClass("cart_number_scroll");
    }
});

$(window).scroll(function () {
    if ($(window).scrollTop() < 1) {
        $("header").removeClass("header_fixed");
        $(".navbar li").removeClass("nav_fiexed");
        $(".logo ").removeClass("logo_fixed");
        $(".toggle-menu").removeClass("toogle_fixed");
        $(".icon").removeClass("icon_scroll");
        $(".flaticon-shopping-cart:before ").removeClass("scroll_icon");
        $(".cart_number").removeClass("cart_number_scroll");
    }
});

///end

////products cards

$(".small_business").hover(function () {
    $(".small_business").toggleClass("small_business_clicked");
    $(".add_cart_small").toggleClass("add_cart_black");
});

$(".self_business").hover(function () {
    $(".self_business").toggleClass("small_business_clicked");
    $(".add_cart_self").toggleClass("add_cart_black");
});

$(".large_business").hover(function () {
    $(".large_business").toggleClass("small_business_clicked");
    $(".add_cart_large").toggleClass("add_cart_black");
});

const button = document.getElementsByClassName("btn_cart");
const cartbtn = document.querySelectorAll(".btn_cart");

let cartNumber = document.querySelector(".cart_number");
let cartNumbercount = 0;

var counter = 0;
let products = [];

cartbtn.forEach(function (btn) {
    console.log("btn", btn);
    btn.addEventListener("click", function (event) {
        let itemName =
            event.target.previousElementSibling.previousElementSibling
            .previousElementSibling.textContent;

        const price =
            event.target.previousElementSibling.previousElementSibling.children[0]
            .textContent;
        console.log("price", price);

        // var buttonCart = cartbtn.id;

        ////get price and creat element
        // let productPriceSection = document.querySelector(".Price");
        // window.productPrice = document.createElement("h5");
        // productPrice.classList.add("product_cart");
        // productPrice.classList.add("product_cart_price");

        // var priceString = String(price);
        // console.log("priceString", priceString)

        // let productPriceJoin = productPriceSection.appendChild(productPrice);
        // console.log("productPriceJoin", productPriceJoin);
        // window.localStorage.setItem("productprice", JSON.stringify(priceString));

        // var productPriceSavedJson = JSON.parse(
        //   window.localStorage.getItem("productprice")
        //   );
        //   console.log("productPriceSavedJson", productPriceSavedJson)
        // productPrice.innerHTML = productPriceSavedJson;

        ///end

        ///get titel and creat element
        let productTitleSection = document.querySelector(".Item");
        let productTitle = document.createElement("h5");
        productTitle.classList.add("product_cart");
        let productTitleJoin = productTitleSection.appendChild(productTitle);
        productTitle.innerHTML = itemName;
        ///end

        ///get price and creat element
        let productPrSection = document.querySelector(".Pricing");
        let productPr = document.createElement("h5");
        productPr.classList.add("product_cart");
        let productPriceJoin = productPrSection.appendChild(productPr);
        productPriceJoin.innerHTML = price;
        ///end

        ////add delete function
        const deleteIcon =
            event.target.nextElementSibling.nextElementSibling.textContent;

        let productdeleteSection = document.querySelector(".quantity");
        let productDelete = document.createElement("i");
        productDelete.id = "delete" + counter++;
        productDelete.classList.add("material-icons");
        productDelete.classList.add("product_cart");
        productdeleteSection.appendChild(productDelete);
        productDelete.innerHTML = deleteIcon;

        ///end

        let addedTocart = event.target.nextElementSibling;

        products.push({
            price,
            itemName,
            addedTocart,
            deleteIcon
        });
        window.localStorage.setItem("products", JSON.stringify(products));

        cartNumbercount++;
        cartNumber.innerHTML = cartNumbercount;
        let buttonCheck = event.target.id;

        var buttonCart = cartbtn.id;
        let bntadd = event.target;

        $(this).addClass("hide_button");
        $(addedTocart).addClass("added_cart_show");

        bntadd.disabled = true;

        productDelete.addEventListener("click", function () {
            productTitle.innerHTML = "";
            productPrice.innerHTML = "";
            productPr.innerHTML = "";
            productDelete.innerHTML = "";
            cartNumbercount--;

            cartNumber.innerHTML = cartNumbercount;
            $(addedTocart).removeClass("added_cart_show");
            $(bntadd).removeClass("hide_button");

            bntadd.disabled = false;
        });
    });
});

let productPrice = document.querySelector(".product_cart_price");
var productPriceText = productPrice.textContent;
var priceString = String(productPrice);

window.addEventListener("load", (event) => {
    console.log("page is fully loaded");

    let data = window.localStorage.getItem("products");
    let products = JSON.parse(data);
    if (products !== null) {
        products.forEach((e, i) => {
            let productTitleSection = document.querySelector(".Item");
            let productTitle = document.createElement("h5");
            productTitle.classList.add("product_cart");
            productTitleSection.appendChild(productTitle);
            productTitle.innerHTML = e.itemName;
            ///end

            let productPrSection = document.querySelector(".Price");
            let productPr = document.createElement("h5");
            productPr.classList.add("product_cart");
            productPrSection.appendChild(productPr);
            productPr.innerHTML = e.price;
            ///end

            ////add delete function
            // const deleteIcon =
            // event.target.nextElementSibling.nextElementSibling.textContent;

            let productdeleteSection = document.querySelector(".quantity");
            let productDelete = document.createElement("i");
            productDelete.id = "delete" + i;
            productDelete.classList.add("material-icons");
            productDelete.classList.add("product_cart");
            productdeleteSection.appendChild(productDelete);
            productDelete.innerHTML = e.deleteIcon;
            ///end

            // let addedTocart = event.target.nextElementSibling;

            cartNumbercount++;

            cartNumber.innerHTML = cartNumbercount;
            // let buttonCheck = event.target.id;

            var buttonCart = cartbtn.id;
            let bntadd = event.target;

            $(this).addClass("hide_button");
            $(e.addedTocart).addClass("added_cart_show");
        });
    }
    console.log("products", products);

    $(document).click(function (evt) {
        console.log("==> ", productPrice.textContent);
        window.localStorage.setItem(
            "productprice",
            JSON.stringify(productPrice.textContent)
        );
    });
    // var productPriceSaved = window.localStorage.getItem("productprice");
    // console.log("productPriceSaved", productPriceSaved);
    // let productPriceSavedJson = JSON.parse(productPriceSaved);
    // console.log("productPriceSavedJson", productPriceSavedJson);
});
$("#cart_hamburger").click(function () {

    $(".basket_overlayer").toggleClass("basket_overlayer_open");

    $(".cart_number").toggleClass("cart_number_open_cart")
})




$("#cart_btn").click(function () {

    $(".basket_overlayer").toggleClass("basket_overlayer_open");

    $(".cart_number").toggleClass("cart_number_open_cart")
})


$(".cross").click(function () {
    $(".basket_overlayer").toggleClass("basket_overlayer_open");

    $(".cart_number").toggleClass("cart_number_open_cart")


})
