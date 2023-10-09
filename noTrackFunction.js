document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('a[href="#"]');
    for(var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function(e) {
            e.preventDefault();
            alert('No tracking applied.');
        });
    }
});
