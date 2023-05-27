const customErrorMsg = 'Email must be in lowercase\n';

// Get the form and submit button element
const form = document.querySelector('.form');
const formSubmitBtn = document.getElementById('submit-form');

// Add an event listener for the form submission
form.addEventListener('submit', function (event) {
    // Get the email input element
    const emailInput = document.querySelector('input[name="email"]');
    // Convert the email value to lowercase
    const lowercaseEmail = emailInput.value.toLowerCase();

    // Check if the email value is already lowercase
    if (emailInput.value === lowercaseEmail) {
        // Validation successful, allow the form submission
        return true;
    } 
    else {
        // Prevent the form submission
        event.preventDefault();
        // Show an error message near the submit button
        const errorMsg = document.createElement('span');
        errorMsg.classList.add('error-message');
        errorMsg.textContent = customErrorMsg;
        errorMsg.style.color = 'red';
        errorMsg.style.backgroundColor = '#fff';
        errorMsg.style.backdropFilter = 'blur(5px)';
        errorMsg.style.padding = '12px';
        errorMsg.style.marginTop = '12px'
        errorMsg.style.float = 'left';
        errorMsg.style.borderRadius = '8px'
        errorMsg.style.fontWeight = '500';
        errorMsg.style.fontSize = '14px';
        errorMsg.style.lineHeight = '24px';
        formSubmitBtn.parentNode.insertBefore(errorMsg, formSubmitBtn);
        // Clear the error message after a few seconds
        setTimeout(function () { 
            errorMsg.remove();
        }, 3000);
    }
});