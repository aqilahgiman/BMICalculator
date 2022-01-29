window.onload = function () {
    document.getElementById('lbsInput').addEventListener('input', function (e) {
        let lbs = e.target.value;
        document.getElementById('gmInput').value = (lbs * 453.59237).toFixed(4);
        document.getElementById('kgInput').value = (lbs * 0.453592).toFixed(4);
        document.getElementById('ozInput').value = (lbs * 16).toFixed(4);
    });
    document.getElementById('kgInput').addEventListener('input', function (e) {
        let kg = e.target.value;
        document.getElementById('ozInput').value = (kg * 35.274).toFixed(4);
        document.getElementById('gmInput').value = (kg * 1000).toFixed(4);
        document.getElementById('lbsInput').value = (kg * 2.20462).toFixed(4);
    });
    document.getElementById('gmInput').addEventListener('input', function (e) {
        let gm = e.target.value;
        document.getElementById('ozInput').value = (gm * 0.035274).toFixed(4);
        document.getElementById('kgInput').value = (gm * 0.001).toFixed(4);
        document.getElementById('lbsInput').value = (gm * 0.00220462).toFixed(4);
    });
    document.getElementById('ozInput').addEventListener('input', function (e) {
        let oz = e.target.value;
        document.getElementById('gmInput').value = (oz * 28.3495).toFixed(4);
        document.getElementById('kgInput').value = (oz * 0.0283495).toFixed(4);
        document.getElementById('lbsInput').value = (oz * 0.0625).toFixed(4);
    });
    document.getElementById('cmInput').addEventListener('input', function (e) {
        let cm = e.target.value;
        document.getElementById('mInput').value = (cm * 0.01).toFixed(4);
        document.getElementById('inchInput').value = (cm * 0.393701).toFixed(4);
        document.getElementById('ftInput').value = (cm * 0.0328084).toFixed(4);
    });
    document.getElementById('mInput').addEventListener('input', function (e) {
        let m = e.target.value;
        document.getElementById('cmInput').value = (m * 100).toFixed(4);
        document.getElementById('inchInput').value = (m * 39.3701).toFixed(4);
        document.getElementById('ftInput').value = (m * 3.28084).toFixed(4);
    });
    document.getElementById('inchInput').addEventListener('input', function (e) {
        let inch = e.target.value;
        document.getElementById('mInput').value = (inch * 0.0254).toFixed(4);
        document.getElementById('cmInput').value = (inch * 2.54).toFixed(4);
        document.getElementById('ftInput').value = (inch * 0.0833333).toFixed(4);
    });
    document.getElementById('ftInput').addEventListener('input', function (e) {
        let ft = e.target.value;
        document.getElementById('mInput').value = (ft * 0.3048).toFixed(4);
        document.getElementById('inchInput').value = (ft * 12).toFixed(4);
        document.getElementById('cmInput').value = (ft * 30.48).toFixed(4);
    });
}
function BMIFunction() {
    var oz = document.getElementById('ozInput').value
    var gm = document.getElementById('gmInput').value
    var kg = document.getElementById('kgInput').value
    var lbs = document.getElementById('lbsInput').value
    var m = document.getElementById('mInput').value
    var inc = document.getElementById('inchInput').value
    var cm = document.getElementById('cmInput').value
    var ft = document.getElementById('ftInput').value
	
    if (oz == "" || gm == "" || kg == "" || lbs == "") {
        alert("Please enter at least 1 weight value.");
    }
    else if (m == "" || inc == "" || cm == "" || ft == "") {
        alert("Please enter at least 1 height value.");
    }
    else {
        var meters = document.getElementById('cmInput').value;
        var kilograms = document.getElementById('kgInput').value;
        var bmi = document.getElementById('bmi')
        var calIn = document.getElementById('calIn')
        var calOut = document.getElementById('calOut')
        var comment = document.getElementById('comment')
        meters=meters/100;
		var bmiValue = (kilograms / (meters * meters)).toFixed(2)
		
        calOut.innerHTML = "Your Minimum Calorie Burn should be " + ((kilograms / (meters * meters)) * (120)).toFixed(2).bold();
        bmi.innerHTML = "Your Body Mass Index is " + bmiValue.bold();
        calIn.innerHTML = "Your Minimum Calorie Intake should be " + ((kilograms / (meters * meters)) * (150)).toFixed(2).bold();
		
        if (bmiValue < 18.4) {
            comment.innerHTML = "You are underweight. Malnutrition Risk. Consult a doctor!";
        }
		 else if (bmiValue >= 18.5 && bmiValue < 25) {
            comment.innerHTML = "You are normal. Low Risk but a little workout never hurt anybody! ";
        }
        else if (bmiValue >= 25 && bmiValue < 30) {
            comment.innerHTML = "You are overweight. Enhanced Risk.";
        }
        else if (bmiValue >= 30 && bmiValue < 35) {
            comment.innerHTML = "You are Moderately Obesity , Medium Risk. Consult a doctor!";
        }
		else if (bmiValue >= 35 && bmiValue < 40) {
            comment.innerHTML = "You are Severely Obesity , Height Risk. Go to the doctor!";
        }
        else {
            comment.innerHTML = " Very Severely Obesity , Very High Risk. Go to the doctor!";
        }
    }
}