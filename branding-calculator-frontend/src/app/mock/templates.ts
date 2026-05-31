export const templates = [
  {
    id: 1,
    name: 'Визитка',

    image: '/business_card.svg',

    fields: [
      {
        key: 'organization',
        label: 'Организация',
        type: 'text',
        placeholder: 'ЯНАО, Правительство ЯНАО...'
      },
      {
        key: 'fullName',
        label: 'ФИО',
        x: 280, // left
        y: 100, // top
        fontSize: 19,
        placeholder: 'Иванов Иван Иванович'
      },
      {
        key: 'position',
        label: 'Должность',
        x: 280,
        y: 150,
        fontSize: 8,
        placeholder: 'Директор, начальник отдела...'
      },
      {
        key: 'phone',
        label: 'Телефон',
        x: 280,
        y: 190,
        fontSize: 7,
        fontWeight: 500,
        placeholder: '+7 (___) ___-__-__'
      },
      {
        key: 'email',
        label: 'Email',
        x: 280,
        y: 200,
        fontSize: 7,
        color: '#C40E3D',
        placeholder: 'name@yanao.ru'
      },
      {
        key: 'address',
        label: 'Адрес',
        placeholder: 'Салехард, ул. Матросова, 1'
      },
      {
        key: 'city',
        label: 'Населённый пункт',
        placeholder: 'Г. Салехард'
      },
      {
        key: 'date',
        label: 'Дата',
        placeholder: '24 апреля 2018'
      },
      {
        key: 'cover1',
        label: 'Логотип 1',
        type: 'select',
        options: [
          {
            label: 'Без фото',
            value: 'none'
          },
          {
            label: 'Логотип ЯМАЛ (горизонт.)',
            value: 'photo1'
          },
          {
            label: 'Логотип ГАЗПРОМ (горизонт.)',
            value: 'photo2'
          }
        ]
      },
      {
        key: 'cover2',
        label: 'Логотип 2',
        type: 'select',
        options: [
          {
            label: 'Без фото',
            value: 'none'
          },
          {
            label: 'Логотип ЯМАЛ (горизонт.)',
            value: 'photo1'
          },
          {
            label: 'Логотип ГАЗПРОМ (горизонт.)',
            value: 'photo2'
          }
        ]
      },
    ]
  },
  {
    id: 2,

    name: 'Бейдж',

    image: '/badge.svg',

    fields: [

      {
        key: 'event',
        label: 'Название мероприятия',
        type: 'text',
      },

      {
        key: 'fullName',
        label: 'ФИО',
        type: 'text',

        x: 120,
        y: 220,
        fontSize: 24,
      },

      {
        key: 'city',
        label: 'Населенный пункт',
        type: 'text',
      },

      {
        key: 'date',
        label: 'Дата',
        type: 'text',
      },

      {
        key: 'cover',
        label: 'Логотип',
        type: 'select',

        options: [
          {
            label: 'Газпром',
            value: 'photo1'
          },

          {
            label: 'Ямал',
            value: 'photo2'
          }
        ]
      },

      {
        key: 'avatar',
        label: 'Фото человека',
        type: 'file',
      }
    ]
  }
];