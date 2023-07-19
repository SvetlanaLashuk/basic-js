/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let depth = 0;
    if (Array.isArray(arr)) {
      depth += 1;
    }
    if (arr.some((elem) => Array.isArray(elem))) {
      let flatArray = arr.flat(1);
      depth += this.calculateDepth(flatArray);
    }
    return depth;
  }
}

module.exports = {
  DepthCalculator
};
