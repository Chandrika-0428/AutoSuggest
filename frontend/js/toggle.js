var users = [
    {
        "name": "John Doe",
        "gender": "Male",
        "image": "../images/john.png"
    },
    {
        "name": "Jane Smith",
        "gender": "Female",
        "image": "../images/jane.png"
    }

]
var currentID = 0;

function toggle(){
    //function used to toggle between two or more users.
    currentID = (currentID + 1) % users.length;
    var user = users[currentID];

    //to render the user details
    document.getElementById("user-image").src = user.image;
    document.getElementById("user-name").textContent = user.name;
    document.getElementById("user-gender").textContent = user.gender;
    

}