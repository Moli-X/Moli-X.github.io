var posts=["posts/article/theme/实现3D效果教程/","posts/article/theme/安知鱼主题教程/","posts/article/automation/HMI/HMI触摸屏程序设计详解/","posts/article/automation/HMI/台达触摸屏在工业自动化中的应用/","posts/article/automation/scara/工业机器人编程指南/","posts/article/automation/controller/凸轮表生成功能块实现详解/","posts/article/automation/controller/色标补偿功能块实现详解/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };