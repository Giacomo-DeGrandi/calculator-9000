<?php

namespace php\SaveController;

require_once('Db.php');
require_once('SaveModel.php');

use php\Db\Database;
use php\SaveModel\Save as SaveM;


header('application/x-www-form-urlencoded; charset=UTF-8; application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');


    $x = $_POST;
    $res = array_shift($x);
    $x = array_flip($_POST);
    $calc = array_shift($x);
    $expr = $calc . '=' . $res;



Class Save extends Database
{

    public function saveCalc($myCalc): bool|array
    {
        return (new SaveM)->saveCalc($myCalc);
    }
    public function getAllCalc(): bool|array
    {
        return (new SaveM)->getAll();
    }


}

$saveC = new Save;
$saved = $saveC->saveCalc($expr);
$calcs = $saveC->getAllCalc();

print_r(json_encode($calcs));

