

function addPromise (a, b){
    return new Promise(function(resolve, reject) {
        if(typeof a === 'number' && typeof b === 'number'){
            resolve(a+b);
        } else{
            reject('Either one is not a number');
        }
    });
}

addPromise (1,2).then(function(calc){
    console.log(calc);
}, function (err){
    console.log("eerrr");
});

addPromise ('a',2).then(function(calc){
    console.log(calc);
}, function (err){
    console.log("eerrr");
});

addPromise (1,'b').then(function(calc){
    console.log(calc);
}, function (err){
    console.log("eerrr");
});

addPromise ('c', 'c').then(function(calc){
    console.log(calc);
}, function (err){
    console.log("eerrr");
});

