import { Layout } from "../../../models/layout.model";

export const layouts: Layout[] = [
  {
    name: 'Визитки',
    icon: 'businessCardIcon.svg',
    templates : [
    {
      id: 1,
      preview: 'business_card_1.svg',
      filledPreview: 'filled_business_card_1.svg',
      textFields: [
      {
        id: 'fullName',
        type: 'fullName',
        x: 290,
        y: 95,
        width: 500,
        fontSize: 26,
        fontWeight: 700
      },
      {
        id: 'position',
        type: 'position',
        x: 290,
        y: 180,
        width: 500,
        fontSize: 14,
        fontWeight: 400
      },
      {
        id: 'phone',
        type: 'phone',
        x: 135,
        y: 349,
        width: 500,
        fontSize: 14,
        fontWeight: 400
      },
      {
        id: 'mobilePhone',
        type: 'mobilePhone',
        x: 173,
        y: 377,
        width: 500,
        fontSize: 14,
        fontWeight: 400
      },
      {
        id: 'email',
        type: 'email',
        x: 153,
        y: 404,
        width: 500,
        fontSize: 14,
        fontWeight: 400
      },
      {
        id: 'address',
        type: 'address',
        x: 485,
        y: 350,
        width: 300,
        fontSize: 12,
        fontWeight: 400
      },],
      qrCodes:
      [{
        x: 750,
        y: 180,
        size: 89,
        labelFontSize: 13,
      },
      {
        x: 750,
        y: 325,
        size: 89,
        labelFontSize: 13,
      }],
      data: {
        fullName: '',
        position: '',
        phone: '',
        mobilePhone: '',
        email: '',
        address: '',
        qrCode1: '',
        qrCode1Label: '',
        qrCode2: '',
        qrCode2Label: '',
        qrCodesGenerated: false,
        qrCode2Enabled: false
      }
    },
    {
      id: 2,
      preview: 'business_card_2.svg',
      filledPreview: 'filled_business_card_2.svg',
      textFields: [
      {
        id: 'fullName',
        type: 'fullName',
        x: 359,
        y: 75,
        width: 500,
        fontSize: 22,
        fontWeight: 700
      },
      {
        id: 'position',
        type: 'position',
        x: 359,
        y: 150,
        width: 100,
        fontSize: 16,
        fontWeight: 700
      },
      {
        id: 'phone',
        type: 'phone',
        x: 400,
        y: 270,
        width: 500,
        fontSize: 15,
        fontWeight: 400
      },
      {
        id: 'mobilePhone',
        type: 'mobilePhone',
        x: 440,
        y: 293,
        width: 500,
        fontSize: 15,
        fontWeight: 400
      },
      {
        id: 'email',
        type: 'email',
        x: 415,
        y: 315,
        width: 500,
        fontSize: 15,
        fontWeight: 400
      },
      {
        id: 'address',
        type: 'address',
        x: 359,
        y: 370,
        width: 300,
        fontSize: 11,
        fontWeight: 400
      },],
      qrCodes:
      [
        {
          x: 725,
          y: 180,
          size: 93,
          labelFontSize: 12,
        },
        {
          x: 725,
          y: 320,
          size: 93,
          labelFontSize: 12,
        }
      ],
      data: {
        fullName: '',
        position: '',
        phone: '',
        mobilePhone: '',
        email: '',
        address: '',
        qrCode1: '',
        qrCode1Label: '',
        qrCode2: '',
        qrCode2Label: '',
        qrCodesGenerated: false,
        qrCode2Enabled: false
      }
    },
    {
      id: 3,
      preview: 'business_card_3.svg',
      filledPreview: 'filled_business_card_3.svg',
      textFields: [
      {
        id: 'fullName',
        type: 'fullName',
        x: 160,
        y: 60,
        width: 500,
        fontSize: 33,
        fontWeight: 700
      },
      {
        id: 'position',
        type: 'position',
        x: 60,
        y: 190,
        width: 500,
        fontSize: 16,
        fontWeight: 400
      },
      {
        id: 'phone',
        type: 'phone',
        x: 95,
        y: 376,
        width: 500,
        fontSize: 13,
        fontWeight: 400
      },
      {
        id: 'mobilePhone',
        type: 'mobilePhone',
        x: 125,
        y: 399,
        width: 500,
        fontSize: 13,
        fontWeight: 400
      },
      {
        id: 'email',
        type: 'email',
        x: 105,
        y: 420,
        width: 500,
        fontSize: 13,
        fontWeight: 400
      },
      {
        id: 'address',
        type: 'address',
        x: 280,
        y: 376,
        width: 300,
        fontSize: 13,
        fontWeight: 400
      },],
      qrCodes:[
        {
          x: 660,
          y: 380,
          size: 75,
          labelFontSize: 9,
        },
        {
          x: 765,
          y: 380,
          size: 75,
          labelFontSize: 9,
        }
      ],
      data: {
        fullName: '',
        position: '',
        phone: '',
        mobilePhone: '',
        email: '',
        address: '',
        qrCode1: '',
        qrCode1Label: '',
        qrCode2: '',
        qrCode2Label: '',
        qrCodesGenerated: false,
        qrCode2Enabled: false
      }
    },
    {
      id: 4,
      preview: 'business_card_4.svg',
      filledPreview: 'filled_business_card_4.svg',
      textFields: [
      {
        id: 'fullName',
        type: 'fullName',
        x: 90,
        y: 55,
        width: 100,
        fontSize: 14,
        fontWeight: 700
      },
      {
        id: 'position',
        type: 'position',
        x: 110,
        y: 100,
        width: 60,
        fontSize: 9,
        fontWeight: 400
      },
      {
        id: 'phone',
        type: 'phone',
        x: 85,
        y: 350,
        width: 500,
        fontSize: 9,
        fontWeight: 400
      },
      {
        id: 'mobilePhone',
        type: 'mobilePhone',
        x: 105,
        y: 374,
        width: 500,
        fontSize: 9,
        fontWeight: 400
      },
      {
        id: 'email',
        type: 'email',
        x: 90,
        y: 397,
        width: 500,
        fontSize: 9,
        fontWeight: 400
      },
      {
        id: 'address',
        type: 'address',
        x: 58,
        y: 420,
        width: 500,
        fontSize: 9,
        fontWeight: 400
      },],
      qrCodes:[
      {
        x: 60,
        y: 200,
        size: 62,
        labelFontSize: 8,
      },
      {
        x: 152,
        y: 200,
        size: 62,
        labelFontSize: 8,
      }],
      data: {
        fullName: '',
        position: '',
        phone: '',
        mobilePhone: '',
        email: '',
        address: '',
        qrCode1: '',
        qrCode1Label: '',
        qrCode2: '',
        qrCode2Label: '',
        qrCodesGenerated: false,
        qrCode2Enabled: false
      }
    },
  ]},
  {
    name: 'Афиши',
    icon: 'posterIcon.svg',
    templates : [
      {
        id: 1,
        preview: 'bictor.png',
        filledPreview: 'filled_business_card_1.svg',
        textFields: [],
        qrCodes:[
          {
            x: 720,
            y: 320,
            size: 120,
            labelFontSize: 6,
          },
          {
            x: 720,
            y: 150,
            size: 120,
            labelFontSize: 6,
          }
        ]
      },
      {
        id: 2,
        preview: 'bictor.png',
        filledPreview: 'filled_business_card_1.svg',
        textFields: [],
        qrCodes:[
          {
            x: 720,
            y: 320,
            size: 120,
            labelFontSize: 6,
          },
          {
            x: 720,
            y: 150,
            size: 120,
            labelFontSize: 6,
          }
        ]
      },
      {
        id: 3,
        preview: 'bictor.png',
        filledPreview: 'filled_business_card_1.svg',
        textFields: [],
        qrCodes:[
          {
            x: 720,
            y: 320,
            size: 120,
            labelFontSize: 6,
          },
          {
            x: 720,
            y: 150,
            size: 120,
            labelFontSize: 6,
          }
        ]
      }
    ]
  },
  {
    name: 'Буклет',
    icon: 'bookletIcon.svg',
    templates : [
      {
        id: 1,
        preview: 'templates/announcement-1.png',
        filledPreview: 'filled_business_card_1.svg',
        textFields: [],
        qrCodes:[
          {
            x: 720,
            y: 320,
            size: 120,
            labelFontSize: 6,
          },
          {
            x: 720,
            y: 150,
            size: 120,
            labelFontSize: 6,
          }
        ]
      },
      {
        id: 2,
        preview: 'templates/announcement-2.png',
        filledPreview: 'filled_business_card_1.svg',
        textFields: [],
        qrCodes:[
          {
            x: 720,
            y: 320,
            size: 120,
            labelFontSize: 6,
          },
          {
            x: 720,
            y: 150,
            size: 120,
            labelFontSize: 6,
          }
        ]
      },
      {
        id: 3,
        preview: 'templates/announcement-3.png',
        filledPreview: 'filled_business_card_1.svg',
        textFields: [],
        qrCodes:[
          {
            x: 720,
            y: 320,
            size: 120,
            labelFontSize: 6,
          },
          {
            x: 720,
            y: 150,
            size: 120,
            labelFontSize: 6,
          }
        ]
      }
    ]
  },
  {
    name: 'Аншлаги',
    icon: 'soldoutIcon.svg',
    templates : [
      {
        id: 1,
        preview: 'templates/announcement-1.png',
        filledPreview: 'filled_business_card_1.svg',
        textFields: [],
        qrCodes:[
          {
            x: 720,
            y: 320,
            size: 120,
            labelFontSize: 6,
          },
          {
            x: 720,
            y: 150,
            size: 120,
            labelFontSize: 6,
          }
        ]
      },
      {
        id: 2,
        preview: 'templates/announcement-2.png',
        filledPreview: 'filled_business_card_1.svg',
        textFields: [],
        qrCodes:[
          {
            x: 720,
            y: 320,
            size: 120,
            labelFontSize: 6,
          },
          {
            x: 720,
            y: 150,
            size: 120,
            labelFontSize: 6,
          }
        ]
      },
      {
        id: 3,
        preview: 'templates/announcement-3.png',
        filledPreview: 'filled_business_card_1.svg',
        textFields: [],
        qrCodes:[
          {
            x: 720,
            y: 320,
            size: 120,
            labelFontSize: 6,
          },
          {
            x: 720,
            y: 150,
            size: 120,
            labelFontSize: 6,
          }
        ]
      }
    ]
  },
  {
    name: 'Дипломы',
    icon: 'diplomasIcon.svg',
    templates : [
      {
        id: 1,
        preview: 'diploma.svg',
        filledPreview: 'filled_business_card_1.svg',
        textFields: [],
        qrCodes:[
          {
            x: 720,
            y: 320,
            size: 120,
            labelFontSize: 6,
          },
          {
            x: 720,
            y: 150,
            size: 120,
            labelFontSize: 6,
          }
        ]
      },
      {
        id: 2,
        preview: 'templates/announcement-2.png',
        filledPreview: 'filled_business_card_1.svg',
        textFields: [],
        qrCodes:[
          {
            x: 720,
            y: 320,
            size: 120,
            labelFontSize: 6,
          },
          {
            x: 720,
            y: 150,
            size: 120,
            labelFontSize: 6,
          }
        ]
      },
      {
        id: 3,
        preview: 'templates/announcement-3.png',
        filledPreview: 'filled_business_card_1.svg',
        textFields: [],
        qrCodes:[
          {
            x: 720,
            y: 320,
            size: 120,
            labelFontSize: 6,
          },
          {
            x: 720,
            y: 150,
            size: 120,
            labelFontSize: 6,
          }
        ]
      }
    ]
  },
  {
    name: 'Листовки',
    icon: 'flyerIcon.svg',
    templates : [
      {
        id: 1,
        preview: 'templates/announcement-1.png',
        filledPreview: 'filled_business_card_1.svg',
        textFields: [],
        qrCodes:[
          {
            x: 720,
            y: 320,
            size: 120,
            labelFontSize: 6,
          },
          {
            x: 720,
            y: 150,
            size: 120,
            labelFontSize: 6,
          }
        ]
      },
      {
        id: 2,
        preview: 'templates/announcement-2.png',
        filledPreview: 'filled_business_card_1.svg',
        textFields: [],
        qrCodes:[
          {
            x: 720,
            y: 320,
            size: 120,
            labelFontSize: 6,
          },
          {
            x: 720,
            y: 150,
            size: 120,
            labelFontSize: 6,
          }
        ]
      },
      {
        id: 3,
        preview: 'templates/announcement-3.png',
        filledPreview: 'filled_business_card_1.svg',
        textFields: [],
        qrCodes:[
          {
            x: 720,
            y: 320,
            size: 120,
            labelFontSize: 6,
          },
          {
            x: 720,
            y: 150,
            size: 120,
            labelFontSize: 6,
          }
        ]
      }
    ]
  },
  {
    name: 'Обложка для соцсетей',
    icon: 'socialMediaCoverIcon.svg',
    templates : [
      {
        id: 1,
        preview: 'templates/announcement-1.png',
        filledPreview: 'filled_business_card_1.svg',
        textFields: [],
        qrCodes:[
          {
            x: 720,
            y: 320,
            size: 120,
            labelFontSize: 6,
          },
          {
            x: 720,
            y: 150,
            size: 120,
            labelFontSize: 6,
          }
        ]
      },
      {
        id: 2,
        preview: 'templates/announcement-2.png',
        filledPreview: 'filled_business_card_1.svg',
        textFields: [],
        qrCodes:[
          {
            x: 720,
            y: 320,
            size: 120,
            labelFontSize: 6,
          },
          {
            x: 720,
            y: 150,
            size: 120,
            labelFontSize: 6,
          }
        ]
      },
      {
        id: 3,
        preview: 'templates/announcement-3.png',
        filledPreview: 'filled_business_card_1.svg',
        textFields: [],
        qrCodes:[
          {
            x: 720,
            y: 320,
            size: 120,
            labelFontSize: 6,
          },
          {
            x: 720,
            y: 150,
            size: 120,
            labelFontSize: 6,
          }
        ]
      }
    ]
  },
  {
    name: 'Оформление постов',
    icon: 'postFormattingIcon.svg',
    templates : [
      {
        id: 1,
        preview: 'templates/announcement-1.png',
        filledPreview: 'filled_business_card_1.svg',
        textFields: [],
        qrCodes:[
          {
            x: 720,
            y: 320,
            size: 120,
            labelFontSize: 6,
          },
          {
            x: 720,
            y: 150,
            size: 120,
            labelFontSize: 6,
          }
        ]
      },
      {
        id: 2,
        preview: 'templates/announcement-2.png',
        filledPreview: 'filled_business_card_1.svg',
        textFields: [],
        qrCodes:[
          {
            x: 720,
            y: 320,
            size: 120,
            labelFontSize: 6,
          },
          {
            x: 720,
            y: 150,
            size: 120,
            labelFontSize: 6,
          }
        ]
      },
      {
        id: 3,
        preview: 'templates/announcement-3.png',
        filledPreview: 'filled_business_card_1.svg',
        textFields: [],
        qrCodes:[
          {
            x: 720,
            y: 320,
            size: 120,
            labelFontSize: 6,
          },
          {
            x: 720,
            y: 150,
            size: 120,
            labelFontSize: 6,
          }
      ]
      }
    ]
  },
  {
    name: 'Пригласительные',
    icon: 'inviteIcon.svg',
    templates : [
      {
        id: 1,
        preview: 'templates/announcement-1.png',
        filledPreview: 'filled_business_card_1.svg',
        textFields: [],
        qrCodes:[
          {
            x: 720,
            y: 320,
            size: 120,
            labelFontSize: 6,
          },
          {
            x: 720,
            y: 150,
            size: 120,
            labelFontSize: 6,
          }
        ]
      },
      {
        id: 2,
        preview: 'templates/announcement-2.png',
        filledPreview: 'filled_business_card_1.svg',
        textFields: [],
        qrCodes:[
          {
            x: 720,
            y: 320,
            size: 120,
            labelFontSize: 6,
          },
          {
            x: 720,
            y: 150,
            size: 120,
            labelFontSize: 6,
          }
        ]
      },
      {
        id: 3,
        preview: 'templates/announcement-3.png',
        filledPreview: 'filled_business_card_1.svg',
        textFields: [],
        qrCodes:[
          {
            x: 720,
            y: 320,
            size: 120,
            labelFontSize: 6,
          },
          {
            x: 720,
            y: 150,
            size: 120,
            labelFontSize: 6,
          }
        ]
      }
    ]
  },
  {
    name: 'Ролл-апы',
    icon: 'rollUpsIcon.svg',
    templates : [
      {
        id: 1,
        preview: 'templates/announcement-1.png',
        filledPreview: 'filled_business_card_1.svg',
        textFields: [],
        qrCodes:[
          {
            x: 720,
            y: 320,
            size: 120,
            labelFontSize: 6,
          },
          {
            x: 720,
            y: 150,
            size: 120,
            labelFontSize: 6,
          }
        ]
      },
      {
        id: 2,
        preview: 'templates/announcement-2.png',
        filledPreview: 'filled_business_card_1.svg',
        textFields: [],
        qrCodes:[
          {
            x: 720,
            y: 320,
            size: 120,
            labelFontSize: 6,
          },
          {
            x: 720,
            y: 150,
            size: 120,
            labelFontSize: 6,
          }
        ]
      },
      {
        id: 3,
        preview: 'templates/announcement-3.png',
        filledPreview: 'filled_business_card_1.svg',
        textFields: [],
        qrCodes:[
          {
            x: 720,
            y: 320,
            size: 120,
            labelFontSize: 6,
          },
          {
            x: 720,
            y: 150,
            size: 120,
            labelFontSize: 6,
          }
        ]
      }
    ]
  },
  {
    name: 'Сертификаты',
    icon: 'certificates.svg',
    templates : [
      {
        id: 1,
        preview: 'templates/announcement-1.png',
        filledPreview: 'filled_business_card_1.svg',
        textFields: [],
        qrCodes:[
          {
            x: 720,
            y: 320,
            size: 120,
            labelFontSize: 6,
          },
          {
            x: 720,
            y: 150,
            size: 120,
            labelFontSize: 6,
          }
        ]
      },
      {
        id: 2,
        preview: 'templates/announcement-2.png',
        filledPreview: 'filled_business_card_1.svg',
        textFields: [],
        qrCodes:[
          {
            x: 720,
            y: 320,
            size: 120,
            labelFontSize: 6,
          },
          {
            x: 720,
            y: 150,
            size: 120,
            labelFontSize: 6,
          }
        ]
      },
      {
        id: 3,
        preview: 'templates/announcement-3.png',
        filledPreview: 'filled_business_card_1.svg',
        textFields: [],
        qrCodes:[
          {
            x: 720,
            y: 320,
            size: 120,
            labelFontSize: 6,
          },
          {
            x: 720,
            y: 150,
            size: 120,
            labelFontSize: 6,
          }
        ]
      }
    ]
  },
  {
    name: 'Бейджи',
    icon: 'badgeIcon.svg',
    templates : [
      {
        id: 1,
        preview: 'badge_1.svg',
        filledPreview: 'filled_badge_1.svg',
        splitPatronymic: true,
        textFields: [
          {
            id: 'fullName',
            type: 'fullName',
            x: -90,
            y: 300,
            width: 500,
            fontSize: 23,
            fontWeight: 400,
            color: 'rgba(231, 75, 31, 1)',
          },
          {
            id: 'position',
            type: 'position',
            x: -90,
            y: 380,
            color: 'rgba(231, 75, 31, 1)',
            width: 500,
            fontSize: 12,
            fontWeight: 400
          },
          {
            id: 'place',
            type: 'city',
            x: 70,
            y: 440,
            width: 500,
            fontSize: 12,
            fontWeight: 500,
            color: 'rgba(231, 75, 31, 1)',
          },
          {
            id: 'date',
            type: 'date',
            x: 170,
            y: 440,
            width: 500,
            fontSize: 12,
            fontWeight: 500,
            color: 'rgba(231, 75, 31, 1)',
          },],
        },
      {
        id: 2,
        preview: 'badge_2.svg',
        filledPreview: 'filled_badge_2.svg',
        splitPatronymic: true,
        textFields: [
          {
            id: 'fullName',
            type: 'fullName',
            x: -90,
            y: 300,
            width: 500,
            fontSize: 23,
            fontWeight: 400,
            color: 'rgba(231, 75, 31, 1)',
          },
          {
            id: 'position',
            type: 'position',
            x: -90,
            y: 380,
            color: 'rgba(231, 75, 31, 1)',
            width: 500,
            fontSize: 12,
            fontWeight: 400
          },
          {
            id: 'place',
            type: 'city',
            x: 70,
            y: 440,
            width: 500,
            fontSize: 12,
            fontWeight: 500,
            color: 'rgba(231, 75, 31, 1)',
          },
          {
            id: 'date',
            type: 'date',
            x: 170,
            y: 440,
            width: 500,
            fontSize: 12,
            fontWeight: 500,
            color: 'rgba(231, 75, 31, 1)',
          },
        ]
      },
      {
        id: 3,
        preview: 'badge_3.svg',
        filledPreview: 'filled_badge_3.svg',
        textFields: [
            {
            id: 'fullName',
            type: 'fullName',
            x: 145,
            y: 195,
            width: 80,
            fontSize: 15,
            fontWeight: 400,
            color: 'rgba(207, 19, 59, 1)',
          },
          {
            id: 'position',
            type: 'position',
            x: 145,
            y: 237,
            color: 'rgba(207, 19, 59, 1)',
            width: 500,
            fontSize: 9,
            fontWeight: 500
          },
          {
            id: 'place',
            type: 'city',
            x: 120,
            y: 450,
            width: 60,
            fontSize: 10,
            fontWeight: 500,
            color: 'rgba(243, 242, 232, 1)',
          },
          {
            id: 'date',
            type: 'date',
            x: 120,
            y: 475,
            width: 60,
            fontSize: 10,
            fontWeight: 500,
            color: 'rgba(243, 242, 232, 1)',
          },
        ],
      }
    ]
  }
];

