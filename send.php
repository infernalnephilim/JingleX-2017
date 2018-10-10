<?php

	$email = $_POST['emailV'] ;
	$subject = $_POST['nameV'] ;
	$message = $_POST['textV'] ;
	mail("jinglex@interia.eu", "E-Mail od: " .$subject. " z formularza JingleX.cba.pl",
	$message, "From:" . $email);
	echo " Wiadomość E-Mail została wysłana. ";
  
  ?>