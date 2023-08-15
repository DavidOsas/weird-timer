//variable declarations

const container = document.querySelector("#container")
let counterDiv = document.createElement('div')
let btn = document.createElement('button')
btn.id = 'btn'
btn.textContent = "Reset"

let unitMinutes = 0
let tensMinutes = 0
let unitSeconds = 0
let tensSeconds = 0

// counter function and event listener

let clickFunction = function() {btn.addEventListener('click', () => {
    unitSeconds = 0
    unitMinutes = 0
    tensSeconds = 0
    tensMinutes = 0
})
} 

let countFunc = ()=> {setInterval(() => {
    counterDiv.textContent = `${tensMinutes}${unitMinutes}:${tensSeconds}${unitSeconds}`
    
    unitSeconds++
    
    if(unitSeconds > 9) {
        unitSeconds = 0
        tensSeconds++
        if (tensSeconds > 5) {
             unitMinutes++
             unitSeconds = 0
             tensSeconds = 0
             if(unitMinutes > 9) {
                 unitMinutes = 0
                 tensMinutes++
                 if(tensMinutes > 5) {
                     clickFunction()
                 }
             }
         }
        
    }

}, 1000)
}

// counter reset button
if (clickFunction()) {
    console.log("Drue")
}

clickFunction()
countFunc()
container.append(counterDiv)
container.append(btn)