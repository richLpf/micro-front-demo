import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './public-path'

const app = createApp(App);

function render(props) {
  const { container } = props;
  app.use(router)
  .mount(container ? container.querySelector('#app') : '#app')
}

// 独立运行时
if (!(window).__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
    console.log('bootstrap');
}

export async function mount(props) {
    console.log('mount', props);
    render(props);
}

export async function unmount() {
    console.log('unmount');
    app.unmount();
}
