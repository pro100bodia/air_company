<?php	
	$hostname = "localhost";
	$username = "root";
	$password = "";
	$database = "air_company";

	if( !isset( $conn ) ){
		$conn = new mysqli( $hostname, $username, $password, $database );
	}

	if( $conn->connect_error ){
		die( "failed to connect to database" . $conn->connect_error );
	}

	$conn->set_charset("utf8mb4");
?>