let input = [['x','x','x'], ['x', 'cell', '0'], ['x','x','x']];
let input2 = [['cell', 'x', 0], ['x', 'x', 0],[0,0,0] ];
let input3 = [['cell', 'x', 'x'], [0, 'x', 'x'],[0,0,0] ];

/*
Active square,
assuming an input of [[x,x,x], [x,cell,0], [0,0,x]];  x for active, 0 for not
or [[cell,x,x], [0,0,0], [0,0,0]]
*/

function getFromArray(m, [x, y]) {
   if (x < 0|| y < 0 || x > m[0].length || y > m[0][0].length) {
       return ['empty'];
   } return m[x][y];
}

function countSquares(doubleArrayInput, markedCellIdentifier) {
    let count = 0;
    
    for (let i = 0; i < doubleArrayInput.length; i++) {

        for (let j = 0; j < doubleArrayInput[i].length; j++) {
        
            if (doubleArrayInput[i][j] === markedCellIdentifier) {
                
                for (let q = i - 1; q <= i + 1; q++) {
                    for (let w = j - 1; w <= j + 1; w++) {
                        if (getFromArray(doubleArrayInput, [q, w]) === 'x') {
                            count++;
                        }
                    }
                }
          
                return count
            }
        }
    }

    return count;

}

console.log(countSquares(input, 'cell'));

console.log(countSquares(input2, 'cell'));

console.log(countSquares(input3, 'cell'));