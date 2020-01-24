var x=Number(process.argv[2])
function myfun()
{
for(i=0;i<x;i++)
   {

   k=true;

   p="";

    for(j=0;j<2*x-1;j++)

    {
       if(j>=x-1-i && j<=x-1+i && k)

         {

          p+="*";

          k=false;

         }

       else

       {

        p+=" ";

        k=true;

        }

}

console.log(p);

}

}
myfun();