const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard-routes');
const adoptionRoutes = require('./adoption-routes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes)
router.use('/dashboard', dashboardRoutes);
router.use('/adoption', adoptionRoutes);

router.get('/oops', (req, res) => {
    res.render('oops');
});
router.get('/noDogs', (req, res) => {
    res.render('no-dogs');
});



module.exports = router;
