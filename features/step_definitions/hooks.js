/**
 * Created by Rajan Lamichhane on 22/06/17.
 */
// features/step_definitions/hooks.js
var {defineSupportCode} = require('cucumber');

defineSupportCode(function({After}) {
    After(function() {
        return this.driver.quit();
    });
});