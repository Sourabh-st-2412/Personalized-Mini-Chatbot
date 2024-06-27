
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Chatbot Assistance</title>
<link rel="stylesheet" href="design.css">
</head>
<body>
    <img class='left-img' src="Advantages-of-adding-chatbot.jpg" alt="" srcset="">
    <div class="chat-container">
        <div class='header'>
            <img src="chatbot logo.png" alt="" class="logo">
            <h2>Assistant Chatbot</h2>
        </div>
        <div class="chat-box" id="chat-box" >
            
        </div>
        
        <div class="box">
        <div id="loader" class="loader"></div>
            <input type="text" id="user-input" autocomplete="off" placeholder="Type a message...">
           
            <span>
                <button class='generateBtn' id="send-btn">Generate
                    <img class='geminiStar' src="gemini start.png" alt="">
                </button>
                <button type="button" class="clear-btn" onclick="clearAll();">Clear</button>
            </span>
            
        </div>
    </div>
<script src="myscript.js"></script>

</body>
</html>
