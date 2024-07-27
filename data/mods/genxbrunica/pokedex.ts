export const Pokedex: {[speciesid: string]: SpeciesData} = {
	//new mons
	
	//(The last dex number in Desvega went to Virulope, which sits at 1457, so Feathfir will pick up from there)
	feathfir: {
		num: 1458,
		name: "Feathfir",
		types: ["Grass"],
		baseStats: {hp: 48, atk: 35, def: 50, spa: 65, spd: 69, spe: 43},
		abilities: {0: "Overgrow", H: "Levitate"},
		genderRatio: {M: 0.875, F: 0.125},
		heightm: 0.4,
		weightkg: 7,
		evos: ["Avilament"],
		eggGroups: ["Grass", "Flying"],
	},
	avilament: {
		num: 1459,
		name: "Avilament",
		types: ["Grass", "Electric"],
		baseStats: {hp: 63, atk: 50, def: 65, spa: 85, spd: 94, spe: 58},
		abilities: {0: "Overgrow", H: "Levitate"},
		genderRatio: {M: 0.875, F: 0.125},
		heightm: 0.9,
		weightkg: 20,
		prevo: "Feathfir",
		evoLevel: 18,
		evos: ["Photalohm"],
		eggGroups: ["Grass", "Flying"],
	},
	photalohm: {
		num: 1460,
		name: "Photalohm",
		types: ["Grass", "Electric"],
		baseStats: {hp: 78, atk: 70, def: 80, spa: 105, spd: 124, spe: 73},
		abilities: {0: "Overgrow", H: "Wind Power"},
		genderRatio: {M: 0.875, F: 0.125},
		heightm: 1.7,
		weightkg: 60,
		prevo: "Avilament",
		evoLevel: 35,
		eggGroups: ["Grass", "Flying"],
	},
	mousinder: {
		num: 1461,
		name: "Mousinder",
		types: ["Fire"],
		baseStats: {hp: 60, atk: 68, def: 45, spa: 45, spd: 35, spe: 57},
		abilities: {0: "Blaze", H: "Mold Breaker"},
		genderRatio: {M: 0.875, F: 0.125},
		heightm: 0.4,
		weightkg: 10,
		evos: ["Gerblaze"],
		eggGroups: ["Field"],
	},
	gerblaze: {
		num: 1462,
		name: "Gerblaze",
		types: ["Fire", "Ground"],
		baseStats: {hp: 80, atk: 98, def: 60, spa: 60, spd: 50, spe: 67},
		abilities: {0: "Blaze", H: "Mold Breaker"},
		genderRatio: {M: 0.875, F: 0.125},
		heightm: 0.9,
		weightkg: 35,
		prevo: "Mousinder",
		evoLevel: 18,
		evos: ["Smeltusk"],
		eggGroups: ["Field"],
	},
	smeltusk: {
		num: 1463,
		name: "Smeltusk",
		types: ["Fire", "Ground"],
		baseStats: {hp: 100, atk: 118, def: 80, spa: 80, spd: 70, spe: 82},
		abilities: {0: "Blaze", H: "Mold Breaker"},
		genderRatio: {M: 0.875, F: 0.125},
		heightm: 1.5,
		weightkg: 85,
		prevo: "Gerblaze",
		evoLevel: 35,
		eggGroups: ["Field"],
	},
	lochitten: {
		num: 1464,
		name: "Lochitten",
		types: ["Water"],
		baseStats: {hp: 45, atk: 60, def: 45, spa: 40, spd: 50, spe: 70},
		abilities: {0: "Torrent", H: "Steelworker"},
		genderRatio: {M: 0.875, F: 0.125},
		heightm: 0.5,
		weightkg: 8,
		evos: ["Tidalynx"],
		eggGroups: ["Field"],
	},
	tidalynx: {
		num: 1465,
		name: "Tidalynx",
		types: ["Water", "Ghost"],
		baseStats: {hp: 60, atk: 80, def: 60, spa: 50, spd: 70, spe: 95},
		abilities: {0: "Torrent", H: "Steelworker"},
		genderRatio: {M: 0.875, F: 0.125},
		heightm: 1,
		weightkg: 25,
		prevo: "Lochitten",
		evoLevel: 18,
		evos: ["Panthoard"],
		eggGroups: ["Field"],
	},
	panthoard: {
		num: 1466,
		name: "Panthoard",
		types: ["Water", "Ghost"],
		baseStats: {hp: 75, atk: 105, def: 75, spa: 65, spd: 90, spe: 120},
		abilities: {0: "Torrent", H: "Steelworker"},
		genderRatio: {M: 0.875, F: 0.125},
		heightm: 1.6,
		weightkg: 80,
		prevo: "Tidalynx",
		evoLevel: 35,
		eggGroups: ["Field"],
	},
	spikatye: {
		num: 1467,
		name: "Spikatye",
		types: ["Normal"],
		heightm: 0.5,
		weightkg: 3.2,
		baseStats: {hp: 55, atk: 50, def: 75, spa: 30, spd: 75, spe: 30},
		abilities: {0: "Iron Barbs", 1: "Intimidate", H: "Hyper Cutter"},
		evos: ["Shankupine"],
	},
	shankupine: {
		num: 1468,
		name: "Shankupine",
		types: ["Normal", "Steel"],
		heightm: 1,
		weightkg: 29.4,
		baseStats: {hp: 100, atk: 85, def: 105, spa: 50, spd: 105, spe: 50},
		abilities: {0: "Iron Barbs", 1: "Intimidate", H: "Hyper Cutter"},
		prevo: "Spikatye",
		evoLevel: 20,
	},
	mustelive: {
		num: 1469,
		name: "Mustelive",
		types: ["Dark"],
		heightm: 0.4,
		weightkg: 10,
		baseStats: {hp: 50, atk: 60, def: 65, spa: 50, spd: 65, spe: 60},
		abilities: {0: "Anger Point", 1: "Iron Fist", H: "Scrappy"},
		evos: ["Carcajab"],
		eggGroups: ["Field"],
	},
	carcajab: {
		num: 1470,
		name: "Carcajab",
		types: ["Dark", "Fighting"],
		heightm: 0.4,
		weightkg: 27.2,
		baseStats: {hp: 85, atk: 110, def: 90, spa: 65, spd: 65, spe: 75},
		abilities: {0: "Anger Point", 1: "Iron Fist", H: "Scrappy"},
		prevo: "Mustelive",
		evoLevel: 22,
		eggGroups: ["Field"],
	},
	mimagg: {
		num: 1471,
		name: "Mimagg",
		types: ["Bug", "Dark"],
		heightm: 0.3,
		weightkg: 3.2,
		baseStats: {hp: 40, atk: 20, def: 20, spa: 35, spd: 30, spe: 50},
		abilities: {0: "Keen Eye", H: "Big Pecks"},
		evos: ["Falsalys"],
	},
	falsalys: {
		num: 1472,
		name: "Falsalys",
		types: ["Bug", "Dark"],
		heightm: 0.6,
		weightkg: 10,
		baseStats: {hp: 45, atk: 25, def: 25, spa: 25, spd: 50, spe: 35},
		abilities: {0: "Shed Skin"},
		prevo: "Mimagg",
		evoLevel: 7,
		evos: ["Thrumbug"],
	},
	thrumbug: {
		num: 1473,
		name: "Thrumbug",
		types: ["Bug", "Dark"],
		heightm: 1,
		weightkg: 29.5,
		baseStats: {hp: 65, atk: 55, def: 50, spa: 105, spd: 70, spe: 115},
		abilities: {0: "Tinted Lens", H: "Adaptability"},
		prevo: "Falsalys",
		evoLevel: 10,
	},
	jadarva: {
		num: 1474,
		name: "Jadarva",
		types: ["Bug"],
		heightm: 0.3,
		weightkg: 3.6,
		baseStats: {hp: 57, atk: 60, def: 60, spa: 50, spd: 56, spe: 35},
		abilities: {0: "Swarm", 1: "Shell Armor", H: "Strong Jaw"},
		evos: ["Agrimrald"],
		eggGroups: ["Bug", "Mineral"],
	},
	agrimrald: {
		num: 1475,
		name: "Agrimrald",
		types: ["Bug", "Rock"],
		heightm: 0.9,
		weightkg: 16.3,
		baseStats: {hp: 80, atk: 98, def: 97, spa: 81, spd: 82, spe: 50},
		abilities: {0: "Swarm", 1: "Shell Armor", H: "Strong Jaw"},
		prevo: "Jadarva",
		evoLevel: 21,
		eggGroups: ["Bug", "Mineral"],
	},
	blabberjay: {
		num: 1476,
		name: "Blabberjay",
		types: ["Normal", "Flying"],
		heightm: 0.2,
		weightkg: 1.7,
		baseStats: {hp: 40, atk: 50, def: 35, spa: 35, spd: 30, spe: 65},
		abilities: {0: "Keen Eye", H: "Big Pecks"},
		evos: ["Flatterjay"],
	},
	flatterjay: {
		num: 1477,
		name: "Flatterjay",
		types: ["Dark", "Flying"],
		heightm: 0.7,
		weightkg: 15.5,
		baseStats: {hp: 60, atk: 75, def: 47, spa: 53, spd: 45, spe: 85},
		abilities: {0: "Keen Eye", H: "Defiant"},
		prevo: "Blabberjay",
		evoLevel: 18,
		evos: ["Sparajay"],
	},
	sparajay: {
		num: 1478,
		name: "Sparajay",
		types: ["Dark", "Flying"],
		heightm: 1.3,
		weightkg: 27.5,
		baseStats: {hp: 80, atk: 95, def: 66, spa: 74, spd: 65, spe: 110},
		abilities: {0: "Keen Eye", H: "Defiant"},
		prevo: "Flatterjay",
		evoLevel: 34,
	},
	frostern: {
		num: 1479,
		name: "Frostern",
		types: ["Flying"],
		heightm: 0.3,
		weightkg: 3.3,
		baseStats: {hp: 35, atk: 65, def: 40, spa: 40, spd: 40, spe: 70},
		abilities: {0: "Snow Cloak", 1: "Water Absorb", H: "Snow Warning"},
		evos: ["Froskua"],
		eggGroups: ["Flying", "Water 1"],
	},
	froskua: {
		num: 1480,
		name: "Froskua",
		types: ["Flying", "Ice"],
		heightm: 1.2,
		weightkg: 39.6,
		baseStats: {hp: 60, atk: 105, def: 70, spa: 60, spd: 70, spe: 115},
		abilities: {0: "Frost Cloak", 1: "Water Absorb", H: "Snow Warning"},
		prevo: "Frostern",
		evoLevel: 25,
		eggGroups: ["Flying", "Water 1"],
	},
	anageshi: {
		num: 1481,
		name: "Anageshi",
		types: ["Electric", "Ground"],
		heightm: 0.5,
		weightkg: 3,
		baseStats: {hp: 60, atk: 70, def: 70, spa: 40, spd: 50, spe: 40},
		abilities: {0: "Run Away", 1: "Tough Claws", H: "Pickup"},
		evos: ["Harihoru"],
	},
	harihoru: {
		num: 1482,
		name: "Harihoru",
		types: ["Electric", "Ground"],
		heightm: 1,
		weightkg: 6.3,
		baseStats: {hp: 80, atk: 100, def: 100, spa: 60, spd: 70, spe: 80},
		abilities: {0: "Run Away", 1: "Tough Claws", H: "Amp Up"},
		prevo: "Anageshi",
		evoLevel: 30,
	},
	ferrustle: {
		num: 1483,
		name: "Ferrustle",
		types: ["Normal"],
		baseStats: {hp: 40, atk: 35, def: 30, spa: 35, spd: 40, spe: 75},
		abilities: {0: "Keen Eye", 1: "Quick Feet", H: "Wimp Out"},
		heightm: 0.6,
		weightkg: 3.8,
		evos: ["Mustelone"],
		eggGroups: ["Field"],
	},
	mustelone: {
		num: 1484,
		name: "Mustelone",
		types: ["Normal", "Psychic"],
		baseStats: {hp: 65, atk: 55, def: 70, spa: 95, spd: 70, spe: 120},
		abilities: {0: "Cloning Genes", 1: "Quick Feet", H: "Wimp Out"},
		heightm: 1.7,
		weightkg: 12.2,
		prevo: "Ferrustle",
		evoLevel: 22,
		eggGroups: ["Field"],
	},
	sugacer: {
		num: 1485,
		name: "Sugacer",
		types: ["Grass"],
		baseStats: {hp: 55, atk: 42, def: 50, spa: 78, spd: 50, spe: 45},
		abilities: {0: "Supersweet Syrup", 1: "Sap Sipper", H: "Leaf Guard"},
		heightm: 0.3,
		weightkg: 0.5,
		evos: ["Saccharup"],
		eggGroups: ["Grass"],
	},
	saccharup: {
		num: 1486,
		name: "Saccharup",
		types: ["Grass"],
		baseStats: {hp: 60, atk: 53, def: 74, spa: 92, spd: 74, spe: 62},
		abilities: {0: "Supersweet Syrup", 1: "Sap Sipper", H: "Leaf Guard"},
		heightm: 0.9,
		weightkg: 6.8,
		prevo: "Sugacer",
		evoLevel: 21,
		evos: ["Syruptitious"],
		eggGroups: ["Grass"],
	},
	syruptitious: {
		num: 1487,
		name: "Syruptitious",
		types: ["Grass", "Dark"],
		baseStats: {hp: 75, atk: 76, def: 90, spa: 110, spd: 84, spe: 85},
		abilities: {0: "Supersweet Syrup", 1: "Sap Sipper", H: "Pickpocket"},
		heightm: 1.5,
		weightkg: 43.1,
		evoLevel: 34,
		prevo: "Saccharup",
		eggGroups: ["Grass"],
	},
	hawkward: {
		num: 1488,
		name: "Hawkward",
		types: ["Flying", "Psychic"],
		baseStats: {hp: 40, atk: 50, def: 80, spa: 105, spd: 50, spe: 80},
		abilities: {0: "No Guard", 1: "Keen Eye", H: "Railgunner"},
		heightm: 0.4,
		weightkg: 9.1,
		evos: ["Hawkular"],
		eggGroups: ["Flying"],
	},
	hawkular: {
		num: 1489,
		name: "Hawkular",
		types: ["Flying", "Psychic"],
		baseStats: {hp: 60, atk: 70, def: 100, spa: 125, spd: 70, spe: 100},
		abilities: {0: "No Guard", 1: "Keen Eye", H: "Railgunner"},
		heightm: 1,
		weightkg: 20.4,
		prevo: "Hawkward",
		evoLevel: 30,
		eggGroups: ["Flying"],
	},
	qimmiqua: {
		num: 1490,
		name: "Qimmiqua",
		types: ["Normal", "Water"],
		baseStats: {hp: 60, atk: 55, def: 45, spa: 55, spd: 45, spe: 55},
		abilities: {0: "Swift Swim", 1: "Ball Fetch", H: "Fur Coat"},
		heightm: 0.4,
		weightkg: 4.1,
		evos: ["Splabrashor", "Newflowake"],
		eggGroups: ["Field", "Water 1"],
	},
	splabrashor: {
		num: 1491,
		name: "Splabrashor",
		types: ["Fighting", "Water"],
		baseStats: {hp: 65, atk: 110, def: 70, spa: 80, spd: 60, spe: 100},
		abilities: {0: "Swift Swim", 1: "Scrappy", H: "Fur Coat"},
		heightm: 0.8,
		weightkg: 16,
		prevo: "Qimmiqua",
		evoType: "levelHold",
		evoItem: "Covert Cloak",
		eggGroups: ["Field", "Water 1"],
	},
	newflowake: {
		num: 1492,
		name: "Newflowake",
		types: ["Ghost", "Water"],
		baseStats: {hp: 100, atk: 60, def: 110, spa: 70, spd: 80, spe: 65},
		abilities: {0: "Swift Swim", 1: "Guard Dog", H: "Fur Coat"},
		heightm: 1.2,
		weightkg: 61,
		prevo: "Qimmiqua",
		evoType: "levelHold",
		evoItem: "Reaper Cloth",
		eggGroups: ["Field", "Water 1"],
	},

	

	//Dex nums for the Elders of Nature are placeholders
	akulut: {
		num: -1,
		name: "Akulut",
		types: ["Dark", "Water"],
		gender: "N",
		baseStats: {hp: 100, atk: 133, def: 133, spa: 102, spd: 102, spe: 110},
		abilities: {0: "Darkest Hunger"},
		heightm: 3.5,
		weightkg: 582.3,
		eggGroups: ["Undiscovered"],
	},
	wendora: {
		num: -2,
		name: "Wendora",
		types: ["Ghost", "Ice"],
		gender: "N",
		baseStats: {hp: 90, atk: 102, def: 90, spa: 134, spd: 130, spe: 124},
		abilities: {0: "Coldest Heart"},
		heightm: 2.9,
		weightkg: 259.4,
		eggGroups: ["Undiscovered"],
	},
	lutakon: {
		num: -3,
		name: "Lutakon",
		baseForme: "Resting",
		types: ["Grass"],
		gender: "N",
		baseStats: {hp: 100, atk: 120, def: 90, spa: 120, spd: 130, spe: 90},
		abilities: {0: "Guardian of Nature"},
		heightm: 1.9,
		weightkg: 400,
		otherFormes: ["Lutakon-Awakened"],
		formeOrder: ["Lutakon", "Lutakon-Awakened"],
		eggGroups: ["Undiscovered"],
	},
	lutakonawakened: {
		num: -3,
		name: "Lutakon-Awakened",
		baseSpecies: "Lutakon",
		forme: "Awakened",
		types: ["Grass"],
		gender: "N",
		baseStats: {hp: 100, atk: 150, def: 150, spa: 150, spd: 150, spe: 70},
		abilities: {0: "Guardian of Nature"},
		heightm: 10,
		weightkg: 840,
		eggGroups: ["Undiscovered"],
		requiredItem: "Awakening Seed",
		changesFrom: "Lutakon",
	},
	//Undexited mons from previous iterations + Modified mons
	
	kindread: {
		num: 1404,
		name: "Kindread",
		types: ["Ghost", "Grass"],
		baseStats: {hp: 40, atk: 65, def: 50, spa: 45, spd: 60, spe: 60},
		abilities: {0: "Soul Strider", 1: "Flash Fire", H: "Wandering Spirit"},
		heightm: 0.5,
		weightkg: 6.0,
		evos: ["Wildpyre"],
		eggGroups: ["Grass", "Monster"],
	},
	wildpyre: {
		num: 1405,
		name: "Wildpyre",
		types: ["Ghost", "Fire"],
		baseStats: {hp: 85, atk: 110, def: 70, spa: 80, spd: 75, spe: 90},
		abilities: {0: "Soul Strider", 1: "Drought", H: "Wandering Spirit"},
		heightm: 1.6,
		weightkg: 13.0,
		prevo: "Kindread",
		evoType: "trade",
		evoItem: "Charcoal",
		eggGroups: ["Grass", "Monster"],
	},
	tsunamey: {
		num: 1280,
		name: "Tsunamey",
		types: ["Dragon"],
		baseStats: {hp: 60, atk: 115, def: 95, spa: 50, spd: 95, spe: 50},
		abilities: {0: "Surf's Up"},
		heightm: 0.9,
		weightkg: 40.5,
		otherFormes: ["Tsunamey-Surfing"],
		formeOrder: ["Tsunamey", "Tsunamey-Surfing"],
		eggGroups: ["Water 1", "Water 3"],
	},
	tsunameysurfing: {
		num: 1280,
		name: "Tsunamey-Surfing",
		baseSpecies: "Tsunamey",
		forme: "Surfing",
		types: ["Dragon"],
		baseStats: {hp: 60, atk: 115, def: 60, spa: 50, spd: 80, spe: 100},
		abilities: {0: "Surf's Up"},
		heightm: 0.9,
		weightkg: 40.5,
		requiredAbility: "Surf's Up",
		battleOnly: "Tsunamey",
		eggGroups: ["Water 1", "Water 3"],
	},
	erythrope: {
		num: 1281,
		name: "Erythrope",
		types: ["Water", "Normal"],
		baseStats: {hp: 59, atk: 98, def: 69, spa: 54, spd: 69, spe: 116},
		abilities: {0: "Long Reach", 1: "Strong Jaw", H: "Illuminate"},
		heightm: 4,
		weightkg: 9.6,
		eggGroups: ["Water 1", "Dragon"],
	},
	rascoon: {
		num: 1236,
		name: "Rascoon",
		types: ["Dark"],
		baseStats: {hp: 41, atk: 59, def: 46, spa: 42, spd: 32, spe: 62},
		abilities: {0: "Pickpocket", 1: "Limber", H: "Infiltrator"},
		heightm: 0.3,
		weightkg: 16.8,
		evos: ["Maskoon"],
		eggGroups: ["Field"],
	},
	maskoon: {
		num: 1237,
		name: "Maskoon",
		types: ["Dark"],
		baseStats: {hp: 80, atk: 94, def: 75, spa: 74, spd: 66, spe: 105},
		abilities: {0: "Pickpocket", 1: "Limber", H: "Infiltrator"},
		heightm: 1.4,
		weightkg: 41,
		prevo: "Rascoon",
		eggGroups: ["Field"],
	},
	wapitini: {
		num: 1381,
		name: "Wapitini",
		types: ["Ice", "Normal"],
		baseStats: {hp: 80, atk: 50, def: 50, spa: 50, spd: 50, spe: 60},
		abilities: {0: "Slush Rush", 1: "Snow Coat", H: "Sheer Force"},
		heightm: 0.6,
		weightkg: 39,
		evos: ["Arborelk", "Epithelk", "Elkrosis"],
		eggGroups: ["Field"],
	},
	arborelk: {
		num: 1382,
		name: "Arborelk",
		types: ["Ice", "Grass"],
		baseStats: {hp: 100, atk: 80, def: 70, spa: 80, spd: 70, spe: 80},
		abilities: {0: "Slush Rush", 1: "Grass Pelt", H: "Sheer Force"},
		heightm: 2.0,
		weightkg: 500,
		prevo: "Wapitini",
		evoType: "other",
		evoCondition: "Win a battle with Grassy Terrain active",
		eggGroups: ["Field"],
	},
	epithelk: {
		num: 1383,
		name: "Epithelk",
		types: ["Ice", "Psychic"],
		baseStats: {hp: 100, atk: 55, def: 65, spa: 110, spd: 70, spe: 80},
		abilities: {0: "Slush Rush", 1: "Fur Coat", H: "Magic Bounce"},
		heightm: 2.1,
		weightkg: 600,
		prevo: "Wapitini",
		evoType: "other",
		evoCondition: "Win a battle with Psychic Terrain active",
		eggGroups: ["Field"],
	},
	elkrosis: {
		num: 1384,
		name: "Elkrosis",
		types: ["Ice", "Poison"],
		baseStats: {hp: 80, atk: 115, def: 70, spa: 55, spd: 60, spe: 100},
		abilities: {0: "Slush Rush", 1: "Fluffy", H: "Merciless"},
		heightm: 1.6,
		weightkg: 312.5,
		prevo: "Wapitini",
		evoType: "other",
		evoCondition: "Faint from poisoning while Poison Terrain is active",
		eggGroups: ["Field"],
	},
	bidoof: {
		inherit: true,
		abilities: {0: "Unaware", 1: "Simple", H: "Adaptability"},
	},
	bibarel: {
		inherit: true,
		abilities: {0: "Unaware", 1: "Simple", H: "Adaptability"},
		evos: ["Bibarricade"],
	},
	bibarricade: {
		num: 1418,
		name: "Bibarricade",
		types: ["Normal", "Water"],
		baseStats: {hp: 99, atk: 105, def: 90, spa: 65, spd: 90, spe: 61},
		abilities: {0: "Unaware", 1: "Simple", H: "Adaptability"},
		heightm: 2,
		weightkg: 69,
		prevo: "Bibarel",
		evoLevel: 40,
		eggGroups: ["Field"],
	},
	venipede: {
		inherit: true,
		otherFormes: ["Venipede-Desvega"],
		formeOrder: ["Venipede", "Venipede-Desvega"],
	},
	venipededesvega: {
		num: 543,
		name: "Venipede-Desvega",
		baseSpecies: "Venipede",
		forme: "Desvega",
		types: ["Bug", "Water"],
		baseStats: {hp: 30, atk: 59, def: 45, spa: 30, spd: 39, spe: 57},
		abilities: {0: "Swift Swim", 1: "Swarm", H: "Speed Boost"},
		heightm: 0.3,
		weightkg: 5.3,
		evos: ["Whirlipede-Desvega"],
	},
	whirlipede: {
		inherit: true,
		otherFormes: ["Whirlipede-Desvega"],
		formeOrder: ["Whirlipede", "Whirlipede-Desvega"],
	},
	whirlipededesvega: {
		num: 544,
		name: "Whirlipede-Desvega",
		baseSpecies: "Whirlipede",
		forme: "Desvega",
		types: ["Bug", "Water"],
		baseStats: {hp: 40, atk: 99, def: 55, spa: 40, spd: 79, spe: 47},
		abilities: {0: "Swift Swim", 1: "Swarm", H: "Speed Boost"},
		heightm: 1.2,
		weightkg: 58.5,
		prevo: "Venipede-Desvega",
		evoLevel: 22,
		evos: ["Tractipede"],
	},
	tractipede: {
		num: 1431,
		name: "Tractipede",
		types: ["Bug", "Water"],
		baseStats: {hp: 60, atk: 112, def: 69, spa: 89, spd: 55, spe: 100},
		abilities: {0: "Swift Swim", 1: "Swarm", H: "Speed Boost"},
		heightm: 2.5,
		weightkg: 200,
		prevo: "Whirlipede-Desvega",
		evoLevel: 30,
	},
	twinkletoad: {
		num: 1377,
		name: "Twinkletoad",
		types: ["Fairy", "Poison"],
		baseStats: {hp: 60, atk: 35, def: 60, spa: 70, spd: 60, spe: 45},
		abilities: {0: "Poison Surge", 1: "Sand Rush", H: "Dry Skin"},
		heightm: 0.4,
		weightkg: 12,
		evos: ["Amphabulous"],
	},
	amphabulous: {
		num: 1378,
		name: "Amphabulous",
		types: ["Fairy", "Poison"],
		baseStats: {hp: 85, atk: 50, def: 85, spa: 110, spd: 85, spe: 75},
		abilities: {0: "Poison Surge", 1: "Sand Rush", H: "Dry Skin"},
		heightm: 1.1,
		weightkg: 36.3,
		prevo: "Twinkletoad",
	},
	spearow: {
		inherit: true,
		otherFormes: ["Spearow-Desvega"],
		formeOrder: ["Spearow", "Spearow-Desvega"],
	},
	spearowdesvega: {
		num: 21,
		name: "Spearow-Desvega",
		baseSpecies: "Spearow",
		forme: "Desvega",
		types: ["Flying", "Ice"],
		baseStats: {hp: 40, atk: 65, def: 30, spa: 31, spd: 21, spe: 75},
		abilities: {0: "Keen Eye", 1: "Ice Body", H: "Sniper"},
		heightm: 0.3,
		weightkg: 2,
		evos: ["Fearow-Desvega"],
		eggGroups: ["Flying"],
	},
	fearow: {
		inherit: true,
		evos: ["Hearow"],
		otherFormes: ["Fearow-Desvega"],
		formeOrder: ["Fearow", "Fearow-Desvega"],
	},
	fearowdesvega: {
		num: 22,
		name: "Fearow-Desvega",
		baseSpecies: "Fearow",
		forme: "Desvega",
		types: ["Flying", "Ice"],
		baseStats: {hp: 65, atk: 95, def: 65, spa: 61, spd: 51, spe: 105},
		abilities: {0: "Keen Eye", 1: "Ice Body", H: "Sniper"},
		heightm: 1.2,
		weightkg: 38,
		prevo: "Spearow-Desvega",
		evos: ["Nixrow"],
		eggGroups: ["Flying"],
	},
	hearow: {
		num: 1286,
		name: "Hearow",
		types: ["Fighting", "Flying"],
		baseStats: {hp: 85, atk: 110, def: 75, spa: 71, spd: 71, spe: 110},
		abilities: {0: "Justified", H: "Sniper"},
		heightm: 1.5,
		weightkg: 20.5,
		prevo: "Fearow",
		evoLevel: 40,
		eggGroups: ["Flying"],
	},
	nixrow: {
		num: 1386,
		name: "Nixrow",
		types: ["Flying", "Ice"],
		baseStats: {hp: 75, atk: 110, def: 75, spa: 61, spd: 61, spe: 140},
		abilities: {0: "Keen Eye", 1: "Ice Scales", H: "Sniper"},
		heightm: 1.7,
		weightkg: 55,
		prevo: "Fearow-Desvega",
		evoLevel: 50,
		evoCondition: "in a snowy area",
		eggGroups: ["Flying"],
	},
	banette: {
		inherit: true,
		baseStats: {hp: 64, atk: 135, def: 65, spa: 83, spd: 63, spe: 65},
		abilities: {0: "Insomnia", 1: "Frisk", H: "Prankster"},
	},
	weezing: {
		inherit: true,
		baseStats: {hp: 75, atk: 90, def: 120, spa: 95, spd: 70, spe: 60},
	},
	weezinggalar: {
		inherit: true,
		baseStats: {hp: 75, atk: 90, def: 120, spa: 95, spd: 70, spe: 60},
	},
	hitmonlee: {
		inherit: true,
		types: ["Fighting", "Dark"],
		baseStats: {hp: 50, atk: 120, def: 53, spa: 35, spd: 110, spe: 107},
		abilities: {0: "Scrappy", 1: "Reckless", H: "Unburden"},
	},
	hitmonchan: {
		inherit: true,
		types: ["Fighting", "Steel"],
		baseStats: {hp: 50, atk: 105, def: 99, spa: 35, spd: 110, spe: 76},
		abilities: {0: "Regenerator", 1: "Iron Fist", H: "Inner Focus"},
	},
	hitmontop: {
		inherit: true,
		types: ["Fighting", "Ground"],
		baseStats: {hp: 50, atk: 105, def: 105, spa: 35, spd: 110, spe: 70},
		abilities: {0: "Intimidate", 1: "Technician", H: "Dancer"},
	},
	steelix: {
		inherit: true,
		abilities: {0: "Sand Rush", 1: "Sturdy", H: "Sheer Force"},
	},
	zubat: {
		inherit: true,
		abilities: {0: "Inner Focus", 1: "Iron Fist", 1: "Echolocation", H: "Inner Focus"},
	},
	golbat: {
		inherit: true,
		abilities: {0: "Inner Focus", 1: "Iron Fist", 1: "Echolocation", H: "Inner Focus"},
	},
	crobat: {
		inherit: true,
		abilities: {0: "Inner Focus", 1: "Iron Fist", 1: "Echolocation", H: "Inner Focus"},
	},
	doloice: {
		num: 1385,
		name: "Doloice",
		types: ["Rock", "Ice"],
		baseStats: {hp: 63, atk: 112, def: 115, spa: 50, spd: 65, spe: 93},
		abilities: {0: "Sand Rush", H: "Slush Rush"},
		heightm: 1.6,
		weightkg: 136,
		eggGroups: ["Mineral"],
	},
	humbat: {
		num: 1132,
		name: "Humbat",
		types: ["Normal", "Flying"],
		baseStats: {hp: 35, atk: 35, def: 45, spa: 60, spd: 45, spe: 60},
		abilities: {0: "Frisk", 1: "Oblivious", H: "Hustle"},
		weightkg: 29.5,
		evos: ["Sensat"],
	},
	sensat: {
		num: 1133,
		name: "Sensat",
		types: ["Psychic", "Flying"],
		baseStats: {hp: 50, atk: 45, def: 50, spa: 80, spd: 65, spe: 90},
		abilities: {0: "Frisk", 1: "Oblivious", H: "Tinted Lens"},
		weightkg: 29.5,
		prevo: "Humbat",
		evoLevel: 22,
		evos: ["Echologos"],
	},
	echologos: {
		num: 1134,
		name: "Echologos",
		types: ["Psychic", "Flying"],
		baseStats: {hp: 60, atk: 60, def: 70, spa: 100, spd: 90, spe: 120},
		abilities: {0: "Frisk", 1: "Oblivious", H: "Tinted Lens"},
		weightkg: 29.5,
		prevo: "Sensat",
		evoLevel: 32,
	},
	absol: {
		inherit: true,
		baseStats: {hp: 65, atk: 130, def: 60, spa: 85, spd: 60, spe: 85},
	},
	magcargo: {
		inherit: true,
		evos: ["Saunusca"],
	},
	saunusca: {
		num: 1387,
		name: "Saunusca",
		types: ["Fire", "Water"],
		baseStats: {hp: 75, atk: 60, def: 120, spa: 105, spd: 97, spe: 43},
		abilities: {0: "White Smoke", 1: "Flame Body", H: "Misty Surge"},
		heightm: 0.8,
		weightkg: 55,
		prevo: "Magcargo",
		evoType: "useItem",
		evoItem: "Dawn Stone",
		eggGroups: ["Amorphous"],
	},
	carment: {
		num: 1365,
		name: "Carment",
		types: ["Rock", "Dragon"],
		baseStats: {hp: 50, atk: 70, def: 40, spa: 40, spd: 30, spe: 90},
		abilities: {0: "Sturdy", 1: "Illuminate", H: "Filter"},
		heightm: 0.5,
		weightkg: 60,
		evos: ["Shaftar"],
	},
	shaftar: {
		num: 1366,
		name: "Shaftar",
		types: ["Rock", "Dragon"],
		baseStats: {hp: 60, atk: 80, def: 80, spa: 70, spd: 55, spe: 105},
		abilities: {0: "Sturdy", 1: "Illuminate", H: "Filter"},
		heightm: 0.8,
		weightkg: 130,
		prevo: "Carment",
		evos: ["Caverlisk"],
		evoLevel: 20,
	},
	caverlisk: {
		num: 1367,
		name: "Caverlisk",
		types: ["Steel", "Dragon"],
		baseStats: {hp: 75, atk: 110, def: 90, spa: 80, spd: 65, spe: 130},
		abilities: {0: "Sturdy", 1: "Illuminate", H: "Filter"},
		heightm: 2.5,
		weightkg: 360,
		prevo: "Shaftar",
		evoType: "other",
		evoCondition: "Use Spin Out 49 times",
	},
	lycanroc: {
		inherit: true,
		types: ["Rock", "Normal"],
		baseStats: {hp: 75, atk: 125, def: 65, spa: 55, spd: 65, spe: 122},
		abilities: {0: "Keen Eye", 1: "Sand Rush", H: "Inner Focus"},
	},
	lycanrocmidnight: {
		inherit: true,
		types: ["Rock", "Dark"],
		baseStats: {hp: 85, atk: 125, def: 75, spa: 55, spd: 75, spe: 92},
		abilities: {0: "Keen Eye", 1: "Hot-Headed", H: "No Guard"},
	},
	lycanrocdusk: {
		inherit: true,
		types: ["Rock", "Ground"],
		baseStats: {hp: 75, atk: 117, def: 75, spa: 55, spd: 75, spe: 110},
		abilities: {0: "Tough Claws", H: "Vigilante"},
	},
};