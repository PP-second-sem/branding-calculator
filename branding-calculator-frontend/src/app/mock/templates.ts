export const templates = [
  {
    id: 1,
    name: 'Грамота',

    image: '/business_card.svg',

    fields: [
      {
        key: 'cover',
        label: 'Обложка',
        type: 'select',
        options: [
          {
            label: 'Без фото',
            value: 'none'
          },
          {
            label: 'Фото 1',
            value: 'photo1'
          },
          {
            label: 'Фото 2',
            value: 'photo2'
          }
        ]
      },
      {
        key: 'fullName',
        label: 'ФИО',
        x: 280, // left
        y: 100, // top
        fontSize: 19,
      },
      {
        key: 'position',
        label: 'Должность',
        x: 280,
        y: 150,
        fontSize: 8,
      },
      {
        key: 'team',
        label: 'команда',
        x: 280,
        y: 180,
        fontSize: 7,
        fontWeight: 400,
        color: '#999999',
      },
      {
        key: 'phone',
        label: 'Телефон',
        x: 280,
        y: 190,
        fontSize: 7,
        fontWeight: 500,

      },
      {
        key: 'email',
        label: 'Email',
        x: 280,
        y: 200,
        fontSize: 7,
        color: '#C40E3D',
      }

    ]
  }
];