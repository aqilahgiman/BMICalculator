// (A) CHANGE BMI MEASURING SYSTEM
function measureBMI () {
  // (A1) GET HTML ELEMENTS
  let unit = document.getElementById("bmi-metric").checked,
      weight = document.getElementById("bmi-weight"),
      weightu = document.getElementById("bmi-weight-unit"),
      height = document.getElementById("bmi-height"),
      heightu = document.getElementById("bmi-height-unit");

  // (A2) UPDATE HTML FORM FIELDS
  // TRUE = METRIC, FALSE = IMPERIAL
  if (unit) {
    weightu.innerHTML = "KG";
    weight.min = 1; weight.max = 635;
    heightu.innerHTML = "CM";
    height.min = 54; height.max = 272;
  } else {
    weightu.innerHTML = "LBS";
    weight.min = 2; weight.max = 1400;
    heightu.innerHTML = "IN";
    height.min = 21; height.max = 107;
  }
}

// (B) CALCULATE BMI
function calcBMI () {
  // (B1) GET HTML ELEMENTS
  let bmi = null,
      unit = document.getElementById("bmi-metric").checked,
      weight = parseInt(document.getElementById("bmi-weight").value),
      height = parseInt(document.getElementById("bmi-height").value),
      results = document.getElementById("bmi-results");

  // (B2) CALCULATE BMI
  // METRIC BMI = MASS (KG) / HEIGHT (M) SQUARE
  if (unit) {
    height = height / 100;
    bmi = weight / (height * height);
  }
  // IMPERIAL BMI = 703 X MASS (LBS) / HEIGHT (IN) SQUARE
  else {
    bmi = 703 * (weight / (height * height));
  }
  // ROUND OFF
  bmi = Math.round(bmi * 100) / 100; // Round off 2 decimal places

  // (B3) SHOW RESULTS
  if (bmi < 18.4) {
    results.innerHTML = bmi + " - Underweight , Malnutrition Risk";
  } else if (bmi >= 18.5 && bmi < 25) {
    results.innerHTML = bmi + " - Normal Weight , Low Risk";
  } else if (bmi >= 25 && bmi < 30) {
    results.innerHTML = bmi + " - Overweight , Enhanced Risk";
  } else if (bmi >= 30 && bmi < 35) {
    results.innerHTML = bmi + " - Moderately Obesity , Medium Risk";
  } else if (bmi >= 35 && bmi < 40) {
    results.innerHTML = bmi + " - Severely Obesity , Height Risk";
  } else {
    results.innerHTML = bmi + " - Very Severely Obesity , Very High Risk";
  }
  return false;
}
