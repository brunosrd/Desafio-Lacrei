const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    baseUrl: 'https://paciente-staging.lacreisaude.com.br/',
    video: true, // Habilita a gravação de vídeos
    videosFolder: 'cypress/videos', // Pasta onde os vídeos serão armazenados
  },
});
