//1.Button Click 
// Adds a click event listener to the button with ID "clickBtn"
document.getElementById("clickBtn").addEventListener("click", function() {
    // Displays an alert when the button is clicked
    alert("Button was clicked!");
});

//2.Hover Effects
// Selects the element with ID "hoverBox"
const hoverBox = document.getElementById("hoverBox");

// Adds a mouseover event listener to change the background color to light green
hoverBox.addEventListener("mouseover", () => {
    hoverBox.style.backgroundColor = "lightgreen";
});

// Adds a mouseout event listener to change the background color back to light blue
hoverBox.addEventListener("mouseout", () => {
    hoverBox.style.backgroundColor = "lightblue";
});

//3.Keypress Detection
// Adds a keydown event listener to the document to detect key presses
document.addEventListener("keydown", (e) => {
    // Updates the text content of the element with ID "keyoutput" to show the pressed key
    document.getElementById("keyoutput").textContent = e.key;
});

//4.Double click 
// Adds a double-click event listener to the button with ID "secretBtn"
document.getElementById("secretBtn").addEventListener("dblclick", () => {
    // Displays an alert when the button is double-clicked
    alert("🎉You discovered the secret!");
});

//5.Button that changes color/text
// Selects the button with ID "colorbtn"
const colorbtn = document.getElementById("colorbtn");

// Adds a click event listener to change the button's text and background color
colorbtn.addEventListener("click", () => {
    colorbtn.textContent = "Changed!"; // Changes the button text
    colorbtn.style.backgroundColor = "orange"; // Changes the button background color
});

//6.Image Gallery
// Array of image paths for the gallery
const images = [
    "images/pexels-robinstickel-70497.jpg",
    "images/pexels-saraofree-29318423.jpg",
    "images/pexels-abhinavcoca-291528.jpg",
];

// Initializes the current image index to 0
let currentImg = 0;

// Selects the image element with ID "galleryImage"
const galleryImage = document.getElementById("galleryImage");

// Adds a click event listener to the "nextBtn" button to show the next image
document.getElementById("nextBtn").addEventListener("click", () => {
    currentImg = (currentImg + 1) % images.length; // Updates the index to the next image
    galleryImage.src = images[currentImg]; // Updates the image source
});

// Adds a click event listener to the "prevBtn" button to show the previous image
document.getElementById("prevBtn").addEventListener("click", () => {
    currentImg = (currentImg - 1 + images.length) % images.length; // Updates the index to the previous image
    galleryImage.src = images[currentImg]; // Updates the image source
});

// Tabs
// Selects all elements with the class "tab"
const tabs = document.querySelectorAll(".tab");

// Selects all elements with the class "tab-content"
const contents = document.querySelectorAll(".tab-content");

// Adds a click event listener to each tab
tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        // Hide all content
        contents.forEach((content) => content.classList.remove("active"));

        // Remove active class from all tabs
        tabs.forEach((t) => t.classList.remove("active"));

        // Add active class to the clicked tab
        tab.classList.add("active");

        // Show selected tab's content
        const targetContent = document.getElementById(`tab${tab.dataset.tab}`);
        if (targetContent) {
            targetContent.classList.add("active");
        } else {
            console.error(`No content found for tab ID: tab${tab.dataset.tab}`);
        }
    });
});

// Form Validation
// Selects the form with ID "signupForm"
const form = document.getElementById("signupForm");

// Selects the password input field
const password = document.getElementById("password");

// Selects the element for displaying password feedback
const feedback = document.getElementById("passwordFeedback");

// Real-time password feedback
password.addEventListener("input", () => {
    if (password.value.length < 8) {
        feedback.textContent = "Password must be at least 8 characters long.";
    } else {
        feedback.textContent = "";
    }
});

// On form submit
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form submission
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (!name || !email || password.value.length < 8) {
        alert("Please fill out all fields and ensure password is at least 8 characters long.");
    } else {
        alert("Form submitted successfully!");
    }
});