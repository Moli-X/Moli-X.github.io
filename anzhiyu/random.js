var posts=["2025/01/22/这是一篇HMI的博文/","2025/01/22/测试博文/","2025/03/13/HMI触摸屏程序设计详解/","2025/03/13/工业机器人取放料程序详解/","2025/03/13/工业机器人编程指南/","2025/01/22/这是一篇机械手的文章/","2025/01/21/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };