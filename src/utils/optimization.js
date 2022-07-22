// 节流函数
export const throttle = (handler, wait=300) => {
    let timer = null;
    return function(){
        const context = this;
        const args = arguments;
        if(timer){
            return ;
        }
        timer = setTimeout(() => {
            handler.apply(context, args);
            timer = null;
        }, wait);
    };
};
// 防抖函数
export const debounce = (handler, wait=300) => {
    let timer = null;
    return function(){
        const context = this;
        const args = arguments;
        timer = setTimeout(() => {
            handler.apply(context, args);
            timer = null;
        }, wait);
    };
};