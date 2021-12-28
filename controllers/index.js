const router = require('express').Router();

const apiRoutes = require('./api')
const homeRoutes = require('./home-routes')
const dashboardRoutes = require('./dashboard-routes');
const profileRoutes = require('./profile-routes')
const adoptionRoutes = require('./adoption-routes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes)
router.use('/dashboard', dashboardRoutes);
router.use('/profile', profileRoutes);
router.use('/adoption', adoptionRoutes);



module.exports = router;
