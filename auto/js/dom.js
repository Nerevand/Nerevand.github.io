let root = document.body;

function header(){
let header = document.createElement('header');          //header
    header.className = 'header';
let nav = document.createElement('nav');                //nav
    nav.className = 'navbar navbar-expand-md bg-dark navbar-dark';
let position = document.createElement('div');           //position
    position.className = 'nav-position';
let navLogo = document.createElement('img');            //nav-logo
    navLogo.src = 'img/nav-logo.png';  
let togle = document.createElement('button');
    togle.className = 'navbar-toggler';
    togle.type = 'button';
    togle.setAttribute('data-toggle', 'collapse');
    togle.setAttribute('data-target', '#myNavbar');
let spn = document.createElement('span');
    spn.className = 'navbar-toggler-icon';
let colapse = document.createElement('div');
    colapse.id = 'myNavbar';
    colapse.className = 'collapse navbar-collapse';
let navigation = document.createElement('ul');          //navigation-_-UL
    navigation.className = 'navbar-nav';
let listOne = document.createElement('li');             //li
    listOne.innerText = 'Головна';
    listOne.className = 'nav-item';
    listOne.onclick = function(){
        window.location.hash = 'main';
    }
let listTwo = document.createElement('li');
    listTwo.innerText = 'авто в наявності';
    listTwo.className = 'nav-item';
    listTwo.onclick = function(){
        window.location.hash = 'cars';
    }
let listThree = document.createElement('li');
    listThree.innerText = 'покупка';
    listThree.className = 'nav-item';
    listThree.onclick = function(){
        window.location.hash = 'buy';
    }
let listFour = document.createElement('li');
    listFour.innerText = 'контакти';
    listFour.className = 'nav-item';
    listFour.onclick = function(){
        window.location.hash = 'contacts';
    }

root.appendChild(header);
header.appendChild(nav);
nav.appendChild(position);
position.appendChild(navLogo);
position.appendChild(togle);
togle.appendChild(spn);
position.appendChild(colapse);
colapse.appendChild(navigation);
navigation.appendChild(listOne);
navigation.appendChild(listTwo);
navigation.appendChild(listThree);
navigation.appendChild(listFour);
}

function main(){
let area = document.createElement('section');
area.className = 'area';
let navPlaceForText = document.createElement('div');    //nav-center
    navPlaceForText.className = 'nav-center';
let h1 = document.createElement('h1');                  //h1
    h1.innerText = `«Автохаус Львів»`;
let navH3 = document.createElement('h3');               //h3
    navH3.innerText = 'Ми готові зробити Ваше життя простішим!';
let navParagraph = document.createElement('p');
    navParagraph.innerText = 'Відшукайте натхнення та подаруйте собі комфорт і незабутні відчуття під час керування автомобілем. «Автохаус Львів» - автосалон нового формату, де на першому місці виключно турбота про клієнтів та гарантія якості'
    root.appendChild(area);
    area.appendChild(navPlaceForText);
    navPlaceForText.appendChild(h1);
    navPlaceForText.appendChild(navH3);
    navPlaceForText.appendChild(navParagraph);
}

function ourCars(){
let sect = document.createElement('section');
    sect.className = 'our-car';
let center = document.createElement('div');
    center.className = 'cent';
let h1 = document.createElement('h1');
    h1.innerText = 'авто в наявності';

root.appendChild(sect);
sect.appendChild(center);
center.appendChild(h1);
}

function gotLast(){
let section = document.createElement('section');        //section
    section.className = 'got-last';
let secH2 = document.createElement('h2');               //h2
    secH2.innerText = 'останні надходження';
let line = document.createElement('div');               //line
    line.className = 'line';

    root.appendChild(section);
    section.appendChild(secH2);
    section.appendChild(line);
let placeForCars = document.createElement('div');       //place  
    placeForCars.className = 'place';
    section.appendChild(placeForCars);
let step = 0;
function show(n){
    placeForCars.innerText = '';
for(let i = n; i < n+4; i++){
    let block = document.createElement('div');
        block.className = 'block';
        block.style.transition = '3s';
    let img = document.createElement('img');
        img.src = cars[i].preview;
    let text = document.createElement('div');
        text.className = 'placeForH';
    let model = document.createElement('h4');
        model.innerText = cars[i].model;
    let price = document.createElement('h4');
        price.innerText = cars[i].price;
    placeForCars.appendChild(block);
    block.appendChild(img);
    block.appendChild(text);
    text.appendChild(model);
    text.appendChild(price);
}
}
show(0);
let btn = document.createElement('div');
    btn.className = 'show-more btn btn-light';
    btn.innerText = 'переглянути ще';
    btn.onclick = function(){        
        step += 4;
        if(step === 20){
            step = 0;
        }
        show(step)
    }
    section.appendChild(btn);
}

function listOfCars(){
let section = document.createElement('section');        
    section.className = 'list-cars container';
let text = document.createElement('div');
    text.className = 'arrow-list';
let parentList = document.createElement('h4');
    parentList.innerText = 'Головна →'
    parentList.className = 'parent';
let childList =  document.createElement('h4');
    childList.innerText = 'Авто в наявності';
    childList.className = 'child';
let placeForCars = document.createElement('div');       //place  
    placeForCars.className = 'all-list row';
    
root.appendChild(section);
section.appendChild(text);
text.appendChild(parentList);
text.appendChild(childList);
section.appendChild(placeForCars); 
let max = 12;
function circle(n=12){
    placeForCars.innerText = '';
    for(let i = 0; i < n; i++){
        let block = document.createElement('div');
            block.className = 'card col-sm-6 col-md-6 col-lg-4 col-xl-3';
            block.style.width = '18rem';
        let img = document.createElement('img');
            img.className = 'card-img-top';
            img.alt = cars[i].model;
            img.src = cars[i].preview; 
        let text = document.createElement('div');
            text.className = 'card-body';
        let model = document.createElement('h6');
            model.className = 'card-title';
            model.innerText = cars[i].model;
        let price = document.createElement('h6');
            price.className = 'card-text';
            price.innerText = cars[i].price;
        placeForCars.appendChild(block);
        block.appendChild(img);
        block.appendChild(text);
        text.appendChild(model);
        text.appendChild(price);
    }  
}
circle();
let btn = document.createElement('div');
    btn.className = 'btn-all-list btn btn-light';
    btn.innerText = 'переглянути ще';
    btn.onclick = function(){
        max += 4;
        circle(max);
    };
    section.appendChild(btn);
}

function aboutUs(){
let section = document.createElement('section');        //section
    section.className = 'about-us';
let secH2 = document.createElement('h2');               //h2
    secH2.innerText = 'Про нас';
let line = document.createElement('div');               //line
    line.className = 'line';
let text = document.createElement('div');
    text.className = 'aboutText';
let textUp = document.createElement('p');
    textUp.innerText = `«Автохаус Львів» пропонує широкий спектр послуг з приводу купівлі, оформлення та подальшого обслуговування вживаних автомобілів. Ексклюзивні моделі авто і чітко вказані рік та пробіг – це наша перевага задля Вашої довіри. Асортимент послуг компанії:`;
let list = document.createElement('ul');
let l1 = document.createElement('li');
l1.innerText = 'Продаж вживаних автомобілів відомих марок з Європи та північної Америки;'; 
let l2 = document.createElement('li');
l2.innerText = 'Викуп Ваших автомобілів;'; 
let l3 = document.createElement('li');
l3.innerText = 'Обмін на будь-яке авто нашого салону, що Вам до вподоби з умовою доплати з обох сторін;'; 
let l4 = document.createElement('li');
l4.innerText = 'Доступні кредитні пропозиції;'; 
let l5 = document.createElement('li');
l5.innerText = ' Автострахування;'; 
let l6 = document.createElement('li');
l6.innerText = 'Постановка і зняття автомобіля з обліку;'; 
let l7 = document.createElement('li');
l7.innerText = 'Допомога під час експлуатації придбаного автомобіля;'; 
let l8 = document.createElement('li');
l8.innerText = 'Встановлення додаткового обладнання;'; 
let l9 = document.createElement('li');
l9.innerText = 'Професійне підготування автомобіля до продажу.'; 
let textDown = document.createElement('p');
textDown.innerText = `Якщо придбаєте автомобіль у нашому салоні, Ви отримаєте прозору сервісну історію, підтверджений пробіг, безаварійний стан автомобіля, справедливу і привабливу ціну та абсолютну безпеку покупки.`;
let img = document.createElement('img');
    img.src = 'img/about.png';
    root.appendChild(section);
    section.appendChild(secH2);
    section.appendChild(line);
    section.appendChild(text);
    text.appendChild(textUp);
    text.appendChild(list);
    list.appendChild(l1);
    list.appendChild(l2);
    list.appendChild(l3);
    list.appendChild(l4);
    list.appendChild(l5);
    list.appendChild(l6);
    list.appendChild(l7);
    list.appendChild(l8);
    list.appendChild(l9);
    text.appendChild(textDown);
    section.appendChild(img);
}
function doing(){
let section = document.createElement('section');        //section
    section.className = 'doing';
let secH2 = document.createElement('h2');               //h2
    secH2.innerText = 'чим займається «автохаус» Україна?';
let line = document.createElement('div');               //line
    line.className = 'line';
let textOne = document.createElement('p');
    textOne.innerText = `Наша компанія з великим задоволенням робить життя людей комфортнішим, а купівлю автомобілів приємною та безпечною.`;
let textTwo = document.createElement('p');
    textTwo.innerText = `Ми пропонуємо клієнтам широкий вибір сучасних автомобілів, а всі наші рішення базуються на інтересах покупців.
    Ви досягнете успіху та динамічності, відчуєте покращення якості життя та залишитесь задоволені своїм вибором!`;
  
    root.appendChild(section);
    section.appendChild(secH2);
    section.appendChild(line);
    section.appendChild(textOne);
    section.appendChild(textTwo);
}
function contact(){
let section = document.createElement('div');
    section.className = 'contact';
let block = document.createElement('div');
    block.className = 'blockAbout';
    
let h2 = document.createElement('h2');
    h2.innerText = 'не гайте часу на самостійні пошуки';
let p = document.createElement('p');
    p.innerText = 'Залиште нам свої контакти і ми відразу розкажемо Вам все, що Вас цікавить';
let name = document.createElement('input');
    name.className = 'inpt';
    name.id = 'name';
    name.type = 'text';
    name.placeholder = `Ім'я`;
let phone = document.createElement('input');
    phone.className = 'inpt';
    phone.id = 'phone';
    phone.type = 'text';
    phone.placeholder = `Номер телефону або пошта`;
let comment = document.createElement('textarea');
    comment.className = 'comment';
    comment.id = 'comment';
    comment.type = 'text';
    comment.placeholder = 'Коментар';
let btn = document.createElement('div');
    btn.className = 'btn-send btn btn-light';
    btn.innerText = 'надіслати';
    btn.onclick = function(){
        let lengthOfName = document.getElementById('name').value.length;
        let lengthOfPhone = document.getElementById('phone').value.length;
        let lengthOfComment = document.getElementById('comment').value.length;

        if(lengthOfComment < 5 && lengthOfName < 3 && lengthOfName < 3){
            name.style.border = '2px solid red';
            phone.style.border = '2px solid red';
            comment.style.border = '2px solid red';
            alert(`Заповніть будь ласка всі форми перед відправкою!`)
        } else if(lengthOfPhone < 7 && lengthOfName < 3){
            name.style.border = '2px solid red';
            phone.style.border = '2px solid red';
            comment.style.border = 'none';
            alert(`Вкажіть будь ласка Ваше ім'я та телефон або пошту `);
        } else if(lengthOfComment < 5 && lengthOfName < 3){
            name.style.border = '2px solid red';
            phone.style.border = 'none';
            comment.style.border = '2px solid red';
            alert(`Вкажіть будь ласка Ваше ім'я та проблему з якою Вам допомогти`);
        } else if(lengthOfComment < 5 && lengthOfPhone < 7){
            name.style.border = 'none';
            phone.style.border = '2px solid red';
            comment.style.border = '2px solid red';
            alert(`Вкажіть будь ласка Ваш телефон або пошту та проблему з якою Вам допомогти`);
        }  else if(lengthOfName < 3){
            name.style.border = '2px solid red';
            phone.style.border = 'none';
            phone.style.border = 'none';
            alert(`Введіть Ваше ім'я`);  
        }  else if(lengthOfPhone < 7){
            name.style.border = 'none';
            phone.style.border = '2px solid red';
            phone.style.border = 'none';
            alert(`Вкажіть будь ласка Ваш телефон`);
        }  else if(lengthOfComment < 5){
            comment.style.border = '2px solid red';
            name.style.border = 'none';
            phone.style.border = 'none';
            alert(`Вкажіть будь ласка проблему з якою Вам допомогти`);
        }  else{
            comment.style.border = 'none';
            name.style.border = 'none';
            phone.style.border = 'none';
            window.location.hash = 'thanks';
        }
    }

    root.appendChild(section);
    section.appendChild(block);
    block.appendChild(h2);
    block.appendChild(p);
    block.appendChild(name);
    block.appendChild(phone);
    block.appendChild(comment);
    block.appendChild(btn);
}
function footer(){
let footer = document.createElement('footer');
    footer.className = 'footer';
let center = document.createElement('div');
    center.className = 'centerFooter';
let img = document.createElement('img');
    img.src = 'img/nav-logo.png';
let navi = document.createElement('div');
    navi.className = 'navi';
let h3 = document.createElement('h3');
    h3.innerText = 'навігація';
let ul1 = document.createElement('ul');
let li1 = document.createElement('li');
    li1.innerText = 'головна';
    li1.onclick = function(){
        window.location.hash = 'main';
    }
let li2 = document.createElement('li');
    li2.innerText = 'авто в наявності';
    li2.onclick = function(){
        window.location.hash = 'cars';
    }
let li3 = document.createElement('li');
    li3.innerText = 'покупка';
    li3.onclick = function(){
        window.location.hash = 'buy';
    }
let li4 = document.createElement('li');
    li4.innerText = 'контакти';
    li4.onclick = function(){
        window.location.hash = 'contacts';
    }

let cont = document.createElement('div');
    cont.className = 'cont';
let h4 = document.createElement('h3');
    h4.innerText = 'контакти';
let ul2 = document.createElement('ul');
let li5 = document.createElement('li');
    li5.innerText = '+38 (096) 090 77 00';
let li6 = document.createElement('li');
    li6.innerText = 'office@autohouse.lviv.ua';
let li7 = document.createElement('li');
    li7.innerText = 'facebook';
    li7.onclick = function(){
        window.location.hash = 'facebook';
    }
let li8 = document.createElement('li');
    li8.innerText = 'instagram';
    li8.onclick = function(){
        window.location.hash = 'po100gram';
    }
let author = document.createElement('h5');
    author.innerText = 'Ⓒ 2018 BlaBlaDay';
    author.className = 'author';
    root.appendChild(footer);
    footer.appendChild(center);
    center.appendChild(img);
    center.appendChild(navi);
    navi.appendChild(h3);
    navi.appendChild(ul1);
    ul1.appendChild(li1);
    ul1.appendChild(li2);
    ul1.appendChild(li3);
    ul1.appendChild(li4);
    center.appendChild(cont);
    cont.appendChild(h4);
    cont.appendChild(ul2);
    ul2.appendChild(li5);
    ul2.appendChild(li6);
    ul2.appendChild(li7);
    ul2.appendChild(li8);
    footer.appendChild(author);
}
function error(){
let section = document.createElement('section');
    section.className = 'silent';
let center = document.createElement('div');
    center.className = 'error';
let h1 = document.createElement('h1');
    h1.innerText = '404';
let h2 = document.createElement('h2');
    h2.innerText = 'not found';
let h3 = document.createElement('h4');
    h3.innerText = 'Сторінку по цьому адресу не знайдено.';
let h4 = document.createElement('h4');
    h4.innerText = 'Можливо вона була видалена або перенесена.';
let btn = document.createElement('div');
    btn.className = 'buton btn btn-light';
    btn.innerText = 'на головну';
    btn.onclick = function(){
        window.location.hash = 'main';
    } 
    root.appendChild(section);
    section.appendChild(center);
    center.appendChild(h1);
    center.appendChild(h2);
    center.appendChild(h3);
    center.appendChild(h4);
    center.appendChild(btn);
}
function thanks(){
    let section = document.createElement('section');
        section.className = 'thanks';
    let center = document.createElement('div');
        center.className = 'than';
    let h1 = document.createElement('h1');
        h1.innerText = 'дякуємо за заявку'; 
    let h3 = document.createElement('h4');
        h3.innerText = `Ваша заявка прийнята. Скоро наш менеджер з Вами зв'яжеться для вирішення всіх питань, які Вас цікавлять.` ; 
    let btn = document.createElement('div');
        btn.className = 'button btn btn-light';
        btn.innerText = 'на головну';
        btn.onclick = function(){
            window.location.hash = 'main';
        } 
        root.appendChild(section);
        section.appendChild(center);
        center.appendChild(h1); 
        center.appendChild(h3); 
        center.appendChild(btn);
}
function buyLogo(){
let sect = document.createElement('section');
    sect.className = 'buy-car';
let center = document.createElement('div');
    center.className = 'buy-center';
let h1 = document.createElement('h1');
    h1.innerText = 'покупка';
    
root.appendChild(sect);
sect.appendChild(center);
center.appendChild(h1);
}
function buyRulles(){
let section = document.createElement('section');        
    section.className = 'list-rulles';
let text = document.createElement('div');
    text.className = 'text-list';
let parentList = document.createElement('h4');
    parentList.innerText = 'Головна →'
    parentList.className = 'parent';
let childList =  document.createElement('h4');
    childList.innerText = 'Покупка';
    childList.className = 'child'; 
let more = document.createElement('div');
    more.className = 'more-info';
let h4 = document.createElement('p');
    h4.className = 'p1';
    h4.innerText = `Ви бажаєте придбати сучасний автомобіль, але новий Вам не по кишені?`;
let h5 = document.createElement('p');
    h5.className = 'p1';
    h5.innerText = `«Автохаус Львів» допоможе вирішити цю проблему. Ми радимо Вам звернути увагу на вживані автомобілі з пробігом, імпортного виробництва.`;
let consult = document.createElement('div');
    consult.className = 'consult';
let h2 = document.createElement('p');
    h2.className = 'p2';
    h2.innerText = 'консультація у спеціалістів компанії';
let line1 = document.createElement('div');
    line1.className = 'list1';
let consultH4 = document.createElement('p');
    consultH4.className = 'p3';
    consultH4.innerText = 'Якщо Ви бажаєте довідатись актуальні дані про автомобіль, точну характеристику та параметри, досвідчені консультанти компанії допоможуть вибрати авто згідно Ваших вимог.';
let consultH5 = document.createElement('p');
    consultH5.className = 'p3';
    consultH5.innerText = 'Зв’яжіться з професіоналами онлайн та отримайте відповіді на усі запитання. Ми будемо раді Вам допомогти!';
let procedure = document.createElement('div');
    procedure.className = 'procedure';
let procedureH2 = document.createElement('p');
    procedureH2.className = 'p2';
    procedureH2.innerText = 'процедура продажу автомобілів';
let line2 = document.createElement('div');
    line2.className = 'list2';
let procedureH4 = document.createElement('p');
    procedureH4.className = 'p4';
    procedureH4.innerText = 'На сайті «Автохаус Львів» є можливість детально ознайомитись із характеристиками транспортного засобу, що Вас зацікавив. Прогляньте фото автомобілів та комплектації до них, а також інформацію про рік випуску, пробіг та технічні особливості. Ви знайдете свіжі новини та відгуки наших клієнтів, що допоможе швидко зробити правильний вибір та придбати авто для себе.';
let procedureH5 = document.createElement('p');
    procedureH5.className = 'p4 p4New';
    procedureH5.innerText = 'Усі вживані автомобілі нашого салону юридично захищені відповідними документами. Кожне авто у чудовому технічному стані та з прозорою історією експлуатації';

root.appendChild(section);
section.appendChild(text);
text.appendChild(parentList);
text.appendChild(childList);
section.appendChild(more);
more.appendChild(h4);
more.appendChild(h5);
section.appendChild(consult);
consult.appendChild(h2);
consult.appendChild(line1);
consult.appendChild(consultH4);
consult.appendChild(consultH5);
section.appendChild(procedure);
procedure.appendChild(procedureH2);
procedure.appendChild(line2);
procedure.appendChild(procedureH4);
procedure.appendChild(procedureH5);
}

function buyText(){
let buy = document.createElement('section');
    buy.className = 'buy-logo';
let buyText = document.createElement('div');
    buyText.className = 'buy-text';
let buyH4 = document.createElement('p');
    buyH4.innerText = `Ми гарантуємо вигідну купівлю автомобіля у чудовому технічному стані та відмінного зовнішнього вигляду.Вигідна ціна, що відповідає стану авто та жодних проблем з оформленням документів. Наша ціль – стати Вашим впевненим вибором!`;
    root.appendChild(buy);
    buy.appendChild(buyText);
    buyText.appendChild(buyH4);
}

function insurance(){
let insurance = document.createElement('section');
    insurance.className = 'insurance';
let line = document.createElement('div');
    line.className = 'ruska';
let h2 = document.createElement('h2');
    h2.innerText = 'страхування та сервісне обслуговування';
let p1 = document.createElement('h4');
    p1.innerText = `Ми співпрацюємо із страховою компанією, що допоможе Вам оформити страхування на придбаний у «Автохаус Львів» автомобіль. При покупці автомобіля Ви гарантовано отримаєте знижку на страхування.`;
let p2 = document.createElement('h4');
    p2.innerText = `Вам не варто хвилюватись на жодному етапі купівлі, адже професіонали автосалону на високому рівні готові надати Вам широкий спектр наступних послуг: продаж вживаних автомобілів, підготовка авто перед продажем, оформлення необхідних реєстраційних документів.`;
let p3 = document.createElement('h4');
    p3.innerText = `«Автохаус Львів» відповідальний перед своїми покупцями, тому ми виконуємо роботу оперативно та ефективно. Якісний сервіс – це запорука надійного порозуміння з клієнтом.`;
let p4 = document.createElement('h4');
    p4.innerText = `З нами легко підібрати потрібний автомобіль. Вдалих Вам покупок!`;

    root.appendChild(insurance);
    insurance.appendChild(h2);
    insurance.appendChild(line);
    insurance.appendChild(p1);
    insurance.appendChild(p2);
    insurance.appendChild(p3);
    insurance.appendChild(p4);
}

function contactsLogo(){
    let sect = document.createElement('section');
        sect.className = 'contacts-logo';
    let center = document.createElement('div');
        center.className = 'contacts-center';
    let h1 = document.createElement('h1');
        h1.innerText = 'контакти';
        
    root.appendChild(sect);
    sect.appendChild(center);
    center.appendChild(h1);
}
function contactsMain(){
    let section = document.createElement('section');        
        section.className = 'contacts-main';
    let text = document.createElement('div');
        text.className = 'contacts-list';
    let parentList = document.createElement('h4');
        parentList.innerText = 'Головна →'
        parentList.className = 'first';
    let childList =  document.createElement('h4');
        childList.innerText = 'Контакти';
        childList.className = 'second'
        root.appendChild(section);
        section.appendChild(text);
        text.appendChild(parentList);
        text.appendChild(childList);
    
    let list = document.createElement('ul');
    let l1 = document.createElement('li');
    let l2 = document.createElement('li');
    let l3 = document.createElement('li');
    let l4 = document.createElement('li');
    section.appendChild(list);
    list.appendChild(l1);
    list.appendChild(l2);
    list.appendChild(l3);
    list.appendChild(l4);
    let phone = document.createElement('h3');
        phone.innerText = 'Телефон';
    let number = document.createElement('h4');
        number.innerText = '+38 (096) 090 77 00';
    l1.appendChild(phone);
    l1.appendChild(number);
    let addres = document.createElement('h3');
        addres.innerText = 'Адреса';
    let street = document.createElement('h4');
        street.innerText = `Львівська обл с.Сокільники вул.Скнилівська 23`;
        l2.appendChild(addres);
        l2.appendChild(street);
    let mail = document.createElement('h3');
        mail.innerText = 'Email'; 
    let email = document.createElement('h4');
        email.innerText = `office@house.lviv.ua`;
        l3.appendChild(mail); 
        l3.appendChild(email); 
    let social = document.createElement('h3');
        social.innerText = 'Соціальні мережі'; 
    let fb = document.createElement('h4');
        fb.innerText = `Facebook`;
        fb.onclick = function(){
            window.location.hash = 'facebook';
        }
    let insta = document.createElement('h4');
        insta.innerText = `Instagram`;
        insta.onclick = function(){
            window.location.hash = 'po100gram';
        }
        l4.appendChild(social); 
        l4.appendChild(fb); 
        l4.appendChild(insta); 
}
function map(){
    let map = document.createElement('iframe');
        map.className = 'map';
        map.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2166.218280431775!2d23.953410538867185!3d49.78451926726345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDQ3JzA0LjMiTiAyM8KwNTcnMTguNyJF!5e0!3m2!1suk!2sua!4v1538862206225';
        map.frameBorder = 0;
        map.style = 'border:0';
        map.zoo
        root.appendChild(map);
    }


    window.addEventListener('load', function() {
        if (window.location.hash === '#main' || window.location.hash === '') {
            root.innerText = '';  
            header();
            main();
            gotLast();
            aboutUs();
            doing();
            contact();
            footer();       
        } else if(window.location.hash === '#cars'){
            root.innerText = '';  
            header();
            ourCars();
            listOfCars();
            contact();
            footer(); 
        } else if(window.location.hash === '#thanks') {
            root.innerText = '';  
            header();
            thanks();
            footer(); 
        } else if(window.location.hash === '#buy') {
            root.innerText = '';  
            header();
             buyLogo();
             buyRulles();
            buyText();
            insurance();
            contact();
            footer();  
        } else if(window.location.hash === '#contacts'){
            root.innerText = '';  
            header(); 
            contactsLogo();
            contactsMain();
            map();
            contact();
            footer(); 
        } else {
            root.innerText = '';   
            header();
            error();
            footer(); 
        }
    });
window.addEventListener('hashchange', function() {
    if (window.location.hash === '#main') {
        root.innerText = '';  
        header();
        main();
        gotLast();
        aboutUs();
        doing();
        contact();
        footer();       
    } else if(window.location.hash === '#cars'){
        root.innerText = '';  
        header();
        ourCars();
        listOfCars();
        contact();
        footer(); 
    } else if(window.location.hash === '#thanks') {
        root.innerText = '';  
        header();
        thanks();
        footer(); 
    } else if(window.location.hash === '#buy') {
        root.innerText = '';  
        header();
         buyLogo();
         buyRulles();
        buyText();
        insurance();
        contact();
        footer();  
    } else if(window.location.hash === '#contacts'){
        root.innerText = '';  
        header(); 
        contactsLogo();
        contactsMain();
        map();
        contact();
        footer(); 
    } else {
        root.innerText = '';   
        header();
        error();
        footer(); 
    }
});