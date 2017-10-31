function Calculator() {}

/**
    * @param {Number} x
    * @param {Number} y
    * @return {Number} The sum of x and y.
    */
Calculator.prototype.add = function (x, y) {
  return (x + y);
};
/**
    * @param {Number} x
    * @param {Number} y
    * @return {Number} The difference of x and y.
    */
Calculator.prototype.subtract = function (x, y) {
	return (x - y);
};
/**
    * @param {Number} x
    * @param {Number} y
    * @return {Number} The product of x and y.
    */
Calculator.prototype.multiply = function (x, y) {
	return (x *  y);
};
/**
    * @param {Number} x
    * @param {Number} y
    * @return {Number} The quotient of x and y.
    */
Calculator.prototype.divide = function (x, y) {
	return y!==0?x/y:Number.NaN;
};

function ScientificCalculator() {}
ScientificCalculator.prototype = new Calculator();	
//ScientificCalculator.prototype.constructor=ScientificCalculator;
/**
    * @param {Number} x
    * @return {Number} Sin of x.
    */
Calculator.prototype.sin = function (x) {
	return Math.sin(x);
};
/**
    * @param {Number} x
    * @return {Number} Cos of x.
    */
Calculator.prototype.cos = function (x) {
	return Math.cos(x);
};
/**
    * @param {Number} x
    * @return {Number} Tan of x.
    */
Calculator.prototype.tan = function (x) {
	return Math.tan(x);
};
/**
    * @param {Number} x
    * @return {Number} Log of x.
    */
Calculator.prototype.log = function (x) {
	return Math.log(x);
};

var withExponents = function() {
    /**
    * @param {Number} base
    * @param {Number} exponent
    * @return {Number} base^exponent
    */
    this.pow = function(base, exponent) {
        return Math.pow(base, exponent);
    };
    /**
    * @param {Array} x
    * @param {Array} y
    * @return {Number} The product of 2 pair of exponents.
    */
    this.multiplyExp = function(x, y) {
        return (this.pow(x[0], x[1]))*(this.pow(y[0], y[1]));
    };
    /**
    * @param {Array} x
    * @param {Array} y
    * @return {Number} The quotient of 2 pair of exponents.
    */
    this.divideExp = function(x, y) {
        return (this.pow(x[0], x[1]))/(this.pow(y[0], y[1]));
    };
    return this;
};

/**
    * @param {Number} duration
    * @param {Object} target
    * @param {String} methodName
    * @param {Array} params
    * @return {Promise} Resolves to target method methodName(params) result.
    */
var delay = function (duration, target, methodName, params) { 
    return new Promise(function(resolve, reject) {
      setTimeout(function() {        
          try {  
                var method = target[methodName];
                var result = method.apply(target, params);
                resolve(result);
                console.log(result);
          } catch (error){
                error.target = target;
                error.methodName = methodName;
                error.params = params;
                reject(error);
          }
      }, duration);
    });
}

var delayPromise = delay(2000, calculatorObj, 'divide', [20, 10]);
console.log(delayPromise instanceof Promise);
var testing = delayPromise.then(function(success) {  
    console.log('2',success);
  },function(failure) {  
    console.log('3',failure);
  }
);

console.log("Part 1---");
var calculatorObj = new Calculator();
console.log(calculatorObj);
console.log(calculatorObj instanceof Calculator);
console.log(calculatorObj.add(1,2));
console.log(calculatorObj.subtract(9,2));
console.log(calculatorObj.multiply(4,3));
console.log(calculatorObj.divide(10,2));
console.log(calculatorObj.divide(5,0));

console.log("Part 2---");
var sciCalculatorObj = new ScientificCalculator();
console.log(sciCalculatorObj);
console.log(sciCalculatorObj instanceof Calculator);
console.log(sciCalculatorObj instanceof ScientificCalculator);

console.log(sciCalculatorObj.sin(Math.PI/2));
console.log(sciCalculatorObj.cos(Math.PI));
console.log(sciCalculatorObj.tan(0));
console.log(sciCalculatorObj.log(1));

console.log("Part 3---");
withExponents.call(calculatorObj);
console.log(calculatorObj.pow(2,3));
console.log(calculatorObj.multiplyExp([2,3],[2,4]));
console.log(calculatorObj.divideExp([2,3],[2,5]));

console.log("Part 4---");
var delayPromise = delay(2000, calculatorObj, 'divide', [20, 10]);
console.log(delayPromise instanceof Promise);
var testing = delayPromise.then(function(success) {  
    console.log('2',success);
  },function(failure) {  
    console.log('3',failure);
  }
);