<!DOCTYPE html>
<html>
  <head>
    <title>Cart Quantity</title>
  </head>
  <body>
    <button onclick="
      console.log(`Cart quantity: ${cartQuantity}`);
    ">Show Quantity</button>

    <button onclick="
      cartQuantity++;
      console.log(`Cart quantity: ${cartQuantity}`);
    ">Add to Cart</button>

    <button onclick="
      cartQuantity += 2;
      console.log(`Cart quantity: ${cartQuantity}`);
    ">+2</button>

    <button onclick="
      cartQuantity = cartQuantity + 3;
      console.log(`Cart quantity: ${cartQuantity}`);
    ">+3</button>

    <button onclick="
      cartQuantity += 4;
      console.log(`Cart quantity: ${cartQuantity}`);
    ">+4</button>

    <button onclick="
      cartQuantity += 5;
      console.log(`Cart quantity: ${cartQuantity}`);
    ">+5</button>

      <button onclick="
      cartQuantity = cartQuantity - 1;
      console.log(`Cart quantity: ${cartQuantity}`);
    ">Remove from cart</button>

    <button onclick="
      cartQuantity = 0;
      console.log('Cart was reset.');
      console.log(`Cart quantity: ${cartQuantity}`);
    ">Reset Cart</button>

    <script>
      let cartQuantity = 0;
    </script>
  </body>
</html>
