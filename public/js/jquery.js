(function ($) {
    //This funciton is what causes the Nav Bar to fade when scrolled
    // $(window).scroll(function () {
    //     if ($(this).scrollTop() > 100) {
    //         $('.nav-top').fadeTo('fast', 0.1);
    //     } else {
    //         $('.nav-top').fadeTo('fast', 1.0);
    //     }
    // });
    /*This function hides the inventory and shows the cart when the view
 cart button is clicked */
    const hideJumbotron = function () {
        $('.bye-bye').addClass('hide');
        $('.hello').removeClass('hide');
        $('.checkout').addClass('hide');
        
    }
    $('.view-cart').on('click', hideJumbotron);

    // $('#product-info').on('click', '.addOne', function(){
    //     $('.inlineFormInput').empty();
    // })

    /* This function hides the cart and shows the inventory when the back button is clicked */
    const hideCart = function () {
        $('.hello').addClass('hide');
        $('.bye-bye').removeClass('hide');
        $('.checkout').addClass('hide');
    }
    $('.view-inventory').on('click', hideCart);

    /* This function hides the cart and jumbotron and shows the checkoutpage */
    const showCheckout = function () {
        $('.hello').addClass('hide');
        $('.bye-bye').addClass('hide');
        $('.checkout').removeClass('hide');
    }
    $('.view-checkout').on('click', showCheckout);
    $('.button-div').on('click', '.checkout-button', showCheckout);
    // $('.addOne').on('click', showCheckout);

    
})(jQuery);