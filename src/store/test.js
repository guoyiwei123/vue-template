import {defineStore} from 'pinia';
export const useTestStore = defineStore({
    state: () => ({
        status: false
    }),
    getters: {
        statusInfo: (state) => {
            return `status状态: ${state.status}`;
        }
    },
    actions: {
        setStatus(status){
            this.status = status;
        }
    }
})