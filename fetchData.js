let fetch = require("node-fetch");
const url = 'https://randomuser.me/api/?results=10';
fetch(url)
    .then((response) => response.json()) // Transform the data into json
    .then(function (data) {
        // Your code for handling the data you get from the API
        let authors = data.results;
        return authors.map(function (author) {
            let li = createNode('li'),
                img = createNode('img'),
                span = createNode('span');
            img.src = author.picture.medium;
            span.innerHTML = `${author.name.first} ${author.name.last}`;
            append(li, img);
            append(li, span);
            append(ul, li);
        })
    })
    .catch(function (error) {
        // This is where you run code if the server returns any errors
    })

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}


function simple() {
    for (let i = 0, j = arguments.length; i < j; i++) {
        console.log(arguments[i])
    }
}

simple('a', 'b', 'c')