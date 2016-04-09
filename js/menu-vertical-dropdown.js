var verticalDropdownMenu = {
	"show": {
		"animate": true,
		"duration": 200,
		"before": {
			"filter": "alpha(opacity=0)",
			"opacity": "0"
		},
		"properties": {
			"filter": "alpha(opacity=100)",
			"opacity": "1"
		},
		"after": {
			"width": "initial",
			"height": "initial",
			"overflow": "visible"
		}
	},
	"hide": {
		"animate": true,
		"duration": 200,
		"properties": {
			"filter": "alpha(opacity=0)",
			"opacity": "0"
		},
		"after": {
			"display": "none"
		}
	},
	"items": {
		"content" : {
			"hover_in": {
				"animate": true,
				"duration": 200,
				"child:0": {
					"properties" : {
						"background-color": "rgba(205,222,232,0.990)"
					}
				},
				"child:1": {
					"tag": "span",
					"properties" : {
						"color": "rgb(0,0,0)"
					}
				}
			},
			"hover_out": {
				"animate": true,
				"duration": 200,
				"child:0": {
					"properties" : {
						"background-color": "rgba(221,237,247,0.990)"
					}
				},
				"child:1": {
					"tag": "span",
					"properties" : {
						"color": "rgb(0,0,0)"
					}
				}
			}
		},
		"hover_in": {
			"content": {
				"event": "hover_in"
			},
			"submenu": {
				"event": "show",
				"delay": 0
			}
		},
		"hover_out": {
			"content": {
				"event": "hover_out",
				"delay": 0
			},
			"submenu": {
				"event": "hide"
			}
		}
	}
};

registerMenuClass('menu-vertical-dropdown', verticalDropdownMenu);