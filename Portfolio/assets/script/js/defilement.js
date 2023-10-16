const ratio = .1;

const options = { //permet de definir notre observer
    root: null,
    rootMargin: '0px',
    threshold: ratio //a quel moment va etre detecter
}

const handleIntersect = function(entries, observer){
    entries.forEach(function(entry) {
        if(entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
        } 
    });
}
const observer = new IntersectionObserver(handleIntersect, options)
document.querySelectorAll('.reveal').forEach(function (r){
    observer.observe(r);
});

