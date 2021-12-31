async function upvoteClickHandler(event) {
  event.preventDefault();

  var myModal = new bootstrap.Modal(document.getElementById('exampleModal'))

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const response = await fetch('/api/posts/upvote', {
    method: 'PUT',
    body: JSON.stringify({
      post_id: id
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.reload();
  } else {
    myModal.show();
  }
}

document.querySelector('.upvote-btn').addEventListener('click', upvoteClickHandler);
