<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>Log in</title>
		<style>
			#authorization{
				width: 300px;
				position: absolute;
				margin: auto;
				left: 0;
				top: 0;
				right: 0;
				bottom: 0;
			}
			#attention{
				color: red;
			}

			input{
				height: 20px;
				margin-bottom: 5px;
			}
		</style>
		<script type="text/javascript" src="../libs/jquery-3.3.1.min.js"></script>
	</head>
	<body>
		<form method="post" action="login_action" id="authorization">
			<h3>Air Company Log In</h3>
			<input id="flog" name="flogin" type="text" / >
			<input id="fpas" name="fpass" type="password" /><br>
			<input type="submit" val="Увійти"><br>
			<?php 
				if( isset($_GET['error']) ){
					echo "<span id=" . "'attention'" . ">Ім'я або пароль введені неправильно</span>";
				}
			?>
		</form>
	</body>	
</html>