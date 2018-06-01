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
    auth: {
      'type': 'confirm',
      'message': 'Use auth?'
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
    'pages/_locale/index.vue': 'i18n',
    'pages/index.js': 'i18n',
    'pages/index.vue': '!i18n',
    'plugins/VueI18n.js': 'i18n',
    'middleware/i18n.js': 'i18n',
    'middleware/auth.js': 'auth',
    'middleware/check-auth.js': 'auth',
    'middleware/guest.js': 'auth',
    'mixins/auth.js': 'auth',
    'pages/_locale/auth/**/*': 'i18n && auth',
    'pages/auth/**/*': '!i18n && auth',
    'plugins/Axios.js': 'auth',
    'store/auth.js': 'auth',
    'ansible-nuxt.yml': 'ansible',
    'bitbucket-pipelines.yml': 'ansible',
    'deploy': 'ansible'
  },
  completeMessage: '{{#inPlace}}To get started:\n\n  npm install # Or yarn\n  npm run dev{{else}}To get started:\n\n  cd {{destDirName}}\n  npm install # Or yarn\n  npm run dev{{/inPlace}}'
};

