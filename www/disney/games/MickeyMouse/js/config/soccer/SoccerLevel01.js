/** @expose */
function SoccerLevel01() { }
window["SoccerLevel01"] = SoccerLevel01;

/** @expose */
SoccerLevel01.properties = {
	"width": 1685,
	"height": 708,
	"cameraWidth": 750,
	"cameraHeight": 500,
	"cameraScreenX": 0,
	"cameraScreenY": 0,
	"cameraYMin": 0.47,
	"cameraYMax": 0.53,
	"cameraXMin": 0.47,
	"cameraXMax": 0.53,
	"showCollisions": 1,
	"playerX": 0,
	"playerY": 0,
	"useEmbeddedAssets": 1,
	"scalePlayerX": 1,
	"scalePlayerY": 1,
	"limitUp": 110,
	"limitDown": 640,
	"limitLeft": 60,
	"limitRight": 1625,
	"goalDepth": 50,
	"goalYInit": 233,
	"goalYEnd": 493
};

/** @expose */
SoccerLevel01.layerTypes = [
	{
		"type": "player",
		"name": "player",
		"x": 0,
		"y": 0,
		"width": 0,
		"height": 0
	},
	{
		"type": "collision",
		"name": "collisions",
		"matrix":
		[
	[0]
		],
		"cols": 1,
		"rows": 1,
		"tileW": 1685,
		"tileH": 708,
		"width": 1685,
		"height": 708
	},
	{
		"type": "cell",
		"name": "background",
		"matrix":
		[
			[1],
		],
		"image":
		[
			"SoccerLevel01_background",
		],
		"cols": 1,
		"rows": 1,
		"tileW": 1685,
		"tileH": 708,
		"width": 1685,
		"height": 708
	},
	{
		"type": "objects",
		"name": "objects",
		"object":
		[
		],
	},
];
