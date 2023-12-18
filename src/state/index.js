export const state = {
    products: [
        {
            id: 1,
            name: 'Футболка UZcotton мужская',
            color: 'Цвет белый',
            size: 'Размер: 56',
            address: 'Каледино WB',
            companyName: 'OOO Вайлдберриз',
            price: 1051, left: 2, priceWithDiscount: 522, currency: 'сом',
            img: "/img/cart-items/t-shirt.png",
            iconUrl: "/img/delivery/t-shirt-icon.png",
            delivery: {
                1: 2
            }, selected: false,
        },
        {
            id: 2,
            name: 'Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe',
            color: 'Цвет: прозрачный',
            address: 'Каледино WB',

            companyName: 'OOO Вайлдберриз',
            price: 2300047, left: 2, priceWithDiscount: 2100047, currency: 'сом',
            delivery: {
                1: 184,
                2: 66
            }, selected: false,

        },
        {
            id: 3,
            name: 'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные,Faber-Castell',
            address: 'Каледино WB',
            companyName: 'OOO Вайлдберриз',
            price: 494, left: 200, priceWithDiscount: 905, currency: 'сом',
            img: "/img/cart-items/pencils.png",
            iconUrl: "/img/delivery/pencils-icon.png",
            delivery: {
                1: 2
            }, selected: false,

        },
        {
            id: "t-shirt-01-out",
            name: "Футболка UZcotton мужская",
            color: "Цвет: белый",
            size: "56",
            count: 0,
            img: "/img/cart-soldout/t-shirt-out.png"
        }, {
            id: "case-02-out",
            name: "Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe",
            color: "Цвет: прозрачный",
            count: 0,
            img: "/img/cart-soldout/case-out.png"
        }, {
            id: "pencils-03-out",
            name: 'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, Faber-Castell',
            count: 0,
            img: "/img/cart-soldout/pencils-out.png"
        }
    ]
}
