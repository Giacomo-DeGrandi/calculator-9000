<?php

namespace php\Db;



use PDO;

Abstract Class Database{

    function connect()
    {

        $server="localhost";
        $username="root";
        $password="";
        $database="calc";

        $dsn = "mysql:host=$server; dbname=$database; charset=UTF8";
        return new PDO($dsn, $username, $password);
    }

    function selectQuery($sql, $p = null)
    {
        if ($p === null) {
            $r = $this->connect()->query($sql);
        } else {
            $r = $this->connect()->prepare($sql);
            $r -> execute($p);
        }
        return $r;
    }

}