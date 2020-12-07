function analizeRecords(arr){
  
  if(arr === undefined){
    throw 'Array not valid'
  }

  if(arr.length===0){
    return 0;
  }

  let nts = arr.filter(n=> n<0);
  let pts = arr.filter(n=> n>0);
  
  nts.sort((a,b)=> b-a);
  pts.sort((a,b) => a-b);

  let n1 = nts[0];
  let p1 = pts[0];

  if ((n1+p1)===0){
    return p1;
  }

  if(Math.abs(n1)<p1){
    return n1;
  }
  return p1;
}

let ts = [1,7,-10,13,8,4,-7.2,-12,-3.7,3.5,-9.6,6.5,-1.7,-6.2,7];
console.log(analizeRecords(ts));