const scriptURL = 'https://script.google.com/macros/s/AKfycbw5VkqqwI0ZWHlHvUFI4rhnUYx4o78sed3UceCVO662-iqVKUK8up-KZzP1gwEXor3jMg/exec';
const form = document.forms['contact-form'];
const submitBtn = document.getElementById('submit-btn');
const messageBox = document.getElementById('lblProcessCarrier');

form.addEventListener('submit', e => {
    e.preventDefault();

    if (!checkRequiredFields(form)) {
        messageBox.textContent = "Please fill all required fields.";
        return;
    }

    // Step 1: Show 'Submitting...'
    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting...';

    fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form)
    })
        .then(response => {
            // Step 2: Update button and message
            submitBtn.textContent = 'Submitted';
            messageBox.textContent = "Thank you! Your form is submitted successfully.";

            // Step 3: Clear form and close modal after 3 seconds
            setTimeout(() => {
                form.reset();
                submitBtn.disabled = false;
                submitBtn.textContent = 'Submit';
                messageBox.textContent = '';
                document.getElementById('enquire_popup').style.display = 'none'; // closes popup
            }, 3000);
        })
        .catch(error => {
            console.error('Form Submission Error:', error.message);
            messageBox.textContent = "There was an error. Please try again.";
            submitBtn.disabled = false;
            submitBtn.textContent = 'Submit';
        });
});

// ✅ Basic validation
function checkRequiredFields(form) {
    const requiredFields = ['first_name', 'last_name', 'email', 'mobile'];
    for (let name of requiredFields) {
        const field = form[name];
        if (!field || field.value.trim() === '') {
            return false;
        }
    }
    return true;
}
