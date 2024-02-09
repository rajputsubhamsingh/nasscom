let promiseOne = new Promise((resolve, reject) => {
    if(true){
        resolve("I am successfull.")
    }
    else {
        reject("I am failed.")
    }
});

promiseOne.then(function(result){
    console.log(result);
}).catch(function(e) {
    console.log("Error : " + e);
})