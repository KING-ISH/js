

let bmi, Mass, massunit, Height, Heightunit;
document.getElementById("forsubmit").onsubmit = function (event) {
    event.preventDefault();
    Mass = document.getElementById("fmass").value;
    Height = document.getElementById("fheight").value;
    massunit = document.getElementById("massdd").value;
    Heightunit = document.getElementById("heightdd").value;

    if (Heightunit === "in") {
        Height = (Height / 39.27);

    }
    if (massunit === "lb") {
        Mass = Mass / 2.205;

    }

    bmi = (Mass / (Height ** 2));

    if (bmi < 18.5) {
        console.log(`Your B.M.I : ${bmi.toFixed(2)}`);
        console.log("UNDERWEIGTH");
    }
    else if (18.5 <= bmi && bmi <= 24.9) {
        console.log(`Your B.M.I : ${bmi.toFixed(2)}`);

        console.log("NORMAL");

    }
    else if (24.9 < bmi && bmi <= 29.9) {
        console.log(`Your B.M.I : ${bmi.toFixed(2)}`);

        console.log("Overweigth");

    }

    else if (bmi > 29.9) {
        console.log(`Your B.M.I : ${bmi.toFixed(2)}`);

        console.log("Obese");

    }


    //     Underweight: less than 18.5

    // Normal: 18.5 – 24.9

    // Overweight: 25 – 29.9

    // Obese: 30 or higher


}