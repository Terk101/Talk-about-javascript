const url = 'https://randomuser.me/api/?results=10';
fetch(url)
.then((response) => response.json()) // Transform the data into json
.then(function(data) {
     // Your code for handling the data you get from the API
     console.log(data);
})
.catch(function(error) {
    // This is where you run code if the server returns any errors
})