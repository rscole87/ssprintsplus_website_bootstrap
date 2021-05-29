// import projects from "./projects.js"
// import shirts from "./shirts.js"
const cardTemplate = document.getElementById("project-card-template")
const projectFilter = document.getElementById("project-filter")
const productsDiv = document.getElementById("products-div")
const activeImage = document.getElementById("active-image")

const projects = [
  {
    name: "Grace for the Race",
    id: "project1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageLight: "../images/designs/grace-race-WHITE.png",
    imageDark: "../images/designs/grace-race-BLACK.png",
    type: "shirt",
  },
  {
    name: "C&C Window Tint",
    id: "project2",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    imageLight: "../images/designs/c&c-tint-WHITE.png",
    imageDark: "../images/designs/c&c-tint-BLACK.png",
    type: "shirt",
  },
  {
    name: "Cut",
    id: "project3",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    imageLight: "../images/designs/cut-WHITE.png",
    imageDark: "../images/designs/cut-BLACK.png",
    type: "shirt",
  },
  {
    name: "Equality",
    id: "project4",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    imageLight: "../images/designs/equal-WHITE.png",
    imageDark: "../images/designs/equal-BLACK.png",
    type: "shirt",
  },
  {
    name: "Fast Freddies Greenscapes",
    id: "project5",
    description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    imageLight: "../images/designs/fast-freddies-WHITE.png",
    imageDark: "../images/designs/fast-freddies-BLACK.png",
    type: "shirt",
  },
  {
    name: "Jay Quick Tire Shop",
    id: "project6",
    description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    imageLight: "../images/designs/jay-quick-WHITE.png",
    imageDark: "../images/designs/jay-quick-BLACK.png",
    type: "shirt",
  },
  {
    name: "Love Creatively",
    id: "project7",
    description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    imageLight: "../images/designs/love-creatively-WHITE.png",
    imageDark: "../images/designs/love-creatively-BLACK.png",
    type: "shirt",
  },
  {
    name: "Sharing Love",
    id: "project8",
    description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    imageLight: "../images/designs/love-god-WHITE.png",
    imageDark: "../images/designs/love-god-BLACK.png",
    type: "shirt",
  },
  {
    name: "All About the Ambiance",
    id: "project9",
    description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    imageLight: "../images/designs/mz-c-bnb-WHITE.png",
    imageDark: "../images/designs/mz-c-bnb-BLACK.png",
    type: "shirt",
  },
  {
    name: "Perotte's Enterprises",
    id: "project10",
    description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    imageLight: "../images/designs/perottes-WHITE.png",
    imageDark: "../images/designs/perottes-BLACK.png",
    type: "shirt",
  },
  {
    name: "Ray's Lawn Service",
    id: "project11",
    description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    imageLight: "../images/designs/ray-lawn-WHITE.png",
    imageDark: "../images/designs/ray-lawn-BLACK.png",
    type: "shirt",
  },
  {
    name: "Stay With My Son",
    id: "project12",
    description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    imageLight: "../images/designs/stay-with-son-WHITE.png",
    imageDark: "../images/designs/stay-with-son-BLACK.png",
    type: "shirt",
  },
  {
    name: "Swarm Team Reunion Cruise",
    id: "project13",
    description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    imageLight: "../images/designs/swarm-team-WHITE.png",
    imageDark: "../images/designs/swarm-team-BLACK.png",
    type: "shirt",
  },
  {
    name: "Turned 20 Twice",
    id: "project14",
    description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    imageLight: "../images/designs/turned-20-WHITE.png",
    imageDark: "../images/designs/turned-20-BLACK.png",
    type: "shirt",
  },
  {
    name: "God Says I Am",
    id: "project15",
    description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    imageLight: "../images/designs/god-says-WHITE.png",
    imageDark: "../images/designs/god-says-BLACK.png",
    type: "shirt",
  },
  {
    name: "WDI Landscaping",
    id: "project16",
    description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    imageLight: "../images/designs/wdi-WHITE.png",
    imageDark: "../images/designs/wdi-BLACK.png",
    type: "shirt",
  },
  {
    name: "Get Involved",
    id: "project17",
    description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    imageLight: "../images/designs/get-involved-WHITE.png",
    imageDark: "../images/designs/get-involved-BLACK.png",
    type: "shirt",
  },
  {
    name: "When You Can't Do What You Want",
    id: "project18",
    description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    imageLight: "../images/designs/when-you-cant-WHITE.png",
    imageDark: "../images/designs/when-you-cant-BLACK.png",
    type: "shirt",
  },
  {
    name: "Tackle Racism",
    id: "project19",
    description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    imageLight: "../images/designs/tackle-racism-WHITE.png",
    imageDark: "../images/designs/tackle-racism-BLACK.png",
    type: "shirt",
  },
  {
    name: "Vote",
    id: "project20",
    description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    imageLight: "../images/designs/vote-WHITE.png",
    imageDark: "../images/designs/vote-BLACK.png",
    type: "shirt",
  },
]

const shirts = [
  {
    shirtType: "tee",
    colors: {
      white: "../images/mockup-shirt-WHITE.png",
      black: "../images/mockup-shirt-BLACK.png",
      blue: "../images/mockup-shirt-BLUE.png",
      charcoal: "../images/mockup-shirt-CHARCOAL.png",
      gray: "../images/mockup-shirt-GRAY.png",
      green: "../images/mockup-shirt-GREEN.png",
      hunter: "../images/mockup-shirt-HUNTER.png",
      navy: "../images/mockup-shirt-NAVY.png",
      orange: "../images/mockup-shirt-ORANGE.png",
      purple: "../images/mockup-shirt-PURPLE.png",
      red: "../images/mockup-shirt-RED.png",
      yellow: "../images/mockup-shirt-YELLOW.png",
    },
  },
  {
    shirtType: "vNeck",
    svg: "",
  },
  {
    shirtType: "polo",
    svg: "",
  },
  {
    shirtType: "tee",
    svg: "",
  },
]

const productThumbLinks = Array.from(document.getElementsByClassName("product-thumb-link"))

productThumbLinks.forEach(function (anchor) {
  const productImg = anchor.childNodes[1]
  anchor.addEventListener("click", function () {
    focusProject(productImg)
  })
})

function focusProject(product) {
  activeImage.src = product.src
}

const filterProjects = function (type) {
  console.log("filtering")
  if (type === "all") {
    productsDiv.innerHTML = ""
    projects.forEach(function (project) {
      productsDiv.appendChild(printProject(project))
    })
  } else {
    productsDiv.innerHTML = ""
    projects.forEach(function (project) {
      if (project.type === type) {
        productsDiv.appendChild(printProject(project))
      }
    })
  }
}

projectFilter.addEventListener("change", function () {
  filterProjects(projectFilter.value)
})

const randomColor = function () {
  const shirtColors = ["white", "black", "blue", "charcoal", "gray", "green", "hunter", "navy", "orange", "purple", "red", "yellow"]
  const chosenColor = shirtColors[Math.floor(Math.random() * shirtColors.length)]
  return chosenColor
}

const printProject = function (project) {
  const projectClone = document.importNode(cardTemplate.content, true)
  projectClone.querySelector("[project-container]").id = project.id
  const shirtColor = randomColor()

  if (shirtColor === "white" || shirtColor === "yellow") {
    projectClone.querySelector("[design-img]").src = project.imageDark.toString()
  } else {
    projectClone.querySelector("[design-img]").src = project.imageLight.toString()
  }
  projectClone.querySelector("[shirt-img]").style.backgroundImage = "url(" + shirts[0].colors[shirtColor].toString() + ")"
  projectClone.querySelector("[project-title]").innerHTML = project.name
  // projectClone.querySelector("[project-description]").innerHTML = project.description
  return projectClone
}

filterProjects("all")
