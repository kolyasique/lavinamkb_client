const clients = [
  {
    id: 1,
    name: 'ООО Мишка',
    contracts: ['2345', '6543A'],
    objects: [
      {
        name: 'Дом', pult: '551440', contract: '2345', status: 'active', city: 'Сыктывкар', address: 'ул. Ленина, д.28, кв.66',
      },
      {
        name: 'Гараж', pult: '876530', contract: '6543A', status: 'active', city: 'Сыктывкар', address: 'ул. Пушкина, д.523, кв.67',
      }],
  },
  {
    id: 2,
    name: 'ИП Панасенков Г.Н.',
    contracts: '228-Б',
    objects: [{
      name: 'Склад', pult: ['137578', '543456'], contract: '228-Б', status: 'in_process',
    }, { name: 'Магаизн', pult: '990440', status: 'finished' }],
  },
  { id: 3, name: 'Физматов А.Н.', objects: [{ name: 'Дача', pult: '664540' }, { name: 'Туалет', pult: '676666' }] },
  { id: 4, name: 'VIKTOR', objects: [{ name: 'Хоз блок', pult: '786440' }, { name: 'Мегамолл', pult: '334567' }] },
  { id: 5, name: 'GENNADY', objects: [{ name: 'Заправка', pult: '765670' }, { name: 'Закусочная', pult: '866678' }] },
  { id: 1, name: 'Vasily', objects: [{ name: 'Дом', pult: '551440' }, { name: 'Гараж', pult: '876530' }] },
  { id: 2, name: 'PETR', objects: [{ name: 'Склад', pult: '137578' }, { name: 'Магаизн', pult: '990440' }] },
  { id: 3, name: 'Vano', objects: [{ name: 'Дача', pult: '664540' }, { name: 'Туалет', pult: '676666' }] },
  { id: 4, name: 'VIKTOR', objects: [{ name: 'Хоз блок', pult: '786440' }, { name: 'Мегамолл', pult: '334567' }] },
  { id: 5, name: 'GENNADY', objects: [{ name: 'Заправка', pult: '765670' }, { name: 'Закусочная', pult: '866678' }] },
  { id: 1, name: 'Vasily', objects: [{ name: 'Дом', pult: '551440' }, { name: 'Гараж', pult: '876530' }] },
  { id: 2, name: 'PETR', objects: [{ name: 'Склад', pult: '137578' }, { name: 'Магаизн', pult: '990440' }] },
  { id: 3, name: 'Vano', objects: [{ name: 'Дача', pult: '664540' }, { name: 'Туалет', pult: '676666' }] },
  { id: 4, name: 'VIKTOR', objects: [{ name: 'Хоз блок', pult: '786440' }, { name: 'Мегамолл', pult: '334567' }] },
  { id: 5, name: 'GENNADY', objects: [{ name: 'Заправка', pult: '765670' }, { name: 'Закусочная', pult: '866678' }] },
  { id: 1, name: 'Vasily', objects: [{ name: 'Дом', pult: '551440' }, { name: 'Гараж', pult: '876530' }] },
  { id: 2, name: 'PETR', objects: [{ name: 'Склад', pult: '137578' }, { name: 'Магаизн', pult: '990440' }] },
  { id: 3, name: 'Vano', objects: [{ name: 'Дача', pult: '664540' }, { name: 'Туалет', pult: '676666' }] },
  { id: 4, name: 'VIKTOR', objects: [{ name: 'Хоз блок', pult: '786440' }, { name: 'Мегамолл', pult: '334567' }] },
  { id: 5, name: 'GENNADY', objects: [{ name: 'Заправка', pult: '765670' }, { name: 'Закусочная', pult: '866678' }] },
];
export default clients;
