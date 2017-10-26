<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>BOIDS!</title>
	<link rel="stylesheet" href="css/style.css">
	<!--[if IE]>
		<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
</head>

<body id="home">

  <div id="boids-wrapper">
    <canvas id="boids"></canvas>
		<div id="boids-controls-container">
			<div class="boids-control boids-control-range">
				<div class="range-slider">
					<label for="introversion"><p>Introversion</p></label>
					<input class="input-range" type="range" step="1" value="5" min="0" max="10" name="introversion" id="introversion">
			    <span class="range-value"></span>
				</div>
			</div>
			<div class="boids-control boids-control-range">
				<div class="range-slider">
					<label for="introversion"><p>Speed</p></label>
					<input class="input-range" type="range" step="1" value="5" min="0" max="10" name="speed" id="speed">
			    <span class="range-value"></span>
				</div>
			</div>
			<div class="boids-control boids-control-checkbox">
				<div class="checkbox">
					<p>Walls</p>
					<input type="checkbox" data-val="true" id="walls" name="walls"/>
					<label for="walls"></label>
				</div>
			</div>
			<div class="boids-control boids-control-range">
				<div class="range-slider">
					<label for="introversion"><p>Racism</p></label>
					<input class="input-range" type="range" step="1" value="0" min="0" max="10" name="racism" id="racism">
			    <span class="range-value"></span>
				</div>
			</div>
			<div class="boids-control boids-control-range">
				<div class="range-slider">
					<label for="introversion"><p>Diversity</p></label>
					<input class="input-range" type="range" step="1" value="8" min="1" max="8" name="diversity" id="diversity">
			    <span class="range-value"></span>
				</div>
			</div>
		</div>
	</div>

	<script src="js/victor.min.js"></script>
  <script src="js/boid.js"></script>
  <script src="js/script.js"></script>
</body>
</html>
