// let username;

// document.getElementById("mySubmit").onclick = function() {
//     username = document.getElementById("myText").value;
//     document.getElementById("myH1").textContent = `Hello ${username}`;

// }

document.getElementById('nameForm').onsubmit = function(event) {
    event.preventDefault(); // Prevents page reload
    let name = document.getElementById('fname').value;
    console.log('Hello, ' + name);
}
 