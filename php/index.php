<?php
session_start();

header('application/x-www-form-urlencoded; charset=UTF-8; application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: *');


$x = $_POST;
$x = array_flip($x);
$x = array_shift($x);
$x = str_replace("_", "", $x);

$numsArr = preg_split("/[+\/\-*]+/", $x);
$sign = preg_split("/[0-9]+/", $x);
$sign = $sign[1];


function calculate($num1, $sign, $num2){
    switch($sign){
        case "+":
            $r = $num1 + $num2;
            break;
        case "-":
            $r = $num1 - $num2;
            break;
        case "/":
            $r = $num1 / $num2;
            break;
        case "*":
            $r = $num1 * $num2;
            break;
    }
    return $r;
}


$test = calculate($numsArr[0], $sign, $numsArr[1]);
$calcToBeSaved = $numsArr[0].$sign.$numsArr[1].'='.$test;
print_r(json_encode($calcToBeSaved));



/*
 *  TO CHECK IF WORKS
 *
 *  USE    php -S localhost:<port number>
 *  in the RootDirectory
 *
 *
 *
 *
$numsArr = preg_split("/[+:\-*]+/", $x);
$sign = preg_split("/[0-9.]+/", $x);
$sign = $sign[1];

function calculate($num1, $sign, $num2){
    switch($sign){
        case "+":
            $r = $num1 + $num2;
            break;
        case "-":
            $r = $num1 - $num2;
            break;
        case "/":
            $r = $num1 / $num2;
            break;
        case "*":
            $r = $num1 * $num2;
            break;
    }
    return $r;
}

$test = calculate($numsArr[0], $sign, $numsArr[1]);


print_r($numsArr);
print_r($sign);
print_r($test);



header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');


if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
}
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
}

 */