class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this._fetchProducts();//рекомендация, чтобы метод был вызван в текущем классе
        this.render();//вывод товаров на страницу
    };

    _fetchProducts() {
        this.goods = [
            { id: 1, title: 'Notebook', price: 2000 },
            { id: 2, title: 'Mouse', price: 20 },
            { id: 3, title: 'Keyboard', price: 200 },
            { id: 4, title: 'Gamepad', price: 50 },
        ];
    };



    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            block.insertAdjacentHTML("beforeend", item.render());
            //           block.innerHTML += item.render();
        };
    };
    // метод суммирует и возвращает общую стоимость всех товаров которые есть в каталоге 
    sumGoods() {
        // первый способ цикл foreach
        //     let sum = 0;
        //     this.goods.forEach(item => {
        //         sum += (item.price);
        //     });
        //     console.log(`Сумма всех товаров = ${sum}`)
        //     return parseInt(sum);

        // используем метод reduce 
        let result = this.goods.reduce((s, item) => s + item.price, 0);
        alert(`Сумма всех товаров = ${result}`);
    };


};

class ProductItem {
    constructor(product, img = 'https://via.placeholder.com/200x150') {
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = img;
    }
    render() {
        return `<div class="product-item" id =${this.id}>
                <img src="${this.img}">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    };
};

let list = new ProductList();
// вызываем метод sumGoods и выводим сумму стоимости всех товаров
list.sumGoods()

// Создаем класс shoppingCart корзины товаров, который налседуется от класса  ProductList
// этот класс  будет наследовать свойство this.goods, которое хранит массив товаров с названием id ценой и картинкой
class shoppingCart extends ProductList {
    constructor() {
        super()
        this.goods;
    }

    renderCart() {
        // метод будет формирать верстку корзины  
    };

    resultGoodsCart() {
        // метод будет отвечат за подсчет общей суммы заказа
    }

    placeOrderCart() {
        // метод будет отвечать за переход к заказу 
    }

};

// для проверки 
// let test = new shoppingCart;
// test.goods.forEach(itemGoods => console.log(itemGoods.title))
// console.log(test.goods);



// Создаем класс товара корзины, который наследуется от класса ProductList
// этот класс  будет наследовать свойство this.goods которое хранит массив товаров с названием id ценой и картинкой
class goodsCart extends ProductList {
    constructor() {
        super()
        this.goods;
    }

    // Создаем свой метод для класса
    sumGoodsCart() {
        // Метод будет считать какое количество товара пользователь добавил в корзину и умножать его на цену товара,
        //т.е.общую стоимость по конкретному товару.
    }

    deleteGoodsCart() {
        // метод будет отвечать за удаление товара из списка корзины
    }

    increasedGoodsCart() {
        // метод будет отвечать за увелечение количества товара, который уже добавлен в корзину
    }

    reduceGoodsCart() {
        // метод будет отвечать за уменьшение количества товара, который уже добавлен в корзину
    }
}



// предыдущий способ верстки товаров
//const products = [
//    {id: 1, title: 'Notebook', price: 2000},
//    {id: 2, title: 'Mouse', price: 20},
//    {id: 3, title: 'Keyboard', price: 200},
//    {id: 4, title: 'Gamepad', price: 50},
//];
//
//const renderProduct = (product,img='https://placehold.it/200x150') => {
//    return `<div class="product-item">
//                <img src="${img}">
//                <h3>${product.title}</h3>
//                <p>${product.price}</p>
//                <button class="buy-btn">Купить</button>
//            </div>`
//};
//const renderPage = list => document.querySelector('.products').innerHTML = list.map(item => renderProduct(item)).join('');
//
//renderPage(products);