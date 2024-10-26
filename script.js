// تعریف تابعی که می‌خواهیم ریشه‌اش را پیدا کنیم
function f(x) {
    return Math.pow(x, 3)*2 - x - 0.5; // معادله: x^3 - x - 2 = 0
}

// پیاده‌سازی روش دوبخشی
function bisectionMethod(a, b, tol) {
    // بررسی اینکه آیا مقادیر f(a) و f(b) نشانه‌های متضاد دارند
    if (f(a) * f(b) >= 0) {
        console.log("بازه انتخابی نامناسب است. f(a) و f(b) باید نشانه‌های مخالف داشته باشند.");
        return null;
    }

    let c = a;
    while ((b - a) / 2 > tol) {
        // نقطه میانه
        c = (a + b) / 2;

        // بررسی اینکه آیا c ریشه است یا خیر
        if (f(c) === 0.0) {
            break;
        }

        // انتخاب بازه جدید
        else if (f(c) * f(a) < 0) {
            b = c;
        } else {
            a = c;
        }
    }
    return c; // ریشه تقریبی
}

// اجرای تابع و نمایش نتیجه
let a = 0, b = 1, tol = 0.001;
let root = bisectionMethod(a, b, tol);
if (root !== null) {
    console.log("ریشه تقریبی معادله:", root);
}
