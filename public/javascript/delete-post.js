async function deleteFormHandler(event) {
    event.preventDefault();
  
    const post_id = window.location.href.split('/')[5]

    const response = await fetch(`/api/posts/${post_id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });

  if (response.ok) {
      document.location.replace('/dashboard/');
  } else {
      alert(response.statusText);
  }
}

document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);