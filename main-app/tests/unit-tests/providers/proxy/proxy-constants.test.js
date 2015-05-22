'use strict';
describe('Test game-constants', function () {
    var constants;
    beforeEach(function(){
        module('Tombola.NoughtsAndCrosses.Providers.Proxy');
        inject(function($injector){
            constants = $injector.get('ProxyConstants');
        });
    });

    it('API URL has not changed', function(){
        expect(constants.newGameURL).to.equal('http://noughtsandcrosses:35000/api/v1.0/newgame');
    });

    it('API URL has not changed', function(){
        expect(constants.moveURL).to.equal('http://noughtsandcrosses:35000/api/v1.0/makemove');
    });
});