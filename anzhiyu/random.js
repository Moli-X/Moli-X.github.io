var posts=["2025/01/22/台达触摸屏在工业自动化中的应用/","2025/01/22/色标补偿功能块实现详解/","2025/03/13/HMI触摸屏程序设计详解/","2025/03/13/安装AnZhiYu主题并个性化配置/","2025/03/13/凸轮表生成功能块实现详解/","2025/03/13/工业机器人编程指南/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };