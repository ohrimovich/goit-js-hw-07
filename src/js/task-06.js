const inputRef = document.querySelector('#validation-input');
inputRef.addEventListener('blur', onInputChange);

function onInputChange() {
    if (Number (inputRef.getAttribute('data-length')) === inputRef.value.length) {
          inputRef.classList.add('valid');
         inputRef.classList.remove('invalid');
     
    } else {
        inputRef.classList.add('invalid');
        inputRef.classList.remove('valid');
    }
   
    
}
