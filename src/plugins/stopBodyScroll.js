export default {
    install(app){
        // top位置
        let top = 0;
        const version = app.version.split('.')[0];
        // 停止滚动
        const stopBodyScroll = () => {
            window._stop_scroll = true;
            const bodyEl = document.body;
            top = window.scrollY;
            window.scrollTo(0, 0);
            bodyEl.style.position = "fixed";
            bodyEl.style.top = `-${top}px`;
            bodyEl.style.width = "100%";
            bodyEl.style.overflow = "hidden";
        }
        // 注销停止滚动
        const unStopBodyScroll = () => {
            const bodyEl = document.body;
            bodyEl.style.position = "";
            bodyEl.style.top = "";
            bodyEl.style.backgroundColor = "";
            bodyEl.style.width = "";
            bodyEl.style.overflow = "";
            window.scrollTo(0, top);
            top = 0;
            window._stop_scroll = false;
        }
        // 是否已停止滚动
        const isStopBodyScroll = () => window._stop_scroll;
        switch(version){
            // vue2
            case 2:
                app.prototype.$stopBodyScroll = stopBodyScroll;
                app.prototype.$unStopBodyScroll = unStopBodyScroll;
                app.prototype.$isStopBodyScroll = isStopBodyScroll;
                break;
            // 默认为3
            default:
                app.config.globalProperties.$stopBodyScroll = stopBodyScroll;
                app.config.globalProperties.$unStopBodyScroll = unStopBodyScroll;
                app.config.globalProperties.$isStopBodyScroll = isStopBodyScroll;
                break;
        }
    }
}