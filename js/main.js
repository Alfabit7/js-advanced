const products = [
    { id: 1, title: 'Notebook', price: 2000, img: 'product_1.jpg' },
    { id: 2, title: 'Mouse', price: 20, img: 'product_2.jpg' },
    { id: 3, title: 'Keyboard', price: 200, img: 'product_3.jpg' },
    { id: 4, title: 'Gamepad', price: 50, img: 'product_4.jpg' },
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
// старый renderProduct 
// const renderProduct = (title, price, img) => {
//     return `<div class="product-item">
//                 <img src='./img/${img}' alt =foto_${img} width = 180px; height = 200px>
//                 <h3>${title}</h3>
//                 <p>${price}</p>
//                 <button class="buy-btn">Купить</button>
//             </div>`
// };

// новый рендер 
const renderProduct = (obj) => {
    return `<div class="product-item product-item_${obj.id}">
                <img src='./img/${obj.img}' alt =foto_${obj.img} width = 180px; height = 200px>
                <h3>${obj.title}</h3>
                <p>${obj.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};

//копия рендер конец

const renderPage = list => {
    // в переменную productsList по окончании работы функции renderProduct присваивается массив у которого элементы это разметка каждого товара, поэтому когда мы этот массив вставляем в div с классом .products каждый товар при выводе на экран идет через запятую ,чтобы убрать запятые нужно чтобы в переменную productsList присваивалась одна строка из разметки, чтобы этого добиться мы к полученному масиву productsList применяем метод join и в скобках указываем чем у нас будут разделяться элементы этого массива, в данном случае используем пробел

    // старый вариант
    // const productsList = (list.map(item => renderProduct(item.title, item.price, item.img))).join(' ');

    // новый вариант products передаем не значения свойств объекта а сам объект
    const productsList = (list.map(item => renderProduct(item))).join(' ');
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList;
};

renderPage(products);