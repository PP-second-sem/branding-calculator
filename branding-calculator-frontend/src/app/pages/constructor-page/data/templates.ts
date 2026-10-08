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
        x: 140,
        y: 357,
        width: 500,
        fontSize: 14,
        fontWeight: 400
      },
      {
        id: 'mobilePhone',
        type: 'mobilePhone',
        x: 174,
        y: 386,
        width: 500,
        fontSize: 14,
        fontWeight: 400
      },
      {
        id: 'email',
        type: 'email',
        x: 155,
        y: 415,
        width: 500,
        fontSize: 14,
        fontWeight: 400
      },
      {
        id: 'address',
        type: 'address',
        x: 500,
        y: 359,
        width: 300,
        fontSize: 12,
        fontWeight: 400
      },],
      qrCodes:
      [{
        x: 750,
        y: 180,
        size: 90,
        labelFontSize: 13,
      },
      {
        x: 750,
        y: 325,
        size: 90,
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
        x: 369,
        y: 75,
        width: 500,
        fontSize: 22,
        fontWeight: 700
      },
      {
        id: 'position',
        type: 'position',
        x: 369,
        y: 150,
        width: 100,
        fontSize: 16,
        fontWeight: 700
      },
      {
        id: 'phone',
        type: 'phone',
        x: 408,
        y: 276,
        width: 500,
        fontSize: 15,
        fontWeight: 400
      },
      {
        id: 'mobilePhone',
        type: 'mobilePhone',
        x: 449,
        y: 299,
        width: 500,
        fontSize: 15,
        fontWeight: 400
      },
      {
        id: 'email',
        type: 'email',
        x: 426,
        y: 321,
        width: 500,
        fontSize: 15,
        fontWeight: 400
      },
      {
        id: 'address',
        type: 'address',
        x: 369,
        y: 370,
        width: 300,
        fontSize: 11,
        fontWeight: 400
      },],
      qrCodes:
      [
        {
          x: 750,
          y: 180,
          size: 93,
          labelFontSize: 12,
        },
        {
          x: 750,
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
        x: 97,
        y: 384,
        width: 500,
        fontSize: 13,
        fontWeight: 400
      },
      {
        id: 'mobilePhone',
        type: 'mobilePhone',
        x: 127,
        y: 407,
        width: 500,
        fontSize: 13,
        fontWeight: 400
      },
      {
        id: 'email',
        type: 'email',
        x: 108,
        y: 429,
        width: 500,
        fontSize: 13,
        fontWeight: 400
      },
      {
        id: 'address',
        type: 'address',
        x: 240,
        y: 381,
        width: 300,
        fontSize: 13,
        fontWeight: 400
      },],
      qrCodes:[
        {
          x: 660,
          y: 390,
          size: 75,
          labelFontSize: 9,
        },
        {
          x: 785,
          y: 390,
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
      fullNameContinuationOffset: -30,
      filledPreview: 'filled_business_card_4.svg',
      textFields: [
      {
        id: 'fullName',
        type: 'fullName',
        x: 230,
        y: 55,
        width: 500,
        fontSize: 29,
        fontWeight: 700
      },
      {
        id: 'position',
        type: 'position',
        x: 230,
        y: 170,
        width: 60,
        fontSize: 18,
        fontWeight: 400
      },
      {
        id: 'phone',
        type: 'phone',
        x: 170,
        y: 715,
        width: 500,
        fontSize: 18,
        fontWeight: 400
      },
      {
        id: 'mobilePhone',
        type: 'mobilePhone',
        x: 215,
        y: 763,
        width: 500,
        fontSize: 18,
        fontWeight: 400
      },
      {
        id: 'email',
        type: 'email',
        x: 190,
        y: 810,
        width: 500,
        fontSize: 18,
        fontWeight: 400
      },
      {
        id: 'address',
        type: 'address',
        x: 120,
        y: 855,
        width: 400,
        fontSize: 18,
        fontWeight: 400
      },],
      qrCodes:[
      {
        x: 150,
        y: 420,
        size: 113,
        labelFontSize: 15,
      },
      {
        x: 300,
        y: 420,
        size: 113,
        labelFontSize: 15,
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
  }
];

