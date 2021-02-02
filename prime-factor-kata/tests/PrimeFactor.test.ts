import primeFactors from '../src/PrimeFactors';

function list(a: number){
    let list = new Array<number>();
    for (let index = 1; index <= a; index++) {
        list.push(index)    
    }

    return list;
}

describe('prime factors', function(){
    it('returns array',function(){
        let result = primeFactors.generate(1);
        expect(result).toStrictEqual([]);
    });
    it('test 2',function(){
        let result = primeFactors.generate(2);
        
        expect(result).toStrictEqual(list(2));
    });
});
