  // Get the form and input elements
  const form = document.querySelector('.form');
  const fullNameInput = document.querySelector('input[name="full_name"]');
  const emailInput = document.querySelector('input[name="email"]');
  const messageInput = document.querySelector('textarea[name="msg"]');

  // Load data from local storage and pre-fill the input fields
  function loadFormData() {
    const formData = localStorage.getItem('form_data');
    if (formData) {
      const { full_name, email, msg } = JSON.parse(formData);
      fullNameInput.value = full_name;
      emailInput.value = email;
      messageInput.value = msg;
    }
  }

  // Save form data to local storage
  function saveFormData() {
    const formData = {
      full_name: fullNameInput.value,
      email: emailInput.value,
      msg: messageInput.value
    };
    localStorage.setItem('form_data', JSON.stringify(formData));
  }

  // Add event listeners for input changes and form submission
  fullNameInput.addEventListener('input', saveFormData);
  emailInput.addEventListener('input', saveFormData);
  messageInput.addEventListener('input', saveFormData);
  form.addEventListener('submit', function(event) {
    localStorage.removeItem('form_data');
  });

  // Load form data when the page is loaded
  document.addEventListener('DOMContentLoaded', loadFormData);

