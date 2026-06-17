export const templates = [
  {
    id: 2,
    name: 'Визитка',
    image: '/business_card_2.svg',
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
        width: 180,
        height: 60
      },
      photo4: {
        width: 180,
        height: 60
      },
      photo5: {
        width: 180,
        height: 60
      },
    },
    exportSize: {
      width: 1150,
      height: 591
    },
    logoPositions: {
      single: {
        x: 75,
        y: 185,
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
      {
        key: 'fullName',
        label: 'Фамилия Имя',
        type: 'text',
        group: 'carrier',
        placeholder: 'Иванов Иван',

        x: 275,
        y: 70,
        fontSize: 24,
        fontWeight: 800,
        visibleInPreview: true,
        formatAsFio: true
      },
      {
        key: 'major',
        label: 'Должность',
        type: 'text',
        group: 'carrier',
        placeholder: 'Директор, начальник отдела...',
        multiline: true,
        width: 210,

        x: 275,
        y: 125,
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
        key: 'secondPhone',
        label: 'Телефон',
        type: 'text',
        group: 'carrier',
        placeholder: '+7 (___) ___-__-__',

        x: 275,
        y: 215,
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
        y: 230,
        fontSize: 14,
        color: '#C40E3D',
        visibleInPreview: true,
        formatAsFio: false
      },
      {
        key: 'cover1',
        label: 'Логотип',
        type: 'select',
        group: 'logo',
        options: [
          { label: 'Без логотипа', value: 'none' },
          { label: 'ЯМАЛ', value: 'photo1' },
        ],
        visibleInPreview: true,
        formatAsFio: false
      },
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
        width: 90,
        height: 50
      },
      photo4: {
        width: 90,
        height: 50
      },
      photo5: {
        width: 90,
        height: 50
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
        x: 60,
        y: 270
      },

      first: {
        x: 15,
        y: 200
      },

      second: {
        x: 15,
        y: 300
      }
    },
    fields: [
      {
        key: 'event',
        label: 'Название мероприятия',
        type: 'text',
        group: 'carrier',
        placeholder: 'Форум молодёжи Ямала',
        visibleInPreview: true,
        color: 'rgba(208, 0, 51, 1)',
        x: 65,
        y: 110,
        fontWeight: 700,
        textAlign: 'center',
        width: 190,
      },
      {
        key: 'field1',
        label: 'Фамилия Имя',
        type: 'text',
        group: 'carrier',
        placeholder: 'Фамилия Имя',
        color: 'rgba(207, 17, 53, 1)',
        x: 160,
        y: 225,
        fontSize: 16,
        fontWeight: 600,
        visibleInPreview: true,
        formatAsFio: true
      },
      {
        key: 'position',
        label: 'Должность',
        type: 'text',
        group: 'carrier',
        placeholder: 'Должность',
        visibleInPreview: true,
        formatAsFio: false,
        x: 70,
        y: 360,
        fontSize: 14,
        fontWeight: 800,
        textAlign: 'center',
        width: 190,
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
        y: 410,
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

        x: 210,
        y: 410,
        fontSize: 10,
        color: 'rgba(255, 255, 255, 1)',
        visibleInPreview: true,
        formatAsFio: false
      },
      {
        key: 'cover1',
        label: 'Логотип',
        type: 'select',
        group: 'logo',
        options: [
          { label: 'Без логотипа', value: 'none' },
          { label: 'ЯМАЛ', value: 'photo1' },
        ],
        visibleInPreview: true,
        formatAsFio: false
      },
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
        height: 40
      },
      photo4: {
        width: 69,
        height: 40
      },
      photo5: {
        width: 69,
        height: 40
      },
    },
    logoPositions: {
      single: {
        x: 110,
        y: 350
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
        width: 140,
        x: 75,
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

        x: 90,
        y: 265,
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
        multiline: true,
        x: 90,
        y: 280,
        width: 120,
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

        x: 90,
        y: 300,
        fontSize: 8,
        fontWeight: 400,
        visibleInPreview: true,
        multiline: true,
        width: 90
      },
      {
        key: 'certificateText',
        label: 'Текст',
        type: 'text',
        group: 'carrier',
        placeholder: '',  
        width: 140,
        x: 75,
        y: 180,
        fontSize: 7,
        fontWeight: 500,
        color: 'rgba(29, 29, 27, 1)',
        visibleInPreview: true,
      },
      {
        key: 'city',
        label: 'Населённый пункт',
        type: 'text',
        group: 'location',
        placeholder: 'г. Салехард',
        formatAsFio: false,
        width: 140,
        textAlign: 'center',
        x: 75,
        y: 365,
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
        textAlign: 'center',
        width: 140,
        x: 75,
        y: 355,
        fontSize: 8,
        color: 'rgba(208, 16, 57, 1)',
        visibleInPreview: true
      },
      {
        key: 'cover1',
        label: 'Логотип',
        type: 'select',
        group: 'logo',
        options: [
          { label: 'Без логотипа', value: 'none' },
          { label: 'ЯМАЛ', value: 'photo1' }
        ],
        visibleInPreview: true,
        formatAsFio: false
      },

    ]
  },
  {
    id: 3,
    name: 'Бейдж с фото',
    image: '/badge_with_photo.svg',
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
        x: 25,
        y: 100
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
      {
        key: 'event',
        label: 'Название мероприятия',
        type: 'text',
        group: 'carrier',
        placeholder: 'Форум молодёжи',
        visibleInPreview: true,
        color: 'rgba(0, 0, 0, 1)',
        x: 23,
        y: 110
      },
      {
        key: 'fullName',
        label: 'Фамилия Имя',
        type: 'text',
        group: 'carrier',
        placeholder: 'Иванов Иван',
        visibleInPreview: true,
        formatAsFio: true,

        x: 80,
        y: 65,
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
        y: 393,
        fontSize: 10,
        color: 'rgba(0, 0, 0, 1)',
        visibleInPreview: true
      },
      {
        key: 'cover1',
        label: 'Логотип',
        type: 'select',
        group: 'logo',
        options: [
          { label: 'Без логотипа', value: 'none' },
          { label: 'ЯМАЛ', value: 'photo1' },
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