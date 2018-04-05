function money() {
    let res = document.getElementById('res');

    let grn = document.getElementById("grivnas");
    let money = document.getElementById("grn");
    let topMoney = document.getElementById('money');

    topMoney.innerHTML = grn.value;
    money.innerHTML = grn.value;

    grn.oninput = function() {
        topMoney.innerHTML = grn.value;
        money.innerHTML = grn.value;
        res.innerHTML = Math.round(grn.value * 1 + day.value * 1 + grn.value * 0.01 + day.value * 0.005);
    }
    /*___________________input time ________________*/

    let day = document.getElementById("day");
    let time = document.getElementById("time");
    let topTime = document.getElementById('days');
    topTime.innerHTML = day.value;
    time.innerHTML = day.value;

    day.oninput = function() {
        topTime.innerHTML = day.value
        time.innerHTML = this.value;
        res.innerHTML = Math.round(grn.value * 1 + day.value * 1 + grn.value * 0.01 + day.value * 0.005);
    }

    res.innerHTML = Math.round(grn.value * 1 + day.value * 1 + grn.value * 0.019 + day.value * 0.005);
}
money();

/*______________________________________________*/

function myFunction(x) {
    let heightSection = 0;
    let heightQuestions = 0;
    let list = document.getElementsByClassName("questList");
    let faq = document.getElementsByClassName("faq");
    let hidden = document.getElementsByClassName("hidden");

    if (hidden[x].style.display === 'flex') {
        hidden[x].style.display = 'none';
        heightSection = (faq[0].clientHeight - 50) + "px";
        faq[0].style.height = heightSection;
        heightQuestions = (list[x].clientHeight - 40) + "px";
        list[x].style.height = heightQuestions;
    } else {
        hidden[x].style.display = 'flex';
        heightSection = (faq[0].clientHeight + 50) + "px";
        faq[0].style.height = heightSection;
        heightQuestions = (list[x].clientHeight + 40) + "px";
        list[x].style.height = heightQuestions;
    }
}
/*______________________________________________________________*/
window.onscroll = function() {
    let head = document.getElementById("head");
    if(window.innerWidth > 1042) {
        if (document.body.scrollTop > 130 || document.documentElement.scrollTop > 130) {
            head.style.position = "fixed";
            head.style.height = '80px';
        } else {
            head.style.position = "absolute";
            head.style.height = '130px';
        }
    }   
}
