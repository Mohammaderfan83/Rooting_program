function fixedPointMethod(func, initial, epsilon, maxIter) {
    let iterations = 0;
    let x = initial;
    let previous = x;
    const g = new Function("x", "return " + func);
    let isConvergent = false;

    while (iterations < maxIter) {
        x = g(previous); // g(x) را محاسبه می‌کنیم
        iterations++;
        
        // بررسی همگرایی
        if (Math.abs(x - previous) < epsilon) {
            isConvergent = true;
            break;
        }

        previous = x;
    }

    // نمایش نتیجه
    if (isConvergent) {
        document.getElementById("result").innerHTML = `ریشه تقریبی: ${x}<br>تعداد تکرارها: ${iterations}<br>همگرا شده است.`;
    } else {
        document.getElementById("result").innerHTML = `پس از ${iterations} تکرار، همگرایی حاصل نشد و روش واگرا است.`;
    }
}

function calculateRoot() {
    const func = document.getElementById("func").value;
    const initial = parseFloat(document.getElementById("initial").value);
    const epsilon = parseFloat(document.getElementById("epsilon").value);
    const maxIter = parseInt(document.getElementById("maxIter").value);
    if(func && initial && epsilon && maxIter){
        fixedPointMethod(func, initial, epsilon, maxIter);
    }else{
        alert('لطفا تمامی فیلدها را کامل کنید');
    }
    
}