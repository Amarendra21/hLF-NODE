exports.fizz=function()
{ var flag=1;
var i=1;
 var str='';

for(var i=1;i<=100;i++)
	{
		if(i%3==0)
		{
		str+="FIZZ";	
		str+='\n';	
		}
		else{
		str+=i;
		str+='\n';
		}
		
	}
	//console.log(str);
	return str;
}