import engineResolverFor from 'ember-engines/test-support/engine-resolver-for';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

const modulePrefix = 'wall';
const resolver = engineResolverFor(modulePrefix);

module('Integration | Component | mano-brown', function(hooks) {
  setupRenderingTest(hooks, { resolver });

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{mano-brown}}`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      {{#mano-brown}}
        template block text
      {{/mano-brown}}
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
