const head=require('./head');
describe('Head',() => { 
    it('Head of empty array is undefined',() => {
        var arr=[]
        expect(head(arr)).toEqual(undefined);
    });
    
})