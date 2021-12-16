let breed = document.querySelector('#breed').value.trim().toLower();
let zipCode = document.querySelector('#zip-code').value.trim();
let distance = document.querySelector('#distance').value.trim();
let goodWithKids = document.querySelector('#kids-yes').checked;
let goodWithCats = document.querySelector('#cats-yes').checked;
let houseTrained = document.querySelector('#house-trained-yes').checked;

async function getData(url='') {
    const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    });
    return response.json();
};

getData(`https://api.petfinder.com/v2/animals?type=dog&breed=${breed}&good_with_kids=${goodWithKids}&good_with_cats=${goodWithCats}&house_trained=${houseTrained}&location=${zipCode}&distance=${distance}`);
