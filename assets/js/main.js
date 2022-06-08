const products = [
    {
        type: 'phones',
        headers: {
            icon: 'https://didongthongminh.vn/images/products/cat/original/dienthoai_1637510220.svg',
            title: 'ĐIỆN THOẠI ĐÁNG MUA NHẤT',
            menu: {
                items: [
                    'iPhone', 'Samsung', 'Xiaomi', 'Techno', 'Realme', 'Oppo'
                ],
                more_text: 'Xem tất cả 1115 Điện thoại'
            }
        },
        items: [
            {
                name: 'iPhone 11 64GB Chính Hãng VN/A',
                image:  './assets/img/phone/phone1.webp',
                sale_price: '11.690.000 đ',
                price: '17.990.000 đ',
                discount: '35%'
            },
            {
                name: 'iPhone 12 64GB Chính Hãng VN/A',
                image:  './assets/img/phone/phone2.webp',
                sale_price: '15.890.000 đ',
                price: '20.490.000 đ',
                discount: '22%'
            },
            {
                name: 'iPhone 13 Pro Max 128GB Chính hãng VN/A',
                image:  './assets/img/phone/phone3.webp',
                price: '33.990.000 đ',
                sale_price: '28.990.000 đ',
                discount: '15%'
            },
            {
                name: 'Samsung Galaxy S22 Ultra 8GB/128GB Chính hãng',
                image:  './assets/img/phone/phone4.webp',
                price: '30.990.000 đ',
                sale_price: '28.490.000 đ',
                discount: '8%'
            },
            {
                name: 'Samsung Galaxy S22+ 8GB/128GB Chính hãng',
                image:  './assets/img/phone/phone5.webp',
                price: '21.990.000 đ',
                sale_price: '20.290.000 đ',
                discount: '8%'
            },
            {
                name: 'Xiaomi Redmi Note 11S 8GB/128GB Chính hãng',
                image:  './assets/img/phone/phone6.webp',
                price: '6.690.000 đ',
                sale_price: '6.090.000 đ',
                discount: '8%'
            },
            {
                name: 'iPhone 13 128GB Chính Hãng VN/A',
                image:  './assets/img/phone/phone7.webp',
                price: '24.990.000 đ',
                sale_price: '19.890.000 đ',
                discount: '9%'
            },
            {
                name: 'iPhone 13 Pro Max 128GB Xanh Lá - Alpine Green Chính hãng VN/A',
                image:  './assets/img/phone/phone8.webp',
                price: '33.990.000 đ',
                sale_price: '29.890.000 đ',
                discount: '20%'
            },
            {
                name: 'iPhone 11 64GB Chính Hãng VN/A',
                image:  './assets/img/phone/phone1.webp',
                sale_price: '11.690.000 đ',
                price: '17.990.000 đ',
                discount: '15%'
            },
            {
                name: 'iPhone 12 64GB Chính Hãng VN/A',
                image:  './assets/img/phone/phone2.webp',
                sale_price: '15.890.000 đ',
                price: '20.490.000 đ',
                discount: '8%'
            },
            {
                name: 'iPhone 13 Pro Max 128GB Chính hãng VN/A',
                image:  './assets/img/phone/phone3.webp',
                price: '33.990.000 đ',
                sale_price: '28.990.000 đ',
                discount: '8%'
            },
            {
                name: 'iPhone 13 Pro Max 128GB Chính hãng VN/A',
                image:  './assets/img/phone/phone3.webp',
                price: '33.990.000 đ',
                sale_price: '28.990.000 đ',
                discount: '8%'
            }
        ]
    },
    {
        type: 'parts',
        headers: {
            icon: './assets/img/part/icon.svg',
            title: 'PHỤ KIỆN ĐÁNG MUA NHẤT',
            menu: {
                items: [
                    'Tai nghe giá rẻ', 'Tai nghe Samsung', 'Phụ kiện Apple', 'Sạc cáp nhanh', 'Tai nghe'
                ],
                more_text: 'Xem tất cả 378 Phụ kiện'
            }
        },
        items: [
            {
                name: 'Cable Sạc Nhanh DLINE L 1M Type C to Lightning 20W PD',
                image:  './assets/img/part/part1.webp',
                sale_price: '191.000 đ',
                price: '350.000 đ',
                discount: '46%'
            },
            {
                name: 'Tai Nghe Không Dây BWOO DPOD PRO (BW44)',
                image:  './assets/img/part/part2.webp',
                sale_price: '499.000 đ',
                price: '890.000 đ',
                discount: '44%'
            },
            {
                name: 'Tai Nghe Không Dây BWOO DPOD PRO (BW44)',
                image:  './assets/img/part/part3.webp',
                price: '590.000 đ',
                sale_price: '490.000 đ',
                discount: '17%'
            },
            {
                name: 'Tai Nghe Bluetooth True Wireless Samsung Buds Live Chính Hãng',
                image:  './assets/img/part/part4.webp',
                price: '4.490.000 đ',
                sale_price: '1.290.000 đ',
                discount: '71%'
            },
            {
                name: 'Tai Nghe Bluetooth AirPods Pro With Magsafe Charging Case',
                image:  './assets/img/part/part5.webp',
                price: '6.790.000 đ',
                sale_price: '4.580.000 đ',
                discount: '33%'
            },
            {
                name: 'Cable Sạc Nhanh DLINE L 1M Type C to Lightning 20W PD',
                image:  './assets/img/part/part1.webp',
                sale_price: '11.690.000 đ',
                price: '17.990.000 đ',
                discount: '46%'
            },
        ]
    },
    {
        type: 'laptops',
        headers: {
            icon: './assets/img/laptop/icon.svg',
            title: 'LAPTOP ĐÁNG MUA NHẤT',
            menu: {
                items: [
                    'Máy tính apple', 'Macbook cũ 99%'
                ],
                more_text: 'Xem tất cả 40 Phụ kiện'
            }
        },
        items: [
            {
                name: 'Laptop LG gram 2021 17ZD90P-G.AX71A5 17 inch',
                image:  './assets/img/laptop/laptop1.webp',
                sale_price: '28.490.000 đ',
                price: '44.890.000 đ',
                discount: '37%'
            },
            {
                name: 'Laptop LG gram 2021 16Z90P-G.AH73A5 16 inch',
                image:  './assets/img/laptop/laptop2.webp',
                sale_price: '40.600.000 đ',
                price: '48.890.000 đ',
                discount: '17%'
            },
            {
                name: 'Laptop LG gram 2021 16ZD90P-G.AX54A5 16 inch',
                image:  './assets/img/laptop/laptop3.webp',
                price: '39.890.000 đ',
                sale_price: '23.990.000 đ',
                discount: '40%'
            },
            {
                name: 'Laptop LG gram 2021 17ZD90P-G.AX71A5 17 inch',
                image:  './assets/img/laptop/laptop1.webp',
                sale_price: '28.490.000 đ',
                price: '44.890.000 đ',
                discount: '37%'
            },
            {
                name: 'Laptop LG gram 2021 16Z90P-G.AH73A5 16 inch',
                image:  './assets/img/laptop/laptop2.webp',
                sale_price: '40.600.000 đ',
                price: '48.890.000 đ',
                discount: '17%'
            },
            {
                name: 'Laptop LG gram 2021 16ZD90P-G.AX54A5 16 inch',
                image:  './assets/img/laptop/laptop3.webp',
                price: '39.890.000 đ',
                sale_price: '23.990.000 đ',
                discount: '40%'
            },
        ]
    },
    {
        type: 'watches',
        headers: {
            icon: './assets/img/watch/icon.svg',
            title: 'ĐỒNG HỒ ĐÁNG MUA NHẤT',
            menu: {
                items: [
                    'Apple Watch Series 7', 'Apple Watch Series 6', 'Apple Watch SE'
                ],
                more_text: 'Xem tất cả 33 Đồng hồ thông minh'
            }
        },
        items: [
            {
                name: 'Vòng đeo tay thông minh Xiaomi Mi Band 6 - Chính hãng',
                image:  './assets/img/watch/watch1.webp',
                sale_price: '990.000 đ',
                price: '1.290.000 đ',
                discount: '23%'
            },
            {
                name: 'Apple Watch Series 7 45mm GPS Viền nhôm dây cao su đã kích hoạt | Chính hãng VN/A',
                image:  './assets/img/watch/watch2.webp',
                sale_price: '8.100.000 đ',
                price: '8.900.000 đ',
                discount: '10%'
            },
            {
                name: 'Apple Watch Series 6 40mm GPS - Viền nhôm dây cao su – Chính hãng VN/A',
                image:  './assets/img/watch/watch3.webp',
                price: '12.590.000 đ',
                sale_price: '7.350.000 đ',
                discount: '42%'
            },
            {
                name: 'Apple Watch Series 7 45mm GPS Viền nhôm dây cao su | Chính hãng VN/A',
                image:  './assets/img/watch/watch4.webp',
                sale_price: '10.700.000 đ',
                price: '11.290.000 đ',
                discount: '5%'
            },
            {
                name: 'Apple Watch Series 7 41mm GPS Viền nhôm dây cao su | Chính hãng VN/A',
                image:  './assets/img/watch/watch5.webp',
                sale_price: '9.350.000 đ',
                price: '10.990.000 đ',
                discount: '17%'
            },
            {
                name: 'Vòng đeo tay thông minh Xiaomi Mi Band 6 - Chính hãng',
                image:  './assets/img/watch/watch1.webp',
                sale_price: '990.000 đ',
                price: '1.290.000 đ',
                discount: '23%'
            },
        ]
    }
]



$(document).ready(function() {

    // let cart = getListProductFromLocalStorage();
    updateCartQuantity();
    let productListAppeared = Object.assign([], products);
    renderProductListAppeared(productListAppeared);
    
    //add item into cart
    document.querySelectorAll('.body__item').forEach((element) => {
        element.addEventListener('click',(function() {
            const productId = element.attributes.index.value;
            const categoryId = element.parentElement.parentElement.parentElement.parentElement.attributes.index.value;

            tempCart = localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')) : [];
            if (tempCart.length) {
                let alreadyAdded = false;
                for (let i = 0; i < tempCart.length; i++) {
                    if (tempCart[i].productId == productId && tempCart[i].categoryId == categoryId) {
                        tempCart[i].quantity += 1;
                        alreadyAdded = true;
                    }
                }
                if (!alreadyAdded) {
                    tempCart.push({
                        productId,
                        categoryId,
                        quantity: 1
                    });
                }
            } else {
                tempCart.push({
                    productId,
                    categoryId,
                    quantity: 1
                });
            }

            window.localStorage.setItem('carts', JSON.stringify(tempCart));
            updateCartQuantity();

        }));
    })

    //open cart
    $('.menu-right__item.cart').click(() => {
        renderCart();
    });

    // cart clear
    $('.cart-clear').click(() => {
        clearCart();
    });

    //search
    $('.search-btn').click(() => {
        let productList = [];
        for(let i = 0; i < products.length; i++) {
            productList[i] = Object.assign({}, products[i]);
        }
        const keyWord = $('input[name=keyWordSearch]').val();
        if (keyWord) {
            for(let i = 0; i < productList.length; i++) {
                productList[i].items = productList[i].items.filter(item => item.name.toUpperCase().includes(keyWord.toUpperCase()));
            }
        }
        renderProductListAppeared(productList);
    });

    
})

function renderProductListAppeared(products) {
    $('#content').html('');
    products.forEach((product, index) => {

        $('#content').append(`
            <div class="container sub-content ${product.type}" index=${index}>
                <div class="sub-content__header d-flex justify-content-between align-items-center">
                    <div class="header__title d-flex">
                        <div class="icon"
                            style="background-image: url('${product.headers.icon}');">    
                        </div>
                        <div class="text">
                            ${product.headers.title}
                        </div>
                    </div>
                    <div class="header__menu d-flex">
                        <div class="menu__list d-flex"></div>
                        <a href="#" class="menu__more ms-4">
                            ${product.headers.menu.more_text}
                            <i class="fa-solid fa-angle-right"></i>
                        </a>
                    </div>
                </div>
                <div class="sub-content__body">
                    <div class="row">
                    </div>
                </div>
            </div>`
        );

        product.headers.menu.items.forEach(item => {
            $(`.sub-content.${product.type} .menu__list`).append(
                `<div class="list__item">
                    <div class="item-text">${item}</div>
                </div>`
            )
        });

        product.items.forEach((item, index) => {
            $(`.sub-content.${product.type} .sub-content__body .row`).append(`
            
                <div class="col-2">
        
                    <div class="body__item" index=${index}>
        
                        <div class="img mb-3"
                            style="background-image: url('${item.image}')">
                        </div>
        
                        <div class="info d-flex flex-column">
        
                            <div class="name">
                                ${item.name}
                            </div>
        
                            <div class="prices d-flex align-items-end justify-content-between mt-4">
                                <div class="price">
                                    ${item.price}
                                </div>
                                <div class="sale-price">
                                    ${item.sale_price}
                                </div>
                            </div>
                        </div>
        
                        <div class="discount-label">
                            ${item.discount}
                        </div>
        
                    </div>
        
                </div>`
            )
        });

    })
}

function renderCart() {
    const cartList = getListProductFromLocalStorage();
    let totalPayment = 0;
    if (cartList.length) {
        $('#cartModal .modal-body').html('');
        $('#cartModal .cart-total').html('');
        cartList.forEach((product, index) => {
            $('#cartModal .modal-body').append(`
                <div class="cart-item mb-3 mt-3">
                    <div class="cart-item__img" style="background-image: url(${product.image})"></div>
                    <div class="cart-item__name ms-5 me-4">${product.name}</div>
                    <div class="cart-item__price ms-5 me-4">${product.price}</div>
                    <div class="cart-item__sale-price ms-5 me-4">${product.sale_price} (${product.discount})</div>
                    <div class="cart-item__quantity ms-5 me-4">SL: ${product.quantity}</div>
                    <button class="cart-item__delete-btn btn" onclick="removeFromCart(${index}, this)">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>`
            )
            
            totalPayment += getPriceFromPriceText(product.sale_price) * product.quantity;
        }) 

        $('#cartModal .modal-body').after(`
            <div class="cart-total">
                <span class="total-title">Tổng giá trị đơn hàng: </span>
                <span class="total-money">${getMoneyFormatFromPrice(totalPayment)}</span>
            </div>
        `)
    } else clearCart();
}

function getListProductFromLocalStorage() {
    if (window.localStorage.getItem('carts')) {
        const indexList = JSON.parse(window.localStorage.getItem('carts'));
        let result = [];
        for (let i = 0; i < indexList.length; i++) {
            result.push({
                ...products[indexList[i].categoryId].items[indexList[i].productId],
                quantity: indexList[i].quantity
            })
        }
        return result;
    }
    else return [];
}

function getPriceFromPriceText(priceText) {
    let price = priceText.replace(' đ','');
    while (price.indexOf('.') > -1) {
        price = price.replace('.', '');
    }
    return Number.parseInt(price);
}

function getMoneyFormatFromPrice(price) {
    return price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'VND'
    });
}

function updateCartQuantity() {
    if (window.localStorage.getItem('carts')) {
        const indexList = JSON.parse(window.localStorage.getItem('carts'));
        $('.menu-right__item.cart .cart-number').html('(' + indexList.length + ')');
    }
}

function clearCart() {
    window.localStorage.setItem('carts', JSON.stringify([]));
    $('#cartModal .modal-body').html(`<div class="mt-5 mb-5" style="font-size: 14px;margin-left: 300px;">Chưa có gì trong giỏ hàng.</div>`);
    $('#cartModal .cart-total').remove();
    updateCartQuantity();
}

function removeFromCart(index, el) {
    let cartList = JSON.parse(window.localStorage.getItem('carts'));
    if (cartList.length === 1) {
        clearCart();
        updateCartQuantity();
    } else {
        cartList.splice(index, 1);
        window.localStorage.setItem('carts', JSON.stringify(cartList));
        renderCart();
        updateCartQuantity();
    }
}
