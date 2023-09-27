document.addEventListener('DOMContentLoaded', function(){
    function validateEmail (event){
        event.preventDefault();
        //get password input value
        const email = document.getElementById('email').value;

        //define regex pattern
        const emailPattern = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

        //check if password meets the criteria
        if(emailPattern.test(email)){
            document.getElementById('error').textContent = ' ';

            //allow form submission
            document.getElementById('emailForm').submit();
        } else {
            document.getElementById('error').textContent = 'Please enter a valid email address.';
        }
    }
    // Attach the validatePassword function to the form submission event
    document.getElementById('emailForm').addEventListener('submit', validateEmail);
});