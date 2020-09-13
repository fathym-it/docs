module.exports = {
  sidebar: {
    Overview: ['introduction/overview', 'introduction/design-principals', 'introduction/micro-frontends'],
    'Getting Started': [
      'getting-started/setup',
      {
        'Try It': ['getting-started/installing'],
      },
      {
        'For Devs': ['getting-started/installing'],
      },
    ],
    Guides: ['guides/overview'],
    'Developers': [
      {
        Infrastructure: ['state-apis/overview'],
        DevOps: ['state-apis/overview'],
        'Low Code Units': [
          'low-code-units/overview',
          {
            'Micro-Frontends': ['low-code-units/micro-frontends/quick-start'],
          },
          {
            IoT: ['low-code-units/iot/quick-start'],
          },
          {
            'Data Flow': ['low-code-units/data-flow/quick-start'],
          },
        ],
        'State APIs': ['state-apis/overview'],
        'CLI': ['state-apis/overview'],
      },
    ],
    Contributing: ['contributing/overview', 'contributing/code-of-conduct', 'contributing/style-guide', 'contributing/pull-requests'],
  },
};
