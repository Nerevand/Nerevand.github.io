window.onscroll = function () {
    let scroll = window.pageYOffset || document.documentElement.scrollTop;
    let block = document.getElementById('block-stars');
    let exc = document.getElementById('excelent');
    let wind = document.getElementById('new-window');
    let stars = document.getElementById('stars');
    let rev = document.getElementById('reversed');
    let trust = document.getElementById('trust'); 
    if (scroll > 10) {
        exc.style.display = 'block';
        block.style.flexDirection = 'row'; 
        wind.style.display = 'flex';
        stars.style.width = '23vw'; 
        stars.style.marginTop = '1vw';
        rev.style.width = '15vw';   
        rev.style.flexDirection = 'row-reverse';  
        trust.style.margin = 0; 
        trust.style.marginLeft = '0.5vw'; 
    } else {
        exc.style.display = 'none';
        stars.style.width = '15vw';
        stars.style.justifyContent = 'center';
        stars.style.alignItems = 'center';
        block.style.flexDirection = 'column';
        rev.style.flexDirection = 'column';
        rev.style.width = '10vw'; 
        trust.style.margin = 0;
        trust.style.marginTop = '1vw'; 
    }
}