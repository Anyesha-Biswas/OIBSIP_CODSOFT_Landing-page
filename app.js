const subscribeForm = document.querySelector('.newsletter form');

subscribeForm.addEventListener('submit', function(event) {
   event.preventDefault();
   
   const emailInput = this.querySelector('input[type=email]');
   
   if(emailInput.value) {
       alert(`Thank you for subscribing with email ${emailInput.value}!`);
       emailInput.value = '';
   } else {
       alert('Please enter a valid email address.');
   }
});
