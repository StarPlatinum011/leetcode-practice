/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let maxBan = piles.reduce((acc, curr) => {
        return Math.max(acc, curr);
    });

    console.log('maxban', maxBan)

    let minBan = 0;
    let res = 0; 
    while(minBan<= maxBan) {
        let mid = Math.floor((maxBan+minBan)/2);
        let hour = 0;
        for(let i = 0; i<piles.length; i++) {
            hour += Math.ceil(piles[i]/mid)
        }

        if(hour<=h) {
            res = mid;
            maxBan = mid-1;
        } else {
            minBan = mid+1
        }
    }
    
    console.log(res, ' results')

    return res;
};