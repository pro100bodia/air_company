<?php 
	require 'script/connect_db.php';

	$conn->query('DELETE FROM orders WHERE id="' . $_POST['id'] . '"');
?>