var posts=["2025/01/22/这是一篇HMI的博文/","2025/03/13/HMI触摸屏程序设计详解/","2025/03/13/安装AnZhiYu主题并个性化配置/","2025/03/13/工业机器人编程指南/","2025/03/13/工业机器人取放料程序详解/","2025/01/22/这是一篇机械手的文章/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };