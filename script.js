// Loading page to Home page
const duration = setTimeout(showHome,3000);

function showHome(){
    document.getElementById('loading').style.display = 'none';
    document.getElementById('home_page').style.display = 'block';
 }
