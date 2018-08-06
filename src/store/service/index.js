export function getList({id}){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve({id:1})
        }, 200);
    })
}