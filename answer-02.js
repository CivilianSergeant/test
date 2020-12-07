function countTriplet(arr,r){
    arr.sort((a,b)=>a-b);
    let res = [];
    let obj = {};
    
    for(n=0;n<arr.length;n++){
        if(isNaN(obj[arr[n]])) 
            obj[arr[n]]=1;
        else
            obj[arr[n]]++;
    }

    for (n=0; n<arr.length; n++){
        let i = (arr[n]/r);
        let j = arr[n];
        let k = arr[n]*r;
        if((arr.indexOf(i) !== -1) && (arr.indexOf(k) !== -1)){

            if(obj[k]>1){
                for(a=0; a<obj[k]; a++){
                    res.push([i,j,k])
                }
            }else if(obj[i]>1){
                for(a=0; a<obj[i]; a++){
                    res.push([i,j,k])
                }
            } else {
                res.push([i,j,k])
            }
        }
    }
    return res.length;
}

let data = [1,4,16,64];
let r = 4;
console.log(countTriplet(data,r))