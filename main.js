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