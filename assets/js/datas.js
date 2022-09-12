
let datas = {
	v: 0,
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
		chest: { ico: '🧰', name: 'Toolbox' },
		worldmap: { ico: '🗺️', name: 'World Map' },
		Bed: { ico: '🛏️', name: 'Bed' },
		skull: { ico: '💀', name: 'Skull' },
		skullandcrossbones: { ico: '☠️', name: 'Skull and Crossbones' },
		pirateflag: { ico: '🏴‍☠️', name: 'Pirate Flag' },
	},
	maps: [
		{
			id: 0,
			name: 'Eastern Valley',
			width: 1450,
			height: 1195,
			src: 'eastern_valley.jpg',
			alt: "Eastern Valley",
			spoil: false
		},
		{
			id: 1,
			name: 'Central Mountains Area',
			width: 1450, height: 1195,
			src: 'central_mountains_area.jpg',
			alt: "Central Mountains Area",
			spoil: true
		},
		{
			id: 2,
			name: 'Chaplonia',
			width: 1450, height: 1195,
			src: 'chaplonia.jpg',
			alt: "Chaplonia",
			spoil: true
		},
		{
			id: 3,
			name: 'King\'s Mountain',
			width: 1450, height: 1195,
			src: 'king_s_mountain.jpg',
			alt: 'King\'s Mountain',
			spoil: true
		},
		{
			id: 4,
			name: 'Dyra Desert',
			width: 1450, height: 1195,
			src: 'dyra_desert.jpg',
			alt: "Dyra Desert",
			spoil: true
		},
		{
			id: 5,
			name: 'The Frozen Elve\'s Forest',
			width: 1450, height: 1195,
			src: 'the_frozen_elves_forest.jpg',
			alt: 'The Frozen Elve\'s Forest',
			spoil: true
		}
	],
	poi: [
		{
			mapid: 0,
			type: 1,
			pos: { x: 299, y: 741, z: 0 },
			name: 'Birth  Point ;)',
			comment: 'Here you go !',
			shop: false,
			quest: false
		}
	],
}
