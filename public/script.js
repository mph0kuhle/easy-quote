
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('quoteForm');
    const progressFill = document.querySelector('.progress-fill');
    const submitBtn = document.querySelector('.submit-btn');
    const btnText = document.querySelector('.btn-text');
    const btnLoader = document.querySelector('.btn-loader');
    
    // Form fields for progress calculation
    const formFields = form.querySelectorAll('input[required], select[required], textarea[required]');
    
    // Update progress bar
    function updateProgress() {
        const filledFields = Array.from(formFields).filter(field => {
            if (field.type === 'select-one') {
                return field.value !== '';
            }
            return field.value.trim() !== '';
        });
        
        const progress = (filledFields.length / formFields.length) * 100;
        progressFill.style.width = progress + '%';
        
        // Add some celebration when form is complete
        if (progress === 100) {
            progressFill.style.background = 'linear-gradient(90deg, #32CD32, #228B22)';
            setTimeout(() => {
                progressFill.style.background = 'linear-gradient(90deg, #FFD700, #FFA500)';
            }, 1000);
        }
    }
    
    // Add event listeners to all form fields
    formFields.forEach(field => {
        field.addEventListener('input', updateProgress);
        field.addEventListener('change', updateProgress);
    });
    
    // Form submission handling
    form.addEventListener('submit', function(e) {
        // Show loading state
        btnText.style.display = 'none';
        btnLoader.style.display = 'inline-block';
        submitBtn.disabled = true;
        submitBtn.style.background = '#ccc';
        submitBtn.style.cursor = 'not-allowed';
    });
    
    // Add some personality to the form
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    
    nameField.addEventListener('input', function() {
        if (this.value.length > 0) {
            this.style.borderColor = '#32CD32';
            this.style.background = '#f0fff0';
        }
    });
    
    emailField.addEventListener('input', function() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(this.value)) {
            this.style.borderColor = '#32CD32';
            this.style.background = '#f0fff0';
        } else if (this.value.length > 0) {
            this.style.borderColor = '#FFD700';
            this.style.background = '#fffdf0';
        }
    });
    
    // Initial progress update
    updateProgress();
});
