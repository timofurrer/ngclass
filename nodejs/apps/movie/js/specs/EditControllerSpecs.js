describe('The EditController', function() {
    beforeEach(function() {
        module('moviesApp');
    });

    var $controller;
    var $httpBackend;
    var errors;

    beforeEach(inject(function(_$controller_, _$httpBackend_, _errors_) {
        $controller = _$controller_;
        $httpBackend = _$httpBackend_;
        errors = _errors_;
    }));

    it('can get movie from api',  function() {
        $httpBackend.when('GET', '/api/movies/1').respond({title: 'Foo', year: 1994, rating: 5});
        var routeParams = {id: 1};

        var controller = $controller('EditController', {
            $routeParams: routeParams
        });

        $httpBackend.flush();
        expect(controller.movie).toBeDefined();
        expect(controller.movie.title).toBe('Foo');
        expect(controller.movie.year).toBe(1994);
        expect(controller.movie.rating).toBe(5);
    });

    it('can set new title for movie', function() {
        $httpBackend.when('GET', '/api/movies/1').respond({title: 'Misspelled movie title', year: 1994, rating: 5});
        var routeParams = {id: 1};

        var controller = $controller('EditController', {
            $routeParams: routeParams
        });

        $httpBackend.flush();
        expect(controller.movie).toBeDefined();

        $httpBackend.when('PUT', '/api/movies/').respond();

        controller.movie.title = 'Correct spelled movie title';
        controller.save(true);

        $httpBackend.flush();
        expect(controller.movie.title).toBe('Correct spelled movie title');
    });
});
