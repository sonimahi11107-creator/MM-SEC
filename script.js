function showCareer() {

    let interest = document.getElementById("interest").value;

    if (interest === "") {
        alert("Please select an interest!");
        return;
    }

    // Direct redirect (dynamic)
    window.location.href = interest + ".html";
}
function loadGovernmentCareers() {

    let container = document.getElementById("careerContainer");

    let careers = [
        {
            name: "UPSC",
            image: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png",
            page: "upsc.html"
        },
        {
            name: "SSC",
            image: "https://cdn-icons-png.flaticon.com/512/3063/3063821.png",
            page: "ssc.html"
        },
        {
            name: "State PSC",
            image: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
            page: "psc.html"
        },
        {
            name: "Railways",
            image: "https://cdn-icons-png.flaticon.com/512/2972/2972185.png",
            page: "rrb.html"
        },
        {
            name: "Banking",
            image: "https://cdn-icons-png.flaticon.com/512/2331/2331970.png",
            page: "banking.html"
        }
    ];

    careers.forEach(career => {

        let card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${career.image}" alt="${career.name}">
            <h3>${career.name}</h3>
        `;

        // click → open page
        card.onclick = function () {
            window.location.href = career.page;
        };

        container.appendChild(card);
    });
}


//optimal way to load careers is to have a single function that takes the interest as a parameter and loads the relevant careers. This way we can avoid hardcoding the careers for each interest and make the code more scalable.

const careerData = {
    government : [
        {name: "UPSC", image: "https://cdn-icons-png.flaticon.com/128/8677/8677110.png", page: "upsc.html"},
        {name: "SSC", image: "https://cdn-icons-png.flaticon.com/128/6001/6001124.png", page: "ssc.html"},
        {name: "State PSC", image: "https://cdn-icons-png.flaticon.com/128/5141/5141099.png", page: "psc.html"},
        {name: "Railways", image: "https://cdn-icons-png.flaticon.com/128/7029/7029671.png", page: "rrb.html"},
        {name: "Banking", image: "https://cdn-icons-png.flaticon.com/128/2830/2830289.png", page: "banking.html"}
    ],
    technology : [
        {name: "Software Engineer", image: "https://cdn-icons-png.flaticon.com/128/8874/8874539.png", page: "tech\\software.html"},
        {name: "Data Scientist", image: "https://cdn-icons-png.flaticon.com/128/2316/2316128.png", page: "tech\\dataSci.html"}, 
        {name: "Cybersecurity Analyst", image: "https://cdn-icons-png.flaticon.com/128/2084/2084028.png", page: "tech\\cyberSecurity.html"},
        {name: "AI Researcher", image: "https://cdn-icons-png.flaticon.com/128/11103/11103366.png", page: "tech\\aiResearcher.html"},
        {name: "Cloud Engineer", image: "https://cdn-icons-png.flaticon.com/128/6584/6584875.png", page: "tech\\cloudEngineer.html"}
    ],
    medical : [
        {name: "Doctor", image: "https://cdn-icons-png.flaticon.com/128/2785/2785482.png", page: "medical\\doctor.html"},    
        {name: "Nurse", image: "https://cdn-icons-png.flaticon.com/128/3209/3209070.png", page: "medical\\nurse.html"},
        {name: "Pharmacist", image: "https://cdn-icons-png.flaticon.com/128/6260/6260388.png", page: "medical\\pharmacist.html"},
        {name: "Medical Researcher", image: "https://cdn-icons-png.flaticon.com/128/6401/6401547.png", page: "medical\\researcher.html"},
        {name: "Public Health Official", image: "https://cdn-icons-png.flaticon.com/128/6310/6310274.png", page: "medical\\publichealth.html"}
    ],

    teaching : [
        {name: "School Teacher", image: "https://cdn-icons-png.flaticon.com/128/5369/5369664.png", page: "teaching\\schlTeacher.html"},    
        {name: "College Professor", image: "https://cdn-icons-png.flaticon.com/512/190/190411.png", page: "teaching\\clgProf.html"},    
        {name: "Online Tutor", image: "https://cdn-icons-png.flaticon.com/512/2972/2972185.png", page: "teaching\\onlineTutor.html"},
        {name: "Educational Consultant", image: "https://cdn-icons-png.flaticon.com/512/2331/2331970.png", page: "teaching\\eduConsultant.html"},
        {name: "Curriculum Developer", image: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png", page: "teaching\\curriculumDev.html"}   
    ],

    banking : [
        {name: "Investment Banker", image: "https://cdn-icons-png.flaticon.com/512/3063/3063821.png", page: "banking\\investmentB.html"},    
        {name: "Financial Analyst", image: "https://cdn-icons-png.flaticon.com/512/190/190411.png", page: "banking\\financialAnalyst.html"},
        {name: "Bank Manager", image: "https://cdn-icons-png.flaticon.com/512/2972/2972185.png", page: "banking\\manager.html"},
        {name: "Loan Officer", image: "https://cdn-icons-png.flaticon.com/512/2331/2331970.png", page: "banking\\loanOfficer.html"},
        {name: "Financial Advisor", image: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png", page: "banking\\financialAdvisor.html"}
    ],

    arts : [
        {name: "Graphic Designer", image: "https://cdn-icons-png.flaticon.com/256/12401/12401337.png", page: "arts\\graphic.html"},    
        {name: "Animator", image: "https://cdn-icons-png.flaticon.com/128/5261/5261267.png", page: "arts\\animator.html"},
        {name: "Photographer", image: "https://cdn-icons-png.flaticon.com/256/4683/4683591.png", page: "arts\\photographer.html"},
        {name: "Fashion Designer", image: "https://cdn-icons-png.flaticon.com/256/7356/7356894.png", page: "arts\\fashion.html"},
        {name: "Interior Designer", image: "https://cdn-icons-png.flaticon.com/128/2789/2789627.png", page: "arts\\interior.html"}
    ],
    
    defence : [
        {name: "Army Officer", image: "https://cdn-icons-png.flaticon.com/256/10823/10823976.png", page: "army.html"},    
        {name: "Navy Officer", image: "https://cdn-icons-png.flaticon.com/128/5098/5098602.png", page: "navy.html"},  
        {name: "Air Force Officer", image: "https://cdn-icons-png.flaticon.com/256/6456/6456176.png", page: "defence\\airforce.html"},
        {name: "Defense Scientist", image: "https://cdn-icons-png.flaticon.com/128/16962/16962005.png", page: "defence\\defenseScientist.html"},
        {name: "Intelligence Officer", image: "https://cdn-icons-png.flaticon.com/128/13385/13385887.png", page: "defence\\intelligence.html"}
    ],

    business : [
        {name: "Entrepreneur", image: "https://cdn-icons-png.flaticon.com/512/3063/3063821.png", page: "business\\entrepreneur.html"},    
        {name: "Marketing Manager", image: "https://cdn-icons-png.flaticon.com/512/190/190411.png", page: "business\\marketing.html"},
        {name: "Sales Manager", image: "https://cdn-icons-png.flaticon.com/512/2972/2972185.png", page: "business\\sales.html"},
        {name: "HR Manager", image: "https://cdn-icons-png.flaticon.com/512/2331/2331970.png", page: "business\\hr.html"},
        {name: "Management Consultant", image: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png", page: "business\\consultant.html"}        
    ],

    publicSafety : [
        {name: "Police Officer", image: "https://cdn-icons-png.flaticon.com/512/3063/3063821.png", page: "publicSafety\\police.html"},    
        {name: "Firefighter", image: "https://cdn-icons-png.flaticon.com/512/190/190411.png", page: "publicSafety\\fireFighter.html"},
        {name: "Paramedic", image: "https://cdn-icons-png.flaticon.com/512/2972/2972185.png", page: "publicSafety\\paramedic.html"},
        {name: "Security Guard", image: "https://cdn-icons-png.flaticon.com/512/2331/2331970.png", page: "publicSafety\\security.html"},
        {name: "Emergency Dispatcher", image: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png", page: "publicSafety\\dispatcher.html"}
    ],

    law : [
        {name: "Lawyer", image: "https://cdn-icons-png.flaticon.com/512/3063/3063821.png", page: "law\\lawyer.html"},    
        {name: "Judge", image: "https://cdn-icons-png.flaticon.com/512/190/190411.png", page: "law\\judge.html"},
        {name: "Legal Consultant", image: "https://cdn-icons-png.flaticon.com/512/2972/2972185.png", page: "law\\consultant.html"},
        {name: "Paralegal", image: "https://cdn-icons-png.flaticon.com/512/2331/2331970.png", page: "law\\paraLegal.html"},
        {name: "Corporate Counsel", image: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png", page: "law\\corporate.html"}
    ],
    transportation : [
        {name: "Pilot", image: "https://cdn-icons-png.flaticon.com/512/3063/3063821.png", page: "transport\\pilot.html"},    
        {name: "Air Traffic Controller", image: "https://cdn-icons-png.flaticon.com/512/190/190411.png", page: "transport\\atc.html"},
        {name: "Logistics Manager", image: "https://cdn-icons-png.flaticon.com/512/2972/2972185.png", page: "transport\\logistics.html"},  
        {name: "Supply Chain Analyst", image: "https://cdn-icons-png.flaticon.com/512/2331/2331970.png", page: "transport\\supplyChain.html"},
        {name: "Transportation Planner", image: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png", page: "transport\\planner.html"}
    ],

    creative : [
        {name: "Writer", image: "https://cdn-icons-png.flaticon.com/512/3063/3063821.png", page: "creative\\writer.html"},    
        {name: "Musician", image: "https://cdn-icons-png.flaticon.com/512/190/190411.png", page: "creative\\musician.html"},
        {name: "Actor", image: "https://cdn-icons-png.flaticon.com/512/2972/2972185.png", page: "creative\\actor.html"},
        {name: "Director", image: "https://cdn-icons-png.flaticon.com/512/2331/2331970.png", page: "creative\\director.html"},
        {name: "Artist", image: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png", page: "creative\\artist.html"}
    ],  
    
};

function loadCareersByCategory(category) {

    let container = document.getElementById("careerContainer");

    let careers = careerData[category];

    if (!careers) {
        container.innerHTML = "<p>No data found</p>";
        return;
    }

    container.innerHTML = ""; // clear previous

    careers.forEach(career => {

        let card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${career.image}">
            <h3>${career.name}</h3>
        `;

        // ✅ CLICK WORKING
        card.onclick = () => {
            window.location.href = career.page;
        };

        container.appendChild(card);
    });
}

//animator page tabs
// TAB SWITCH
function showTab(evt, id) {
    let tabs = document.querySelectorAll(".tab");
    let contents = document.querySelectorAll(".content");

    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    evt.currentTarget.classList.add("active");
    document.getElementById(id).classList.add("active");
}

// BUTTON
function startJourney() {
    alert("Start learning Blender & After Effects 🚀");
}

// SCROLL ANIMATION
window.addEventListener("scroll", () => {
    let reveals = document.querySelectorAll(".reveal");

    reveals.forEach(r => {
        let top = r.getBoundingClientRect().top;
        let trigger = window.innerHeight * 0.85;

        if (top < trigger) {
            r.classList.add("active");
        }
    });
});
