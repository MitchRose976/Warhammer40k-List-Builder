/* This program is designed for the tabletop strategy game Warhammer 40k. The idea of the game is to assemble an army of miniatures to be used in a strategy and objective focused game against an opponent. To make sure the game is even for both players, every miniature is assigned a base points value, a unit type, and an option for additional upgrades to make it stronger in play. Each upgrade given may also cost additional points to add to the unit. Prior beginning the game, both players will agree on a max points value to play with for the game. For example, a standard game allows each player a maximum of 2000 points worth of miniatures to use. Each player will then need to create a list displaying all the units they will be using in the game along with all upgrades and add ons to equal a total of 2000 points.

I designed this program to be used as a tool to assist players in making an army list for competitive play. Prior to designing this program, myself and others used pen and paper to make an army list and it was very time consuming.*/


// Functions to add/subtract power level and points
let totalPoints = 0;
let totalPL = 0;
let pointsValue = document.querySelector('#total-points');
let powerLevel = document.querySelector('#total-pl');

const addTotalPoints = (value) => {
    console.log('value: ', value);
    totalPoints += value;
    pointsValue.value = totalPoints.toString();
};

const addPowerLevel = (value) => {
    console.log('value: ', value);
    totalPL += value;
    powerLevel.value = totalPL.toString();
};

const decreaseTotalPoints = (value) => {
    totalPoints -= value;
    pointsValue.value = totalPoints.toString();
};

const decreasePowerLevel = (value) => {
    totalPL -= value;
    powerLevel.value = totalPL.toString();
};


// Unit Reference List
const unitsList = [
    {
        name: 'Avenger Strike Fighter',
        unitType: 'Flyer',
        powerLevel: 9,
        pointsValue: 165,
        factionKeywords: '',
        keywords: '',
        wargear: ''
    },
    {
        name: 'Arvus Lighter',
        unitType: 'Flyer',
        powerLevel: 5,
        pointsValue: 85,
        factionKeywords: '',
        keywords: '',
        wargear: ''
    },
    {
        name: 'Aquila Lander',
        unitType: 'Flyer',
        powerLevel: 5,
        pointsValue: 105,
        factionKeywords: '',
        keywords: '',
        wargear: [['Autocannon', 10], ['Heavy Bolter', 10], ['Multi-laser', 0]]
    },
    {
        name: 'Aradia Madellan',
        unitType: 'HQ',
        powerLevel: 3,
        pointsValue: 45,
        factionKeywords: '',
        keywords: '',
        wargear: ''
    },
    {
        name: 'Armageddon-pattern Basilisk',
        unitType: 'Heavy Support',
        powerLevel: 7,
        pointsValue: 130,
        factionKeywords: '',
        keywords: '',
        wargear: [['Hunter-killer missile', 5], ['Heavy Bolter', 0], ['Heavy Flamer', 0], ['Heavy Stubber', 5], ['Storm Bolter', 5], ['Full Payload', 'Shatterer of Will', 'Well-Stocked Magazines']]
    },
    {
        name: 'Armageddon-pattern Medusa',
        unitType: 'Heavy Support',
        powerLevel: 8,
        pointsValue: 140,
        factionKeywords: '',
        keywords: '',
        wargear: [['Hunter-killer missile', 5], ['Heavy Bolter', 0], ['Heavy Flamer', 0], ['Heavy Stubber', 5], ['Storm Bolter', 5]]
    },
    {
        name: 'Armoured Sentinel',
        unitType: 'Fast Attack',
        powerLevel: 3,
        pointsValue: 35,
        factionKeywords: 'Imperium, Astra Militarum, <Regiment>',
        keywords: 'Vehicle, Armoured Sentinel',
        wargear: [['Hunter-killer missile', 5], ['Sentinel Chainsaw', 2], ['Autocannon', 10], ['Heavy Flamer', 10], ['Lascannon', 15], ['Multi-laser', 0], ['Plasma Cannon', 15]]
    },
    {
        name: 'Astropath',
        unitType: 'Elites',
        powerLevel: 2,
        pointsValue: 25,
        factionKeywords: 'Imperium, Astra Militarum, Astra Telepathica, Scholastica Psykana',
        keywords: 'Character, Infantry, Psyker, Astropath',
        wargear: [['Laspistol', 0]]
    },
    {
        name: 'Atlas Recovery Tank',
        unitType: 'Elites',
        powerLevel: 5,
        pointsValue: 80,
        factionKeywords: '',
        keywords: '',
        wargear: [['Heavy Stubber', 5], ['Storm Bolter', 5]]
    },
    {
        name: 'Baneblade',
        unitType:'Lord of War',
        powerLevel: 18,
        pointsValue: 345,
        factionKeywords: 'Imperium, Astra Militarum, <Regiment>',
        keywords: 'Vehicle, Titanic, Baneblade',
        wargear: [['Hunter-killer missile', 5], ['Storm Bolter', 3], ['Heavy Stubber', 5], ['2x Sponsons w/ Lascannon & Twin Heavy Bolter', 90], ['2x Sponsons w/ Lascannon & Twin Heavy Flamer', 90], ['4x Sponsons w/ Lascannon & Twin Heavy Bolter', 180], ['4x Sponsons w/ Lascannon & Twin Heavy Flamer', 180]]
    },
    {
        name: 'Banehammer',
        unitType:'Lord of War',
        powerLevel: 18,
        pointsValue: 340,
        factionKeywords: 'Imperium, Astra Militarum, <Regiment>',
        keywords: 'Vehicle, Titanic, Baneblade',
        wargear: [['Hunter-killer missile', 5], ['Storm Bolter', 3], ['Heavy Stubber', 5], ['2x Sponsons w/ Lascannon & Twin Heavy Bolter', 90], ['2x Sponsons w/ Lascannon & Twin Heavy Flamer', 90], ['4x Sponsons w/ Lascannon & Twin Heavy Bolter', 180], ['4x Sponsons w/ Lascannon & Twin Heavy Flamer', 180]]
    },
    {
        name: 'Banehammer',
        unitType:'Lord of War',
        powerLevel: 18,
        pointsValue: 340,
        factionKeywords: 'Imperium, Astra Militarum, <Regiment>',
        keywords: 'Vehicle, Titanic, Baneblade',
        wargear: [['Hunter-killer missile', 5], ['Storm Bolter', 3], ['Heavy Stubber', 5], ['2x Sponsons w/ Lascannon & Twin Heavy Bolter', 90], ['2x Sponsons w/ Lascannon & Twin Heavy Flamer', 90], ['4x Sponsons w/ Lascannon & Twin Heavy Bolter', 180], ['4x Sponsons w/ Lascannon & Twin Heavy Flamer', 180]]
    },
    {
        name: 'Basilisk',
        unitType:'Heavy Support',
        powerLevel: 7,
        pointsValue: 125,
        factionKeywords: 'Imperium, Astra Militarum, <Regiment>',
        keywords: 'Vehicle, Basilisk',
        wargear: [['Hunter-killer missile', 5], ['Storm Bolter', 3], ['Heavy Stubber', 5], ['Track Guards', 5], ['Dozer Blade', 5], ['Augur Array', 5], ['Heavy Flamer', 0], ['Heavy Bolter', 0]]
    },
    {
        name: 'Bullgryns',
        unitType:'Elites',
        powerLevel: 5,
        pointsValue: 114,
        factionKeywords: 'Imperium, Astra Militarum, Militarum Auxilla',
        keywords: 'Infantry, Ogryn, Bullgryn',
        wargear: [['Brute Shield', 2], ['Slabshield', 0], ['Grenadier Gauntlet', 0], ['Bullgryn Maul', 5]]
    },
    {
        name: 'Carnodon',
        unitType:'Heavy Support',
        powerLevel: 6,
        pointsValue: 110,
        factionKeywords: '',
        keywords: '',
        wargear: [['Hunter-killer missile', 5], ['2x Autocannon Sponsons', 0], ['2x Heavy Bolter Sponsons', 0], ['2x Heavy Flamer Sponsons', 0], ['2x Lascannon Sponsons', 10], ['2x Multi-Laser Sponsons', 0], ['2x Volkite Caliver Sponsons', 0], ['Carnodon Twin Autocannon', 0], ['Carnodon Twin Lascannon', 10], ['Carnodon Twin Multi-Laser', 0], ['Volkite Culverin', 0]]
    },
    {
        name: 'Centaur Light Carrier',
        unitType:'Dedicated Transport',
        powerLevel: 4,
        pointsValue: 50,
        factionKeywords: '',
        keywords: '',
        wargear: [['Hunter-killer missile', 0]]
    },
    {
        name: 'Chimera',
        unitType:'Dedicated Transport',
        powerLevel: 5,
        pointsValue: 65,
        factionKeywords: 'Imperium, Astra Militarum, <Regiment>',
        keywords: 'Vehicle, Transport, Chimera',
        wargear: [['Hunter-killer missile', 5], ['Heavy Bolter', 10], ['Heavy Flamer', 10], ['Heavy Stubber', 5], ['Storm Bolter', 3], ['Autocannon', 10], ['Multi-laser', 0], ['Twin Heavy Bolter', 20], ['Augur Array', 5], ['Dozer Blade', 5], ['Track Guards', 5]]
    },
    {
        name: "Colonel 'Iron Hand' Straken",
        unitType:'HQ',
        powerLevel: 4,
        pointsValue: 80,
        factionKeywords: 'Imperium, Astra Militarum, Catachan',
        keywords: "Character, Infantry, Officer, Colonel 'Iron Hand' Straken",
        wargear: [['Warlord', 0]]
    },
    {
        name: 'Colour Sergeant Kell',
        unitType:'Elites',
        powerLevel: 3,
        pointsValue: 45,
        factionKeywords: 'Imperium, Astra Militarum, Cadian',
        keywords: 'Character, Infantry, Colour Sergeant Kell',
        wargear: ''
    },
    {
        name: 'Colossus Bombard',
        unitType:'Heavy Support',
        powerLevel: 8,
        pointsValue: 150,
        factionKeywords: '',
        keywords: '',
        wargear: [['Hunter-killer missile', 5], ['Storm Bolter', 3], ['Heavy Stubber', 5]]
    },
    {
        name: 'Cyclops Demolition Vehicle',
        unitType:'Heavy Support',
        powerLevel: 3,
        pointsValue: 50,
        factionKeywords: '',
        keywords: '',
        wargear: ''
    },
    {
        name: 'Command Squad',
        unitType:'Elites',
        powerLevel: 2,
        pointsValue: 25,
        factionKeywords: 'Imperium, Astra Militarum, <Regiment>',
        keywords: 'Infantry, Veterans, Command Squad',
        wargear: [['Laspistol', 0], ['Chainsword', 0], ['Heavy Flamer', 15], ['Regimental Standard', 5], ['Medi-Pack', 5], ['Meltagun', 10], ['Plasma Gun', 10], ['Grenade Launcher', 5], ['Flamer', 5], ['Vox-Caster', 5], ['Regimental Standard', 5]]
    },
    {
        name: 'Commissar',
        unitType:'Elites',
        powerLevel: 2,
        pointsValue: 25,
        factionKeywords: 'Imperium, Astra Militarum, Officio Prefectus',
        keywords: 'Character, Infantry, Commissar',
        wargear: [['Plasma Pistol', 5], ['Bolt Pistol', 0], ['Boltgun', 2], ['Power Fist', 10], ['Chainsword', 0], ['Power Sword', 5]]
    },
    {
        name: 'Commissar Yarrick',
        unitType:'HQ',
        powerLevel: 6,
        pointsValue: 105,
        factionKeywords: 'Imperium, Astra Militarum, Officio Prefectus',
        keywords: 'Character, Infantry, Commissar, Yarrick',
        wargear: ''
    },
    {
        name: 'Commander Severina Raine',
        unitType:'Elites',
        powerLevel: 2,
        pointsValue: 35,
        factionKeywords: 'Imperium, Astra Militarum, Officio Prefectus',
        keywords: 'Character, Infantry, Commissar, Yarrick',
        wargear: ''
    },
    {
        name: 'Company Commander',
        unitType:'HQ',
        powerLevel: 2,
        pointsValue: 35,
        factionKeywords: 'Imperium, Astra Militarum, <Regiment>',
        keywords: 'Character, Infantry, Officer, Company Commander',
        wargear: [['Plasma Pistol', 5], ['Bolt Pistol', 0], ['Boltgun', 2], ['Power Fist', 10], ['Chainsword', 0], ['Power Sword', 5]]
    },
    {
        name: 'Conscripts',
        unitType:'Troops',
        powerLevel: 5,
        pointsValue: 100,
        factionKeywords: 'Imperium, Astra Militarum, <Regiment>',
        keywords: 'Character, Infantry, Officer, Company Commander',
        wargear: [['1x Conscripts', 5]]
    },
    {
        name: 'Crusaders',
        unitType:'Elites',
        powerLevel: 2,
        pointsValue: 32,
        factionKeywords: 'Imperium, Astra Militarum, Adeptus Ministorum',
        keywords: 'Infantry, Crusaders',
        wargear: ''
    },
    {
        name: 'Deathstrike',
        unitType:'Heavy Support',
        powerLevel: 8,
        pointsValue: 150,
        factionKeywords: 'Imperium, Astra Militarum, <Regiment>',
        keywords: 'Vehicle, Deathstrike',
        wargear: [["Heavy Bolter", 0], ["Heavy Flamer", 0], ["Heavy Stubber", 5], ["Storm Bolter", 3], ['Augur Array', 5], ['Dozer Blade', 5], ['Track Guards', 5], ["Hunter Killer Missile", 5]]
    },
    {
        name: 'Doomhammer',
        unitType:'Lord of War',
        powerLevel: 19,
        pointsValue: 390,
        factionKeywords: 'Imperium, Astra Militarum, <Regiment>',
        keywords: 'Vehicle, Titanic, Transport, Doomhammer',
        wargear: [['Hunter-killer missile', 5], ['Storm Bolter', 3], ['Heavy Stubber', 5], ['2x Sponsons w/ Lascannon & Twin Heavy Bolter', 90], ['2x Sponsons w/ Lascannon & Twin Heavy Flamer', 90], ['4x Sponsons w/ Lascannon & Twin Heavy Bolter', 180], ['4x Sponsons w/ Lascannon & Twin Heavy Flamer', 180]]
    },
    {
        name: 'Earthshaker Battery',
        unitType:'Heavy Support',
        powerLevel: 6,
        pointsValue: 125,
        factionKeywords: 'Imperium, Astra Militarum',
        keywords: 'Vehicle, artillery, Earthshaker Carriage',
        wargear: [["1 x Earthshake Carriage", 125]]
    },
    {
        name: 'Earthshaker Carriage Battery',
        unitType:'Heavy Support',
        powerLevel: 6,
        pointsValue: 120,
        factionKeywords: 'Imperium, Astra Militarum',
        keywords: 'Vehicle, artillery, Earthshaker Carriage',
        wargear: [["1 x Earthshake Carriage", 125]]
    },
    {
        name: 'Ephrael Stern and Kyganil of the Bloody Tears',
        unitType:'Other',
        powerLevel: 7,
        pointsValue: 125,
        factionKeywords: 'Adepta Sororitas',
        keywords: 'Infantry, Character, Ephrael Stern',
        wargear: ''
    },
    {
        name: 'Gotfret De Montbard',
        unitType:'Elites',
        powerLevel: 2,
        pointsValue: 40,
        factionKeywords: 'Imperium, Adeptus Ministorum',
        keywords: 'Infantry, Character, Ecclesiarchy Battle Conclave, Crusader, Gotfret De Montbard',
        wargear: ''
    },
    {
        name: 'Griffon Mortar Carrier',
        unitType:'Heavy Support',
        powerLevel: 4,
        pointsValue: 85,
        factionKeywords: '',
        keywords: '',
        wargear: [['Storm Bolter', 3], ['Heavy Stubber', 5], ['Heavy Bolter', 0], ['Heavy Flamer', 0]]
    },
    {
        name: 'Hades Breaching Drill',
        unitType:'Dedicated Transport',
        powerLevel: 4,
        pointsValue: 80,
        factionKeywords: '',
        keywords: '',
        wargear: ''
    },
    {
        name: 'Heavy Weapons Team',
        unitType:'Heavy Support',
        powerLevel: 3,
        pointsValue: 50,
        factionKeywords: 'Imperium, Astra Militarum, <Regiment>',
        keywords: 'Infantry, Heavy Weapons Squad',
        wargear: [['Autocannon', 0], ['Heavy Bolter', 0], ['Lascannon', 5], ['Missile Launcher', 5], ['Mortar', 0]]
    },
    {
        name: 'Heavy Mortar Battery',
        unitType:'Heavy Support',
        powerLevel: 4,
        pointsValue: 70,
        factionKeywords: 'Astra Militarum, Heavy Support, Imperium',
        keywords: 'Artillery, Heavy Mortar, Vehicle',
        wargear: ''
    },
    {
        name: 'Heavy Quad Launcher Battery',
        unitType:'Heavy Support',
        powerLevel: 5,
        pointsValue: 90,
        factionKeywords: 'Astra Militarum, Heavy Support, Imperium, <REGIMENT>',
        keywords: 'Artillery, Heavy Quad Launcher',
        wargear: ''
    },
    {
        name: 'Hellhammer',
        unitType:'Lord of War',
        powerLevel: 20,
        pointsValue: 425,
        factionKeywords: 'Astra Militarum, Imperium, <REGIMENT>',
        keywords: 'Vehicle, Titanic, Hellhammer',
        wargear: [['Hunter-killer missile', 5], ['Storm Bolter', 3], ['Heavy Stubber', 5], ['2x Sponsons w/ Lascannon & Twin Heavy Bolter', 90], ['2x Sponsons w/ Lascannon & Twin Heavy Flamer', 90], ['4x Sponsons w/ Lascannon & Twin Heavy Bolter', 180], ['4x Sponsons w/ Lascannon & Twin Heavy Flamer', 180]]
    },
    {
        name: 'Hellhound',
        unitType:'Fast Attack',
        powerLevel: 6,
        pointsValue: 95,
        factionKeywords: 'Imperium, Astra Militarum, <REGIMENT>',
        keywords: 'Vehicle, Hellhounds',
        wargear: [['Chem Cannon', 0], ['Melta Cannon', 10], ['Inferno Cannon', 10], ['Multi-melta', 20], ['Heavy Flamer', 0], ['Heavy Bolter', 0], ["Storm Bolter", 3], ['Augur Array', 5], ['Dozer Blade', 5], ['Track Guards', 5], ["Hunter Killer Missile", 5], ['Storm Bolter', 3], ['Heavy Stubber', 5]]
    },
    {
        name: 'Hydra',
        unitType:'Heavy Support',
        powerLevel: 6,
        pointsValue: 110,
        factionKeywords: 'Imperium, Astra Militarum, <REGIMENT>',
        keywords: 'Vehicle, Hydras',
        wargear: [['Chem Cannon', 0], ['Melta Cannon', 10], ['Inferno Cannon', 10], ['Multi-melta', 20], ['Heavy Flamer', 0], ['Heavy Bolter', 0], ["Storm Bolter", 3], ['Augur Array', 5], ['Dozer Blade', 5], ['Track Guards', 5], ["Hunter Killer Missile", 5], ['Heavy Stubber', 5]]
    },
    {
        name: 'Hydra Battery',
        unitType:'Heavy Support',
        powerLevel: 4,
        pointsValue: 80,
        factionKeywords: 'Imperium, Artillery, Astra Militarum, <REGIMENT>',
        keywords: 'Vehicle, Hydra Battery',
        wargear: ''
    },
    {
        name: 'Infantry Squad',
        unitType:'Troops',
        powerLevel: 3,
        pointsValue: 55,
        factionKeywords: 'Imperium, Astra Militarum, <REGIMENT>',
        keywords: 'Infantry, Infantry Squad',
        wargear: [['Bolt Pistol', 2], ['Boltgun', 2], ['Flamer', 5], ['Grenade Launcher', 5], ['Meltagun', 5], ['Plasma Gun', 5], ['Plasma Pistol', 5], ['Sniper Rifle', 2], ['Power Sword', 5], ['Power Fist', 10], ['Chainsword', 0], ['Vox-caster', 5]]
    },
    {
        name: 'Knight Commander Pask',
        unitType:'HQ',
        powerLevel: 14,
        pointsValue: 220,
        factionKeywords: 'Imperium, Astra Militarum, Cadian',
        keywords: 'Character, Vehicle, Leman Russ, Officer, Tank Commander, Knight Commander Pask',
        wargear: [["Storm Bolter", 3], ['Heavy Stubber', 5], ['Augur Array', 5], ['Dozer Blade', 5], ['Track Guards', 5], ["Hunter Killer Missile", 5], ["2x Heavy Bolter Sponsons", 30], ['2x Heavy Flamers', 30], ['2x Multi-meltas', 50], ['2x Plasma Cannon', 40], ['Heavy Bolter', 15], ['Heavy Flamer', 15], ['Lascannon', 20], ['Demolisher Siege Cannon', 5], ['Eradicator Nova Cannon', 0], ['Executioner Plasma Cannon', 0], ['Exterminator Autocannon', 15], ['Punisher Gatling Cannon', 20], ['Vanquisher Battle Cannon', 0]]
    },
    {
        name: 'Leman Russ Battle Tank',
        unitType:'Heavy Support',
        powerLevel: 8,
        pointsValue: 130,
        factionKeywords: 'Imperium, Astra Militarum, <REGIMENT>',
        keywords: 'Vehicle, Leman Russ, Leman Russ Battle Tank',
        wargear: [["Storm Bolter", 3], ['Heavy Stubber', 5], ['Augur Array', 5], ['Dozer Blade', 5], ['Track Guards', 5], ["Hunter Killer Missile", 5], ["2x Heavy Bolter Sponsons", 30], ['2x Heavy Flamers', 30], ['2x Multi-meltas', 50], ['2x Plasma Cannon', 40], ['Heavy Bolter', 15], ['Heavy Flamer', 15], ['Lascannon', 20], ['Battle Cannon', 5], ['Demolisher Siege Cannon', 5], ['Eradicator Nova Cannon', 0], ['Executioner Plasma Cannon', 0], ['Exterminator Autocannon', 15], ['Punisher Gatling Cannon', 20], ['Vanquisher Battle Cannon', 0]]
    },
    {
        name: 'Lord Castellan Creed',
        unitType:'HQ',
        powerLevel: 3,
        pointsValue: 60,
        factionKeywords: 'Imperium, Astra Militarum, Cadian',
        keywords: 'Character, Infantry, Officer, Lord Castellan Creed',
        wargear: [['Warlord', 0]]
    },
    {
        name: 'Lord Commissar',
        unitType:'HQ',
        powerLevel: 3,
        pointsValue: 40,
        factionKeywords: 'Imperium, Astra Militarum, Officio Prefectus',
        keywords: 'Character, Infantry, Commissar, Lord Commissar',
        wargear: [['Warlord', 0]]
    },
    {
        name: 'Manticore',
        unitType:'Heavy Support',
        powerLevel: 8,
        pointsValue: 145,
        factionKeywords: 'Imperium, Astra Militarum, <REGIMENT>',
        keywords: 'Vehicle, Manticore',
        wargear: [["Storm Bolter", 3], ['Heavy Stubber', 5], ['Augur Array', 5], ['Dozer Blade', 5], ['Track Guards', 5], ["Hunter Killer Missile", 5], ['Heavy Flamer', 0], ['Heavy Bolter', 0]]
    },
    {
        name: 'Manticore Battery',
        unitType:'Heavy Support',
        powerLevel: 6,
        pointsValue: 120,
        factionKeywords: 'Imperium, Astra Militarum, <REGIMENT>',
        keywords: 'Vehicle, Manticore Battery, Artillery',
        wargear: ''
    },
    {
        name: 'Malcador',
        unitType:'Heavy Support',
        powerLevel: 12,
        pointsValue: 210,
        factionKeywords: 'Imperium, Astra Militarum, <REGIMENT>',
        keywords: 'Vehicle, Malcador',
        wargear: [["Storm Bolter", 3], ['Heavy Stubber', 5], ["Hunter Killer Missile", 5], ['2x Autocannon Sponsons', 0], ['2x Heavy Bolter Sponsons', 0], ['2x Lascannon Sponsons', 10], ['Autocannon', 0], ['Heavy Bolter', 0], ['Lascannon', 5]]
    },
    {
        name: 'Malcador Annihilator',
        unitType:'Heavy Support',
        powerLevel: 12,
        pointsValue: 230,
        factionKeywords: 'Imperium, Astra Militarum, <REGIMENT>',
        keywords: 'Vehicle, Malcador, Malcador Annihilator',
        wargear: [["Storm Bolter", 3], ['Heavy Stubber', 5], ["Hunter Killer Missile", 5], ['2x Autocannon Sponsons', 0], ['2x Heavy Bolter Sponsons', 0], ['2x Lascannon Sponsons', 10]]
    },
    {
        name: 'Malcador Defender',
        unitType:'Heavy Support',
        powerLevel: 12,
        pointsValue: 230,
        factionKeywords: 'Imperium, Astra Militarum, <REGIMENT>',
        keywords: 'Vehicle, Malcador, Malcador Defender',
        wargear: [["Storm Bolter", 3], ['Heavy Stubber', 5], ["Hunter Killer Missile", 5], ['2x Autocannon Sponsons', 0], ['2x Heavy Bolter Sponsons', 0], ['2x Lascannon Sponsons', 10]]
    },
    {
        name: 'Malcador Infernus',
        unitType:'Heavy Support',
        powerLevel: 12,
        pointsValue: 230,
        factionKeywords: 'Imperium, Astra Militarum, <REGIMENT>',
        keywords: 'Vehicle, Malcador, Malcador Defender',
        wargear: [["Storm Bolter", 3], ['Heavy Stubber', 5], ["Hunter Killer Missile", 5], ['2x Autocannons', 30], ['2x Heavy Bolters', 30],  ['2x Heavy Flamers', 30],  ['2x Heavy Stubbers', 10], ['2x Lascannons', 40]]
    },
    {
        name: 'Master of Ordnance',
        unitType:'Elites',
        powerLevel: 2,
        pointsValue: 35,
        factionKeywords: 'Imperium, Astra Militarum, <REGIMENT>',
        keywords: 'Vehicle, Malcador, Malcador Defender',
        wargear: [['Warlord', 0]]
    },
    {
        name: 'Medusa Carriage Battery',
        unitType:'Heavy Support',
        powerLevel: 6,
        pointsValue: 120,
        factionKeywords: 'Imperium, Astra Militarum, <REGIMENT>',
        keywords: 'Artillery, Vehicle, Medusa Carriage',
        wargear: ''
    },
    {
        name: 'Militarum Tempestus Scions',
        unitType:'Troops',
        powerLevel: 3,
        pointsValue: 45,
        factionKeywords: 'Imperium, Astra Militarum, Militarum Tempestus',
        keywords: 'Infantry, Tempestus Scions',
        wargear: [['Chainsword', 0], ['Power Sword', 5], ['Power Fist', 10], ['Bolt Pistol', 2], ['Hot-shot Laspistol', 0], ['Plasma Pistol', 5], ['Flamer', 5], ['Grenade Launcher', 5], ['Hot-shot Volley Gun', 5], ['Meltagun', 10], ['Plasma Gun', 10], ['Vox-caster', 5]] 
    },
    {
        name: 'Militarum Tempestus Command Squad',
        unitType:'Elites',
        powerLevel: 3,
        pointsValue: 40,
        factionKeywords: 'Imperium, Astra Militarum, Militarum Tempestus',
        keywords: 'Infantry, Tempestus Command Squad',
        wargear: [['Chainsword', 0], ['Power Sword', 5], ['Power Fist', 10], ['Bolt Pistol', 2], ['Hot-shot Laspistol', 0], ['Plasma Pistol', 5], ['Flamer', 5], ['Grenade Launcher', 5], ['Hot-shot Volley Gun', 5], ['Meltagun', 10], ['Plasma Gun', 10], ['Vox-caster', 5], ['Medi-pack', 5], ['Platoon Standard', 5]] 
    },
    {
        name: 'Ministorum Priest',
        unitType:'Elites',
        powerLevel: 2,
        pointsValue: 40,
        factionKeywords: 'Imperium, Astra Militarum, Adeptus Ministorum',
        keywords: 'Character, Infantry, Ministorum Priest',
        wargear: [['Warlord', 0], ['Autogun', 0], ['Chainsword', 0]] 
    },
    {
        name: 'Nork Deddog',
        unitType:'Elites',
        powerLevel: 3,
        pointsValue: 60,
        factionKeywords: 'Imperium, Astra Militarum, Militarum Auxilla',
        keywords: 'Character, Infantry, Ogryn, Nork Deddog',
        wargear: '' 
    },
    {
        name: 'Officer of the Fleet',
        unitType:'Elites',
        powerLevel: 2,
        pointsValue: 25,
        factionKeywords: 'Imperium, Astra Militarum, Aeronautica Imperialis',
        keywords: 'Character, Infantry, Officer, Officer of the Fleet',
        wargear: [['Warlord', 0]] 
    },
    {
        name: 'Ogryn Bodyguard',
        unitType:'Elites',
        powerLevel: 4,
        pointsValue: 50,
        factionKeywords: 'Imperium, Astra Militarum, Militarum Auxilla',
        keywords: 'Character, Infantry, Ogryn, Ogryn Bodyguard',
        wargear: [['Bullgryn Plate', 5], ['Brute Shield', 5], ['Huge Knife', 0], ['Slabshield', 0], ['Bullgryn Maul', 5], ['Grenadier Gauntlet', 5], ['Ripper Gun', 0]] 
    },
    {
        name: 'Ogryns',
        unitType:'Elites',
        powerLevel: 5,
        pointsValue: 90,
        factionKeywords: 'Imperium, Astra Militarum, Militarum Auxilla',
        keywords: 'Character, Infantry, Ogryn',
        wargear: '' 
    },
    {
        name: 'Platoon Commander',
        unitType:'Elites',
        powerLevel: 2,
        pointsValue: 25,
        factionKeywords: 'Imperium, Astra Militarum, <REGIMENT>',
        keywords: 'Character, Infantry, Officer, Platoon Commander',
        wargear: [['Warlord', 0], ['Chainsword', 0], ['Power Sword', 5], ['Power Fist', 10], ['Bolt Pistol', 2], ['Boltgun', 2], ['Laspistol', 0], ['Plasma Pistol', 5]] 
    },
    {
        name: 'Primaris Psyker',
        unitType:'HQ',
        powerLevel: 3,
        pointsValue: 50,
        factionKeywords: 'Imperium, Astra Militarum, Astra Telepathica, Scholastica Psykana',
        keywords: 'Character, Infantry, Psyker, Primaris Psyker',
        wargear: [['Warlord', 0]] 
    },
    {
        name: 'Ratlings',
        unitType:'Elites',
        powerLevel: 2,
        pointsValue: 50,
        factionKeywords: 'Imperium, Astra Militarum, Miltarum Auxilla',
        keywords: 'Infantry, Ratlings',
        wargear: '' 
    },
    {
        name: 'Rapier Laser Destroyer Battery',
        unitType:'Heavy Support',
        powerLevel: 5,
        pointsValue: 85,
        factionKeywords: 'Imperium, Astra Militarum, Miltarum Auxilla',
        keywords: 'Vehicle, Artillery, Rapier Laser Destroyer',
        wargear: '' 
    },
    {
        name: 'Rein and Raus',
        unitType:'Elites',
        powerLevel: 2,
        pointsValue: 40,
        factionKeywords: 'Imperium, Astra Militarum, Miltarum Auxilla',
        keywords: 'Character, Infantry, Ratling, Rein',
        wargear: '' 
    },
    {
        name: 'Rough Riders',
        unitType:'Fast Attack',
        powerLevel: 3,
        pointsValue: 30,
        factionKeywords: 'Imperium, Astra Militarum, Miltarum Auxilla',
        keywords: 'Cavalry, Rough Riders',
        wargear: [['Plasma Pistol', 5], ['Power Sword', 0], ['Power Lance', 0], ['Power Fist', 0]] 
    },
    {
        name: 'Sabre Weapons Battery',
        unitType:'Heavy Support',
        powerLevel: 2,
        pointsValue: 50,
        factionKeywords: 'Imperium, Astra Militarum, Miltarum Auxilla',
        keywords: 'Cavalry, Rough Riders',
        wargear: [['Defense Searchlight', 20], ['Twin Autocannon', 20], ['Twin Heavy Bolter', 20], ['Twin Heavy Stubber', 0], ['Twin Lascannon', 30]] 
    },
    {
        name: 'Sentinel Powerlifters',
        unitType:'Elites',
        powerLevel: 3,
        pointsValue: 50,
        factionKeywords: 'Imperium, Astra Militarum, <REGIMENT>',
        keywords: 'Vehicle, Sentintel Powerlifters',
        wargear: ''
    },
    {
        name: 'Sergeant Harker',
        unitType:'Elites',
        powerLevel: 3,
        pointsValue: 55,
        factionKeywords: 'Imperium, Astra Militarum, Catachan',
        keywords: 'Character, Infantry, Sergeant Harker',
        wargear: [['Warlord', 0]]
    },
    {
        name: 'Scout Sentinel',
        unitType:'Fast Attack',
        powerLevel: 3,
        pointsValue: 35,
        factionKeywords: 'Imperium, Astra Militarum, <REGIMENT>',
        keywords: 'Vehicle, Scout Sentinels',
        wargear: [['Hunter-killer missile', 5], ['Sentinel Chainsaw', 2], ['Autocannon', 10], ['Heavy Flamer', 10], ['Lascannon', 15], ['Missile Launcher', 15], ['Multi-laser', 0]]
    },
    {
        name: 'Servitors',
        unitType:'Elites',
        powerLevel: 2,
        pointsValue: 30,
        factionKeywords: 'Imperium, Astra Militarum, Adeptus Mechanicus, <FORGE WORLD>',
        keywords: 'Infantry, Servitors',
        wargear: [['Heavy Bolter', 5], ['Multi-melta', 15], ['Plasma Cannon', 10], ['Servo-arm', 0]]
    },
    {
        name: 'Salamander Command Vehicle',
        unitType:'HQ',
        powerLevel: 6,
        pointsValue: 100,
        factionKeywords: 'Imperium, Astra Militarum, <REGIMENT>',
        keywords: 'Vehicle, Salamander Command Vehicle',
        wargear: [['Hunter-killer missile', 5], ['Heavy Stubber', 5], ['Storm Bolter', 3]]
    },
    {
        name: 'Salamander Scout Tank',
        unitType:'Fast Attack',
        powerLevel: 4,
        pointsValue: 75,
        factionKeywords: 'Imperium, Astra Militarum, <REGIMENT>',
        keywords: 'Vehicle, Salamander Scout Tanks',
        wargear: [['Hunter-killer missile', 5], ['Heavy Stubber', 5], ['Storm Bolter', 3]]
    },
    {
        name: 'Sly Marbo',
        unitType:'HQ',
        powerLevel: 3,
        pointsValue: 60,
        factionKeywords: 'Imperium, Astra Militarum, Catachan',
        keywords: 'Character, Infantry, Sly Marbo',
        wargear: ''
    },
    {
        name: 'Shadowsword',
        unitType:'Lord of War',
        powerLevel: 21,
        pointsValue: 440,
        factionKeywords: 'Imperium, Astra Militarum, <REGIMENT>',
        keywords: 'Vehicle, Titanic, Shadowsword',
        wargear: [['Hunter-killer missile', 5], ['Storm Bolter', 3], ['Heavy Stubber', 5], ['2x Sponsons w/ Lascannon & Twin Heavy Bolter', 90], ['2x Sponsons w/ Lascannon & Twin Heavy Flamer', 90], ['4x Sponsons w/ Lascannon & Twin Heavy Bolter', 180], ['4x Sponsons w/ Lascannon & Twin Heavy Flamer', 180]]
    },
    {
        name: 'Special Weapons Squad',
        unitType:'Elites',
        powerLevel: 2,
        pointsValue: 40,
        factionKeywords: 'Imperium, Astra Militarum, <REGIMENT>',
        keywords: 'Infantry, Special Weapons Squad',
        wargear: [['Flamer', 5], ['Grenade Launcher', 5], ['Meltagun', 5], ['Plasma Gun', 5], ['Sniper Rifle', 2]]
    },
    {
        name: 'Stormlord',
        unitType:'Lord of War',
        powerLevel: 20,
        pointsValue: 430,
        factionKeywords: 'Imperium, Astra Militarum, <REGIMENT>',
        keywords: 'Vehicle, Titanic, Stormlord',
        wargear: [['Hunter-killer missile', 5], ['Storm Bolter', 3], ['Heavy Stubber', 5], ['2x Sponsons w/ Lascannon & Twin Heavy Bolter', 90], ['2x Sponsons w/ Lascannon & Twin Heavy Flamer', 90], ['4x Sponsons w/ Lascannon & Twin Heavy Bolter', 180], ['4x Sponsons w/ Lascannon & Twin Heavy Flamer', 180]]
    },
    {
        name: 'Stormsword',
        unitType:'Lord of War',
        powerLevel: 20,
        pointsValue: 410,
        factionKeywords: 'Imperium, Astra Militarum, <REGIMENT>',
        keywords: 'Vehicle, Titanic, Stormsword',
        wargear: [['Hunter-killer missile', 5], ['Storm Bolter', 3], ['Heavy Stubber', 5], ['2x Sponsons w/ Lascannon & Twin Heavy Bolter', 90], ['2x Sponsons w/ Lascannon & Twin Heavy Flamer', 90], ['4x Sponsons w/ Lascannon & Twin Heavy Bolter', 180], ['4x Sponsons w/ Lascannon & Twin Heavy Flamer', 180]]
    },
    {
        name: 'Stygies Destroyer Tank Hunter',
        unitType:'Heavy Support',
        powerLevel: 8,
        pointsValue: 155,
        factionKeywords: 'Imperium, Astra Militarum, <REGIMENT>',
        keywords: 'Vehicle, Stygies Destroyer Tank Hunter',
        wargear: [['Hunter-killer missile', 5], ['Heavy Stubber', 5], ['Storm Bolter', 3]]
    },
    {
        name: 'Tank Commander',
        unitType:'HQ',
        powerLevel: 9,
        pointsValue: 155,
        factionKeywords: 'Imperium, Astra Militarum, <REGIMENT>',
        keywords: 'Character, Vehicle, Leman Russ, Officer, Tank Commander',
        wargear: [["Storm Bolter", 3], ['Heavy Stubber', 5], ['Augur Array', 5], ['Dozer Blade', 5], ['Track Guards', 5], ["Hunter Killer Missile", 5], ["2x Heavy Bolter Sponsons", 30], ['2x Heavy Flamers', 30], ['2x Multi-meltas', 50], ['2x Plasma Cannon', 40], ['Heavy Bolter', 15], ['Heavy Flamer', 15], ['Lascannon', 20], ['Battle Cannon', 5], ['Demolisher Siege Cannon', 5], ['Eradicator Nova Cannon', 0], ['Executioner Plasma Cannon', 0], ['Exterminator Autocannon', 15], ['Punisher Gatling Cannon', 20], ['Vanquisher Battle Cannon', 0]]
    },
    {
        name: 'Taurox',
        unitType:'Dedicated Transport',
        powerLevel: 5,
        pointsValue: 90,
        factionKeywords: 'Imperium, Astra Militarum, <REGIMENT>',
        keywords: 'Vehicle, Transport, Taurox',
        wargear: [["Storm Bolter", 3], ['Heavy Stubber', 5]]
    },
    {
        name: 'Taurox Prime',
        unitType:'Dedicated Transport',
        powerLevel: 5,
        pointsValue: 90,
        factionKeywords: 'Imperium, Astra Militarum, Militarum Tempestus',
        keywords: 'Vehicle, Transport, Taurox Prime',
        wargear: [["Storm Bolter", 3], ['Heavy Stubber', 5], ['2x Autocannon Sponsons', 10], ['2x Hot-shot Volley Guns', 0], ['Taurox Battle Cannon', 0], ['Taurox Gatling Cannon', 5], ['Taurox Missile Launcher', 15]]
    },
    {
        name: 'Tauros Assault Vehicle',
        unitType:'Fast Attack',
        powerLevel: 3,
        pointsValue: 50,
        factionKeywords: 'Imperium, Astra Militarum, <REGIMENT>',
        keywords: 'Vehicle, Tauros, Tauros Assault Vehicle',
        wargear: [['Hunter-killer missile', 5], ['Heavy Flamer', 0], ['Tauros Grenade Launcher', 0], ['Twin Multi-laser', 0]]
    },
    {
        name: 'Tauros Venator',
        unitType:'Fast Attack',
        powerLevel: 3,
        pointsValue: 40,
        factionKeywords: 'Imperium, Astra Militarum, <REGIMENT>',
        keywords: 'Vehicle, Tauros, Tauros Venators',
        wargear: [['Hunter-killer missile', 5], ['Heavy Flamer', 0], ['Twin Lascannon', 30], ['Twin Multi-laser', 0]]
    },
    {
        name: 'Tech-Priest Enginseer',
        unitType:'Elites',
        powerLevel: 2,
        pointsValue: 35,
        factionKeywords: 'Imperium, Astra Militarum, Cult Mechanicus, <FORGE WORLD>',
        keywords: 'Character, Infantry, Tech-Priest, Enginseer',
        wargear: [['Warlord', 0]]
    },
    {
        name: 'Tempestor Prime',
        unitType:'HQ',
        powerLevel: 3,
        pointsValue: 40,
        factionKeywords: 'Imperium, Astra Militarum, Militarum Tempestus',
        keywords: 'Character, Infantry, Officer, Tempestor Prime',
        wargear: [['Warlord', 0], ['Chainsword', 0], ['Power Sword', 5], ['Power Fist', 10], ['Bolt Pistol', 2], ['Hot-shot Laspistol', 0], ['Tempestus Command Rod', 5], ['Plasma Pistol', 5]]
    },
    {
        name: 'Trojan Support Vehicle',
        unitType:'Dedicated Transport',
        powerLevel: 5,
        pointsValue: 85,
        factionKeywords: 'Imperium, Astra Militarum, <REGIMENT>',
        keywords: 'Vehicle, Trojan Support Vehicle',
        wargear: [['Hunter-killer missile', 5], ["Heavy Bolter", 0], ['Heavy Flamer', 0]]
    },
    {
        name: 'Thunderers',
        unitType:'Heavy Support',
        powerLevel: 7,
        pointsValue: 120,
        factionKeywords: 'Imperium, Astra Militarum, <REGIMENT>',
        keywords: 'Vehicle, Thunderers',
        wargear: [['Hunter-killer missile', 5], ["Heavy Stubber", 5], ['Storm Bolter', 5]]
    },
    {
        name: 'Thunderbolt',
        unitType:'Flyer',
        powerLevel: 11,
        pointsValue: 210,
        factionKeywords: 'Imperium, Astra Militarum, Aeronautica Imperialis, <REGIMENT>',
        keywords: 'Vehicle, Aircraft, Flyer, Thunderbolt',
        wargear: [['Thunderbolt Hellstrike Rack', 20]]
    },
    {
        name: 'Valdor Tank Hunter',
        unitType:'Heavy Support',
        powerLevel: 17,
        pointsValue: 335,
        factionKeywords: 'Imperium, Astra Militarum, <REGIMENT>',
        keywords: 'Vehicle, Valdor Tank Hunter, Titanic',
        wargear: [['Autocannon', 0], ['Heavy Bolter', 0], ['Heavy Flamer', 0], ['Lascannon', 10], ['Heavy Stubber', 5], ['Storm Bolter', 3], ['Hunter-killer Missile', 5]]
    },
    {
        name: 'Valkyrie',
        unitType:'Flyer',
        powerLevel: 7,
        pointsValue: 120,
        factionKeywords: 'Imperium, Astra Militarum, Aeronautica Imperialis',
        keywords: 'Vehicle, Transport, Fly, Valkyries',
        wargear: [['Multi-laser', 0], ['Hellstrike Missiles', 0], ['Lascannon', 15], ['2x Heavy Bolters', 30], ['Two Multiple Rocket Pods', 5]]
    },
    {
        name: 'Veterans',
        unitType:'Elites',
        powerLevel: 5,
        pointsValue: 65,
        factionKeywords: 'Imperium, Astra Militarum, <REGIMENT>',
        keywords: 'Infantry, Veterans',
        wargear: [['Chainsword', 0], ['Power Sword', 5], ['Power Fist', 10], ['Bolt Pistol', 2], ['Boltgun', 2], ['Plasma Pistol', 5], ['Shotgun', 0],  ['Autogun', 0], ['Flamer', 5], ['Heavy Flamer', 15], ['Grenade Launcher', 5], ['Meltagun', 10], ['Plasma Gun', 10], ['Sniper Rifle', 2], ['Vox-caster', 5]]
    },
    {
        name: 'Vendetta Gunship',
        unitType:'Flyer',
        powerLevel: 12,
        pointsValue: 210,
        factionKeywords: 'Imperium, Astra Militarum, Aeronautica Imperialis',
        keywords: 'Vehicle, Transport, Fly, Aircraft, Vendetta Gunship',
        wargear: [['Heavy Bolter', 15], ['2x Vendetta Twin Lascannons', 0], ['Vendetta Hellstrike Rack', 0]]
    },
    {
        name: 'Voss-Pattern Lightning',
        unitType:'Flyer',
        powerLevel: 7,
        pointsValue: 130,
        factionKeywords: 'Imperium, Astra Militarum, Aeronautica Imperialis',
        keywords: 'Vehicle, Transport, Fly, Aircraft, Voss-pattern Lightning',
        wargear: [['2x Lascannon', 0], ['Lightning Hellstrike Rack', 20]]
    },
    {
        name: 'Vulture Gunship',
        unitType:'Flyer',
        powerLevel: 10,
        pointsValue: 180,
        factionKeywords: 'Imperium, Astra Militarum, Aeronautica Imperialis',
        keywords: 'Vehicle, Fly, Aircraft, Vulture Gunship',
        wargear: [['Heavy Bolter', 0], ['2x Vulture Gatling Cannons', 20], ['Multiple Rocket Pods & Hellstrike Rack', 0]]
    },
    {
        name: 'Wyrdvane Psykers',
        unitType:'Elites',
        powerLevel: 1,
        pointsValue: 24,
        factionKeywords: 'Imperium, Astra Militarum, Astra Telepathica, Scholastica Psykana',
        keywords: 'Infantry, Psyker, Wyrdvane Psykers',
        wargear: ''
    },
    {
        name: 'Wyvern',
        unitType:'Heavy Support',
        powerLevel: 8,
        pointsValue: 135,
        factionKeywords: 'Imperium, Astra Militarum, <REGIMENT>',
        keywords: 'Vehicle, Wyverns',
        wargear: [['Heavy Flamer', 0], ['Heavy Bolters', 0], ["Storm Bolter", 3], ['Heavy Stubber', 5], ['Augur Array', 5], ['Dozer Blade', 5], ['Track Guards', 5], ["Hunter Killer Missile", 5]]
    },
];


// Unit type switches/flags used for populating unit list and minimizing unit list
let hqFlag = 0;
let troopsFlag = 0;
let elitesFlag = 0;
let fastAttackFlag = 0;
let heavySupportFlag = 0;
let flyerFlag = 0;
let lordOfWarFlag = 0;
let dedicatedTransportFlag = 0;
let otherFlag = 0;

// Populate Unit Selection List by type of unit (unitType)
const populateUnitList = (e) => {

    // Unit Type List Variables
    const hqUnitList = document.querySelector('#HQ-unit-list');
    const troopsUnitList = document.querySelector('#troops-unit-list');
    const elitesUnitList = document.querySelector('#elites-unit-list');
    const fastAttackUnitList = document.querySelector('#fastAttack-unit-list');
    const heavySupportUnitList = document.querySelector('#heavySupport-unit-list');
    const flyerUnitList = document.querySelector('#flyer-unit-list');
    const lordOfWarUnitList = document.querySelector('#lordOfWar-unit-list');
    const dedicatedTransportUnitList = document.querySelector('#dedicatedTransport-unit-list');
    const otherUnitList = document.querySelector('#other-unit-list');

    let unitType = e.target.parentElement.parentElement.textContent.substring(0, e.target.parentElement.parentElement.textContent.indexOf(' '));

    // Check for unit type
    switch (unitType) {
        case 'HQ':
            if (hqFlag == 0) {
                for (let i = 0; i < unitsList.length; i++) {
                    if (unitsList[i].unitType == "HQ") {
                        // Create li element
                        let li = document.createElement("li");
                        li.textContent = `${unitsList[i].name} - ${unitsList[i].powerLevel} PL, ${unitsList[i].pointsValue} Points`;
                        // Create add button
                        let addHQButton = document.createElement("button");
                        addHQButton.className = 'add-unit-button';
                        addHQButton.textContent = 'Add';
                        addHQButton.addEventListener("click", addUnit);
                        // Append add button
                        li.appendChild(addHQButton);
                        // Add Unit to HQ List
                        hqUnitList.appendChild(li);
                    }
                }
                hqFlag = 1;
            }
            break;
        case 'Troops':
            if (troopsFlag == 0) {
                for (let i = 0; i < unitsList.length; i++) {
                    if (unitsList[i].unitType == "Troops") {
                        // Create li element
                        let li = document.createElement("li");
                        li.textContent = `${unitsList[i].name} - ${unitsList[i].powerLevel} PL, ${unitsList[i].pointsValue} Points`;
                        // Create add button
                        let addTroopsButton = document.createElement("button");
                        addTroopsButton.className = 'add-unit-button';
                        addTroopsButton.textContent = 'Add';
                        addTroopsButton.addEventListener("click", addUnit);
                        // Append add button
                        li.appendChild(addTroopsButton);
                        // Add Unit to HQ List
                        troopsUnitList.appendChild(li);
                    }
                }
                troopsFlag = 1;
            }
            break;
        case 'Elites':
            if (elitesFlag == 0) {
                for (let i = 0; i < unitsList.length; i++) {
                    if (unitsList[i].unitType == "Elites") {
                        // Create li element
                        let li = document.createElement("li");
                        li.textContent = `${unitsList[i].name} - ${unitsList[i].powerLevel} PL, ${unitsList[i].pointsValue} Points`;
                        // Create add button
                        let addElitesButton = document.createElement("button");
                        addElitesButton.className = 'add-unit-button';
                        addElitesButton.textContent = 'Add';
                        addElitesButton.addEventListener("click", addUnit);
                        // Append add button
                        li.appendChild(addElitesButton);
                        // Add Unit to HQ List
                        elitesUnitList.appendChild(li);
                    }
                }
                elitesFlag = 1;
            }
            break;
        case 'Fast':
            if (fastAttackFlag == 0) {
                for (let i = 0; i < unitsList.length; i++) {
                    if (unitsList[i].unitType == "Fast Attack") {
                        // Create li element
                        let li = document.createElement("li");
                        li.textContent = `${unitsList[i].name} - ${unitsList[i].powerLevel} PL, ${unitsList[i].pointsValue} Points`;
                        // Create add button
                        let addFastAttackButton = document.createElement("button");
                        addFastAttackButton.className = 'add-unit-button';
                        addFastAttackButton.textContent = 'Add';
                        addFastAttackButton.addEventListener("click", addUnit);
                        // Append add button
                        li.appendChild(addFastAttackButton);
                        // Add Unit to HQ List
                        fastAttackUnitList.appendChild(li);
                    }
                }
                fastAttackFlag = 1;
            }
            break;
        case 'Heavy':
            if (heavySupportFlag == 0) {
                for (let i = 0; i < unitsList.length; i++) {
                    if (unitsList[i].unitType == "Heavy Support") {
                        // Create li element
                        let li = document.createElement("li");
                        li.textContent = `${unitsList[i].name} - ${unitsList[i].powerLevel} PL, ${unitsList[i].pointsValue} Points`;
                        // Create add button
                        let addHeavySupportButton = document.createElement("button");
                        addHeavySupportButton.className = 'add-unit-button';
                        addHeavySupportButton.textContent = 'Add';
                        addHeavySupportButton.addEventListener("click", addUnit);
                        // Append add button
                        li.appendChild(addHeavySupportButton);
                        // Add Unit to HQ List
                        heavySupportUnitList.appendChild(li);
                    }
                }
                heavySupportFlag = 1;
            }
            break;
        case 'Flyer':
            if (flyerFlag == 0) {
                for (let i = 0; i < unitsList.length; i++) {
                    if (unitsList[i].unitType == "Flyer") {
                        // Create li element
                        let li = document.createElement("li");
                        li.textContent = `${unitsList[i].name} - ${unitsList[i].powerLevel} PL, ${unitsList[i].pointsValue} Points`;
                        // Create add button
                        let addFlyerButton = document.createElement("button");
                        addFlyerButton.className = 'add-unit-button';
                        addFlyerButton.textContent = 'Add';
                        addFlyerButton.addEventListener("click", addUnit);
                        // Append add button
                        li.appendChild(addFlyerButton);
                        // Add Unit to HQ List
                        flyerUnitList.appendChild(li);
                    }
                }
                flyerFlag = 1;
            }
            break;
        case 'Lord':
            if (lordOfWarFlag == 0) {
                for (let i = 0; i < unitsList.length; i++) {
                    if (unitsList[i].unitType == "Lord of War") {
                        // Create li element
                        let li = document.createElement("li");
                        li.textContent = `${unitsList[i].name} - ${unitsList[i].powerLevel} PL, ${unitsList[i].pointsValue} Points`;
                        // Create add button
                        let addLordOfWarButton = document.createElement("button");
                        addLordOfWarButton.className = 'add-unit-button';
                        addLordOfWarButton.textContent = 'Add';
                        addLordOfWarButton.addEventListener("click", addUnit);
                        // Append add button
                        li.appendChild(addLordOfWarButton);
                        // Add Unit to HQ List
                        lordOfWarUnitList.appendChild(li);
                    }
                }
                lordOfWarFlag = 1;
            }
            break;
        case 'Dedicated':
            if (dedicatedTransportFlag == 0) {
                for (let i = 0; i < unitsList.length; i++) {
                    if (unitsList[i].unitType == "Dedicated Transport") {
                        // Create li element
                        let li = document.createElement("li");
                        li.textContent = `${unitsList[i].name} - ${unitsList[i].powerLevel} PL, ${unitsList[i].pointsValue} Points`;
                        // Create add button
                        let addDedicatedTransportButton = document.createElement("button");
                        addDedicatedTransportButton.className = 'add-unit-button';
                        addDedicatedTransportButton.textContent = 'Add';
                        addDedicatedTransportButton.addEventListener("click", addUnit);
                        // Append add button
                        li.appendChild(addDedicatedTransportButton);
                        // Add Unit to HQ List
                        dedicatedTransportUnitList.appendChild(li);
                    }
                }
                dedicatedTransportFlag = 1;
            }
            break;
        case 'Other':
            if (otherFlag == 0) {
                for (let i = 0; i < unitsList.length; i++) {
                    if (unitsList[i].unitType == "Other") {
                        // Create li element
                        let li = document.createElement("li");
                        li.textContent = `${unitsList[i].name} - ${unitsList[i].powerLevel} PL, ${unitsList[i].pointsValue} Points`;
                        // Create add button
                        let addOtherButton = document.createElement("button");
                        addOtherButton.className = 'add-unit-button';
                        addOtherButton.textContent = 'Add';
                        addOtherButton.addEventListener("click", addUnit);
                        // Append add button
                        li.appendChild(addOtherButton);
                        // Add Unit to HQ List
                        otherUnitList.appendChild(li);
                    }
                }
                otherFlag = 1;
            }
            break;
    }
}

// Add event listener for populateUnitList
let addButtons = document.querySelectorAll('.add-button');
for (let i = 0; i < addButtons.length; i++) {
    addButtons[i].addEventListener('click', populateUnitList)
};


// Clear/Minimize Unit Selection List by type of unit
const minimizeMenu = (e) => {
    // Grabs the selected unit list
    let unitTypeList = e.target.parentElement.parentElement.childNodes[5];
    // Grabs first 2 letters of unit type to identify unit type
    let listSelector = unitTypeList.id.substring(0, 2);
    // removes all child nodes of the selected list
    while (unitTypeList.firstChild) {
        unitTypeList.removeChild(unitTypeList.firstChild);
    }
    // Resets unit type flag to 0 so it can be expanded again inside the
    // populateUnitList function
    switch (listSelector) {
        case 'HQ':
            hqFlag = 0;
            break;
        case 'tr':
            troopsFlag = 0;
            break;
        case 'el':
            elitesFlag = 0;
            break;
        case 'fa':
            fastAttackFlag = 0;
            break;
        case 'he':
            heavySupportFlag = 0;
            break;
        case 'fl':
            flyerFlag = 0;
            break;
        case 'lo':
            lordOfWarFlag = 0;
            break;
        case 'de':
            dedicatedTransportFlag = 0;
            break;
        case 'ot':
            otherFlag = 0;
            break;
        default:
            break;
    }
};

// Add event listener for minimizeMenu to all minimize buttons
let minimizeButtons = document.querySelectorAll('.minimize-button');
for (let i = 0; i < minimizeButtons.length; i++) {
    minimizeButtons[i].addEventListener('click', minimizeMenu);
};


// Add selected unit to Army List
const addUnit = (e) => {

    // Army List type
    const armyListHQ = document.querySelector('#army-list-HQ');
    const armyListTroops = document.querySelector('#army-list-troops');
    const armyListElites = document.querySelector('#army-list-elites');
    const armyListFastAttack = document.querySelector('#army-list-fastAttack');
    const armyListHeavySupport = document.querySelector('#army-list-heavySupport');
    const armyListFlyers = document.querySelector('#army-list-flyers');
    const armyListLordOfWar = document.querySelector('#army-list-lordOfWar');
    const armyListDedicatedTransport = document.querySelector('#army-list-dedicatedTransport');
    const armyListOther = document.querySelector('#army-list-other');

    let unit = e.target.parentElement;
    let unitLabel = unit.textContent.substring(0, unit.textContent.length - 3);
    let unitName = unit.textContent.substring(0, unit.textContent.indexOf(' - '));
    let unitType = unit.parentElement.id.substring(0, unit.parentElement.id.indexOf('-'));

    // Create li element
    let li = document.createElement("li");
    li.textContent = `> ${unitLabel}`;
    // Append addWargear button to li element and add event listener
    let displayWargearButton = document.createElement("button");
    displayWargearButton.className = 'display-wargear-button';
    displayWargearButton.textContent = '+';
    displayWargearButton.addEventListener("click", displayWargearOptions);
    li.appendChild(displayWargearButton);
    // Append delete button to li element and add event listener
    let deleteUnitButton = document.createElement("button");
    deleteUnitButton.className = 'delete-unit-button';
    deleteUnitButton.textContent = 'x';
    deleteUnitButton.addEventListener("click", deleteUnit);
    li.appendChild(deleteUnitButton);
    // Append wargear options list for unit
    let unitWargear = document.createElement('ul');
    unitWargear.className = 'unit-wargear';
    li.appendChild(unitWargear);
    // Loop through unitList and add points and power level
    for (let i = 0; i < unitsList.length; i++) {
        console.log(unitsList[i].name);
        if (unitName == unitsList[i].name) {
            addTotalPoints(unitsList[i].pointsValue);
            addPowerLevel(unitsList[i].powerLevel);
        }
    };
    // Add the unit to the army list depending on its unit type (unitType)
    switch (unitType) {
        case 'HQ':
            armyListHQ.appendChild(li);
            break;
        case 'troops':
            armyListTroops.appendChild(li);
            break;
        case 'elites':
            armyListElites.appendChild(li);
            break;
        case 'fastAttack':
            armyListFastAttack.appendChild(li);
            break;
        case 'heavySupport':
            armyListHeavySupport.appendChild(li);
            break;
        case 'flyer':
            armyListFlyers.appendChild(li);
            break;
        case 'lordOfWar':
            armyListLordOfWar.appendChild(li);
            break;
        case 'dedicatedTransport':
            armyListDedicatedTransport.appendChild(li);
            break;
        case 'other':
            armyListOther.appendChild(li);
            break;
        default:
            break;
    }
};


// Delete unit (also subtracts units total points value including wargear)
const deleteUnit = (e) => {
    let unit = e.target.parentElement;
    let unitParent = unit.parentElement;
    let unitName = unit.textContent.substring(2, unit.textContent.indexOf(' - '));
    let unitWargear = unit.childNodes[3];

    // Loop through unitsList and subtract points and power level
    for (let i = 0; i < unitsList.length; i++) {
        if (unitName == unitsList[i].name) {
            // Loop through Units wargear and subtract the wargear points if there is any
            for (let j = 0; j < unitWargear.childNodes.length; j++) {
                //console.log(`Item ${j}`, unitWargear.childNodes[j]);  
                if (unitWargear.childNodes[j].textContent.includes("(x")) {
                    let quantity = parseInt(unitWargear.childNodes[j].textContent.indexOf("(x") + 1);
                    let points = parseInt(unitWargear.childNodes[j].textContent.substring(unitWargear.childNodes[j].textContent.indexOf("- ") + 2, unitWargear.childNodes[j].textContent.indexOf("- ") + 3));
                    decreaseTotalPoints(quantity * points);
                }
            }
            decreaseTotalPoints(unitsList[i].pointsValue);
            decreasePowerLevel(unitsList[i].powerLevel);
        }
    }
    unitParent.removeChild(unit);
};


// Display wargear list in wargear menu
// selectedUnit is set to unit that you are trying to add wargear to
let selectedUnit;
const displayWargearOptions = (e) => {
    let clearButtonFlag = 0;
    let unit = e.target.parentElement;
    let unitName = unit.textContent.substring(2, unit.textContent.indexOf('PL') - 5);
    let wargearMenu = document.querySelector('#wargear-menu');
    // Check if menu is already populated. Clear menu if it is.
    if (wargearMenu.childNodes[0] != undefined) {
        clearWargearMenu();
    }
    selectedUnit = unit.childNodes[3];
    if (clearButtonFlag == 0) {
        for (let i = 0; i < unitsList.length; i++) {
            if (unitName == unitsList[i].name) {
                for (let j = 0; j < unitsList[i].wargear.length; j++) {
                    let wargearItem = document.createElement('li');
                    wargearItem.textContent = `${unitsList[i].wargear[j][0]} - ${unitsList[i].wargear[j][1]} Points`;
                    let addWargearButton = document.createElement('button');
                    addWargearButton.textContent = '+';
                    addWargearButton.addEventListener('click', addWargear);
                    addWargearButton.className = 'add-wargear-item';
                    wargearItem.appendChild(addWargearButton);
                    wargearMenu.appendChild(wargearItem);
                }
            }
        }
    }
    clearButtonFlag = 1;
};


// Clear button function to clear wargear menu
let clearButton = document.querySelector('#clear-button');
const clearWargearMenu = () => {
    let wargearOptionsMenu = clearButton.parentElement.childNodes[10];
    let emptyMenuCheck = clearButton.parentElement.childNodes[10].childNodes[0];
    if (emptyMenuCheck != '') {
        wargearOptionsMenu.innerHTML = '';
    }
};
clearButton.addEventListener('click', clearWargearMenu);


// Add wargear options to selected Unit and add points to total
const addWargear = (e) => {
    let item = e.target.parentElement;
    let itemName = item.textContent.substring(0, item.textContent.length - 1);
    let points = parseInt(itemName.substring(itemName.indexOf(" -") + 3, itemName.length - 7));

    for (let i = 0; i < selectedUnit.childNodes.length; i++) {
        let wargearListItem = selectedUnit.childNodes[i].textContent.substring(2, selectedUnit.childNodes[i].textContent.length - 1);

        if (selectedUnit.childNodes[i].textContent.includes("(x") && selectedUnit.childNodes[i].textContent.includes(itemName)) {
            let modifiedWargearListItem = selectedUnit.childNodes[i].textContent.substring(6, selectedUnit.childNodes[i].textContent.length - 1);
            let counter = parseInt(selectedUnit.childNodes[i].textContent.substring(4, 5));
            counter++;
            selectedUnit.childNodes[i].textContent = `> (x${counter}) ${modifiedWargearListItem}`;
            let removeWargearButton = document.createElement('button');
            removeWargearButton.textContent = 'x';
            removeWargearButton.className = 'delete-unit-button'
            removeWargearButton.addEventListener('click', deleteWargear);
            selectedUnit.childNodes[i].appendChild(removeWargearButton);
            addTotalPoints(points);
            return;
        } else if (wargearListItem == itemName) {
            selectedUnit.childNodes[i].textContent = `> (x2) ${wargearListItem}`;
            let removeWargearButton = document.createElement('button');
            removeWargearButton.textContent = 'x';
            removeWargearButton.className = 'delete-unit-button'
            removeWargearButton.addEventListener('click', deleteWargear);
            selectedUnit.childNodes[i].appendChild(removeWargearButton);
            addTotalPoints(points);
            return;
        } 
    }

    let wargear = document.createElement('li');
    wargear.textContent = `> ${itemName}`;
    wargear.className = 'wargear-item';
    wargear.style.fontSize = '15px';
    let removeWargearButton = document.createElement('button');
    removeWargearButton.textContent = 'x';
    removeWargearButton.className = 'delete-unit-button'
    removeWargearButton.addEventListener('click', deleteWargear);
    wargear.appendChild(removeWargearButton);
    selectedUnit.appendChild(wargear);
    addTotalPoints(points);
};


// Deletes a wargear item from an individual unit. Then decreases total points.
const deleteWargear = (e) => {
    let item = e.target.parentElement;
    let itemName = item.textContent.substring(0, item.textContent.length - 1);
    let points = parseInt(itemName.substring(itemName.indexOf(" -") + 3, itemName.length - 7));
    if (itemName.includes("(x")) {
        let quantity = parseInt(itemName.indexOf("(x") + 1);
        decreaseTotalPoints(points * quantity);
    } else {
        decreaseTotalPoints(points);
    }
    item.parentElement.removeChild(item);
};




/*
let astra_militarum_units = [
    ['Avenger Strike Fighter', 'Flyer', 9, 165],
    ['Arvus Lighter', 'Flyer', 5, 85],
    ['Aquila Lander', 'Flyer', 5, 105],
    ['Aradia Madellan', 'HQ', 3, 45],
    ['Armageddon-pattern Basilisk', 'Heavy Support', 7, 130],
    ['Armageddon-pattern Medusa', 'Heavy Support', 8, 140],
    ['Armoured Sentinel', 'Fast Attack', 3, 35],
    ['Astropath', 'Elites', 2, 35],
    ['Atlas Recovery Tank', 'Elites', 5, 80],
    ['Baneblade', 'Lord of War', 19, 385],
    ['Banehammer', 'Lord of War', 19, 380],
    ['Banesword', 'Lord of War', 19, 380],
    ['Basilisk', 'Heavy Support', 7, 125],
    ['Bullgryns', 'Elites', 5, 114],
    ['Carnodon', 'Heavy Support', 6, 110],
    ['Centaur Light Carrier', 'Dedicated Transport', 4, 50],
    ["Colonel 'Iron Hand' Straken", 'HQ', 4, 80],
    ['Colour Sergeant Kell', 'Elites', 3, 45],
    ['Colossus Bombard', 'Heavy Support', 8, 150],
    ['Cyclops Demolition Vehicle', 'Heavy Support', 3, 50],
    ['Chimera', 'Dedicated Transport', 5, 75],
    ['Command Squad', 'Elites', 2, 25],
    ['Commissar', 'Elites', 2, 25],
    ['Commissar Yarrick', 'HQ', 6, 105],
    ['Commander Severina Raine', 'Elites', 2, 35],
    ['Company Commander', 'HQ', 2, 35],
    ['Conscripts', 'Troops', 5, 100],
    ['Crusaders', 'Elites', 2, 32],
    ['Deathstrike', 'Heavy Support', 8, 150],
    ['Doomhammer', 'Lord of War', 19, 390],
    ['Earthshaker Battery', 'Heavy Support', 6, 125],
    ['Earthshaker Carriage Battery', 'Heavy Support', 6, 120],
    ['Ephrael Stern and Kyganil of the Bloody Tears', 'Other', 7, 125],
    ['Gotfret De Montbard', 'Elites', 2, 40],
    ['Griffon Mortar Carrier', 'Heavy Support', 4, 85],
    ['Hades Breaching Drill', 'Dedicated Transport', 4, 80],
    ['Heavy Weapons Team', 'Heavy Support', 3, 50],
    ['Heavy Mortar Battery', 'Heavy Support', 4, 70],
    ['Heavy Quad Launcher Battery', 'Heavy Support', 5, 90],
    ['Hellhammer', 'Lord of War', 20, 425],
    ['Hellhound', 'Fast Attack', 6, 95],
    ['Hydra', 'Heavy Support', 6, 110],
    ['Hydra Battery', 'Heavy Support', 4, 80],
    ['Infantry Squad', 'Troops', 3, 55],
    ['Knight Commander Pask', 'HQ', 14, 220],
    ['Leman Russ Battle Tank', 'Heavy Support', 9, 130],
    ['Lord Castellan Creed', 'HQ', 3, 60],
    ['Lord Commissar', 'HQ', 3, 40],
    ['Manticore', 'Heavy Support', 8, 145],
    ['Manticore Battery', 'Heavy Support', 6, 120],
    ['Malcador', 'Heavy Support', 12, 210],
    ['Malcador Annihilator', 'Heavy Support', 12, 230],
    ['Malcador Defender', 'Heavy Support', 14, 260],
    ['Malcador Infernus', 'Heavy Support', 14, 260],
    ['Master of Ordnance', 'Elites', 2, 35],
    ['Medusa Carriage Battery', 'Heavy Support', 6, 120],
    ['Militarum Tempestus Scions', 'Troops', 3, 45],
    ['Militarum Tempestus Command Squad', 'Elites', 3, 40],
    ['Ministorum Priest', 'Elites', 2, 40],
    ['Nork Deddog', 'Elites', 3, 60],
    ['Officer of the Fleet', 'Elites', 2, 25],
    ['Ogryn Bodyguard', 'Elites', 6, 50],
    ['Ogryns', 'Elites', 4, 90],
    ['Platoon Commander', 'Elites', 2, 25],
    ['Primaris Psyker', 'HQ', 3, 50],
    ['Ratlings', 'Elites', 2, 50],
    ['Rapier Laser Destroyer Battery', 'Heavy Support', 5, 85],
    ['Rein and Raus', 'Elites', 2, 40],
    ['Rough Riders', 'Fast Attack', 3, 30],
    ['Sabre Weapons Battery', 'Heavy Support', 2, 50],
    ['Sentinel Powerlifters', 'Elites', 3, 50],
    ['Sergeant Harker', 'Elites', 3, 55],
    ['Scout Sentinel', 'Fast Attack', 3, 35],
    ['Servitors', 'Elites', 2, 30],
    ['Salamander Command Vehicle', 'HQ', 6, 100],
    ['Salamander Scout Tank', 'Fast Attack', 4, 75],
    ['Sly Marbo', 'HQ', 3, 60],
    ['Shadowsword', 'Lord of War', 21, 440],
    ['Special Weapons Squad', 'Elites', 2, 40],
    ['Stormlord', 'Lord of War', 20, 430],
    ['Stormsword', 'Lord of War', 20, 410],
    ['Stygies Destroyer Tank Hunter', 'Heavy Support', 8, 155],
    ['Tank Commander', 'HQ', 12, 195],
    ['Taurox', 'Dedicated Transport', 5, 90],
    ['Taurox Prime', 'Dedicated Transport', 7, 115],
    ['Tauros Assault Vehicle', 'Fast Attack', 3, 50],
    ['Tauros Venator', 'Fast Attack', 3, 40],
    ['Tech-Priest Enginseer', 'Elites', 2, 35],
    ['Tempestor Prime', 'HQ', 3, 40],
    ['Trojan Support Vehicle', 'Dedicated Transport', 5, 85],
    ['Thunderers', 'Heavy Support', 7, 120],
    ['Thunderbolt', 'Flyer', 11, 210],
    ['Valdor Tank Hunter', 'Heavy Support', 17, 335],
    ['Valkyrie', 'Flyer', 7, 120],
    ['Veterans', 'Elites', 5, 65],
    ['Vendetta Gunship', 'Flyer', 12, 210],
    ['Voss-Pattern Lightning', 'Flyer', 7, 130],
    ['Vulture Gunship', 'Flyer', 10, 180],
    ['Wyrdvane Psykers', 'Elites', 1, 24],
    ['Wyvern', 'Heavy Support', 8, 135]
];
*/
