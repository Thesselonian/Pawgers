const withAuth = require('../utils/auth');
const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment, Vote } = require('../models');
const Follower = require('../models/Follower');


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
            model: Post,
            attributes: [
                'id',
                'post_url',
                'title',
                'created_at',
                [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE id = vote.post_id)'), 'vote_count']
              ],
              include: [
                {
                  model: Comment,
                  attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                  include: {
                    model: User,
                    attributes: ['username']
                  }
                },
                {
                  model: User,
                  attributes: ['username']
                }
              ]
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