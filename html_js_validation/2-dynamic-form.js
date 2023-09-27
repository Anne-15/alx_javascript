document.addEventListener('DOMContentLoaded', function(){
    //function to generate input fields
    function generateInputFields (value){
        const inputContainer = document.getElementById('inputContainer');
        inputContainer.innerHTML = ' ';

        for(let i = 1; i <= value; i++){
            const input = document.createElement('input');
            input.type = 'text';
            input.name = 'field' + i;
            input.placeholder = 'Field' + i;
            inputContainer.appendChild(input);
        }
    }
    //function to validate form
    function validateForm (event){
        event.preventDefault();

        const selectValue = document.getElementById('numFields').value;
        const selectInput = document.querySelectorAll('#inputContainer input');
        let isEmpty = false;

        //check if dynamic field generated is false
        selectInput.forEach(function(field){
            if(field.value.trim() == ''){
                isEmpty = true;
            }
        });

        if(isEmpty){
            document.getElementById('error').textContent = 'Please fill in all fields.';
        } else {
            document.getElementById('error').textContent = ' ';

            //allow form submission
            document.getElementById('dynamicForm').submit();
        }
    }
    // Attach the generateInputFields function to the change event of the dropdown menu
    document.getElementById('numFields').addEventListener('change', function () {
        const selectValue = parseInt(this.value);
        generateInputFields(selectValue);
    });

    // Attach the validateForm function to the form submission event
    document.getElementById('dynamicForm').addEventListener('submit', validateForm);

});