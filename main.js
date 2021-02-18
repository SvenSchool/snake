$(document).ready(function() {
	// Couple of pre-defined variables
	var gCanvas = $("#canvas")[0],
			c 			= gCanvas.getContext("2d"),

			cW = gCanvas.width,
			cH = gCanvas.height,
			bgColor = "#222",
			snakeColor = "#FFF";

	function init() {
		// Coloring in the canvas
		c.fillStyle = bgColor;
		c.fillRect(0, 0, cW, cH);

		$.each(snake.body, function(nr, part) {
			var xPos = (nr * 10) + 10,
					yPos = 10;

			// Drawing the body
			c.fillStyle = snakeColor;
			c.fillRect(xPos, yPos, snake.partH, snake.partW);

			part.curX = xPos;
			part.curY = yPos;

			console.log(part);

			// If head, make the stroke blue
			if (part.isHead == true) {
				c.strokeStyle = "blue";
			} else {
				c.strokeStyle = bgColor;
			}

			// Adding stroke to each body part
			c.lineWidth = 1;
			c.strokeRect(xPos, yPos, snake.partH, snake.partW);

			snake.snakeTimer;
		});
	}

	init();

	$(window).keydown(function(e) {
		snake.pressKey(e.which);
	});

});

var snake = {
	partH : 10,
	partW : 10,
	d 		: 2,				// 0 = left, 1 = up, 2 = right, 3 = down

	body : [
		{
			isHead : false,
			curX : 0,
			curY : 0
		},

		{
			isHead : false,
			curX : 0,
			curY : 0
		},

		{
			isHead : true,
			curX : 0,
			curY : 0
		}
	],

	snakeTimer : setInterval(function() {
		snake.move(snake.d);
		// console.log("I fired!");
	}, 1000),

	pressKey : function(key) {
		switch(key) {
			case 37: 	// left
				snake.changeDirection(0);
				break;

			case 38: 	// up
				snake.changeDirection(1);
				break;

			case 39: 	// right
				snake.changeDirection(2);
				break;

			case 40: 	// down
				snake.changeDirection(3);
				break;

			default:
				// Other key
				return false;
				break;
		}
	},

	move : function(d) {						// 0 = left, 1 = up, 2 = right, 3 = down
		var newPart = {
			isHead : true,
			curX : 0,
			curY : 0
		};

		var lastPart = snake.body[snake.body.length - 1];
		lastPart.isHead = false;

		snake.body.push(newPart);

		switch (d) {
			case 0:
				console.log("Left!");
				break;

			case 1:
				console.log("Up!");
				break;

			case 2:
				console.log("Right!");
				break;

			case 3:
				console.log("Down!");
				break;
		}
	},

	changeDirection : function(newD) {
		if (newD !== snake.d - 2 && newD !== snake.d + 2 && snake.d !== newD) {
			console.log("Old: "+snake.d + " and new: "+newD);
			snake.d = newD;
		} else {
			console.log("You cannot turn that way!");
		}
	},

	draw : function() {
		
	}
}