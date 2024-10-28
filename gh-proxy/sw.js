// 服务工作者示例
self.addEventListener('install', event => {
    console.log('服务工作者安装完成');
});

self.addEventListener('activate', event => {
    console.log('服务工作者激活');
});

self.addEventListener('fetch', event => {
    event.respondWith(fetch(event.request));
});
