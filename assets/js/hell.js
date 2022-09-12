
function formPoiDelete() {
	// console.log(document.getElementById('poicomment').value)
	document.getElementById('poitoolsitems').style.display = 'none'
	document.getElementById('poidelete').style.display = 'none'
	document.getElementById('poiupdate').style.display = 'none'
	let id = document.getElementById('poiid').value
	console.log('typeof id', typeof id)
	console.log(RuneTellerDatas.poi)

	console.log(id + ' deleting')
	console.log('before', RuneTellerDatas.poi.length)
	let copypoi = [...RuneTellerDatas.poi]
	copypoi.splice(id, 1)
	RuneTellerDatas.poi = copypoi
	// RuneTellerDatas.poi.splice(id, 1);
	console.log('after', RuneTellerDatas.poi.length)
	console.log(RuneTellerDatas.poi)
	// RuneTellerDatas.poi[id] = newPoi
	StorageRefresh()
	displayMapAndMenus()
	displayPoiStuff()

}
function createMapImg() {
	let img = document.createElement('img')
	if (currentMap >= 0 && currentMap < config.maps.length) {
		let actualMap = config.maps[currentMap]
		img.src = MapImagePath + (!actualMap.spoil ? 's_' : '') + actualMap.src;
		img.height = actualMap.height
		img.width = actualMap.width
		// map form  refreshcurrentMap
		document.getElementById('mapid').textContent = currentMap
		document.getElementById('mapname').value = actualMap.name
		document.getElementById('mapheight').value = actualMap.height
		document.getElementById('mapwidth').value = actualMap.width
		document.getElementById('mapalt').value = actualMap.alt
		document.getElementById('mapsrc').value = actualMap.src
		document.getElementById('mapspoil').checked = actualMap.spoil ? 'checked' : '';
	}
	addMapListener(img)
	return img
}
function addMapListener(img) {
	img.addEventListener('click', (e) => {
		let actualMap = config.maps[currentMap]
		let nextId = RuneTellerDatas.poi.length
		let h = actualMap.height
		let w = actualMap.width
		let pos = {
			x: e.pageX,
			y: h - e.pageY,
			z: 0
		}
		let newPoi = {
			mapid: currentMap,
			type: 1,
			name: 'empty ' + nextId,
			comment: 'need some comment ! ' + nextId,
			shop: false,
			quest: false,
			pos: pos
		}
		formPoiRefresh(nextId, newPoi)
		RuneTellerDatas.poi.push(newPoi)

		StorageRefresh()
		displayMapAndMenus()
		displayPoiStuff()
		console.log('adding new poi id:', nextId, newPoi)
	})
}
function formPoiRefresh(id, index) {
	document.getElementById('poitoolsitems').style.display = 'block'
	document.getElementById('poiname').value = index.name
	document.getElementById('poiposx').value = index.pos.x
	document.getElementById('poiposy').value = index.pos.y
	document.getElementById('poiposz').value = index.pos.z
	document.getElementById('poishop').checked = index.shop ? 'checked' : '';
	document.getElementById('poiquest').checked = index.quest ? 'checked' : '';
	document.getElementById('poiid').value = id
	document.getElementById('poicomment').value = index.comment
	document.getElementById('poitype').value = index.type
	document.getElementById('poiupdate').style.display = ''
	document.getElementById('poidelete').style.display = ''
}
function formMapUpdate() {
	config.maps[currentMap] = {
		gameid: currentGame,
		id: currentMap,
		name: document.getElementById('mapname').value,
		width: document.getElementById('mapwidth').value,
		height: document.getElementById('mapheight').value,
		src: document.getElementById('mapsrc').value,
		alt: document.getElementById('mapalt').value,
		spoil: document.getElementById('mapspoil').checked
	}

	StorageRefresh()
	displayMapAndMenus()
	displayPoiStuff()

}
function formPoiUpdate() {
	// console.log(document.getElementById('poicomment').value)
	let id = document.getElementById('poiid').value
	let newPoi = {
		mapid: currentMap,
		type: document.getElementById('poitype').value,
		pos: {
			x: document.getElementById('poiposx').value,
			y: document.getElementById('poiposy').value,
			z: document.getElementById('poiposz').value
		},
		name: document.getElementById('poiname').value,
		comment: document.getElementById('poicomment').value,
		shop: document.getElementById('poishop').checked,
		quest: document.getElementById('poiquest').checked
	}
	document.getElementById('poitoolsitems').style.display = 'none'
	RuneTellerDatas.poi[id] = newPoi
	// console.log('update', newPoi)
	StorageRefresh()
	displayMapAndMenus()
	displayPoiStuff()

}
function addItemsToPoiMenu() {
	let iter = 0
	let localPoi = 0
	RuneTellerDatas.poi.forEach(
		poi => {
			// poi.id = iter
			if (poi.mapid === currentMap) {
				let item = createPoiDiv(iter, poi)
				Map.appendChild(item)
				localPoi++
				MenuPoi.appendChild(createPoiItem(iter, poi))
			}
			iter++
		}
	);
	document.getElementById('poititle').textContent = '📌Poi (' + localPoi + '/' + iter + ')'
}
function addItemsToTypeMenu() {
	let iter = 0;
	for (var type in config.types) {
		MenuType.appendChild(createTypeItem(iter, config.types[type]))
		iter++
	}
}
function addItemsToIcoMenu() {
	let iter = 0;
	for (var ico in config.ico) {
		MenuIco.appendChild(createIcoItem(iter, config.ico[ico]))
		iter++

	}
	// config.ico.forEach(
	// 	ico => {
	// 		MenuIco.appendChild(createIcoItem(iter, ico))
	// 		iter++
	// 	}
	// );
}
function createPoiDiv(iter, index) {
	let poiDiv = createEle('div', 'poi poi_' + iter)
	poiDiv.title = index.name
	poiDiv.style.left = (index.pos.x - icosize) + 'px'
	poiDiv.style.bottom = (index.pos.y - icosize) + 'px'
	let type = config.types[index.type].ico
	poiDiv.textContent = config.ico[type].ico

	poiDiv.addEventListener('click', () => {
		formPoiRefresh(iter, index)
	})





	return poiDiv
}
function createMapItem(num, index) {
	if (num < 0) {
		let mapItem = createEle('div', 'maptitle')
		mapItem.title = 'Map Liste'
		mapItem.textContent = '📜Maps'
		return mapItem
	} else {
		let mapItem = createEle('div', 'mapitem _' + num)
		mapItem.title = index.name
		mapItem.textContent = '[' + index.id + '] ' + index.name
		mapItem.addEventListener('click', () => {
			currentMap = index.id
			displayMapAndMenus()
			displayPoiStuff()
		})
		return mapItem
	}
}
function createPoiItem(iter, index) {
	if (iter < 0) {
		let poiItem = createEle('div', 'poititle')
		poiItem.id = 'poititle'
		poiItem.title = 'Poi Liste'
		poiItem.textContent = 'Poi (' + ')'
		return poiItem
	} else {
		let poiItem = createEle('div', 'poiitem _' + index.id)
		poiItem.title = index.name
		poiItem.textContent = '(' + iter + ') ' + index.name
		// poiItem.addEventListener('click', () => {
		// 	console.log(index.name, index.id)
		// })
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

		let ico = config.ico[index.ico].ico
		item.textContent = ico + ' ' + index.name + ' =' + num
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
	config.maps.forEach(
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
	JsonTextarea.textContent = localStorage.getItem('RuneTellerDatas')
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
	document.getElementById('poiupdate').style.display = 'none'
	document.getElementById('poidelete').style.display = 'none'

	document.getElementById('poiupdate').addEventListener('click', () => {
		formPoiUpdate()
	})
	document.getElementById('poidelete').addEventListener('click', () => {
		formPoiDelete()
	})
	document.getElementById('mapupdate').addEventListener('click', () => {
		formMapUpdate()
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
