var client = require('webdriverjs').remote({
    desiredCapabilities: {
        browserName: 'phantomjs'
    }
});
var assert = require('chai').assert;
var expect = require('chai').expect;
//var should = require('chai').should;

describe('Test parallax effect on single background image.', function() {
    before(function(){
        client.init().url('http://localhost:8080/test/testHarness.html');
    });
    it('make sure we got the right page back', function(done){
        client.title(function(err, title){
            expect(title.value).to.equal('Parallaxer Test\'s');
            done();
        });
    });
    it('background position should start off at 0, 0', function(done) {
        client.getCssProperty('.single', 'background-position', function(err, pos){
            expect(pos).to.equal('0%');
            done();
        })
    });
    it('background position should change after scrolling', function(done) {
        client.scroll(0, 250);
        client.getCssProperty('.single', 'background-position', function(err, pos){
            expect(pos).to.equal('50%-125px');
            done();
        })
    });
});