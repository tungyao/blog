//TODO 显示主页
let discover = new Mosaic({
    name: "discover-main",
    data: {switchPage: null},
    data:{
        list:["this is a list title and list body1","this is a list title and list body2","this is a list title and list body3","this is a list title and list body4"],
        color:3
    },
    view() {
        return html`
        <div>
        <ul class="discover-list">
        ${this.data.list.map((k,v)=>html`<li class="discover-list-item bg-${COLORLIST[parseInt(Math.random()*5+1)]}">${this.data.list[v]}</li>`)}
        
</ul>
</div>
        `;
    }
});
new Mosaic({
    name: "my-discover.sass",
    element: "discover",
    data: {pointer: "discover"},
    switchPage() {
        this.data.pointer = this.data.pointer !== 'other' ? 'other' : 'discover';
    },
    selectIndex() {
        if (this.data.pointer === "discover") {
            return html`<discover-main down="${this.switchPage.bind(this)}"></discover-main>`
        } else {
            return html`<h1>OTHER </h1>`
        }
    },
    view() {
        return html`
        <div style="height: ${window.innerHeight}px;width: 1120px;">
        ${this.selectIndex()}
</div> 
        `;
    }
}).paint();
