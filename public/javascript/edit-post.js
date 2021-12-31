async function editFormHandler(event) {
    event.preventDefault();
  
    const post_id = window.location.href.split('/')[5]
    const postTitle = document.querySelector('input[name="post-title"]').value.trim();
    const postTextContent = document.querySelector('textarea[name="post-text-content"]').value.trim();

    const response = await fetch(`/api/posts/${post_id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title: postTitle,
            post_text_content: postTextContent
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if(response.ok) {
        document.location.replace('/dashboard/')
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);