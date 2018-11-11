function myfunction(){
    var name="Kishori";
	function check(){
	    var n="Akurdi";
		return n+"  " +name;
	}
    console.log("value :"+name);
	//console.log("value :"+n); //this will give you error
	return check();

}

console.log(myfunction());