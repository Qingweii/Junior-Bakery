// Loading page to Home page
const duration = setTimeout(showHome,2000);

function showHome(){
    document.getElementById('loading').style.display = 'none';
    document.getElementById('about_us_page').style.display = 'block';
 };

// Footer section (birthday submission)

function bday(event){
    alert('Your birthday is on its way, We\'ll be counting down to your special day ;)');
    event.preventDefault();
};
