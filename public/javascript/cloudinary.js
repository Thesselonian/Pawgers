// // Import the cloudinary class.
// import {Cloudinary} from "cloudinary/url-gen";

// // Create a Cloudinary instance and set your cloud name.
// const cld = new Cloudinary({
//     cloud: {
//         cloudName: 'dr3wpa5jd'
//     }
// });

const myWidget = cloudinary.createUploadWidget({
    cloudName: 'dr3wpa5jd',
    uploadPreset: 'pawgers-post'
}, (error, result) => {
    if (!error && result && result.event === "success") {
        console.log('Done! Here is the image info: ', result.info);
        newFormHandler(result.info.public_id)
        window.location.replace('/dashboard');
    }
})

async function newFormHandler(public_id) {
    event.preventDefault();
    const title = document.querySelector('input[name="post_title"]').value;
    const post_url = document.querySelector('input[name="post_url"]').value;
    const post = {
        title,
        post_url
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
    })
    if (response.ok) {
        
    }
}

document.getElementById("upload_widget").addEventListener("click", function(){
    event.preventDefault();
    myWidget.open()
    }, false);

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
