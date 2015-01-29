describe('The MainController', function() {
    var mainController;
    var movies = [{}, {}, {}];

    beforeEach(function() {
        module('moviesApp');
    });

    beforeEach(inject(function($controller) {
        mainController = $controller('MainController', {
            movies: movies
        });
    }));

    //it('can be created with movies data', function() {
        //expect(mainController).toBeDefined();
        //expect(mainController.movies.length).toBe(3);
    //});

    it('can rate a movie that is bad', function() {
        movies[0].rating = 1;

        var result = mainController.rateMovie(movies[0]);
        expect(result.good).toBe(false);
        expect(result.bad).toBe(true);
    });
});
