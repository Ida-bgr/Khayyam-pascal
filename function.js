
function pascal(numRows)  {
    if (numRows < 1) {
        throw new Error("Your NumRows CANNOT be a negative number")
    }
    const triangle = []

    for (let i = 0; i < numRows; i++) {
        const generatedRow = generateRow(triangle)
        triangle.push(generatedRow)
    }

    return triangle
};

function generateRow(triangle) {



    if (triangle.length === 0) {
        return [1]
    }else if (triangle.length === 1) {
        return [1], [1,1]
    }else{

        const perRow = triangle[triangle.length - 1];
        const newRow = [1];
        for (let i = 0; i < perRow.length - 1; i++) {
            const current = perRow[i];
            const next = perRow[i+1]
            newRow.push(current + next)
        }
        newRow.push(1)
        return newRow
    }
}

console.log(pascal(10));