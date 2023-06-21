const url = "https://date.nager.at/api/v2/publicholidays/2020/US"
const dropDown = document.getElementById("month-dropdown")
const button = document.getElementById("button")
document.querySelector("#month-form").addEventListener("submit",handleSubmit)

document.addEventListener("DOMContentLoaded",fetch(url)
    .then(response => response.json())
    .then(object => {
        console.log(object)
        const ul = document.createElement("ul")
        object.forEach(holiday =>{
            console.log(holiday)
            const li = document.createElement("li")
            li.innerText = `${holiday["date"]} ${holiday["localName"]} ${holiday["type"]}`
            li.addEventListener("click",() => li.style.color = "blue")
            ul.appendChild(li)
        })
        document.body.appendChild(ul)
    })
)

dropDown.addEventListener("input",()=>{
    let dropDownOuterValue = dropDown.options[dropDown.selectedIndex].value
    console.log(dropDownOuterValue)
    for(let date of document.getElementsByTagName("li")){
        let monthDate = date.innerText.slice(5,7)
        console.log(monthDate)
        if (monthDate != dropDownOuterValue){
            date.style.display = "none"
        }
        else{
            date.style.display = "list-item"
        }
        if(dropDownOuterValue=="") date.style.display = "list-item"
    }
})


function handleSubmit(button){
    button.preventDefault()
    let monthObj = {
        holiday:button.target.Holiday.value,
        date:button.target.Date.value,
        optional:button.target.Optional.value,
    }
    renderMonth(monthObj)
}

function renderMonth(obj){
    const li = document.createElement("li")
    li.innerText= `${obj["date"]} ${obj["holiday"]} ${obj["optional"]}`
    document.querySelector("ul").appendChild(li)
    
}
