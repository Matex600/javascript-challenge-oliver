let calculateBtn = document.getElementById('calculate');



calculate.addEventListener('click', function(){
    let initialCharge = document.getElementById('speaker').value;
    let percentageCommision = document.getElementById('percentage-commision').value;

    
    let organiserCommission = document.getElementById('commission-amount').value = (initialCharge / 100) * percentageCommision;
    document.getElementById('final-charge').value = parseFloat(initialCharge) + parseFloat(organiserCommission);
    e.preventDefault();
})