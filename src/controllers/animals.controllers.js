const animals = [{
        animal: 'dog',
        emoji: '🐶'
    },
    {
        animal: 'cat',
        emoji: '🐱'
    },
    {
        animal: 'pig',
        emoji: '🐷'
    },
    {
        animal: 'cow',
        emoji: '🐮'
    },
    {
        animal: 'chicken',
        emoji: '🐔'
    }
];

class AnimalsControllers {
    async searchSort() {
        const idx = Math.floor(Math.random() * animals.length);
        return animals[idx];
    }
}


module.exports = new AnimalsControllers