var order=JSON.parse(localStorage.getItem("user"))


order.forEach(function(el){
    var c=document.createElement("p")
    c.innerText=el.amount
    document.getElementById("wallet_balance").append(c)
})

let d=[];
async function voucher(){
    try{
        let url="https://masai-vouchers-api.herokuapp.com/api/vouchers"
        let res=await fetch(url)
        let data=await res.json()
        console.log(data)
        append(data.vouchers)

    }
    catch(err){
        console.log(err)
    }
}
voucher();
    function append(data){
         let container=document.getElementById("voucher_list")
        data.map(function(el){
        console.log(el)
        let box=document.createElement("div")
        let image=document.createElement("img")
        image.src=el.image;
        let p1=document.createElement("p")
        p1.innerText=el.name;
        let p2=document.createElement("p")
        p2.innerText=el.price;
        let btn=document.createElement("button")
        btn.innerText="BUY NOW"
        btn.addEventListener("click",function(){
            buynow(el)
        })
        box.append(image,p1,p2,btn)
        container.append(box)
      
    })
}
function buynow(el){
    d.push(el)
    localStorage.setItem("purchase",JSON.stringify(d))
    window.location.href="purchase.html"

}