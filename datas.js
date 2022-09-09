
let datas = {
	v: 1,
	types: [
		{ name: "Tower", ico: 'tower' },
		{ name: "Npc", ico: 'npc' },
		{ name: "NpcQuest", ico: 'npcquest' },
		{ name: "Quest", ico: 'quest' },
		{ name: "Quest Item", ico: 'questitem' },
		{ name: 'Raid Entrance', ico: 'raid' },
		{ name: 'Dungeon Entrance', ico: 'raid' },
		{ name: 'Flora', ico: 'flora' },
		{ name: 'Fauna', ico: 'fauna' },
		{ name: 'Mine', ico: 'pick' },
		{ name: 'Boss', ico: 'ogre' },
		{ name: 'Fairy', ico: 'fairy' },
		{ name: 'Fish', ico: 'fish' },
		{ name: "Container", ico: 'oldkey' },
		{ name: "Chest", ico: 'chest' },
	],
	ico: {
		oldkey: { ico: '🗝️', name: 'Old Key' },
		hammer: { ico: '🔨', name: 'Hammer' },
		dagger: { ico: '🗡️', name: 'Dagger' },
		bow: { ico: '🏹', name: 'Bow and Arrow' },
		shield: { ico: '🛡️', name: 'Shield' },
		staff: { ico: '⚚', name: 'Staff' },
		dice: { ico: '🎲', name: 'Game Dice' },
		poi: { ico: '🎲', name: 'poi' },
		ogre: { ico: '👹', name: 'ogre' },
		fairy: { ico: '🧚', name: 'Fairy' },
		vampire: { ico: '🧛', name: 'Vampire' },
		pick: { ico: '⛏️', name: 'pick' },
		questitem: { ico: '❔', name: 'White Question Mark' },
		quest: { ico: '❓', name: 'Red Question Mark' },
		tower: { ico: '🗿', name: 'Maoi' },
		npcquest: { ico: '⁉️', name: 'Exclamation Question Mark' },
		npc: { ico: '❗', name: 'Red Exclamation Mark' },
		raid: { ico: '⚔️', name: 'Crossed Swords' },
		fauna: { ico: '🐻', name: 'Bear' },
		flora: { ico: '🌼', name: 'Blossom' },
		fish: { ico: '🐟', name: 'Fish' },
		chest: { ico: '🧰', name: 'Toolbox' },

	},
	maps: [
		{
			id: 0,
			name: 'Central Mountains',
			width: 1450, height: 1195,
			src: 'central_mountains.jpg',
			alt: "Central Mountains"
		},
		{
			id: 1,
			name: 'Dyra Desert',
			width: 1450, height: 1195,
			src: 'dyra_desert.jpg',
			alt: "Dyra Desert"
		},
		{
			id: 2,
			name: 'Darkess Village',
			width: 1450, height: 1195,
			src: 'darkess_village.jpg',
			alt: "Darkess Village"
		},
		{
			id: 3,
			name: 'Champlonia',
			width: 1450, height: 1195,
			src: 'champlonia.jpg',
			alt: "Champlonia"
		},
		{
			id: 4,
			name: 'King Mountains',
			width: 1450, height: 1195,
			src: 'king_mountains.jpg',
			alt: "King Mountains"
		}
	],
	poi: [
		{
			mapid: 1,
			type: 1,
			pos: { x: 482, y: 801, z: 0 },
			name: "Black Knight",
			comment: 'A lonely Knight in the middle of heat',
			shop: true,
			quest: true
		},
		{ mapid: 1, type: "11", "pos": { "x": "870", "y": "766", "z": 0 }, "name": "Fairy", "comment": "give me a Doll", "shop": false, "quest": false, "typeName": { "name": "Fairy", "ico": "fairy" }, "mapName": "Dyra Desert" },
	],
}
