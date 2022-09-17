<?php

namespace php\SaveModel;

require_once('Db.php');

use php\Db\Database;

class Save extends Database
{
    public function saveCalc($myCalc): bool|array
    {
        $sql = 'INSERT INTO calc (`calc`) VALUES ( :calc ) ';
        $params = [':calc' => $myCalc];
        $check = $this->selectQuery($sql, $params);
        return true;
    }

    public function getAll(): bool|array
    {
        $sql= 'SELECT * FROM calc;' ;
        $check = $this->selectQuery($sql);
        return $check->fetchAll();
    }
}
