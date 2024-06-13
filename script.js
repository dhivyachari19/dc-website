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

