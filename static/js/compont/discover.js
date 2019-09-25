//TODO 显示主页
let discover = new Mosaic({
    name: "discover-main",
    data:{switchPage:null},
    view() {
        return html`
        <div>
        <ul>
        <li></li>
</ul>
</div>
        `;
    }
});
new Mosaic({
    name:"my-discover",
    element:"discover",
    data:{pointer:"discover"},
    switchPage(){
        this.data.pointer =this.data.pointer!=='other'?'other':'discover';
    },
    selectIndex(){
        if (this.data.pointer==="discover") {
                return html`<discover-main down="${this.switchPage.bind(this)}"></discover-main>`
        }else{
            return html`<h1>OTHER </h1>`
        }
    },
    view(){
        return html`
        <div style="height: ${window.innerHeight}px;">
        ${this.selectIndex()}
</div> 
        `;
    }
}).paint();
