const withAuth = require('../utils/auth');
const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment, Vote } = require('../models');
const Follower = require('../models/Follower');



//get the current user's profile
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
            attributes: ['follower_id', [sequelize.literal('(SELECT username FROM user WHERE user.id=follower_id)'), 'follower_name']]
        },
        {
            model: Post,
            attributes: [
                'id',
                'post_text_content',
                'title',
                'created_at',
                'image_public_id',
                'user_id',
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
    profileDataObj.loggedIn = req.session.loggedIn
    // console.log(profileDataObj)

   
    //render profile page
    res.render('profile', profileDataObj );

    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });;
});

//get another person's profile when a link is clicked via a profile
router.get('/:id', withAuth, (req, res) => {
  User.findOne({
    where: {
      // use the ID from the session
      id: req.params.id,
  },
  attributes: { exclude: ['password'] },
  include: [
  {
      model: Follower,
      attributes: ['follower_id', [sequelize.literal('(SELECT username FROM user WHERE user.id=follower_id)'), 'follower_name']]
  },
  {
      model: Post,
      attributes: [
          'id',
          'post_text_content',
          'title',
          'created_at',
          'image_public_id',
          'user_id',
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
profileDataObj.loggedIn = req.session.loggedIn
// console.log(profileDataObj)


//render profile page
res.render('profile', profileDataObj );

})
.catch(err => {
console.log(err);
res.status(500).json(err);
});;
});


//add new follow relationship
router.post('/', (req, res) => {
  /* req.body should look like this...
    {
      user_id: 
      follower_id: 4
    }
  */
  Follower.create(req.body)
    .then((newFollow) => {
      res.redirect(`/profile/${req.body.user_id}`)
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
  });

router.delete('/?:user_id&:follower_id', (req, res) => {
  console.log(req.params)
  Follower.destroy({
    where: {
      user_id: req.params.user_id,
      follower_id: req.params.follower_id
    }
  })
  .then(followData => {
    console.log('followdata', followData)
    if (!followData) {
      res.status(404).json({ message: 'No follow found with this id' });
      return;
    }
    res.json(followData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
})

module.exports = router;