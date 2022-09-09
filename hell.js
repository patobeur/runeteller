
function createMapImg() {
	let img = document.createElement('img')
	if (currentMap >= 0 && currentMap < RuneTellerDatas.maps.length) {
		img.src = MapImagePath + RuneTellerDatas.maps[currentMap].src
		// console.log(img)
	}
	img.addEventListener('click', (e) => {
		let h = RuneTellerDatas.maps[currentMap].height
		let w = RuneTellerDatas.maps[currentMap].width
		let pos = {
			x: e.pageX,
			y: h - e.pageY,
			z: 0
		}
		let newPoi = {
			id: RuneTellerDatas.poi.length,
			mapid: currentMap,
			type: 1,
			pos: pos,
			name: "empty",
			comment: 'need some comment !',
			shop: false,
			quest: false
		}
		// console.log(RuneTellerDatas.poi.length)
		formRefresh(newPoi)

		RuneTellerDatas.poi.push(newPoi)
		// console.log(newPoi)
		StorageRefresh()
		displayMapAndMenus()
		displayPoiStuff()
	})
	return img
}
function formRefresh(index) {
	document.getElementById('poiname').value = index.name
	document.getElementById('poiposx').textContent = index.pos.x
	document.getElementById('poiposy').textContent = index.pos.y
	document.getElementById('poishop').checked = index.shop ? 'checked' : '';
	document.getElementById('poiquest').checked = index.quest ? 'checked' : '';
	document.getElementById('poiid').textContent = index.id
	document.getElementById('poicomment').value = index.comment
	document.getElementById('poitype').value = index.type
}
function formUpdate() {
	// console.log(document.getElementById('poicomment').value)
	let id = document.getElementById('poiid').textContent
	let newPoi = {
		id: id,
		mapid: currentMap,
		type: document.getElementById('poitype').value,
		pos: {
			x: document.getElementById('poiposx').textContent,
			y: document.getElementById('poiposy').textContent,
			z: 0
		},
		name: document.getElementById('poiname').value,
		comment: document.getElementById('poicomment').value,
		shop: document.getElementById('poishop').checked,
		quest: document.getElementById('poiquest').checked
	}
	RuneTellerDatas.poi[id] = newPoi
	console.log('newPoi', newPoi)
	StorageRefresh()
	displayMapAndMenus()
	displayPoiStuff()

}
function addItemsToPoiMenu() {
	let iter = 0
	RuneTellerDatas.poi.forEach(
		poi => {
			if (poi.mapid === currentMap) {
				poi.typeName = RuneTellerDatas.types[poi.type]
				poi.mapName = RuneTellerDatas.maps[poi.mapid].name

				let item = createPoiDiv(iter, poi)
				Map.appendChild(item)

				MenuPoi.appendChild(createPoiItem(iter, poi))
			}
			iter++
		}
	);
}
function addItemsToTypeMenu() {
	let iter = 0;
	RuneTellerDatas.types.forEach(
		type => {
			MenuType.appendChild(createTypeItem(iter, type))
			iter++
		}
	);
}
function addItemsToIcoMenu() {
	let iter = 0;
	for (var ico in RuneTellerDatas.ico) {
		MenuIco.appendChild(createIcoItem(iter, RuneTellerDatas.ico[ico]))
		iter++

	}
	// RuneTellerDatas.ico.forEach(
	// 	ico => {
	// 		MenuIco.appendChild(createIcoItem(iter, ico))
	// 		iter++
	// 	}
	// );
}
function createPoiDiv(num, index) {
	let poiDiv = createEle('div', 'poi poi_' + num)
	poiDiv.title = index.name
	poiDiv.style.left = (index.pos.x - icosize) + 'px'
	poiDiv.style.bottom = (index.pos.y - icosize) + 'px'
	let type = RuneTellerDatas.types[index.type].ico
	poiDiv.textContent = RuneTellerDatas.ico[type].ico

	poiDiv.addEventListener('click', () => {
		formRefresh(index)
	})





	return poiDiv
}
function createMapItem(num, index) {
	if (num < 0) {
		let mapItem = createEle('div', 'maptitle')
		mapItem.title = 'Map Liste'
		mapItem.textContent = 'Maps'
		return mapItem
	} else {
		let mapItem = createEle('div', 'mapitem _' + num)
		mapItem.title = index.name
		mapItem.textContent = index.name
		mapItem.addEventListener('click', () => {
			currentMap = index.id
			console.log(index.name, index.id, num)
			init()
		})
		return mapItem
	}
}
function createPoiItem(num, index) {
	if (num < 0) {
		let poiItem = createEle('div', 'poititle')
		poiItem.title = 'Poi Liste'
		poiItem.textContent = 'Poi'
		return poiItem
	} else {
		index.id = num
		let poiItem = createEle('div', 'poiitem _' + num)
		poiItem.title = index.name
		poiItem.textContent = index.name
		poiItem.addEventListener('click', () => {
			console.log(index.name, num)
		})
		return poiItem
	}
}
function createTypeItem(num, index) {
	if (num < 0) {
		let item = createEle('div', 'typetitle')
		item.title = 'Type Liste'
		item.textContent = 'Type'
		return item
	} else {
		let item = createEle('div', 'typeitem _' + num)
		item.title = index.name
		let ico = RuneTellerDatas.ico[index.ico].ico
		item.textContent = num + '=' + index.name + ' ' + ico
		return item
	}
}
function createIcoItem(num, index) {
	if (num < 0) {
		let item = createEle('div', 'icotitle')
		item.title = 'Ico Liste'
		item.textContent = 'Ico'
		return item
	} else {
		let item = createEle('div', 'icoitem _' + num)
		item.title = index.name
		item.textContent = index.ico + ' ' + index.name
		return item
	}
}
function createEle(tag = 'div', name = false, type = false) {
	let ele = document.createElement(tag)
	if (name) { if (!type) { ele.className = name } else { ele.id = name } }
	return ele
}
function addItemsToMapsMenu() {
	let iter = 0
	RuneTellerDatas.maps.forEach(
		map => {
			MenuMaps.appendChild(createMapItem(iter, map))
			iter++
		}
	);
}
function StorageDealer() {
	RuneTellerDatas = JSON.parse(localStorage.getItem('RuneTellerDatas'))
	if (!RuneTellerDatas || datas.v > RuneTellerDatas.v) {
		localStorage.setItem('RuneTellerDatas', JSON.stringify(datas));
		RuneTellerDatas = JSON.parse(localStorage.getItem('RuneTellerDatas'))
	}
	JsonTextarea.textContent = 'let datas = ' + localStorage.getItem('RuneTellerDatas')
}
function StorageRefresh() {
	RuneTellerDatas.v++
	let json = JSON.stringify(RuneTellerDatas)
	localStorage.setItem('RuneTellerDatas', json);
	JsonTextarea.textContent = 'let datas = ' + json
}
function init() {
	Update = false
	Menu = document.getElementById('menu')
	MenuMaps = document.getElementById('menu-maps')
	MenuPoi = document.getElementById('menu-poi')
	MenuType = document.getElementById('menu-type')
	MenuIco = document.getElementById('menu-ico')
	Map = document.getElementById('map')
	JsonTextarea = document.getElementById('JsonTextarea')
	StorageDealer()


	displayMapAndMenus()
	displayPoiStuff()


	document.getElementById('update').addEventListener('click', () => {
		formUpdate()
	})

}
function displayPoiStuff() {
	MenuPoi.textContent = ''// clear poi list
	MenuPoi.prepend(createPoiItem(-1))
	addItemsToPoiMenu()
}
function displayMapAndMenus() {
	Map.textContent = ''
	Map.appendChild(createMapImg())

	MenuMaps.textContent = '' // clear maps list
	MenuMaps.appendChild(createMapItem(-1, 'title'))
	addItemsToMapsMenu()

	MenuType.textContent = ''// clear poi list
	MenuType.prepend(createTypeItem(-1))
	addItemsToTypeMenu()

	MenuIco.textContent = ''// clear poi list
	MenuIco.prepend(createIcoItem(-1))
	addItemsToIcoMenu()
}
