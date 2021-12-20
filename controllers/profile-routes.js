const withAuth = require('../utils/auth');
const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const Follower = require('../models/Follower');
const { process_params } = require('express/lib/router');

router.get('/', withAuth, (req, res) => {
    User.findOne({
        where: {
            // use the ID from the session
            id: req.session.user_id
        },
        attributes: { exclude: ['password'] },
        include: [
        {
            model: Follower,
            attributes: [[sequelize.literal('(SELECT username FROM user WHERE user.id=follower_id)'), 'follower_name']]
        },
        {
            model: Post
        }]
    })
    .then(dbProfileData => {
    
    //serialize
    const profileDataObj = dbProfileData.get({ plain: true });

    console.log(profileDataObj)
    //render profile page
    res.render('profile', profileDataObj );
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });;
});

module.exports = router;