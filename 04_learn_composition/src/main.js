import { createApp } from 'vue'
// import App from './01_composition初体验/App.vue'
// import App from './02_setup定义数据/App.vue';
// import App from './03_setup其他函数/App.vue';
// import App from './04_setup中的toRefs/App.vue';
// import App from './05_setup中的computed/App.vue';
// import App from './06_setup中ref引入元素/App.vue';
// import App from './07_setup中的生命周期函数/App.vue';
// import App from './08_setup中provide和inject/App.vue';
// import App from './09_setup监听数据变化/App.vue';
// import App from './10_setup中hooks使用/App.vue';
// import App from './11_setup中hooks练习2/App.vue';
import App from './12_script_setup语法/App.vue';


window.__VUE_PROD_DEVTOOLS__ = false;
window.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false;
createApp(App).mount('#app')
