const Follower  = require('../models/Follower');

const followerData = [
  {
    user_id: 1,
    follower_id: 6,
  },
  {
    user_id: 1,
    follower_id: 7,
  },
  {
    user_id: 1,
    follower_id: 8,
  },
  {
    user_id: 2,
    follower_id: 6,
  },
  {
    user_id: 2,
    follower_id: 7,
  },
  {
    user_id: 2,
    follower_id: 1,
  },
  {
    user_id: 3,
    follower_id: 1,
  },
  {
    user_id: 3,
    follower_id: 3,
  },
  {
    user_id: 3,
    follower_id: 4,
  },
  {
    user_id: 3,
    follower_id: 5,
  },
  {
    user_id: 4,
    follower_id: 1,
  },
  {
    user_id: 4,
    follower_id: 2,
  },
  {
    user_id: 4,
    follower_id: 8,
  },
  {
    user_id: 5,
    follower_id: 3,
  },
  {
    user_id: 5,
    follower_id: 1,
  }
];

const seedFollowers = () => Follower.bulkCreate(followerData);

module.exports = seedFollowers;
