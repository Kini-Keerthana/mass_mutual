// ==============================
// GLOBAL VARIABLES
// ==============================

let currentLang = "en";
let currentStream = "";
let currentAnswers = [];
let analytics = {
    totalUsers: 0,
    totalScore: 0
};

// ==============================
// 9 LANGUAGE TRANSLATIONS
// ==============================

const translations = {

en:{
siteTitle:"Uplifting Rural Voices",
homeTitle:"AI-Powered Personalized Learning Platform",
login:"Login",
register:"Register",
registerTitle:"Create Account",
loginTitle:"Login",
qualificationTitle:"Select Qualification",
streamTitle:"Select Learning Area",
assessmentTitle:"Assessment",
submit:"Submit",
startTest:"Start Assessment",
next:"Next",
logout:"Logout",
dashboard:"Dashboard",
resultTitle:"Your Personalized Recommendation",
successRegister:"Registration Successful!",
invalidLogin:"Invalid Email or Password",
fillFields:"Please fill all fields",
level:"Level",
duration:"Recommended Duration: 4 Weeks",
focus:"Focus Area"
},

hi:{
siteTitle:"ग्रामीण आवाज़ सशक्तिकरण",
homeTitle:"एआई आधारित व्यक्तिगत शिक्षा मंच",
login:"लॉगिन",
register:"पंजीकरण",
registerTitle:"खाता बनाएं",
loginTitle:"लॉगिन",
qualificationTitle:"योग्यता चुनें",
streamTitle:"अध्ययन क्षेत्र चुनें",
assessmentTitle:"मूल्यांकन",
submit:"जमा करें",
startTest:"परीक्षा शुरू करें",
next:"आगे",
logout:"लॉगआउट",
dashboard:"डैशबोर्ड",
resultTitle:"आपकी व्यक्तिगत सिफारिश",
successRegister:"पंजीकरण सफल!",
invalidLogin:"गलत ईमेल या पासवर्ड",
fillFields:"सभी जानकारी भरें",
level:"स्तर",
duration:"अवधि: 4 सप्ताह",
focus:"मुख्य क्षेत्र"
},

te:{
siteTitle:"గ్రామీణ స్వరాల శక్తివంతం",
homeTitle:"AI ఆధారిత వ్యక్తిగత అభ్యాస వేదిక",
login:"లాగిన్",
register:"నమోదు",
registerTitle:"ఖాతా సృష్టించండి",
loginTitle:"లాగిన్",
qualificationTitle:"అర్హత ఎంచుకోండి",
streamTitle:"అభ్యాస విభాగం ఎంచుకోండి",
assessmentTitle:"పరీక్ష",
submit:"సమర్పించు",
startTest:"పరీక్ష ప్రారంభించు",
next:"తర్వాత",
logout:"లాగౌట్",
dashboard:"డ్యాష్‌బోర్డ్",
resultTitle:"మీ వ్యక్తిగత సిఫారసు",
successRegister:"విజయవంతంగా నమోదు!",
invalidLogin:"తప్పు ఇమెయిల్ లేదా పాస్‌వర్డ్",
fillFields:"అన్ని వివరాలు నింపండి",
level:"స్థాయి",
duration:"కాలం: 4 వారాలు",
focus:"ప్రధాన విభాగం"
},

ta:{
siteTitle:"கிராம குரல்களை உயர்த்துதல்",
homeTitle:"AI அடிப்படையிலான தனிப்பயன் கல்வி",
login:"உள்நுழை",
register:"பதிவு",
registerTitle:"கணக்கு உருவாக்கவும்",
loginTitle:"உள்நுழை",
qualificationTitle:"தகுதி தேர்வு",
streamTitle:"கற்றல் பகுதி தேர்வு",
assessmentTitle:"மதிப்பீடு",
submit:"சமர்ப்பிக்கவும்",
startTest:"தேர்வு தொடங்கு",
next:"அடுத்து",
logout:"வெளியேறு",
dashboard:"டாஷ்போர்டு",
resultTitle:"உங்கள் பரிந்துரை",
successRegister:"வெற்றிகரமாக பதிவு செய்யப்பட்டது!",
invalidLogin:"தவறான மின்னஞ்சல் அல்லது கடவுச்சொல்",
fillFields:"அனைத்து விவரங்களையும் நிரப்பவும்",
level:"நிலை",
duration:"காலம்: 4 வாரங்கள்",
focus:"முக்கிய பகுதி"
},

kn:{
siteTitle:"ಗ್ರಾಮೀಣ ಧ್ವನಿಗಳನ್ನು ಉತ್ತೇಜಿಸುವುದು",
homeTitle:"AI ಆಧಾರಿತ ವೈಯಕ್ತಿಕ ಕಲಿಕೆ",
login:"ಲಾಗಿನ್",
register:"ನೋಂದಣಿ",
registerTitle:"ಖಾತೆ ರಚಿಸಿ",
loginTitle:"ಲಾಗಿನ್",
qualificationTitle:"ಅರ್ಹತೆ ಆಯ್ಕೆಮಾಡಿ",
streamTitle:"ಅಧ್ಯಯನ ಕ್ಷೇತ್ರ ಆಯ್ಕೆ",
assessmentTitle:"ಮೌಲ್ಯಮಾಪನ",
submit:"ಸಲ್ಲಿಸಿ",
startTest:"ಪರೀಕ್ಷೆ ಪ್ರಾರಂಭಿಸಿ",
next:"ಮುಂದೆ",
logout:"ಲಾಗೌಟ್",
dashboard:"ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
resultTitle:"ನಿಮ್ಮ ಶಿಫಾರಸು",
successRegister:"ಯಶಸ್ವಿಯಾಗಿ ನೋಂದಾಯಿಸಲಾಗಿದೆ!",
invalidLogin:"ತಪ್ಪಾದ ಇಮೇಲ್ ಅಥವಾ ಪಾಸ್‌ವರ್ಡ್",
fillFields:"ಎಲ್ಲಾ ವಿವರಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ",
level:"ಮಟ್ಟ",
duration:"ಅವಧಿ: 4 ವಾರಗಳು",
focus:"ಮುಖ್ಯ ವಿಭಾಗ"
},

mr:{
siteTitle:"ग्रामीण आवाजांना बळ देणे",
homeTitle:"AI आधारित वैयक्तिक शिक्षण",
login:"लॉगिन",
register:"नोंदणी",
registerTitle:"खाते तयार करा",
loginTitle:"लॉगिन",
qualificationTitle:"पात्रता निवडा",
streamTitle:"अभ्यास क्षेत्र निवडा",
assessmentTitle:"चाचणी",
submit:"सबमिट",
startTest:"चाचणी सुरू करा",
next:"पुढे",
logout:"लॉगआउट",
dashboard:"डॅशबोर्ड",
resultTitle:"तुमची शिफारस",
successRegister:"नोंदणी यशस्वी!",
invalidLogin:"चुकीचा ईमेल किंवा पासवर्ड",
fillFields:"सर्व माहिती भरा",
level:"स्तर",
duration:"कालावधी: 4 आठवडे",
focus:"मुख्य क्षेत्र"
},

bn:{
siteTitle:"গ্রামীণ কণ্ঠস্বর উন্নয়ন",
homeTitle:"AI ভিত্তিক ব্যক্তিগত শিক্ষা",
login:"লগইন",
register:"নিবন্ধন",
registerTitle:"অ্যাকাউন্ট তৈরি করুন",
loginTitle:"লগইন",
qualificationTitle:"যোগ্যতা নির্বাচন",
streamTitle:"শিক্ষার ক্ষেত্র নির্বাচন",
assessmentTitle:"মূল্যায়ন",
submit:"জমা দিন",
startTest:"পরীক্ষা শুরু করুন",
next:"পরবর্তী",
logout:"লগআউট",
dashboard:"ড্যাশবোর্ড",
resultTitle:"আপনার সুপারিশ",
successRegister:"সফল নিবন্ধন!",
invalidLogin:"ভুল ইমেইল বা পাসওয়ার্ড",
fillFields:"সব তথ্য পূরণ করুন",
level:"স্তর",
duration:"সময়কাল: ৪ সপ্তাহ",
focus:"মূল ক্ষেত্র"
},

gu:{
siteTitle:"ગ્રામીણ અવાજોને સશક્ત બનાવવું",
homeTitle:"AI આધારિત વ્યક્તિગત શિક્ષણ",
login:"લોગિન",
register:"નોંધણી",
registerTitle:"એકાઉન્ટ બનાવો",
loginTitle:"લોગિન",
qualificationTitle:"લાયકાત પસંદ કરો",
streamTitle:"અભ્યાસ ક્ષેત્ર પસંદ કરો",
assessmentTitle:"મૂલ્યાંકન",
submit:"સબમિટ",
startTest:"પરીક્ષા શરૂ કરો",
next:"આગળ",
logout:"લોગઆઉટ",
dashboard:"ડેશબોર્ડ",
resultTitle:"તમારી ભલામણ",
successRegister:"સફળ નોંધણી!",
invalidLogin:"ખોટો ઇમેઇલ અથવા પાસવર્ડ",
fillFields:"બધી માહિતી ભરો",
level:"સ્તર",
duration:"સમયગાળો: 4 અઠવાડિયા",
focus:"મુખ્ય ક્ષેત્ર"
},

ml:{
siteTitle:"ഗ്രാമ ശബ്ദങ്ങളെ ശക്തിപ്പെടുത്തുക",
homeTitle:"AI അടിസ്ഥാനത്തിലുള്ള വ്യക്തിഗത പഠനം",
login:"ലോഗിൻ",
register:"രജിസ്റ്റർ",
registerTitle:"അക്കൗണ്ട് സൃഷ്ടിക്കുക",
loginTitle:"ലോഗിൻ",
qualificationTitle:"യോഗ്യത തിരഞ്ഞെടുക്കുക",
streamTitle:"പഠന മേഖല തിരഞ്ഞെടുക്കുക",
assessmentTitle:"മൂല്യനിർണ്ണയം",
submit:"സമർപ്പിക്കുക",
startTest:"പരീക്ഷ ആരംഭിക്കുക",
next:"അടുത്തത്",
logout:"ലോഗൗട്ട്",
dashboard:"ഡാഷ്ബോർഡ്",
resultTitle:"നിങ്ങളുടെ ശുപാർശ",
successRegister:"വിജയകരമായ രജിസ്ട്രേഷൻ!",
invalidLogin:"തെറ്റായ ഇമെയിൽ അല്ലെങ്കിൽ പാസ്‌വേഡ്",
fillFields:"എല്ലാ വിവരങ്ങളും പൂരിപ്പിക്കുക",
level:"നില",
duration:"കാലാവധി: 4 ആഴ്ച",
focus:"പ്രധാന മേഖല"
}

};

// ==============================
// LANGUAGE SWITCH FUNCTION
// ==============================

function changeLanguage(){
    currentLang = document.getElementById("languageSelect").value;
    const t = translations[currentLang];

    siteTitle.innerText = t.siteTitle;
    homeTitle.innerText = t.homeTitle;
    loginBtn.innerText = t.login;
    registerBtn.innerText = t.register;
    registerTitle.innerText = t.registerTitle;
    loginTitle.innerText = t.loginTitle;
    qualificationTitle.innerText = t.qualificationTitle;
    streamTitle.innerText = t.streamTitle;
    assessmentTitle.innerText = t.assessmentTitle;
    submitBtn.innerText = t.submit;
    startTestBtn.innerText = t.startTest;
    nextBtn.innerText = t.next;
    logoutBtn.innerText = t.logout;
    logoutBtn2.innerText = t.logout;
    dashboardBtn.innerText = t.dashboard;
    resultTitle.innerText = t.resultTitle;
}

changeLanguage();

// ==============================
// NAVIGATION
// ==============================

function showPage(id){
    document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

// ==============================
// REGISTER
// ==============================

function registerUser(){
    let name = regName.value.trim();
    let email = regEmail.value.trim();
    let password = regPassword.value.trim();

    if(!name || !email || !password){
        alert(translations[currentLang].fillFields);
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if(users.find(u=>u.email === email)){
        alert("User already exists");
        return;
    }

    users.push({name,email,password});
    localStorage.setItem("users", JSON.stringify(users));

    alert(translations[currentLang].successRegister);
    showPage("loginPage");
}

// ==============================
// LOGIN
// ==============================

function loginUser(){
    let email = loginEmail.value.trim();
    let password = loginPassword.value.trim();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let valid = users.find(u=>u.email === email && u.password === password);

    if(valid){
        localStorage.setItem("loggedInUser", JSON.stringify(valid));
        analytics.totalUsers++;
        showPage("qualification");
    } else {
        alert(translations[currentLang].invalidLogin);
    }
}

// ==============================
// LOGOUT
// ==============================

function logoutUser(){
    localStorage.removeItem("loggedInUser");
    showPage("home");
}

// ==============================
// ASSESSMENT
// ==============================

const questions = {
social:["What is equality?","What is respect?","What is community?"],
financial:["What is savings?","What is bank?","What is interest?"],
technology:["What is internet?","What is computer?","What is mobile?"],
civic:["What is constitution?","What is voting?","What is government?"]
};

const answers = {
social:["equal rights","treat well","group"],
financial:["money saved","financial institution","extra money"],
technology:["global network","electronic machine","communication device"],
civic:["set of laws","choosing leader","ruling body"]
};

function loadTest(){
    currentStream = streamSelect.value;
    let qDiv = document.getElementById("questions");
    qDiv.innerHTML = "";

    questions[currentStream].forEach((q,i)=>{
        qDiv.innerHTML += `<p>${q}</p><input id="q${i}">`;
    });

    currentAnswers = answers[currentStream];
    showPage("testSection");
}

function submitTest(){
    let score = 0;

    for(let i=0;i<3;i++){
        let user = document.getElementById("q"+i).value.toLowerCase();
        if(user.includes(currentAnswers[i])) score++;
    }

    let level = score==3 ? "Advanced" : score==2 ? "Intermediate" : "Beginner";

    finalText.innerHTML = `
        <div class="recommendationCard">
        <p><b>${translations[currentLang].level}:</b> ${level}</p>
        <p>${translations[currentLang].duration}</p>
        <p><b>${translations[currentLang].focus}:</b> ${currentStream}</p>
        </div>
    `;

    showPage("result");
}

// ==============================
// DASHBOARD
// ==============================

function showDashboard(){
    let user = JSON.parse(localStorage.getItem("loggedInUser"));

    dashboardContent.innerHTML = `
    <p><b>Name:</b> ${user.name}</p>
    <p><b>Email:</b> ${user.email}</p>
    <p>Total Users: ${analytics.totalUsers}</p>
    `;

    showPage("dashboard");
}
