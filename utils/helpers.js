
const dogBreeds = require('./dog-breeds');

module.exports = {
    format_date: date => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
            date
        ).getFullYear()}`;
    },
    format_plural: (word, amount) => {
        if(amount !== 1) {
            return `${word}s`;
        }

        return word;
    },
    format_url: url => {
        return url
            .replace('http://', '')
            .replace('https://', '')
            .replace('www.', '')
            .split('/')[0]
            .split('?'[0])[0];
    },
    checkLoginMatch: ( currentUser, viewedUser, postID ) => {
        if( currentUser === viewedUser ) {
            return `<a href="/dashboard/edit/${postID}" class="edit-link">Edit post</a>`
        }
    },
    checkFollowStatus: ( followersArray, currentUserID, followedUsername, followedUserID ) => {
        let ecstasy = followersArray.find(entry => entry.follower_id === currentUserID)
        //google onsubmit functionality and create a functino up here to make the api call
            if(!ecstasy) {
            return `<form action="/profile" method="post">
                        <input type="hidden" name="follower_id" value="${currentUserID}"></input>
                        <button name="user_id" value="${followedUserID}"> Follow ${followedUsername} </button>
                    </form>`
            } else {
                return `<form>
                        <button id="unfollow-btn" name="user_id" value="${followedUserID}"> Unfollow ${followedUsername} </button>
                        <input id="unfollower" type="hidden" name="follower_id" value="${currentUserID}"></input>
                    </form>`
            }
    
    },
    getBreeds: () => {
        const breedArray = dogBreeds.map(breed => {
            return `<option value=${breed.name.replaceAll(' ', '-')}>${breed.name}</option>`;
        });
        return breedArray;
    }
}