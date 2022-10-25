function displayDate() {
    document.getElementById('demo').innerHTML = Date()
   }
document.querySelector('button')[0].addEventListener("onclick", ()=> alert('You clicked the button') )

window.addEventListener('resize', () => {
    document.getElementById('demo').innerHTML = "you resize the window"
})

window.addEventListener("keydown", (event) => {
    switch(event.key) {
        case 'v':
            document.body.style.backgroundColor = 'violet'
    }
})
window.addEventListener("keydown", (event) => {
    switch(event.key) {
        case 'b':
            document.body.style.backgroundColor = 'blue'
    }
})
window.addEventListener("keydown", (event) => {
    switch(event.key) {
        case 'r':
            document.body.style.backgroundColor = 'red'
    }
})
window.addEventListener("keydown", (event) => {
    switch(event.key) {
        case 'g':
            document.body.style.backgroundColor = 'grey'
    }
})
window.addEventListener("keydown", (event) => {
    switch(event.key) {
        case 'v':
            document.body.style.backgroundColor = 'violet'
    }
})