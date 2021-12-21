const req = require("express/lib/request");
const { use } = require("../controllers");
const { User } = require("../models");


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
    }
}