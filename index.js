const characters = [
{
    charName: "Reimu",
    appearceCount: 32,
    firstAppearance: "Highly Responsive to Prayers",
    lastAppearance: "Unfinished Dream of All Livng Ghost",
    fumofied: true,
    fumoRelease: "2008"
    
},
{
    charName: "Suwako",
    appearceCount: 10,
    firstAppearance: "Mountian of Faith",
    lastAppearance: "Gouyoku Ibun",
    fumofied: true,
    fumoRelease: "2009"
},
{
    charName: "Tenshi",
    appearceCount: 8,
    firstAppearance: "Scarlet Weather Rhapsody",
    lastAppearance: "100th Black Market",
    fumofied: true,
    fumoRelease: "2018"
},
{
    charName: "Komachi",
    appearceCount: 6,
    firstAppearance: "Phantasmagoria of Flower View",
    lastAppearance: "100th Black Market",
    fumofied: false,
    fumoRelease: "N/A"
},
]

characters.filter((character) => character.fumofied == true) .forEach((character) => console.log(character.charName, character.fumoRelease))

/*
const fumoChars = fumos.map((fumofiedChar)=> ({
    fumoName: fumofiedChar.charName,
    release: fumofiedChar.fumoRelease,
    appearceCount: fumofiedChar.appearceCount
}))

const mostPopular = fumoChars.filter((popularest)=> popularest.appearceCount >= 20)
console.log(mostPopular) */

/*  .forEach((character) => console.log(character.charName)) 
 fumos.forEach((character) => console.log(character.fumoRelease))  */
