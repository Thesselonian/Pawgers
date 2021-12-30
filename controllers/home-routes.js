const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment, Vote } = require('../models');
const Follower = require('../models/Follower');

// get all posts for homepage
router.get('/', (req, res) => {
  Post.findAll({
    attributes: [
      'id',
      'post_text_content',
      'title',
      'created_at',
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
      
      const prePosts = dbPostData.map(post => post.get({ plain: true }));
      //if logged in, show only posts of users that the current user is following.
      if (req.session.loggedIn){
      const posts = prePosts.filter(post => {
       let followerArray = post.user.followers;
      //  console.log('followerArray', followerArray)
       let followerArrayFiltered = followerArray.map(follower => {return follower.follower_id});
      //  console.log('followerArrayFiltered', followerArrayFiltered)
       if (followerArrayFiltered.includes(req.session.user_id)){
         return true;
       }
      });

      res.render('homepage', {
        posts,
        loggedIn: req.session.loggedIn
      });} else {
        //if not logged in show all posts of all users
        res.render('homepage', {
          prePosts,
          loggedIn: req.session.loggedIn
        })

      }

    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single post
router.get('/post/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'post_text_content',
      'title',
      'created_at',
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
        attributes: ['username']
      }
    ]
  })
  .then(dbPostData => {
    if (!dbPostData) {
      res.status(404).json({ message: 'No post found with this id' });
      return;
    }

    const post = dbPostData.get({ plain: true });

    res.render('single-post', {
      post,
      loggedIn: req.session.loggedIn
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
