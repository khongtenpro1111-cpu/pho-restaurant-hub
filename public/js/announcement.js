document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); 
    var successMessage = document.getElementById('success-message');
    successMessage.style.display = 'block'; 
    setTimeout(function () {
        successMessage.style.display = 'none'; 
    }, 5000);
});