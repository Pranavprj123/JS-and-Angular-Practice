var input = document.querySelector('input')

var data = [
    { name: "Harsh", src: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Harshita", src: "https://plus.unsplash.com/premium_photo-1734218353091-a40705659ab1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Harshika", src: "https://plus.unsplash.com/premium_photo-1734388423030-114def7afff4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "shyam", src: "https://plus.unsplash.com/premium_photo-1734603747480-dca1dae1087e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
]
var pers = '';
data.forEach(function(elem) {
   pers += `<div class="person">
                    <div class="img">
                        <img src="${elem.src}" alt="">
                    </div>
                    <h3>${elem.name}</h3>
                </div>` 
})

document.querySelector('.people').innerHTML = pers;

input.addEventListener('input', function() {
    var matching = data.filter(function(e) {
      return e.name.startsWith(input.value)
    })
    var newusers = '';
    matching.forEach(function(elem) {
        newusers += `<div class="person">
                         <div class="img">
                             <img src="${elem.src}" alt="">
                         </div>
                         <h3>${elem.name}</h3>
                     </div>` 
     })
     document.querySelector('.people').innerHTML = newusers;
})