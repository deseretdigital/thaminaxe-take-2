export default function freezeDeep(obj) {
    if(typeof(obj) === 'object' && obj !== null) {
        Object.freeze(obj);
        Object.keys(obj).forEach(key => {
            freezeDeep(obj[key]);
        });
    }
}
