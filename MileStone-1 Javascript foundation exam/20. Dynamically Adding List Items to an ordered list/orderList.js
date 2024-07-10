const addItemBtn = document.getElementById("listButton")
const listContainer = document.getElementById("listOutput")
let currentListItemIndex = 0;

addItemBtn.addEventListener("click", () => {
    if (currentListItemIndex < listItem.length){
        const newList = document.createElement('li')
        newList.textContent = listItem[currentListItemIndex]
        listContainer.appendChild(newList)
        currentListItemIndex++
    }
    else{   
        alert(`All item have been added, in the provided list !!!`)
    }
})

const listItem = [
    `HTML and Semantics`,
    `Starting with CSS`,
   ` Working Template`,
    `Mobile responsive webpage`,
    `Grid and Flex-box in CSS`,
    `Projects using HTML & CSS`,
    `Version Control and Git`,
   ` Getting Started with JavaScript`,
    `Advance JavaScript`,
    `Working with DOM`,
    `Making Projects using HTML CSS ans JavaScript`,
    `Understanding Fundamental of Computer Science`,
    `Getting Started with Database`,
    `Understanding the Database`,
   ` Starting with NodeJS and Express`,
    `Understanding React and its Fundamental`,
    `Understanding Hooks and Routers`,
    `starting and Completing Full Fledge Projects`
]