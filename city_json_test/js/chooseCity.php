<?php

$fileName = "cityData.min.json";
$data = file_get_contents($fileName);
$data = json_decode($data);

$province = $_GET['province'];
$result = [];
if ($province !== 'all'){
    foreach ($data as $k => $v) {
        $value = (array)$v;
        if ($value['n'] === $province){
            foreach ($value['s'] as $k1 => $v1) {
                $value1 = (array)$v1;
                $result [] = $value1['n'];
            }
            break;
        }
    }
}else {
    foreach ($data as $k => $v) {
        $value = (array)$v;
        $result[] = $value['n'];
    }
    
}
echo json_encode($result);