document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Validasi nama
            const nameInput = document.getElementById('name');
            const nameError = document.getElementById('name-error');
            if (nameInput.value.trim() === '') {
                nameError.textContent = 'Nama harus diisi';
                return;
            }
            nameError.textContent = '';

            // Validasi email
            const emailInput = document.getElementById('email');
            const emailError = document.getElementById('email-error');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value)) {
                emailError.textContent = 'Email tidak valid';
                return;
            }
            emailError.textContent = '';

            // Jika valid, kirim form
            this.submit();
        });
    }
});