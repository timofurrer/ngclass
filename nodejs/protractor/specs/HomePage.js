describe('The home page', function() {
    it('should show three movies', function() {
        browser.get('http://localhost:8080/default.html#/list');

        var movies = element(by.repeater('movie in main.movies'));
        expect(movies.rows.count, 3);
    });
});
