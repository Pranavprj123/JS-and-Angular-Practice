var form = document.querySelector("form");
var inps = document.querySelectorAll("input[type='text']");
var h4  = document.querySelector("h4");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting
    // if(inp1.value === '' || inp2.value === '') {
    //     h4.textContent = "Please fill in both fields.";
    // }
    // else{
    //     h4.textContent = " ";
    // }

    for(var i=0; i < inps.length; i++){
        if(inps[i].value.trim() === ''){
            h4.textContent = "Please fill in both fields.";
            h4.style.color = "red";
            break;
        }
    }
    
});

