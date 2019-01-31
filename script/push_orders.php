<?php
	require 'connect_db.php';
	
	foreach($_POST as $key => $value)
	{
		echo $key . ' = ' . $value . ', ';
	}
	
	#convert for cities
	switch( $_POST['ffrom'] )
	{
		case 1: $_POST['ffrom'] = "Київ"; break;
		case 2: $_POST['ffrom'] = "Варшава"; break;
		case 3: $_POST['ffrom'] = "Стамбул"; break;
		case 4: $_POST['ffrom'] = "Нью-Йорк"; break;
	}
	switch( $_POST['fto'] )
	{
		case 1: $_POST['fto'] = "Київ"; break;
		case 2: $_POST['fto'] = "Варшава"; break;
		case 3: $_POST['fto'] = "Стамбул"; break;
		case 4: $_POST['fto'] = "Нью-Йорк"; break;
	}

	#convert for classes
	switch( $_POST['class'] )
	{
		case 0.1: $_POST['class'] = "Економ клас"; break;
		case 0.2: $_POST['class'] = "Бізнес клас"; break;
		case 0.3: $_POST['class'] = "Комфорт клас"; break;
	}

	#if selector cargo class=""
	if( $_POST['selector'] == "Вантажне" ){
		$_POST['class'] = "";
		$_POST['number'] = "";
	}else{
		$_POST['fweight'] = "";
	}

	$values = "";
	foreach($_POST as $key => $value)
	{
		$values .= "'" . $value . "', ";
	}
	$values = substr($values, 0, -2);
	echo 'processed data: ' . $values;

	$conn->query('
		INSERT INTO orders(name, tel, department, destination, order_date, type, class, pas_num, weight, price) VALUES(' . $values . ');
	');

	//header("Location: http://localhost/air-company/");
	//exit();
?>