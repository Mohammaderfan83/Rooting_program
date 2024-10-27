// تابع برای ارزیابی رشته به عنوان معادله ریاضی با توابع Math
function evaluateFunction(func, x) {
    return Function("x", `with (Math) { return ${func}; }`)(x);
}

// محاسبه ریشه به روش دوبخشی
function bisectionMethod(func, a, b, tol) {
    if (evaluateFunction(func, a) * evaluateFunction(func, b) >= 0) {
        document.getElementById("result").textContent = "معادله در بازه مشخص شده فاقد ریشه می ‌باشد.";
        return null;
    }

    let c = a;
    let iterations = 0; // شمارنده تعداد تکرارها
    while ((b - a) / 2 > tol) {
        c = (a + b) / 2;
        iterations++; // افزایش شمارنده در هر تقسیم

        if (evaluateFunction(func, c) === 0.0) {
            break;
        } else if (evaluateFunction(func, c) * evaluateFunction(func, a) < 0) {
            b = c;
        } else {
            a = c;
        }
    }
    return { root: c, iterations: iterations };
}

// تابع اصلی برای دریافت داده‌ها و نمایش نتیجه
function calculateRoot() {
    const func = document.getElementById("functionInput").value;
    const a = parseFloat(document.getElementById("aInput").value);
    const b = parseFloat(document.getElementById("bInput").value);
    const tol = parseFloat(document.getElementById("toleranceInput").value);

    const result = bisectionMethod(func, a, b, tol);
    if (result !== null) {
        // document.getElementById("result").textContent = `ریشه معادله: ${result.root}تعداد تکرارها: ${result.iterations}`;
        if(func && a && b && tol){
            document.getElementById("result").innerHTML = `ریشه معادله: ${result.root.toFixed(3)}<br>تعداد تکرارها: ${result.iterations}`;
        }else{
            alert('لطفا تمامی فیلدها را کامل کنید');
        }

    }
}