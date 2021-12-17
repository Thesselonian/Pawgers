const router = require('express').Router();

router.get('/adoption', (req, res) => {
    // Post.findAll({
    //   where: {
    //     // use the ID from the session
    //     user_id: req.session.user_id
    //   },
    //   attributes: [
    //     'id',
    //     'post_url',
    //     'title',
    //     'created_at',
    //     [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
    //   ],
    //   include: [
    //     {
    //       model: Comment,
    //       attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
    //       include: {
    //         model: User,
    //         attributes: ['username']
    //       }
    //     },
    //     {
    //       model: User,
    //       attributes: ['username']
    //     }
    //   ]
    // })
    // .then(dbPostData => {
    // // serialize data before passing to template
    // const posts = dbPostData.map(post => post.get({ plain: true }));
    // console.log('=========', posts);
    // res.render('dashboard', { posts, loggedIn: true });
    // })
    // .catch(err => {
    // console.log(err);
    res.status(500).json(err);
    // });
});

module.exports = router;