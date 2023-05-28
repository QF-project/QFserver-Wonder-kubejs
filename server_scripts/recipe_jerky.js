//牛肉干、猪肉干

onEvent('recipes', event => {
    event.shaped('croptopia:beef_jerky', [
        'ASS',
        '   ',
        '   '
    ], {
        S: '#c:salts',
        A: 'minecraft:beef',
    })
    event.shaped('croptopia:pork_jerky', [
        'ASS',
        '   ',
        '   '
    ], {
        S: '#c:salts',
        A: 'minecraft:porkchop',
    })
})