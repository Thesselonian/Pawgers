async function unfollow (event) {
    event.preventDefault();
    
    const userID = document.querySelector('#unfollow-btn').value;
    const followerID = document.querySelector('#unfollower').value;

    const response = await fetch(`/profile/${userID}&${followerID}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });

  if (response.ok) {
      console.log('**********HELLOOOOO***********')
      document.location.replace(`/profile/${userID}`);
  } else {
      alert(response.statusText);
  }
    }
  
document.querySelector('#unfollow-btn').addEventListener('click', unfollow);

 