/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
let romanToIntConverter = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    
    let total = 0;
    
    for(let i = 0; i < s.length; i++){
        let currentInt = romanToIntConverter[s.charAt(i)];
        let nextInt = romanToIntConverter[s.charAt(i + 1)];
        
        if(nextInt){
            if(currentInt >= nextInt){
                total += currentInt;
            } else {
                total += (nextInt - currentInt);
                i++;
            }
        } else {
            total += currentInt;
        }
    }
    return total;
};