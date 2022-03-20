
const somethingsWllHappen = () => {
    return new Promise ((resolve, reject) => {
        if(true){
            resolve ("Hey ");
        }else{
            reject ("Ups");
        }

    });
};


somethingsWllHappen()
    .then(response => console.log(response))
    
    const somethingsWllHappen2 =() => {
        return new Promise ((resolve, reject) =>{
            if(true){
                setTimeout(() => {
                    resolve("true");
                },2000);
            }else{
                const error = new Error("Upsssssss"); 
                reject(error);
            };
         });
    
        }
    somethingsWllHappen2()
    .then(response => console.log(response))
    .catch(Err => console.error(err));


// promesas tercer manera

Promise.all([somethingsWllHappen(),somethingsWllHappen2()])
        .then(response => {
            console.log('array of results', response);
        })
        .catch (err => {
            console.error(err);
        })









