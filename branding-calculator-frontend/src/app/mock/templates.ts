export const templates = [
  {
    id: 1,
    name: 'Визитка',
    image: '/business_card.svg',
    width: 640,
    height: 355,
    hasPhotoUpload: false,
    hasDesignButtons: true,
    logoPositions: {
      single: {
        x: 120,
        y: 150
      },

      first: {
        x: 120,
        y: 130
      },

      second: {
        x: 120,
        y: 170
      }
    },
    fields: [
      {
        key: 'organization',
        label: 'Организация',
        type: 'text',
        group: 'carrier',
        placeholder: 'ЯНАО, Правительство ЯНАО...',
        visibleInPreview: false
      },
      {
        key: 'fullName',
        label: 'ФИО',
        type: 'text',
        group: 'carrier',
        placeholder: 'Иванов Иван Иванович',

        x: 345,
        y: 150,
        fontSize: 19,
        fontWeight: 800,
        visibleInPreview: true,
        formatAsFio: true
      },
      {
        key: 'position',
        label: 'Должность',
        type: 'text',
        group: 'carrier',
        placeholder: 'Директор, начальник отдела...',

        x: 345,
        y: 195,
        fontSize: 8,
        visibleInPreview: true,
        formatAsFio: false
      },
      {
        key: 'phone',
        label: 'Телефон',
        type: 'text',
        group: 'carrier',
        placeholder: '+7 (___) ___-__-__',

        x: 345,
        y: 250,
        fontSize: 7,
        fontWeight: 500,
        visibleInPreview: true,
        formatAsFio: false
      },
      {
        key: 'email',
        label: 'Email',
        type: 'text',
        group: 'carrier',
        placeholder: 'name@yanao.ru',

        x: 345,
        y: 290,
        fontSize: 7,
        color: '#C40E3D',
        visibleInPreview: true,
        formatAsFio: false
      },
      {
        key: 'address',
        label: 'Адрес',
        type: 'text',
        group: 'carrier',
        placeholder: 'Салехард, ул. Матросова, 1',
        visibleInPreview: false,
      },
      {
        key: 'city',
        label: 'Населённый пункт',
        type: 'text',
        group: 'location',
        placeholder: 'г. Салехард',
        visibleInPreview: false
      },
      {
        key: 'date',
        label: 'Дата',
        type: 'text',
        group: 'location',
        placeholder: '24 апреля 2025',
        visibleInPreview: false
      },
      {
        key: 'cover1',
        label: 'Логотип 1',
        type: 'select',
        group: 'logo',
        options: [
          { label: 'Без логотипа', value: 'none' },
          { label: 'ЯМАЛ', value: 'photo1' },
          { label: 'Газпром', value: 'photo2' }
        ],
        visibleInPreview: true,
        formatAsFio: false
      },
      {
        key: 'cover2',
        label: 'Логотип 2',
        type: 'select',
        group: 'logo',
        options: [
          { label: 'Без логотипа', value: 'none' },
          { label: 'ЯМАЛ', value: 'photo1' },
          { label: 'Газпром', value: 'photo2' }
        ],
        visibleInPreview: true,
        formatAsFio: false
      }
    ]
  },

  {
    id: 2,
    name: 'Бейдж',
    image: '/badge.svg',

    width: 329,
    height: 464,
    hasPhotoUpload: false,
    hasDesignButtons: false,
    logoPositions: {
      single: {
        x: 50,
        y: 200
      },

      first: {
        x: 50,
        y: 150
      },

      second: {
        x: 50,
        y: 230
      }
    },
    fields: [
      {
        key: 'event',
        label: 'Название мероприятия',
        type: 'text',
        group: 'carrier',
        placeholder: 'Форум молодёжи Ямала',
        visibleInPreview: false
      },
      {
        key: 'field1',
        label: 'Поле 1',
        type: 'text',
        group: 'carrier',
        placeholder: 'ФИО',
        color: 'rgba(207, 17, 53, 1)',
        x: 200,
        y: 200,
        fontSize: 16,
        fontWeight: 600,
        visibleInPreview: true,
        formatAsFio: true
      },
      {
        key: 'field2',
        label: 'Поле 2',
        type: 'text',
        group: 'carrier',
        placeholder: 'Должность',
        visibleInPreview: true,
        formatAsFio: false,
        x: 140,
        y: 360,
        fontSize: 14,
        fontWeight: 800,
        color: 'rgba(207, 17, 53, 1)'
      },
      {
        key: 'city',
        label: 'Населённый пункт',
        type: 'text',
        group: 'location',
        placeholder: 'г. Салехард',
        formatAsFio: false,

        x: 65,
        y: 385,
        fontSize: 10,
        color: 'rgba(255, 255, 255, 1)',
        visibleInPreview: true
      },
      {
        key: 'date',
        label: 'Дата',
        type: 'text',
        group: 'location',
        placeholder: '24 апреля 2025',

        x: 205,
        y: 385,
        fontSize: 10,
        color: 'rgba(255, 255, 255, 1)',
        visibleInPreview: true,
        formatAsFio: false
      },
      {
        key: 'cover1',
        label: 'Логотип 1',
        type: 'select',
        group: 'logo',
        options: [
          { label: 'Без логотипа', value: 'none' },
          { label: 'ЯМАЛ', value: 'photo1' },
          { label: 'Газпром', value: 'photo2' }
        ],
        visibleInPreview: true,
        formatAsFio: false
      },
      {
        key: 'cover2',
        label: 'Логотип 2',
        type: 'select',
        group: 'logo',
        options: [
          { label: 'Без логотипа', value: 'none' },
          { label: 'ЯМАЛ', value: 'photo1' },
          { label: 'Газпром', value: 'photo2' }
        ],
        visibleInPreview: true,
        formatAsFio: false
      }
    ]
  },
  {
    id: 3,
    name: 'Грамота',
    image: '/certificate.svg',
    width: 278,
    height: 393,
    hasPhotoUpload: false,
    hasDesignButtons: false,
    logoPositions: {
      single: {
        x: 100,
        y: 280
      },

      first: {
        x: 50,
        y: 280
      },
      second: {
        x: 140,
        y: 280
      }
    },
    fields: [
      {
        key: 'recipientFullName',
        label: 'ФИО получателя',
        type: 'text',
        group: 'carrier',
        placeholder: 'Иванов Иван Иванович',

        x: 105,
        y: 100,
        fontSize: 14,
        fontWeight: 500,
        color: 'rgba(29, 29, 27, 1)',
        visibleInPreview: true,
        formatAsFio: true
      },

      {
        key: 'giverFullName',
        label: 'ФИО вручающего',
        type: 'text',
        group: 'carrier',
        placeholder: 'Петров Пётр Петрович',

        x: 110,
        y: 255,
        fontSize: 8,
        fontWeight: 600,
        color: 'rgba(208, 16, 57, 1)',
        visibleInPreview: true,
        formatAsFio: false
      },

      {
        key: 'giverPosition',
        label: 'Должность вручающего',
        type: 'text',
        group: 'carrier',
        placeholder: 'Директор департамента',
        formatAsFio: false,

        x: 110,
        y: 265,
        fontSize: 8,
        fontWeight: 400,
        visibleInPreview: true
      },

      {
        key: 'institution',
        label: 'Наименование учреждения',
        type: 'text',
        group: 'carrier',
        formatAsFio: false,
        placeholder: 'Министерство развития...',

        x: 110,
        y: 275,
        fontSize: 8,
        fontWeight: 400,
        visibleInPreview: true
      },
      {
        key: 'city',
        label: 'Населённый пункт',
        type: 'text',
        group: 'location',
        placeholder: 'г. Салехард',
        formatAsFio: false,

        x: 140,
        y: 345,
        fontSize: 8,
        color: 'rgba(208, 16, 57, 1)',
        visibleInPreview: true
      },

      {
        key: 'date',
        label: 'Дата',
        type: 'text',
        group: 'location',
        placeholder: '24 апреля 2025',
        formatAsFio: false,

        x: 130,
        y: 330,
        fontSize: 8,
        color: 'rgba(208, 16, 57, 1)',
        visibleInPreview: true
      },
      {
        key: 'cover1',
        label: 'Логотип 1',
        type: 'select',
        group: 'logo',
        options: [
          { label: 'Без логотипа', value: 'none' },
          { label: 'ЯМАЛ', value: 'photo1' },
          { label: 'Газпром', value: 'photo2' }
        ],
        visibleInPreview: true,
        formatAsFio: false
      },
      {
        key: 'cover2',
        label: 'Логотип 2',
        type: 'select',
        group: 'logo',
        options: [
          { label: 'Без логотипа', value: 'none' },
          { label: 'ЯМАЛ', value: 'photo1' },
          { label: 'Газпром', value: 'photo2' },
        ],
        visibleInPreview: true,
        formatAsFio: false
      }
    ]
  },
  {
    id: 4,
    name: 'Бейдж с фото',
    image: '/badgeWithPhoto.svg',
    width: 294,
    height: 455,
    hasPhotoUpload: true,
    hasDesignButtons: false,
    logoPositions: {
      single: {
        x: 30,
        y: 30
      },

      first: {
        x: 30,
        y: 10
      },
      second: {
        x: 30,
        y: 50
      }
    },
    fields: [
      {
        key: 'event',
        label: 'Название мероприятия',
        type: 'text',
        group: 'carrier',
        placeholder: 'Форум молодёжи',
        visibleInPreview: false
      },
      {
        key: 'fullName',
        label: 'ФИО',
        type: 'text',
        group: 'carrier',
        placeholder: 'Иванов Иван',
        visibleInPreview: true,
        formatAsFio: true,

        x: 140,
        y: 80,
        fontSize: 14,
        fontWeight: 600,
        color: 'rgba(207, 17, 53, 1)'
      },
      {
        key: 'position',
        label: 'Должность',
        type: 'text',
        group: 'carrier',
        placeholder: 'Менеджер',
        visibleInPreview: true,
        formatAsFio: false,

        x: 55,
        y: 350,
        fontSize: 14,
        color: 'rgba(207, 17, 53, 1)'
      },
      {
        key: 'city',
        label: 'Населённый пункт',
        type: 'text',
        group: 'location',
        placeholder: 'г. Салехард',
        visibleInPreview: true,
        formatAsFio: false,

        x: 55,
        y: 380,
        fontSize: 10,
        color: 'rgba(0, 0, 0, 1)'
      },
      {
        key: 'date',
        label: 'Дата',
        type: 'text',
        group: 'location',
        placeholder: '24 апреля 2025',
        formatAsFio: false,

        x: 55,
        y: 390,
        fontSize: 10,
        color: 'rgba(0, 0, 0, 1)',
        visibleInPreview: true
      },
      {
        key: 'cover1',
        label: 'Логотип 1',
        type: 'select',
        group: 'logo',
        options: [
          { label: 'Без логотипа', value: 'none' },
          { label: 'ЯМАЛ', value: 'photo1' },
          { label: 'Газпром', value: 'photo2' }
        ],
        visibleInPreview: true,
        formatAsFio: false,
      },
      {
        key: 'cover2',
        label: 'Логотип 2',
        type: 'select',
        group: 'logo',
        options: [
          { label: 'Без логотипа', value: 'none' },
          { label: 'ЯМАЛ', value: 'photo1' },
          { label: 'Газпром', value: 'photo2' }
        ],
        visibleInPreview: true,
        formatAsFio: false,
      },
      {
        key: 'photo',
        label: 'Фото',
        type: 'file',
        group: 'photo',
        x: 20,
        y: 210
      }
    ]
  }
];