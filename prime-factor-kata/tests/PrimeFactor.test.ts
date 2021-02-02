import primeFactors from '../src/PrimeFactors';

describe('prime factors', function(){
    it('returns array',function(){
        let result = primeFactors.generate(1);
        expect(result).toBe([]);
    })
})