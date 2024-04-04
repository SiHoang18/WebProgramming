function isDisplay(element){
    const rect = element.getBoundingClientRect();
    return (
        rect.left >= 0 &&
        rect.top >= 0 &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) &&
        (rect.bottom - 120) <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

function display(){
    const element = document.querySelectorAll('.hidden');
    for(let i = 0;i < element.length; ++i){
        if(isDisplay(element[i])){
            element[i].classList.add("fade_in");
        }
        else element[i].classList.remove("fade_in");
    }
}
window.addEventListener('scroll',display);