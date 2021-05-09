const projects = [
  {
    name: "Grace for the Race",
    id: "project1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "../images/mockups/shirt_designs/grace-race-WHITE.png",
    type: "shirt",
    focusFunct: () => {
      console.log("project clicked")
    },
  },
  {
    name: "C&C Window Tint",
    id: "project2",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "../images/mockups/shirt_designs/c&c-tint-WHITE.png",
    type: "shirt",
    focusFunct: () => {
      console.log("project clicked")
    },
  },
  {
    name: "Cut",
    id: "project3",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    image: "../images/mockups/shirt_designs/cut-WHITE.png",
    type: "shirt",
    focusFunct: () => {
      console.log("project clicked")
    },
  },
  {
    name: "Equality",
    id: "project4",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    image: "../images/mockups/shirt_designs/equal-WHITE.png",
    type: "shirt",
    focusFunct: () => {
      console.log("project clicked")
    },
  },
  {
    name: "Fast Freddies Greenscapes",
    id: "project5",
    description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    image: "../images/mockups/shirt_designs/fast-freddies-WHITE.png",
    type: "shirt",
    focusFunct: () => {
      console.log("project clicked")
    },
  },
  {
    name: "Jay Quick Tire Shop",
    id: "project6",
    description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    image: "../images/mockups/shirt_designs/jay-quick-WHITE.png",
    type: "shirt",
    focusFunct: () => {
      console.log("project clicked")
    },
  },
  {
    name: "Love Creatively",
    id: "project7",
    description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    image: "../images/mockups/shirt_designs/love-creatively-WHITE.png",
    type: "shirt",
    focusFunct: () => {
      console.log("project clicked")
    },
  },
  {
    name: "Sharing Love",
    id: "project8",
    description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    image: "../images/mockups/shirt_designs/love-god-WHITE.png",
    type: "shirt",
    focusFunct: () => {
      console.log("project clicked")
    },
  },
  {
    name: "All About the Ambiance",
    id: "project9",
    description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    image: "../images/mockups/shirt_designs/mz-c-bnb-WHITE.png",
    type: "shirt",
    focusFunct: () => {
      console.log("project clicked")
    },
  },
  {
    name: "Perotte's Enterprises",
    id: "project10",
    description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    image: "../images/mockups/shirt_designs/perottes-WHITE.png",
    type: "shirt",
    focusFunct: () => {
      console.log("project clicked")
    },
  },
  {
    name: "Ray's Lawn Service",
    id: "project11",
    description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    image: "../images/mockups/shirt_designs/ray-lawn-WHITE.png",
    type: "shirt",
    focusFunct: () => {
      console.log("project clicked")
    },
  },
  {
    name: "Stay With My Son",
    id: "project12",
    description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    image: "../images/mockups/shirt_designs/stay-with-son-WHITE.png",
    type: "shirt",
    focusFunct: () => {
      console.log("project clicked")
    },
  },
  {
    name: "Swarm Team Reunion Cruise",
    id: "project13",
    description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    image: "../images/mockups/shirt_designs/swarm-team-WHITE.png",
    type: "shirt",
    focusFunct: () => {
      console.log("project clicked")
    },
  },
  {
    name: "Turned 20 Twice",
    id: "project14",
    description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    image: "../images/mockups/shirt_designs/turned-20-WHITE.png",
    type: "shirt",
    focusFunct: () => {
      console.log("project clicked")
    },
  },
  {
    name: "God Says I Am",
    id: "project15",
    description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    image: "../images/products/all/sample_15.jpg",
    type: "shirt",
    focusFunct: () => {
      console.log("project clicked")
    },
  },
  {
    name: "WDI Landscaping",
    id: "project16",
    description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    image: "../images/mockups/shirt_designs/wdi-WHITE.png",
    type: "shirt",
    focusFunct: () => {
      console.log("project clicked")
    },
  },
  {
    name: "project 17",
    id: "project17",
    description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    image: "../images/products/all/sample_17.jpg",
    type: "shirt",
    focusFunct: () => {
      console.log("project clicked")
    },
  },
  {
    name: "When You Can't Do What You Want",
    id: "project18",
    description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    image: "../images/mockups/shirt_designs/when-you-cant-WHITE.png",
    type: "shirt",
    focusFunct: () => {
      console.log("project clicked")
    },
  },
]

export default projects
