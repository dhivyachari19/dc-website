window.onload = function() {
    setupNavigationBar();
};

window.onscroll = function() {
    const nav = document.querySelector('.navbar');
    if(this.scrollY <= 75) {
        nav.className = 'navbar fixed-top navbar-expand-lg navbar-dark bg-transparent';
    } else {
        nav.className = 'navbar fixed-top navbar-expand-lg navbar-dark bg-dark';
    }
};

function detectMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];
    
    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}

function setupNavigationBar() {
    const isMobile = detectMob();
    const mobileNav = document.querySelector('.pos-f-t');
    const desktopNav = document.querySelector('.navbar');

    if (isMobile) {
        desktopNav.style.display = 'none'; 
        mobileNav.style.display = 'block'; 
    } else {
        desktopNav.style.display = 'block';
        mobileNav.style.display = 'none'; 
    }
}