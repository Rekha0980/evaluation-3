var user=[]
function submit(){
    var obj={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        address:document.getElementById("address").value,
        amount:document.getElementById("amount").value,
    }
    user.push(obj)
    localStorage.setItem("user",JSON.stringify(user))
    
}