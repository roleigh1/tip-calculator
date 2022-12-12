
// DOM elements
let inputBill = document.getElementsByClassName('bill-amount')[0].value;
let inputPeople = document.getElementsByClassName('number')[0].value;
let inputCustom = document.getElementsByClassName('costum')[0].value;
let btn_5 = document.getElementById('btn_5').value;
let btn_10 = document.getElementById('btn_10').value;
let btn_15 = document.getElementById('btn_15').value;
let btn_25 = document.getElementById('btn_25').value;
let btn_50 = document.getElementById('btn_50').value;
let btnContainer = document.getElementById('grid');
let allBtns= btnContainer.getElementsByClassName('btn');
let btnReset = document.getElementsByClassName('reset'); 


// calculation 

let amount5 = inputBill * btn_5 / inputPeople; 
let amount10 = inputBill * btn_10 / inputPeople;
let amount15 = inputBill * btn_15 / inputPeople;
let amount25 = inputBill * btn_25 / inputPeople;
let amount50 = inputBill * btn_50 / inputPeople; 
let amountCus = inputBill / 100 * inputCustom / inputPeople;

let total5 = inputBill / inputPeople;
let result5 = total5 + amount5;
let total10 = inputBill / inputPeople;
let result10 = total10 + amount10;
let total15 = inputBill / inputPeople;
let result15 = total15 + amount15;
let total25 = inputBill / inputPeople;
let result25 = total25 + amount25;
let total50 = inputBill / inputPeople;
let result50 = total50 + amount50;
let totalCus = inputBill / inputPeople; 
let resultCus = totalCus + amountCus;


// make the btns active on click

// we through the btns and add the active class to the current/clicked btn



for(let i = 0; i < allBtns.length; i++){
    allBtns[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active");

        // if there is no active class 
         
        if(current.length > 0){
            current[0].className = current[0].classsName.replace(" active","");
        }
        // Add the active class to the current/clicked btn
        this.className += " active";

    });
}

// the function to calculate on % Btn click 
function calc5(){
         document.querySelector('#amount').innerHTML = `$${amount5}`;
         document.querySelector('#total').innerHTML = `$${Math.floor(result5)}`
}
function calc10(){
         document.querySelector('#amount').innerHTML = `$${amount10}`;
         document.querySelector('#total').innerHTML = `$${Math.floor(result10)}`;
}
         function calc15(){
         document.querySelector('#amount').innerHTML = `$${amount15}`;
         document.querySelector('#total').innerHTML = `$${Math.floor(result15)}`
}   
function calc25(){
         document.querySelector('#amount').innerHTML = `$${amount25}`;
         document.querySelector('#total').innerHTML = `$${Math.floor(result25)}`   
}
function calc50(){
         document.querySelector('#amount').innerHTML = `$${amount50}`;	
         document.querySelector('#total').innerHTML = `$${Math.floor(result50)}`;
}
//  function to calculate with the customBTN 

function enter(element,e){
        let charCode;
        if (e && e.which){
            charCode = e.which;
        } else if (window.event){
            e = window.event;
            charCode = e.keyCode;
        }
        if(charCode == 13) {
            document.querySelector('#amount').innerHTML = `$${amountCus}`;
            document.querySelector('#total').innerHTML = `$${Math.floor(resultCus)}`;
        }


}

// reset btn
function reset(){
    location.reload();
    
      
}
