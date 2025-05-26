var posts=["2025/05/20/hello-world/","2025/05/26/lrc-maker/","2025/05/20/archive-old-blogs/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };