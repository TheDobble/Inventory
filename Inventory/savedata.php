<?php

$con = mysqli_connect("localhost", "root", "", "jeu_inventory");

//check that connect hapen

if(mysqli_connect_errno()){
    echo "1: connection failed"; //error code #1 = connection failed
    exit();
}

$username = $_POST["name"];
$newInventory = $_POST["inventory"];

//double check is only user with this name
$namecheckquery = "SELECT username FROM players WHERE username = '".$username."';";

$namecheck = mysqli_query($con, $namecheckquery) or die("2: name check query failed"); //error code #2 - name check query failed

if (mysqli_num_rows($namecheck) != 1){
    echo "5: Either no user with name or more than one"; //error code #5 - Either no user with name or more than one
    exit();
}

$updatequery = "UPDATE players SET inventory = " . $newInventory . " WHERE username ='".$username ."';";

mysqli_query($con,$updatequery) or die("7: Save query failed"); //error code #7 - update query failed

echo "0";

?>