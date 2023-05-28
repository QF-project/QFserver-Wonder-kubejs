//芒果

onEvent('item.tags', event => {
    event.get('kubejs:mango').add('croptopia:mango')
    event.get('kubejs:mango').add('simplemango:mango')
})

onEvent('recipes', event => {
    event.replaceInput({}, "croptopia:mango", "#kubejs:mango")
    event.replaceInput({}, "simplemango:mango", "#kubejs:mango")
})