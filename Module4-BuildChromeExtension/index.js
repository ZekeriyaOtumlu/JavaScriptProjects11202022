let saveInputBtn = document.getElementById("input-btn")
let inputEl = document.getElementById("input-el")
let myLeads = []
let ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("save-btn")


//We can use as below and call this function saveBtnClicked inside html file as onclick = "saveBtnClicked()" <button id="input-btn" onclick="saveBtnClicked()">SAVE INPUT</button>
// function saveBtnClicked() {
//     console.log("Save Button Clicked")
// }

//We will use this way now and more professional

//Using localStorage
//Get the leads from the localStroage- PS: JSON.parse()
// localStorage.clear() // Clearing the localStorage
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) { // if leadsFromLocalStorage truhty
    myLeads = leadsFromLocalStorage // if truthy, set myLeads to its value and call renderLeads()
    render(myLeads)
}

//Delete btn once double clicked it
deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear() // clear localStorage
    myLeads = [] // deleting the lists
    render(myLeads) // 
})

//tabButton SAVE BUTTON
tabBtn.addEventListener("click", function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function() { // getting url from current opening window and active window

        console.log(tabs[0].url)
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads)) // saving to localStorage
        render(myLeads)
    })


})
saveInputBtn.addEventListener("click", function() {
    console.log("Button Clicked from addEventListener ")
        //push the value from the input into  myLeads array when the input button clicked
    myLeads.push(inputEl.value) //get value from input javascript
    console.log(myLeads)
    inputEl.value = "" // clearing the input field 
        //Storing myLeads Arrays into localStorage use:
    localStorage.setItem("myLeads", JSON.stringify(myLeads)) // saving to localStorage

    render(myLeads);

    //To verify that it works:
    console.log(localStorage.getItem("myLeads")) // getting from local storage


})


function render(leads) {
    //Log out the items in the myLeads array using for loop
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        //we can use as ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"  but will use another way
        //ulEl.innerHTML += "<li>" + myLeads[i] + "</li>" // creating li and adding the array inside li (ul is a parent)

        //1 create element, 2 set textContent 3 append to ul (Same as above)
        // let li = document.createElement("li")
        // li.textContent = myLeads[i]
        // ulEl.append(li)

        //create the variable to hold all the HTML for the list items
        // listItems += "<li><a target='_blank' href='#'>" + myLeads[i] + "</a></li>" // listItems hold all arrays. added a tag to make as link
        listItems += `
       <li>
       <a target='_blank' href='${leads[i]}'>
        ${leads[i]} 
       </a>
       </li>`
    }
    //render the listItems inside the ul using ulEl.innerHTML
    ulEl.innerHTML = listItems
}

//Below more exercise with innerHTML: <<<<<<<start from here>>>>>>>>>.
//let container = document.getElementById("container2")
//container.innerHTML = "<button onclick = "buyCar()"> Hello JS </button>" // created button inside container div and said Hello JS. Once clicked on button called the buyCar function inside it.

/*function buyCar(){ 
    container.innerHTML += "<p>Thank you for buying</p>" // created inside container with p tag
 } */