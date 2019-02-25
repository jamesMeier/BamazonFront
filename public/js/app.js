$(function () {
    $.ajax({
        url: '/api/products',
        method: 'GET'
    }).then(function (response) {
        //Loops through the response and dynamically adds the information on the product selection page
        for (let i = 0; i < response.length; i++) {

            $('#product-info').append(`
          <tr>
          <th>${response[i].product_name}</th>
            <td>${response[i].stock_quantity} units</td>
            <td>$${response[i].price}.99</td>
            <td><form class="form-inline">
            <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Enter Quantity</label>
            <form>
          <div class="form-row align-items-center">
          <div class="col-auto">
           <label class="sr-only" for="inlineFormInput">Quantity</label>
          <input type="text" class="form-control mb-2 inlineFormInput" id="product-${response[i].id}" placeholder="Qty">
          </div>
            <button data-ProdName=${response[i].product_name} data-Quant=${response[i].stock_quantity} 
            data-Price=${response[i].price} data-department="${response[i].department_name}"
            data-productId=${response[i].id} type="submit" value="submit" class="btn btn-secondary my-1 addOne">Add to Cart</button>
        </form></td>
          </tr>)`);
        }
    });
    //This function adds items selected to the cart and appends them to the table
    const addToCart = function (event) {
        event.preventDefault();


        let itemId = $(this).attr("data-productId");
        let itemName = $(this).attr("data-ProdName");
        let itemPrice = $(this).attr('data-Price');
        let userQuantity = $(`input#product-${itemId}`).val();


        $.get(`/api/products/${itemId}`).then(function (data) {
            console.log(data)
            if (userQuantity > data.stock_quantity) {
                alert("Insufficient stock, please come back later.")
            } else {
                $(`#product-${itemId}`).val("")

                alert("item added");


                $('#cart-table').append(` 
      <tr>
      <th class="cart-item">${itemName}</th>
        <td class="cart-price">$${itemPrice}.99</td>
        <td class="cart-quantity">${userQuantity}</td>
      
        </tr> `);
                $('#checkout-table').append(`<tr>
        <th>${itemName}</th>
          <td>$${itemPrice}.99</td>
          <td>${userQuantity}</td>
          </tr>`);
                $('.button-div').empty();

                $('.button-div').append(`<button type="submit" class="btn btn-secondary my-1 checkout-button addCart"> Click to Checkout</button>`);
            }
        });



    }

    $("#product-info").on("click", ".addOne", addToCart);

    //This function empties the items in the cart when empty cart button clicked
    const emptyCart = function () {

        $('.cart-item').empty();
        $('.cart-price').empty();
        $('.cart-quantity').empty();
        $('.cart-counter').empty();
        $('.cart-total-price').empty();
    }
    $('.empty-cart').on('click', emptyCart);

    //This function adds to the cart count on the home page when add to car is clicked
    let count = 0;

    // $("#product-info").on('click', '.addOne', function () {
    //     count++;
    //     $(".cart-counter").html(count);
    // });
    //This on-click call back function sets the empty counter back to 0 when the car is emptied
    $('.empty-cart').on('click', function () {
        count = 0;
    });

    //This function adds items from the cart to the checkout screen when click to checkout is clicked
    // const addToCheckout = function () {
    //     let itemIdent = $('button').attr("data-productId");
    //     let item = $('.addOne').attr('data-ProdName');
    //     let price = $('.addOne').attr("data-Price");
    //     // let quantity = $('.addOne').attr('data-userQuant');
    //     let quantity = $(`input#product-${itemIdent}`).val();

    //     $('#checkout-table').append(`<tr>
    //     <th>${item}</th>
    //       <td>$${price}.99</td>
    //       <td>${quantity}</td>
    //       </tr>`);
    // }
    // $('.button-div').on('click', '.addCart', addToCheckout);

});

