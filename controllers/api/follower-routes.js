const router = require('express').Router();
const sequelize = require('../../config/connection');
const { User } = require('../../models');
const Follower = require('../../models/Follower')


router.get('/', (req, res) => {
    Follower.findAll({
      include: [
        {
          model: User,
          attributes: ['username', [sequelize.literal('(SELECT username FROM user WHERE user.id=follower_id)'), 'follower_name']]
        }
      ]
    })
      .then(dbFollowerData => res.json(dbFollowerData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


  
    


  module.exports = router;

