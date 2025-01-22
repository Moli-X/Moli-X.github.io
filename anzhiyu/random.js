var posts=["2025/01/22/这是一篇新的博文/","2025/01/22/这是一篇HMI的博文/","2025/01/22/这是一篇机械手的文章/","2025/01/21/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };