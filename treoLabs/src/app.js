const rootNode = document.getElementById('root');
const zero = 0;
let temporaryValue = '';

let send = [];
let koshuk = [];
let updatedArr = [];
updatedArr = cars;
let noSorted = [];
let hide = true;
let userName;
let magic = 0; //number user 
let counterDel = 0;
let sum = 0;
let id = 1;

function enter() {
    counterDel = 0;
    window.location.hash = 'login';
    rootNode.innerText = '';
    hide = true;
    let h1 = document.createElement('h1');
    h1.innerText = 'Hello! Welcome to simple test shop';
    let frm = document.createElement('form');
    let formGroup1 = document.createElement('div');
    formGroup1.className = 'form-group group';
    let lbl1 = document.createElement('label');
    lbl1.setAttribute('for', 'nickname');
    lbl1.innerText = 'Enter your nickname';
    let nickname = document.createElement('input');
    nickname.type = 'text';
    nickname.class = 'form-control';
    nickname.id = 'nicknameLog';
    nickname.setAttribute('aria-describedby', 'emailHelp');
    nickname.setAttribute('data-toggle', 'tooltip');
    nickname.placeholder = 'Enter nickname';
    nickname.title = 'you can use admin/admin';
    let formGroup2 = document.createElement('div');
    formGroup2.className = 'form-group group';
    let lbl2 = document.createElement('label');
    lbl2.setAttribute('for', 'password');
    lbl2.for = 'nickname';
    lbl2.innerText = 'Enter your password';
    let pass = document.createElement('input');
    pass.type = 'password';
    pass.class = 'form-control';
    pass.id = 'password';
    pass.placeholder = 'Enter password';
    let login = document.createElement('button');
    login.type = 'submit';
    login.className = 'btn btn-primary';
    login.innerText = 'login';
    login.addEventListener('click', function () {
        let user = document.getElementById('nicknameLog').value;
        let pass = document.getElementById('password').value;
        let access = false;
        userName = user;
        for (let i = 0; i < users.length; i++) {
            if (users[i].name === user && users[i].password === pass) {
                window.location.hash = 'main';
                access = true;
            }
        }
        if (access === false) {
            if ((user === '') && (pass === '')) {
                alert(`You didn't enter anything`);
            } else if (user === '') {
                alert('Nickname can`t be empty!');
            } else if (pass === '') {
                alert('Password can`t be empty!');
            } else {
                alert('Incorrect data! Try again or register')
            }
        }
        return userName;
    });
    let register = document.createElement('button');
    register.type = 'submit';
    register.className = 'btn btn-primary';
    register.innerText = 'register now';
    register.addEventListener('click', function () {
        rootNode.innerText = '';
        let h1 = document.createElement('h1');
        h1.innerText = 'Register your account for Task manager';
        let frm = document.createElement('form');
        let formGroup1 = document.createElement('div');
        formGroup1.className = 'form-group group';
        let lbl1 = document.createElement('label');
        lbl1.setAttribute('for', 'nickname');
        lbl1.innerText = 'Enter your nickname';
        let nickname = document.createElement('input');
        nickname.type = 'text';
        nickname.class = 'form-control';
        nickname.id = 'nickname';
        nickname.setAttribute('aria-describedby', 'emailHelp');
        nickname.placeholder = 'Enter nickname';
        let formGroup2 = document.createElement('div');
        formGroup2.className = 'form-group group';
        let lbl2 = document.createElement('label');
        lbl2.setAttribute('for', 'password');
        lbl2.innerText = 'Enter your password';
        let pass = document.createElement('input');
        pass.type = 'password';
        pass.class = 'form-control';
        pass.id = 'password';
        pass.placeholder = 'Enter password';
        let lbl3 = document.createElement('label');
        lbl3.setAttribute('for', 'repeat');
        lbl3.innerText = 'Repeat your password';
        let repeat = document.createElement('input');
        repeat.type = 'password';
        repeat.class = 'form-control';
        repeat.id = 'repeat';
        repeat.placeholder = 'Repeat your password';
        let create = document.createElement('button');
        create.type = 'submit';
        create.className = 'btn btn-primary';
        create.innerText = 'create';
        create.addEventListener('click', function () {
            let name = document.getElementById('nickname').value;
            let password = document.getElementById('password').value;
            let repeat = document.getElementById('repeat').value;
            userName = name;
            let done = true;
            for (let i = 0; i < users.length; i++) {
                if (userName === users[i].name) {
                    done = false;
                }
            }
            if (!done) {
                alert('user with this nickname has already exists in the system');
            } else if (password != repeat) {
                alert('wrong passwords');
            } else if (password === repeat && done) {
                users.push({
                    id: ++id,
                    name: name,
                    password: password
                });
                createAcc();
            }
        });

        let back = document.createElement('button');
        back.type = 'submit';
        back.className = 'btn btn-primary';
        back.innerText = 'back';
        back.addEventListener('click', function () {
            dontCreate();
        });

        rootNode.appendChild(h1);
        rootNode.appendChild(frm);
        frm.appendChild(formGroup1);
        formGroup1.appendChild(lbl1);
        formGroup1.appendChild(nickname);
        frm.appendChild(formGroup2);
        formGroup2.appendChild(lbl2);
        formGroup2.appendChild(pass);
        formGroup2.appendChild(lbl3);
        formGroup2.appendChild(repeat);
        frm.appendChild(create);
        frm.appendChild(back);
    });

    rootNode.appendChild(h1);
    rootNode.appendChild(frm);
    frm.appendChild(formGroup1);
    formGroup1.appendChild(lbl1);
    formGroup1.appendChild(nickname);
    frm.appendChild(formGroup2);
    formGroup2.appendChild(lbl2);
    formGroup2.appendChild(pass);
    frm.appendChild(login);
    frm.appendChild(register);
    return userName;
}

function dontCreate() {
    enter();
}

function createAcc() {
    let id = 0;
    for (let i = 0; i < send.length; i++) {
        if (userName === send[i].forUser) {
            for (let j = 0; j < users.length; j++) {
                if (userName === users[j].name) {
                    users[j].todoItems.push({
                        id: id,
                        description: send[i].task
                    });
                    users[j].allTask.push({
                        id: id,
                        description: send[i].task
                    });
                    id++;
                }
            }
        }
    }
    enter();
}
enter();

function main() {
    window.location.hash = '';
    rootNode.innerText = '';
    let acc = document.createElement('div');
    acc.className = 'acc';
    let korzina = document.createElement('div');
    korzina.className = 'basket';
    korzina.title = 'shopping cart';
    korzina.addEventListener('click', function () {
        window.location.hash = 'cart';
    })


    let h1 = document.createElement('h1');
    h1.innerText = userName;
    let exit = document.createElement('img');
    exit.src = './assets/img/exit.png'
    exit.className = 'exit';
    exit.title = 'logout';
    exit.addEventListener('click', function () {
        window.location.hash = 'login';
    })
    rootNode.appendChild(acc);
    acc.appendChild(korzina);
    acc.appendChild(h1);
    acc.appendChild(exit);

    let counter = document.createElement('div');
    counter.className = 'counter';
    counter.innerText = koshuk.length;
    korzina.appendChild(counter);


    /*FILTERS*/
    let filters = document.createElement('div');
    filters.className = 'filters';
    let first = document.createElement('div');
    let filterTitle = document.createElement('h2');
    filterTitle.className = 'filters-h';
    filterTitle.innerText = 'Filters';
    let fBlock = document.createElement('div');
    fBlock.className = 'filters-block';
    let sel = document.createElement('select');
    sel.id = 'filter';
    let opt1 = document.createElement('option');
    opt1.value = 'num';
    opt1.innerText = 'All';
    let opt2 = document.createElement('option');
    opt2.value = 'Audi';
    opt2.innerText = 'Audi';
    let opt3 = document.createElement('option');
    opt3.value = 'Mercedes';
    opt3.innerText = 'Mercedes';
    let opt4 = document.createElement('option');
    opt4.value = 'Tesla';
    opt4.innerText = 'Tesla';

    let second = document.createElement('div');
    let sorted = document.createElement('h2');
    sorted.className = 'sorted';
    sorted.innerText = 'Sort by';
    let fBlock2 = document.createElement('div');
    fBlock2.className = 'sort-block';
    let sel1 = document.createElement('select');
    sel1.id = 'sorted';
    let opt11 = document.createElement('option');
    opt11.value = 'def';
    opt11.innerText = 'Default';
    let opt21 = document.createElement('option');
    opt21.innerText = 'price';
    opt21.value = 'price';
    opt21.innerText = 'price';

    rootNode.appendChild(filters);
    filters.appendChild(first);
    first.appendChild(filterTitle);
    first.appendChild(fBlock);
    fBlock.appendChild(sel);
    sel.appendChild(opt1);
    sel.appendChild(opt2);
    sel.appendChild(opt3);
    sel.appendChild(opt4);

    filters.appendChild(second);
    second.appendChild(sorted);
    second.appendChild(fBlock2);
    second.appendChild(fBlock2);
    fBlock2.appendChild(sel1);
    sel1.appendChild(opt11);
    sel1.appendChild(opt21);


    let mainBlock = document.createElement('div');
    mainBlock.className = 'main';
    rootNode.appendChild(mainBlock);

    let pages = document.createElement('div');
    pages.className = 'page';
    pages.id = 'items';
    mainBlock.appendChild(pages);

    let pagin = document.createElement('div');
    pagin.className = 'paginator';
    mainBlock.appendChild(pagin);

    function pagination(arr) {
        for (let i = 0; i < arr.length; i++) {
            let th = document.createElement('div');
            th.className = `num ${arr[i].description}`;
            th.setAttribute('data-num', i + 1);
            pages.appendChild(th);

            let btns = document.createElement('div');
            btns.className = 'btns';
            th.appendChild(btns);
            let addToCard = document.createElement('div');
            addToCard.className = 'add-to-card knopka';
            addToCard.innerText = 'Add to card';
            addToCard.onclick = function () {
                koshuk.push(arr[i]);
                counter.innerText = koshuk.length;
                return koshuk;
            }
            let details = document.createElement('div');
            details.className = 'details knopka';
            details.innerText = 'Details';
            details.setAttribute('data-toggle', 'modal');
            details.setAttribute('data-target', '#exampleModalLong');
            details.onclick = function () {
                let last = document.getElementById('last');
                let block = document.createElement('div');
                block.className = 'block';
                let img = document.createElement('img');
                img.className = 'card-img-top';
                img.src = arr[i].image;
                img.alt = `car image cap`
                let text = document.createElement('div');
                text.className = 'placeForH card-body';
                let model = document.createElement('h5');
                model.className = 'card-text';
                model.innerText = arr[i].title;
                let price = document.createElement('h5');
                price.className = 'card-text';
                price.innerText = `${arr[i].price} €`;

                last.appendChild(block);
                block.appendChild(img);
                block.appendChild(text);
                text.appendChild(model);
                text.appendChild(price);
                modal(cars[i].title, cars[i].image, cars[i].price);
            }
            btns.appendChild(addToCard);
            btns.appendChild(details);

            let block = document.createElement('div');
            block.className = 'block card';
            let img = document.createElement('img');
            img.className = 'card-img-top';
            img.src = arr[i].image;
            img.alt = `car image cap`
            let text = document.createElement('div');
            text.className = 'placeForH card-body';
            let model = document.createElement('h5');
            model.className = 'card-text';
            model.innerText = arr[i].title;
            let price = document.createElement('h5');
            price.className = 'card-text';
            price.innerText = `${arr[i].price} €`;

            th.appendChild(block);
            block.appendChild(img);
            block.appendChild(text);
            text.appendChild(model);
            text.appendChild(price);

        }

        let count = arr.length;
        let cnt = 5;
        let cnt_page = Math.ceil(count / cnt);

        let paginator = document.querySelector(".paginator");
        let page = "";
        for (let i = 0; i < cnt_page; i++) {
            page += "<span data-page=" + i * cnt + "  id=\"page" + (i + 1) + "\">" + (i + 1) + "</span>";
        }
        paginator.innerHTML = page;


        let div_num = document.querySelectorAll(".num");
        for (let i = 0; i < div_num.length; i++) {
            if (i < cnt) {
                div_num[i].style.display = "flex";
            }
        }
        var main_page = document.getElementById("page1");
        main_page.classList.add("paginator_active");


        pagin.onclick = function (event) {
            let e = event || window.event;
            let target = e.target;
            let id = target.id;

            if (target.tagName.toLowerCase() != "span") return;

            let num_ = id.substr(4);
            let data_page = +target.dataset.page;
            main_page.classList.remove("paginator_active");
            main_page = document.getElementById(id);
            main_page.classList.add("paginator_active");

            let j = 0;
            for (let i = 0; i < div_num.length; i++) {
                let data_num = div_num[i].dataset.num;
                if (data_num <= data_page || data_num >= data_page)
                    div_num[i].style.display = "none";

            }
            for (let i = data_page; i < div_num.length; i++) {
                if (j >= cnt) break;
                div_num[i].style.display = "flex";
                j++;
            }
        }
    }
    pagination(updatedArr);

    let filter_select_el = document.getElementById('filter');

    filter_select_el.onchange = function () {
        updatedArr = [];
        for (let i = 0; i < cars.length; i++) {
            if (cars[i].description === this.value) {
                updatedArr.push(cars[i]);
            }
        }

        if (this.value === 'num') {
            updatedArr = cars;
        }
        pages.innerHTML = '';
        pagin.innerHTML = '';
        noSorted = updatedArr;
        pagination(updatedArr);
        return updatedArr;
    };

    let sort_select_el = document.getElementById('sorted');
    sort_select_el.onchange = function () {
        if (this.value === 'price') {
            updatedArr.sort(function (a, b) {
                return a.price - b.price;
            });
        }
        if (this.value === 'def') {
            updatedArr.sort(function (a, b) {
                return a.id - b.id;
            });
        }
        pages.innerHTML = '';
        pagin.innerHTML = '';
        pagination(updatedArr);
        return updatedArr;
    }

    let last = document.createElement('div');
    last.className = 'last-view';
    let lastTitle = document.createElement('h2');
    lastTitle.className = 'last-h';
    lastTitle.innerText = 'Last view';
    let lastSection = document.createElement('div');
    lastSection.id = 'last';

    rootNode.appendChild(last);
    last.appendChild(lastTitle);
    last.appendChild(lastSection);

    function modal(model, path, price) {
        let bodi = document.body;
        let fade = document.createElement('div');
        fade.className = 'modal fade';
        fade.id = 'exampleModalLong';
        fade.tabIndex = '-1';
        fade.setAttribute('role', 'dialog');
        fade.setAttribute('aria-labelledby', 'exampleModalLongTitle');
        fade.setAttribute('aria-hidden', true);
        fade.onclick = function () {
            fade.parentNode.removeChild(fade);
        };


        let dialog = document.createElement('div');
        dialog.className = 'modal-dialog';
        dialog.setAttribute('role', 'document');

        let content = document.createElement('div');
        content.className = 'modal-content';

        let modalHeader = document.createElement('div');
        modalHeader.className = 'modal-header';

        let h5 = document.createElement('h5');
        h5.className = '"modal-title';
        h5.id = 'exampleModalLongTitle';
        h5.innerHTML = model;

        let btnClose = document.createElement('button');
        btnClose.className = 'close';
        btnClose.type = 'button';
        btnClose.setAttribute('data-dismiss', 'modal');
        btnClose.setAttribute('aria-label', 'Close');

        let spn = document.createElement('span');
        spn.setAttribute('aria-hidden', true);
        spn.innerHTML = '&times';

        let modalBody = document.createElement('div');
        modalBody.className = 'modal-body';

        let img = document.createElement('img');
        img.className = 'car-model';
        img.src = path;

        let priced = document.createElement('h5');
        priced.innerText = `${price} €`;

        let modalFooter = document.createElement('div');
        modalFooter.className = 'modal-footer';

        let cls = document.createElement('button');
        cls.className = 'btn btn-secondary';
        cls.type = 'button';
        cls.setAttribute('data-dismiss', 'modal');
        cls.innerText = 'Close';

        bodi.appendChild(fade);
        fade.appendChild(dialog);
        dialog.appendChild(content);
        content.appendChild(modalHeader);
        modalHeader.appendChild(h5);
        modalHeader.appendChild(btnClose);
        btnClose.appendChild(spn);
        content.appendChild(modalBody);
        modalBody.appendChild(img);
        modalBody.appendChild(priced);
        content.appendChild(modalFooter);
        modalFooter.appendChild(cls);
    }

}

function cart() {
    window.location.hash = '';
    rootNode.innerText = '';
    let acc = document.createElement('div');
    acc.className = 'acc';
    let korzina = document.createElement('div');
    korzina.className = 'basket';
    korzina.title = 'shopping cart';


    let h1 = document.createElement('h1');
    h1.innerText = userName;
    let exit = document.createElement('img');
    exit.src = './assets/img/exit.png'
    exit.className = 'exit';
    exit.title = 'logout';
    exit.addEventListener('click', function () {
        window.location.hash = 'login';
    })
    rootNode.appendChild(acc);
    acc.appendChild(korzina);
    acc.appendChild(h1);
    acc.appendChild(exit);

    let counter = document.createElement('div');
    counter.className = 'counter';
    counter.id = 'counter';
    counter.innerText = koshuk.length;
    korzina.appendChild(counter);

    let back = document.createElement('h2');
    back.innerText = 'back';
    back.className = 'back';
    back.addEventListener('click', function () {
        window.location.hash = 'main';
    })
    rootNode.appendChild(back);
    let helper = document.createElement('div');
    helper.className = 'helper';
    rootNode.appendChild(helper);

    function build(arr) { 
        for (let i = 0; i < arr.length; i++) {
            let block = document.createElement('div');
            block.className = 'cart-block';
            helper.appendChild(block);
            let topTitle = document.createElement('div');
            topTitle.className = 'top-title';
            block.appendChild(topTitle);
            let name = document.createElement('div');
            name.className = 'name-cart';
            name.innerText = 'Item';
            topTitle.appendChild(name);
            let price = document.createElement('div');
            price.className = 'price-cart';
            price.innerText = 'Price';
            topTitle.appendChild(price);
            let del = document.createElement('div');
            del.className = 'del-cart';
            del.innerText = `Delete`;
            topTitle.appendChild(del);
            let botTitle = document.createElement('div');
            botTitle.className = 'bot-title';
            block.appendChild(botTitle);
            let special = document.createElement('div');
            special.className = 'spec';
            botTitle.appendChild(special);
            let img = document.createElement('img');
            img.src = arr[i].image;
            special.appendChild(img);
            let marka = document.createElement('h5');
            marka.innerText = arr[i].title;
            special.appendChild(marka);
            let realPrice = document.createElement('h5');
            realPrice.className = 'real-price';
            realPrice.innerText = `${arr[i].price} €`;
            botTitle.appendChild(realPrice);
            let realDel = document.createElement('h5');
            realDel.className = 'real-del';
            realDel.innerText = 'x';
            botTitle.appendChild(realDel);
        } 
    let closeForever = document.getElementsByClassName('real-del'); 
    for (let i = 0; i < closeForever.length; i++) { 
        closeForever[i].onclick = function () {
            koshuk.splice(i, 1);
            let newValue = document.getElementById('counter');
                newValue.innerHTML = '';
                newValue.innerText = koshuk.length;
            helper.innerHTML = ''; 
            build(koshuk);
        }
    }
    }
    build(koshuk);

}



window.addEventListener('hashchange', function () {
    if (window.location.hash === '#main') {
        rootNode.innerText = '';
        main();
    } else if (window.location.hash === '#login') {
        rootNode.innerText = '';
        enter();
    } else if (window.location.hash === '#cart') {
        rootNode.innerText = '';
        cart();
    }
});