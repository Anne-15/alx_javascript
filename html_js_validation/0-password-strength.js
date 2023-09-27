document.addEventListener('DOMContentLoaded', function(){
    function validatePassword (event){
        event.preventDefault();
        //get password input value
        const password = document.getElementById('password').value;

        //define regex pattern
        const minLength = 8;
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasNumber = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*]/.test(password);

        //check if password meets the criteria
        if(
            password.length >= minLength &&
            hasUppercase &&
            hasLowercase &&
            hasNumber &&
            hasSpecialChar
        ){
            document.getElementById('error').textContent = ' ';

            //allow form submission
            document.getElementById('passwordForm').submit();
        } else {
            document.getElementById('error').textContent = 
            'Password must meet the following criteria:\n' +
            '- At least 8 characters long\n' +
            '- Contains at least one uppercase letter\n' +
            '- Contains at least one lowercase letter\n' +
            '- Contains at least one numeric digit\n' +
            '- Contains at least one special character (!@#$%^&*)';
        }
    }
    // Attach the validatePassword function to the form submission event
    document.getElementById('passwordForm').addEventListener('submit', validatePassword);
});