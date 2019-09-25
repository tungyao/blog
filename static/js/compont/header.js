new Mosaic({
    name:"my-header",
    element:"header",
    view(){
        return html`
<nav class="nav">
<div class="center">
<div class="other">
<a href="discover.html">探索</a>
<a href="topical.html">主题</a>
<a href="hot.html">热门</a>
<!--<a href="/">活动</a>-->
</div>
<div class="logo">
<a href="">LOGO</a>
</div>
</div>
</nav>
        `;
    }
}).paint();