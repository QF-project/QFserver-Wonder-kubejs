//菠萝

onEvent('item.tags', event => {
    event.get('kubejs:pineapple').add('croptopia:pineapple')
    event.get('kubejs:pineapple').add('hamncheese:pineapple')
})

onEvent('recipes', event => {
    event.replaceInput({}, "croptopia:pineapple", "#kubejs:pineapple")
    event.replaceInput({}, "hamncheese:pineapple", "#kubejs:pineapple")
})