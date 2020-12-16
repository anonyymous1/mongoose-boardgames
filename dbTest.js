const models = require('./models')

models.BoardGame.create({
    title: 'Greed',
    year: 2014,
    numPlayers: '2-5',
    typeOfGame: 'Card & Deception',
    timeToPlay: '30 min',
    creator: [{
        name: 'Donald X. Vaccarino',
        company: 'Queen Games'
    }]
}).then(()=>{
    console.log('Done!');
})

models.BoardGame.create({
    title: 'Pandemic',
    year: 2016,
    numPlayers: '3-6',
    typeOfGame: 'Co-op',
    timeToPlay: '1 hr',
    creator: [{
        name: 'Ruben Cedeno',
        company: 'Anonyymous Games'
    }]
}).then(()=>{
    console.log('Done!');
})
models.BoardGame.create({
    title: 'Monopoly',
    year: 2018,
    numPlayers: '4-6',
    typeOfGame: 'Family',
    timeToPlay: '7-8 Hours',
    creator: [{
        name: 'Nicole Hamilton',
        company: 'DXD Games'
    }]
}).then(()=>{
    console.log('Done!');
})
// models.Boardgames.deleteMany().then(()=>{
//     console.log('Done!');
// })