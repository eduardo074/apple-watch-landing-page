const html = {
    getElemente(element){
        return document.querySelector(element);
    },
}



document.querySelector(".menuMobile").addEventListener("click", function () {
    if(document.querySelector(".menu nav ul").style.display == 'flex'){
        document.querySelector(".menu nav ul").style.display = 'none';
        
    } else {
        document.querySelector(".menu nav ul").style.display = 'flex';
        // document.querySelector("header").style.backgroundColor = '#2f2f2f';
    }
});