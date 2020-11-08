Object.getOwnPropertyNames(window).filter((prop)=>{
    return typeof window[prop] === "function";
}).forEach(item => {
    console.log(item)
});