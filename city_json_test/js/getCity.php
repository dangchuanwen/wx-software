<?php

$fileName = 'province.json';
$data = file_get_contents($fileName);

$data = json_decode($data);

$head_letter = $_GET['head_letter'];
$result = [];
foreach ($data as $k1 => $v1) {
    $value = (array)$v1;
    foreach ($value as $k2 => $v2) {
        if ($head_letter === $k2){
            foreach ($v2 as $k3 => $v3) {
                $province = (array)$v3;
                $result[] = $province['address'];
            }
        }else{
            break;
        }
    }
}
echo json_encode($result);


