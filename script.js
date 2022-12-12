
const insert = document.getElementById('insert')


const render = window.addEventListener('keydown', (event) =>{
insert.innerHTML = `     <div class="key">
${event.key === " " ? event.key = 'Space' : event.key}
<small> key </small>
</div>
<div class="key">
${event.keyCode}
<small>event.keyCode</small>
</div>
<div class="key">
${event.code}
<small> event.code </small>
</div>`
})

