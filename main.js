const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const darkModeToggle = document.querySelector(".dark-mode-toggle");

menuToggle.addEventListener('click',()=> {
    navMenu.classList.toggle('display-menu');
})

darkModeToggle.addEventListener('click',()=> {
    document.body.classList.toggle('dark-mode');
})

document.getElementById('downloadCVButton').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'assets/BENTUM YAW RICHMOND CV.pdf';
    link.download = 'CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
