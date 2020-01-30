let x=Number(process.argv[2])
export default function myfun(x)
{
  let k,p;
for(let i=0;i<x;i++)
   {

   k=true;

   p="";

    for(let j=0;j<2*x-1;j++)

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

<<<<<<< HEAD
}
=======
}
export default myfun;
>>>>>>> 0d66f5a5aa7455baa13ce09893a2dee07311ac7c
