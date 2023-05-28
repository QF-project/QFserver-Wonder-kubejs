//吐司

onEvent('recipes', event => {

    event.remove({ output: 'vinery:toast' })

    event.custom({
        "type": "vinery:wood_fired_oven_cooking",
        "ingredients": [
            {
                "tag": "minecraft:dough"
            },
            {
                "item": "minecraft:sugar"
            }
        ],
        "item": "vinery:toast",
        "count": 3,
        "experience": 0.35
    })
})

