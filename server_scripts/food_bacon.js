//培根

onEvent('recipes', event => {
    event.remove({ id: 'croptopia:shaped_bacon' })
    event.shaped('croptopia:bacon', [
        ' S',
        'A '
    ], {
        S: 'minecraft:porkchop',
        A: 'croptopia:knife',
    })
})