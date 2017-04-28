// Test :: Publish
/* globals describe: true, it: true */
'use strict';

var barista = require('seed-barista');
var expect = require('chai').expect;

describe('seed-publish: publish', function() {
  it('should prevent styles from compiling after publishing', function() {
    var style = `
      @import "./_index";
      .pinkhot {
        @include export(pinkhot) {
          color: pink;
        }
        @include publish(pinkhot);
        @include export(pinkhot) {
          margin: 0;
        }
      }
    `;
    var output = barista({ content: style });
    var $o = output.$('.pinkhot');

    expect($o.getProp('color')).to.equal('pink');
    expect($o.getProp('margin')).to.be.false;
  });

  it('should prevent selectors from compiling after publishing', function() {
    var style = `
      @import "./_index";

      @include export(pinkhot) {
        .pinkhot {
          color: pink;
        }
      }

      @include publish(pinkhot);

      @include export(pinkhot) {
        .pinkhot {
          background: pink;
        }
      }
    `;
    var output = barista({ content: style });
    var $o = output.$('.pinkhot');

    expect($o.exists()).to.be.true;
    expect($o.selectors.length).to.equal(1);
    expect($o.getProp('color')).to.equal('pink');
    expect($o.getProp('background')).to.be.false;
  });
});
