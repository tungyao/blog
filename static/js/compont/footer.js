const ft = new Mosaic({
    name: 'my-footer',
    element: 'footer',
    view: function () {
        return html`
<div style="margin: 0;padding: 1rem 0 0 0;height: 12rem;width: 100%;display: flex;justify-content: space-between;flex-direction: row">
       <div style="width: 10%;display: flex;flex-direction: column;justify-content: center;align-items: center;border-right: darkgray 1px solid">
       <div style="background-image: url('images/favicon.png');background-size:contain;background-repeat:no-repeat;width: 50%;height: 50%">
       </div>
       <p style="font-family: 'Arial',monospace;">Tung Yao©2019</p>
</div>
       <div style="width: 90%;">
       <div style="display:flex;justify-content: flex-start;flex-flow: row wrap">
       <a target="_blank" href="https://mosaicjs.site" style="margin:1rem;width: 5rem;height: 5rem;display: flex;justify-content: center;align-items: center">
              <img src="images/MosaicLogo.50cf5e0e.png" alt="" width="100%" >
</a>
       <a target="_blank" href="https://golang.google.cn" style="margin:1rem;width: 5rem;height: 5rem;display: flex;justify-content: center;align-items: center">
       <img src="https://golang.google.cn/lib/godoc/images/go-logo-blue.svg" alt="" width="100%" >
</a>
       <a href="http://nginx.org" style="margin:1rem;width: 5rem;height: 5rem;display: flex;justify-content: center;align-items: center">
       <img src="http://nginx.org/nginx.png" alt="" width="100%" >
</a>
       <a target="_blank" href="http://lesscss.cn" style="margin:1rem;width: 5rem;height: 5rem;display: flex;justify-content: center;align-items: center">
       <img src="http://s.nodejs.cn/less/img/logo.png" alt="" width="100%">
</a>
       <a target="_blank" href="https://redis.io" style="margin:1rem;width: 5rem;height: 5rem;display: flex;justify-content: center;align-items: center" >
       <img src="https://redis.io/images/redis.png" alt="" width="100%" >
</a>
       <a target="_blank" href="https://www.mysql.com/" style="margin:1rem;width: 5rem;height: 5rem;display: flex;justify-content: center;align-items: center">
       <img src="https://labs.mysql.com/common/logos/mysql-logo.svg?v2" alt="" width="100%" >
</a>
</div>
</div>
</div>
        `;
    }
});
// Paint the Mosaic onto the page.
ft.paint();