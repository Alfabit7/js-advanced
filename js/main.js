const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

// let getRequest = (url, cb) => {
//     let xhr = new XMLHttpRequest();
//     // window.ActiveXObject -> xhr = new ActiveXObject()
//     xhr.open("GET", url, true);
//     xhr.onreadystatechange = () => {
//         if(xhr.readyState === 4){
//             if(xhr.status !== 200){
//                 console.log('Error');
//             } else {
//                 cb(xhr.responseText);
//             }
//         }
//     };
//     xhr.send();
// };

class ProductsList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];//массив товаров из JSON документа
        this._getProducts()
            .then(data => { //data - объект js
                this.goods = data;
                //                 console.log(data);
                this.render()
            });
    }
    // _fetchProducts(cb) {
    //     getRequest(`${API}/catalogData.json`, (data) => {
    //         this.goods = JSON.parse(data);
    //         console.log(this.goods);
    //         cb();
    //     })
    // }
    _getProducts() {
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });
    }; // _getProducts

    calcSum() {
        return this.allProducts.reduce((accum, item) => accum += item.price, 0);
    };

    render() {// отрисовывает каталог
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItem(product);
            //            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }

    } //  ProductsList render
}; //ProductsList


class ProductItem {
    constructor(product, img = 'https://via.placeholder.com/200x150') {
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
    }
    render() {
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} $</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`
    }
}

let list = new ProductsList();
// console.log(list.allProducts);


/////// класс корзины 

// создаем класс корзины товаров

class ListCart {

    constructor(container = '.cartGoods') {
        this.container = container;
        this.arrGood = [];
        this.getCartList()
            .then(obj => {
                this.arrGood = obj;
                this.render()
            })
    }


    getCartList() {
        return fetch(`${API}/getBasket.json`)
            .then(data => data.json());
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.arrGood.contents) {
            const productObj = new ItemProduct(product)
            block.insertAdjacentHTML('beforeend', productObj.render())
        }
    }


}

class ItemProduct {
    constructor(product) {
        this.price = product.price;
        this.title = product.product_name;
        this.quantity = product.quantity;

    }
    render() {
        return `

        <div class ="goodInCartWrp">
        <div class ="goodInCart">
        <p> ${this.title}</p>
        <p>Quantity: ${this.quantity}</p>
        <p>${this.price} each</p>
        </div>

        <div class ="goodInCartDelete">
        <p>${this.price}</p>
        <button style="background-color: #2f2a2d; color: aliceblue;">X</button>
       
        </div >

        </div>
        `
    }
}


//получаем кнопку корзины
let cartButtonEl = document.querySelector('button');
let countBtn = 0;
cartButtonEl.addEventListener('click', () => {
    countBtn++
    if (countBtn % 2) {
        // добавляем классу .cart класс видимости корзины  cartShow 
        document.querySelector('.cartGoods').classList.add('cartShow')
        let cart = new ListCart;
        cart.getCartList()
    } else {
        document.querySelector('.cartGoods').classList.remove('cartShow')
        document.querySelector('.cartGoods').innerHTML = ''
    }


})


let str = 'Языка JavaScript называется из-за популярности языка Java';
console.log('test@mail.ru'.match(/^[a-z0-9.-_]+@^[a-z0-9.-_]+[a-z]{2,4}$/i));
document.querySelector('.search-fortm').addEventListener('submit', e => {
    e.preventDefault();
    this.filter(document.querySelector('.seracrh-filter').value)
})