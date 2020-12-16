const router = require('express').Router()
const models = require('../models')

router.get('/', (req, res) => {
    models.BoardGame.find().then((foundGames)=>{
        res.status(200).json({ Games: foundGames })
    })
    .catch((err)=>{
        res.send(err)
    })
})

router.get('/:title', (req, res)=>{
    console.log(req.params);
    models.BoardGame.find({title: req.params.title}).then((game)=>{
        res.status(200).json({ game })
    })
    .catch((err)=>{
        res.send(err)
    })
})

router.post('/', (req, res)=>{
    models.BoardGame.create({
        title: 'Sorry',
        year: 1995,
        numPlayers: '2-4',
        typeOfGame: 'Board',
        timeToPlay: '30 min',
        creator: [{
            name: 'Nelson Mandela',
            company: 'B Games'
        }]
    }).then(()=>{
        console.log('Done!');
    })
})

router.put('/:title', (req, res)=>{
    models.BoardGame.update({
        title: req.params.title},{$set:{title:'Not Sorry'}})
        .then((updatedGame)=> {
        res.status(200).json({ updatedGame })
        })
})

router.delete('/delete', (req, res)=>{
    models.BoardGame.deleteMany().then(()=>{
    console.log('Deleted!');
    })
})

module.exports = router
