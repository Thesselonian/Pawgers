const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment, Vote } = require('../models');
const Follower = require('../models/Follower');

// get all posts for explore page
router.get('/', (req, res) => {
  Post.findAll({
    attributes: [
      'id',
      'post_text_content',
      'title',
      'created_at',
      'user_id',
      'image_public_id',
      [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
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
        attributes: ['username'],
        include: {
          model: Follower,
          attributes: [ 'follower_id' ]
        }
      }
    ]
  })
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }));
      res.render('explore', {
        posts,
        loggedIn: req.session.loggedIn
      });
    })

})


module.exports = router;