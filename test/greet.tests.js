describe('The greet function' , function(){
    
    it('Should return "Hello, Tokelo" when I greet Tokelo' , function(){
        
        assert.equal('Hello, Tokelo', greet('Tokelo'));
        
    });

    it('Should return "Hello, Viollah" when I greet Viollah' , function(){
        
        assert.equal('Hello, Viollah', greet('Viollah'));
        
    });

    it('Should return "Hello" when no name is entered' , function(){
        
        assert.equal('Hello', greet());
        
    });


});