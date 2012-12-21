<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8" />
	<title>Digital clock with JS</title>
	<style>
		#clock{
			font-family: Arial, Helvetica, sans-serif;
			font-size: 0.8em;
			color: white;
			background-color: black;
			border: 2px solid purple;
			padding: 4px;
		}
	</style>
	<script type="text/javascript" src="time.js">
	</script>
</head>

<body onload="updateClock(); setInterval('updateClock()', 1000 )">
	<div style="width: 10em; text-align: center; margin: 20px auto;">
		<span id="clock">&nbsp;</span>
	</div>

</body>
</html>