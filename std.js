(($, window, document) => { //насколько я понял это анонимные самовызывающиеся функции
    $(() => {

        let wishedIds = [];
        let currentTeamIds = []; //создаються 3 пустых массива с локальной областью видимости
        let applicantsIds = [];

        //parent
        function ProjectMember(data) {  // функция которая принимает параметром объект

            this.name = data.name;
            this.position = data.position; // вытягиваем свойства полученого объекта
            this.contacts = data.contacts;
            this.paymentType = data.paymentType;

        }

        ProjectMember.prototype.getPaymentType = function() {
            console.log(this.paymentType);  // геттер для вывода типаОплаты
        }

        //wished member child
        function WishedMember(data) {

            ProjectMember.call(this, data); //по сути тоже что и первая функция только все свойства мы берем из проджектМембер и присваиваем им свойства полученого объекта

        }

        WishedMember.prototype = Object.create(ProjectMember.prototype); //прототипом вишд станет прототип ПроджектМембер

        WishedMember.prototype.constructor = WishedMember; //правая часть становиться ссылкой на функцию вишдмембер

        WishedMember.prototype.getName = function() {
            console.log(this.name); //геттер для вывода имени
        }

        // current member child
        function CurrentMember(data) {

            ProjectMember.call(this, data); // берем свойства из проджектМембер и присваиваем им полученые данные из объекта дата

        }

        CurrentMember.prototype = Object.create(ProjectMember.prototype); // прототипом каррента стает прототип проджект мембера

        CurrentMember.prototype.constructor = CurrentMember; //ссылка на функцию каррент

        CurrentMember.prototype.getPosition = function() {
            console.log(this.position);  // геттер для вывода должности
        }

        //output

        let wishedMember = new WishedMember({ //создаеться объект с этими свойствами
            name: 'vovo',
            position: 'god developer',
            contacts: '0924586312',
            paymentType: 'both'
        });

        wishedMember.getName(); //вывод свойства объекта
        wishedMember.getPaymentType();//вывод свойства объекта
        console.log(wishedMember); // в фигурных скобках выведуться свойство и значение объекта

        let currentMember = new CurrentMember({
            name: 'daniel',
            position: 'shit developer',
            contacts: '0924586312',
            paymentType: 'equity'
        });
        currentMember.getPosition();
        currentMember.getPaymentType();
        console.log(currentMember)

        // let currentMember = new CurrentMember(defaultMember);
        //
        // currentMember.getPosition();

    });
})(window.jQuery, window, document);
