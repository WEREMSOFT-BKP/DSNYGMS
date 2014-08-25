/** @expose */
function soccerbrazil() { }
window["soccerbrazil"] = soccerbrazil;

/** @expose */
soccerbrazil.properties = {
	"width": 1685,
	"height": 699,
	"cameraWidth": 750,
	"cameraHeight": 500,
	"cameraScreenX": 0,
	"cameraScreenY": 0,
	"cameraYMin": 0.47,
	"cameraYMax": 0.53,
	"cameraXMin": 0.43,
	"cameraXMax": 0.57,
	"showCollisions": 1,
	"playerX": 0,
	"playerY": 0,
	"useEmbeddedAssets": 1,
	"scalePlayerX": 1,
	"scalePlayerY": 1,
	"limitUp": 135,
	"limitDown": 665,
	"limitLeft": 60,
	"limitRight": 1625,
	"goalDepth": 50,
	"goalYInit": 265,
	"goalYEnd": 510
};

/** @expose */
soccerbrazil.layerTypes = [
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
		"tileH": 699,
		"width": 1685,
		"height": 699
	},
	{
		"type": "cell",
		"name": "background",
		"matrix":
		[
			[2],
		],
		"image":
		[
			"soccerbrazil_DKO_bg_brazil",
		],
		"cols": 1,
		"rows": 1,
		"tileW": 1685,
		"tileH": 699,
		"width": 1685,
		"height": 699
	},
	{
		"type": "objects",
		"name": "objects",
		"object":
		[
		],
	},
];
