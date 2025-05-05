// 📘 أنواع البيانات - Data Types
// كل قيمة في جافاسكربت لها نوع معين (نوع بيانات)
// الأنواع الأساسية: Number, String, Boolean, null, undefined, Object, Array

// ==========================
// 1. الأرقام - Numbers
// ==========================

let age = 25          // رقم صحيح
let price = 19.99     // رقم عشري (كسور)

console.log(typeof age)   // number
console.log(typeof price) // number

// ==========================
// 2. النصوص - Strings
// ==========================

let name = "Fahad"           // علامات اقتباس مزدوجة
let greeting = 'Hello'       // علامات اقتباس مفردة
let message = `Hi ${name}`   // backticks تخلينا نضيف متغير داخل النص بسهولة

console.log(typeof name)     // string
console.log(message)         // Hi Fahad

// ==========================
// 3. القيم المنطقية - Boolean
// ==========================

let isOnline = true
let isAdmin = false

console.log(typeof isOnline)  // boolean

// ==========================
// 4. قيمة null
// ==========================

let selectedCar = null    // null معناها فاضي متعمد، كأنك تقول "ما تم اختياره للحين"

console.log(typeof selectedCar)  // object (❗️ هذا bug قديم في جافاسكربت)

// ==========================
// 5. undefined
// ==========================

let score         // ما أعطيناه قيمة، فـ بيكون undefined تلقائيًا
console.log(score)       // undefined
console.log(typeof score) // undefined

// ==========================
// 6. الكائنات - Objects
// ==========================

let user = {
  name: 'Fahad',
  age: 25,
  isAdmin: true
}

console.log(typeof user)  // object

// ==========================
// 7. المصفوفات - Arrays
// ==========================

let colors = ['red', 'green', 'blue']   // نوعها object بس نعرف إنها مصفوفة

console.log(typeof colors)              // object
console.log(Array.isArray(colors))      // true ✅ الطريقة الصحيحة لمعرفة إذا كانت مصفوفة

// ==========================
// 8. typeof مع بعض القيم
// ==========================

console.log(typeof 'hello')   // string
console.log(typeof 123)       // number
console.log(typeof true)      // boolean
console.log(typeof null)      // object (❗️)
console.log(typeof undefined) // undefined

// ==========================
// ✅ نصائح احترافية (Best Practices)
// ==========================

// ✅ دايم عرّف المتغيرات باستخدام let أو const (لا تستخدم var)
// ✅ استخدم const إذا المتغير ماراح يتغير، و let إذا بيتغير
const PI = 3.14    // ما راح أغيره
let counter = 0    // راح يزيد أو يتغير

// ✅ استخدم null إذا تبي تفرغ قيمة "بنية"
// ✅ لا تترك متغير undefined بنفسك، خلها للغة تتصرف
let currentUser = null     // أفضل من undefined

// ✅ لما تتعامل مع كائنات ومصفوفات، راقب استخدام typeof و Array.isArray()
// ✅ استخدم التعليقات (زي كذا) عشان تشرح لنفسك المفهوم وقت التعلم

// ✅ دايم اطبع typeof لما تكون مو متأكد من نوع متغير
// ✅ خلك واضح في تسمية المتغيرات – خلك احترافي، سمّها حسب معناها
