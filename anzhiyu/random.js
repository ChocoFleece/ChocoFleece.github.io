var posts=["2023/05/25/2-tokyounotenki/","2023/05/23/1-hello,world!/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};