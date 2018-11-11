var m1=require('./cicrcle.js');
var area1=m1.calarea(10);
console.log("area of circle is" +area1);
var circum=m1.calcircum(10);
console.log("circumference of circle is" +circum);
var dia=m1.caldiam(10);
console.log("diameter of circle is" +dia);


var m2=require('./rectangle.js');
var area1=m2.calarea(10,5);
console.log("area of rectangle is" +area1);
var peri=m2.calperi(10,5);
console.log("perimeter of rectangle is" +peri);


var m3=require('./triangle.js');
var eq=m3.chkEqu1(5,5,5);
if(eq==1)
{

console.log("all sides are equal");
}
else{
	console.log("all sides are not equal");
}
var peri=m3.calperi(5,4,6);
console.log("perimeter of triangle is" +peri);


