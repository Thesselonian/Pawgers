async function newFormHandler(event) {
    event.preventDefault();

    // get all the form inputs
    const title = document.querySelector('input[name="post_title"]').value;
    const post_url = document.querySelector('input[name="post_url"]').value;
    const inpFile = document.getElementById('image');
    const image = inpFile.files[0]

    console.log(image)

    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            post_url
        }),
        // body: formData,
        // headers: {
        //     'Content-Type': 'application/json'
        // }
    });
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);