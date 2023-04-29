
function pascal(numRows)  {
    let triangle = [[1], [1,1]]

    if (numRows === 0) {return [[]]} 
    else if (numRows === 1) {return [[1]]}
    else if (numRows === 2) {return [[1], [1,1]]}
    else {
        for (let i = 0; i < numRows; i++) {
            addRow(triangle)
        }
    }

    return triangle
};

function addRow(triangle) {
    let perRow = triangle[triangle.length - 1];
    let newRow = [1];
    for (let i = 0; i < perRow.length - 1; i++) {
        let current = perRow[i];
        let next = perRow[i+1]
        newRow.push(current + next)
    }
    newRow.push(1)
    return triangle.push(newRow)
}

console.log(pascal(8));