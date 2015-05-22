'use strict';

describe('Test cell filter', function () {
    var filter;
    beforeEach(function(){
        module('Tombola.NoughtsAndCrosses.Filters');
        inject(function($filter){
            filter = $filter('cell');
        });
    });

    it('filter returns correct icon classes', function(){
        expect(filter({playerNum: 1, crossPlayer: 1, noughtPlayer: 2})).to.equal('image cross');
    });

    it('filter returns correct icon classes', function(){
        expect(filter({playerNum: 2, crossPlayer: 2, noughtPlayer: 1})).to.equal('image cross');
    });

    it('filter returns correct icon classes', function(){
        expect(filter({playerNum: 1, crossPlayer: 2, noughtPlayer: 1})).to.equal('image nought');
    });

    it('filter returns null with unrecognised input', function(){
        expect(filter({playerNum: 0, crossPlayer: 1, noughtPlayer: 2})).to.equal('');
    });

    it('filter returns null with unrecognised input', function(){
        expect(filter({playerNum: 1, crossPlayer: 'seven', noughtPlayer: 2})).to.equal('');
    });
});
