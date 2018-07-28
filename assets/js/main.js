$(document).ready(function () {
    $(document).on("click", ".buyOneTicket, .increment, #tixBuy, #tixReinvest", function () {
        if (typeof web3 === 'undefined') {
            $('#loading').modal({
                //  backdrop: 'static',
                //  keyboard: false
            });
        }
        else {
            web3.eth.getAccounts(function (err, accounts) {
                if (err != null) console.error("An error occurred: " + err);
                else if (accounts.length == 0) {
                    // console.log("User is not logged in to MetaMask");
                    // $('#loading2').modal({
                    //     // backdrop: 'static',
                    //     // keyboard: false
                    // });  
                }
                else
                    console.log("User is logged in to MetaMask");
            });
        }
    });

    $(document).on("click", "#addOne", function () {
        newval = $('#tixToBuy').val().replace(' Key', '');
        newval++;
        newQuotation = newval * 0.00547450;

        $('#tixToBuy').val(newval + ' Key');
        $('#tixQuotation').html('@ ' + newQuotation + ' ETH');
    });

    $(document).on("click", "#addTwo", function () {
        newval = $('#tixToBuy').val().replace(' Key', '');
        newval = eval(newval) + 2;
        newQuotation = newval * 0.00547450;

        $('#tixToBuy').val(newval + ' Key');
        $('#tixQuotation').html('@ ' + newQuotation + ' ETH');
    });

    $(document).on("click", "#addFive", function () {
        newval = $('#tixToBuy').val().replace(' Key', '');
        newval = eval(newval) + 5;
        newQuotation = newval * 0.00547450;

        $('#tixToBuy').val(newval + ' Key');
        $('#tixQuotation').html('@ ' + newQuotation + ' ETH');
    });

    $(document).on("click", "#addTen", function () {
        newval = $('#tixToBuy').val().replace(' Key', '');
        newval = eval(newval) + 10;
        newQuotation = newval * 0.00547450;

        $('#tixQuotation').html('@ ' + newQuotation + ' ETH');
        $('#tixToBuy').val(newval + ' Key')
    });

    $(document).on("click", "#addHundred", function () {
        newval = $('#tixToBuy').val().replace(' Key', '');
        newval = eval(newval) + 100;
        newQuotation = newval * 0.00547450;

        $('#tixToBuy').val(newval + ' Key');
        $('#tixQuotation').html('@ ' + newQuotation + ' ETH');
    });

    $('#tutorialswitch').change(function () {
        var value = $(this).prop("checked") ? 'true' : 'false';
        console.log(value);
        if (value == 'false')
            $('.tutorial').hide();
        else
            $('.tutorial').show();
    })

    var countDownDate = new Date("Sep 5, 2018 14:39:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now an the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        if (hours / 10 < 1)
            hours = '0' + hours;

        if (minutes / 10 < 1)
            minutes = '0' + minutes;

        if (seconds / 10 < 1)
            seconds = '0' + seconds;

        $('.headtimer, .boxtimer').html(hours + ":" + minutes + ":" + seconds);

        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            $('.headtimer').html("EXPIRED");
        }
    }, 1000);

    this.web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

    $(document).on("click", "#tixBuy", function () {
        amount = $('#tixQuotation').html().replace('@ ', '');
        amount = amount.replace(' ETH', '');
        console.log(amount);
        const wei = web3.toWei(amount, 'ether');
        let account = web3.eth.accounts[0];

        if (!account) {
            return console.log('Cannot add money without an account.');
        }

        web3.eth.sendTransaction({
            to: account,
            from: account,
            value: wei
        }, (err, txHash) => {
            if (err) {
                console.log(err.message);
            }

            console.log('Money added!');
        })
    })
});
