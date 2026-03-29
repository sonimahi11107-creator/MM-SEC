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
        {
            name: "UPSC", image: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png", page: "upsc.html"},
        {name: "SSC", image: "https://cdn-icons-png.flaticon.com/512/3063/3063821.png", page: "ssc.html"},
        {name: "State PSC", image: "https://cdn-icons-png.flaticon.com/512/190/190411.png", page: "psc.html"},
        {name: "Railways", image: "https://cdn-icons-png.flaticon.com/512/2972/2972185.png", page: "rrb.html"},
        {name: "Banking", image: "https://cdn-icons-png.flaticon.com/512/2331/2331970.png", page: "banking.html"}
    ],
    technology : [
        {name: "Software Engineer", image: "https://cdn-icons-png.flaticon.com/512/3063/3063821.png", page: "software.html"},
        {name: "Data Scientist", image: "https://cdn-icons-png.flaticon.com/512/190/190411.png", page: "datascience.html"}, 
        {name: "Cybersecurity Analyst", image: "https://cdn-icons-png.flaticon.com/512/2972/2972185.png", page: "cybersecurity.html"},
        {name: "AI Researcher", image: "https://cdn-icons-png.flaticon.com/512/2331/2331970.png", page: "ai.html"},
        {name: "Cloud Engineer", image: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png", page: "cloud.html"}
    ],
    medical : [
        {name: "Doctor", image: "https://cdn-icons-png.flaticon.com/512/3063/3063821.png", page: "doctor.html"},    
        {name: "Nurse", image: "https://cdn-icons-png.flaticon.com/512/190/190411.png", page: "nurse.html"},
        {name: "Pharmacist", image: "https://cdn-icons-png.flaticon.com/512/2972/2972185.png", page: "pharmacist.html"},
        {name: "Medical Researcher", image: "https://cdn-icons-png.flaticon.com/512/2331/2331970.png", page: "researcher.html"},
        {name: "Public Health Official", image: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png", page: "publichealth.html"}
    ],

    teaching : [
        {name: "School Teacher", image: "https://cdn-icons-png.flaticon.com/512/3063/3063821.png", page: "schoolteacher.html"},    
        {name: "College Professor", image: "https://cdn-icons-png.flaticon.com/512/190/190411.png", page: "professor.html"},    
        {name: "Online Tutor", image: "https://cdn-icons-png.flaticon.com/512/2972/2972185.png", page: "tutor.html"},
        {name: "Educational Consultant", image: "https://cdn-icons-png.flaticon.com/512/2331/2331970.png", page: "consultant.html"},
        {name: "Curriculum Developer", image: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png", page: "curriculum.html"}   
    ],

    banking : [
        {name: "Investment Banker", image: "https://cdn-icons-png.flaticon.com/512/3063/3063821.png", page: "investment.html"},    
        {name: "Financial Analyst", image: "https://cdn-icons-png.flaticon.com/512/190/190411.png", page: "analyst.html"},
        {name: "Bank Manager", image: "https://cdn-icons-png.flaticon.com/512/2972/2972185.png", page: "manager.html"},
        {name: "Loan Officer", image: "https://cdn-icons-png.flaticon.com/512/2331/2331970.png", page: "loan.html"},
        {name: "Financial Advisor", image: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png", page: "advisor.html"}
    ],

    arts : [
        {name: "Graphic Designer", image: "https://cdn-icons-png.flaticon.com/512/3063/3063821.png", page: "graphic.html"},    
        {name: "Animator", image: "https://cdn-icons-png.flaticon.com/512/190/190411.png", page: "animator.html"},
        {name: "Photographer", image: "https://cdn-icons-png.flaticon.com/512/2972/2972185.png", page: "photographer.html"},
        {name: "Fashion Designer", image: "https://cdn-icons-png.flaticon.com/512/2331/2331970.png", page: "fashion.html"},
        {name: "Interior Designer", image: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png", page: "interior.html"}
    ],
    
    defence : [
        {name: "Army Officer", image: "https://cdn-icons-png.flaticon.com/512/3063/3063821.png", page: "army.html"},    
        {name: "Navy Officer", image: "https://cdn-icons-png.flaticon.com/512/190/190411.png", page: "navy.html"},  
        {name: "Air Force Officer", image: "https://cdn-icons-png.flaticon.com/512/2972/2972185.png", page: "airforce.html"},
        {name: "Defense Scientist", image: "https://cdn-icons-png.flaticon.com/512/2331/2331970.png", page: "defensescientist.html"},
        {name: "Intelligence Officer", image: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png", page: "intelligence.html"}
    ],

    business : [
        {name: "Entrepreneur", image: "https://cdn-icons-png.flaticon.com/512/3063/3063821.png", page: "entrepreneur.html"},    
        {name: "Marketing Manager", image: "https://cdn-icons-png.flaticon.com/512/190/190411.png", page: "marketing.html"},
    ],
    publicSafety : [
        {name: "Police Officer", image: "https://cdn-icons-png.flaticon.com/512/3063/3063821.png", page: "police.html"},    
        {name: "Firefighter", image: "https://cdn-icons-png.flaticon.com/512/190/190411.png", page: "firefighter.html"},
        {name: "Paramedic", image: "https://cdn-icons-png.flaticon.com/512/2972/2972185.png", page: "paramedic.html"},
        {name: "Security Guard", image: "https://cdn-icons-png.flaticon.com/512/2331/2331970.png", page: "security.html"},
        {name: "Emergency Dispatcher", image: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png", page: "dispatcher.html"}
    ],

    law : [
        {name: "Lawyer", image: "https://cdn-icons-png.flaticon.com/512/3063/3063821.png", page: "lawyer.html"},    
        {name: "Judge", image: "https://cdn-icons-png.flaticon.com/512/190/190411.png", page: "judge.html"},
        {name: "Legal Consultant", image: "https://cdn-icons-png.flaticon.com/512/2972/2972185.png", page: "consultant.html"},
        {name: "Paralegal", image: "https://cdn-icons-png.flaticon.com/512/2331/2331970.png", page: "paralegal.html"},
        {name: "Corporate Counsel", image: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png", page: "corporate.html"}
    ],
    transportation : [
        {name: "Pilot", image: "https://cdn-icons-png.flaticon.com/512/3063/3063821.png", page: "pilot.html"},    
        {name: "Air Traffic Controller", image: "https://cdn-icons-png.flaticon.com/512/190/190411.png", page: "atc.html"},
        {name: "Logistics Manager", image: "https://cdn-icons-png.flaticon.com/512/2972/2972185.png", page: "logistics.html"},  
        {name: "Supply Chain Analyst", image: "https://cdn-icons-png.flaticon.com/512/2331/2331970.png", page: "supplychain.html"},
        {name: "Transportation Planner", image: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png", page: "planner.html"}
    ],

    creative : [
        {name: "Writer", image: "https://cdn-icons-png.flaticon.com/512/3063/3063821.png", page: "writer.html"},    
        {name: "Musician", image: "https://cdn-icons-png.flaticon.com/512/190/190411.png", page: "musician.html"},
        {name: "Actor", image: "https://cdn-icons-png.flaticon.com/512/2972/2972185.png", page: "actor.html"},
        {name: "Director", image: "https://cdn-icons-png.flaticon.com/512/2331/2331970.png", page: "director.html"},
        {name: "Artist", image: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png", page: "artist.html"}
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