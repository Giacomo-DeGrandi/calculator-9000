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

    public function getAll()
    {
        $sql= 'SELECT * FROM users WHERE email = :email ; ' ;
        $params = [':email' => $email ];
        $check = $this->selectQuery($sql,$params);
        return $check->fetchAll();
    }
}
