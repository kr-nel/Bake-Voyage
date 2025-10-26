document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('feedbackForm');
    const submitBtn = document.getElementById('submitBtn');
    const thankYouDiv = document.getElementById('thankYouMessage');
		
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';

            setTimeout(function() {
                form.style.display = 'none'; 
				thankYouDiv.classList.add('thank-you-message-style');
                thankYouDiv.style.display = 'block';

            }, 1500); 
        });
    }
});