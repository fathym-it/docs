module.exports = {
  sidebar: {
    Overview: ['introduction/overview', 'introduction/design-principals', 'introduction/micro-frontends'],
    'Getting Started': [
      'getting-started/setup',
      {
        'Try It': [
          {
            'Micro-Frontends': ['getting-started/installing'],
            IoT: ['getting-started/installing'],
          },
        ],
      },
      {
        'For Devs': ['getting-started/installing'],
      },
    ],
    Guides: ['guides/overview'],
    Developers: [
      {
        Infrastructure: ['developers/infrastructure/overview'],
        DevOps: ['developers/devops/overview'],
        'Low Code Units': [
          'developers/low-code-units/overview',
          {
            'Micro-Frontends': ['developers/low-code-units/micro-frontends/quick-start'],
          },
          {
            IoT: ['developers/low-code-units/iot/quick-start'],
          },
          {
            'Data Flow': ['developers/low-code-units/data-flow/quick-start'],
          },
          {
            Documentation: ['developers/low-code-units/data-flow/quick-start'],
          },
        ],
        'State APIs': ['developers/state-apis/overview'],
        CLI: ['developers/cli/overview'],
      },
    ],
    Contributing: ['contributing/overview', 'contributing/code-of-conduct', 'contributing/style-guide', 'contributing/pull-requests'],
  },
};
