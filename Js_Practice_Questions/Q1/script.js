var btn = document.querySelector('button')
var p = document.querySelector('p')
btn.addEventListener('click', function() {
    p.textContent = "Para changed!"
    p.style.color = "red"
})