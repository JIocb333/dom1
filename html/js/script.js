function ass() {
  let n=14;
  if (n==0) {
    console.log('sory pysto)');
  }
  console.log(n==0? 'pysto':'not');
  if (n>=2 && n<=5 ){console.log('2-5 aples');}
  else {
    console.log('no ');
  }
  if (n%3===0 || n%7==0){console.log('zaebis');}
  else {
    console.log('bead');
  }

}
ass();
/*----------------------------------*/
function error() {
  let x=-34;
  console.log(-x);
  return -x;
}
error();
/*------------------------*/
function kub() {
  let a,b,c,z;
  a=prompt('input a=');
  b=prompt('input b=');
  c=prompt('input c=');
  z=a*b*c;
  console.log('volume=',z);
  return z;
}
kub();
/*----------------------*/
function abra() {
  let x=9,rez;
  if (x>20) {
    rez=x*x;
    console.log(rez);
  }
  if (x<0) {
    rez=x*x*x;
    console.log(rez);
  }
  if (x==0) {
    rez='null';
    console.log(rez);
  }
  if (x>0 && x<=20) {
    if (x%2==0) {
      rez=x/2;
      console.log(rez);
    } else {
      rez=parseInt(x.toString()+x.toString()+x.toString());
      console.log(rez);
    }
  }
  return rez;
}
abra();
function user() {
  let rez;
  rez=prompt('userName:');
  return rez;
}
document.querySelector('h1').innerText =user();
/*--------------------------------*/
function valid() {
  let   x=document.querySelector('[name="fname"]').value;
  let   y=document.querySelector('[name="lname"]').value;
  let   z=document.querySelector('[name="phone"]').value;
  let   q=document.querySelector('[name="email"]').value;
  console.log('zaebis',x);
  if (x.length>0 && y.length>0 && z.length>0 && q.length>0) {
    x=true;
  } else {x=false;}
  console.log('x=',x);
  return x;
}
