const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    post_text_content: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    image_public_id: 'uinqsxhzdmhxiixhswvz',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_text_content: 'https://nasa.gov/donec.json',
    image_public_id: 'uinqsxhzdmhxiixhswvz',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    post_text_content: 'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
    image_public_id: 'uinqsxhzdmhxiixhswvz',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    post_text_content: 'http://desdev.cn/enim/blandit/mi.jpg',
    image_public_id: 'uinqsxhzdmhxiixhswvz',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    post_text_content: 'http://google.ca/nam/nulla/integer.aspx',
    image_public_id: 'uinqsxhzdmhxiixhswvz',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    post_text_content: 'https://stanford.edu/consequat.png',
    image_public_id: 'uinqsxhzdmhxiixhswvz',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_text_content: 'http://edublogs.org/non/ligula/pellentesque.js',
    image_public_id: 'uinqsxhzdmhxiixhswvz',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_text_content: 'http://ucla.edu/consequat/nulla.html',
    image_public_id: 'uinqsxhzdmhxiixhswvz',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    post_text_content: 'http://theguardian.com/dui/vel/nisl/duis/ac/nibh.aspx',
    image_public_id: 'uinqsxhzdmhxiixhswvz',
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    post_text_content: 'https://reverbnation.com/ligula/sit.jpg',
    image_public_id: 'uinqsxhzdmhxiixhswvz',
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_text_content: 'http://china.com.cn/lectus/vestibulum.json',
    image_public_id: 'uinqsxhzdmhxiixhswvz',
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    post_text_content: 'http://networksolutions.com/nam/ultrices/libero/non/mattis/pulvinar.json',
    image_public_id: 'uinqsxhzdmhxiixhswvz',
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    post_text_content: 'https://instagram.com/ac/neque/duis/bibendum/morbi/non.xml',
    image_public_id: 'uinqsxhzdmhxiixhswvz',
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    post_text_content: 'https://lycos.com/natoque/penatibus/et.html',
    image_public_id: 'uinqsxhzdmhxiixhswvz',
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    post_text_content: 'https://gmpg.org/lorem.jpg',
    image_public_id: 'uinqsxhzdmhxiixhswvz',
    user_id: 3
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    post_text_content: 'https://paginegialle.it/mattis/egestas.jsp',
    image_public_id: 'uinqsxhzdmhxiixhswvz',
    user_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_text_content: 'http://wikia.com/turpis/eget.jpg',
    image_public_id: 'uinqsxhzdmhxiixhswvz',
    user_id: 6
  },
  {
    title: 'Etiam justo.',
    post_text_content: 'https://shareasale.com/quis.json',
    image_public_id: 'uinqsxhzdmhxiixhswvz',
    user_id: 4
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    post_text_content: 'http://java.com/diam/neque/vestibulum/eget/vulputate/ut/ultrices.png',
    image_public_id: 'uinqsxhzdmhxiixhswvz',
    user_id: 6
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    post_text_content: 'https://java.com/at/nibh/in.png',
    image_public_id: 'uinqsxhzdmhxiixhswvz',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
