export const fix = {
    listOfFields: [
        {name: 'Устройство', index: 'title'},
        {name: 'Модель', index: 'model'},
        {name: 'Серийный номер', index: 'sn'},
        {name: 'Неисправность', index: 'problem'},
        {name: 'Имя', index: 'name'},
        {name: 'Адрес', index: 'addres'},
        {name: 'id', index: 'id'},
        {name: 'Дата', index: 'date'},
        {name: 'Телефон', index: 'clientTel'},
        {name: 'Номер заказа', index: 'order'} 
    ],
    lists: {
       title: ['Ноутбук', 'ПК', 'Телефон'],
       sn: ['серийный номер неуказан'],
       name: ['Федор', 'Антон'],
       problem: ['не включается', 'не заряжается'],
       addres: ['Сухаревская', 'Лобанка', 'Фёдорова'],
       model: ['ASUS', 'ACER', 'HP', 'Lenovo', 'Dell', 'Huawei'],
       clientTel: ['+375 29', '+375 33', '+375 44', '+375 25']
    },
    searchList: ['5435', '6335', '7544'],
    orderNumbers: {min: 1000, max: 9999}
}