(function() {

  if ( TweenMax ) {

    // Set Size
    var size = {
      width: window.innerWidth || document.body.clientWidth,
      height: window.innerHeight || document.body.clientHeight
    }
    var canvasWidth = size.width;
    var canvasHeight = size.height;
    var canvas = document.getElementById('boids');
    canvas.style.width = canvasWidth + 'px';
    canvas.style.height = canvasHeight + 'px';

    // Setup Canvas
    var theEnd = false;
    var numBoids = 200;
    var radius = 3;
    var quickness = .2;
    // var maxSpeed = canvasWidth / 50;

    var boids = [];

    var xNumbers = [];
    while(xNumbers.length < numBoids){
      var randomnumber = Math.ceil(Math.random()* ( canvasWidth - ( radius * 2 ) ) ) + ( radius );
      if(xNumbers.indexOf(randomnumber) > -1) continue;
      xNumbers[xNumbers.length] = randomnumber;
    }

    var yNumbers = [];
    while(yNumbers.length < numBoids){
      var randomnumber = Math.ceil(Math.random()* ( canvasHeight - ( radius * 2 ) ) ) + ( radius );
      if(yNumbers.indexOf(randomnumber) > -1) continue;
      yNumbers[yNumbers.length] = randomnumber;
    }

    // Instantiate all Boids
    for ( i = 0; i < numBoids; i++ ) {
      boids.push( new Boid( { id: i, x: xNumbers[i], y: yNumbers[i], containerWidth: canvasWidth, containerHeight: canvasHeight, quickness: quickness, radius: radius } ) );
    }

    // Run Interval Loop
    var runBoids = setInterval( loop, 16 );


  } else {
    // canvas-unsupported code here
    alert('JavaScript Canvas is not supported in your browser. Please update your browser or try another.');
  }

  // Loop Function
  function loop() {

    if ( ! theEnd ) {

      // Loop through all boids
      for ( i = 0; i < boids.length; i++) {

        var nextPosition = boids[i].nextPosition();

        if (i == 0) {

          if ( boids[i].distanceFromHorWall() < 0 || boids[i].distanceFromVertWall() < 0 ) {
            theEnd = true;
          }
          console.log( boids[i].distanceFromHorWall() );
          console.log( boids[i].distanceFromVertWall() );

        }

      }

    } else {

      clearInterval( runBoids );

    }

  }
  var loop = loop();

  // Render Boid
  function renderBoid( boid ) {

    // var newpath = new Path.Circle({
    //   center: [boid.x , boid.y],
    //   radius: radius,
    //   fillColor: '#a7f9b9'
    // });

  }


})();
