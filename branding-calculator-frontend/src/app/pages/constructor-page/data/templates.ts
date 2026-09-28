import { Layout } from "../../../models/layout.model";

export const layouts: Layout[] = [
  {
    name: 'Аншлаги',
    icon: 'soldoutIcon.svg',
    templates : [
    {
      id: 1,
      preview: 'business_card_1.svg',
      addressContinuationOffset: -75,
      textFields: [
      {
        id: 'fullName',
        type: 'fullName',
        x: 300,
        y: 90,
        width: 500,
        fontSize: 26,
        fontWeight: 700
      },
      {
        id: 'position',
        type: 'position',
        x: 300,
        y: 180,
        width: 500,
        fontSize: 14,
        fontWeight: 400
      },
      {
        id: 'phone',
        type: 'phone',
        x: 140,
        y: 349,
        width: 500,
        fontSize: 14,
        fontWeight: 400
      },
      {
        id: 'mobilePhone',
        type: 'mobilePhone',
        x: 175,
        y: 377,
        width: 500,
        fontSize: 14,
        fontWeight: 400
      },
      {
        id: 'email',
        type: 'email',
        x: 150,
        y: 405,
        width: 500,
        fontSize: 14,
        fontWeight: 400
      },
      {
        id: 'address',
        type: 'address',
        x: 490,
        y: 350,
        width: 300,
        fontSize: 12,
        fontWeight: 400
      },],
      qrCodes:
      [{
        x: 720,
        y: 165,
        size: 120,
        labelFontSize: 12,
      },
      {
        x: 720,
        y: 320,
        size: 120,
        labelFontSize: 12,
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
      textFields: [
      {
        id: 'fullName',
        type: 'fullName',
        x: 360,
        y: 70,
        width: 500,
        fontSize: 22,
        fontWeight: 700
      },
      {
        id: 'position',
        type: 'position',
        x: 360,
        y: 140,
        width: 500,
        fontSize: 16,
        fontWeight: 700
      },
      {
        id: 'phone',
        type: 'phone',
        x: 400,
        y: 271,
        width: 500,
        fontSize: 14,
        fontWeight: 400
      },
      {
        id: 'mobilePhone',
        type: 'mobilePhone',
        x: 440,
        y: 295,
        width: 500,
        fontSize: 14,
        fontWeight: 400
      },
      {
        id: 'email',
        type: 'email',
        x: 415,
        y: 317,
        width: 500,
        fontSize: 14,
        fontWeight: 400
      },
      {
        id: 'address',
        type: 'address',
        x: 360,
        y: 350,
        width: 300,
        fontSize: 12,
        fontWeight: 400
      },],
      qrCodes:
      [
        {
          x: 730,
          y: 170,
          size: 90,
          labelFontSize: 11,
        },
        {
          x: 730,
          y: 340,
          size: 90,
          labelFontSize: 11,
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
      textFields: [
      {
        id: 'fullName',
        type: 'fullName',
        x: 180,
        y: 60,
        width: 500,
        fontSize: 32,
        fontWeight: 700
      },
      {
        id: 'position',
        type: 'position',
        x: 60,
        y: 180,
        width: 500,
        fontSize: 16,
        fontWeight: 400
      },
      {
        id: 'phone',
        type: 'phone',
        x: 95,
        y: 377,
        width: 500,
        fontSize: 14,
        fontWeight: 400
      },
      {
        id: 'mobilePhone',
        type: 'mobilePhone',
        x: 125,
        y: 398,
        width: 500,
        fontSize: 14,
        fontWeight: 400
      },
      {
        id: 'email',
        type: 'email',
        x: 105,
        y: 420,
        width: 500,
        fontSize: 14,
        fontWeight: 400
      },
      {
        id: 'address',
        type: 'address',
        x: 330,
        y: 380,
        width: 300,
        fontSize: 7,
        fontWeight: 400
      },],
      qrCodes:[
        {
          x: 560,
          y: 370,
          size: 70,
          labelFontSize: 9,
        },
        {
          x: 730,
          y: 370,
          size: 70,
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
      textFields: [
      {
        id: 'fullName',
        type: 'fullName',
        x: 180,
        y: 60,
        width: 500,
        fontSize: 32,
        fontWeight: 700
      },
      {
        id: 'position',
        type: 'position',
        x: 60,
        y: 180,
        width: 500,
        fontSize: 16,
        fontWeight: 400
      },
      {
        id: 'phone',
        type: 'phone',
        x: 95,
        y: 377,
        width: 500,
        fontSize: 14,
        fontWeight: 400
      },
      {
        id: 'mobilePhone',
        type: 'mobilePhone',
        x: 125,
        y: 398,
        width: 500,
        fontSize: 14,
        fontWeight: 400
      },
      {
        id: 'email',
        type: 'email',
        x: 105,
        y: 420,
        width: 500,
        fontSize: 14,
        fontWeight: 400
      },
      {
        id: 'address',
        type: 'address',
        x: 360,
        y: 380,
        width: 300,
        fontSize: 14,
        fontWeight: 400
      },],
      qrCodes:[
      {
        x: 640,
        y: 370,
        size: 80,
        labelFontSize: 8,
      },
      {
        x: 763,
        y: 370,
        size: 80,
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
    name: 'Визитки',
    icon: 'businessCardIcon.svg',
    templates : [
      {
        id: 1,
        preview: 'templates/announcement-1.png',
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

