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
  let shirtColor = randomColor();

  if (shirtColor === "white" || shirtColor === "yellow"){
    projectClone.querySelector("[design-img]").src = `${project.imageDark}`
  } else {
    projectClone.querySelector("[design-img]").src = `${project.imageLight}`
  }
  projectClone.querySelector("[shirt-img]").style.backgroundImage = `url(${shirts[0].colors[shirtColor]})`
  projectClone.querySelector("[project-title]").innerHTML = project.name
  // projectClone.querySelector("[project-description]").innerHTML = project.description
  return projectClone
}

filterProjects("all")

const focusProject = (project) => {
  if (project.style.height === "400px" || project.style.transform !== "scale(1.75)") {
    // project.style.height = "550px"
    project.style.webkitTransform = "scale(1.75)"
    project.style.MozTransform = "scale(1.75)"
    project.style.msTransform = "scale(1.75)"
    project.style.OTransform = "scale(1.75)"
    project.style.transform = "scale(1.75)"
    // project.style.width = "550px"
  } else {
    // project.style.height = "400px"
    project.style.webkitTransform = "scale(1)"
    project.style.MozTransform = "scale(1)"
    project.style.msTransform = "scale(1)"
    project.style.OTransform = "scale(1)"
    project.style.transform = "scale(1)"
    // project.style.width = "300px"
  }
}

let projectSamples = Array.from(document.getElementsByClassName("project"))

projectSamples.forEach((project) => {
  project.addEventListener("click", () => {
    focusProject(project)
  })
})


