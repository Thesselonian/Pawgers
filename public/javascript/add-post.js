async function newFormHandler(public_id) {
    const title = document.querySelector('input[name="post_title"]').value;
    const post_text_content = document.querySelector('input[name="post_text_content"]').value;
    const post = {
        title,
        post_text_content
    }
    if (typeof public_id === 'string') {
        post.imagePublicID = public_id
    }

    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        window.location.replace('/dashboard'); 
    }
    else {
        alert(response.statusText);
    }
}

const myWidget = cloudinary.createUploadWidget({
    cloudName: 'dr3wpa5jd',
    uploadPreset: 'pawgers-post'
}, (error, result) => {
    if (!error && result && result.event === "success") {
        newFormHandler(result.info.public_id)
    }
}
)

document.getElementById("upload_widget").addEventListener("click", function(event){
    event.preventDefault();
    myWidget.open()
    }, 
    false
);

document.querySelector('.new-post-form').addEventListener('submit', function(event) {
    event.preventDefault();
    newFormHandler();
});