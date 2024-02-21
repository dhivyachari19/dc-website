window.onscroll = function() {
    const nav = document.querySelector('.navbar');
    if(this.scrollY <= 75) {
        nav.className = 'navbar fixed-top navbar-expand-lg navbar-dark bg-transparent';
    } else {
        nav.className = 'navbar fixed-top navbar-expand-lg navbar-dark bg-dark';
    }
};