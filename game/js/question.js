var nameQuest = {};
var questAnswers = {
    first: {},
    second: {},
    thrird: {},
    four: {}
};
var firstStageQuestion = {
    question: function() {
        let rand = Math.floor(Math.random() * 11);
        switch (rand) {
            case 0:
                nameQuest.name = "Як правильно закінчити прислів'я: «Не відкладай на завтра те, що можна ...»?";
                nameQuest.numb = rand;
                break;

            case 1:
                nameQuest.name = "Яку п'єсу, написав Достоєвський?";
                nameQuest.numb = rand;
                break;

            case 2:
                nameQuest.name = "Який напис можна побачити на пляжах?";
                nameQuest.numb = rand;
                break;

            case 3:
                nameQuest.name = "Чим, образно кажучи, займається нероба?";
                nameQuest.numb = rand;
                break;

            case 4:
                nameQuest.name = "Як автолюбителі прозвали дорожній знак «В'їзд заборонено»?";
                nameQuest.numb = rand;
                break;

            case 5:
                nameQuest.name = "Як називається портрет, де намальовано самого себе?";
                nameQuest.numb = rand;
                break;

            case 6:
                nameQuest.name = "Який документ видають випускнику ВУЗу?";
                nameQuest.numb = rand;
                break;

            case 7:
                nameQuest.name = "Як називається наша планета?";
                nameQuest.numb = rand;
                break;

            case 8:
                nameQuest.name = "В якому Південно-Американському місті стоїть 38-метрова статуя Ісуса Христа?";
                nameQuest.numb = rand;
                break;

            case 9:
                nameQuest.name = "В якому місті знаходиться Статуя Свободи?";
                nameQuest.numb = rand;
                break;

            case 10:
                nameQuest.name = "Як інакше називають Нідерланди?";
                nameQuest.numb = rand;
                break;
        }
        return nameQuest;
    }
};

var firstStageAnswer = {
    answers: function() {
        switch (nameQuest.numb) {
            case 0:
                questAnswers.first.name = "Взагалі не робити";
                questAnswers.second.name = "Зробити завтра";
                questAnswers.thrird.name = "Зробити сьогодні";
                questAnswers.four.name = "Сьогодні не робити";

                questAnswers.first.value = false;
                questAnswers.second.value = false;
                questAnswers.thrird.value = true;
                questAnswers.four.value = false;
                break;
            case 1:
                questAnswers.first.name = "Ідіот";
                questAnswers.second.name = "Хазяїн";
                questAnswers.thrird.name = "Наталка Полтавка";
                questAnswers.four.name = "Назар Стодоля";

                questAnswers.first.value = true;
                questAnswers.second.value = false;
                questAnswers.thrird.value = false;
                questAnswers.four.value = false;
                break;
            case 2:
                questAnswers.first.name = "Медуз не ловити";
                questAnswers.second.name = "Людей не топити";
                questAnswers.thrird.name = "За буйки не запливати!";
                questAnswers.four.name = "Акул не годувати";

                questAnswers.first.value = false;
                questAnswers.second.value = false;
                questAnswers.thrird.value = true;
                questAnswers.four.value = false;
                break;
            case 3:
                questAnswers.first.name = "Годує синичок";
                questAnswers.second.name = "Хамить людям";
                questAnswers.thrird.name = "Нічого не робить";
                questAnswers.four.name = "Плює в стелю";

                questAnswers.first.value = false;
                questAnswers.second.value = false;
                questAnswers.thrird.value = false;
                questAnswers.four.value = true;
                break;
            case 4:
                questAnswers.first.name = "Кірпіч";
                questAnswers.second.name = "Квадрат";
                questAnswers.thrird.name = "Ромб";
                questAnswers.four.name = "Коло";

                questAnswers.first.value = true;
                questAnswers.second.value = false;
                questAnswers.thrird.value = false;
                questAnswers.four.value = false;
                break;
            case 5:
                questAnswers.first.name = "Мозаїка";
                questAnswers.second.name = "Портрет себе любимого";
                questAnswers.thrird.name = "Автопортрет";
                questAnswers.four.name = "Народна картина";

                questAnswers.first.value = false;
                questAnswers.second.value = false;
                questAnswers.thrird.value = true;
                questAnswers.four.value = false;
                break;
            case 6:
                questAnswers.first.name = "Паспорт";
                questAnswers.second.name = "Трудову книжку";
                questAnswers.thrird.name = "Повістку";
                questAnswers.four.name = "Диплом";

                questAnswers.first.value = false;
                questAnswers.second.value = false;
                questAnswers.thrird.value = false;
                questAnswers.four.value = true;
                break;
            case 7:
                questAnswers.first.name = "Марс";
                questAnswers.second.name = "Земля";
                questAnswers.thrird.name = "Венера";
                questAnswers.four.name = "Юпітер";

                questAnswers.first.value = false;
                questAnswers.second.value = true;
                questAnswers.thrird.value = false;
                questAnswers.four.value = false;
                break;
            case 8:
                questAnswers.first.name = "Ріо-де-Жанейро";
                questAnswers.second.name = "Сантьяго";
                questAnswers.thrird.name = "Сальвадор";
                questAnswers.four.name = "Сан-Паулу";

                questAnswers.first.value = true;
                questAnswers.second.value = false;
                questAnswers.thrird.value = false;
                questAnswers.four.value = false;
                break;
            case 9:
                questAnswers.first.name = "Лос Анджелес";
                questAnswers.second.name = "Нью-Йорк";
                questAnswers.thrird.name = "Вашингтон";
                questAnswers.four.name = "Х'юстон";

                questAnswers.first.value = false;
                questAnswers.second.value = true;
                questAnswers.thrird.value = false;
                questAnswers.four.value = false;
                break;
            case 10:
                questAnswers.first.name = "Столиця Європи";
                questAnswers.second.name = "Тюльпандія";
                questAnswers.thrird.name = "Лапландія";
                questAnswers.four.name = "Голандія";

                questAnswers.first.value = false;
                questAnswers.second.value = false;
                questAnswers.thrird.value = false;
                questAnswers.four.value = true;
                break;
        }
        return questAnswers;
    }
};


var secondStageQuestion = {
    question: function() {
        let rand = Math.floor(Math.random() * 6);
        switch (rand) {
            case 0:
                nameQuest.name = "Де, якщо вірити прислів'ю, любопитній Варварі ніс відірвали?";
                nameQuest.numb = rand;
                break;

            case 1:
                nameQuest.name = "Що на голові у людини з пишним волоссям?";
                nameQuest.numb = rand;
                break;

            case 2:
                nameQuest.name = "Куди деякі батьки щодня відводять малюків?";
                nameQuest.numb = rand;
                break;

            case 3:
                nameQuest.name = "Як називаються популярні цукерки?";
                nameQuest.numb = rand;
                break;

            case 4:
                nameQuest.name = "Що у свині замість носа?";
                nameQuest.numb = rand;
                break;

            case 5:
                nameQuest.name = "Що під час гри, приймає волейболіст?";
                nameQuest.numb = rand;
                break;
        }
        return nameQuest;
    }
};

var secondStageAnswer = {
    answers: function() {
        switch (nameQuest.numb) {
            case 0:
                questAnswers.first.name = "В автобусі";
                questAnswers.second.name = "В магазині";
                questAnswers.thrird.name = "На базарі";
                questAnswers.four.name = "Їй ніс не відривали";

                questAnswers.first.value = false;
                questAnswers.second.value = false;
                questAnswers.thrird.value = true;
                questAnswers.four.value = false;
                break;
            case 1:
                questAnswers.first.name = "Шевелюра";
                questAnswers.second.name = "Партітура";
                questAnswers.thrird.name = "Арматура";
                questAnswers.four.name = "Макулатура";

                questAnswers.first.value = true;
                questAnswers.second.value = false;
                questAnswers.thrird.value = false;
                questAnswers.four.value = false;
                break;
            case 2:
                questAnswers.first.name = "В інкубатор";
                questAnswers.second.name = "В пітомнік";
                questAnswers.thrird.name = "В стойло";
                questAnswers.four.name = "В садок";

                questAnswers.first.value = false;
                questAnswers.second.value = false;
                questAnswers.thrird.value = false;
                questAnswers.four.value = true;
                break;
            case 3:
                questAnswers.first.name = "Зоряне сяйво";
                questAnswers.second.name = "Небесне сяйво";
                questAnswers.thrird.name = "Небесний армагедон";
                questAnswers.four.name = "Південне сяйво";

                questAnswers.first.value = true;
                questAnswers.second.value = false;
                questAnswers.thrird.value = false;
                questAnswers.four.value = false;
                break;
            case 4:
                questAnswers.first.name = "Копійка";
                questAnswers.second.name = "П'ятачок";
                questAnswers.thrird.name = "Лапа";
                questAnswers.four.name = "Розетка";

                questAnswers.first.value = false;
                questAnswers.second.value = true;
                questAnswers.thrird.value = false;
                questAnswers.four.value = false;
                break;
            case 5:
                questAnswers.first.name = "Роди";
                questAnswers.second.name = "Снодійне";
                questAnswers.thrird.name = "Подачу";
                questAnswers.four.name = "100 грам";

                questAnswers.first.value = false;
                questAnswers.second.value = false;
                questAnswers.thrird.value = true;
                questAnswers.four.value = false;
                break;
        }
        return questAnswers;
    }
};
var thirdStageQuestion = {
    question: function() {
        let rand = Math.floor(Math.random() * 6);
        switch (rand) {
            case 0:
                nameQuest.name = "Що допомагає туристу орієнтуватися в чужому місті?";
                nameQuest.numb = rand;
                break;
            case 1:
                nameQuest.name = "В яку з цих ігор не грають клюшкою?";
                nameQuest.numb = rand;
                break;
            case 2:
                nameQuest.name = "Як називається популярна останнім часом іграшка, що обертається?";
                nameQuest.numb = rand;
                break;
            case 3:
                nameQuest.name = "Що кидає Зевс?";
                nameQuest.numb = rand;
                break;
            case 4:
                nameQuest.name = "В якому із цих видів спорту, грав Майкл Джордан?";
                nameQuest.numb = rand;
                break;
            case 5:
                nameQuest.name = "Яка столиця Чехії?";
                nameQuest.numb = rand;
                break;

        }
        return nameQuest;
    }
};
var thirdStageAnswer = {
    answers: function() {
        switch (nameQuest.numb) {
            case 0:
                questAnswers.first.name = "Зорі";
                questAnswers.second.name = "Будинки";
                questAnswers.thrird.name = "Дорога";
                questAnswers.four.name = "Карта";

                questAnswers.first.value = false;
                questAnswers.second.value = false;
                questAnswers.thrird.value = false;
                questAnswers.four.value = true;
                break;
            case 1:
                questAnswers.first.name = "Гольф";
                questAnswers.second.name = "Хокей";
                questAnswers.thrird.name = "Поло";
                questAnswers.four.name = "Більярд";

                questAnswers.first.value = false;
                questAnswers.second.value = false;
                questAnswers.thrird.value = false;
                questAnswers.four.value = true;
                break;
            case 2:
                questAnswers.first.name = "Спікер";
                questAnswers.second.name = "Спінінг";
                questAnswers.thrird.name = "Спінер";
                questAnswers.four.name = "Спиногриз";

                questAnswers.first.value = false;
                questAnswers.second.value = false;
                questAnswers.thrird.value = true;
                questAnswers.four.value = false;
                break;
            case 3:
                questAnswers.first.name = "червону ікру";
                questAnswers.second.name = "спис на Олімпійських іграх";
                questAnswers.thrird.name = "бісер перед свинями";
                questAnswers.four.name = "громи і блискавки";

                questAnswers.first.value = false;
                questAnswers.second.value = false;
                questAnswers.thrird.value = false;
                questAnswers.four.value = true;
                break;
            case 4:
                questAnswers.first.name = "Баскетбол";
                questAnswers.second.name = "Футбол";
                questAnswers.thrird.name = "Доміно";
                questAnswers.four.name = "Хокей";

                questAnswers.first.value = true;
                questAnswers.second.value = false;
                questAnswers.thrird.value = false;
                questAnswers.four.value = false;
                break;
            case 5:
                questAnswers.first.name = "Плзень";
                questAnswers.second.name = "Прага";
                questAnswers.thrird.name = "Берлін";
                questAnswers.four.name = "Відень";

                questAnswers.first.value = false;
                questAnswers.second.value = true;
                questAnswers.thrird.value = false;
                questAnswers.four.value = false;
                break;
        }
        return questAnswers;
    }
};

var fourStageQuestion = {
    question: function() {
        let rand = Math.floor(Math.random() * 6);
        switch (rand) {
            case 0:
                nameQuest.name = "Яка байка прославила байкара Крилова?";
                nameQuest.numb = rand;
                break;
            case 1:
                nameQuest.name = "Яка скульптура прославила Огюста Родена?";
                nameQuest.numb = rand;
                break;
            case 2:
                nameQuest.name = "Який транспорт в Москві отримав прізвисько «Аннушка»?";
                nameQuest.numb = rand;
                break;
            case 3:
                nameQuest.name = "Як часто кажуть про людину, яку ніяк не можуть знайти?";
                nameQuest.numb = rand;
                break;
            case 4:
                nameQuest.name = "Ким ставали гардемарини, коли закінчили навчання?";
                nameQuest.numb = rand;
                break;
            case 5:
                nameQuest.name = "Яка відстань є у фотооб'єктива?";
                nameQuest.numb = rand;
                break;
        }
        return nameQuest;
    }
};
var fourStageAnswer = {
    answers: function() {
        switch (nameQuest.numb) {
            case 0:
                questAnswers.first.name = "Трішкін кафтан";
                questAnswers.second.name = "Івашкін арм'як";
                questAnswers.thrird.name = "Прошкін зіпун";
                questAnswers.four.name = "Машкін сарафан";

                questAnswers.first.value = true;
                questAnswers.second.value = false;
                questAnswers.thrird.value = false;
                questAnswers.four.value = false;
                break;
            case 1:
                questAnswers.first.name = "«Учитель»";
                questAnswers.second.name = "«Мыслитель»";
                questAnswers.thrird.name = "«Строитель»";
                questAnswers.four.name = "«Осветитель»";

                questAnswers.first.value = false;
                questAnswers.second.value = true;
                questAnswers.thrird.value = false;
                questAnswers.four.value = false;
                break;
            case 2:
                questAnswers.first.name = "автобус";
                questAnswers.second.name = "троллейбус";
                questAnswers.thrird.name = "трамвай";
                questAnswers.four.name = "метро";

                questAnswers.first.value = false;
                questAnswers.second.value = false;
                questAnswers.thrird.value = true;
                questAnswers.four.value = false;
                break;
            case 3:
                questAnswers.first.name = "ні слуху ні духу";
                questAnswers.second.name = "ні те ні се";
                questAnswers.thrird.name = "ні собі ні людям";
                questAnswers.four.name = "ні туди ні сюди";

                questAnswers.first.value = true;
                questAnswers.second.value = false;
                questAnswers.thrird.value = false;
                questAnswers.four.value = false;
                break;
            case 4:
                questAnswers.first.name = "кавалеристами";
                questAnswers.second.name = "будівельниками";
                questAnswers.thrird.name = "юристами";
                questAnswers.four.name = "моряками";

                questAnswers.first.value = false;
                questAnswers.second.value = false;
                questAnswers.thrird.value = false;
                questAnswers.four.value = true;
                break;
            case 5:
                questAnswers.first.name = "ілюзійна";
                questAnswers.second.name = "магічна";
                questAnswers.thrird.name = "фокусна";
                questAnswers.four.name = "невидима";

                questAnswers.first.value = false;
                questAnswers.second.value = false;
                questAnswers.thrird.value = true;
                questAnswers.four.value = false;
                break;
        }
        return questAnswers;
    }
};

var fiveStageQuestion = {
    question: function() {
        let rand = Math.floor(Math.random() * 6);
        switch (rand) {
            case 0:
                nameQuest.name = "Як звали старшу сестру імператора Петра Першого?";
                nameQuest.numb = rand;
                break;
            case 1:
                nameQuest.name = "Де Мане поставив автограф і дату на картині \"Бар в Фолі-Бержер\" ?";
                nameQuest.numb = rand;
                break;
            case 2:
                nameQuest.name = "Хто з полководців до Бородинської битви не мав ордена Святого апостола Андрія Первозванного?";
                nameQuest.numb = rand;
                break;
            case 3:
                nameQuest.name = "Клеймо у вигляді якої квітки було випалено на плечі Міледі?";
                nameQuest.numb = rand;
                break;
            case 4:
                nameQuest.name = "Про яку рибу-ідеаліста написав оповідання Салтиков-Щедрін?";
                nameQuest.numb = rand;
                break;
            case 5:
                nameQuest.name = "Що Олександр Сергійович Пушкін приніс в дар фонтану Бахчисарайського палацу?";
                nameQuest.numb = rand;
                break;
        }
        return nameQuest;
    }
};
var fiveStageAnswer = {
    answers: function() {
        switch (nameQuest.numb) {
            case 0:
                questAnswers.first.name = "Віра";
                questAnswers.second.name = "Надія";
                questAnswers.thrird.name = "Любов";
                questAnswers.four.name = "Софія";

                questAnswers.first.value = false;
                questAnswers.second.value = false;
                questAnswers.thrird.value = false;
                questAnswers.four.value = true;
                break;
            case 1:
                questAnswers.first.name = "на вазі";
                questAnswers.second.name = "на скатертині";
                questAnswers.thrird.name = "на винній етикетці";
                questAnswers.four.name = "на браслеті барменші";

                questAnswers.first.value = false;
                questAnswers.second.value = false;
                questAnswers.thrird.value = true;
                questAnswers.four.value = false;
                break;
            case 2:
                questAnswers.first.name = "Мюрат";
                questAnswers.second.name = "Барклай-де-Толлі";
                questAnswers.thrird.name = "Кутузов";
                questAnswers.four.name = "Наполеон";

                questAnswers.first.value = false;
                questAnswers.second.value = true;
                questAnswers.thrird.value = false;
                questAnswers.four.value = false;
                break;
            case 3:
                questAnswers.first.name = "троянда";
                questAnswers.second.name = "лілія";
                questAnswers.thrird.name = "фіалка";
                questAnswers.four.name = "ромашка";

                questAnswers.first.value = false;
                questAnswers.second.value = true;
                questAnswers.thrird.value = false;
                questAnswers.four.value = false;
                break;
            case 4:
                questAnswers.first.name = "карп";
                questAnswers.second.name = "окунь";
                questAnswers.thrird.name = "карась ";
                questAnswers.four.name = "щука";

                questAnswers.first.value = false;
                questAnswers.second.value = false;
                questAnswers.thrird.value = true;
                questAnswers.four.value = false;
                break;
            case 5:
                questAnswers.first.name = "чотири рукавички";
                questAnswers.second.name = "один рубль";
                questAnswers.thrird.name = "три сльозинки";
                questAnswers.four.name = "дві троянди";

                questAnswers.first.value = false;
                questAnswers.second.value = false;
                questAnswers.thrird.value = false;
                questAnswers.four.value = true;
                break;
        }
        return questAnswers;
    }
};

var sixStageQuestion = {
    question: function() {
        let rand = Math.floor(Math.random() * 6);
        switch (rand) {
            case 0:
                nameQuest.name = "Що крутиться навкруг Землі?";
                nameQuest.numb = rand;
                break;
            case 1:
                nameQuest.name = "Ким служив при дворі Маленький Мук з казки Гауфа?";
                nameQuest.numb = rand;
                break;
            case 2:
                nameQuest.name = "Якому привітанню Людмила вчила вахтеркшу гуртожитку у фільмі «Москва сльозам не вірить»?";
                nameQuest.numb = rand;
                break;
            case 3:
                nameQuest.name = "Батьком чого називають авіаконструктора Ігоря Сікорського?";
                nameQuest.numb = rand;
                break;
            case 4:
                nameQuest.name = "Яка тварина було символом Прогресивної партії США, заснованої Теодором Рузвельтом?";
                nameQuest.numb = rand;
                break;
            case 5:
                nameQuest.name = "Що являє собою фраза «Натиснув кабан на баклажан»?";
                nameQuest.numb = rand;
                break;
        }
        return nameQuest;
    }
};
var sixStageAnswer = {
    answers: function() {
        switch (nameQuest.numb) {
            case 0:
                questAnswers.first.name = "Місяць";
                questAnswers.second.name = "Сонце";
                questAnswers.thrird.name = "Венера";
                questAnswers.four.name = "Марс";

                questAnswers.first.value = true;
                questAnswers.second.value = false;
                questAnswers.thrird.value = false;
                questAnswers.four.value = false;
                break;
            case 1:
                questAnswers.first.name = "блазнем";
                questAnswers.second.name = "скороходом";
                questAnswers.thrird.name = "охоронцем";
                questAnswers.four.name = "масажистом";

                questAnswers.first.value = false;
                questAnswers.second.value = true;
                questAnswers.thrird.value = false;
                questAnswers.four.value = false;
                break;
            case 2:
                questAnswers.first.name = "Хеллоу! ";
                questAnswers.second.name = "Бонжур!";
                questAnswers.thrird.name = "Чао!";
                questAnswers.four.name = "Алоха!";

                questAnswers.first.value = true;
                questAnswers.second.value = false;
                questAnswers.thrird.value = false;
                questAnswers.four.value = false;
                break;
            case 3:
                questAnswers.first.name = "гідролітака";
                questAnswers.second.name = "парашута";
                questAnswers.thrird.name = "дирижабля";
                questAnswers.four.name = "гелікоптера ";

                questAnswers.first.value = false;
                questAnswers.second.value = false;
                questAnswers.thrird.value = false;
                questAnswers.four.value = true;
                break;
            case 4:
                questAnswers.first.name = "бізон";
                questAnswers.second.name = "орел";
                questAnswers.thrird.name = "лось ";
                questAnswers.four.name = "ведмідь";

                questAnswers.first.value = false;
                questAnswers.second.value = false;
                questAnswers.thrird.value = true;
                questAnswers.four.value = false;
                break;
            case 5:
                questAnswers.first.name = "фразеологізм";
                questAnswers.second.name = "паліндром ";
                questAnswers.thrird.name = "приказку";
                questAnswers.four.name = "анаграму";

                questAnswers.first.value = false;
                questAnswers.second.value = true;
                questAnswers.thrird.value = false;
                questAnswers.four.value = false;
                break;
        }
        return questAnswers;
    }
};

var sevenStageQuestion = {
    question: function() {
        let rand = Math.floor(Math.random() * 6);
        switch (rand) {
            case 0:
                nameQuest.name = "З ким порівнюються дуби в пісні «Олександра» із фільму «Москва сльозам не вірить»?";
                nameQuest.numb = rand;
                break;
            case 1:
                nameQuest.name = "Якій пісні присвячений м/ф Пісня летить по світу?";
                nameQuest.numb = rand;
                break;
            case 2:
                nameQuest.name = "Якого роду слово «салямі»?";
                nameQuest.numb = rand;
                break;
            case 3:
                nameQuest.name = "Що з'явилося завдяки тому, що клієнтам Томаса Саллівана було лінь знімати з товару упаковку?";
                nameQuest.numb = rand;
                break;
            case 4:
                nameQuest.name = "Яка наука вивчає живі клітини?";
                nameQuest.numb = rand;
                break;
            case 5:
                nameQuest.name = "Яка група заспівала пісню «Последний час декабря»?";
                nameQuest.numb = rand;
                break;
        }
        return nameQuest;
    }
};
var sevenStageAnswer = {
    answers: function() {
        switch (nameQuest.numb) {
            case 0:
                questAnswers.first.name = "З царями";
                questAnswers.second.name = "З князями";
                questAnswers.thrird.name = "З графами";
                questAnswers.four.name = "З баронами";

                questAnswers.first.value = false;
                questAnswers.second.value = true;
                questAnswers.thrird.value = false;
                questAnswers.four.value = false;
                break;
            case 1:
                questAnswers.first.name = "Катюша";
                questAnswers.second.name = "Підмосковні вечора";
                questAnswers.thrird.name = "Калинка";
                questAnswers.four.name = "Летіть, голуби";

                questAnswers.first.value = false;
                questAnswers.second.value = true;
                questAnswers.thrird.value = false;
                questAnswers.four.value = false;
                break;
            case 2:
                questAnswers.first.name = "чоловічого";
                questAnswers.second.name = "середнього";
                questAnswers.thrird.name = "жіночого ";
                questAnswers.four.name = "загального";

                questAnswers.first.value = false;
                questAnswers.second.value = false;
                questAnswers.thrird.value = true;
                questAnswers.four.value = false;
                break;
            case 3:
                questAnswers.first.name = "чай в пакетиках";
                questAnswers.second.name = "сухе молоко";
                questAnswers.thrird.name = "консерви";
                questAnswers.four.name = "ескімо";

                questAnswers.first.value = true;
                questAnswers.second.value = false;
                questAnswers.thrird.value = false;
                questAnswers.four.value = false;
                break;
            case 4:
                questAnswers.first.name = "гіпологія";
                questAnswers.second.name = "іхтіологія";
                questAnswers.thrird.name = "орнітологія";
                questAnswers.four.name = "цитологія";

                questAnswers.first.value = false;
                questAnswers.second.value = false;
                questAnswers.thrird.value = false;
                questAnswers.four.value = true;
                break;
            case 5:
                questAnswers.first.name = "«Браво»";
                questAnswers.second.name = "«Секрет»";
                questAnswers.thrird.name = "\"Веселі хлопці\"";
                questAnswers.four.name = "\"Машина часу\"";

                questAnswers.first.value = true;
                questAnswers.second.value = false;
                questAnswers.thrird.value = false;
                questAnswers.four.value = false;
                break;
        }
        return questAnswers;
    }
};

var eightStageQuestion = {
    question: function() {
        let rand = Math.floor(Math.random() * 6);
        switch (rand) {
            case 0:
                nameQuest.name = "В якій країні з'явилася мандоліна?";
                nameQuest.numb = rand;
                break;
            case 1:
                nameQuest.name = "Музей якого побутового пристрою знаходиться в місті Переславль-Залеський?";
                nameQuest.numb = rand;
                break;
            case 2:
                nameQuest.name = "Яка «родичка» допомагає гравцеві в більярд зробити точний удар?";
                nameQuest.numb = rand;
                break;
            case 3:
                nameQuest.name = "Яка картина не належить Павлу Федотову?";
                nameQuest.numb = rand;
                break;
            case 4:
                nameQuest.name = "Що являє собою твір Агати Крісті «Мишоловка»?";
                nameQuest.numb = rand;
                break;
            case 5:
                nameQuest.name = "Як звали дружину італійського кінорежисера Федеріко Фелліні?";
                nameQuest.numb = rand;
                break;
        }
        return nameQuest;
    }
};
var eightStageAnswer = {
    answers: function() {
        switch (nameQuest.numb) {
            case 0:
                questAnswers.first.name = "Іспанія";
                questAnswers.second.name = "Італія";
                questAnswers.thrird.name = "Венгрія";
                questAnswers.four.name = "Греція";

                questAnswers.first.value = false;
                questAnswers.second.value = true;
                questAnswers.thrird.value = false;
                questAnswers.four.value = false;
                break;
            case 1:
                questAnswers.first.name = "м'ясорубка";
                questAnswers.second.name = "прядка";
                questAnswers.thrird.name = "праска ";
                questAnswers.four.name = "маслобойка";

                questAnswers.first.value = false;
                questAnswers.second.value = false;
                questAnswers.thrird.value = true;
                questAnswers.four.value = false;
                break;
            case 2:
                questAnswers.first.name = "«Мама»";
                questAnswers.second.name = "«Сестра»";
                questAnswers.thrird.name = "«Теща»";
                questAnswers.four.name = "«Племінниця»";

                questAnswers.first.value = false;
                questAnswers.second.value = false;
                questAnswers.thrird.value = true;
                questAnswers.four.value = false;
                break;
            case 3:
                questAnswers.first.name = "«Розбірлива наречена»";
                questAnswers.second.name = "«Нерівний шлюб»";
                questAnswers.thrird.name = "«Сватання майора»";
                questAnswers.four.name = "«Свіжий кавалер»";

                questAnswers.first.value = false;
                questAnswers.second.value = true;
                questAnswers.thrird.value = false;
                questAnswers.four.value = false;
                break;
            case 4:
                questAnswers.first.name = "розповідь";
                questAnswers.second.name = "роман";
                questAnswers.thrird.name = "повість";
                questAnswers.four.name = "п'єсу";

                questAnswers.first.value = false;
                questAnswers.second.value = false;
                questAnswers.thrird.value = false;
                questAnswers.four.value = true;
                break;
            case 5:
                questAnswers.first.name = "Джульєтта";
                questAnswers.second.name = "Офелія";
                questAnswers.thrird.name = "Беатріче";
                questAnswers.four.name = "Дездемона";

                questAnswers.first.value = true;
                questAnswers.second.value = false;
                questAnswers.thrird.value = false;
                questAnswers.four.value = false;
                break;
        }
        return questAnswers;
    }
};

var nineStageQuestion = {
    question: function() {
        let rand = Math.floor(Math.random() * 6);
        switch (rand) {
            case 0:
                nameQuest.name = "Як жителі Лондона прозвали хмарочос Мері-Екс, спроектований Норманом Фостером?";
                nameQuest.numb = rand;
                break;
            case 1:
                nameQuest.name = "Чим була наповнена перша повітряна куля братів Монгольф'є?";
                nameQuest.numb = rand;
                break;
            case 2:
                nameQuest.name = "З яким противником римляни вели Пунічні війни?";
                nameQuest.numb = rand;
                break;
            case 3:
                nameQuest.name = "Без використання чого не зшити справжньої кацавейки?";
                nameQuest.numb = rand;
                break;
            case 4:
                nameQuest.name = "Жінки з яким ім'ям не було в гаремі Абдулли, який супроводжував товариш Сухов?";
                nameQuest.numb = rand;
                break;
            case 5:
                nameQuest.name = "Яка порода собак отримала назву не в честь географічного об'єкта?";
                nameQuest.numb = rand;
                break;
        }
        return nameQuest;
    }
};
var nineStageAnswer = {
    answers: function() {
        switch (nameQuest.numb) {
            case 0:
                questAnswers.first.name = "«Корнішон»";
                questAnswers.second.name = "«Баклажан»";
                questAnswers.thrird.name = "«Кабачок»";
                questAnswers.four.name = "«Огірок»";

                questAnswers.first.value = true;
                questAnswers.second.value = false;
                questAnswers.thrird.value = false;
                questAnswers.four.value = false;
                break;
            case 1:
                questAnswers.first.name = "киснем";
                questAnswers.second.name = "азотом";
                questAnswers.thrird.name = "гарячим повітрям";
                questAnswers.four.name = "гелієм";

                questAnswers.first.value = false;
                questAnswers.second.value = false;
                questAnswers.thrird.value = true;
                questAnswers.four.value = false;
                break;
            case 2:
                questAnswers.first.name = "з Єгиптом";
                questAnswers.second.name = "з Спартою";
                questAnswers.thrird.name = "з Карфагеном";
                questAnswers.four.name = "з Македонією";

                questAnswers.first.value = false;
                questAnswers.second.value = false;
                questAnswers.thrird.value = true;
                questAnswers.four.value = false;
                break;
            case 3:
                questAnswers.first.name = "без бісеру";
                questAnswers.second.name = "без хутра";
                questAnswers.thrird.name = "без парчі";
                questAnswers.four.name = "без шкіри";

                questAnswers.first.value = false;
                questAnswers.second.value = true;
                questAnswers.thrird.value = false;
                questAnswers.four.value = false;
                break;
            case 4:
                questAnswers.first.name = "Заріна";
                questAnswers.second.name = "Зарема ";
                questAnswers.thrird.name = "Зухра";
                questAnswers.four.name = "Зульфія";

                questAnswers.first.value = false;
                questAnswers.second.value = true;
                questAnswers.thrird.value = false;
                questAnswers.four.value = false;
                break;
            case 5:
                questAnswers.first.name = "ротвейлер";
                questAnswers.second.name = "лабрадор";
                questAnswers.thrird.name = "Ньюфаунленд";
                questAnswers.four.name = "бассед-хаунд";

                questAnswers.first.value = false;
                questAnswers.second.value = false;
                questAnswers.thrird.value = false;
                questAnswers.four.value = true;
                break;
        }
        return questAnswers;
    }
};

var tenStageQuestion = {
    question: function() {
        let rand = Math.floor(Math.random() * 6);
        switch (rand) {
            case 0:
                nameQuest.name = "Який лікар першим в історії російської медицини застосував гіпсову пов'язку?";
                nameQuest.numb = rand;
                break;
            case 1:
                nameQuest.name = "Хто підказав Гоголю ідею \"Ревізора\"?";
                nameQuest.numb = rand;
                break;
            case 2:
                nameQuest.name = "Навіщо лісники Данії напередодні Нового року запилюють лісові ялинки спеціальним безбарвним складом?";
                nameQuest.numb = rand;
                break;
            case 3:
                nameQuest.name = "Звідки родом балдахін, якщо вірити перекладу з італійської мови?";
                nameQuest.numb = rand;
                break;
            case 4:
                nameQuest.name = "Кого художник Давид відобразив на полотні «Коронація Наполеона» за бажанням замовника всупереч історичній точності?";
                nameQuest.numb = rand;
                break;
            case 5:
                nameQuest.name = "Як спочатку Пушкін хотів назвати трагедію «Моцарт і Сальєрі»?";
                nameQuest.numb = rand;
                break;
        }
        return nameQuest;
    }
};
var tenStageAnswer = {
    answers: function() {
        switch (nameQuest.numb) {
            case 0:
                questAnswers.first.name = "Субботін";
                questAnswers.second.name = "Пірогов";
                questAnswers.thrird.name = "Боткін";
                questAnswers.four.name = "Скліфосовський";

                questAnswers.first.value = false;
                questAnswers.second.value = true;
                questAnswers.thrird.value = false;
                questAnswers.four.value = false;
                break;
            case 1:
                questAnswers.first.name = "А. С. Пушкін";
                questAnswers.second.name = "В. І Даль";
                questAnswers.thrird.name = "І. А. Крилов";
                questAnswers.four.name = "А. С. Грибоєдов";

                questAnswers.first.value = true;
                questAnswers.second.value = false;
                questAnswers.thrird.value = false;
                questAnswers.four.value = false;
                break;
            case 2:
                questAnswers.first.name = "щоб світилися";
                questAnswers.second.name = "роблять їх більш пухнастими";
                questAnswers.thrird.name = "імітують сніг";
                questAnswers.four.name = "бережуть від браконьєрів";

                questAnswers.first.value = false;
                questAnswers.second.value = false;
                questAnswers.thrird.value = false;
                questAnswers.four.value = true;
                break;
            case 3:
                questAnswers.first.name = "з Богемії";
                questAnswers.second.name = "з Баварії";
                questAnswers.thrird.name = "з Бангладеш";
                questAnswers.four.name = "з Багдада";

                questAnswers.first.value = false;
                questAnswers.second.value = false;
                questAnswers.thrird.value = false;
                questAnswers.four.value = true;
                break;
            case 4:
                questAnswers.first.name = "маму Наполеона";
                questAnswers.second.name = "брата Наполеона";
                questAnswers.thrird.name = "дружину Наполеона";
                questAnswers.four.name = "сина Наполеона";

                questAnswers.first.value = true;
                questAnswers.second.value = false;
                questAnswers.thrird.value = false;
                questAnswers.four.value = false;
                break;
            case 5:
                questAnswers.first.name = "«Злодійство»";
                questAnswers.second.name = "«Заздрість»";
                questAnswers.thrird.name = "«Ненависть»";
                questAnswers.four.name = "«Підступність»";

                questAnswers.first.value = false;
                questAnswers.second.value = true;
                questAnswers.thrird.value = false;
                questAnswers.four.value = false;
                break;
        }
        return questAnswers;
    }
};

var elevenStageQuestion = {
    question: function() {
        let rand = Math.floor(Math.random() * 6);
        switch (rand) {
            case 0:
                nameQuest.name = "Де в Стародавній Греції можна було побачити напис: «Тут живуть мертві і говорять німі»?";
                nameQuest.numb = rand;
                break;
            case 1:
                nameQuest.name = "Який газ не є інертним?";
                nameQuest.numb = rand;
                break;
            case 2:
                nameQuest.name = "Де через місяць після весілля змушені були оселитися молодята Неллі і Йосип Кобзон?";
                nameQuest.numb = rand;
                break;
            case 3:
                nameQuest.name = "Хто автор п'єси, в якій звучить крилата фраза: «Мавр зробив свою справу, мавр може йти»?";
                nameQuest.numb = rand;
                break;
            case 4:
                nameQuest.name = "Якої інформації не містить штрихкод?";
                nameQuest.numb = rand;
                break;
            case 5:
                nameQuest.name = "Що приводило в дію омивачі лобового скла на перших моделях автомобіля «фольксваген-жук»?";
                nameQuest.numb = rand;
                break;
        }
        return nameQuest;
    }
};
var elevenStageAnswer = {
    answers: function() {
        switch (nameQuest.numb) {
            case 0:
                questAnswers.first.name = "На цвинтарі";
                questAnswers.second.name = "В лікарні";
                questAnswers.thrird.name = "В бібліотеці";
                questAnswers.four.name = "В тюрмі";

                questAnswers.first.value = false;
                questAnswers.second.value = false;
                questAnswers.thrird.value = true;
                questAnswers.four.value = false;
                break;
            case 1:
                questAnswers.first.name = "криптон";
                questAnswers.second.name = "радон";
                questAnswers.thrird.name = "пропан ";
                questAnswers.four.name = "гелій";

                questAnswers.first.value = false;
                questAnswers.second.value = false;
                questAnswers.thrird.value = true;
                questAnswers.four.value = false;
                break;
            case 2:
                questAnswers.first.name = "в підмосковному пансіонаті";
                questAnswers.second.name = "на Мальдівах";
                questAnswers.thrird.name = "в лікарняній палаті";
                questAnswers.four.name = "в мансарді дачі Фурцевої";

                questAnswers.first.value = false;
                questAnswers.second.value = false;
                questAnswers.thrird.value = true;
                questAnswers.four.value = false;
                break;
            case 3:
                questAnswers.first.name = "Вільям Шекспір";
                questAnswers.second.name = "Лопе де Вега";
                questAnswers.thrird.name = "Карло Гальдоні";
                questAnswers.four.name = "Фрідріх Шиллер";

                questAnswers.first.value = false;
                questAnswers.second.value = false;
                questAnswers.thrird.value = false;
                questAnswers.four.value = true;
                break;
            case 4:
                questAnswers.first.name = "код країни виробника товару";
                questAnswers.second.name = "дата виготовлення товару";
                questAnswers.thrird.name = "склад товару";
                questAnswers.four.name = "код виробника товару";

                questAnswers.first.value = false;
                questAnswers.second.value = true;
                questAnswers.thrird.value = false;
                questAnswers.four.value = false;
                break;
            case 5:
                questAnswers.first.name = "обертання керма";
                questAnswers.second.name = "відкривання вікон";
                questAnswers.thrird.name = "робота мотора";
                questAnswers.four.name = "тиск в запасному колесі";

                questAnswers.first.value = false;
                questAnswers.second.value = false;
                questAnswers.thrird.value = false;
                questAnswers.four.value = true;
                break;
        }
        return questAnswers;
    }
};

var twelveStageQuestion = {
    question: function() {
        let rand = Math.floor(Math.random() * 6);
        switch (rand) {
            case 0:
                nameQuest.name = "Хто був одним з авторів сценарію фільму «Музична історія» з Сергієм Лемешевим в головній ролі?";
                nameQuest.numb = rand;
                break;
            case 1:
                nameQuest.name = "Якого факультету не було у Московському університеті, коли він відкрився?";
                nameQuest.numb = rand;
                break;
            case 2:
                nameQuest.name = "Що вироблялося на першому верстаті з програмним управлінням?";
                nameQuest.numb = rand;
                break;
            case 3:
                nameQuest.name = "В якому озері водиться унікальна майже прозора рибка голомянка?";
                nameQuest.numb = rand;
                break;
            case 4:
                nameQuest.name = "Який етап «Формули-1» закінчив своє існування в 2017 році?";
                nameQuest.numb = rand;
                break;
            case 5:
                nameQuest.name = "Що був змушений зробити Генріх Гейне, щоб отримати диплом про закінчення Берлінського університету?";
                nameQuest.numb = rand;
                break;
        }
        return nameQuest;
    }
};
var twelveStageAnswer = {
    answers: function() {
        switch (nameQuest.numb) {
            case 0:
                questAnswers.first.name = "Ілья Ільїф";
                questAnswers.second.name = "Євгеній Петров";
                questAnswers.thrird.name = "Михайло Зощенко";
                questAnswers.four.name = "Аркадій Авещенко";

                questAnswers.first.value = false;
                questAnswers.second.value = true;
                questAnswers.thrird.value = false;
                questAnswers.four.value = false;
                break;
            case 1:
                questAnswers.first.name = "математичного";
                questAnswers.second.name = "філософського";
                questAnswers.thrird.name = "юридичного";
                questAnswers.four.name = "медичного";

                questAnswers.first.value = true;
                questAnswers.second.value = false;
                questAnswers.thrird.value = false;
                questAnswers.four.value = false;
                break;
            case 2:
                questAnswers.first.name = "цвяхи";
                questAnswers.second.name = "газети";
                questAnswers.thrird.name = "тканини";
                questAnswers.four.name = "фанери";

                questAnswers.first.value = false;
                questAnswers.second.value = false;
                questAnswers.thrird.value = true;
                questAnswers.four.value = false;
                break;
            case 3:
                questAnswers.first.name = "Селігер";
                questAnswers.second.name = "Таймир";
                questAnswers.thrird.name = "Байкал	";
                questAnswers.four.name = "Онезьке";

                questAnswers.first.value = false;
                questAnswers.second.value = false;
                questAnswers.thrird.value = true;
                questAnswers.four.value = false;
                break;
            case 4:
                questAnswers.first.name = "Гран-прі Китаю";
                questAnswers.second.name = "Гран-прі Малайзії";
                questAnswers.thrird.name = "Гран-прі Бахрейну";
                questAnswers.four.name = "Гран-прі Сінгапуру";

                questAnswers.first.value = false;
                questAnswers.second.value = true;
                questAnswers.thrird.value = false;
                questAnswers.four.value = false;
                break;
            case 5:
                questAnswers.first.name = "одружитись";
                questAnswers.second.name = "купити мантію";
                questAnswers.thrird.name = "охреститись";
                questAnswers.four.name = "написати поему";

                questAnswers.first.value = false;
                questAnswers.second.value = false;
                questAnswers.thrird.value = true;
                questAnswers.four.value = false;
                break;
        }
        return questAnswers;
    }
};

var thirteenStageQuestion = {
    question: function() {
        let rand = Math.floor(Math.random() * 6);
        switch (rand) {
            case 0:
                nameQuest.name = "Хто згідно біблійської легенди, привів єгипетський народ в землю обіцяну Богом?";
                nameQuest.numb = rand;
                break;
            case 1:
                nameQuest.name = "Як називається приз за перемогу в ралі «Дакар?» ";
                nameQuest.numb = rand;
                break;
            case 2:
                nameQuest.name = "Ким працювала Раїса Кудашева, коли складала рядки майбутньої пісні «В лесу родилась елочка»?";
                nameQuest.numb = rand;
                break;
            case 3:
                nameQuest.name = "Скільки коліс мав перший в світі серійний автомобіль з двигуном внутрішнього згоряння?";
                nameQuest.numb = rand;
                break;
            case 4:
                nameQuest.name = "Що Хо Ши Мін назвав на честь космонавта Германа Тітова?";
                nameQuest.numb = rand;
                break;
            case 5:
                nameQuest.name = "Музика з якої опери звучить на початку фільму «Іван Васильович змінює професію»?";
                nameQuest.numb = rand;
                break;
        }
        return nameQuest;
    }
};
var thirteenStageAnswer = {
    answers: function() {
        switch (nameQuest.numb) {
            case 0:
                questAnswers.first.name = "Авраам";
                questAnswers.second.name = "Мойсей";
                questAnswers.thrird.name = "Яків";
                questAnswers.four.name = "Ісус син Навина";

                questAnswers.first.value = false;
                questAnswers.second.value = false;
                questAnswers.thrird.value = false;
                questAnswers.four.value = true;
                break;
            case 1:
                questAnswers.first.name = "«Золотий верблюд» ";
                questAnswers.second.name = "«Золотий бедуїн»";
                questAnswers.thrird.name = "«Золотий намет»";
                questAnswers.four.name = "«Золотий мотор»";

                questAnswers.first.value = false;
                questAnswers.second.value = true;
                questAnswers.thrird.value = false;
                questAnswers.four.value = false;
                break;
            case 2:
                questAnswers.first.name = "кухаркою";
                questAnswers.second.name = "гувернанткою";
                questAnswers.thrird.name = "викладачем музики";
                questAnswers.four.name = "телефоністкою";

                questAnswers.first.value = false;
                questAnswers.second.value = true;
                questAnswers.thrird.value = false;
                questAnswers.four.value = false;
                break;
            case 3:
                questAnswers.first.name = "2";
                questAnswers.second.name = "3";
                questAnswers.thrird.name = "4";
                questAnswers.four.name = "5";

                questAnswers.first.value = false;
                questAnswers.second.value = true;
                questAnswers.thrird.value = false;
                questAnswers.four.value = false;
                break;
            case 4:
                questAnswers.first.name = "зірку";
                questAnswers.second.name = "рослину";
                questAnswers.thrird.name = "орден";
                questAnswers.four.name = "острів";

                questAnswers.first.value = false;
                questAnswers.second.value = false;
                questAnswers.thrird.value = false;
                questAnswers.four.value = true;
                break;
            case 5:
                questAnswers.first.name = "«Борис Годунов»	";
                questAnswers.second.name = "«Псковитянка»";
                questAnswers.thrird.name = "\"Іван Грозний\"";
                questAnswers.four.name = "«Хованщина»";

                questAnswers.first.value = true;
                questAnswers.second.value = false;
                questAnswers.thrird.value = false;
                questAnswers.four.value = false;
                break;
        }
        return questAnswers;
    }
};

var fourteenStageQuestion = {
    question: function() {
        let rand = Math.floor(Math.random() * 6);
        switch (rand) {
            case 0:
                nameQuest.name = "Яким видом спорту серйозно захоплювався французький льотчик Ролан Гаррос?";
                nameQuest.numb = rand;
                break;
            case 1:
                nameQuest.name = "За яке відкриття австрійський вчений Карл фон Фріш отримав в 1973 році Нобелівську премію?";
                nameQuest.numb = rand;
                break;
            case 2:
                nameQuest.name = "Хто в 1945 році в Берліні отримав від маршала Жукова орден Вітчизняної війни I ступеня?";
                nameQuest.numb = rand;
                break;
            case 3:
                nameQuest.name = "Територією якої країни не протікає річка Рейн?";
                nameQuest.numb = rand;
                break;
            case 4:
                nameQuest.name = "Як перекладається назва одного з головних островів в Карибському морі, де була база піратів?";
                nameQuest.numb = rand;
                break;
            case 5:
                nameQuest.name = "Який радянський космонавт отримав першу космічну пошту?";
                nameQuest.numb = rand;
                break;
        }
        return nameQuest;
    }
};
var fourteenStageAnswer = {
    answers: function() {
        switch (nameQuest.numb) {
            case 0:
                questAnswers.first.name = "футбол";
                questAnswers.second.name = "поло";
                questAnswers.thrird.name = "гольф";
                questAnswers.four.name = "регбі";

                questAnswers.first.value = false;
                questAnswers.second.value = false;
                questAnswers.thrird.value = false;
                questAnswers.four.value = true;
                break;
            case 1:
                questAnswers.first.name = "ультрафіолетові промені";
                questAnswers.second.name = "інфрачервоні промені";
                questAnswers.thrird.name = "ліки від прокази";
                questAnswers.four.name = "мова бджіл";

                questAnswers.first.value = false;
                questAnswers.second.value = false;
                questAnswers.thrird.value = false;
                questAnswers.four.value = true;
                break;
            case 2:
                questAnswers.first.name = "Клавдія Шульженко";
                questAnswers.second.name = "Костянтин Симонов";
                questAnswers.thrird.name = "Лідія Русланова";
                questAnswers.four.name = "Леонід Утьосов";

                questAnswers.first.value = false;
                questAnswers.second.value = false;
                questAnswers.thrird.value = true;
                questAnswers.four.value = false;
                break;
            case 3:
                questAnswers.first.name = "Швейцарія";
                questAnswers.second.name = "Люксембург";
                questAnswers.thrird.name = "Австрія";
                questAnswers.four.name = "Франція";

                questAnswers.first.value = false;
                questAnswers.second.value = true;
                questAnswers.thrird.value = false;
                questAnswers.four.value = false;
                break;
            case 4:
                questAnswers.first.name = "ящірка";
                questAnswers.second.name = "черепаха";
                questAnswers.thrird.name = "змія";
                questAnswers.four.name = "акула";

                questAnswers.first.value = false;
                questAnswers.second.value = true;
                questAnswers.thrird.value = false;
                questAnswers.four.value = false;
                break;
            case 5:
                questAnswers.first.name = "Володимир Шаталов";
                questAnswers.second.name = "Юрій Гагарін";
                questAnswers.thrird.name = "Володимир Комаров";
                questAnswers.four.name = "Герман Тітов";

                questAnswers.first.value = true;
                questAnswers.second.value = false;
                questAnswers.thrird.value = false;
                questAnswers.four.value = false;
                break;
        }
        return questAnswers;
    }
};

var fifteenStageQuestion = {
    question: function() {
        let rand = Math.floor(Math.random() * 6);
        switch (rand) {
            case 0:
                nameQuest.name = "День народження якого персонажа в Ризі відзначають на вулиці Яуніела?";
                nameQuest.numb = rand;
                break;
            case 1:
                nameQuest.name = "На якій вулиці Далласа був убитий Джон Кеннеді?";
                nameQuest.numb = rand;
                break;
            case 2:
                nameQuest.name = "Який роман Фенімор Купер написав на спір з дружиною?";
                nameQuest.numb = rand;
                break;
            case 3:
                nameQuest.name = "Нагороди якої держави не було у поета Йоганна Вольфганга Гете?";
                nameQuest.numb = rand;
                break;
            case 4:
                nameQuest.name = "Що влаштував Григорій Котовський в Одеському оперному театрі в день свого помилування від смертної кари?";
                nameQuest.numb = rand;
                break;
            case 5:
                nameQuest.name = "В якій з цих країн 31 грудня припадає на розпал літа?";
                nameQuest.numb = rand;
                break;
        }
        return nameQuest;
    }
};
var fifteenStageAnswer = {
    answers: function() {
        switch (nameQuest.numb) {
            case 0:
                questAnswers.first.name = "Джона Сільвера";
                questAnswers.second.name = "Шерлока Холмса";
                questAnswers.thrird.name = "Глєба Жиглова";
                questAnswers.four.name = "графа Дракули";

                questAnswers.first.value = false;
                questAnswers.second.value = true;
                questAnswers.thrird.value = false;
                questAnswers.four.value = false;
                break;
            case 1:
                questAnswers.first.name = "вулиця Центральна";
                questAnswers.second.name = "вулиця В'язів";
                questAnswers.thrird.name = "вулиця Роз";
                questAnswers.four.name = "вулиця Сезам";

                questAnswers.first.value = false;
                questAnswers.second.value = true;
                questAnswers.thrird.value = false;
                questAnswers.four.value = false;
                break;
            case 2:
                questAnswers.first.name = "«Предосторожность»";
                questAnswers.second.name = "«Пионеры»";
                questAnswers.thrird.name = "«Последний из могикан»";
                questAnswers.four.name = "«Зверобой»";

                questAnswers.first.value = true;
                questAnswers.second.value = false;
                questAnswers.thrird.value = false;
                questAnswers.four.value = false;
                break;
            case 3:
                questAnswers.first.name = "Росії";
                questAnswers.second.name = "Франції";
                questAnswers.thrird.name = "Великобританії";
                questAnswers.four.name = "Австрії";

                questAnswers.first.value = false;
                questAnswers.second.value = false;
                questAnswers.thrird.value = true;
                questAnswers.four.value = false;
                break;
            case 4:
                questAnswers.first.name = "банкет";
                questAnswers.second.name = "мітинг";
                questAnswers.thrird.name = "аукціон";
                questAnswers.four.name = "молебен";

                questAnswers.first.value = false;
                questAnswers.second.value = false;
                questAnswers.thrird.value = true;
                questAnswers.four.value = false;
                break;
            case 5:
                questAnswers.first.name = "Судан";
                questAnswers.second.name = "Венесуела";
                questAnswers.thrird.name = "Таїланд";
                questAnswers.four.name = "Парагвай";

                questAnswers.first.value = false;
                questAnswers.second.value = false;
                questAnswers.thrird.value = false;
                questAnswers.four.value = true;
                break;
        }
        return questAnswers;
    }
};

var nothingQuestion = {
    question: "Press F5 to start GAME"
};
var nothingAnswer = {
    first: {
        name: " ",
        value: "some text here"
    },
    second: {
        name: " ",
        value: "some text here"
    },
    thrird: {
        name: " ",
        value: "some text here"
    },
    four: {
        name: " ",
        value: "some text here"
    }
}