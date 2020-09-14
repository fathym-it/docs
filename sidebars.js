module.exports = {
  sidebar: {
    Introduction: ['introduction/overview', 'introduction/design-principals'],
    'Getting Started': [
      'getting-started/overview',
      {
        'Try It': [
          'getting-started/try-it/overview',
          {
            'Micro-Frontends': [
              'getting-started/try-it/micro-frontends/overview',
              'getting-started/try-it/micro-frontends/deploy-app',
              'getting-started/try-it/micro-frontends/deploy-ide-blade',
            ],
            IoT: ['getting-started/try-it/iot/overview'],
          },
        ],
      },
      {
        'For Devs': ['getting-started/for-devs/overview'],
      },
    ],
    Guides: [
      'guides/overview',
      'guides/starting-without-azure',
      {
        'Mirco-Frontends': ['guides/micro-frontends/overview'],
        Testing: ['guides/testing/overview'],
      },
    ],
    Developers: [
      {
        Applications: [
          {
            'Low Code Units': [
              'developers/applications/low-code-units/overview',
              {
                'Micro-Frontends': ['developers/applications/low-code-units/micro-frontends/quick-start'],
              },
              {
                IoT: ['developers/applications/low-code-units/iot/quick-start'],
              },
              {
                'Data Flow': ['developers/applications/low-code-units/data-flow/quick-start'],
              },
              {
                Documentation: ['developers/applications/low-code-units/documentation/quick-start'],
              },
            ],
            'State APIs': ['developers/applications/state-apis/overview'],
            CLI: ['developers/applications/cli/overview'],
          },
        ],
        Infrastructure: ['developers/infrastructure/overview', 'developers/infrastructure/cloud-native-vs-cloud-optimized'],
        DevOps: [
          'developers/devops/overview',
          {
            Deployments: ['developers/devops/deployments/overview'],
          },
        ],
      },
    ],
    Contributing: ['contributing/overview', 'contributing/code-of-conduct', 'contributing/style-guide', 'contributing/pull-requests'],
  },
};
