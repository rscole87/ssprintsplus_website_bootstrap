import projects from "./projects.js"
import shirts from "./shirts.js"
let cardTemplate = document.getElementById("project-card-template")
const projectFilter = document.getElementById("project-filter")
const productsDiv = document.getElementById("products-div")


const filterProjects = (type) => {
  console.log("filtering")
  if (type === "all") {
    productsDiv.innerHTML = ""
    projects.forEach((project) => {
      productsDiv.appendChild(printProject(project))
    })
  } else {
    productsDiv.innerHTML = ""
    projects.forEach((project) => {
      if (project.type === type) {
        productsDiv.appendChild(printProject(project))
      }
    })
  }
}

projectFilter.addEventListener("change", () => {
  filterProjects(projectFilter.value)
})

const randomColor = () =>{
  const shirtColors = ['white', 'black', 'blue', 'charcoal', 'gray', 'green', 'hunter', 'navy', 'orange', 'purple', 'red', 'yellow'];
  let chosenColor = shirtColors[Math.floor(Math.random() * shirtColors.length)];
  return chosenColor
}

const printProject = (project) => {
  let projectClone = document.importNode(cardTemplate.content, true)
  projectClone.querySelector("[project-container]").id = project.id
  projectClone.querySelector("[design-img]").src = `${project.image}`
  projectClone.querySelector("[shirt-img]").style.backgroundImage = `url(${shirts[0].colors[randomColor()]})`
  projectClone.querySelector("[project-title]").innerHTML = project.name
  // projectClone.querySelector("[project-description]").innerHTML = project.description
  return projectClone
}

filterProjects("all")

let projectSamples = Array.from(document.getElementsByClassName("project"))

projectSamples.forEach((project) => {
  project.addEventListener("click", () => {
    focusProject(project)
  })
})
