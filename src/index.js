
exports.min = function min (array) {

    if (!array || array.length === 0) return 0;
    let min = array[0];
    array.forEach(elem => {
       elem < min ? min = elem : '';
    });
  return min;
};

exports.max = function max (array) {
  if (!array || array.length === 0) return 0;
    let max = array[0];
    array.forEach(elem => {
       elem > max ? max = elem : '';
    });
  return max;
};

exports.avg = function avg (array) {
  if (!array || array.length === 0) return 0;
    let sum = 0;
    array.forEach(elem => {
       sum += elem;
    });
  return sum / array.length;
};

