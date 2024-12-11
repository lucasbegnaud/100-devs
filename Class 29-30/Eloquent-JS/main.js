//A vector type//
class Vector {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    
    plus(vec) {
        return new Vector(this.x + vec.x, this.y + vec.y);
    };
    
    minus(vec) {
        return new Vector(this.x - vec.x, this.y - vec.y);
    };

    get length() {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    };
}

console.log(new Vector(1, 2).plus(new Vector(2, 3))); // Vec { x: 3, y: 5 }
console.log(new Vector(1, 2).minus(new Vector(2, 3))); // Vec { x: -1, y: -1 }
console.log(new Vector(3, 4).length); // 5

//Groups//
class Group {
    constructor() {
      this.arr = [];
    }
  
    static from(arr) {
      let group = new Group();
      group.arr = arr;
      return group;
    }
  
    has(item) {
      for (let i = 0; i < this.arr.length; i++) {
        if (this.arr[i] === item) {
          return true;
        }
      }
      return false;
    }
  
    add(item) {
      if (!this.has(item)) {
        this.arr.push(item);
      }
    }
  
    delete(item) {
      this.arr = this.arr.filter(i => i !== item);
    }
  }
  
  let group = Group.from([10, 20]);
  console.log(group.has(10)); // → true
  console.log(group.has(30)); // → false
  group.add(30);
  group.delete(10);
  console.log(group.has(10)); // → false

//Iterable groups//
//Code.....//