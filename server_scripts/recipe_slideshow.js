//投影仪

onEvent('recipes', event => {
    event.shaped('slide_show:projector', [
        'SSS',
        'SBS',
        'AAA'
    ], {
        S: 'minecraft:iron_ingot',
        A: 'minecraft:obsidian',
        B: 'minecraft:nether_star'
    })
})