const head=require('./head');
describe('Head',() => { 
    it('Head of empty array is undefined',() => {
        var arr=[]
        expect(head(arr)).toEqual(undefined);
    });
    it('Should return first element of array',()=>{
        var arr=[2,3,4,5]
        expect(head(arr)).toEqual(2);
    });
})