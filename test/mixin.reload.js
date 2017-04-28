// Test :: Reload
/* globals describe: true, it: true */
'use strict';

var barista = require('seed-barista');
var expect = require('chai').expect;

describe('seed-publish: reload', function() {
  it('should allow unloaded rules to be re-published', function() {
    var style = `
      @import "./_index";
      $key: pinkhot;

      .pinkhot {
        background: pink;
        @include unload($key);
        @include export($key) {
          color: red;
        }
        @include publish($key);
        // Enable @import again
        @include reload($key);
        // Mock @import
        @include export($key) {
          color: pink;
          padding: 10px;
        }
        @include publish($key);
        @include export($key) {
          margin: 0;
        }
      }
    `;
    var output = barista({ content: style });
    var $o = output.$('.pinkhot');

    expect($o.getProp('background')).to.equal('pink');
    expect($o.getProp('color')).to.not.equal('red');
    expect($o.getProp('color')).to.equal('pink');
    expect($o.getProp('padding')).to.equal('10px');
    expect($o.getProp('margin')).to.be.false;
  });
});
