const from = document.querySelector('form')
let BMI = 0
from.addEventListener('submit', (e) => {
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    if(height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = "Please give a valid Height"
    } else if(weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = "Please give a valid Height"
    } else {
       BMI = (weight / ((height * height)/10000)).toFixed(2)
       results.innerHTML = `<span>${BMI}</span>`
       
    }
    // task done
    const div = document.createElement('p')
    if (BMI < 18.6)  {
     div.textContent = 'under weight'
    }
     else if (BMI > 18.6 && BMI < 24.9)  {
     div.textContent = 'normal weight'
    }
    if (BMI > 24.9)  {
     div.textContent = 'over weight'
    }
    results.appendChild(div)

})
