//核桃

onEvent('item.tags', event => {
    event.get('kubejs:walnut').add('croptopia:walnut')
    event.get('kubejs:walnut').add('ecologics:walnut')
})

onEvent('recipes', event => {
    event.replaceInput({}, "croptopia:walnut", "#kubejs:walnut")
    event.replaceInput({}, "ecologics:walnut", "#kubejs:walnut")
})