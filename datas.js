
let datas = {
	v: 15,
	types: {
		0: "Tower",
		1: "Npc",
		2: "Container",
		3: "Quest Item",
		4: 'Raid Entrance',
		5: 'Flora',
		6: 'Fauna'
	},
	maps: [
		{
			id: 0,
			name: 'central Mountains',
			origin: { x: 50, y: 50, z: 0 },
			width: 1450, height: 1195,
			src: 'central_mountain.jpg',
			alt: "central mountain"
		},
		{
			id: 1,
			name: 'Daisy Desert',
			origin: { x: 50, y: 50, z: 5 },
			width: 1450, height: 1195,
			src: 'central_mountain.jpg',
			alt: "central mountain"
		}
	],
	poi: [
		{
			mapid: 0,
			type: 0,
			pos: { x: 432, y: 751, z: 0 },
			name: "Black Knight",
			shop: true,
			quest: true
		},
		{
			mapid: 0,
			type: 1,
			pos: { x: 200, y: 685, z: 0 },
			name: "bob",
			shop: true,
			quest: true
		}
	],
	ico: {
		oldkey: { ico: '🗝️', name: 'Old Key' },
		hammer: { ico: '🔨', name: 'Hammer' },
		dagger: { ico: '🗡️', name: 'Dagger' },
		bow: { ico: '🏹', name: 'Bow and Arrow' },
		shield: { ico: '🛡️', name: 'Shield' },
		staff: { ico: '⚚', name: 'Staff' },
		dice: { ico: '🎲', name: 'Game Dice' },
	},
}
