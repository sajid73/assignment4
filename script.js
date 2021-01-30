// This function for plus / minus button to increase or decrease ticket quantity
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

// To updating subtotal and total price with tax
function totalUpdate(){
    var economyClass = document.getElementById('economyclass-quantity').value
    var firstClass = document.getElementById('firstclass-quantity').value
    var subtotal = firstClass*150 + economyClass*100;
    document.getElementById('subtotal').innerText = subtotal
    var tax = subtotal * 0.1
    document.getElementById('tax').innerText = tax
    var total = subtotal + tax
    document.getElementById('total').innerText = total
    return total
}

// To handle booking confirmation and error
function confirmationArea(){
    document.getElementById('mainarea').style.display = "none"
    var totalPrice = totalUpdate();
    const totalCheck = document.getElementById("total").innerText;
    if(totalCheck == 0){
        document.getElementById('noticket-box').style.display = "block"
    }
    else{
        document.getElementById('confirm-box').style.display = "block"
        const economyClass = document.getElementById('economyclass-quantity').value
        const firstClass = document.getElementById('firstclass-quantity').value
        const confirmBox = document.getElementById('confrim-messege')
        if(firstClass > 0 && economyClass > 0){
            confirmBox.innerText = firstClass + " first class & " + economyClass + " economy class ticket\nTotal : $" + totalPrice
        }
        else if(firstClass > 0){
            confirmBox.innerText = firstClass + " first class ticket\nTotal : $" + totalPrice
        }
        else{
            confirmBox.innerText = economyClass + " economy class ticket\nTotal : $" + totalPrice
        }
    }
}