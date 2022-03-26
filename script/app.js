
class Hamburger {
    // Метод узнает размер гамбургера и калорийность
    getSize() {
        //получаем ссылку на объект input с тегом checked 
        let sizeEl = document.querySelectorAll('input[name="burger"]:checked')
        //выводим объект NodeList
        // console.log(sizeEl);
        //получаем id размера бургера
        // console.log(sizeEl[0].id + " id бургера");
        //получаем цену бургера
        // console.log(sizeEl[0].dataset.price + " цена бургера");
        //получаем каллории бургера
        // console.log(sizeEl[0].dataset.calories + " калорийность бургера");
        // создаем массив 
        let sizeBurgerArr = [+(sizeEl[0].dataset.price), +(sizeEl[0].dataset.calories)];
        // console.log(sizeBurgerArr);
        return sizeBurgerArr;
    }

    // Метод узнает начинку гамбургера 
    getStuffing() {
        let getStuffingEl = document.querySelectorAll('input[name="topping"]:checked')
        // console.log(getStuffingEl[0].dataset.price + " цена начинки");
        //получаем каллории бургера
        // console.log(getStuffingEl[0].dataset.calories + " калорийность начинки");
        let getStuffingArr = [+getStuffingEl[0].dataset.price, +getStuffingEl[0].dataset.calories];
        // console.log(getStuffingArr);
        return getStuffingArr;
    }

    // Метод получает список топпингов 
    getToppings() {
        // переменная getToppingsEl хранит все выбранные объекты chebox т.е. топпинги со статусом checked
        let getToppingsEl = document.querySelectorAll('input[name="sauce"]:checked');

        // Считаем сумму всех выбранных топпингов
        // переменные sumPriceSauce хранить стоимость  всех выбранных топпингов
        // переменные sumCaloriesSauce хранить калорийность  всех выбранных топпингов
        // переменная arrSauce будет хранить массив из двух элементов sumPriceSauce и sumCaloriesSauce
        let sumPriceSauce = 0;
        let sumCaloriesSauce = 0;
        let arrSauce = [];
        // перебираем массив и в переменные priceSauce caloriesSauce записываем значения стоимости и калорийности 
        for (let itemSauce of getToppingsEl) {
            let priceSauce = +(itemSauce.dataset.price);
            let caloriesSauce = +(itemSauce.dataset.calories);
            //Cчитаем общую стоимость и общий размер каллорий, выбранных топингов и записываем в переменные sumPriceSauce sumCaloriesSauce
            sumPriceSauce += priceSauce;
            sumCaloriesSauce += caloriesSauce;
            // наполняем массив значениями с ценой и калориями выбранных топингов     
            arrSauce = [sumPriceSauce, sumCaloriesSauce];
        }
        // проверяем условия наполнения массива, если масив пустой, значит не выбран не один топпинг, значит возвращаем 0,
        //ИНАЧЕ возвращаем наполнееный массив 
        if (arrSauce.length <= 0) {
            return parseInt(0);
        } else
            return arrSauce;
    }
};



// Создаем новый объект бургер 
let resultBurger = new Hamburger;
// получаем ссылку на кнопку собрать бургер 
let clickBtn = document.querySelector('button');
// функция слушатель клика по кнопке собрать бургер 
clickBtn.addEventListener('click', function () {
    //priceTopping перменная которая хранит стоимость топпинга
    let priceTopping = Number;
    //caloriesTopping переменная которая хранит калорийность топпинга
    let caloriesTopping = Number;
    // условие которое проверяет, что выбран хотябы один топпинг, т.е. в chebox установлен статус checked, если условие true, то коллорийность равна 0 и цена равна 0, ИНАЧЕ считаем коллорийность и цену топпинга
    let notTopping = String;
    if (resultBurger.getToppings() == 0) {
        priceTopping = parseInt(0);
        caloriesTopping = parseInt(0);
        notTopping = "Вы не добавили ни одного топпинга"

    } else
        for (let i = 0; i <= resultBurger.getToppings().length; i++) {
            priceTopping = resultBurger.getToppings()[0];
            caloriesTopping = resultBurger.getToppings()[1];
        }

    // Переменные resultSum  resultCalories суммирует стоимость бургера и каллорийность бургера  
    let resultSum = resultBurger.getSize()[0] + resultBurger.getStuffing()[0] + priceTopping
    let resultCalories = resultBurger.getSize()[1] + resultBurger.getStuffing()[1] + caloriesTopping;
    // получаем ссылку на скрытый блок result_order где будет выводиться товар 
    let showOrder = document.querySelector('.result_order');
    // добавляем скрытому блоку result_order где будет выводиться товар класс show_order который делает блок видимым
    showOrder.classList.add('show_order');
    // условие если не выбран топпинг, сообщаем об этом и выводим результат, ИНАЧЕ выводим результат
    if (caloriesTopping == 0) {
        console.log(`стоимость бургера ${resultSum}  каллорийность бургера равна  ${resultCalories}`)
        console.log(notTopping);
        // в блок .result_order, где будет отображаться итоговый результат стоимости и каллорий  помещаем разметку
        showOrder.innerHTML =
            `<p>Cтоимость бургера ${resultSum}</p><p>Каллорийность бургера равна ${resultCalories}</p>
        <p>${notTopping}</p> <button class ="pay_order">Оплатить заказ</button>`

    } else
        showOrder.innerHTML = `<p>Cтоимость бургера ${resultSum}</p><p>Каллорийность бургера равна ${resultCalories}</p><button class ="pay_order">Оплатить заказ</button>`

    console.log(`стоимость бургера ${resultSum},  каллорийность бургера равна  ${resultCalories}`);
    // получаем ссылку на кнопку оплатить заказа 
    payOrderEl = document.querySelector('.pay_order');
    //назначаем ем слушатель который при клике перейдет на страницу уведомления успешности заказа
    payOrderEl.addEventListener('click', function () {
        onclick = window.location.href = 'successorder.html'
    })

});





