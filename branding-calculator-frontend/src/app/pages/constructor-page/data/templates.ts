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
      addressContinuationOffset: -75,
      textFields: [
      {
        id: 'fullName',
        type: 'fullName',
        x: 150,
        y: 49,
        width: 500,
        fontSize: 14,
        fontWeight: 700
      },
      {
        id: 'position',
        type: 'position',
        x: 150,
        y: 89,
        width: 500,
        fontSize: 8,
        fontWeight: 400
      },
      {
        id: 'phone',
        type: 'phone',
        x: 70,
        y: 181.5,
        width: 500,
        fontSize: 8,
        fontWeight: 400
      },
      {
        id: 'mobilePhone',
        type: 'mobilePhone',
        x: 88,
        y: 196,
        width: 500,
        fontSize: 8,
        fontWeight: 400
      },
      {
        id: 'email',
        type: 'email',
        x: 78,
        y: 206,
        width: 500,
        fontSize: 8,
        fontWeight: 400
      },
      {
        id: 'address',
        type: 'address',
        x: 254,
        y: 183.5,
        width: 300,
        fontSize: 6,
        fontWeight: 400
      },],
      qrCodes:
      [{
        x: 383,
        y: 95,
        size: 50,
        labelFontSize: 7,
      },
      {
        x: 383,
        y: 175,
        size: 50,
        labelFontSize: 7,
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
        x: 187,
        y: 40,
        width: 500,
        fontSize: 11,
        fontWeight: 700
      },
      {
        id: 'position',
        type: 'position',
        x: 187,
        y: 80,
        width: 500,
        fontSize: 8,
        fontWeight: 700
      },
      {
        id: 'phone',
        type: 'phone',
        x: 208,
        y: 141,
        width: 500,
        fontSize: 8,
        fontWeight: 400
      },
      {
        id: 'mobilePhone',
        type: 'mobilePhone',
        x: 227,
        y: 153,
        width: 500,
        fontSize: 8,
        fontWeight: 400
      },
      {
        id: 'email',
        type: 'email',
        x: 215,
        y: 164,
        width: 500,
        fontSize: 8,
        fontWeight: 400
      },
      {
        id: 'address',
        type: 'address',
        x: 187,
        y: 180,
        width: 300,
        fontSize: 6,
        fontWeight: 400
      },],
      qrCodes:
      [
        {
          x: 380,
          y: 95,
          size: 45,
          labelFontSize: 6,
        },
        {
          x: 380,
          y: 180,
          size: 45,
          labelFontSize: 6,
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
        x: 90,
        y: 30,
        width: 500,
        fontSize: 17,
        fontWeight: 700
      },
      {
        id: 'position',
        type: 'position',
        x: 30,
        y: 100,
        width: 500,
        fontSize: 8,
        fontWeight: 400
      },
      {
        id: 'phone',
        type: 'phone',
        x: 48,
        y: 196,
        width: 500,
        fontSize: 7,
        fontWeight: 400
      },
      {
        id: 'mobilePhone',
        type: 'mobilePhone',
        x: 65,
        y: 207.5,
        width: 500,
        fontSize: 7,
        fontWeight: 400
      },
      {
        id: 'email',
        type: 'email',
        x: 55,
        y: 219,
        width: 500,
        fontSize: 7,
        fontWeight: 400
      },
      {
        id: 'address',
        type: 'address',
        x: 135,
        y: 196,
        width: 300,
        fontSize: 7,
        fontWeight: 400
      },],
      qrCodes:[
        {
          x: 330,
          y: 196,
          size: 40,
          labelFontSize: 5,
        },
        {
          x: 390,
          y: 196,
          size: 40,
          labelFontSize: 5,
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
        x: 110,
        y: 55,
        width: 500,
        fontSize: 15,
        fontWeight: 700
      },
      {
        id: 'position',
        type: 'position',
        x: 110,
        y: 115,
        width: 500,
        fontSize: 9,
        fontWeight: 400
      },
      {
        id: 'phone',
        type: 'phone',
        x: 88,
        y: 366,
        width: 500,
        fontSize: 9,
        fontWeight: 400
      },
      {
        id: 'mobilePhone',
        type: 'mobilePhone',
        x: 110,
        y: 390,
        width: 500,
        fontSize: 9,
        fontWeight: 400
      },
      {
        id: 'email',
        type: 'email',
        x: 97,
        y: 414,
        width: 500,
        fontSize: 9,
        fontWeight: 400
      },
      {
        id: 'address',
        type: 'address',
        x: 61,
        y: 435.5,
        width: 400,
        fontSize: 9,
        fontWeight: 400
      },],
      qrCodes:[
      {
        x: 75,
        y: 220,
        size: 57,
        labelFontSize: 8,
      },
      {
        x: 150,
        y: 220,
        size: 57,
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
  }
];

