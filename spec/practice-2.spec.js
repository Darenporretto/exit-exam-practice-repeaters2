// SAMPLE DATA
const data = [
    {
      id: 1,
      title: "Big Trouble in Little China",
      year: 1986
    },
    {
      id: 2,
      title: "The Thing",
      year: 1982
    },
    {
      id: 3,
      title: "Halloween",
      year: 1978
    }
  ];
  
  describe('temperatures', function(){
    it('should be an array', function(){
      assert.equal(Array.isArray(temperatures), true);
    });
    it('array should have 4 items', function(){
      assert.equal(temperatures.length, 4);
    });
    it('numbers should be correct', function(){
      let correct = [42, 75, 67, 94];
      assert.deepEqual(temperatures, correct);
    });
  });
  
  describe('#printTempsInReverse', function(){
    beforeEach(() => {
        sinon.spy(console, 'log');
      });
    afterEach(() => {
    console.log.restore();
    });

    it('should print temperatures in reverse', function(){
      let data = [42, 75, 67, 94];
      printTempsInReverse(data);
      console.log.firstCall.calledWith(94).should.be.true;
      console.log.secondCall.calledWith(75).should.be.true;
    });
  });
  
  describe('sampleObject', function(){
    it('should have 3 key/value pairs', function(){
      let keys = Object.keys(sampleObject);
      assert.equal(keys.length, 3);
    });
    it('the value at each key should be a string', function(){
      let values = Object.values(sampleObject);
      assert.equal(typeof values[0], 'string');
      assert.equal(typeof values[1], 'string');
      assert.equal(typeof values[2], 'string');
    });
  });
  
  describe('getStringValues', function(){
    let data = {
      name: "Alex",
      occupation: "instructor",
      age: 34,
      faveMovies: ['JFK', 'Rear Window']
    }
    it('should be an array', function(){
      let result = getStringValues(data);
      assert.equal(Array.isArray(result), true);
    });
    it('should only push string values into array', function(){
      let result = getStringValues(data);
      assert.equal(result.length, 2);
      assert.equal(result.includes('Alex'), true);
      assert.equal(result.includes('instructor'), true);
    });
  });
  
  describe('#getDashKeys', function(){
    var person = {
      name: "Alex",
      age: 34,
      "marriage-status": "married",
      "favorite-John-Carpenter-films": ["Big Trouble in Little China", "The Thing"]
    };
    it('should return an array', function(){
      let result = getDashKeys(person);
      assert.equal(Array.isArray(result), true);
    });
    it('should only push the keys with dashes into the array', function(){
      let result = getDashKeys(person);
      assert.equal(result.length, 2);
      assert.equal(result.includes('marriage-status'), true);
      assert.equal(result.includes('favorite-John-Carpenter-films'), true);
    });
  });
  
  describe('#addKeyAndValue', function(){
    let data = {
      name: "Stephanie",
      age: 35
    };
    it("should add key/value pair if it doesn't exist in object", function(){
      let result = addKeyAndValue(data, 'occupation', 'Program Coordinator');
      assert.equal(result.occupation, 'Program Coordinator');
    });
    it("should not add key/value pair if it doesn't exist in object", function(){
      let result = addKeyAndValue(data, 'name', 'Steph');
      assert.equal(result.name, 'Stephanie');
    });
  });
  
  describe('#get80sFilms', function(){
    it('should return an array', function(){
      let result = get80sFilms(johnCarpenterMovies);
      assert.equal(Array.isArray(result), true);
    });
    it('should return an array an of 80s films', function(){
      let result = get80sFilms(johnCarpenterMovies);
      let correct = [johnCarpenterMovies[0], johnCarpenterMovies[1]];
      assert.deepEqual(result, correct);
    });
    it('should use the native filter function', function(){
      let filter = sinon.spy(Array.prototype, "filter");
      let result = get80sFilms(johnCarpenterMovies);
      assert(filter.calledOnce);
    });
  });
  
  describe('#getYearAverage', function(){
    it('should return a number', function(){
      let result = getYearAverage(johnCarpenterMovies);
      assert.equal(typeof result, 'number');
    });
    it('should return the correct average of years', function(){
      let result = getYearAverage(johnCarpenterMovies);
      assert.equal(result, 1982);
    });
    it('should use the reduce function', function(){
      let reduce = sinon.spy(Array.prototype, 'reduce');
      getYearAverage(johnCarpenterMovies);
      assert(reduce.calledOnce);
    });
  });
  
  describe('#getSum', function(){
    let obj = {
      value: 10,
      node: {
        value: 20,
        node: {
          value: 30,
          node: null
        }
      }
    };
    it('should return a number', function(){
      let result = getSum(obj);
      assert.equal(typeof result, 'number');
    });
    it('should return the correct sum', function(){
      let result = getSum(obj);
      assert.equal(result, 60);
    });
  });