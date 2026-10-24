// ══════════════════════════════════════
// CodeNile — بيانات التحديات والمسارات والشارات
// ملف منفصل حتى لا تُكسر index.html عند إضافة تحديات.
// لإضافة تحدي: أضف كائناً داخل مصفوفة CHALLENGES قبل "]; // END CHALLENGES"
// تحقّق دائماً بـ:  node --check challenges.js
// ══════════════════════════════════════
const CHALLENGES = [
// ── المسار 1: أساسي ──────────────────
{id:1,title:"المتغيرات وأنواع البيانات",diff:"سهل",xp:10,cat:"أساسي",
   concept:"المتغيرات هي حاويات للبيانات. <code>let</code> للمتغيرات القابلة للتغيير، <code>const</code> للثوابت. لدى JavaScript 6 أنواع أساسية: <strong>number, string, boolean, null, undefined, object</strong>. <code>typeof</code> يكشف نوع أي قيمة.",
   desc:"اكتب دالة <strong>getType</strong> تستقبل قيمة وتعيد نوعها كنص باستخدام <code>typeof</code>.",
   hint:"typeof 42 يعيد 'number'، typeof 'مرحبا' يعيد 'string'، typeof true يعيد 'boolean'",icon:"fa-tag",
   exs:[{i:"getType(42)",o:"'number'"},{i:"getType('مرحبا')",o:"'string'"},{i:"getType(true)",o:"'boolean'"}],
   code:"function getType(value) {\n  // اكتب هنا\n  \n}",fn:"getType",
   tests:[{a:[42],e:"number"},{a:["hello"],e:"string"},{a:[true],e:"boolean"},{a:[undefined],e:"undefined"}]},

{id:2,title:"شروط if / else",diff:"سهل",xp:10,cat:"أساسي",
   concept:"<code>if/else</code> هي أساس اتخاذ القرارات. الشرط يُقيَّم إلى <code>true</code> أو <code>false</code>. يمكن تسلسل الشروط بـ<code>else if</code> للتعامل مع حالات متعددة.",
   desc:"اكتب دالة <strong>classify</strong> تستقبل رقماً وتعيد: <code>'موجب'</code> إن كان أكبر من صفر، <code>'سالب'</code> إن كان أصغر من صفر، <code>'صفر'</code> إن كان يساوي صفراً.",
   hint:"if (n > 0) return 'موجب'; else if (n < 0) return 'سالب'; else return 'صفر';",icon:"fa-code-branch",
   exs:[{i:"classify(5)",o:"'موجب'"},{i:"classify(-3)",o:"'سالب'"},{i:"classify(0)",o:"'صفر'"}],
   code:"function classify(n) {\n  // اكتب هنا\n  \n}",fn:"classify",
   tests:[{a:[5],e:"موجب"},{a:[-3],e:"سالب"},{a:[0],e:"صفر"},{a:[100],e:"موجب"},{a:[-1],e:"سالب"}]},

{id:3,title:"حلقة for",diff:"سهل",xp:10,cat:"أساسي",
   concept:"حلقة <code>for</code> تنفّذ كوداً عدداً محدداً من المرات. تتكون من: <strong>تهيئة</strong> <code>let i=0</code>، <strong>شرط</strong> <code>i &lt; n</code>، <strong>زيادة</strong> <code>i++</code>. أساس بناء المصفوفات والتكرار.",
   desc:"اكتب دالة <strong>countUp</strong> تستقبل رقماً <code>n</code> وتعيد مصفوفة من الأرقام من 1 حتى n.",
   hint:"أنشئ مصفوفة فارغة، استخدم حلقة for من 1 إلى n، وادفع كل رقم بـ arr.push(i)",icon:"fa-repeat",
   exs:[{i:"countUp(5)",o:"[1,2,3,4,5]"},{i:"countUp(3)",o:"[1,2,3]"}],
   code:"function countUp(n) {\n  // اكتب هنا\n  \n}",fn:"countUp",
   tests:[{a:[5],e:[1,2,3,4,5]},{a:[3],e:[1,2,3]},{a:[1],e:[1]},{a:[0],e:[]}]},

{id:4,title:"مرحباً بالعالم",diff:"سهل",xp:10,cat:"أساسي",
   concept:"الدوال في JavaScript هي كتل كود معاد الاستخدام. تُعرَّف بكلمة <code>function</code> ثم الاسم والمعاملات. <strong>Template literals</strong> <code>`${variable}`</code> تُضمّن متغيرات داخل نصوص مباشرةً.",
   desc:"اكتب دالة <strong>greet</strong> تستقبل اسماً وتعيد رسالة ترحيب تحتوي على الاسم.",
   hint:"استخدم return مع اسم الدالة. مثال: return 'Hello ' + name أو return `مرحباً ${name}` (template literal بالـbacktick)",icon:"fa-hand",
   exs:[{i:"greet('أحمد')",o:"'Hello أحمد' أو أي رسالة تحتوي الاسم"},{i:"greet('Ali')",o:"'Hi Ali!'"}],
   code:"function greet(name) {\n  // اكتب هنا\n  \n}",fn:"greet",
   customCheck:(r,a)=>typeof r==='string'&&r.length>0&&r.includes(a[0]),
   customCheckDesc:"نص يحتوي على الاسم",
   tests:[{a:["أحمد"],e:"أحمد"},{a:["Ali"],e:"Ali"},{a:["سارة"],e:"سارة"}]},

{id:5,title:"جمع رقمين",diff:"سهل",xp:10,cat:"أساسي",
   concept:"المعاملات (parameters) هي متغيرات الدالة، والوسيطات (arguments) هي القيم عند الاستدعاء. <code>return</code> ترجع القيمة للمستدعي. أبسط دالة رياضية: تستقبل قيمتين وتُعيد نتيجة.",
   desc:"اكتب دالة <strong>sum</strong> تستقبل رقمين a و b وتعيد مجموعهما.",
   hint:"return a + b",icon:"fa-plus",
   exs:[{i:"sum(2, 3)",o:"5"},{i:"sum(-1, 1)",o:"0"}],
   code:"function sum(a, b) {\n  // اكتب هنا\n  \n}",fn:"sum",
   tests:[{a:[2,3],e:5},{a:[-1,1],e:0},{a:[10,5],e:15},{a:[0.5,0.5],e:1}]},

{id:6,title:"عكس النص",diff:"سهل",xp:10,cat:"أساسي",
   concept:"النصوص في JS مصفوفات من الحروف. <code>split('')</code> تحوّلها لمصفوفة، <code>reverse()</code> تقلبها، <code>join('')</code> تجمعها. النمط <strong>split → transform → join</strong> شائع جداً في معالجة النصوص.",
   desc:"اكتب دالة <strong>reverseStr</strong> تستقبل نصاً وتعيده معكوساً حرفاً بحرف.",
   hint:"ثلاث خطوات: (1) split('') تحوّل النص لمصفوفة حروف، (2) reverse() تعكسها، (3) join('') تجمعها مجدداً. مثال: 'hi'.split('')→['h','i']",icon:"fa-rotate",
   exs:[{i:"reverseStr('hello')",o:"'olleh'"},{i:"reverseStr('12345')",o:"'54321'"}],
   code:"function reverseStr(str) {\n  // اكتب هنا\n  \n}",fn:"reverseStr",
   tests:[{a:["hello"],e:"olleh"},{a:["abcde"],e:"edcba"},{a:["JavaScript"],e:"tpircSavaJ"},{a:["12345"],e:"54321"}]},

{id:7,title:"هل الرقم زوجي؟",diff:"سهل",xp:10,cat:"أساسي",
   concept:"<strong>باقي القسمة</strong> <code>%</code> يعيد الباقي بعد القسمة. <code>4 % 2 === 0</code> يعني زوجي، <code>3 % 2 === 1</code> يعني فردي. يُستخدم كثيراً في التحقق من الزوجية والفردية والتكرار الدوري.",
   desc:"اكتب دالة <strong>isEven</strong> تستقبل رقماً وتعيد true إذا كان زوجياً أو false إذا كان فردياً.",
   hint:"استخدم باقي القسمة: n % 2 === 0",icon:"fa-divide",
   exs:[{i:"isEven(4)",o:"true"},{i:"isEven(7)",o:"false"}],
   code:"function isEven(n) {\n  // اكتب هنا\n  \n}",fn:"isEven",
   tests:[{a:[4],e:true},{a:[7],e:false},{a:[0],e:true},{a:[-3],e:false},{a:[100],e:true}]},

{id:8,title:"مجموع مصفوفة",diff:"سهل",xp:10,cat:"أساسي",
   concept:"<code>reduce()</code> هي أقوى دوال المصفوفات — تحوّل مصفوفة كاملة لقيمة واحدة. تستقبل <strong>accumulator</strong> (القيمة المتراكمة) والعنصر الحالي. القيمة الابتدائية <code>0</code> هي نقطة البداية للجمع.",
   desc:"اكتب دالة <strong>sumArray</strong> تستقبل مصفوفة من الأرقام وتعيد مجموع عناصرها.",
   hint:"arr.reduce((acc, n) => acc + n, 0)",icon:"fa-sigma",
   exs:[{i:"sumArray([1,2,3,4,5])",o:"15"},{i:"sumArray([-1,1,-1,1])",o:"0"}],
   code:"function sumArray(arr) {\n  // اكتب هنا\n  \n}",fn:"sumArray",
   tests:[{a:[[1,2,3,4,5]],e:15},{a:[[-1,1,-1,1]],e:0},{a:[[10,20,30]],e:60},{a:[[0]],e:0}]},

{id:9,title:"أكبر رقم في مصفوفة",diff:"متوسط",xp:20,cat:"أساسي",
   concept:"<code>Math.max()</code> تقبل أرقاماً منفصلة لكن لا تقبل مصفوفة مباشرة. نستخدم <strong>Spread operator</strong> <code>...</code> لتفكيك المصفوفة: <code>Math.max(...arr)</code>. بديلاً، <code>reduce</code> يُقارن عنصراً بعنصر.",
   desc:"اكتب دالة <strong>maxNum</strong> تستقبل مصفوفة من الأرقام وتعيد أكبر رقم فيها.",
   hint:"Math.max(...arr)  أو  arr.reduce((a,b) => a > b ? a : b)",icon:"fa-arrow-up",
   exs:[{i:"maxNum([3,1,9,2,5])",o:"9"},{i:"maxNum([-5,-1,-3])",o:"-1"}],
   code:"function maxNum(arr) {\n  // اكتب هنا\n  \n}",fn:"maxNum",
   tests:[{a:[[3,1,9,2,5]],e:9},{a:[[-5,-1,-3]],e:-1},{a:[[100]],e:100},{a:[[0,0,0]],e:0}]},

{id:10,title:"التحقق من الباليندروم",diff:"متوسط",xp:20,cat:"أساسي",
   concept:"<strong>Palindrome</strong> هو نص يُقرأ بنفس الطريقة من الاتجاهين مثل 'racecar'. المنطق: عكس النص ومقارنته بالأصل. مسألة كلاسيكية في المقابلات التقنية تختبر فهم النصوص والمصفوفات.",
   desc:"اكتب دالة <strong>isPalindrome</strong> تتحقق إذا كان النص يُقرأ بنفس الطريقة من الاتجاهين.",
   hint:"قارن النص مع معكوسه: str === str.split('').reverse().join('')",icon:"fa-arrows-left-right",
   exs:[{i:"isPalindrome('racecar')",o:"true"},{i:"isPalindrome('hello')",o:"false"}],
   code:"function isPalindrome(str) {\n  // اكتب هنا\n  \n}",fn:"isPalindrome",
   tests:[{a:["racecar"],e:true},{a:["hello"],e:false},{a:["level"],e:true},{a:["a"],e:true},{a:["abba"],e:true}]},

// ── المسار 2: هياكل البيانات ─────────
{id:11,title:"تجزئة المصفوفة",diff:"متوسط",xp:20,cat:"هياكل البيانات",
   concept:"<strong>Chunking</strong>: تقسيم مصفوفة كبيرة لمجموعات صغيرة بحجم ثابت. مفيد في pagination وmini-batches. <code>slice(start, end)</code> تقتطع جزءاً من مصفوفة بدون تعديل الأصلية — وهو مبدأ الـ<strong>immutability</strong>.",
   desc:"اكتب دالة <strong>chunk</strong> تقسم مصفوفة إلى مجموعات بحجم معين.",
   hint:"استخدم حلقة تزيد بمقدار size وslice في كل خطوة",icon:"fa-table-cells",
   exs:[{i:"chunk([1,2,3,4,5], 2)",o:"[[1,2],[3,4],[5]]"},{i:"chunk([1,2,3], 3)",o:"[[1,2,3]]"}],
   code:"function chunk(arr, size) {\n  // اكتب هنا\n  \n}",fn:"chunk",
   tests:[{a:[[1,2,3,4,5],2],e:[[1,2],[3,4],[5]]},{a:[[1,2,3],3],e:[[1,2,3]]},{a:[[1,2,3,4],2],e:[[1,2],[3,4]]}]},

{id:12,title:"إزالة القيم الزائفة",diff:"متوسط",xp:20,cat:"هياكل البيانات",
   concept:"القيم <strong>Falsy</strong> في JavaScript هي: <code>false</code>، <code>0</code>، <code>''</code>، <code>null</code>، <code>undefined</code>، <code>NaN</code>. <code>filter(Boolean)</code> تحوّل كل عنصر لـboolean وتُبقي فقط القيم الـ<strong>Truthy</strong>.",
   desc:"اكتب دالة <strong>removeFalsy</strong> تزيل من المصفوفة: false, null, 0, '', undefined, NaN.",
   hint:"arr.filter(Boolean)",icon:"fa-filter",
   exs:[{i:"removeFalsy([0,1,false,2,'',3])",o:"[1,2,3]"},{i:"removeFalsy([null,undefined,NaN,1])",o:"[1]"}],
   code:"function removeFalsy(arr) {\n  // اكتب هنا\n  \n}",fn:"removeFalsy",
   tests:[{a:[[0,1,false,2,"",3]],e:[1,2,3]},{a:[[null,undefined,1]],e:[1]},{a:[[true,"hi",42]],e:[true,"hi",42]}]},

{id:13,title:"الرقم المفقود",diff:"متوسط",xp:20,cat:"هياكل البيانات",
   concept:"المجموع الرياضي لـ 1 إلى n = <code>n*(n+1)/2</code>. بطرح مجموع المصفوفة الفعلي، نجد الرقم المفقود بكفاءة <strong>O(n)</strong>. من أذكى الخوارزميات الرياضية — حل مشكلة بدون فرز أو بحث.",
   desc:"اكتب دالة <strong>findMissing</strong> تجد الرقم المفقود في مصفوفة من 1 إلى n.",
   hint:"مجموع 1..n = n*(n+1)/2 ، اطرح مجموع المصفوفة",icon:"fa-circle-question",
   exs:[{i:"findMissing([1,2,4,5,6])",o:"3"},{i:"findMissing([1,3])",o:"2"}],
   code:"function findMissing(arr) {\n  // اكتب هنا\n  \n}",fn:"findMissing",
   tests:[{a:[[1,2,4,5,6]],e:3},{a:[[1,3]],e:2},{a:[[2,3,4,5]],e:1},{a:[[1,2,3,5]],e:4}]},

{id:14,title:"ترتيب الأرقام",diff:"متوسط",xp:20,cat:"هياكل البيانات",
   concept:"<code>sort()</code> بدون دالة مقارنة تُرتّب كنصوص وتُعطي نتائج خاطئة للأرقام. <strong>دالة المقارنة</strong> <code>(a,b) => a-b</code> تُرتّب تصاعدياً. <code>[...arr]</code> ينسخ المصفوفة للحفاظ على الأصلية.",
   desc:"اكتب دالة <strong>sortArr</strong> تستقبل مصفوفة أرقام وتعيدها مرتبة تصاعدياً بدون تعديل الأصلية.",
   hint:"[...arr].sort((a,b) => a - b)",icon:"fa-arrow-down-wide-short",
   exs:[{i:"sortArr([3,1,4,1,5,9])",o:"[1,1,3,4,5,9]"},{i:"sortArr([-2,5,0])",o:"[-2,0,5]"}],
   code:"function sortArr(arr) {\n  // لا تعدّل المصفوفة الأصلية\n  \n}",fn:"sortArr",
   tests:[{a:[[3,1,4,1,5,9]],e:[1,1,3,4,5,9]},{a:[[-2,5,0]],e:[-2,0,5]},{a:[[5]],e:[5]}]},

{id:15,title:"تقاطع مصفوفتين",diff:"متوسط",xp:20,cat:"هياكل البيانات",
   concept:"<code>filter()</code> تُبقي العناصر التي تحقق شرطاً. <code>includes()</code> تتحقق من وجود قيمة. دمجهما: عناصر arr1 الموجودة في arr2 = التقاطع. للكفاءة مع مصفوفات كبيرة، استخدم <code>Set</code>.",
   desc:"اكتب دالة <strong>intersect</strong> تعيد مصفوفة تحتوي على العناصر المشتركة بين المصفوفتين.",
   hint:"arr1.filter(x => arr2.includes(x))",icon:"fa-circle-nodes",
   exs:[{i:"intersect([1,2,3],[2,3,4])",o:"[2,3]"},{i:"intersect(['a','b'],['b','c'])",o:"['b']"}],
   code:"function intersect(arr1, arr2) {\n  // اكتب هنا\n  \n}",fn:"intersect",
   tests:[{a:[[1,2,3],[2,3,4]],e:[2,3]},{a:[["a","b"],["b","c"]],e:["b"]},{a:[[1],[2]],e:[]}]},

{id:16,title:"دمج مصفوفتين بدون تكرار",diff:"صعب",xp:30,cat:"هياكل البيانات",
   concept:"<strong>Set</strong> هيكل بيانات يحتوي <strong>قيماً فريدة فقط</strong> — يحذف التكرار تلقائياً. <code>new Set([...a,...b])</code> يدمج المصفوفتين ويُزيل المكرر. <code>[...set]</code> يحوّله مجدداً لمصفوفة.",
   desc:"اكتب دالة <strong>mergeArrays</strong> تدمج مصفوفتين وتزيل التكرار.",
   hint:"[...new Set([...arr1, ...arr2])]",icon:"fa-code-merge",
   exs:[{i:"mergeArrays([1,2,3],[2,3,4])",o:"[1,2,3,4]"},{i:"mergeArrays(['a','b'],['b','c'])",o:"['a','b','c']"}],
   code:"function mergeArrays(arr1, arr2) {\n  // اكتب هنا\n  \n}",fn:"mergeArrays",
   tests:[{a:[[1,2,3],[2,3,4]],e:[1,2,3,4]},{a:[["a","b"],["b","c"]],e:["a","b","c"]},{a:[[1],[2]],e:[1,2]}]},

{id:17,title:"تسطيح مصفوفة متداخلة",diff:"صعب",xp:30,cat:"هياكل البيانات",
   concept:"<code>flat(depth)</code> تُسطّح مصفوفة متداخلة. <code>flat(Infinity)</code> تُسطّح بأي عمق. البديل الـrecursive: <code>Array.isArray(item) ? flattenArr(item) : item</code> — تحقق من كل عنصر وسطّحه عند الحاجة.",
   desc:"اكتب دالة <strong>flattenArr</strong> تسطّح مصفوفة متداخلة بأي عمق.",
   hint:"arr.flat(Infinity)  أو  recursion مع concat",icon:"fa-layer-group",
   exs:[{i:"flattenArr([1,[2,[3]]])",o:"[1,2,3]"},{i:"flattenArr([[1,2],[3,[4,5]]])",o:"[1,2,3,4,5]"}],
   code:"function flattenArr(arr) {\n  // اكتب هنا\n  \n}",fn:"flattenArr",
   tests:[{a:[[1,[2,[3,[4]]]]],e:[1,2,3,4]},{a:[[[1,2],[3,4]]],e:[1,2,3,4]},{a:[[1,2,3]],e:[1,2,3]}]},

{id:18,title:"التحقق من صحة الأقواس",diff:"صعب",xp:30,cat:"هياكل البيانات",
   concept:"<strong>Stack</strong> مبدأ LIFO. خوارزمية الأقواس: افتح قوساً → ادفعه للـStack. أغلق قوساً → تحقق إذا كان آخر مفتوح متطابقاً. Stack فارغ في النهاية = صحيح. تُستخدم في compilers ومحرري الكود.",
   desc:"اكتب دالة <strong>isValidBrackets</strong> تتحقق إذا كانت الأقواس () [] {} مرتبة ومتطابقة.",
   hint:"استخدم Stack: اضغط الأقواس الفاتحة واسحب عند الإغلاق",icon:"fa-code",
   exs:[{i:"isValidBrackets('([])')",o:"true"},{i:"isValidBrackets('([)]')",o:"false"}],
   code:"function isValidBrackets(str) {\n  // استخدم Stack\n  \n}",fn:"isValidBrackets",
   tests:[{a:["([])"],e:true},{a:["([)]"],e:false},{a:["{}"],e:true},{a:["((()"],e:false},{a:[""],e:true}]},

// ── المسار 3: الدوال المتقدمة ────────
{id:19,title:"متتالية فيبوناتشي",diff:"متوسط",xp:20,cat:"الدوال المتقدمة",
   concept:"<strong>Fibonacci</strong>: كل رقم = مجموع السابقَين (0,1,1,2,3,5,8...). الطريقة Iterative أكفأ من Recursive لأنها تتجنب stack overflow. هذه المتتالية مثال كلاسيكي لتعلم Dynamic Programming.",
   desc:"اكتب دالة <strong>fibonacci</strong> تعيد الرقم في موضع n من متتالية فيبوناتشي (تبدأ من 0).",
   hint:"0,1,1,2,3,5,8,13... كل رقم = مجموع السابقَين. استخدم حلقة.",icon:"fa-infinity",
   exs:[{i:"fibonacci(0)",o:"0"},{i:"fibonacci(6)",o:"8"},{i:"fibonacci(10)",o:"55"}],
   code:"function fibonacci(n) {\n  // اكتب هنا\n  \n}",fn:"fibonacci",
   tests:[{a:[0],e:0},{a:[1],e:1},{a:[6],e:8},{a:[10],e:55},{a:[7],e:13}]},

{id:20,title:"تحويل لعنوان Title Case",diff:"متوسط",xp:20,cat:"الدوال المتقدمة",
   concept:"<code>split(' ')</code> تُقسّم النص لكلمات. <code>map()</code> تُطبّق دالة على كل عنصر. <code>toUpperCase()</code> على الحرف الأول فقط، <code>slice(1)</code> لباقي الكلمة. <code>join(' ')</code> يجمعها. نمط map → transform.",
   desc:"اكتب دالة <strong>titleCase</strong> تحوّل الحرف الأول من كل كلمة إلى حرف كبير.",
   hint:"str.split(' ').map(w => w[0].toUpperCase() + w.slice(1)).join(' ')",icon:"fa-font",
   exs:[{i:"titleCase('hello world')",o:"'Hello World'"},{i:"titleCase('js is fun')",o:"'Js Is Fun'"}],
   code:"function titleCase(str) {\n  // اكتب هنا\n  \n}",fn:"titleCase",
   tests:[{a:["hello world"],e:"Hello World"},{a:["js is fun"],e:"Js Is Fun"},{a:["test"],e:"Test"},{a:["a b c"],e:"A B C"}]},

{id:21,title:"عدّ الكلمات في نص",diff:"متوسط",xp:20,cat:"الدوال المتقدمة",
   concept:"<code>split()</code> تقسّم النص عند محدد. المسافات المتعددة تُنتج عناصر فارغة — <code>filter(Boolean)</code> أو <code>/\\s+/</code> يحلّانها. نمط شائع في معالجة النصوص الحقيقية.",
   desc:"اكتب دالة <strong>wordCount</strong> تستقبل نصاً وتعيد عدد الكلمات فيه متجاهلاً المسافات الزائدة.",
   hint:"str.trim().split(/\\s+/).filter(Boolean).length",icon:"fa-align-left",
   exs:[{i:"wordCount('مرحبا بالعالم')",o:"2"},{i:"wordCount('  hello   world  ')",o:"2"}],
   code:"function wordCount(str) {\n  // اكتب هنا\n  \n}",fn:"wordCount",
   tests:[{a:["مرحبا بالعالم"],e:2},{a:["  hello   world  "],e:2},{a:["one"],e:1},{a:[""],e:0},{a:["a b c d e"],e:5}]},

{id:22,title:"التحقق من العدد الأولي",diff:"صعب",xp:30,cat:"الدوال المتقدمة",
   concept:"العدد الأولي لا يقبل القسمة إلا على 1 ونفسه. التحسين الذكي: نتحقق حتى <strong>الجذر التربيعي</strong> <code>√n</code> فقط، لأن أي عامل أكبر من √n يقابله عامل أصغر. يُقلّل التعقيد من O(n) إلى O(√n).",
   desc:"اكتب دالة <strong>isPrime</strong> تتحقق إذا كان الرقم عدداً أولياً.",
   hint:"تحقق من 2 حتى √n: for(let i=2; i*i <= n; i++) if(n%i===0) return false",icon:"fa-magnifying-glass",
   exs:[{i:"isPrime(7)",o:"true"},{i:"isPrime(4)",o:"false"},{i:"isPrime(2)",o:"true"}],
   code:"function isPrime(n) {\n  // اكتب هنا\n  \n}",fn:"isPrime",
   tests:[{a:[7],e:true},{a:[4],e:false},{a:[2],e:true},{a:[1],e:false},{a:[13],e:true},{a:[9],e:false}]},

{id:23,title:"تجميع العناصر حسب خاصية",diff:"صعب",xp:30,cat:"الدوال المتقدمة",
   concept:"<code>reduce()</code> يبني كائناً من مصفوفة. في كل خطوة: طبّق الدالة على العنصر كمفتاح، أضفه للمجموعة المناسبة. نمط <strong>groupBy</strong> موجود في Lodash وسيصبح native في JavaScript قريباً.",
   desc:"اكتب دالة <strong>groupBy</strong> تجمّع عناصر المصفوفة حسب نتيجة دالة معينة.",
   hint:"arr.reduce((acc, item) => { const key = fn(item); acc[key] = acc[key] || []; acc[key].push(item); return acc; }, {})",icon:"fa-object-group",
   exs:[{i:"groupBy([1,2,3,4,5], n => n%2===0?'even':'odd')",o:"{odd:[1,3,5], even:[2,4]}"},{i:"groupBy(['one','two','three'], w => w.length)",o:"{3:['one','two'], 5:['three']}"}],
   code:"function groupBy(arr, fn) {\n  // اكتب هنا\n  \n}",fn:"groupBy",
   tests:[
     {a:[[1,2,3,4,5],function(n){return n%2===0?'even':'odd'}],e:{odd:[1,3,5],even:[2,4]}},
     {a:[['a','bb','ccc','dd'],function(s){return s.length}],e:{1:['a'],2:['bb','dd'],3:['ccc']}}
   ]},

{id:24,title:"ضغط النص RLE",diff:"صعب",xp:30,cat:"الدوال المتقدمة",
   concept:"<strong>RLE</strong> (Run-Length Encoding) خوارزمية ضغط بسيطة: بدل تكرار نفس الحرف، احفظ الحرف وعدد مرات تكراره. مثال: 'aaabbc' → 'a3b2c1'. تُستخدم في ضغط الصور وبروتوكولات الاتصالات.",
   desc:"اكتب دالة <strong>rleEncode</strong> تضغط النص بطريقة Run-Length Encoding.",
   hint:"اعدّ تكرار كل حرف متتالي، مثلاً: 'aaabbc' → 'a3b2c1'",icon:"fa-compress",
   exs:[{i:"rleEncode('aaabbc')",o:"'a3b2c1'"},{i:"rleEncode('aaa')",o:"'a3'"},{i:"rleEncode('abc')",o:"'a1b1c1'"}],
   code:"function rleEncode(str) {\n  // اكتب هنا\n  \n}",fn:"rleEncode",
   tests:[{a:["aaabbc"],e:"a3b2c1"},{a:["aaa"],e:"a3"},{a:["abc"],e:"a1b1c1"},{a:["aabb"],e:"a2b2"}]},

{id:25,title:"دوران المصفوفة",diff:"صعب",xp:30,cat:"الدوال المتقدمة",
   concept:"<strong>دوران المصفوفة</strong> يُحلّ بـ<code>slice</code>: آخر k عناصر <code>slice(-k)</code> تصبح في البداية، والباقي <code>slice(0,-k)</code> يأتي بعدها. أكثر كفاءة وأوضح من التدوير element-by-element.",
   desc:"اكتب دالة <strong>rotateArray</strong> تدور المصفوفة k خطوات لليمين.",
   hint:"استخدم slice: [...arr.slice(-k), ...arr.slice(0,-k)]",icon:"fa-rotate",
   exs:[{i:"rotateArray([1,2,3,4,5], 2)",o:"[4,5,1,2,3]"},{i:"rotateArray([1,2,3], 1)",o:"[3,1,2]"}],
   code:"function rotateArray(arr, k) {\n  // اكتب هنا\n  \n}",fn:"rotateArray",
   tests:[{a:[[1,2,3,4,5],2],e:[4,5,1,2,3]},{a:[[1,2,3],1],e:[3,1,2]},{a:[[1,2,3,4],4],e:[1,2,3,4]}]},

{id:26,title:"أعمق مستوى تداخل",diff:"صعب",xp:30,cat:"الدوال المتقدمة",
   concept:"عمق التداخل يُحسب recursively: إذا العنصر ليس مصفوفة عمقه 0. إذا كان مصفوفة: 1 + أقصى عمق لعناصره. <code>Math.max(...arr.map(e => Array.isArray(e) ? 1+maxDepth(e) : 0))</code>.",
   desc:"اكتب دالة <strong>maxDepth</strong> تعيد أعمق مستوى تداخل في مصفوفة متداخلة.",
   hint:"استخدم recursion: إذا كان العنصر مصفوفة، احسب عمقه واجمع 1",icon:"fa-layer-group",
   exs:[{i:"maxDepth([1,2,3])",o:"1"},{i:"maxDepth([1,[2,[3]]])",o:"3"},{i:"maxDepth([[1],[2,[3,[4]]]])",o:"4"}],
   code:"function maxDepth(arr) {\n  // اكتب هنا\n  \n}",fn:"maxDepth",
   tests:[{a:[[1,2,3]],e:1},{a:[[1,[2,[3]]]],e:3},{a:[[[1],[2,[3,[4]]]]],e:4},{a:[[1]],e:1}]},

{id:27,title:"Debounce Function",diff:"صعب",xp:40,cat:"الدوال المتقدمة",
   concept:"<strong>Debounce</strong> يضمن تنفيذ الدالة مرة واحدة فقط بعد توقف المستخدم. مثال: البحث أثناء الكتابة. يعتمد على <strong>Closure</strong> لحفظ الـtimer بين الاستدعاءات. المنطق: <code>clearTimeout</code> ثم <code>setTimeout</code>.",
   desc:"اكتب دالة <strong>debounce</strong> تستقبل دالة fn ووقت delay وتعيد دالة جديدة تؤخر تنفيذ fn حتى يمر delay ms بدون استدعاء جديد.",
   hint:"clearTimeout ثم setTimeout. احفظ timer في closure.\nreturn function(...args){ clearTimeout(timer); timer=setTimeout(()=>fn.apply(this,args),delay); }",
   icon:"fa-clock",
   exs:[{i:"const d = debounce(fn, 300)",o:"fn تنفذ بعد 300ms من آخر استدعاء"},{i:"d() d() d()",o:"fn تُستدعى مرة واحدة"}],
   code:"function debounce(fn, delay) {\n  let timer;\n  return function(...args) {\n    // اكتب هنا\n    \n  };\n}",fn:"debounce",
   customCheck:(r,a)=>{try{const d=r(()=>{},50);return typeof d==='function';}catch(e){return false;}},
   customCheckDesc:"تعيد دالة جديدة",
   tests:[{a:[()=>{},100],e:null}]},

{id:28,title:"Deep Clone — نسخ عميق",diff:"صعب",xp:40,cat:"الدوال المتقدمة",
   concept:"<strong>Shallow copy</strong> ينسخ مراجع الكائنات الداخلية. <strong>Deep copy</strong> ينسخ كل شيء بشكل مستقل. الطريقة الصحيحة: تحقق نوع كل عنصر recursively — مصفوفة → map، كائن → forEach، قيمة بسيطة → أعدها.",
   desc:"اكتب دالة <strong>deepClone</strong> تعمل نسخة عميقة من أي كائن أو مصفوفة. تعديل النسخة لا يؤثر على الأصل.",
   hint:"تحقق النوع: Array→map+recurse، Object→forEach+recurse، غير ذلك→أعد القيمة.",
   icon:"fa-copy",
   exs:[{i:"const b=deepClone(a); b.x=99",o:"a.x لا يتغير"},{i:"deepClone([1,[2,3]])",o:"[1,[2,3]] مستقلة"}],
   code:"function deepClone(obj) {\n  if(obj === null || typeof obj !== 'object') return obj;\n  // اكتب هنا\n  \n}",fn:"deepClone",
   tests:[{a:[{a:1,b:{c:2}}],e:{a:1,b:{c:2}}},{a:[[1,[2,3]]],e:[1,[2,3]]},{a:[{x:[1,2],y:{z:3}}],e:{x:[1,2],y:{z:3}}}]},

{id:29,title:"Memoize — تخزين النتائج",diff:"صعب",xp:40,cat:"الدوال المتقدمة",
   concept:"<strong>Memoization</strong>: تخزين نتائج الدوال المكلفة لتجنب إعادة الحساب. يعتمد على <strong>Closure</strong> لحفظ الـcache. مفتاح الكاش = <code>JSON.stringify(args)</code>. يُحسّن الأداء بشكل جذري في الدوال الثقيلة.",
   desc:"اكتب دالة <strong>memoize</strong> تغلّف دالة وتخزّن نتائجها. نفس الحجج = نفس النتيجة من الكاش.",
   hint:"const cache={}; المفتاح=JSON.stringify(args).\nreturn function(...args){ const k=JSON.stringify(args); if(k in cache) return cache[k]; return cache[k]=fn(...args); }",
   icon:"fa-database",
   exs:[{i:"const mFn = memoize(fn)",o:"mFn(5) أول مرة: يحسب"},{i:"mFn(5) مرة ثانية",o:"من الكاش بدون حساب"}],
   code:"function memoize(fn) {\n  const cache = {};\n  return function(...args) {\n    // اكتب هنا\n    \n  };\n}",fn:"memoize",
   customCheck:(r,a)=>{try{let c=0;const m=r(n=>{c++;return n*3;});m(5);m(5);m(5);return c===1;}catch(e){return false;}},
   customCheckDesc:"الدالة الأصلية تُستدعى مرة واحدة لنفس الحجج",
   tests:[{a:[n=>n*2],e:null}]},

// ── المسار 4: خوارزميات ──────────────
{id:30,title:"Bubble Sort — فرز الفقاعة",diff:"متوسط",xp:25,cat:"خوارزميات",
   concept:"<strong>Bubble Sort</strong> أبسط خوارزمية فرز: قارن كل زوج متجاور وبدّل إذا كان الأول أكبر. بعد كل مرور، أكبر عنصر 'يطفو' للنهاية. تعقيد <strong>O(n²)</strong> — بطيئة لكن أساسية لفهم آلية الفرز.",
   desc:"نفّذ خوارزمية <strong>bubbleSort</strong> لفرز مصفوفة تصاعدياً. قارن كل عنصرين متجاورين وبدّل بينهما إذا كان الأول أكبر.",
   hint:"حلقتان متداخلتان. الخارجية n مرة، الداخلية تقارن المتجاورين وتبدّل.",
   icon:"fa-sort",
   exs:[{i:"bubbleSort([5,3,8,1,2])",o:"[1,2,3,5,8]"},{i:"bubbleSort([64,34,25,12])",o:"[12,25,34,64]"}],
   code:"function bubbleSort(arr) {\n  const a = [...arr];\n  for(let i = 0; i < a.length; i++) {\n    for(let j = 0; j < a.length - i - 1; j++) {\n      // قارن a[j] و a[j+1] وبدّل إذا لزم\n      \n    }\n  }\n  return a;\n}",fn:"bubbleSort",
   tests:[{a:[[5,3,8,1,2]],e:[1,2,3,5,8]},{a:[[64,34,25,12]],e:[12,25,34,64]},{a:[[1]],e:[1]},{a:[[3,1]],e:[1,3]}]},

{id:31,title:"Two Sum",diff:"متوسط",xp:25,cat:"خوارزميات",
   concept:"<strong>Hash Map</strong> يجعل البحث O(1). بدل O(n²) من حلقتين متداخلتين، نخزّن كل رقم وموضعه في Map. لكل رقم جديد نتحقق: هل <code>target - num</code> موجود في Map؟ هذا النهج الكلاسيكي للتحسين.",
   desc:"اكتب دالة <strong>twoSum</strong> تستقبل مصفوفة وهدفاً target، وتعيد مواضع أول زوج مجموعهما = target.",
   hint:"استخدم Map لتخزين {value: index}. في كل عنصر تحقق من وجود (target - num) في الـ Map.",
   icon:"fa-2",
   exs:[{i:"twoSum([2,7,11,15], 9)",o:"[0,1]"},{i:"twoSum([3,2,4], 6)",o:"[1,2]"}],
   code:"function twoSum(nums, target) {\n  const map = new Map();\n  for(let i = 0; i < nums.length; i++) {\n    // اكتب هنا\n    \n  }\n  return [];\n}",fn:"twoSum",
   tests:[{a:[[2,7,11,15],9],e:[0,1]},{a:[[3,2,4],6],e:[1,2]},{a:[[1,3,4,2],6],e:[2,3]}]},

{id:32,title:"Valid Anagram",diff:"متوسط",xp:25,cat:"خوارزميات",
   concept:"<strong>Anagram</strong>: كلمتان لهما نفس الحروف بترتيبات مختلفة. الحل الأبسط: رتّب الحروف وقارن O(n log n). الأكثر كفاءة: عدّ تكرار كل حرف في Map وقارن — O(n).",
   desc:"اكتب دالة <strong>isAnagram</strong> تتحقق إذا كانت كلمتان anagram (نفس الحروف بترتيب مختلف).",
   hint:"رتّب كلاهما وقارن: s.split('').sort().join('') === t.split('').sort().join('')",
   icon:"fa-spell-check",
   exs:[{i:"isAnagram('anagram','nagaram')",o:"true"},{i:"isAnagram('rat','car')",o:"false"}],
   code:"function isAnagram(s, t) {\n  // اكتب هنا\n  \n}",fn:"isAnagram",
   tests:[{a:["anagram","nagaram"],e:true},{a:["rat","car"],e:false},{a:["listen","silent"],e:true},{a:["ab","ba"],e:true}]},

{id:33,title:"أطول بادئة مشتركة",diff:"متوسط",xp:25,cat:"خوارزميات",
   concept:"خوارزمية <strong>LCP</strong>: ابدأ بالكلمة الأولى بادئةً مبدئية. لكل كلمة تالية: قلّص البادئة حرفاً حرفاً من اليمين حتى تصبح بادئة للكلمة الحالية. تنتهي عند أول عدم تطابق.",
   desc:"اكتب دالة <strong>longestCommonPrefix</strong> تجد أطول بادئة مشتركة بين كل الكلمات في المصفوفة.",
   hint:"ابدأ بالكلمة الأولى، قلّص البادئة حتى تجدها في كل الكلمات.",
   icon:"fa-text-slash",
   exs:[{i:"longestCommonPrefix(['flower','flow','flight'])",o:"'fl'"},{i:"longestCommonPrefix(['dog','racecar'])",o:"''"}],
   code:"function longestCommonPrefix(strs) {\n  if(!strs.length) return '';\n  let prefix = strs[0];\n  // اكتب هنا\n  \n}",fn:"longestCommonPrefix",
   tests:[{a:[["flower","flow","flight"]],e:"fl"},{a:[["dog","racecar"]],e:""},{a:[["interview","inter","internal"]],e:"inter"},{a:[["abc","abc"]],e:"abc"}]},

{id:34,title:"الأرقام الرومانية",diff:"صعب",xp:35,cat:"خوارزميات",
   concept:"<strong>الأرقام الرومانية</strong>: القاعدة — إذا قيمة الحرف أصغر من الذي يليه (كـIV)، اطرح. غير ذلك اجمع. مثال: IV = -1+5=4 ، VI = 5+1=6. قارن كل حرف بالتالي وطبّق القاعدة.",
   desc:"اكتب دالة <strong>romanToInt</strong> تحوّل رقماً رومانياً إلى عدد صحيح. I=1، V=5، X=10، L=50، C=100، D=500، M=1000",
   hint:"إذا قيمة الحرف الحالي أقل من التالي، اطرح. غير ذلك اجمع.",
   icon:"fa-i-cursor",
   exs:[{i:"romanToInt('III')",o:"3"},{i:"romanToInt('IV')",o:"4"},{i:"romanToInt('MCMXCIV')",o:"1994"}],
   code:"function romanToInt(s) {\n  const map = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000};\n  // اكتب هنا\n  \n}",fn:"romanToInt",
   tests:[{a:["III"],e:3},{a:["IV"],e:4},{a:["IX"],e:9},{a:["LVIII"],e:58},{a:["MCMXCIV"],e:1994}]},

{id:35,title:"Quick Sort — الفرز السريع",diff:"صعب",xp:40,cat:"خوارزميات",
   concept:"<strong>Quick Sort</strong> يختار <em>pivot</em> ويُقسّم المصفوفة لجزأين: أصغر وأكبر منه. ثم يُطبَّق recursively على الجزأين. متوسط تعقيد <strong>O(n log n)</strong>. من أسرع خوارزميات الفرز العملية.",
   desc:"نفّذ خوارزمية <strong>quickSort</strong> — أسرع خوارزميات الفرز عملياً O(n log n). اختر pivot وقسّم المصفوفة.",
   hint:"اختر pivot (آخر عنصر). قسّم: أصغر يساراً، أكبر يميناً. افرز كلاهما recursively.",
   icon:"fa-bolt",
   exs:[{i:"quickSort([3,6,8,10,1,2,1])",o:"[1,1,2,3,6,8,10]"},{i:"quickSort([5,1,8,3])",o:"[1,3,5,8]"}],
   code:"function quickSort(arr) {\n  if(arr.length <= 1) return arr;\n  const pivot = arr[arr.length - 1];\n  const left = [], right = [];\n  for(let i = 0; i < arr.length - 1; i++) {\n    // اكتب هنا\n    \n  }\n  // أعد القسمين المفروزين مع الـ pivot\n}",fn:"quickSort",
   tests:[{a:[[3,6,8,10,1,2,1]],e:[1,1,2,3,6,8,10]},{a:[[5,1,8,3]],e:[1,3,5,8]},{a:[[1]],e:[1]},{a:[[2,1]],e:[1,2]}]},

{id:36,title:"Sliding Window",diff:"صعب",xp:40,cat:"خوارزميات",
   concept:"<strong>Sliding Window</strong>: بدل إعادة الحساب من صفر لكل نافذة O(n×k)، نُزيل أول عنصر ونُضيف التالي فقط في كل خطوة. هذا يُقلّل التعقيد لـ<strong>O(n)</strong>. تقنية أساسية لمسائل المصفوفات.",
   desc:"اكتب دالة <strong>maxSumSubarray</strong> تجد أكبر مجموع لـ k عناصر متتالية في مصفوفة بكفاءة O(n).",
   hint:"احسب مجموع أول k عناصر. ثم حرّك النافذة: اطرح الأول وأضف التالي في كل خطوة.",
   icon:"fa-window-maximize",
   exs:[{i:"maxSumSubarray([1,4,2,10,23,3,1,0,20], 4)",o:"39"},{i:"maxSumSubarray([2,3,4,1,5], 2)",o:"7"}],
   code:"function maxSumSubarray(arr, k) {\n  if(arr.length < k) return 0;\n  let sum = arr.slice(0, k).reduce((a,b)=>a+b, 0);\n  let max = sum;\n  // اكتب Sliding Window\n  \n}",fn:"maxSumSubarray",
   tests:[{a:[[1,4,2,10,23,3,1,0,20],4],e:39},{a:[[2,3,4,1,5],2],e:7},{a:[[1,2,3],3],e:6}]},

{id:37,title:"Kadane's Algorithm",diff:"صعب",xp:40,cat:"خوارزميات",
   concept:"<strong>Kadane's Algorithm</strong>: لكل عنصر قرر — هل أضمّه للمتتالية الحالية؟ أم أبدأ منه من جديد؟ <code>currentMax = Math.max(n, currentMax + n)</code>. كفاءة <strong>O(n)</strong> مقارنة بـO(n³) من الحل الساذج.",
   desc:"اكتب دالة <strong>maxSubarraySum</strong> تجد أكبر مجموع لمصفوفة فرعية متتالية بكفاءة O(n). (Kadane's Algorithm)",
   hint:"تتبع currentMax وglobalMax. currentMax = Math.max(n, currentMax+n). لكل عنصر.",
   icon:"fa-chart-line",
   exs:[{i:"maxSubarraySum([-2,1,-3,4,-1,2,1,-5,4])",o:"6 // [4,-1,2,1]"},{i:"maxSubarraySum([-1,-2,-3])",o:"-1"}],
   code:"function maxSubarraySum(arr) {\n  let currentMax = arr[0];\n  let globalMax = arr[0];\n  // اكتب هنا\n  \n}",fn:"maxSubarraySum",
   tests:[{a:[[-2,1,-3,4,-1,2,1,-5,4]],e:6},{a:[[-1,-2,-3]],e:-1},{a:[[1]],e:1},{a:[[5,4,-1,7,8]],e:23}]},

{id:38,title:"Coin Change — Dynamic Programming",diff:"صعب",xp:45,cat:"خوارزميات",
   concept:"<strong>Dynamic Programming</strong>: حل مسائل كبيرة عبر تخزين نتائج المسائل الصغيرة. <code>dp[i]</code> = أقل قطع لتغطية مبلغ i. لكل مبلغ وكل قطعة: <code>dp[i] = min(dp[i], dp[i-coin]+1)</code>. نهج Bottom-up.",
   desc:"اكتب دالة <strong>coinChange</strong> تجد أقل عدد من القطع النقدية لتغطية مبلغ معين. تعيد -1 إذا استحال.",
   hint:"Dynamic Programming: dp[i] = min coins for amount i. dp[0]=0. لكل قطعة coin: dp[i]=min(dp[i], dp[i-coin]+1)",
   icon:"fa-coins",
   exs:[{i:"coinChange([1,5,10,25], 36)",o:"3 // 25+10+1"},{i:"coinChange([2], 3)",o:"-1"}],
   code:"function coinChange(coins, amount) {\n  const dp = new Array(amount + 1).fill(Infinity);\n  dp[0] = 0;\n  // اكتب DP هنا\n  \n}",fn:"coinChange",
   tests:[{a:[[1,5,10,25],36],e:3},{a:[[2],3],e:-1},{a:[[1,2,5],11],e:3},{a:[[1],0],e:0}]},

{id:39,title:"Pascal's Triangle",diff:"متوسط",xp:25,cat:"خوارزميات",
   concept:"<strong>مثلث Pascal</strong>: كل عنصر = مجموع العنصرين فوقه. كل صف يبدأ وينتهي بـ1. يُستخدم في الاحتمالات والتوافيق C(n,k). نمط DP بسيط: ابنِ كل صف من الصف السابق.",
   desc:"اكتب دالة <strong>pascalTriangle</strong> تعيد مثلث Pascal بعدد n صفوف.",
   hint:"كل صف يبدأ وينتهي بـ 1. الباقي: row[j] = prev[j-1] + prev[j]",
   icon:"fa-triangle-exclamation",
   exs:[{i:"pascalTriangle(4)",o:"[[1],[1,1],[1,2,1],[1,3,3,1]]"},{i:"pascalTriangle(1)",o:"[[1]]"}],
   code:"function pascalTriangle(n) {\n  const result = [[1]];\n  for(let i = 1; i < n; i++) {\n    // اكتب هنا\n    \n  }\n  return result;\n}",fn:"pascalTriangle",
   tests:[{a:[1],e:[[1]]},{a:[4],e:[[1],[1,1],[1,2,1],[1,3,3,1]]},{a:[5],e:[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]}]},

// ── المسار 5: Async & Promises ────────
{id:40,title:"Promise الأساسي",diff:"سهل",xp:15,cat:"async",
   concept:"<strong>Promise</strong> يمثّل قيمة ستأتي في المستقبل. له 3 حالات: Pending، Resolved، Rejected. <code>new Promise((resolve, reject) => {})</code>. <code>resolve(value)</code> يُحلّ الوعد بعد انتهاء العملية.",
   desc:"اكتب دالة <strong>delay</strong> تعيد Promise يُحلّ بعد ms مللي ثانية.",
   hint:"return new Promise(resolve => setTimeout(resolve, ms))",
   icon:"fa-hourglass",
   exs:[{i:"await delay(1000)",o:"ينتظر ثانية ثم يكمل"},{i:"delay(500).then(()=>console.log('done'))",o:"طباعة بعد 500ms"}],
   code:"function delay(ms) {\n  // أعد Promise يُحلّ بعد ms\n  \n}",fn:"delay",
   customCheck:async(r,a)=>{const t=Date.now();const p=r(60);if(!p||typeof p.then!=='function')return false;await p;return Date.now()-t>=50;},
   customCheckDesc:"تعيد Promise يُحلّ فعلاً بعد ms مللي ثانية",
   tests:[{a:[10],e:null}]},

{id:41,title:"async/await أساسي",diff:"متوسط",xp:25,cat:"async",
   concept:"<code>async function</code> تعيد دائماً Promise. <code>await</code> تُوقف تنفيذ الدالة حتى يُحلّ الـPromise — بدون تجميد Thread الرئيسي. الكود يبدو متزامناً وهو في الحقيقة غير متزامن.",
   desc:"اكتب دالة <strong>fetchUser</strong> async تستقبل id وتعيد بيانات المستخدم المحاكاة بعد تأخير 100ms.",
   hint:"استخدم async/await مع wait:\nasync function fetchUser(id){ await wait(100); return {id, name:'User '+id}; }",
   icon:"fa-user-clock",
   exs:[{i:"await fetchUser(1)",o:"{id:1, name:'User 1'}"},{i:"await fetchUser(5)",o:"{id:5, name:'User 5'}"}],
   code:"const wait = ms => new Promise(r => setTimeout(r, ms));\n\nasync function fetchUser(id) {\n  await wait(100);\n  // أعد {id, name:'User '+id}\n  \n}",fn:"fetchUser",
   customCheck:async(r,a)=>{const u=await r(7);return !!u&&u.id===7&&u.name==='User 7';},
   customCheckDesc:"fetchUser(7) يُحلّ بـ {id:7, name:'User 7'}",
   tests:[{a:[1],e:null}]},

{id:42,title:"Promise Chain",diff:"متوسط",xp:25,cat:"async",
   concept:"<strong>Promise Chaining</strong>: كل <code>.then()</code> يستقبل نتيجة السابق ويُعيد قيمة جديدة. يصنع سلسلة تحويلات نظيفة بدل callback hell. كل <code>.then()</code> يُنشئ Promise جديداً تلقائياً.",
   desc:"اكتب دالة <strong>processData</strong> تعيد Promise يمر على 3 خطوات: double ثم addTen ثم toString.",
   hint:"Promise.resolve(n).then(v=>v*2).then(v=>v+10).then(v=>String(v))",
   icon:"fa-link",
   exs:[{i:"await processData(5)",o:"'20' // 5*2=10, 10+10=20, '20'"},{i:"await processData(10)",o:"'30'"}],
   code:"function processData(n) {\n  return Promise.resolve(n)\n    .then(v => v * 2)\n    // أكمل الـ chain\n    \n}",fn:"processData",
   customCheck:async(r,a)=>(await r(5))==='20'&&(await r(10))==='30',
   customCheckDesc:"Promise يُحلّ بـ '20' للرقم 5 و '30' للرقم 10",
   tests:[{a:[5],e:null}]},

{id:43,title:"معالجة الأخطاء في Promises",diff:"متوسط",xp:30,cat:"async",
   concept:"<strong>Error handling في Async</strong>: بدل رمي الأخطاء للأعلى، نلتقطها ونُعيد كائناً موحداً <code>{data, error}</code>. هذا النمط مستوحى من Go وRust. يجعل الكود أكثر توقعاً وأسهل في الاختبار.",
   desc:"اكتب دالة <strong>safeFetch</strong> async تنفذ دالة async وتعيد {data, error} — لا ترمي أخطاء أبداً.",
   hint:"try{ const data = await fn(); return {data, error:null}; }catch(e){ return {data:null, error:e.message}; }",
   icon:"fa-shield",
   exs:[{i:"await safeFetch(()=>Promise.resolve(42))",o:"{data:42, error:null}"},{i:"await safeFetch(()=>Promise.reject('فشل'))",o:"{data:null, error:'فشل'}"}],
   code:"async function safeFetch(fn) {\n  try {\n    \n  } catch(e) {\n    \n  }\n}",fn:"safeFetch",
   customCheck:async(r,a)=>{const x=await r(()=>Promise.resolve(42));const y=await r(()=>Promise.reject(new Error('فشل')));return !!x&&x.data===42&&x.error==null&&!!y&&y.data==null&&y.error!=null;},
   customCheckDesc:"{data:42, error:null} عند النجاح و {data:null, error} عند الفشل — بدون throw",
   tests:[{a:[()=>Promise.resolve(42)],e:null}]},

{id:44,title:"Retry — إعادة المحاولة",diff:"صعب",xp:40,cat:"async",
   concept:"<strong>Retry pattern</strong>: إعادة المحاولة عند الفشل مفيد مع network requests غير مستقرة. نستخدم <strong>recursion</strong>: إذا فشل وبقيت محاولات، استدعِ نفسك بمحاولة ناقصة. <code>try/catch</code> مع async/await.",
   desc:"اكتب دالة <strong>retry</strong> تستقبل دالة async وعدد محاولات، وتعيد Promise يعيد المحاولة عند الفشل.",
   hint:"async function retry(fn, attempts){ try{return await fn();}catch(e){if(attempts<=1)throw e; return retry(fn, attempts-1);} }",
   icon:"fa-rotate-right",
   exs:[{i:"retry(unstableFn, 3)",o:"يحاول 3 مرات قبل الرمي"},{i:"retry(()=>Promise.resolve(1), 3)",o:"1 من أول مرة"}],
   code:"async function retry(fn, attempts) {\n  // حاول، وعند الفشل أعد المحاولة\n  \n}",fn:"retry",
   customCheck:async(r,a)=>{let n=0;const v=await r(()=>{n++;return n<3?Promise.reject(new Error('x')):Promise.resolve('ok');},3);let m=0,threw=false;try{await r(()=>{m++;return Promise.reject(new Error('y'));},2);}catch(e){threw=true;}return v==='ok'&&n===3&&threw&&m===2;},
   customCheckDesc:"تنجح في المحاولة الثالثة، وترمي الخطأ بعد نفاد المحاولات",
   tests:[{a:[()=>Promise.resolve('ok'),3],e:null}]},

{id:45,title:"Promises المتسلسلة",diff:"صعب",xp:40,cat:"async",
   concept:"<strong>Sequential vs Parallel</strong>: <code>Promise.all()</code> تُشغّل كل شيء معاً. <code>for...of + await</code> يُشغّل واحداً واحداً بالترتيب المضمون. Sequential ضروري عندما كل مهمة تعتمد على نتيجة السابقة.",
   desc:"اكتب دالة <strong>runSequential</strong> تشغّل مصفوفة من الدوال الـ async بالترتيب وتجمع النتائج.",
   hint:"استخدم for...of مع await: const results=[]; for(const fn of fns){ results.push(await fn()); } return results;",
   icon:"fa-list-ol",
   exs:[{i:"await runSequential([f1, f2, f3])",o:"[r1, r2, r3] بالترتيب"},{i:"الترتيب مضمون",o:"f2 لا تبدأ قبل f1"}],
   code:"async function runSequential(fns) {\n  const results = [];\n  // شغّل كل دالة وانتظر نتيجتها قبل التالية\n  \n  return results;\n}",fn:"runSequential",
   customCheck:async(r,a)=>{const order=[];const mk=(v,ms)=>()=>new Promise(res=>setTimeout(()=>{order.push(v);res(v);},ms));const out=await r([mk(1,30),mk(2,5),mk(3,1)]);return JSON.stringify(out)==='[1,2,3]'&&order.join()==='1,2,3';},
   customCheckDesc:"تعيد [1,2,3] وتنفّذ الدوال واحدة بعد الأخرى",
   tests:[{a:[[()=>Promise.resolve(1),()=>Promise.resolve(2)]],e:null}]},

{id:46,title:"Observable بسيط",diff:"صعب",xp:50,cat:"async",
   concept:"<strong>Observable pattern</strong> (أساس RxJS) يسمح بمراقبة تدفق مستمر من القيم عبر الزمن. المشترك يُسجّل دوالّ تُنادى عند كل قيمة/خطأ/إنهاء. هذا النمط أساس reactive programming الحديث.",
   desc:"اكتب <strong>createObservable</strong> تعيد كائناً يدعم subscribe(observer) لمراقبة قيم تصل عبر الزمن. Observer له: next(val).",
   hint:"استخدم مصفوفة subscribers: {subscribe(obs){subscribers.push(obs)}, emit(v){subscribers.forEach(s=>s.next&&s.next(v))}}",
   icon:"fa-eye",
   exs:[{i:"const obs=createObservable()",o:"كائن به subscribe وemit"},{i:"obs.subscribe({next:v=>console.log(v)}); obs.emit(42)",o:"يطبع 42"}],
   code:"function createObservable() {\n  const subscribers = [];\n  return {\n    subscribe(observer) {\n      subscribers.push(observer);\n      return { unsubscribe: () => { /* إلغاء */ } };\n    },\n    emit(value) { /* أرسل لكل المشتركين */ },\n    error(err) { /* أرسل خطأ */ },\n    complete() { /* أنهِ */ }\n  };\n}",fn:"createObservable",
   customCheck:(r,a)=>{try{const o=r();const vals=[];o.subscribe({next:v=>vals.push(v)});o.emit(1);o.emit(2);o.emit(3);return vals.length===3&&vals[0]===1&&vals[2]===3;}catch(e){return false;}},
   customCheckDesc:"subscribe ثم emit يستقبل القيم",
   tests:[{a:[],e:null}]},

// ── المسار 6: OOP & Classes ──────────
{id:47,title:"كلاس Animal",diff:"متوسط",xp:25,cat:"OOP",
   concept:"<strong>Class</strong> في JavaScript هي syntactic sugar فوق prototype-based inheritance. <code>constructor</code> يُنفَّذ عند <code>new</code>. <code>this</code> يُشير للكائن الحالي. <code>this.name = name</code> يُضيف خاصية للكائن.",
   desc:"أنشئ كلاس <strong>Animal</strong> يستقبل name وsound في constructor، وله method speak() تعيد النص: 'الـ [name] يقول [sound]!'",
   hint:"class Animal { constructor(name,sound){...} speak(){ return `الـ ${this.name} يقول ${this.sound}!`; } }",
   icon:"fa-paw",
   exs:[{i:"new Animal('قطة','مياو').speak()",o:"'الـ قطة يقول مياو!'"},{i:"new Animal('كلب','هاو').speak()",o:"'الـ كلب يقول هاو!'"}],
   code:"class Animal {\n  constructor(name, sound) {\n    // اكتب هنا\n  }\n  speak() {\n    // أعد الرسالة\n  }\n}",fn:"Animal",
   customCheck:(r,a)=>{try{const a1=new r('قطة','مياو');const a2=new r('كلب','هاو');return a1.speak()==='الـ قطة يقول مياو!'&&a2.speak()==='الـ كلب يقول هاو!';}catch(e){return false;}},
   customCheckDesc:"new Animal('قطة','مياو').speak() = 'الـ قطة يقول مياو!'",
   tests:[{a:[],e:null}]},

{id:48,title:"كلاس Rectangle",diff:"متوسط",xp:25,cat:"OOP",
   concept:"<strong>Methods</strong> هي دوال مرتبطة بالكائن وتصل للخصائص عبر <code>this</code>. عكس الدوال العادية، لها سياق (context) مرتبط بالكائن الذي استُدعيت منه. كل method تُعرَّف مباشرة داخل جسم الكلاس.",
   desc:"أنشئ كلاس <strong>Rectangle</strong> يستقبل width وheight، مع methods: area() للمساحة، perimeter() للمحيط، isSquare() للتحقق.",
   hint:"area: width*height | perimeter: 2*(width+height) | isSquare: width===height",
   icon:"fa-square",
   exs:[{i:"new Rectangle(4,5).area()",o:"20"},{i:"new Rectangle(3,3).isSquare()",o:"true"}],
   code:"class Rectangle {\n  constructor(width, height) {\n    this.width = width;\n    this.height = height;\n  }\n  area() { /* اكتب */ }\n  perimeter() { /* اكتب */ }\n  isSquare() { /* اكتب */ }\n}",fn:"Rectangle",
   customCheck:(r,a)=>{try{const rect=new r(4,5);const sq=new r(3,3);return rect.area()===20&&rect.perimeter()===18&&!rect.isSquare()&&sq.isSquare();}catch(e){return false;}},
   customCheckDesc:"area=20, perimeter=18, isSquare=false للـ(4,5)",
   tests:[{a:[],e:null}]},

{id:49,title:"كلاس Stack",diff:"متوسط",xp:25,cat:"OOP",
   concept:"<strong>Stack</strong> هيكل بيانات LIFO (Last In First Out). التطبيق بمصفوفة: <code>push</code>→<code>array.push()</code>، <code>pop</code>→<code>array.pop()</code>، <code>peek</code>→آخر عنصر بدون حذف. يُستخدم في call stack وundo/redo.",
   desc:"نفّذ كلاس <strong>Stack</strong> بالعمليات: push(item)، pop()، peek()، isEmpty()، size(). المبدأ: آخر داخل أول خارج (LIFO).",
   hint:"استخدم مصفوفة داخلية. push: push للمصفوفة. pop: تعيد وتحذف الأخير. peek: الأخير بدون حذف.",
   icon:"fa-layer-group",
   exs:[{i:"s.push(1); s.push(2); s.pop()",o:"2"},{i:"s.peek()",o:"1"},{i:"s.isEmpty()",o:"false"}],
   code:"class Stack {\n  constructor() {\n    this.items = [];\n  }\n  push(item) { /* اكتب */ }\n  pop() { /* اكتب */ }\n  peek() { /* اكتب */ }\n  isEmpty() { /* اكتب */ }\n  size() { return this.items.length; }\n}",fn:"Stack",
   customCheck:(r,a)=>{try{const s=new r();s.push(1);s.push(2);s.push(3);return s.pop()===3&&s.peek()===2&&s.size()===2&&!s.isEmpty();}catch(e){return false;}},
   customCheckDesc:"push/pop/peek/isEmpty/size تعمل صحيح",
   tests:[{a:[],e:null}]},

{id:50,title:"كلاس Queue",diff:"متوسط",xp:25,cat:"OOP",
   concept:"<strong>Queue</strong> هيكل بيانات FIFO (First In First Out). التطبيق بمصفوفة: <code>enqueue</code>→<code>push()</code>، <code>dequeue</code>→<code>shift()</code> (من البداية). مثل طابور الانتظار. يُستخدم في task scheduling وBFS.",
   desc:"نفّذ كلاس <strong>Queue</strong> بالعمليات: enqueue(item)، dequeue()، front()، isEmpty()، size(). المبدأ: أول داخل أول خارج (FIFO).",
   hint:"استخدم مصفوفة. enqueue: push. dequeue: shift (من البداية). front: [0].",
   icon:"fa-bars",
   exs:[{i:"q.enqueue(1); q.enqueue(2); q.dequeue()",o:"1"},{i:"q.front()",o:"2"}],
   code:"class Queue {\n  constructor() {\n    this.items = [];\n  }\n  enqueue(item) { /* اكتب */ }\n  dequeue() { /* اكتب */ }\n  front() { /* اكتب */ }\n  isEmpty() { /* اكتب */ }\n  size() { return this.items.length; }\n}",fn:"Queue",
   customCheck:(r,a)=>{try{const q=new r();q.enqueue(1);q.enqueue(2);q.enqueue(3);return q.dequeue()===1&&q.front()===2&&q.size()===2;}catch(e){return false;}},
   customCheckDesc:"enqueue/dequeue/front بمبدأ FIFO",
   tests:[{a:[],e:null}]},

{id:51,title:"الوراثة — Inheritance",diff:"صعب",xp:35,cat:"OOP",
   concept:"<strong>Inheritance</strong> تسمح لكلاس بوراثة خصائص وميثودز كلاس آخر. <code>extends</code> يُوسّع الكلاس الأب. <code>super()</code> يستدعي constructor الأب ويجب أن يأتي قبل استخدام <code>this</code> في الكلاس الابن.",
   desc:"أنشئ كلاس <strong>Vehicle</strong> بخصائص make وspeed، وmethod describe(). ثم كلاس <strong>Car</strong> يرث منه ويضيف doors وmethod fullInfo().",
   hint:"class Car extends Vehicle { constructor(make,speed,doors){ super(make,speed); this.doors=doors; } fullInfo(){ return this.describe()+' - '+this.doors+' أبواب'; } }",
   icon:"fa-car",
   exs:[{i:"new Car('Toyota',120,4).fullInfo()",o:"'Toyota - 120 كمس - 4 أبواب'"},{i:"new Car('BMW',200,2).describe()",o:"'BMW - 200 كمس'"}],
   code:"class Vehicle {\n  constructor(make, speed) {\n    this.make = make;\n    this.speed = speed;\n  }\n  describe() {\n    return `${this.make} - ${this.speed} كمس`;\n  }\n}\n\nclass Car extends Vehicle {\n  constructor(make, speed, doors) {\n    super(make, speed);\n    // اكتب هنا\n  }\n  fullInfo() {\n    // اكتب هنا\n  }\n}",fn:"Car",
   customCheck:(r,a)=>{try{const c=new r('Toyota',120,4);return c.fullInfo()==='Toyota - 120 كمس - 4 أبواب'&&c.describe()==='Toyota - 120 كمس'&&c instanceof r;}catch(e){return false;}},
   customCheckDesc:"Car يرث من Vehicle ويضيف fullInfo()",
   tests:[{a:[],e:null}]},

{id:52,title:"Private Fields #",diff:"صعب",xp:35,cat:"OOP",
   concept:"<strong>Private Fields</strong> (ES2022) تبدأ بـ<code>#</code> ولا يمكن الوصول إليها خارج الكلاس — حتى من الكلاس الابن! هذا <strong>true encapsulation</strong>، بعكس الـ<code>_</code> التقليدي الذي كان اتفاقاً غير مُلزِم.",
   desc:"أنشئ كلاس <strong>BankAccount</strong> بحقل خاص #balance. Methods: deposit(amount)، withdraw(amount)، getBalance(). لا يمكن الوصول لـ #balance مباشرة.",
   hint:"class BankAccount { #balance=0; deposit(n){this.#balance+=n;} withdraw(n){if(n>this.#balance)throw new Error('رصيد غير كافٍ');this.#balance-=n;} getBalance(){return this.#balance;} }",
   icon:"fa-bank",
   exs:[{i:"acc.deposit(500); acc.getBalance()",o:"500"},{i:"acc.withdraw(200); acc.getBalance()",o:"300"}],
   code:"class BankAccount {\n  #balance = 0;\n  \n  deposit(amount) {\n    // اكتب هنا\n  }\n  withdraw(amount) {\n    // تحقق من الرصيد ثم اطرح\n  }\n  getBalance() {\n    // اكتب هنا\n  }\n}",fn:"BankAccount",
   customCheck:(r,a)=>{try{const acc=new r();acc.deposit(500);acc.deposit(300);acc.withdraw(200);return acc.getBalance()===600;}catch(e){return false;}},
   customCheckDesc:"deposit+withdraw+getBalance تعمل صحيح",
   tests:[{a:[],e:null}]},

{id:53,title:"Iterator & Generator",diff:"صعب",xp:40,cat:"OOP",
   concept:"<strong>Generator Function</strong> تُعرَّف بـ<code>function*</code>. <code>yield</code> تُوقف التنفيذ وتُعيد قيمة، ثم تكمل عند الاستدعاء التالي. تُنشئ <strong>Iterator</strong> يعمل مع <code>for...of</code> وSpread operator تلقائياً.",
   desc:"اكتب دالة <strong>range</strong> Generator تولّد أرقاماً من start إلى end بخطوة step.",
   hint:"function* range(start,end,step=1){ for(let i=start;i<=end;i+=step) yield i; }",
   icon:"fa-repeat",
   exs:[{i:"[...range(1,5)]",o:"[1,2,3,4,5]"},{i:"[...range(0,10,2)]",o:"[0,2,4,6,8,10]"}],
   code:"function* range(start, end, step = 1) {\n  // استخدم yield\n  \n}",fn:"range",
   customCheck:(r,a)=>{try{return JSON.stringify([...r(1,5)])===JSON.stringify([1,2,3,4,5])&&JSON.stringify([...r(0,10,2)])===JSON.stringify([0,2,4,6,8,10]);}catch(e){return false;}},
   customCheckDesc:"Generator يولّد النطاق الصحيح",
   tests:[{a:[1,5],e:null}]},

{id:54,title:"Chainable Calculator",diff:"صعب",xp:35,cat:"OOP",
   concept:"<strong>Method Chaining</strong> يجعل الكود قابلاً للقراءة كجُمَل: <code>calc.add(5).multiply(2).getResult()</code>. السر: كل method تُعيد <code>this</code> بدل undefined، فتبقى على نفس الكائن وتتابع الاستدعاءات.",
   desc:"أنشئ كلاس <strong>Calculator</strong> بالعمليات add، subtract، multiply، divide — كلها تعيد this لتمكين method chaining. وgetResult() للنتيجة.",
   hint:"add(n){ this.result += n; return this; } // أعد this دائماً",
   icon:"fa-calculator",
   exs:[{i:"new Calculator(10).add(5).multiply(2).subtract(3).getResult()",o:"27"},{i:"new Calculator(100).divide(4).add(5).getResult()",o:"30"}],
   code:"class Calculator {\n  constructor(initial = 0) {\n    this.result = initial;\n  }\n  add(n) { this.result += n; return this; }\n  subtract(n) { /* اكتب */ }\n  multiply(n) { /* اكتب */ }\n  divide(n) { /* اكتب */ }\n  getResult() { return this.result; }\n}",fn:"Calculator",
   customCheck:(r,a)=>{try{return new r(10).add(5).multiply(2).subtract(3).getResult()===27&&new r(100).divide(4).add(5).getResult()===30;}catch(e){return false;}},
   customCheckDesc:"Calculator(10).add(5).multiply(2).subtract(3) = 27",
   tests:[{a:[],e:null}]},

// ── المسار 7: النصوص و Regex ──────────────────
{id:56,title:"عكس الكلمات",diff:"سهل",xp:10,cat:"نصوص",
   concept:"النص في JavaScript غير قابل للتعديل (immutable). نحوّله لمصفوفة بـ <code>split</code>، نعدّلها، ثم نرجعه نصاً بـ <code>join</code>.",
   desc:"اكتب دالة <strong>reverseWords</strong> تعكس ترتيب الكلمات في الجملة (الكلمات مفصولة بمسافة واحدة).",
   hint:"str.split(' ').reverse().join(' ')",icon:"fa-arrow-right-arrow-left",
   exs:[{i:"reverseWords('أنا أحب البرمجة')",o:"'البرمجة أحب أنا'"},{i:"reverseWords('a b c')",o:"'c b a'"}],
   code:"function reverseWords(str) {\n  // اكتب هنا\n  \n}",fn:"reverseWords",
   tests:[{a:["a b c"],e:"c b a"},{a:["hello world"],e:"world hello"},{a:["one"],e:"one"},{a:["أنا أحب البرمجة"],e:"البرمجة أحب أنا"}]},

{id:57,title:"Capitalize — أول حرف كبير",diff:"سهل",xp:10,cat:"نصوص",
   concept:"<code>str[0]</code> يعطي أول حرف، و<code>toUpperCase()</code> يحوّله لحرف كبير، و<code>slice(1)</code> يعطي بقية النص.",
   desc:"اكتب دالة <strong>titleCase</strong> تجعل أول حرف من كل كلمة كبيراً والباقي صغيراً.",
   hint:"str.split(' ').map(w => w[0].toUpperCase() + w.slice(1).toLowerCase()).join(' ')",icon:"fa-font",
   exs:[{i:"titleCase('hello WORLD')",o:"'Hello World'"}],
   code:"function titleCase(str) {\n  // اكتب هنا\n  \n}",fn:"titleCase",
   tests:[{a:["hello world"],e:"Hello World"},{a:["hello WORLD"],e:"Hello World"},{a:["javaScript is fun"],e:"Javascript Is Fun"}]},

{id:58,title:"عدّ الحروف المتحركة",diff:"سهل",xp:15,cat:"نصوص",
   concept:"<strong>Regex</strong> نمط للبحث في النصوص. <code>/[aeiou]/gi</code> يطابق أي حرف متحرك (g = كل التطابقات، i = بدون حساسية لحالة الأحرف). <code>str.match(re)</code> يعيد مصفوفة التطابقات أو <code>null</code>.",
   desc:"اكتب دالة <strong>countVowels</strong> تعيد عدد الحروف المتحركة الإنجليزية (a e i o u) في النص.",
   hint:"(str.match(/[aeiou]/gi) || []).length",icon:"fa-spell-check",
   exs:[{i:"countVowels('JavaScript')",o:"3"},{i:"countVowels('xyz')",o:"0"}],
   code:"function countVowels(str) {\n  // استخدم Regex\n  \n}",fn:"countVowels",
   tests:[{a:["JavaScript"],e:3},{a:["xyz"],e:0},{a:["AEIOU"],e:5},{a:[""],e:0}]},

{id:59,title:"تحقق من البريد الإلكتروني",diff:"متوسط",xp:25,cat:"نصوص",
   concept:"<code>regex.test(str)</code> يعيد true/false. <code>^</code> بداية النص و<code>$</code> نهايته، <code>\\S+</code> حرف أو أكثر ليس مسافة، و<code>\\.</code> نقطة حرفية.",
   desc:"اكتب دالة <strong>isEmail</strong> تعيد true إذا كان النص بصيغة <code>اسم@نطاق.امتداد</code> بدون مسافات.",
   hint:"/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(str)",icon:"fa-at",
   exs:[{i:"isEmail('ali@mail.com')",o:"true"},{i:"isEmail('ali@mail')",o:"false"}],
   code:"function isEmail(str) {\n  // اكتب Regex هنا\n  \n}",fn:"isEmail",
   tests:[{a:["ali@mail.com"],e:true},{a:["ali@mail"],e:false},{a:["ali mail@x.com"],e:false},{a:["a.b@sd.co"],e:true},{a:["@x.com"],e:false}]},

{id:60,title:"ضغط النص (Run-Length)",diff:"متوسط",xp:30,cat:"نصوص",
   concept:"<strong>Run-Length Encoding</strong> يضغط التكرار المتتالي: <code>aaab</code> ← <code>a3b1</code>. نمرّ على النص ونعدّ الحروف المتتالية المتشابهة.",
   desc:"اكتب دالة <strong>compress</strong> تحوّل كل مجموعة حروف متتالية متشابهة إلى الحرف ثم عدده.",
   hint:"استخدم حلقة مع عدّاد، أو: str.match(/(.)\\1*/g).map(g => g[0] + g.length).join('')",icon:"fa-file-zipper",
   exs:[{i:"compress('aaabcc')",o:"'a3b1c2'"},{i:"compress('')",o:"''"}],
   code:"function compress(str) {\n  // اكتب هنا\n  \n}",fn:"compress",
   tests:[{a:["aaabcc"],e:"a3b1c2"},{a:["abc"],e:"a1b1c1"},{a:[""],e:""},{a:["zzzzz"],e:"z5"}]},

{id:61,title:"Template — استبدال المتغيرات",diff:"صعب",xp:40,cat:"نصوص",
   concept:"<code>str.replace(regex, fn)</code> يمرّر كل تطابق لدالة، ونعيد البديل. مجموعات الالتقاط <code>( )</code> تعطيك جزءاً من التطابق كمعامل.",
   desc:"اكتب دالة <strong>render</strong> تستبدل كل <code>{{key}}</code> بقيمتها من الكائن data، وتترك المفاتيح غير الموجودة كما هي.",
   hint:"tpl.replace(/\\{\\{\\s*(\\w+)\\s*\\}\\}/g, (m, k) => k in data ? data[k] : m)",icon:"fa-code-merge",
   exs:[{i:"render('مرحبا {{name}}', {name:'علي'})",o:"'مرحبا علي'"},{i:"render('{{x}}', {})",o:"'{{x}}'"}],
   code:"function render(tpl, data) {\n  // اكتب هنا\n  \n}",fn:"render",
   tests:[{a:["Hi {{name}}",{name:"Ali"}],e:"Hi Ali"},{a:["{{a}}+{{b}}={{c}}",{a:1,b:2,c:3}],e:"1+2=3"},{a:["{{ x }}",{x:"ok"}],e:"ok"},{a:["{{missing}}",{}],e:"{{missing}}"}]},

{id:55,title:"ماذا بعد؟ طريقك للاحتراف",diff:"خاص",xp:100,cat:"🎓 إتمام",
  type:"final",
  icon:"fa-trophy",
  concept:`أكملت رحلة <strong>CodeNile</strong> كاملةً 🎉 — الآن الفرق بين المبتدئ والمحترف هو شيء واحد فقط: <strong>بناء مشاريع حقيقية</strong>. الكود الذي تكتبه لنفسك يعلّمك أكثر من مئة تحدٍّ.`,
  desc:`
<div style="display:flex;flex-direction:column;gap:14px">

  <div style="background:linear-gradient(135deg,rgba(245,193,0,.12),rgba(245,193,0,.05));border:1.5px solid rgba(245,193,0,.3);border-radius:16px;padding:16px">
    <div style="font-size:15px;font-weight:900;color:var(--gold);margin-bottom:12px">🚀 مشاريع تبنيها الآن</div>
    <div style="display:flex;flex-direction:column;gap:10px;font-size:13px;color:var(--text2)">
      <div style="display:flex;gap:10px;align-items:flex-start"><span style="color:var(--gold);font-weight:800;flex-shrink:0">01</span><div><strong style="color:var(--text)">محفظة أعمال شخصية</strong><br>موقع يعرض مشاريعك بـ HTML/CSS/JS — أول ما يراه المشغِّل</div></div>
      <div style="display:flex;gap:10px;align-items:flex-start"><span style="color:var(--gold);font-weight:800;flex-shrink:0">02</span><div><strong style="color:var(--text)">تطبيق قائمة مهام</strong><br>localStorage + CRUD كامل — يُثبت فهمك للـ DOM والبيانات</div></div>
      <div style="display:flex;gap:10px;align-items:flex-start"><span style="color:var(--gold);font-weight:800;flex-shrink:0">03</span><div><strong style="color:var(--text)">تطبيق طقس بـ API</strong><br>fetch + async/await + عرض بيانات حقيقية — قفزة كبيرة</div></div>
      <div style="display:flex;gap:10px;align-items:flex-start"><span style="color:var(--gold);font-weight:800;flex-shrink:0">04</span><div><strong style="color:var(--text)">مشروع بـ React أو Vue</strong><br>اختر إطار عمل واحد وابنِ فيه نسخة بسيطة من تطبيق يومي</div></div>
      <div style="display:flex;gap:10px;align-items:flex-start"><span style="color:var(--gold);font-weight:800;flex-shrink:0">05</span><div><strong style="color:var(--text)">Clone لموقع مشهور</strong><br>انسخ واجهة Twitter أو Notion — الأفضل لتعلم CSS المتقدم</div></div>
    </div>
  </div>

  <div style="background:rgba(82,183,136,.08);border:1.5px solid rgba(82,183,136,.25);border-radius:16px;padding:16px">
    <div style="font-size:15px;font-weight:900;color:var(--green);margin-bottom:12px">💡 نصائح المحترفين</div>
    <div style="display:flex;flex-direction:column;gap:9px;font-size:13px;color:var(--text2)">
      <div style="display:flex;gap:9px;align-items:flex-start"><span style="color:var(--green);font-size:16px;flex-shrink:0">✓</span><div><strong style="color:var(--text)">اقرأ كود الآخرين</strong> — GitHub مليء بمشاريع مفتوحة. افهم كيف يفكر المحترفون</div></div>
      <div style="display:flex;gap:9px;align-items:flex-start"><span style="color:var(--green);font-size:16px;flex-shrink:0">✓</span><div><strong style="color:var(--text)">علّم ما تتعلمه</strong> — اكتب مقالاً أو اشرح مفهوماً لصديق، هذا يُرسّخ المعرفة</div></div>
      <div style="display:flex;gap:9px;align-items:flex-start"><span style="color:var(--green);font-size:16px;flex-shrink:0">✓</span><div><strong style="color:var(--text)">Node.js هي خطوتك التالية</strong> — نفس JavaScript لكن على الـ server، بابٌ لعالم كامل</div></div>
      <div style="display:flex;gap:9px;align-items:flex-start"><span style="color:var(--green);font-size:16px;flex-shrink:0">✓</span><div><strong style="color:var(--text)">لا تتوقف عند الدروس</strong> — كل ساعة تقضيها تبني أهم من عشر ساعات تشاهد</div></div>
      <div style="display:flex;gap:9px;align-items:flex-start"><span style="color:var(--green);font-size:16px;flex-shrink:0">✓</span><div><strong style="color:var(--text)">المجتمع قوتك</strong> — انضم لـ Discord أو مجموعات المبرمجين العرب، اسأل ولا تتردد</div></div>
    </div>
  </div>

  <div style="background:rgba(156,137,255,.08);border:1.5px solid rgba(156,137,255,.25);border-radius:16px;padding:16px">
    <div style="font-size:15px;font-weight:900;color:var(--purple);margin-bottom:12px">🗺️ خارطة طريق ما بعد CodeNile</div>
    <div style="font-size:12px;color:var(--text2);display:flex;flex-direction:column;gap:8px">
      <div style="display:flex;align-items:center;gap:8px"><div style="width:8px;height:8px;border-radius:50%;background:var(--green);flex-shrink:0"></div><span><strong style="color:var(--text)">الآن:</strong> ابنِ 3 مشاريع حقيقية وارفعها على GitHub</span></div>
      <div style="display:flex;align-items:center;gap:8px"><div style="width:8px;height:8px;border-radius:50%;background:var(--gold);flex-shrink:0"></div><span><strong style="color:var(--text)">بعد شهر:</strong> تعلّم React + الـ APIs (RESTful)</span></div>
      <div style="display:flex;align-items:center;gap:8px"><div style="width:8px;height:8px;border-radius:50%;background:var(--orange);flex-shrink:0"></div><span><strong style="color:var(--text)">بعد 3 أشهر:</strong> Node.js + قاعدة بيانات (MongoDB أو Supabase)</span></div>
      <div style="display:flex;align-items:center;gap:8px"><div style="width:8px;height:8px;border-radius:50%;background:var(--purple);flex-shrink:0"></div><span><strong style="color:var(--text)">بعد 6 أشهر:</strong> مشروع كامل Full Stack وانشره للعالم</span></div>
    </div>
  </div>

</div>`,
  hint:"الاحتراف ليس وجهة، هو عادة يومية. أنت الآن تمتلك الأساس — ابنِ عليه كل يوم شيئاً واحداً 🏗️",
  exs:[{i:"مشاريع + مجتمع + صبر",o:"احتراف 🎯"}],
  code:"// 🎉 أكملت جميع تحديات CodeNile!\n// أنت الآن جاهز لبناء أشياء حقيقية.\n\n// خطوتك القادمة:\nconst nextStep = {\n  today:   'ابدأ مشروعك الأول الآن',\n  thisWeek:'ارفعه على GitHub',\n  thisMonth:'تعلّم React',\n  goal:    'Full Stack Developer 🚀'\n};\n\nconsole.log('رحلتك بدأت للتو...');\nconsole.log(nextStep.today);",
  fn:null,
  tests:[{a:[],e:null}],
  customCheck:()=>true,
  customCheckDesc:"أكملت جميع التحديات 🎉"
}

]; // END CHALLENGES


const PATHS = [
  {id:1,title:"JavaScript أساسي",icon:"JS",color:"#F5C100",bg:"rgba(245,193,0,.15)",cat:"أساسي",locked:false,
   desc:"المتغيرات، الدوال، الشروط — 7 تحديات للبداية الصحيحة"},
  {id:2,title:"هياكل البيانات",icon:"{}",color:"#52B788",bg:"rgba(82,183,136,.15)",cat:"هياكل البيانات",locked:false,
   desc:"المصفوفات، Stack، Queue، Linked List"},
  {id:3,title:"الدوال المتقدمة",icon:"fn",color:"#9C89FF",bg:"rgba(156,137,255,.15)",cat:"الدوال المتقدمة",locked:false,
   desc:"Closure، Memoize، Debounce، Recursion"},
  {id:4,title:"الخوارزميات",icon:"O(n)",color:"#FF8C42",bg:"rgba(255,140,66,.15)",cat:"خوارزميات",locked:false,
   desc:"Sorting، Searching، DP، Sliding Window"},
  {id:5,title:"Async & Promises",icon:"⏳",color:"#4DA6FF",bg:"rgba(77,166,255,.12)",cat:"async",locked:false,
   desc:"Promises، async/await، Event Loop، Observable"},
  {id:6,title:"OOP & Classes",icon:"class",color:"#FF6B9D",bg:"rgba(255,107,157,.15)",cat:"OOP",locked:false,
   desc:"Classes، Inheritance، Private Fields، Generator"},
  {id:7,title:"النصوص و Regex",icon:"/re/",color:"#44BBA4",bg:"rgba(68,187,164,.15)",cat:"نصوص",locked:false,
   desc:"split/join، تحويل النصوص، والتعابير النمطية Regex"}
];

const BADGES = [
  {id:1,emoji:"🌱",name:"أول خطوة",req:"حل أول تحدي",solvedThresh:1},
  {id:2,emoji:"⭐",name:"بداية جيدة",req:"حل 5 تحديات",solvedThresh:5},
  {id:3,emoji:"🔥",name:"مبتدئ متحمس",req:"حل 10 تحديات",solvedThresh:10},
  {id:4,emoji:"💡",name:"مفكر",req:"حل 5 تحديات متوسطة",medThresh:5},
  {id:5,emoji:"🐆",name:"مبرمج الخرطوم",req:"حل جميع التحديات السهلة",allEasyDone:true},
  {id:6,emoji:"🦁",name:"أسد البرمجة",req:"حل 10 تحديات صعبة",hardThresh:10},
  {id:7,emoji:"👑",name:"أسطورة CodeNile",req:"حل جميع تحديات التطبيق",allDone:true},
  {id:8,emoji:"🏅",name:"بطل النيل",req:"تجميع 500 XP",xpThresh:500},
  {id:9,emoji:"💎",name:"ملك التحديات",req:"تجميع 1000 XP",xpThresh:1000},
  {id:13,emoji:"🔥",name:"المتقدم",req:"حل 5 تحديات صعبة",hardThresh:5},
  {id:14,emoji:"🎓",name:"خريج مسار",req:"أكمل مساراً تعليمياً كاملاً",pathDone:true},
  {id:10,emoji:"🎯",name:"دقيق",req:"حل 3 تحديات بكود صحيح من أول مرة",perfectThresh:3},
  {id:11,emoji:"🚀",name:"صاروخ",req:"حل تحدي صعب",hardOne:true},
  {id:12,emoji:"🇸🇩",name:"فخر السودان",req:"حل 50 تحدياً",solvedThresh:50}
];

// تحديات حقيقية فقط (بدون شاشة "ماذا بعد؟" الختامية)
function realChallenges(){ return CHALLENGES.filter(c=>c.type!=='final'); }

// ══════════════════════════════════════
// LESSONS — دروس قصيرة قبل كل مسار
// كل درس: title, body (HTML), example (كود يُفتح في الملعب)
// ══════════════════════════════════════
const LESSONS = {
  "أساسي":[
    {title:"المتغيرات والأنواع",
     body:"<p>نخزّن البيانات في <strong>متغيرات</strong>. استخدم <code>const</code> افتراضياً، و<code>let</code> فقط إذا كانت القيمة ستتغير. تجنّب <code>var</code>.</p><p>أنواع القيم الأساسية: <code>number</code>، <code>string</code>، <code>boolean</code>، <code>null</code>، <code>undefined</code>، و<code>object</code>. المعامل <code>typeof</code> يكشف النوع.</p>",
     example:"const name = 'علي';\nlet age = 20;\nage = age + 1;\nconsole.log(name, age);\nconsole.log(typeof name, typeof age, typeof true);"},
    {title:"الدوال والشروط",
     body:"<p><strong>الدالة</strong> كتلة كود قابلة لإعادة الاستخدام: تستقبل مدخلات وتُعيد ناتجاً بـ <code>return</code>. بدون <code>return</code> تعيد <code>undefined</code>.</p><p><strong>الشروط</strong> <code>if / else</code> تختار مساراً حسب قيمة منطقية. استخدم <code>===</code> للمقارنة الصارمة دائماً.</p>",
     example:"function grade(score) {\n  if (score >= 90) return 'ممتاز';\n  else if (score >= 50) return 'ناجح';\n  return 'راسب';\n}\nconsole.log(grade(95), grade(70), grade(30));"},
    {title:"الحلقات",
     body:"<p><code>for</code> للتكرار بعدد معروف، و<code>for...of</code> للمرور على عناصر مصفوفة، و<code>while</code> ما دام الشرط صحيحاً. تأكد دائماً أن الحلقة ستتوقف!</p>",
     example:"for (let i = 1; i <= 3; i++) console.log('دورة', i);\nfor (const fruit of ['موز', 'مانجو']) console.log(fruit);\nlet n = 3;\nwhile (n > 0) { console.log(n); n--; }"}
  ],
  "هياكل البيانات":[
    {title:"المصفوفات ودوالها",
     body:"<p>المصفوفة قائمة مرتبة. أهم الدوال: <code>map</code> (تحويل كل عنصر)، <code>filter</code> (اختيار عناصر)، <code>reduce</code> (تجميع لقيمة واحدة)، <code>find</code> و<code>includes</code>.</p><p>هذه الدوال لا تغيّر المصفوفة الأصلية بل تعيد نتيجة جديدة.</p>",
     example:"const nums = [1, 2, 3, 4, 5];\nconsole.log(nums.map(n => n * 2));\nconsole.log(nums.filter(n => n % 2 === 0));\nconsole.log(nums.reduce((sum, n) => sum + n, 0));"},
    {title:"الكائنات، Stack و Queue",
     body:"<p><strong>الكائن</strong> يخزّن أزواج مفتاح/قيمة. <code>Object.keys</code> و<code>Object.entries</code> للمرور عليه.</p><p><strong>Stack</strong> (آخر من يدخل أول من يخرج): <code>push</code> و<code>pop</code>. <strong>Queue</strong> (أول من يدخل أول من يخرج): <code>push</code> و<code>shift</code>.</p>",
     example:"const user = { name: 'سارة', city: 'الخرطوم' };\nfor (const [k, v] of Object.entries(user)) console.log(k, '→', v);\n\nconst stack = [];\nstack.push(1); stack.push(2);\nconsole.log('pop:', stack.pop());\n\nconst queue = [1, 2, 3];\nconsole.log('shift:', queue.shift());"}
  ],
  "الدوال المتقدمة":[
    {title:"Closure",
     body:"<p><strong>Closure</strong>: الدالة الداخلية تتذكر متغيرات الدالة التي أنشأتها حتى بعد انتهائها. هذا أساس العدّادات، والـ memoize، والـ debounce.</p>",
     example:"function makeCounter() {\n  let count = 0;\n  return () => ++count;\n}\nconst next = makeCounter();\nconsole.log(next(), next(), next());"},
    {title:"Higher-Order Functions و Recursion",
     body:"<p>دالة <strong>عالية الرتبة</strong> تستقبل دالة أو تعيد دالة (مثل <code>map</code>). <strong>Recursion</strong>: دالة تستدعي نفسها — ويجب أن يكون لها <em>شرط توقف</em>.</p>",
     example:"const twice = fn => x => fn(fn(x));\nconsole.log(twice(n => n + 3)(10));\n\nfunction factorial(n) {\n  if (n <= 1) return 1; // شرط التوقف\n  return n * factorial(n - 1);\n}\nconsole.log(factorial(5));"}
  ],
  "خوارزميات":[
    {title:"Big O — قياس الكفاءة",
     body:"<p><strong>Big O</strong> يصف كيف يزيد زمن الخوارزمية مع حجم المدخلات: <code>O(1)</code> ثابت، <code>O(n)</code> خطي، <code>O(n²)</code> حلقتان متداخلتان، <code>O(log n)</code> مثل البحث الثنائي.</p><p>استخدام <code>Set</code> أو كائن للبحث يحوّل <code>O(n²)</code> غالباً إلى <code>O(n)</code>.</p>",
     example:"// O(n²)\nfunction hasDupSlow(a){ for(let i=0;i<a.length;i++) for(let j=i+1;j<a.length;j++) if(a[i]===a[j]) return true; return false; }\n// O(n)\nconst hasDup = a => new Set(a).size !== a.length;\nconsole.log(hasDupSlow([1,2,3,1]), hasDup([1,2,3,1]));"},
    {title:"البحث الثنائي و Sliding Window",
     body:"<p><strong>البحث الثنائي</strong> على مصفوفة مرتبة: قارن بالمنتصف واحذف نصف المصفوفة كل مرة.</p><p><strong>Sliding Window</strong>: نافذة متحركة على المصفوفة بدل إعادة الحساب من الصفر.</p>",
     example:"function binarySearch(arr, x) {\n  let lo = 0, hi = arr.length - 1;\n  while (lo <= hi) {\n    const mid = (lo + hi) >> 1;\n    if (arr[mid] === x) return mid;\n    arr[mid] < x ? lo = mid + 1 : hi = mid - 1;\n  }\n  return -1;\n}\nconsole.log(binarySearch([1,3,5,7,9,11], 7));"}
  ],
  "async":[
    {title:"Event Loop و Promise",
     body:"<p>JavaScript تنفّذ سطراً واحداً في كل لحظة، لكن العمليات الطويلة (الشبكة، المؤقتات) تُؤجَّل عبر <strong>Event Loop</strong>. <strong>Promise</strong> وعدٌ بقيمة ستأتي لاحقاً: ينجح (<code>resolve</code>) أو يفشل (<code>reject</code>).</p>",
     example:"console.log('1');\nsetTimeout(() => console.log('3 — بعد المؤقت'), 0);\nPromise.resolve().then(() => console.log('2 — microtask'));\nconsole.log('1.5');"},
    {title:"async / await",
     body:"<p><code>async</code> تجعل الدالة تعيد Promise، و<code>await</code> تنتظر النتيجة بدون تجميد التطبيق. التقط الأخطاء بـ <code>try/catch</code>.</p>",
     example:"const wait = ms => new Promise(r => setTimeout(r, ms));\nasync function main() {\n  console.log('بدأ');\n  await wait(300);\n  console.log('انتهى بعد 300ms');\n}\nmain();"}
  ],
  "OOP":[
    {title:"Classes",
     body:"<p><code>class</code> قالب لإنشاء كائنات. <code>constructor</code> يُنفَّذ عند <code>new</code>، و<code>this</code> يشير للكائن الحالي. الحقول الخاصة تبدأ بـ <code>#</code>.</p>",
     example:"class Account {\n  #balance = 0;\n  deposit(x) { this.#balance += x; return this; }\n  get balance() { return this.#balance; }\n}\nconst acc = new Account().deposit(100).deposit(50);\nconsole.log(acc.balance);"},
    {title:"الوراثة",
     body:"<p><code>extends</code> يجعل كلاساً يرث من آخر، و<code>super()</code> يستدعي constructor الأب. يمكن إعادة تعريف (override) الدوال.</p>",
     example:"class Animal { constructor(n){ this.name = n; } speak(){ return this.name + ' يصدر صوتاً'; } }\nclass Dog extends Animal { speak(){ return this.name + ' ينبح'; } }\nconsole.log(new Animal('قط').speak());\nconsole.log(new Dog('ريكس').speak());"}
  ],
  "نصوص":[
    {title:"دوال النصوص",
     body:"<p>النصوص غير قابلة للتعديل؛ كل دالة تعيد نصاً جديداً. أهمها: <code>split</code>، <code>join</code>، <code>slice</code>، <code>trim</code>، <code>toUpperCase</code>، <code>includes</code>، <code>replaceAll</code>، و<code>padStart</code>.</p>",
     example:"const s = '  CodeNile تطبيق رائع  ';\nconsole.log(s.trim());\nconsole.log(s.trim().split(' '));\nconsole.log('7'.padStart(3, '0'));\nconsole.log('a-b-c'.replaceAll('-', '/'));"},
    {title:"Regex — التعابير النمطية",
     body:"<p>Regex نمط للبحث: <code>\\d</code> رقم، <code>\\w</code> حرف/رقم، <code>\\s</code> مسافة، <code>+</code> مرة أو أكثر، <code>*</code> صفر أو أكثر، <code>^</code> و<code>$</code> بداية ونهاية. الأعلام: <code>g</code> الكل، <code>i</code> بدون حساسية للحالة.</p>",
     example:"const text = 'اتصل على 0912345678 أو 0123456789';\nconsole.log(text.match(/\\d{10}/g));\nconsole.log(/^\\d+$/.test('123'), /^\\d+$/.test('12a'));\nconsole.log('hello world'.replace(/\\b\\w/g, c => c.toUpperCase()));"}
  ]
};
