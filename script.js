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
        {name: "UPSC", image: "https://cdn-icons-png.flaticon.com/128/8677/8677110.png", page: "govern/upsc.html"},
        {name: "SSC", image: "https://cdn-icons-png.flaticon.com/128/6001/6001124.png", page: "govern/ssc.html"},
        {name: "State PSC", image: "https://cdn-icons-png.flaticon.com/128/5141/5141099.png", page: "govern/statePsc.html"},
        {name: "Railways", image: "https://cdn-icons-png.flaticon.com/128/7029/7029671.png", page: "govern/railway.html"},
        {name: "Banking", image: "https://cdn-icons-png.flaticon.com/128/2830/2830289.png", page: "govern/banking.html"}
    ],
    technology : [
        {name: "Software Engineer", image: "https://cdn-icons-png.flaticon.com/128/8874/8874539.png", page: "tech/software.html"},
        {name: "Data Scientist", image: "https://cdn-icons-png.flaticon.com/128/2316/2316128.png", page: "tech/dataSci.html"}, 
        {name: "Cybersecurity Analyst", image: "https://cdn-icons-png.flaticon.com/128/2084/2084028.png", page: "tech/cyberSecurity.html"},
        {name: "AI Researcher", image: "https://cdn-icons-png.flaticon.com/128/11103/11103366.png", page: "tech/aiResearcher.html"},
        {name: "Cloud Engineer", image: "https://cdn-icons-png.flaticon.com/128/6584/6584875.png", page: "tech/cloudEngineer.html"}
    ],
    medical : [
        {name: "Doctor", image: "https://cdn-icons-png.flaticon.com/128/2785/2785482.png", page: "medical/doctor.html"},    
        {name: "Nurse", image: "https://cdn-icons-png.flaticon.com/128/3209/3209070.png", page: "medical/nurse.html"},
        {name: "Pharmacist", image: "https://cdn-icons-png.flaticon.com/128/6260/6260388.png", page: "medical/pharma.html"},
        {name: "Medical Researcher", image: "https://cdn-icons-png.flaticon.com/128/6401/6401547.png", page: "medical/medicalResearcher.html"},
        {name: "Public Health Official", image: "https://cdn-icons-png.flaticon.com/128/6310/6310274.png", page: "medical/publichealth.html"}
    ],

    teaching : [
        {name: "School Teacher", image: "https://cdn-icons-png.flaticon.com/128/5369/5369664.png", page: "teaching/schlTeacher.html"},    
        {name: "College Professor", image: "https://cdn-icons-png.flaticon.com/128/8443/8443259.png", page: "teaching/clgProf.html"},    
        {name: "Online Tutor", image: "https://cdn-icons-png.flaticon.com/128/14670/14670402.png", page: "teaching/onlineTutor.html"},
        {name: "Educational Consultant", image: "https://cdn-icons-png.flaticon.com/128/13540/13540654.png", page: "teaching/eduConsultant.html"},
        {name: "Curriculum Developer", image: "https://cdn-icons-png.flaticon.com/128/14661/14661538.png", page: "teaching/curriculumDev.html"}   
    ],

    banking : [
        {name: "Investment Banker", image: "https://cdn-icons-png.flaticon.com/128/18035/18035617.png", page: "banking/investmentB.html"},    
        {name: "Financial Analyst", image: "https://cdn-icons-png.flaticon.com/128/4256/4256900.png", page: "banking/financialAnalyst.html"},
        {name: "Bank Manager", image: "https://cdn-icons-png.flaticon.com/128/13767/13767288.png", page: "banking/manager.html"},
        {name: "Loan Officer", image: "https://cdn-icons-png.flaticon.com/128/17463/17463865.png", page: "banking/loanOfficer.html"},
        {name: "Financial Advisor", image: "https://cdn-icons-png.flaticon.com/128/16648/16648537.png", page: "banking/financialAdvisor.html"}
    ],

    arts : [
        {name: "Graphic Designer", image: "https://cdn-icons-png.flaticon.com/256/12401/12401337.png", page: "arts/graphic.html"},    
        {name: "Animator", image: "https://cdn-icons-png.flaticon.com/128/5261/5261267.png", page: "arts/animator.html"},
        {name: "Photographer", image: "https://cdn-icons-png.flaticon.com/256/4683/4683591.png", page: "arts/photographer.html"},
        {name: "Fashion Designer", image: "https://cdn-icons-png.flaticon.com/256/7356/7356894.png", page: "arts/fashion.html"},
        {name: "Interior Designer", image: "https://cdn-icons-png.flaticon.com/128/2789/2789627.png", page: "arts/interior.html"}
    ],
    
    defence : [
        {name: "Army Officer", image: "https://cdn-icons-png.flaticon.com/256/10823/10823976.png", page: "army.html"},    
        {name: "Navy Officer", image: "https://cdn-icons-png.flaticon.com/128/5098/5098602.png", page: "navy.html"},  
        {name: "Air Force Officer", image: "https://cdn-icons-png.flaticon.com/256/6456/6456176.png", page: "defence/airforce.html"},
        {name: "Defense Scientist", image: "https://cdn-icons-png.flaticon.com/128/16962/16962005.png", page: "defence/defenseScientist.html"},
        {name: "Intelligence Officer", image: "https://cdn-icons-png.flaticon.com/128/13385/13385887.png", page: "defence/intelligence.html"}
    ],

    business : [
        {name: "Entrepreneur", image: "https://cdn-icons-png.flaticon.com/128/10266/10266266.png", page: "business/entrepreneur.html"},    
        {name: "Marketing Manager", image: "https://cdn-icons-png.flaticon.com/128/1998/1998087.png", page: "business/marketing.html"},
        {name: "Sales Manager", image: "https://cdn-icons-png.flaticon.com/128/10334/10334217.png", page: "business/sales.html"},
        {name: "HR Manager", image: "https://cdn-icons-png.flaticon.com/128/5502/5502051.png", page: "business/hr.html"},
        {name: "Management Consultant", image: "https://cdn-icons-png.flaticon.com/128/17536/17536990.png", page: "business/consultant.html"}        
    ],

    publicSafety : [
        {name: "Police Officer", image: "https://cdn-icons-png.flaticon.com/128/2333/2333235.png", page: "publicSafety/police.html"},    
        {name: "Firefighter", image: "https://cdn-icons-png.flaticon.com/128/12349/12349658.png", page: "publicSafety/fireFighter.html"},
        {name: "Paramedic", image: "https://cdn-icons-png.flaticon.com/128/9747/9747060.png", page: "publicSafety/paramedic.html"},
        {name: "Security Guard", image: "https://cdn-icons-png.flaticon.com/128/2472/2472632.png", page: "publicSafety/security.html"},
        {name: "Emergency Dispatcher", image: "https://cdn-icons-png.flaticon.com/128/2991/2991174.png", page: "publicSafety/dipatcher.html"}
    ],

    law : [
        {name: "Lawyer", image: "https://cdn-icons-png.flaticon.com/128/3611/3611429.png", page: "law/lawyer.html"},    
        {name: "Judge", image: "https://cdn-icons-png.flaticon.com/128/719/719344.png", page: "law/judge.html"},
        {name: "Legal Consultant", image: "https://cdn-icons-png.flaticon.com/128/18569/18569888.png", page: "law/consultant.html"},
        {name: "Paralegal", image: "https://cdn-icons-png.flaticon.com/128/4252/4252349.png", page: "law/paraLegal.html"},
        {name: "Corporate Counsel", image: "https://cdn-icons-png.flaticon.com/128/12269/12269010.png", page: "law/corporate.html"}
    ],
    transportation : [
        {name: "Pilot", image: "https://cdn-icons-png.flaticon.com/128/1995/1995474.png", page: "transport/pilot.html"},    
        {name: "Air Traffic Controller", image: "https://cdn-icons-png.flaticon.com/128/6008/6008834.png", page: "transport/atc.html"},
        {name: "Logistics Manager", image: "https://cdn-icons-png.flaticon.com/128/10951/10951881.png", page: "transport/logistics.html"},  
        {name: "Supply Chain Analyst", image: "https://cdn-icons-png.flaticon.com/128/11000/11000372.png", page: "transport/supplyChain.html"},
        {name: "Transportation Planner", image: "https://cdn-icons-png.flaticon.com/128/2973/2973200.png", page: "transport/planner.html"}
    ],

    creative : [
        {name: "Writer", image: "https://cdn-icons-png.flaticon.com/128/210/210614.png", page: "creative/writer.html"},    
        {name: "Musician", image: "https://cdn-icons-png.flaticon.com/128/12331/12331160.png", page: "creative/musician.html"},
        {name: "Actor", image: "https://cdn-icons-png.flaticon.com/128/1154/1154989.png", page: "creative/actor.html"},
        {name: "Director", image: "https://cdn-icons-png.flaticon.com/128/6347/6347912.png", page: "creative/director.html"},
        {name: "Artist", image: "https://cdn-icons-png.flaticon.com/128/5601/5601008.png", page: "creative/artist.html"}
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


//firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAGpEZqnzm4LtGift1G_D0DOe07plm09kw",
  authDomain: "makemycareer-905c2.firebaseapp.com",
  projectId: "makemycareer-905c2",
  storageBucket: "makemycareer-905c2.firebasestorage.app",
  messagingSenderId: "715087716734",
  appId: "1:715087716734:web:c4bf71f19bef193899932f",
  measurementId: "G-VH1PHN8TCV"
};

// Initialize Firebase (compat style)
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();


// REGISTER
document.getElementById('registerForm')?.addEventListener('submit', async function (e) {
  e.preventDefault();

  console.log("FORM SUBMIT TRIGGERED"); // 🔥 DEBUG

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const userCredential = await auth.createUserWithEmailAndPassword(email, password);

    await db.collection("users").doc(userCredential.user.uid).set({
      name: document.getElementById('fullName').value
    });

    alert("✅ Account Created!");

    window.location.href = "login.html";

  } catch (error) {
    console.error(error);
    alert(error.message);
  }
});
// LOGIN
document.getElementById('loginForm')?.addEventListener('submit', async function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    await auth.signInWithEmailAndPassword(email, password);
    alert("✅ Login Successful!");
    window.location.href = "index.html";
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
});