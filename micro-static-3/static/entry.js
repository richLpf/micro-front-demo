const render = ($) => {
    $('#app').html('Hello, render html, 一个通过http服务部署的静态网站');
    return Promise.resolve();
};

((global) => {
    global['static'] = {
      bootstrap: () => {
        console.log('purehtml bootstrap');
        return Promise.resolve();
      },
      mount: () => {
        console.log('purehtml mount');
        return render($);
      },
      unmount: () => {
        console.log('purehtml unmount');
        return Promise.resolve();
      },
    };
})(window);