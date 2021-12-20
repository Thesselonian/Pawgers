const withAuth = require('../utils/auth');
const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const Follower = require('../models/Follower');

router.get('/', withAuth, (req, res) => {
    User.findOne({
        where: {
            // use the ID from the session
            id: req.session.user_id
        },
        attributes: { exclude: ['password'] },
        include: {
            model: Follower,
            attributes: [[sequelize.literal('(SELECT username FROM user WHERE user.id=follower_id)'), 'follower_name']]
        }
    })
    .then(dbProfileData => {
        
       //userData is an object of the user info from the database
        const userData = dbProfileData.dataValues
       
        //followerData is an array of the names of followers of this user
        const followerData = userData.followers.map(follower => {
            return follower.dataValues.follower_name
        }) 

        userData.followers = followerData;
        console.log(userData)
        
        res.render('profile', userData );
    
    // .catch(err => {
    //   console.log(err);
    //   res.status(500).json(err);
    // });
    });
});

module.exports = router;