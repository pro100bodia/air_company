<?php
$str = '{"z1":{"z2":{"z3":"bogdan_xxx"}}}';

$obj = json_decode($str);
print $obj->{'z1'}->{'z2'}->{'z3'};
?>