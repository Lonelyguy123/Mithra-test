const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

// Event listeners for switching between forms
signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

// Validation and redirection function for both forms
function validateAndRedirect(event, formId, redirectUrl) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the form element based on the passed formId
    const form = document.getElementById(formId);

    // Check if the form is valid
    if (form.checkValidity()) {
        // If valid, redirect to the specified URL
        window.location.href = redirectUrl;
    } else {
        // If not valid, show validation errors
        form.reportValidity();
    }
}

// Specific functions for handling sign up and sign in
function handleSignUp(event) {
    validateAndRedirect(event, 'signupForm', './Buyer_Main.html');
}

function handleSignIn(event) {
    validateAndRedirect(event, 'signinForm', './Buyer_Main.html');
}

// Attach event handlers to the buttons
document.getElementById('signupForm').addEventListener('submit', handleSignUp);
document.getElementById('signinForm').addEventListener('submit', handleSignIn);
