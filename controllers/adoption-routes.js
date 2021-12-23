const router = require('express').Router();
const fetch = require('node-fetch');
const fs = require('fs');

router.get('/', (req, res) => {
   let getApiToken = function () {
      fetch('https://api.petfinder.com/v2/oauth2/token', {
         method: 'POST',
         body: `grant_type=client_credentials&client_id=${process.env.API_Key}&client_secret=${process.env.API_SECRET}`,
         headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
         }
      }).then(function (response) {
         return response.json();
      }).then(function (data) {
         console.log(data);
         // fs rewrites .env file every time adoption page is hit; all env variables remain the same except API_TOKEN, which is rewritten every time this function fires
         fs.writeFileSync('.env', `DB_NAME=${process.env.DB_NAME}\nDB_USER=${process.env.DB_USER}\nDB_PW=${process.env.DB_PW}\nAPI_KEY=${process.env.API_KEY}\nAPI_SECRET=${process.env.API_SECRET}\nAPI_TOKEN=${data.access_token}`);
         res.render('adoption-page');
      });
   };
   getApiToken();
});

// router.get('/oops', (req, res) => {
//    res.render('oops');
// });

router.get('/noDogs', (req, res) => {
   res.render('no-dogs');
});

router.post('/results', (req, res) => {
   let getAdoptionData = function () {
      console.log(req.body);
      fetch(`https://api.petfinder.com/v2/animals?type=dog&breed=${req.body.breed}&location=${req.body.zipCode}&distance=${req.body.distance}`, {
         headers: {
            Authorization: `Bearer ${process.env.API_TOKEN}`
         }
      })
         .then(function (response) {
            return response.json()
         }).then(function (data) {
            console.log(data);
            if (!data.animals.length || !data) {
               // res.render('no-dogs');
               res.redirect('/adoption/noDogs');
            } else {
               res.render('adoption-results', data);
            }
         })
         .catch(() => {
            res.redirect('/oops');
         });
   };
   getAdoptionData();
});

module.exports = router;