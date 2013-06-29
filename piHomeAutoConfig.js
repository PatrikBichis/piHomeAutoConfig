function tellstick(){
	var self = this;

	self.user = "nobody";
	self.group = "plugdev";
	self.ignoreControllerConfirmation = "false";


	self.units = [
		{	
			id : 1,
			name : "F"+unescape("%F6")+"nsterlampa i kontoret",
			protocol : "arctech",
			model : "selflearning-switch",
			parameters : {house : "1", unit : "1"},
			currentValue : false
		},{	
			id : 2,
			name : "Trapstegsljus",
			protocol : "arctech",
			model : "selflearning-switch",
			parameters : {house : "1", unit : "2"},
			currentValue : false
		},{	
			id : 3,
			name : "F"+unescape("%F6")+"nsterlampor i vardagsrummet",
			protocol : "arctech",
			model : "selflearning-switch",
			parameters : {house : "1", unit : "3"},
			currentValue : false
		},{	
			id : 4,
			name : "Lampor p"+unescape("%E5")+" inneg"+unescape("%E5")+"rd",
			protocol : "arctech",
			model : "selflearning-switch",
			parameters : {house : "1", unit : "4"},
			currentValue : false
		},{	
			id : 5,
			name : "F"+unescape("%F6")+"nsterlampa i k"+unescape("%F6")+"ket",
			protocol : "arctech",
			model : "selflearning-switch",
			parameters : {house : "426", unit : "1"},
			currentValue : false
		},{	
			id : 6,
			name : "Bordslampa i hallen",
			protocol : "arctech",
			model : "selflearning-switch",
			parameters : {house : "426", unit : "2"},
			currentValue : false
		},{	
			id : 7,
			name : "F"+unescape("%F6")+"nsterlampa i sovrum",
			protocol : "arctech",
			model : "selflearning-switch",
			parameters : {house : "426", unit : "3"},
			currentValue : false
		},{	
			id : 8,
			name : "Lampa i trappen",
			protocol : "arctech",
			model : "selflearning-dimmer",
			parameters : {house : "1", unit : "5"},
			currentValue : false
		}
	];
}

function controll(){
	var self = this;

	self.types = [
		{
			id : 1,
			type : "tellstick"
		}
	];

	self.units = [
		{
			id : 1,
			type : 1,
			unitId : 1,
			name : "F"+unescape("%F6")+"nsterlampa i kontoret",
			currentValue : false,
			dimmer : false,
			currentDimValue : 255
		},{
			id : 2,
			type : 1,
			unitId : 2,
			name : "Trapstegsljus",
			currentValue : false,
			dimmer : false,
			currentDimValue : 255
		},{
			id : 3,
			type : 1,
			unitId : 3,
			name : "F"+unescape("%F6")+"nsterlampor i vardagsrummet",
			currentValue : false,
			dimmer : false,
			currentDimValue : 255
		},{
			id : 4,
			type : 1,
			unitId : 4,
			name : "Lampor p"+unescape("%E5")+" inneg"+unescape("%E5")+"rd",
			currentValue : false,
			dimmer : false,
			currentDimValue : 255
		},{
			id : 5,
			type : 1,
			unitId : 5,
			name : "F"+unescape("%F6")+"nsterlampa i k"+unescape("%F6")+"ket",
			currentValue : false,
			dimmer : false,
			currentDimValue : 255
		},{
			id : 6,
			type : 1,
			unitId : 6,
			name : "Bordslampa i hallen",
			currentValue : false,
			dimmer : false,
			currentDimValue : 255
		},{
			id : 7,
			type : 1,
			unitId : 7,
			name : "F"+unescape("%F6")+"nsterlampa i sovrum",
			currentValue : false,
			dimmer : false,
			currentDimValue : 255
		},{
			id : 8,
			type : 1,
			unitId : 8,
			name : "Lampa i trappen",
			currentValue : false,
			dimmer : true,
			currentDimValue : 255
		}
	];

	this.groups = [
		{ 
			id : 1,
			name : "Alla",
			units : [1, 2, 3, 4, 5, 6, 7, 8],
			onAction : 0,
			offAction : 0
		},{ 
			id : 2,
			name : "Fönster lampor",
			units : [1, 3, 5, 7],
			onAction : 0,
			offAction : 0
		},{ 
			id : 2,
			name : "Ute belysning",
			units : [4 ],
			onAction : 0,
			offAction : 0
		},{ 
			id : 2,
			name : "Fönster lampor",
			units : [
				{
					id: 1,
					type: "tellstick"
				},{
					id: 3,
					type: "tellstick"
				},{
					id: 5,
					type: "tellstick"
				},{
					id: 7,
					type: "tellstick"
				}
			],
			onAction : 0,
			offAction : 0
		},{ 
			id : 2,
			name : "Ute belysning",
			units : [
				{
					id: 4,
					type: "tellstick"
				}
			],
			onAction : 0,
			offAction : 0
		}
	];

	this.actions = [];
}

function sonos(){
	var self = this;

	self.types = [
		{
			id: 0,
			name: 'PLAY:3',
			icon: '',
			image: ''
		},{
			id: 1,
			name: 'PLAY:5',
			icon: '',
			image: ''
		},{
			id: 2,
			name: 'PLAYBAR',
			icon: '',
			image: ''
		},{
			id: 3,
			name: 'SUB',
			icon: '',
			image: ''
		},{
			id: 4,
			name: 'CONNECT:AMP',
			icon: '',
			image: ''
		},{
			id: 5,
			name: 'CONNECT',
			icon: '',
			image: ''
		},{
			id: 6,
			name: 'BRIDGE',
			icon: '',
			image: ''
		}
	];

	self.units = [
		{
			host: '192.168.0.19',
			port: 1400,
			type: 6
		},{
			host: '192.168.0.21',
			port: 1400,
			type: 1
		}
	];
}

function router(){
	var self = this;

	self.user = "user";
	self.password = "password";

	self.ip = "192.168.0.1";
	
	self.network = "192.168.1.0/24"

	self.network = "192.168.0.1/24";

	self.brand = "Netgear";
	self.type = "";
}

function piHomeAutoConfig () {
	if (arguments.callee._singletonInstance){
 		return arguments.callee._singletonInstance;
	}
 	arguments.callee._singletonInstance = this;

 	this.tellstickConfig = new tellstick();
 	this.routerConfig = new router();
 	this.controll = new controll();
 	this.sonos = new sonos();
 }
 
piHomeAutoConfig();
exports.piHomeAutoConfig = piHomeAutoConfig;

