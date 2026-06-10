export const templates = [
  {
    id: 2,
    name: 'Визитка',
    image: '/business_card.svg',
    width: 640,
    height: 355,
    hasPhotoUpload: false,
    hasDesignButtons: true,
    showLocationSettings: false,
    logos: {
      photo1: '/Logotip_Color 9.svg',
      photo2: '/gazprom.svg',
      photo3: '/Новый уренгой_Color.png',
      photo4: '/Ноябрьск_Color.png',
      photo5: '/Салехард_Color.png'
    },
    logoSizes: {
      photo1: {
        width: 148,
        height: 24
      },
      photo2: {
        width: 150,
        height: 77
      },
      photo3: {
        width: 150,
        height: 80
      },
      photo4: {
        width: 150,
        height: 80
      },
      photo5: {
        width: 150,
        height: 80
      },
    },
    exportSize: {
      width: 1150,
      height: 591
    },
    logoPositions: {
      single: {
        x: 50,
        y: 125,
      },

      first: {
        x: 50,
        y: 60
      },

      second: {
        x: 50,
        y: 180
      }
    },
    fields: [
        // { 
        //   key: 'organization',
        //   label: 'Организация',
        //   type: 'text',
        //   group: 'carrier',
        //   placeholder: 'ЯНАО, Правительство ЯНАО...',
        //   visibleInPreview: false
        // },
      {
        key: 'fullName',
        label: 'Фамилия Имя',
        type: 'text',
        group: 'carrier',
        placeholder: 'Иванов Иван',

        x: 275,
        y: 90,
        fontSize: 24,
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

        x: 275,
        y: 155,
        fontSize: 14,
        visibleInPreview: true,
        formatAsFio: false
      },
      {
        key: 'phone',
        label: 'Телефон',
        type: 'text',
        group: 'carrier',
        placeholder: '+7 (___) ___-__-__',

        x: 275,
        y: 200,
        fontSize: 14,
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

        x: 275,
        y: 215,
        fontSize: 14,
        color: '#C40E3D',
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
          { label: 'Газпром', value: 'photo2' },
          { label: 'Новый Уренгой', value: 'photo3' },
          { label: 'Ноябрьск', value: 'photo4' },
          { label: 'Салехард', value: 'photo5' },
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
          { label: 'Новый Уренгой', value: 'photo3' },
          { label: 'Ноябрьск', value: 'photo4' },
          { label: 'Салехард', value: 'photo5' },
        ],
        visibleInPreview: true,
        formatAsFio: false
      }
    ]
  },

  {
    id: 4,
    name: 'Бейдж',
    image: '/badge.svg',
    showLocationSettings: true,
    width: 329,
    height: 464,
    logos: {
      photo1: '/badge_with_photo_1.svg',
      photo2: '/badge_with_photo_2.svg',
      photo3: '/Новый уренгой_Color.png',
      photo4: '/Ноябрьск_Color.png',
      photo5: '/Салехард_Color.png'
    },
    logoSizes: {
      photo1: {
        width: 85,
        height: 55
      },
      photo2: {
        width: 57,
        height: 96
      },
      photo3: {
        width: 85,
        height: 100
      },
      photo4: {
        width: 85,
        height: 100
      },
      photo5: {
        width: 85,
        height: 100
      },
    },
    hasPhotoUpload: false,
    hasDesignButtons: false,
    exportSize: {
      width: 709,
      height: 1063
    },
    logoPositions: {
      single: {
        x: 30,
        y: 220
      },

      first: {
        x: 30,
        y: 200
      },

      second: {
        x: 30,
        y: 300
      }
    },
    fields: [
      // {
      //   key: 'event',
      //   label: 'Название мероприятия',
      //   type: 'text',
      //   group: 'carrier',
      //   placeholder: 'Форум молодёжи Ямала',
      //   visibleInPreview: false
      // },
      {
        key: 'field1',
        label: 'Поле 1',
        type: 'text',
        group: 'carrier',
        placeholder: 'Фамилия Имя',
        color: 'rgba(207, 17, 53, 1)',
        x: 170,
        y: 240,
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
        x: 100,
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

        x: 40,
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

        x: 170,
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
          { label: 'Газпром', value: 'photo2' },
          { label: 'Новый Уренгой', value: 'photo3' },
          { label: 'Ноябрьск', value: 'photo4' },
          { label: 'Салехард', value: 'photo5' },
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
          { label: 'Новый Уренгой', value: 'photo3' },
          { label: 'Ноябрьск', value: 'photo4' },
          { label: 'Салехард', value: 'photo5' },
        ],
        visibleInPreview: true,
        formatAsFio: false
      }
    ]
  },
  {
    id: 5,
    name: 'Грамота',
    image: '/certificate.svg',
    width: 278,
    height: 393,
    hasPhotoUpload: false,
    hasDesignButtons: false,
    showLocationSettings: true,
    exportSize: {
      width: 2480,
      height: 3508
    },
    logos: {
      photo1: '/Logotip_Color 9.svg',
      photo2: '/gazprom.svg',
      photo3: '/Новый уренгой_Color.png',
      photo4: '/Ноябрьск_Color.png',
      photo5: '/Салехард_Color.png'
    },
    logoSizes: {
      photo1: {
        width: 69,
        height: 11
      },
      photo2: {
        width: 65,
        height: 31
      },
      photo3: {
        width: 69,
        height: 60
      },
      photo4: {
        width: 69,
        height: 60
      },
      photo5: {
        width: 69,
        height: 60
      },
    },
    logoPositions: {
      single: {
        x: 70,
        y: 280
      },

      first: {
        x: 20,
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
        label: 'ФИО получателя (в родительном падеже)',
        type: 'text',
        group: 'carrier',
        placeholder: 'Иванову Ивану Ивановичу',

        x: 80,
        y: 120,
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

        x: 85,
        y: 260,
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

        x: 85,
        y: 270,
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

        x: 85,
        y: 280,
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

        x: 115,
        y: 355,
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

        x: 105,
        y: 345,
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
          { label: 'Газпром', value: 'photo2' },
          { label: 'Новый Уренгой', value: 'photo3' },
          { label: 'Ноябрьск', value: 'photo4' },
          { label: 'Салехард', value: 'photo5' },
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
          { label: 'Новый Уренгой', value: 'photo3' },
          { label: 'Ноябрьск', value: 'photo4' },
          { label: 'Салехард', value: 'photo5' },
        ],
        visibleInPreview: true,
        formatAsFio: false
      }
    ]
  },
  {
    id: 3,
    name: 'Бейдж с фото',
    image: '/badgeWithPhoto.svg',
    logos: {
      photo1: '/badge_with_photo_1.svg',
      photo3: '/Новый уренгой_Color.png',
      photo4: '/Ноябрьск_Color.png',
      photo5: '/Салехард_Color.png'
    },
    width: 294,
    height: 455,
    hasPhotoUpload: true,
    hasDesignButtons: false,
    showLocationSettings: true,
    exportSize: {
      width: 709,
      height: 1063
    },
    
    logoPositions: {
      single: {
        x: 0,
        y: 65
      },

      first: {
        x: -5,
        y: 40
      },
      second: {
        x: 45,
        y: 35
      }
    },

    logoSizes: {
      photo1: {
        width: 50,
        height: 40
      },
      photo3: {
        width: 80,
        height: 60
      },
      photo4: {
        width: 80,
        height: 60
      },
      photo5: {
        width: 80,
        height: 60
      },
      
    },
    fields: [
      // {
      //   key: 'event',
      //   label: 'Название мероприятия',
      //   type: 'text',
      //   group: 'carrier',
      //   placeholder: 'Форум молодёжи',
      //   visibleInPreview: false
      // },
      {
        key: 'fullName',
        label: 'Фамилия Имя',
        type: 'text',
        group: 'carrier',
        placeholder: 'Иванов Иван',
        visibleInPreview: true,
        formatAsFio: true,

        x: 110,
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

        x: 25,
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

        x: 25,
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

        x: 25,
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
          { label: 'Новый Уренгой', value: 'photo3' },
          { label: 'Ноябрьск', value: 'photo4' },
          { label: 'Салехард', value: 'photo5' },
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