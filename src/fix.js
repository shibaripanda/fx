export const fix = {
    listOfFields: [
        {name: 'Манагер', index: 'manager'},
        {name: 'Устройство', index: 'title'},
        {name: 'Модель', index: 'model'},
        {name: 'Серийный номер', index: 'sn'},
        {name: 'Неисправность', index: 'problem'},
        {name: 'Имя', index: 'name'},
        {name: 'Адрес', index: 'addres'},
        {name: 'id', index: 'id'},
        {name: 'Дата', index: 'date'},
        {name: 'Телефон', index: 'clientTel'},
        {name: 'Согласованная стоимость', index: 'cost'},
        {name: 'Номер заказа', index: 'order'},
        {name: 'История', index: 'history'}  
    ],
    lists: {
       title: ['Ноутбук', 'Системный блок', 'Телефон', 'Планшет', 'Монитор', 'Телевизор', 'Картридж'],
       sn: ['бн'],
       name: [],
       problem: ['не включается', 'не заряжается'],
       addres: ['Минск, ул. Сухаревская', 'Минск, ул. Лобанка', 'Минск, ул. Фёдорова', 'Минск, ул. Горецкого'],
       model: ['ASUS', 'ACER', 'HP', 'Lenovo', 'Dell', 'Huawei'],
       clientTel: ['+375 29', '+375 33', '+375 44', '+375 25'],
       manager: ['Мистол Кот', 'Дедуля Пердулёк', 'Бородач Дмитрий']
    },
    searchList: ['5435', '6335', '7544'],
    orderNumbers: {min: 1000, max: 9999}
}