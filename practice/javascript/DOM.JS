<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>JavaScript DOM Program</title>

    <style>
        body {
            font-family: Arial;
            text-align: center;
            background-color: lightblue;
            padding: 20px;
        }

        #box {
            background-color: white;
            padding: 20px;
            margin: 20px auto;
            width: 400px;
            border: 2px solid blue;
        }

        button {
            background-color: green;
            color: white;
            padding: 10px 20px;
            border: none;
            font-size: 16px;
        }
    </style>
</head>

<body>

    <h1 id="heading">JavaScript DOM Demonstration</h1>

    <div id="box">
        <p id="message">This is the original message.</p>

        <p class="info">HTML</p>
        <p class="info">CSS</p>
        <p class="info">JavaScript</p>

        <button id="btn">Change Content</button>
    </div>

    <script>

        // Selecting elements using getElementById()
        const heading = document.getElementById("heading");
        const message = document.getElementById("message");
        const button = document.getElementById("btn");

        // Selecting elements using querySelectorAll()
        const info = document.querySelectorAll(".info");

        // Adding a click event
        button.addEventListener("click", function () {

            // Changing text content
            heading.textContent = "DOM Elements Modified";

            message.textContent =
                "Content changed using JavaScript!";

            // Changing styles
            heading.style.color = "red";
            message.style.fontSize = "22px";
            message.style.color = "blue";

            // Changing all selected elements
            info.forEach(function (item) {
                item.style.color = "purple";
                item.style.fontWeight = "bold";
            });

            // Changing button
            button.textContent = "Changed Successfully!";
            button.style.backgroundColor = "blue";
        });

    </script>

</body>

</html>