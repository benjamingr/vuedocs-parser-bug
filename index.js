const vuedoc = require('@vuedoc/parser')

const options = {
  // filename: 'fixtures/UiAutocomplete.vue'
  filename: 'fixtures/UiAutocompleteMinimal.vue'
}

const errorBoundary = require('domain').create();

errorBoundary.on('error', (err) => {
  console.error('got an error');
  console.error(err);
}).run(() => {
  vuedoc.parse(options)
  .then((component) => console.log(component))
});