var txtar = document.querySelector('textarea');
var counter = document.querySelector('#counter');
txtar.addEventListener('input', function() {
    counter.textContent = txtar.value.length;
})