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
        group: 'carrier',
        placeholder: 'ЯНАО, Правительство ЯНАО...'
      },
      {
        key: 'fullName',
        label: 'ФИО',
        type: 'text',
        group: 'carrier',
        placeholder: 'Иванов Иван Иванович',

        x: 280,
        y: 100,
        fontSize: 19
      },
      {
        key: 'position',
        label: 'Должность',
        type: 'text',
        group: 'carrier',
        placeholder: 'Директор, начальник отдела...',

        x: 280,
        y: 150,
        fontSize: 8
      },
      {
        key: 'phone',
        label: 'Телефон',
        type: 'text',
        group: 'carrier',
        placeholder: '+7 (___) ___-__-__',

        x: 280,
        y: 190,
        fontSize: 7,
        fontWeight: 500
      },
      {
        key: 'email',
        label: 'Email',
        type: 'text',
        group: 'carrier',
        placeholder: 'name@yanao.ru',

        x: 280,
        y: 200,
        fontSize: 7,
        color: '#C40E3D'
      },
      {
        key: 'address',
        label: 'Адрес',
        type: 'text',
        group: 'carrier',
        placeholder: 'Салехард, ул. Матросова, 1'
      },
      {
        key: 'city',
        label: 'Населённый пункт',
        type: 'text',
        group: 'location',
        placeholder: 'г. Салехард'
      },
      {
        key: 'date',
        label: 'Дата',
        type: 'text',
        group: 'location',
        placeholder: '24 апреля 2025'
      },
      {
        key: 'cover1',
        label: 'Логотип 1',
        type: 'select',
        group: 'logo',
        options: [
          { label: 'Без логотипа', value: 'none' },
          { label: 'Логотип ЯМАЛ', value: 'photo1' },
          { label: 'Логотип ГАЗПРОМ', value: 'photo2' }
        ]
      },
      {
        key: 'cover2',
        label: 'Логотип 2',
        type: 'select',
        group: 'logo',
        options: [
          { label: 'Без логотипа', value: 'none' },
          { label: 'Логотип ЯМАЛ', value: 'photo1' },
          { label: 'Логотип ГАЗПРОМ', value: 'photo2' }
        ]
      }
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
        group: 'carrier',
        placeholder: 'Форум молодёжи Ямала',

        x: 120,
        y: 90,
        fontSize: 22,
        fontWeight: 700
      },
      {
        key: 'field1',
        label: 'Поле 1',
        type: 'text',
        group: 'carrier',
        placeholder: 'ФИО',

        x: 120,
        y: 140,
        fontSize: 16,
        fontWeight: 600
      },
      {
        key: 'field2',
        label: 'Поле 2',
        type: 'text',
        group: 'carrier',
        placeholder: 'Должность',

        x: 120,
        y: 170,
        fontSize: 14,
        fontWeight: 400
      },
      {
        key: 'city',
        label: 'Населённый пункт',
        type: 'text',
        group: 'location',
        placeholder: 'г. Салехард',

        x: 120,
        y: 220,
        fontSize: 12
      },
      {
        key: 'date',
        label: 'Дата',
        type: 'text',
        group: 'location',
        placeholder: '24 апреля 2025',

        x: 120,
        y: 250,
        fontSize: 12
      },
      {
        key: 'cover1',
        label: 'Логотип 1',
        type: 'select',
        group: 'logo',
        options: [
          { label: 'Газпром', value: 'photo1' },
          { label: 'Ямал', value: 'photo2' }
        ]
      },
      {
        key: 'cover2',
        label: 'Логотип 2',
        type: 'select',
        group: 'logo',
        options: [
          { label: 'Газпром', value: 'photo1' },
          { label: 'Ямал', value: 'photo2' }
        ]
      }
    ]
  },
  {
    id: 3,
    name: 'Грамота',
    image: '/certificate.svg',

    fields: [
      {
        key: 'recipientFullName',
        label: 'ФИО получателя',
        type: 'text',
        group: 'carrier',
        placeholder: 'Иванов Иван Иванович',

        x: 120,
        y: 140,
        fontSize: 28,
        fontWeight: 700
      },

      {
        key: 'giverFullName',
        label: 'ФИО вручающего',
        type: 'text',
        group: 'carrier',
        placeholder: 'Петров Пётр Петрович',

        x: 120,
        y: 220,
        fontSize: 16,
        fontWeight: 600
      },

      {
        key: 'giverPosition',
        label: 'Должность вручающего',
        type: 'text',
        group: 'carrier',
        placeholder: 'Директор департамента',

        x: 120,
        y: 250,
        fontSize: 14,
        fontWeight: 400
      },

      {
        key: 'institution',
        label: 'Наименование учреждения',
        type: 'text',
        group: 'carrier',
        placeholder: 'Министерство развития...',

        x: 120,
        y: 280,
        fontSize: 14,
        fontWeight: 400
      },
      {
        key: 'city',
        label: 'Населённый пункт',
        type: 'text',
        group: 'location',
        placeholder: 'г. Салехард',

        x: 120,
        y: 330,
        fontSize: 12
      },

      {
        key: 'date',
        label: 'Дата',
        type: 'text',
        group: 'location',
        placeholder: '24 апреля 2025',

        x: 120,
        y: 340,
        fontSize: 12
      },
      {
        key: 'cover1',
        label: 'Логотип 1',
        type: 'select',
        group: 'logo',
        options: [
          { label: 'Без логотипа', value: 'none' },
          { label: 'Логотип 1', value: 'photo1' },
          { label: 'Логотип 2', value: 'photo2' }
        ]
      },

      {
        key: 'cover2',
        label: 'Логотип 2',
        type: 'select',
        group: 'logo',
        options: [
          { label: 'Без логотипа', value: 'none' },
          { label: 'Логотип 1', value: 'photo1' },
          { label: 'Логотип 2', value: 'photo2' }
        ]
      }
    ]
  },
  {
    id: 4,
    name: 'Бейдж с фото',
    image: '/badgeWithPhoto.svg',

    fields: [
      {
        key: 'event',
        label: 'Название мероприятия',
        type: 'text',
        group: 'carrier',
        placeholder: 'Форум молодёжи',

        x: 120,
        y: 90,
        fontSize: 22,
        fontWeight: 700
      },
      {
        key: 'fullName',
        label: 'ФИО',
        type: 'text',
        group: 'carrier',
        placeholder: 'Иванов Иван',

        x: 120,
        y: 140,
        fontSize: 18,
        fontWeight: 600
      },
      {
        key: 'position',
        label: 'Должность',
        type: 'text',
        group: 'carrier',
        placeholder: 'Менеджер',

        x: 120,
        y: 170,
        fontSize: 14
      },
      {
        key: 'city',
        label: 'Населённый пункт',
        type: 'text',
        group: 'location',
        placeholder: 'г. Салехард',

        x: 120,
        y: 220,
        fontSize: 12
      },
      {
        key: 'date',
        label: 'Дата',
        type: 'text',
        group: 'location',
        placeholder: '24 апреля 2025',

        x: 120,
        y: 250,
        fontSize: 12
      },
      {
        key: 'cover1',
        label: 'Логотип 1',
        type: 'select',
        group: 'logo',
        options: [
          { label: 'Газпром', value: 'photo1' },
          { label: 'Ямал', value: 'photo2' }
        ]
      },
      {
        key: 'cover2',
        label: 'Логотип 2',
        type: 'select',
        group: 'logo',
        options: [
          { label: 'Газпром', value: 'photo1' },
          { label: 'Ямал', value: 'photo2' }
        ]
      },
      {
        key: 'photo',
        label: 'Фото',
        type: 'file',
        group: 'photo'
      }
    ]
  }
];