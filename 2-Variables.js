// المتغيرات - Variables

// نحتاج نحفظ بيانات كثيرة في برامج الجافاسكربت زي اسم مستخدم، رسائل، منتجات...الخ
// عشان كذا نستخدم المتغيرات لتخزين البيانات

// تعريف متغير بدون قيمة أولية
let message

// الآن نخزن فيه قيمة نصية
message = 'Hello'

// نطبع المحتوى
console.log(message) // Hello

// نقدر نختصر التعريف والتخزين في سطر واحد
let greeting = 'Hello!'
console.log(greeting) // Hello!

// نقدر نعرف أكثر من متغير في سطر واحد (بس الأفضل نخلي كل واحد في سطر)
let user = 'John', age = 25, msg = 'Hello'

// الطريقة الأفضل للقراءة:
let newUser = 'Fahad'
let newAge = 23
let newMsg = 'Welcome'

// أو في طريقة فاصلة بالأول (مو منتشرة كثير لكنها تشتغل)
let one = 'value1'
  , two = 'value2'
  , three = 'value3'

// في الجافاسكربت القديمة كانوا يستخدمون var بدل let
var oldWay = 'Still works'


// المتغير زي صندوق، له اسم ونحط فيه بيانات
let box
box = 'Hello!'
box = 'World!' // تم استبدال القيمة
console.log(box) // World!

// نقدر ننسخ القيمة من متغير لمتغير ثاني
let hello = 'Hello world!'
let copy
copy = hello
console.log(hello) // Hello world!
console.log(copy)  // Hello world!

// ما نقدر نعيد تعريف نفس المتغير بنفس الاسم
let title = 'This'
// let title = 'That' // ❌ Error: تم تعريفه مسبقاً

// لغات زي Haskell تمنع تغيير قيمة المتغير بعد التعريف (زي const)

// تسمية المتغيرات:
// لازم تبدأ بحرف أو $ أو _
// ما تبدأ برقم، وما فيها فواصل أو علامات

let userName
let test123
let $cash = 5
let _private = 10
console.log($cash + _private) // 15

// حساسية حالة الأحرف:
let apple = 'green'
let APPLE = 'red'
console.log(apple, APPLE) // green red

// ممكن تستخدم أسماء غير إنجليزية، بس مو مستحب
let اسم = 'فهد'

// الكلمات المحجوزة زي let, class, return ما نستخدمها كأسماء متغيرات

// إذا ما استخدمنا 'use strict' نقدر ننشئ متغيرات بدون let (بس هذي ممارسة سيئة)
num = 10
console.log(num)

// باستخدام const نعرف متغير ما نقدر نغير قيمته
const myBirthday = '18.04.1982'
// myBirthday = '01.01.2001' // ❌ Error: ثابت

// لما تكون القيم ثابتة ومعروفة، نستخدم أسماء كلها حروف كبيرة
const COLOR_RED = '#F00'
const COLOR_GREEN = '#0F0'
const COLOR_ORANGE = '#FF7F00'

let favColor = COLOR_ORANGE
console.log(favColor) // #FF7F00

// الفرق بين const capital و العادي:
// capital للقيم الثابتة المعروفة
// العادي للقيم اللي نعرفها وقت التشغيل لكنها ما تتغير

const pageLoadTime = /* وقت تحميل الصفحة */ 1234

// ✨ نصيحة: خلي اسم المتغير واضح وسهل الفهم
// تجنب أسماء زي a, b, data
// حاول تستخدم أسماء زي userName أو shoppingCart

// لا تعيد استخدام نفس المتغير لأكثر من غرض
// عرف متغير جديد أفضل من إنك تغير استخدام الموجود

// خلاصة:
// let => متغير قابل للتغيير (حديث)
// const => متغير ثابت
// var => متغير قديم (ما نستخدمه حالياً)
// اختر أسماء تعبر عن المحتوى وتكون سهلة القراءة


// TASKS : 


// 🟢 المهمة 1:
// صرّح عن متغيرين: admin و name
let admin;
let name;

// عيّن القيمة "John" للمتغير name
name = "John";

// انسخ القيمة من name إلى admin
admin = name;

// اعرض قيمة admin باستخدام alert (المفروض تطلع "John")
alert(admin);

// 🟢 المهمة 2:
// أنشئ متغير يمثل اسم كوكبنا. كيف تسميه؟
const ourPlanetName = "Earth";

// أنشئ متغير لتخزين اسم الزائر الحالي للموقع. كيف تسمي هذا المتغير؟
let currentUserName = "Fahad";



// ---------------------------
// 🔶 Best Practices in Writing Variables
// ---------------------------

// ✅ استخدم const دائمًا إلا إذا كنت تحتاج تغير القيمة لاحقًا → استخدم let
// ✅ لا تستخدم var إلا في حالات نادرة جدًا (تسبب مشاكل في scope)
// ✅ سَمِّ المتغيرات بأسماء توضح معناها الحقيقي
//     - good: let currentUserName = "Fahad";
//     - bad:  let x = "Fahad";
// ✅ استخدم camelCase في تسمية المتغيرات: userAge, totalPrice
// ✅ المتغيرات الثابتة تمامًا (مثل التواريخ أو الثوابت) سمّها بأحرف كبيرة: MAX_SIZE, BIRTHDAY
// ✅ لا تعيد تعريف نفس المتغير مرتين في نفس النطاق
// ✅ ضع كل متغير في سطر مستقل لزيادة الوضوح
// ✅ لا تترك متغير بدون قيمة إلا إذا كنت تحتاج تعيينها لاحقًا بشكل واضح

// ---------------------------






