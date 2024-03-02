<?php

if (isset($_POST['submit'])) {
    $name = $_POST['Name'];
    $Address = $_POST['Address'];
    $mobile = $_POST['Mobile'];
    $payment = $_POST['Payment'];
    $ice=$_POST['ice'];
    $email=$_POST['Email'];

    echo "<h2>USER DATA RECEIVED</h2><br>";
    echo "<table border='1'>";
    echo "<thead>";
    echo "<th>Parameter</th>";
    echo "<th>Details</th>";
    echo "</thead>";
    echo "<tr>";
    echo "<td>Name</td>";
    echo "<td>" . $name . "</td>";
    echo "</tr>";
    echo "<tr>";
    echo "<td>Email</td>";
    echo "<td>" . $email . "</td>";
    echo "</tr>";
    echo "<tr>";
    echo "<td>Mobile</td>";
    echo "<td>" . $mobile . "</td>";
    echo "</tr>";
    echo "<tr>";
    echo "<td>Payment</td>";
    echo "<td>" . $payment . "</td>";
    echo "</tr>";
    echo "<tr>";
    echo "<td>Gender</td>";
    echo "<td>" . $gender . "</td>";
    echo "</tr>";
      echo "<td>Flavour</td>";
    echo "<td>" . $ice . "</td>";
    echo "</tr>";
    echo "<tr>";
    echo "</table>";

      echo "<h2>Thank You For Visiting </h2><br>";
}
