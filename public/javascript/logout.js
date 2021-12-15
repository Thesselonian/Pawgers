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


document.querySelector('#dashboard-return').addEventListener('click', toDashboard);
document.querySelector('#logout').addEventListener('click', logout);
