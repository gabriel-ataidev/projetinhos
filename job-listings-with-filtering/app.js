const data = [
  {
    id: 1,
    company: "Photosnap",
    logo: "./images/photosnap.svg",
    new: true,
    featured: true,
    position: "Senior Frontend Developer",
    role: "Frontend",
    level: "Senior",
    postedAt: "1d ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["HTML", "CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 2,
    company: "Manage",
    logo: "./images/manage.svg",
    new: true,
    featured: true,
    position: "Fullstack Developer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1d ago",
    contract: "Part Time",
    location: "Remote",
    languages: ["Python"],
    tools: ["React"],
  },
  {
    id: 3,
    company: "Account",
    logo: "./images/account.svg",
    new: true,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2d ago",
    contract: "Part Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
  {
    id: 4,
    company: "MyHome",
    logo: "./images/myhome.svg",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "5d ago",
    contract: "Contract",
    location: "USA Only",
    languages: ["CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 5,
    company: "Loop Studios",
    logo: "./images/loop-studios.svg",
    new: false,
    featured: false,
    position: "Software Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["Ruby", "Sass"],
  },
  {
    id: 6,
    company: "FaceIt",
    logo: "./images/faceit.svg",
    new: false,
    featured: false,
    position: "Junior Backend Developer",
    role: "Backend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "UK Only",
    languages: ["Ruby"],
    tools: ["RoR"],
  },
  {
    id: 7,
    company: "Shortly",
    logo: "./images/shortly.svg",
    new: false,
    featured: false,
    position: "Junior Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["HTML", "JavaScript"],
    tools: ["Sass"],
  },
  {
    id: 8,
    company: "Insure",
    logo: "./images/insure.svg",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["Vue", "Sass"],
  },
  {
    id: 9,
    company: "Eyecam Co.",
    logo: "./images/eyecam-co.svg",
    new: false,
    featured: false,
    position: "Full Stack Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "3w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript", "Python"],
    tools: ["Django"],
  },
  {
    id: 10,
    company: "The Air Filter Company",
    logo: "./images/the-air-filter-company.svg",
    new: false,
    featured: false,
    position: "Front-end Dev",
    role: "Frontend",
    level: "Junior",
    postedAt: "1mo ago",
    contract: "Part Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
];
//selectors
const cards = document.querySelector(".cards");
const filters = document.querySelector(".filters");
const filterCard = document.querySelectorAll(".filter-card");
const frontendFilter = document.querySelector(".frontend-filter");
const backendFilter = document.querySelector(".backend-filter");
const fullstackFilter = document.querySelector(".fullstack-filter");
const htmlFilter = document.querySelector(".html-filter");
const cssFilter = document.querySelector(".css-filter");
const javascriptFilter = document.querySelector(".javascript-filter");
const pythonFilter = document.querySelector(".python-filter");
const reactFilter = document.querySelector(".react-filter");
const rorFilter = document.querySelector(".ror-filter");
const sassFilter = document.querySelector(".sass-filter");
const vueFilter = document.querySelector(".vue-filter");
const rubyFilter = document.querySelector(".ruby-filter");
const juniorFilter = document.querySelector(".junior-filter");
const midweightFilter = document.querySelector(".midweight-filter");
const seniorFilter = document.querySelector(".senior-filter");
const djangoFilter = document.querySelector(".django-filter");

//creating job container
for (let i = 0; i < data.length; i++) {
  //creating card div
  var cardDiv = document.createElement("div");
  cardDiv.classList.add("card");
  cards.appendChild(cardDiv);
  //creating image div
  let imageDiv = document.createElement("div");
  imageDiv.classList.add("image");
  cardDiv.appendChild(imageDiv);
  let img = document.createElement("IMG");
  img.setAttribute("src", data[i].logo);
  imageDiv.appendChild(img);
  //creating text div
  let textDiv = document.createElement("div");
  textDiv.classList.add("text");
  cardDiv.appendChild(textDiv);
  //line1
  let line1Div = document.createElement("div");
  line1Div.classList.add("line1");
  textDiv.appendChild(line1Div);
  let companySpan = document.createElement("span");
  companySpan.innerText = data[i].company;
  line1Div.appendChild(companySpan);
  if (data[i].new == true) {
    let colorCardDiv = document.createElement("span");
    colorCardDiv.classList.add("color-card");
    line1Div.appendChild(colorCardDiv);
    colorCardDiv.innerText = "NEW!";
    colorCardDiv.classList.add("new");
    line1Div.appendChild(colorCardDiv);
  }
  if (data[i].featured == true) {
    let colorCardDiv = document.createElement("span");
    colorCardDiv.classList.add("color-card");
    line1Div.appendChild(colorCardDiv);
    colorCardDiv.innerText = "FEATURED";
    colorCardDiv.classList.add("featured");
    line1Div.appendChild(colorCardDiv);
    cardDiv.classList.add("card-featured");
  }
  //line2
  let line2Div = document.createElement("div");
  line2Div.classList.add("line2");
  textDiv.appendChild(line2Div);
  let h1 = document.createElement("h1");
  h1.innerText = data[i].position;
  line2Div.appendChild(h1);
  //line3
  let line3Div = document.createElement("div");
  line3Div.classList.add("line3");
  textDiv.appendChild(line3Div);
  let span1 = document.createElement("span");
  span1.innerText = data[i].postedAt;
  line3Div.appendChild(span1);
  let span2 = document.createElement("span");
  span2.innerText = data[i].contract;
  line3Div.appendChild(span2);
  let span3 = document.createElement("span");
  span3.innerText = data[i].location;
  line3Div.appendChild(span3);
  //technologies
  let toolsDiv = document.createElement("div");
  toolsDiv.classList.add("technologies");
  cardDiv.appendChild(toolsDiv);
  //each technology
  let role = document.createElement("span");
  role.innerText = data[i].role;
  role.classList.add(data[i].role.toLowerCase());
  cardDiv.classList.add(`${data[i].role.toLowerCase()}-card`);
  role.setAttribute("onclick", `${data[i].role.toLowerCase()}Button()`);
  toolsDiv.appendChild(role);
  let level = document.createElement("span");
  level.innerText = data[i].level;
  level.classList.add(data[i].level.toLowerCase());
  cardDiv.classList.add(`${data[i].level.toLowerCase()}-card`);
  level.setAttribute("onclick", `${data[i].level.toLowerCase()}Button()`);
  toolsDiv.appendChild(level);
  for (let j = 0; j < data[i].tools.length; j++) {
    let tool = document.createElement("span");
    tool.innerText = data[i].tools[j];
    tool.classList.add(data[i].tools[j].toLowerCase());
    cardDiv.classList.add(`${data[i].tools[j].toLowerCase()}-card`);
    tool.setAttribute("onclick", `${data[i].tools[j].toLowerCase()}Button()`);
    toolsDiv.appendChild(tool);
  }
  for (let k = 0; k < data[i].languages.length; k++) {
    let language = document.createElement("span");
    language.innerText = data[i].languages[k];
    language.classList.add(data[i].languages[k].toLowerCase());
    cardDiv.classList.add(`${data[i].languages[k].toLowerCase()}-card`);
    language.setAttribute(
      "onclick",
      `${data[i].languages[k].toLowerCase()}Button()`
    );
    toolsDiv.appendChild(language);
  }
}

