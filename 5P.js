
<!DOCTYPE html>
<html>
  <head></head>
  <body>
    <button onclick="
      calculation += '1';
      console.log(calculation);
    ">1</button>
    
    <button onclick="
      calculation += '2';
      console.log(calculation);
    ">2</button>

    <button onclick="
      calculation += '3';
      console.log(calculation);
    ">3</button>

    <button onclick="
      calculation += ' + ';
      console.log(calculation);
    ">+</button>

    <button>=</button>
    
    <script>
      let calculation = '';
    </script>
  </body>
</html>
