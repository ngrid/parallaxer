var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should;
var client = require('webdriverjs').remote({
    desiredCapabilities: {
        browserName: 'phantomjs'
    }
});

describe('Test parallax effect on single background image.', function() {
    before(function(done){
        client.init().url('http://localhost:8080/test/testHarness.html', done);
    });
    it('background position should start off at 0, 0', function() {
    });
    it('background position should change after scrolling', function() {
    });
});