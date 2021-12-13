class Unit {
    constructor (unitName, pointsValue, powerLevel, factionKeywords, keywords, wargear) {
        this.unitName = unitName;
        this.pointsValue = pointsValue;
        this.powerLevel = powerLevel;
        this.factionKeywords = factionKeywords;
        this.keywords = keywords;
        this.wargear = wargear;
    }
}

const lord_commisar = new Unit (
    "Lord Commissar", 40, 3,
    // Faction Keywords 
    ["Imperium", "Astra Militarum", "Officio Prefectus"], 
    // Keywords
    ["Character", "Infantry", "Commissar", "Lord Commissar"],
    // Wargear
    [["Warlord", 0], ["Power Fist", 10], ["Power Fist", 5], ["Bolt Pistol", 0], ["Boltgun", 0], ["Plasma Pistol", 5]] 
);

console.log(lord_commisar.unitName);
console.log(lord_commisar.pointsValue);
console.log(lord_commisar.powerLevel);
console.log(lord_commisar.factionKeywords);
console.log(lord_commisar.keywords);
console.log(lord_commisar.wargear);
