import projects from "./projects.js"
import shirts from "./shirts.js"
let template = document.getElementById("project-card-template")
let cardTemplate = document.getElementById("project-card-template")
const mobileMenuBttn = document.getElementById("mobile-menu-bttn")
const nav = document.getElementById("main-nav")
const projectFilter = document.getElementById("project-filter")
const projectsDiv = document.getElementById("projects-div")

// mobileMenuBttn.addEventListener("click", () => {
//   slideIn(nav)
// })

const slideIn = (element) => {
  if (element.style.maxHeight === "0px" || (element.style.maxHeight !== null && element.style.maxHeight !== "220px")) {
    element.style.maxHeight = "220px"
  } else {
    element.style.maxHeight = "0px"
  }
}

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

const filterProjects = (type) => {
  console.log("filtering")
  if (type === "all") {
    projectsDiv.innerHTML = ""
    projects.forEach((project) => {
      projectsDiv.appendChild(printProject(project))
    })
  } else {
    projectsDiv.innerHTML = ""
    projects.forEach((project) => {
      if (project.type === type) {
        projectsDiv.appendChild(printProject(project))
      }
    })
  }
}

projectFilter.addEventListener("change", () => {
  filterProjects(projectFilter.value)
})

// const printProject = (project) => {
//   let projectClone = document.importNode(template.content, true)
//   projectClone.querySelector("[project-container]").id = project.id
//   projectClone.querySelector("[project-container]").style.backgroundImage = `url(${project.image})`
//   return projectClone
// }

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
  projectClone.querySelector("[project-description]").innerHTML = project.description
  return projectClone
}

filterProjects("all")

let projectSamples = Array.from(document.getElementsByClassName("project"))

projectSamples.forEach((project) => {
  project.addEventListener("click", () => {
    focusProject(project)
  })
})
