/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let ROWS = matrix.length;
    let COLS = matrix[0].length;
    let top = 0; 
    let bottom = ROWS-1;
    while(top<bottom) {
        let mid = Math.floor((top+bottom)/2);

        if(matrix[mid][0] > target) {
            bottom = mid-1;
        } else if(matrix[mid][COLS-1]< target) {
            top = mid+1;
        } else {
            break;
        }
    }

    console.log(top, 'and bottom ', bottom);

    if(!(top<=bottom)) return false;

    let row = Math.floor((top+bottom)/2);

    let left = 0, right = COLS-1;

    while(left<=right) {
        let mid = Math.floor((left+right)/2);

        if(matrix[row][mid] > target) {
            right = mid-1;

        } else if(matrix[row][mid] < target) {
            left = mid+1; 
        } else{
            return true;
        }
    }

    return false;
};