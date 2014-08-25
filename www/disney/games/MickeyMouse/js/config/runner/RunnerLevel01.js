/** @expose */
function RunnerLevel01() { }
window["RunnerLevel01"] = RunnerLevel01;

/** @expose */
RunnerLevel01.properties = {
    "width": 950,
    "height": 500,
    "cameraWidth": 750,
    "cameraHeight": 500,
    "cameraScreenX": 0,
    "cameraScreenY": 0,
    "cameraYMin": 0.6,
    "cameraYMax": 0.8,
    "cameraXMin": 0.35,
    "cameraXMax": 0.65,
    "showCollisions": 1,
    "playerX": 347,
    "playerY": 333,
    "useEmbeddedAssets": 1,
    "scalePlayerX": 1,
    "scalePlayerY": 1
};

/** @expose */
RunnerLevel01.layerTypes = [
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
	    "tileW": 950,
	    "tileH": 500,
	    "width": 950,
	    "height": 500
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
	    "tileW": 950,
	    "tileH": 500,
	    "width": 950,
	    "height": 500
	},
	{
	    "type": "objects",
	    "name": "objects",
	    "object":
		[
		],
	},
];
