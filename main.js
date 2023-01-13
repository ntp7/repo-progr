function sayHello(){
    const cont = document.getElementById("container");
    for(let i = 0; i<5;i++){
        // kx = document.createElement("div");
        // kx.setAttribute("class","kaste")
        // kx.innerHTML =i;
        const xmlns = "http://www.w3.org/2000/svg";
        cx = document.createElementNS(xmlns, "circle");//NS means name space
        cx.setAttribute("cx", Math.random() * 600);
        cx.setAttribute("cy", Math.random() * 300);
        cx.setAttribute("r", Math.random() * 200);
        cx.setAttribute("class", "bumba");

        cont.appendChild(cx);
    }
}
let bumbaX=100;
let bumbaY=100;
let laiks = new Date();

function initAnim(){
    bumbaX = 50;
    bumbaY = 50;
    laiks = new Date();
}

function anim(){
    
    const c = document.getElementById("anima");
    const tagad = new Date();
    const cx = bumbaX += 1;
    const cy = bumbaY += 2;
    c.setAttribute("cx",cx);
    c.setAttribute("cy",cy);
    if (bumbaX <= 200) 
    setTimeout(anim, 1);
    

    
    
   // (tagad.getTime() - laiks.getTime()) / 100
}

/*
<line>
<rect>
<ellipse>
<path>
<polygon>
<polyline>
*/

//     alert("yoooo");
//     document.getElementById("lielais").innerHTML="trSolled brrrrrrr" 

function sayBye(){
    alert("go away");
}

class Ball{
    constructor(color,x,y,r){
        const xmlns = "http://www.w3.org/2000/svg";
        const g = document.createElementNS(xmlns, "g");
        this.hero = g;

        this.hero.setAttribute("transform", `translate${x} ${y}`);

        const c = document.createElementNS(xmlns, "circle");//NS means name space
        //c.setAttribute("cx", x);
        //c.setAttribute("cy", y);
        c.setAttribute("class", "bumba");
        c.setAttribute("style",`fill:${color}`);
        this.body = c;
        this.color = color;
        this.x = x;
        this.y = y;
        this.r = r;

        g.appendChild(this.initHero(color,x,y,r));

    }
    initHero(color, x, y, r){
        const xmlns = "http://www.w3.org/2000/svg";
        const c = document.createElementNS(xmlns, "circle");//NS means name space
        c.setAttribute("class", "bumba");
        c.setAttribute("style",`fill:${color}`);
        this.body = c;
        this.color = color;
        this.x = x;
        this.y = y;
        this.r = r;
        return c;
    }
    insert(containerId){
        const cont = document.getElementById(containerId);//dom
        cont.appendChild(this.body);
    }
    remove(){
        this.body.remove();
    }
    setX(x){
        this.x=x;
        this.body.setAttribute("cx", x);
    }
    setY(y){
        this.y=y;
        this.body.setAttribute("cy", y);
    }    
    get r(){
        //return this._r;
        return parseFloat(this.body.getAttribute("r"));
    }
    set r(r){
        //this._r = r;
        this.body.setAttribute("r", r);
    }
    copy(){
        //return new Ball(this.color, this.x, this.y, this.r);
        //b.body.parentNode.getAttribute("id");
        const buddy = new Ball(this.color, this.x, this.y, this.r);
        buddy.insert(this.body.parentNode.getAttribute("id"));
        return buddy;
    }
}
