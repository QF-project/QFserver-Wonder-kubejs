//玉米

onEvent('item.tags', event => {
    event.get('kubejs:corn').add('croptopia:corn')
    event.get('kubejs:corn').add('hamncheese:corn_cob')
    event.get('kubejs:corn').add('tacocraft:corn')
    event.get('kubejs:corn').add('culturaldelights:corn_cob')
})

onEvent('recipes', event => {
    event.replaceInput({}, "croptopia:corn", "#kubejs:corn")
    event.replaceInput({}, "hamncheese:corn_cob", "#kubejs:corn")
    event.replaceInput({}, "tacocraft:corn", "#kubejs:corn")
    event.replaceInput({}, "culturaldelights:corn_cob", "#kubejs:corn")
})