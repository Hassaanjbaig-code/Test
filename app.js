const projectdata = [
    {
        id: "portfolio4", 
        title: "Tonic",
        frames: ["CANOPY","Back End Dev", 2015],
        Image: "./Btn-icon/Snapshoot Portfolio-d.png",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        language: ["HTML","CSS","JavaScript"],
    },
    {
        id: "portfolio1", 
        title: "Multi-Post Stories",
        frames: ["FACEBOOK","Full Stack Dev", 2015],
        Image: "./Btn-icon/Snapshoot Portfolio-d-1.png",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        language: ["HTML","Ruby on Rails","CSS","JavaScript"],
    },
    {
        id: "portfolio2", 
        title: "FACEBOOK 360",
        frames: ["FACBOOK","Full Stack Dev", 2015],
        Image: "./Btn-icon/Snapshoot Portfolio-d-2.png",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        language: ["HTML","Ruby on Rail","CSS","JavaScript"],
    },
    {
        id: "portfolio3", 
        title: "Uber Navigation",
        frames: ["UBER","Lead Developer", 2018],
        Image: "./Btn-icon/Snapshoot Portfolio-d-3.png",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        language: ["HTML","Ruby on Rail","CSS","JavaScript"],
    },
]



function fetchOneProject(id) {
    const projects = projectdata;
    let project = {};
    for (let i of projectdata) {
        if (i.id === id) {
            project = i;
        };
    }
    if (project) {
        const heading = document.querySelector("#popup");
//  This is html part
const pophead = document.createElement("div");
pophead.classList.add("heading-pop");

const popupheading = document.createElement('h2');

const popclose = document.createElement("img");
popclose.classList.add("material-symbols-outlined");
popclose.src = "./Btn-icon/Disabled.png";
popclose.alt = "Close";
pophead.append(
    popupheading,
    popclose,
)
const popframe = document.createElement("ul");
popframe.classList.add("popup-experience-d");
const popimage = document.createElement("img");
popimage.alt = "Project image";
popimage.classList.add("popup-image")
let poppara = document.createElement("p");
poppara.classList.add("popup-para");
let poplang = document.createElement("ul")
poplang.classList.add("popup-language");
const btnmain = document.createElement("div")
btnmain.classList.add("mobile-button")
const poplive = document.createElement("button");
poplive.innerText = "See Live";
poplive.classList.add("mobile-btn")
const popsource = document.createElement("button");
popsource.innerText = "See Source";
popsource.classList.add("mobile-btn")
btnmain.append(
    poplive,
    popsource
);

// project.language.forEach(langua => {
//     const languali = document.createElement("li");
//     languali.innerText = langua;
//     poplang.appendChild(languali);
// })
const wraptext = document.createElement("div")
wraptext.classList.add("main-lnag");
wraptext.append(
    poplang,
    btnmain
)
const popmaindes = document.createElement("div");
popmaindes.classList.add("main-des");
popmaindes.append(
    poppara,
    wraptext
)

const mainbranch1 = document.createElement("div");
        mainbranch1.classList.add("main-branch-1");

popupheading.innerText = project.title;
        popimage.src = project.Image;
        poppara.innerText = project.description;
        project.frames.forEach(frame => {
            const frameli = document.createElement("li");
            frameli.innerText = frame ;
            popframe.appendChild(frameli);
        });
        
        
        mainbranch1.append(
            pophead,
            popframe,
            popimage,
            popmaindes
        )

        const mainhead = document.createElement("div");
        mainhead.classList.add("mainhead");
        mainhead.append(
            mainbranch1
        )

heading.append(
   mainhead
);
popclose.addEventListener("click", () => {
    mainhead.style.visibility = "hidden"
})

 };
};

// console.log(fetchOneProject("Portfolio"))

const connect = document.querySelectorAll(".connect");

connect.forEach(conn => {
    conn.addEventListener("click", (e)=>{
        fetchOneProject(e.target.id);
    })
})
