//鸭蛋

onEvent('item.tags', event => {
    event.get('kubejs:duck_egg').add('duckling:duck_egg')
    event.get('kubejs:duck_egg').add('untitledduckmod:duck_egg')
})

onEvent('recipes', event => {
    event.replaceInput({}, "duckling:duck_egg", "#kubejs:duck_egg")
    event.replaceInput({}, "untitledduckmod:duck_egg", "#kubejs:duck_egg")
})