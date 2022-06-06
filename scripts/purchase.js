var arr=JSON.parse(localStorage.getItem("purchase"))
arr.forEach(function(el){
    let box=document.createElement("div")
    let image=document.createElement("img")
    image.src=el.image;
    let p1=document.createElement("p")
    p1.innerText=el.name;
    let p2=document.createElement("p")
    p2.innerText=el.price;
    box.append(image,p1,p2)
    document.getElementById("purchased_vouchers").append(box)

})