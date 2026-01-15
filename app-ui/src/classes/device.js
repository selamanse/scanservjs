export default {
  default() {
    return {
      id: 'Unspecified',
      name: 'No data available',
      features: {
        '--mode': {
          default: '',
          options: [],
        },
        '--resolution': {
          default: 0,
          options: [],
        },
        '-l': {
          default: 0,
          limits: [0, 215],
        },
        '-t': {
          default: 297,
          limits: [0, 297],
        },
        '-x': {
          default: 0,
          limits: [0, 215],
        },
        '-y': {
          default: 297,
          limits: [0, 297],
        },
        '--brightness': {
          default: 0,
          limits: [-100, 100],
        },
        '--contrast': {
          default: 0,
          limits: [-100, 100],
        },
        '--disable-dynamic-lineart': {},
        '--originalSize': {
          default: 'A4',
          options: [],
        },
        '--sendingSize': {
          default: 'Auto',
          options: [],
        },
        '--imageQuality': {
          default: 'Text+Photo',
          options: [],
        },
        '--densityType': {
          default: 'Manual',
          options: [],
        },
        '--densityValue': {
          default: 0,
          options: [],
        }
      },
      settings: {
        batchMode: {
          options: [],
          default: ''
        },
        filters: {
          options: [],
          default: []
        },
        pipeline: {
          options: [],
          default: ''
        }
      }
    };
  }
};
