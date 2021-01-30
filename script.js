function quantityChanger(classType, isIncrease){
    var type =  document.getElementById(classType).value
    if(isIncrease == true){
        document.getElementById(classType).value = ++type
    }
    else{
        if(type == 0){
            return
        }
        document.getElementById(classType).value = --type
    }
    totalUpdate();
}

function totalUpdate(){
    var economyClass = document.getElementById('economyclass-quantity').value
    var firstClass = document.getElementById('firstclass-quantity').value
    var subtotal = firstClass*150 + economyClass*100;
    document.getElementById('subtotal').innerText = subtotal
    var tax = subtotal * 0.1
    document.getElementById('tax').innerText = tax
    var total = subtotal + tax
    document.getElementById('total').innerText = total
}

function confirmationArea(){
    document.getElementById('mainarea').style.display = "none"
    const totalCheck = document.getElementById("total").innerText;
    if(totalCheck == 0){
        document.getElementById('noticket-box').style.display = "block"
    }
    else{
        document.getElementById('confirm-box').style.display = "block"
    }
}