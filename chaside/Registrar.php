<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>consulta db</title>
    <style type="text/css">
      table {
        border: solid 2px #000000;
        border-collapse: collapse;             
      }
     
      th, h1 {
        background-color: #ffffff;
      }

      td,
      th {
        border: solid 1px #000000;
        padding: 2px;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <form action="../menu.html">
      <button>Menu</button>
    </form>
  </body>
</html>

<?php
  //validamos datos del servidor
 $host = "localhost"; 
$user = "root";  
$pass = "1234";  

  //conetamos al base datos
  $connection = mysqli_connect($host, $user, $pass);

  //hacemos llamado al imput de formuario
  $interes = $_POST["inte"];
  $nombre = $_POST["nreg"];
  $aptitud = $_POST["apt"];

  //verificamos la conexion a base datos
  if(!$connection) {
    echo "No se ha podido conectar con el servidor" . mysqli_error();
  }else{
    echo "<b><h3>Hemos conectado al servidor</h3></b>";
  }
  
  //indicamos el nombre de la base datos
  $datab = "chaside";
  //indicamos selecionar ala base datos
  $db = mysqli_select_db($connection,$datab);

  if (!$db){
    echo "No se ha podido encontrar la Tabla";
  }else{
    //insertamos datos de registro al mysql xamp, indicando nombre de la tabla y sus atributos
    $instruccion_SQL = "INSERT INTO chaside(Nombre, ResInteres, ResAptitud) VALUES ('$nombre','$interes','$aptitud')";
    
    $resultado = mysqli_query($connection,$instruccion_SQL);

    if($resultado){
      echo "<h2><p>Registro exitoso</p></h2>";
    }
  }
          
  mysqli_close( $connection );

  echo'<a href="menu.html"> Volver Atrás</a>';
?>