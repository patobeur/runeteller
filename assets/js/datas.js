
let datas = {
	v: 999999,
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
		chest: { ico: '🧰', name: 'Toolbox' }
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
			spoil: false
		},
		{
			id: 2,
			name: 'Chaplonia',
			width: 1450, height: 1195,
			src: 'chaplonia.jpg',
			alt: "Chaplonia",
			spoil: false
		},
		{
			id: 3,
			name: 'King\'s Mountain',
			width: 1450, height: 1195,
			src: 'king_s_mountain.jpg',
			alt: 'King\'s Mountain',
			spoil: false
		},
		{
			id: 4,
			name: 'Dyra Desert',
			width: 1450, height: 1195,
			src: 'dyra_desert.jpg',
			alt: "Dyra Desert",
			spoil: false
		},
		{
			id: 5,
			name: 'The Frozen Elve\'s Forest',
			width: 1450, height: 1195,
			src: 'the_frozen_elves_forest.jpg',
			alt: 'The Frozen Elve\'s Forest',
			spoil: false
		}
	],
	poi: [
		{
			mapid: 4,
			type: 1,
			pos: { x: 482, y: 801, z: 0 },
			name: "Black Knight",
			comment: 'A lonely Knight in the middle of heat',
			shop: true,
			quest: true
		},
		{
			mapid: 2,
			type: 11,
			pos: { x: 870, y: 766, z: 0 },
			name: 'Fairy',
			comment: 'give me a Doll',
			shop: false,
			quest: false,
		},
		{
			mapid: 4,
			type: 5,
			pos: { x: 549, y: 651, z: 0 },
			name: 'Desert Ruins',
			comment: 'Entrance !',
			shop: false,
			quest: false,
		}
	],
}
