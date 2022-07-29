import {inject} from 'vue';
export default function(){
    const updateValue = inject('updateValue', null);
    return (value) => {
        updateValue && updateValue(value);
    };
}