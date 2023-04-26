function MyArray() {
    var arry=[4,5,6,7,8,9];
    this.remove=function () {
        arry.length--;
        return arry;
    }
}
var arr = new MyArray();
console.log(arr.remove(9));