describe('Test parallax effect on single background image.', function() {
    var el = document.createElement("div");
    el.id = "myDiv";
    el.innerHTML = "Hello World!";
    document.body.appendChild(el);
    console.log(el);
    console.log(document);
    var myEl = document.getElementById('myDiv');

    it("has the right text", function () {
        assert.equal(myEl.innerHTML, "Hello World!");
    });

    it('background position should start off at 0, 0', function() {
    });
    it('background position should change after scrolling', function() {
    });
});

