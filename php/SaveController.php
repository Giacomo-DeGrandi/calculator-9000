<?php

namespace php\SaveController;

require_once('Db.php');
require_once('SaveModel.php');

use php\Db\Database;
use php\SaveModel\Save as SaveM;


header('application/x-www-form-urlencoded; charset=UTF-8; application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: *');


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


if(!empty($_POST))
{

    $x = $_POST;
    $res = array_shift($x);
    $x = array_flip($_POST);
    $calc = array_shift($x);
    $expr = $calc . '=' . $res;

    $saved = $saveC->saveCalc($expr);
    print_r(json_encode("saved"));

} else {
    $calcs = $saveC->getAllCalc();
    print_r(json_encode($calcs));
}





