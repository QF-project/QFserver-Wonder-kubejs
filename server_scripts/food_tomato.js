//西红柿

onEvent('item.tags', event => {
	event.get('kubejs:tomato').add('croptopia:tomato')
	event.get('kubejs:tomato').add('culinaire:tomato')
	event.get('kubejs:tomato').add('farmersdelight:tomato')
	event.get('kubejs:tomato').add('hamncheese:tomato')
	event.get('kubejs:tomato').add('sandwichable:tomato')
})

onEvent('recipes', event => {
	event.replaceInput({}, "croptopia:tomato", "#kubejs:tomato")
	event.replaceInput({}, "culinaire:tomato", "#kubejs:tomato")
	event.replaceInput({}, "farmersdelight:tomato", "#kubejs:tomato")
	event.replaceInput({}, "hamncheese:tomato", "#kubejs:tomato")
	event.replaceInput({}, "sandwichable:tomato", "#kubejs:tomato")
})