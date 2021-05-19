export default ()=>{
    return new Promise((resolve, reject)=>{
        const token = localStorage.token;
        if (!token) return reject({name: 'login'});
        return resolve(true);
    });
}