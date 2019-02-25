$(function () {
  const myFunction = function () {
      const productId = $(this).attr("data-productId");
      const stockQuantity = $(`input#product-${productId}`).val();
      const product = $(this).attr('data-ProdName');
      const department = $(this).attr('data-department');
      const price = $(this).attr('data-Price');
      const updatedProduct = {
          product_name: product,
          department_name: department,
          price: price,
          stock_quantity: stockQuantity
      };

      $.ajax({
          url: `/api/products/${productId}`,
          method: "PUT",
          data: updatedProduct
      }).then(function (data) {
          if (data.success) {
              console.log(product, "'s stock has been updated ")
              $.get(`/api/products/${productId}`).then(function (data) {
                  console.log(data);
              })
          }
          else {
              $.get(`/api/products/${productId}`).then(function (data) {
                  console.log(data);
              })

          }
          //when the checkout button is clicked, the quatity (stock_quantity) of the specific
          //item is updated in the overall inventory
      })

  }
  $('.checkout-button').on('click', myFunction);
});

//when checkout button is clicked

//loop through all items in the cart and do the following:
      // attain database current stock for this item specifically
      //update database stock versus quantity bought by user
      // re-render stock amounts on main item page