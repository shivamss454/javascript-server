var x=Number(process.argv[2])
function fun()
{
//let x;
let p="";
 for(let i=0;i<2*x-1;i++)
 {
  k=1;
  p="";
   for(let j=0;j<2*x-1;j++)
    {
		
	    if(i<x)
        {
        	if((j>=x-1-i)&&(j<=x-1+i)&&k)
            {
			p+="*"
	        k=0;
	        }
            else
	       {
			
			p+=" "
	       k=1;
	       }
	    }
       else
	   {
	      if(j>=i-x+1&&j<=3*(x-1)-i&&k)
          {
			  p+="*"
	          k=0;
	      }
          else
	      {
			  p+=" "
	          k=1;
	      }
		}
			
    }
	console.log(p);
 }
 
}
fun();

