// Select the form element
const form = document.getElementById("myForm");

// Add event listener to the form's submit event
form.addEventListener("submit", function(event) {
    // Prevent the default form submission
    event.preventDefault();
                    
    // Get the input fields
    const nameField = document.getElementById("name");
    const feedbackField = document.getElementById("feedback");
                    
    // Get the error message elements
    const nameError = document.getElementById("nameError");
    const feedbackError = document.getElementById("feedbackError");
                    
    // Flag to check if form is valid
    let isFormValid = true;
        
    // Validate name field
    if (nameField.value.trim() === "") {
        nameError.style.display = "block"; // Show error message
        nameField.classList.add("invalid"); // Add invalid class (optional for styling)
        isFormValid = false;
    } else {
        nameError.style.display = "none"; // Hide error message
        nameField.classList.remove("invalid");
    }
        
    // Validate feedback field
    if (feedbackField.value.trim() === "") {
        feedbackError.style.display = "block"; // Show error message
        feedbackField.classList.add("invalid"); // Add invalid class
        isFormValid = false;
    } else {
        feedbackError.style.display = "none"; // Hide error message
        feedbackField.classList.remove("invalid");
    }
        
    // If form is valid, submit the form and clear the fields
    if (isFormValid) {
        alert("Form submitted successfully!");

        // Clear the form fields
        form.reset();  // This will only execute if the form is valid
    }
});
