<?php
	require 'script/connect_db.php';

	$result = $conn->query(
		'SELECT * FROM users WHERE pass = "' . $_POST['fpass'] . '" AND login = "' . $_POST['flogin'] . '"'
	);

	if( $result->num_rows != 1 ){
		header("Location: http://localhost/air-company/login?error=1");
	}else{
		session_start();
		$row = $result->fetch_assoc();
		$_SESSION['user_id'] = $row['id'];
		echo 'session: ' . $_SESSION['user_id'];
		
		header("Location: http://localhost/air-company/orders");
		//exit();
	}
?>