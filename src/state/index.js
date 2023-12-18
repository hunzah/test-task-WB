// import img from '../../assets/images/card-photo-1.png'

export const state = {

    products: [
        {
            id: 1,
            img: '../../assets/images/card-photo-2.png',
            name: 'Футболка UZcotton мужская',
            color: 'белый',
            size: '56',
            address: 'Каледино WB',
            companyName: 'OOO Вайлдберриз',
            price: '1051', priceWithDiscount: '522', currency: 'сом', count: 1,
            left: 2,

            delivery: {
                1: 2
            }, isFavorite: false
        },
        {
            id: 2,
            img: '../../assets/images/card-photo-1.png',
            name: 'Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe',
            color: 'прозрачный',
            address: 'Каледино WB',
            companyName: 'OOO Вайлдберриз',
            price: '2 300 047', priceWithDiscount: '2 100 047', currency: 'сом', count: 200,
            left: 200,
            delivery: {
                1: 184,
                2: 66
            }, isFavorite: true

        },
        {
            id: 3,
            img: '../../assets/images/card-photo-3.png',
            name: 'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные,Faber-Castell',
            address: 'Каледино WB',
            companyName: 'OOO Вайлдберриз',
            price: '905', priceWithDiscount: '494', currency: 'сом', count: 2,
            left: 2,
            iconUrl: "/img/delivery/pencils-icon.png",
            delivery: {
                1: 2
            }, isFavorite: false

        },
    ],
    notAvailableProducts: [
        {
            id: "not-available-1",
            name: "Футболка UZcotton мужская",
            color: "Цвет: белый",
            size: "56",
            count: 0,
            img: '../../assets/images/card-photo-2.png',
            isFavorite: false
        }, {
            id: "not-available-2",
            name: "Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe",
            color: "Цвет: прозрачный",
            count: 0,
            img: '../../assets/images/card-photo-1.png',
            isFavorite: false
        }, {
            id: "not-available-3",
            name: 'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, Faber-Castell',
            count: 0,
            img: '../../assets/images/card-photo-3.png',
            isFavorite: false
        }
    ]
}
