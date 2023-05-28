//牛油果

onEvent('item.tags', event => {
    event.get('kubejs:avocado').add('croptopia:avocado')
    event.get('kubejs:avocado').add('culturaldelights:avocado')
})

onEvent('recipes', event => {
    event.replaceInput({}, "croptopia:avocado", "#kubejs:avocado")
    event.replaceInput({}, "culturaldelights:avocado", "#kubejs:avocado")
})

