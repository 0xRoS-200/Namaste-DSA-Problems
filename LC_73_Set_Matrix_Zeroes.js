var setZeroes = function (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;

  let rows = new Array(m).fill(false);
  let cols = new Array(n).fill(false);

  // Pointer 1: detect zeros
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        rows[i] = true;
        cols[j] = true;
      }
    }
  }

  // Pointer 2: set zeros
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (rows[i] || cols[j]) {
        matrix[i][j] = 0;
      }
    }
  }
};

const matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

setZeroes(matrix);

console.log(matrix);
