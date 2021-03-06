async function logout() {
  const response = await fetch('/api/users/logout', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
}

function toDashboard () {
document.location.replace('/dashboard')
}

function toProfile () {
  document.location.replace('/profile')
  }

function toExplore () {
  document.location.replace('/explore')
  }



document.querySelector('#profile-return').addEventListener('click', toProfile);
document.querySelector('#dashboard-return').addEventListener('click', toDashboard);
document.querySelector('#explore').addEventListener('click', toExplore);
document.querySelector('#logout').addEventListener('click', logout);
