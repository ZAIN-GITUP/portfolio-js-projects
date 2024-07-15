/*===========================================scroll section active links==========================================*/
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
            });
            
            // Add the 'active' class to the corresponding navigation link
            let activeNavLink = document.querySelector('header nav a[href*='+ id +']');
            activeNavLink.classList.add('active');
            
            // Remove 'active' class from other navigation links
            navlinks.forEach(link => {
                if (link !== activeNavLink) {
                    link.classList.remove('active');
                }
            });
        };    
    });
};
