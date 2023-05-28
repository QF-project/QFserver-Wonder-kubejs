//黄瓜

onEvent('item.tags', event => {
    event.get('kubejs:cucumber').add('croptopia:cucumber')
    event.get('kubejs:cucumber').add('culturaldelights:cucumber')
    event.get('kubejs:cucumber').add('sandwichable:cucumber')
})

onEvent('recipes', event => {
    event.replaceInput({}, "croptopia:cucumber", "#kubejs:cucumber")
    event.replaceInput({}, "culturaldelights:cucumber", "#kubejs:cucumber")
    event.replaceInput({}, "sandwichable:cucumber", "#kubejs:cucumber")
})