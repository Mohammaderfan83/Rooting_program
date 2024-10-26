// تابع برای ارزیابی رشته به عنوان معادله ریاضی با توابع Math
function evaluateFunction(func, x) {
    return Function("x", `with (Math) { return ${func}; }`)(x);
}

// محاسبه ریشه به روش دوبخشی
function bisectionMethod(func, a, b, tol) {
    if (evaluateFunction(func, a) * evaluateFunction(func, b) >= 0) {
        document.getElementById("result").textContent = "بازه انتخابی مناسب نیست. تابع باید نشانه‌های متضاد در دو سر بازه داشته باشد.";
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
        document.getElementById("result").textContent = `ریشه تقریبی: ${result.root}\nتعداد تکرارها: ${result.iterations}`;
    }
}