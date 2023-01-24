<?php

 $_POST = json_decode(file_get_contents("php://input"),true);//for JSON
echo json_encode ($_POST);//for JSON
// echo var_dump($_POST); //for text format
// echo  "php echo";