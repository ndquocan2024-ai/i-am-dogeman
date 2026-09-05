function kiem_tra() {
    let chi_so = document.getElementById("chi_so").value;
    let chieu_cao = document.getElementById("chieu_cao").value;
    let bmi = chi_so / (Math.pow(chieu_cao, 2))
    let result = "";

    if (bmi <= 16)
        result = "Gầy độ 3(You're even thinner than chopsticks)";
    else if (bmi <= 17)
        result = "Gầy độ 2"
    else if (bmi <= 18.5)
        result = "Gầy độ 1"
    else if (bmi <= 25)
        result = "Bình thường"
    else if (bmi <= 30)
        result = "Hit the gym bro"
    else if (bmi <= 35)
        result = "Béo phì độ 1(Hit the gym bro)"
    else if (bmi <= 40)
        result = "Béo phì độ 2(Hit the gym bro)"
    else
        result = "Béo phì độ 3!? BRO YOU HAVE A SIZE OF A PLANET"

    document.getElementById("result").innerHTML = "Chỉ số BMI là: " + bmi + ". Bạn " + "<b>" + result + "</b>";
}