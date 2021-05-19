export default function pipe({middlewares, index, store, next}){
    if(!middlewares[index]) return next();
    else return middlewares[index](store)
    .then(()=>pipe({middlewares: middlewares,index: index+1, next: next}))
    .catch(obj=>next(obj));
}