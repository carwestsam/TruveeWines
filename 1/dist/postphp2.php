<?php

$json = file_get_contents('php://input');
$obj=json_decode($json);
$bjson = json_encode( $obj );
echo $bjson;
echo $obj->name;
echo "hoho";

?>


