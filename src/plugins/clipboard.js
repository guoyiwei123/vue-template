export default {
    install(app){
        const createElement = (value) => {
            const el = document.createElement('textarea');
            el.value = value;
            el.style.position = 'absolute';
            el.style.left = '-9999px';
            el.style.top = '-1000px';
            return el;
        };
        // 选中文本
        const select = (el) => {
            el.select();
            el.setAttribute('readonly', '');
            el.setSelectionRange(0, el.value.length);
        };
        const clipBoard = (value) => {
            // // 判断当前浏览器是否支持navigator.clipboard
            if(navigator.clipboard && navigator.clipboard.writeText){
                navigator.clipboard.writeText(value);
            }else{
                const el = createElement(value);
                document.body.appendChild(el);
                // 选中文本
                select(el);
                document.execCommand('copy');
                // target.focus();
                window.getSelection().removeAllRanges();
                setTimeout(() => {
                    // el.remove();
                }, 100);
            }
        };
        const version = app.version.split('.')[0];
        switch(version){
            case 2 :
                app.prototype.$clipBoard = clipBoard;
                break;
            default :
                app.provide('clipBoard', clipBoard);
                break;
        }
    }
};