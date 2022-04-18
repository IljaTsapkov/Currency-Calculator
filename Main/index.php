<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="refresh" content="0; url=https://haldus.eestipank.ee/et/export/currency_rates?imported=2022-03-04&type=xml">
    <link rel="stylesheet" type="text/css" href="/Style/style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script src="/Script/script.js"></script>
    <title>Currency Converter</title>
</head>

<body>
    <center>
        <div class="wrapper">
            <h1>Currency Converter</h1><br>
            <input class="datepicker" name="datepicker" type="date" min="2013-12-25"/><br><br>
            <form id="formCurrency" action="">
                <label for="amount"> Enter amount</label><br>
                <input type="text" id="amount" type="number" value="1" pattern="[0-9]"
                    oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                    onkeyup="myFunction();">

                <div class="drop-list">
                    <div class="select-box">
                        <select name="curFrom" id="curFrom">
                            <option>EUR</option>
                            <option>LTL</option>
                        </select>
                    </div>
                    <br><br>
                    <div class="select-box">
                        <select name="curTo" id="curTo" onChange="myFunction();">
                            <option>Select</option>
                        </select>
                    </div>
                </div>
                <p>Exchange rate:</p>
                <p id="curResult">Waiting...</p>
            </form>
        </div>
        <center>
</body>

</html>