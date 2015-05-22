'use strict';
describe('Test game-constants', function () {
    var $httpBackend;
    var proxy;
    beforeEach(function(){
        module('Tombola.NoughtsAndCrosses.Providers.Proxy');

        module(function($provide) {
            $provide.constant('proxyConstants', mocks.proxyConsantsMock);
        });

        inject(function($injector){
            $httpBackend = $injector.get('$httpBackend');
            proxy = $injector.get('Proxy');
        });
    });

    it('Call to service returns data when response is OK', function(){
        $httpBackend
            .expectPOST(mocks.proxyConstantsMock.newGameURL)
            .respond({ data:'foo data'});

        proxy.setupBoard()
            .then(function(results){
                expect(results.data).to.deep.equal({ data:'foo data'});
            })
            .catch(function(errorData){
                expect(errorData).to.not.be.ok();
            });
        $httpBackend.flush();
    });

    it('Call to service returns error data when 404d', function(){
        $httpBackend
            .expectPOST(mocks.proxyConstantsMock.newGameURL)
            .respond(function(){
                return [404, 'Not Found', {}];
            });

        proxy.setupBoard()
            .then(function(results){
                expect(results.data).to.not.equal('unexpected successful response from server');
            })
            .catch(function(errorData){
                expect(errorData).to.deep.property('data', 'Not Found');
                expect(errorData).to.deep.property('status', 404);
            });
        $httpBackend.flush();
    });

    afterEach(function(){
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });
});
