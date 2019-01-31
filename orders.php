<?php
	session_start();
	//echo 'session: ' . $_SESSION['user_id'];
	if(!isset($_SESSION['user_id'])){ 
	
		header("Location: http://localhost/air-company/login"); 
	}
?>
<style>
	table{
		min-width: 1275px;
	}
	td{
		border: 1px solid #000;
	}
</style>
<?php  
	require 'script/connect_db.php';

	$result = $conn->query('SELECT * FROM orders;');

	if ($result->num_rows > 0) {
		echo '<table>';
		echo "<tr style=" . "'background: #425ac0; color: #fff;'" . "><td>Дія</td> <td>Id</td> <td>Ім'я</td> <td>Телефон</td> <td>Пункт відправлення</td> <td>Пункт прибуття</td> <td>Дата</td> <td>Тип перевезення</td> <td>Клас</td> <td>Кількість пасажирів</td> <td>Вага вантажу</td> <td>Ціна</td></tr>";
		
		while($row = $result->fetch_assoc()) {
			echo '<tr>';
			echo '<td onclick="DropNote(this)" style="cursor: pointer" data-id="' . $row['id'] . '"><a href="#">Відмітити як опрацьований</a></td><td>' . $row['id'] . '</td><td>' . $row['name'] . '</td><td>' . $row['tel'] . '</td><td>' . $row['department'] . '</td><td>' . $row['destination'] . '</td><td>' . $row['order_date'] . '</td><td>' . $row['type'] . '</td><td>' . $row['class'] . '</td><td>' . $row['pas_num'] . '</td><td>' . $row['weight'] . '</td><td>' . $row['price'];
			echo '</tr>';
		}
	
		echo '</table>';
	} else {
		echo "0 results";
	}
	$conn->close();
?>

<form action="terminate.php">
	<input type="submit" value="Вийти" />
</form>

<script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<script type="text/javascript">
	var elem;
	function DropNote(par){
		elem = $(par);

		jQuery.post("delete_order.php",
					{
						id: elem.attr("data-id")
					},
					function(){
						elem.closest('tr').css('display', 'none');
					});
	}
</script>