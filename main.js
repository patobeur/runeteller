
let spoil = true
let RuneTellerDatas, JsonTextarea, Map, Update
let Menu, MenuMaps, MenuPoi, MenuPoiItems, MenuType, MenuIco
let icosize = 7 // half css ico size in px
let currentMap = 0
let MapImagePath = "./runeteller_map" + (spoil ? "_spoil/" : "/")
window.onload = () => {
	init()
}


