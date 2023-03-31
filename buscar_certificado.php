<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "certificados";

$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn) {
	die("Connection failed: " . mysqli_connect_error());
}

$dni = $_POST["dni"];

$sql = "SELECT * FROM certificados WHERE dni = '$dni'";
$result = mysqli_query($conn, $sql);

$certificados = array();
while ($row = mysqli_fetch_assoc($result)) {
	$certificados[] = $row;
}

echo json_encode($certificados);

mysqli_close($conn);
?>
