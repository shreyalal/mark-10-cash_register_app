var bill = document.querySelector("#bill");
var cash = document.querySelector("#cash");
var check = document.querySelector("#check");
var next = document.querySelector("#next");
var imp = document.querySelector("#imp");


var message = document.querySelector("#message");
var noOfNotes = document.querySelectorAll(".no-of-notes");

var notes = [2000, 500, 100, 20, 10, 5, 1];

function hideWelcome() {
imp.style.display = "none";
    
}
hideWelcome();

next.addEventListener("click", function(){
    if(bill.value > 0){
        imp.style.display = "block";
        next.style.display = "none";
    }
})

check.addEventListener("click", function(){
    hideMessage();
    if(bill.value > 0)
    {
        if(Number(cash.value) > Number(bill.value))
        {
            var returnAmount = cash.value - bill.value;
            console.log(returnAmount);
            calculateChange(returnAmount);
        }
        else if(Number(cash.value) === Number(bill.value))
        {
            showMessage("Cash Amount and Bill Amount is same, No change required!")
        }
        else
        {
            if(cash.value < 0)
                showMessage("Cash Amount cannot be negative!");
            else if(cash.value > 0)
                 showMessage("Give more cash!");
            else if(cash.value == 0)
                showMessage("Please enter cash amount greater than zero!"); 
            else
                showMessage("Cash Amount entered is not a valid number!");

        }
    }
    else
    {
        if(bill.value < 0)
            showMessage("Bill Amount cannot be negative!");
        else if(bill.value == 0)
            showMessage("Bill Amount cannot be zero!");
        else 
            showMessage("Bill Amount entered is not a valid number!");
    }
})


function calculateChange(amount) {
    var i = 0;

    while(i < 7)
    {
        var numberofNote = Math.trunc((amount/notes[i]));
        amount = amount % notes[i];
        noOfNotes[i].innerText = numberofNote.toString();
        i++;
    }
}




function hideMessage()
{
    message.style.display = "none";
}


function showMessage(errorMessage){
    message.style.display = "block";
    for(var i = 0; i < notes.length; i++)
    {
        noOfNotes[i].innerText = "";

    }
    message.innerText = errorMessage;
}
