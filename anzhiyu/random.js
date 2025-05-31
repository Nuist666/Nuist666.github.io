var posts=["2025/05/20/hello-world/","2025/05/20/archive-old-blogs/","2025/05/31/libretv/","2025/05/26/lrc-maker/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };