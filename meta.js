module.exports = {
  helpers: {
    escape: function(value) {
      return value.replace(/'/g, '&apos;');
    }
  },
  prompts: {
    name: {
      'type': 'string',
      'required': true,
      'message': 'Project name'
    },
    description: {
      'type': 'string',
      'required': false,
      'message': 'Project description',
      'default': 'Nuxt.js project'
    },
    author: {
      'type': 'string',
      'message': 'Author'
    },
    i18n: {
      'type': 'confirm',
      'message': 'Use i18n?'
    },
    ansible: {
      'type': 'confirm',
      'message': 'With ansible?'
    },
    travis: {
      'when': "process.env.TRAVIS === 'true'",
      'type': 'confirm',
      'message': 'With travis?'
    }
  },
  filters: {
    'locales/**/*': 'i18n',
    'middleware/i18n.js': 'i18n',
    'pages/_locale/**/*': 'i18n',
    'pages/index.js': 'i18n',
    'pages/index.vue': '!i18n',
    'plugins/VueI18n.js': 'i18n',
    'ansible-nuxt.yml': 'ansible',
    'bitbucket-pipelines.yml': 'ansible',
    'deploy': 'ansible'
  },
  completeMessage: '{{#inPlace}}To get started:\n\n  npm install # Or yarn\n  npm run dev{{else}}To get started:\n\n  cd {{destDirName}}\n  npm install # Or yarn\n  npm run dev{{/inPlace}}'
};

