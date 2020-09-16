module.exports = {
  sidebar: {
    Introduction: ['introduction/overview'],
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
              'getting-started/try-it/micro-frontends/create-deploy-custom-lcu',
            ],
            IoT: ['getting-started/try-it/iot/overview'],
          },
        ],
      },
      {
        'For Devs': ['getting-started/for-devs/overview'],
      },
      'getting-started/what-is-fathym-framework',
      'getting-started/design-principals',
      'getting-started/what-is-a-journey',
      'getting-started/enterprise-setup-explained',
    ],
    Guides: ['guides/overview', 'guides/starting-without-azure', 'guides/migrating-from-fathym'],
    Developers: [
      'developers/overview',
      'developers/no-vendor-lock-in',
      {
        Applications: [
          {
            'Low Code Units': [
              'developers/applications/low-code-units/overview',
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
            'Micro-Frontends': ['developers/applications/micro-frontends/overview', 'developers/applications/micro-frontends/quick-start'],
            Runtime: ['developers/applications/runtime/overview'],
            Identity: ['developers/applications/identity/overview'],
            Security: ['developers/applications/security/overview'],
            'State APIs': ['developers/applications/state-apis/overview'],
            Testing: ['developers/applications/testing/overview'],
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
