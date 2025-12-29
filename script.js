loginBtn= document.querySelector('.login-btn');
login= document.querySelector('.login');
signUpBtn = document.querySelector('.signUp');
mainContent = document.querySelector('.main-content');
heroSection = document.querySelector('.hero-section');
loginContainer = document.querySelector('.login-container');
aniEle= document.querySelector('.ani-ele');
logo= document.querySelector('.logo');
cancelBtn = document.querySelector('.cancel-btn');

loginBtn.addEventListener('click', function() {
    aniEle.style.visibility = 'none ';
    aniEle.style.animation = 'login-animation 1.1s  ease-in';
    loginBtn.style.display = 'none';
    signUpBtn.style.display = 'none';
    login.style.justifyContent = 'flex-end';
    mainContent.style.backgroundColor = '#292828ff'; 
    setTimeout(() => {
        aniEle.style.animation = 'none';
        cancelBtn.style.display = 'block';
        heroSection.style.display = 'none';
        loginContainer.style.display = 'block';
    },900);   
});

cancelBtn.addEventListener('click', function() {
    loginBtn.style.display = 'block';
    signUpBtn.style.display = 'block';
    cancelBtn.style.display = 'none';
    heroSection.style.display = 'block';
    loginContainer.style.display = 'none';
});

//searchbar hover effect
searchbar= document.querySelector('.searchBar');

searchbar.addEventListener('mouseover', function() {
    searchbar.style.border = '2px solid #000';
});

searchbar.addEventListener('mouseout', function() {
    searchbar.style.border = '2px solid transparent';
});

navM_a = document.querySelectorAll('.navM-a');

navM_a.forEach(ele => {
    ele.addEventListener('mouseover', function() {
    ele.style.borderBottom = '3px solid black';
    });
    ele.addEventListener('mouseout', function() {
    ele.style.borderBottom = '3px solid transparent';
    });
});

logoContainer = document.querySelector('.logo-container');

logoContainer.addEventListener('mouseover', function() {
    logoContainer.style.border = '2px solid black';
});

logoContainer.addEventListener('mouseout', function() {
    logoContainer.style.border = '2px solid transparent';
}); 

signUpBtn.addEventListener('mouseover', function() {
    signUpBtn.style.border = '2px solid black';
});

signUpBtn.addEventListener('mouseout', function() {
    signUpBtn.style.border = '2px solid transparent';
});

loginBtn.addEventListener('mouseover', function() {
    loginBtn.style.backgroundColor = 'rgb(0,0,0,0.75)';
});

loginBtn.addEventListener('mouseout', function() {
    loginBtn.style.backgroundColor = 'black';
});
exploreBtn = document.querySelector('.explore-btn');

exploreBtn.addEventListener('mouseover', function() {  
    exploreBtn.style.backgroundColor="black";
});

exploreBtn.addEventListener("mouseout",()=>{
    exploreBtn.style.backgroundColor="#343333";
})

cancelBtn.addEventListener('mouseover', function() {
    cancelBtn.style.border = '2px solid black';
});
cancelBtn.addEventListener('mouseout', function() {
    cancelBtn.style.border = '2px solid transparent';
});

loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const username = document.querySelector('.uname').value;
    const password = document.querySelector('.pass').value;

    if(username==="Parth" && password==="P1234") {
        window.location.href = "admin_side/Dashboard/admin-dash.html";
    }
    else {
        window.location.href = "products.html"; // Redirect to the login page
    }
});