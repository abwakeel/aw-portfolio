const submit=document.getElementById("submit");
const form=document.querySelector("form");
const toggle=document.getElementById("nav-toggle");
const navLink=document.getElementById("nav-links");

toggle.onclick=()=>{
    navLink.classList.toggle('active');
        
    
};
form.addEventListener('submit', (event)=>{

    if(form.checkValidity()){
        // Prevent the default form submission
        event.preventDefault();
        form.reset();
        submit.innerHTML = "Message Sent"
        submit.classList.add("add");
        setTimeout(() => {
            submit.classList.remove("add");
            submit.innerHTML = '<i class="fa-brands fa-telegram icon"></i> Send Message';
            
        }, 1200);
       
    }else {
        // If the form is not valid, alert the user
        alert('Please fill out all fields.');
    }
});


const observer=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
        }
            // }else{
        //     entry.target.classList.remove('visible')
        // }
    });
});

const element=document.querySelectorAll('.slide');
element.forEach(element=>{
    observer.observe(element)
});





const menubars = document.getElementById('menu-bars');
const menuxmark = document.getElementById('menu-xmark');
const navLinks = document.getElementById('nav-links');

menubars.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menubars.style.display = 'none';
    menuxmark.style.display = 'block';
});

menuxmark.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menubars.style.display = 'block';
    menuxmark.style.display = 'none';
});

