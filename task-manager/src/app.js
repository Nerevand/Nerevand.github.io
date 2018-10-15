const rootNode = document.getElementById('root');
const zero = 0;
let temporaryValue = '';
let users = [{
    name: 'admin',
    password: 'admin',
    todoItems: [],
    allTask: []
}];
let send = [];
let count = 0;
let hide = true;
let userName;
let magic = 0; //number user 
let counterDel = 0;

function enter() {
    counterDel = 0;
    window.location.hash = 'login';
    rootNode.innerText = '';
    hide = true;
    let h1 = document.createElement('h1');
    h1.innerText = 'Hello! Welcome to simple Task manager';
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
    login.addEventListener('click', function() {
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
    register.addEventListener('click', function() {
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
        create.addEventListener('click', function() {
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
                    name: name,
                    password: password,
                    todoItems: [],
                    allTask: []
                });
                createAcc();
            }
        });

        let back = document.createElement('button');
        back.type = 'submit';
        back.className = 'btn btn-primary';
        back.innerText = 'back';
        back.addEventListener('click', function() {
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
                        isDone: false,
                        delete: false,
                        id: id,
                        description: send[i].task
                    });
                    users[j].allTask.push({
                        isDone: false,
                        delete: false,
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

function main() {
    window.location.hash = '';
    rootNode.innerText = '';
    let h1 = document.createElement('h1');
    h1.innerText = 'Task manager';
    let btn = document.createElement('button');
    btn.className = 'btn btn-secondary';
    btn.innerText = 'Add new task';
    let btn2 = document.createElement('button');
    btn2.className = 'btn';
    btn2.id = 'btn2';
    btn2.innerText = 'show all task';
    btn2.addEventListener('click', function() {
        window.location.hash = 'history';
    })
    if (hide) {
        btn2.style.display = 'none';
    }
    let emptyBlock = document.createElement('h2');
    emptyBlock.innerText = 'Task manager is empty';
    let list = document.createElement('ul');
    list.id = 'list';
    let acc = document.createElement('div');
    acc.className = 'user';
    let accName = document.createElement('h3');
    accName.innerText = userName;
    let exit = document.createElement('img');
    exit.src = './assets/img/exit.png'
    exit.className = 'exit';
    exit.title = 'logout';
    exit.addEventListener('click', function() {
        window.location.hash = 'login';
    })
    rootNode.appendChild(acc);
    acc.appendChild(accName);
    acc.appendChild(exit);

    rootNode.appendChild(h1);
    rootNode.appendChild(btn);
    rootNode.appendChild(btn2);
    for (let i = 0; i < users.length; i++) {
        if (userName === users[i].name) {
            magic = i;
            if (users[magic].todoItems.length === zero) {
                rootNode.appendChild(emptyBlock);
            }
        }
    }
    rootNode.appendChild(list);

    function buid(i) {
        let li = document.createElement('li');
        let img = document.createElement('img');
        img.className = 'img';
        if (users[magic].todoItems[i].isDone) {
            img.src = './assets/img/done-s.png';
        } else {
            img.src = './assets/img/todo-s.png';
        }
        img.addEventListener('click', () => {
            if (users[magic].todoItems[i].isDone) {
                img.src = './assets/img/todo-s.png';
                users[magic].todoItems[i].isDone = false;
                users[magic].allTask[i].isDone = false;
                users[magic].todoItems.push(users[magic].todoItems[i]);
                users[magic].allTask.push(users[magic].allTask[i]);
                users[magic].todoItems.splice(i, 1);
                users[magic].allTask.splice(i, 1);
                main();
            } else {
                img.src = './assets/img/done-s.png';
                users[magic].todoItems[i].isDone = true;
                users[magic].allTask[i].isDone = true;
                users[magic].todoItems.push(users[magic].todoItems[i]);
                users[magic].allTask.push(users[magic].allTask[i]);
                users[magic].todoItems.splice(i, 1);
                users[magic].allTask.splice(i, 1);
                main();
            }
        });
        let par = document.createElement('div');
        par.className = 'paragraph';
        par.title = 'do double click to share this task';
        par.ondblclick = function() {
            share(users[magic].todoItems[i].description);
        }
        let taskText = document.createElement('h5');
        taskText.innerText = `${users[magic].todoItems[i].description}`;
        taskText.className = 'task-text';
        taskText.title = 'click to edit task';
        let del = document.createElement('img');
        del.className = 'remove img';
        del.src = './assets/img/remove-s.jpg';
        li.appendChild(img);
        li.appendChild(par);
        par.appendChild(taskText);
        li.appendChild(del);
        list.appendChild(li);

        let renameTask = document.getElementsByClassName('task-text');
        for (let i = 0; i < renameTask.length; i++) {
            renameTask[i].onclick = function() {
                temporaryValue = `edit${i+1}`;
                window.location.hash = `edit${i+1}`;
            }
        }
        let close = document.getElementsByClassName('remove');
        for (let i = 0; i < close.length; i++) {
            close[i].onclick = function() {
                let listItem = this.parentElement;
                let ul = document.getElementById('list');
                hide = false;
                counterDel++;
                btn2.style.display = 'block';
                users[magic].allTask[i].delete = true;
                ul.removeChild(listItem);
                users[magic].todoItems.splice(i);
            }
        }
    }

    for (let i = 0; i < users[magic].todoItems.length; i++) {
        if (!users[magic].todoItems[i].isDone) {
            buid(i);
        }
    }
    for (let i = 0; i < users[magic].todoItems.length; i++) {
        if (users[magic].todoItems[i].isDone) {
            buid(i);
        }
    }

    function addChangeHash() {
        window.location.hash = 'addNewAction';
    }

    btn.addEventListener('click', addChangeHash);
    console.log('allTask = ', users[magic].allTask);
    console.log('todoItems = ', users[magic].todoItems);
}

function share(task) {
    window.location.hash = 'share';
    rootNode.innerText = '';
    let text = document.createElement('h2');
    text.innerText = 'You are going to share your task for user:';
    let place = document.createElement('div');
    place.className = 'share-it';
    let inpt = document.createElement('input');
    inpt.type = 'text';
    inpt.className = 'form-control';
    inpt.id = 'share';
    inpt.placeholder = 'enter user name';
    let back = document.createElement('button');
    back.className = 'btn';
    back.innerText = 'cancel';
    back.addEventListener('click', function() {
        window.location.hash = 'main';
    });
    let doIt = document.createElement('button');
    doIt.className = 'btn';
    doIt.innerText = 'share';
    doIt.onclick = function() {
        let forWho = document.getElementById('share').value;
        send.push({
            forUser: forWho,
            task: task
        });
        window.location.hash = 'main';
    }
    rootNode.appendChild(text);
    rootNode.appendChild(place);
    place.appendChild(inpt);
    rootNode.appendChild(doIt);
    rootNode.appendChild(back);
}

function showAll() {
    let textShowAll = document.createElement('h2');
    textShowAll.innerText = 'Here you can see all your task!';
    rootNode.appendChild(textShowAll);
    let list = document.createElement('ul');
    list.id = 'all-list';
    rootNode.appendChild(list);

    function compareId(first, second) {
        return first.id - second.id;
    }
    users[magic].allTask.sort(compareId);
    for (let i = 0; i < users[magic].allTask.length; i++) {
        let li = document.createElement('li');
        let img = document.createElement('img');
        img.className = 'img';
        if (users[magic].allTask[i].isDone) {
            img.src = './assets/img/done-s.png';
        } else {
            img.src = './assets/img/todo-s.png';
        }
        let par = document.createElement('div');
        par.className = 'paragraph';
        if (users[magic].allTask[i].delete) {
            par.innerText = `${users[magic].allTask[i].description}`;
            par.style.textDecoration = 'line-through';
        } else {
            par.innerText = `${users[magic].allTask[i].description}`;
        }
        let del = document.createElement('img');
        del.className = 'remove img';
        del.src = './assets/img/remove-s.jpg';
        li.appendChild(img);
        li.appendChild(par);
        li.appendChild(del);
        list.appendChild(li);

    }
    let backToMain = document.createElement('button');
    backToMain.className = 'btn';
    backToMain.innerText = 'back';
    backToMain.type = 'button';
    backToMain.addEventListener('click', function() {
        users[magic].todoItems = [];
        for (let i = 0; i < users[magic].allTask.length; i++) {
            if (!users[magic].allTask[i].delete) {
                users[magic].todoItems.push(users[magic].allTask[i]);
            }
        }
        window.location.hash = 'main';
    });
    rootNode.appendChild(backToMain);
}
enter();

function addNewItems() {
    let h1 = document.createElement('h1');
    h1.innerText = 'Add new Task';
    let inpt = document.createElement('input');
    inpt.id = 'input';
    inpt.className = 'form-control';
    inpt.placeholder = 'Input your task here!';
    inpt.type = 'text';
    let place = document.createElement('div');
    place.className = 'place';
    let cancel = document.createElement('button');
    cancel.className = 'cancel btns';
    cancel.innerText = 'cancel';
    let add = document.createElement('button');
    add.className = 'add btns';
    add.innerText = 'add';

    rootNode.appendChild(h1);
    rootNode.appendChild(inpt);
    rootNode.appendChild(place);
    place.appendChild(cancel);
    place.appendChild(add);
    document.querySelector('input').focus();

    cancel.addEventListener('click', function() {
        window.location.hash = '#main';
    });

    add.addEventListener('click', function() {
        let value = document.getElementById('input').value;
        if (value === '') {
            return alert('You didn`t write any task');
        }
        users[magic].todoItems.push({
            isDone: false,
            delete: false,
            id: count,
            description: `${value}`
        });
        users[magic].allTask.push({
            isDone: false,
            delete: false,
            id: count,
            description: `${value}`
        });

        count++;
        window.location.hash = '#main';
        return users[magic].todoItems;
    });
}

function rename() {
    const howMany = 5;
    let n = window.location.hash.substr(howMany);
    n--;
    let h1 = document.createElement('h1');
    h1.innerText = 'Edit your task here';
    let inpt = document.createElement('input');
    inpt.id = 'editor';
    inpt.className = 'form-control';
    inpt.value = users[magic].todoItems[n].description;
    users[magic].allTask[n + counterDel].description = users[magic].todoItems[n].description;
    let place = document.createElement('div');
    place.className = 'place';
    let back = document.createElement('button');
    back.className = 'back';
    back.innerText = 'back';
    let save = document.createElement('button');
    save.className = 'save ';
    save.innerText = 'save';

    rootNode.appendChild(h1);
    rootNode.appendChild(inpt);
    rootNode.appendChild(place);
    place.appendChild(back);
    place.appendChild(save);

    back.addEventListener('click', function() {
        window.location.hash = '#main';
    });


    save.addEventListener('click', function() {
        let value = document.getElementById('editor').value;
        if (value === '') {
            return alert('You didn`t write any task');
        }
        users[magic].todoItems[n].description = value;
        for (let i = 0; i < users[magic].allTask.length; i++) {
            if (users[magic].allTask[i].id === users[magic].todoItems[n].id) {
                users[magic].allTask[i].description = value;
            }
        }
        window.location.hash = '#main';
        return users[magic].todoItems;
    });
}

window.addEventListener('hashchange', function() {
    if (window.location.hash === '#addNewAction') {
        rootNode.innerText = '';
        addNewItems();
    } else if (window.location.hash === `#${temporaryValue}`) {
        rootNode.innerText = '';
        rename();
    } else if (window.location.hash === '#main') {
        rootNode.innerText = '';
        main();
    } else if (window.location.hash === '#history') {
        rootNode.innerText = '';
        showAll();
    } else if (window.location.hash === '#login') {
        rootNode.innerText = '';
        enter();
    } else if (window.location.hash === '#share') {}
});