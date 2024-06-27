const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const loader = document.getElementById('loader');

// Hide loader initially
loader.style.display = 'none';



sendBtn.addEventListener('click', genarateResponse);

function genarateResponse() {
    const userMessage = userInput.value.trim();
    if (userMessage === '') return;

    appendMessage('user', userMessage);

    loader.style.display = 'block'; // Show loader

    fetch("response.php", {
        method: "post",
        body: JSON.stringify({
            text: userMessage,
        }),
    })
    .then((res) => res.text())
    .then((res) => {
        appendMessage('bot', res);
        chatBox.scrollTop = chatBox.scrollHeight;
        loader.style.display = 'none'; // Hide loader after response
    })
    .catch((error) => {
        console.error('Error getting bot response:', error);
        loader.style.display = 'none'; // Hide loader on error
    });

    userInput.value = '';
}



function appendMessage(sender, message) {
    const messageElement = document.createElement('span');
    messageElement.classList.add(`${sender}-message`);
    messageElement.innerText = message;
    chatBox.appendChild(messageElement);
}

function clearAll() {
    location.reload();
    // document.getElementById('chat-box').value = ""; // Clear chat-box div
    //document.getElementById('user-input').value = ""; // Clear input field
}
// document.getElementById("user-input").addEventListener("keyup", function(event) {
//     if (event.key === "Enter") {
//         event.preventDefault(); // Prevent the default form submission behavior
//         document.getElementById("send-btn").click();
//     }
// });

var textarea = document.getElementById("user-input");

    textarea.addEventListener("keyup", function(event) {
      // Check if the Enter key is pressed
      if (event.key === "Enter") {
        genarateResponse(); // Call your function here
      }
    });


// FOr Loader animation
