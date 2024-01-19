let storedUsername = localStorage.getItem('username');
if(storedUsername) {
  document.getElementById('username').value = storedUsername;
}
let usercoment = document.getElementById("usercoment");
usercoment.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputchat = document.getElementById('inputchat');
    const usernameInput = document.getElementById('username');
    const comment = inputchat.value;
    const username = usernameInput.value;
    if (comment.trim() !== '' && username.trim() !== '') {
        let commentDiv = document.createElement('div');
        commentDiv.innerHTML = `<strong>${username}:</strong> ${comment}`;
        let chatbox = document.querySelector('.chatbox');
        chatbox.appendChild(commentDiv);
        inputchat.value = '';
        localStorage.setItem('username', username);
    }
console.log(`${username}: ${comment}`);
});
