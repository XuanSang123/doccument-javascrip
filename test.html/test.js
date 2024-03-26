// alert("hello");
// var account = "đang nhap";
// var password = "mật khẩu";
// const lengtAccout = account.length;
// const lengtPassword = password.length;
// if (
//   lengtAccout >= 6 &&
//   lengtPassword >= 8 &&
//   password == password.toUpperCase()
// ) {
//   console.log("đăng nhập thành công");
// } else {
//   console.log("đăng nhập thất bại");
// }
// let positiveNumbers = -1;
// if (positiveNumbers > 0) {
//   console.log("số dương");
// } else {
//   console.log("số âm");
// }
//
//
// bat tap 5
// const math = parseInt(prompt("nhap diem toan"));
// const physics = parseInt(prompt("nhap diem ly"));
// const chemistry = parseInt(prompt("nhap diem hoa"));
// average = (math + physics + chemistry) / 3;
// if (average > 5 && average < 5) {
//   console.log("hoc dinh gioi");
// } else {
//   console.log("ban rot mon");
// }
//
// bai tap 6
// const dolarUk = parseInt(prompt("nhap so tien"));
// const VNdong = dolarUk * 23000;
// console.log(`${VNdong} VND`);
// bai tap 7
// const variableA = parseInt(prompt("A"));
// const variableB = parseInt(prompt("B"));
// const variableC = parseInt(prompt("C"));
// if (variableA > variableB && variableA > variableC) {
//   console.log(` ${variableA}so lon nhat`);
// } else if (variableB > variableA && variableB > variableC) {
//   console.log(` ${variableB}so lon nhat`);
// } else {
//   console.log(`${variableC} la gia tri lon nhat`);
// }

// baitap8
// const A = parseInt(prompt("variableA"));
// const B = parseInt(prompt("variableB"));
// const C = parseInt(prompt("variableC"));
// const D = parseInt(prompt("variableD"));
// const E = parseInt(prompt("variableE"));
// var max = A;
// if (B > max) {
//   ();
// }

// baitap1
// const a = parseInt(prompt("nhap no n"));
// var result = "";
// baitap2

// const a = parseInt(prompt("person1"));
// const b = parseInt(prompt("person2"));
// if (a > b) {
//   console.log("person1");
// } else {
//   console.log("person2");
// }

// baitap 3
// var char = prompt("Nhập vào một ký tự: ");
// if (char >= "A" && char <= "Z") {
//   console.log(char + " là chữ cái viết hoa");
// } else if (char >= "a" && char <= "z") {
//   console.log(char + " là chữ cái viết thường");
// } else {
//   console.log(char + " không phải là chữ cái");
// }

// bai tap 4
// var a = parentInt(prompt(a));
// var b = parentInt(prompt(b));
// var c = parentInt(prompt(c));
// var x = parentInt(prompt(x));

// var delta = b * b - 4 * a * c;
// if (delta > 0) {
//   const x1 = (-b + Math.sqrt(delta)) / (2 * a);
//   const x2 = (-b  Math.sqrt(delta)) / (2 * a);
// console.log(`x1=${x1},x2${x2}`)};
// else if (delta ===0 ){const m = -b/(2*a);console.log(`m = ${m}`)}

// bai tap 5
// let year = parseInt(prompt(`nhập năm `));
// if ((year % 400 === 0 && year % 100 !== 0) || year % 400 == 0) {
//   console.log(`${year} laf nam nhuan`);
// } else {
//   console.log(`${year} khong phai nam nhuom`);
// }

// bai tap 6
// const number = prompt("Nhập số:");
// switch (number) {
//   case "0":
//     console.log("Sunday");
//     break;
//   case "1":
//     console.log("Monday");
//     break;
//   case "2":
//     console.log("Tuesday");
//     break;
//   case "3":
//     console.log("Wednesday");
//     break;
//   case "4":
//     console.log("Thursday");
//     break;
//   case "5":
//     console.log("Friday");
//     break;
//   case "6":
//     console.log("Saturday");
//     break;
//   default:
//     console.log("Nhập số vô conmemay!!");
//     break;
// }

//bai tap 8
// const a = parseInt(prompt("Nhập a"));
// const c = prompt("Nhập phep toan +-*/");
// const b = parseInt(prompt("Nhập c"));
// switch (c) {
//   case "+":
//     console.log(a + b);
//     break;
//   case "-":
//     console.log(a - b);
//     break;
//   case "*":
//     console.log(a * b);
//     break;
//   case "/":
//     console.log(a / b);
//     break;
//   default:
//     console.log("lỗi");
//     break;
// }

//
// const a = parseInt(prompt("Nhập tháng"));
// const b = parseInt(prompt("nhap nam"));
// switch (a) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     console.log("31 ngay");
//     break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     console.log("30 ngay");
//     break;
//   case 2:
//     if ((b % 400 === 0 && b % 100 !== 0) || b % 400 == 0) {
//       console.log(`${b} nam nhuan 29 ngay`);
//     } else {
//       console.log(`${b} khong phai nam nhuom 28 ngay`);
//     }
//     break;
//   default:
//     console.log("hihi");
//     break;
// }

// Decision making

// bai tap 1
// let age = parseInt(prompt("nhap so tuoi"));
// if (age >= 18) {
//   console.log(`tren 18 tuoi`);
// } else {
//   console.log("ban duoi 18 tuoi");
// }

// bai tap 2
// let time = parseInt(prompt("nhap so gio"));
// if (time >= 18) {
//   console.log(`good day`);
// } else {
//   console.log(" good evening");
// }

//  bai tap 3
// let time = parseInt(prompt("nhap so gio"));
// if (time > 10) {
//   console.log(`good morning`);
// } else if (time > 10 && time < 20) {
//   console.log(" good day");
// } else {
//   console.log(`good evening`);
// }

// bai tap 4
// let number = parseInt(prompt("nhap 1 so"));
// if (number % 2 === 0) {
//   console.log(` so chan`);
// } else {
//   console.log(`so le`);
// }

// batap 6
// let color = prompt("what is color");
// switch (color) {
//   case "red":
//     console.log(`red`);
//     break;
//   case "yellow":
//     console.log(`yellow`);
//     break;
//   case "green":
//     console.log(`green`);
//     break;
//   default:
//     console.log(`sai rpo`);
//     break;
// }

// bai tap 7
// let x = parseInt(prompt("nhap so vao day"));
// if (x == 0) {
//   console.log(0);
// } else if (x > 0) {
//   console.log(`so duong`);
// } else {
//   console.log(`so nguyen am`);
// }

// bap tap 8
// let x = parseInt(prompt("height"));
// let y = parseInt(prompt("wieght"));
// c = y / (x * x);
// if (c <= 18.5) console.log(`thin`);
// else if (18.5 <= c < 24.9) {
//   console.log(`normal`);
// } else if (c >= 25) {
//   console.log(`fat`);
// } else if (25 < c < 29.9) {
//   console.log(`soo fat`);
// } else if (30 < c < 34.9) {
//   console.log(`level 1 obesity`);
// } else if (35 < c < 39.9) {
//   console.log(`level 2 obesity`);
// } else console.log(`level 3 obesity`);

// bai tap 9
// let x = parseInt(prompt("Marth"));
// let y = parseInt(prompt("chemistry"));
// let c = parseInt(prompt("physics"));
// average = (x + y + c) / 3;
// if (8 <= average <= 10) {
//   console.log(`Good students`);
// } else if (6.5 <= average <= 7.9) {
//   console.log(`hs kha`);
// } else console.log(`hs yeu`);

// bai tap 10
// let a = parseInt(prompt(`a`));
// let b = parseInt(prompt(`b`));
// let c = parseInt(prompt(`c`));

// if (a + b > c && b + c > a && a + c > b && a > 0 && b > 0 && c > 0) {
//   if ((a == b) == c) console.log(`tam giac deu`);
//   else if (a == b || b == c || a == c) console.log(`tam giac can`);
//   else {
//     console.log(`tam giac thuong`);
//   }
// } else {
//   console.log(`khong phai tam giac`);
// }

// vong lap loop
// bai tap 1

// let n = parseInt(prompt(`nhap so nguyen`));
// for (let i = n; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// bai tap 3
// let a = parseInt(prompt(`nhap so a`));
// let b = parseInt(prompt(`nhap so b`));
// for (i = a; i <= b; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(i);
//   }
// }

// // bai tap 2
// let a = parseInt(prompt(`nhap so a`));
// let b = 1;
// for (let i = a; 1 <= i; i--) {
//   b *= i;
// }
// // b = b * i;
// console.log(b);

//  bai tap 3

// bai tap 4
// sum = 0;
// let n = parseInt(prompt(`nhap so`));
// for (let i = n; i > 0; i = Math.floor(i / 10)) {
//   sum += i % 10;
//   //   sum = sum + i % 10
// }
// console.log(sum);

// bai tap 4.1
// sum = "";
// let n = parseInt(prompt(`nhap so`));
// for (let i = n; i > 0; i = Math.floor(i / 10)) {
//   sum += (i % 10).toString();
//   //   sum = sum + i % 10
// }
// console.log(sum);

// bai tap 8
// let result = 1;
// let a = parseInt(prompt(`nhap so a`));
// let b = parseInt(prompt(`nhap so b`));
// for (let i = 1; i <= b; i++) {
//   result *= a;
//   //   result = result * a
// }
// console.log(result);

// bai tap 7
// let count = 0;
// let n = parseInt(prompt(`nhap so`));
// for (let i = 1; i <= n; i++) {
//   if (n % i === 0) {
//     console.log(i);
//   }
//   count++;
//   // count = count + 1
// }
// console.log(`so uoc ${count}`);

// bai tap 1

// let n = parseInt(prompt(`nhap so`));
// for (let i = 1; i <= n; i++) {
//   console.log(i);
// }

// bai tap 2
// let a = parseInt(prompt(`nhap so a`));
// let b = 1;
// for (let i = a; 1 <= i; i--) {
//   b *= i;
// }
// console.log(b);

// bai tap 3
// let n = parseInt(prompt(`nhap so n`));
// sum = 0;
// for (let i = 1; i <= n; i++) {
//   if (i % 2 != 0) {
//     sum += i;
//   }
// }
// // sum += i;
// console.log(sum);

// bai tap 4
// let n = parseInt(prompt(`nhap so n`));
// let f1 = 1;
// let f2 = 1;
// console.log(f1);
// console.log(f2);
// let f3 = 0;
// for (let i = 3; i <= n; i++) {
//   f3 = f1 + f2;
//   f1 = f2;
//   f2 = f3;
// }
// console.log(f3);

// bai tap 7
// sum = "";
// let n = parseInt(prompt(`nhap so n`));
// for (let i = n; i > 0; i = Math.floor(i / 10)) {
//   sum += (i % 10).toString();
// }
// console.log(sum.length);

// baitap8
// max = 0;
// let n = parseInt(prompt(`nhap so n`));
// for (let i = n; i > 0; i = Math.floor(i / 10)) {
//   if (i % 10 > max) {
//     max = i % 10;
//   }
// }
// console.log(max);

// baitap9
// sum = 0;
// let n = parseInt(prompt(`nhap so n`));
// for (let i = n; i > 0; i++) {
//   sum += i *i;
// }
// console.log(sum);

// bai tap chuoi palindrome
// sum = "";
// let n = parseInt(prompt(`nhap so n`));
// for (let i = n; i > 0; i = Math.floor(i / 10)) {
//   sum += (i % 10).toString();
// }
// if (sum == n) {
//   console.log(`is palindrome`);
// } else console.log(`non a palindrome`);

// nhap n la 1 so duong n, tính tổng các số chẵn 1 đến n. dùng vong lặp while
// let sum = 0;
// let i = 1;
// while (i <= n) {
//   if (i % 2 == 0) {
//     sum += 1;
//   }
//   i++;
// }

// nhập vào 1 số nguyên n, in ra giai thừa của số đó. dùng vòng lặp while
// vd: nhập n =5 -> giai thừa = 120 (5 4 3 2 1 )
// let n = parseInt(prompt(`nhap so n`));
// let result = 1;
// let i = 1;
// while (i <= n) {
//   result *= i;
//   i++;
// }
// console.log(result);

//  bai tap tiep theo
// let i = 1;
// while (i <= 100) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(`fizzBuzz`);
//   } else if (i % 3 === 0) {
//     console.log(`fizz`);
//   } else if (i % 5 === 0) {
//     console.log(`buzz`);
//   }
//   i++;
// }

//  bai tap 2a file zip
// count = 0;
// sum = 0;
// let i = 1;
// while (count <= 30) {
//   if (i % 5 === 0) {
//     sum += i;
//     count++;
//   }
//   i++;
// }
// console.log(sum);

//  bai tap 2b file zip
// let n = parseInt(prompt(`nhap so n`));
// let i = 1;
// while (i <= n) {
//   if (n % i === 0) {
//     console.log(i);
//   }
//   i++;
// }

// bai tap 4
// let n = parseInt(prompt(`nhap so n`));
// let i = 1;
// let a = 0;
// while (i <= 10) {
//   a = n * i;
//   console.log(`${a}=${n}*${i}`);
//   i++;
// }

// bai tap 5
// let number = 7;
// count = 0;
// while (count <= 3) {
//   let n = parseInt(prompt(`nhap tu 1 den 10`));
//   if (n == number) {
//     alert(`true`);
//     break;
//   } else if (n > number) {
//     alert(`so lon hon`);
//   } else if (n < number) {
//     alert(`so nho hon`);
//   }
//   count++;
// }
// if (count === 3) {
//   alert("ban da thua");
// }

// bai tap 6
// let n = parseInt(prompt(`nhap so`));
// for (let i = 2; i <= n; i++) {
//   let isPrime = true;
//   for (let j = 2; j <= Math.sqrt(i); j++) {
//     if (i % j == 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) {
//     console.log(i);
//   }
// }

// // bai tap 7
// let n = parseInt(prompt(`nhap so`));
// let sum = 0;
// let count = 0;
// let i = 0;
// while (count < 30) {
//   if (i % 7 == 0) {
//     sum += i;
//     count++;
//   }
//   i++;
// }
// console.log(sum);

// vong lap for
// let n = parseInt(prompt(`nhap so`));
// let sum = 0;
// let count = 0;
// for (let i = 0; count <= 30; ) {
//   if (i % 7 == 0) {
//     sum += i;
//     count++;
//   }
//   i++;
// }
// console.log(sum);

// lam lai bt1
// let n = parseInt(prompt(`nhap so`));
// let i = 1;
// while (i <= 15) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(`${i} FizzBuzz`);
//   } else if (i % 3 === 0) {
//     console.log(`${i} Fizz`);
//   } else if (i % 5 === 0) {
//     console.log(`${i} Buzz`);
//   }
//   i++;
// }

// bai tap 2a  lam lai
// let n = parseInt(prompt(`nhap so`));
// let sum = 0;
// let i = 0;
// let count = 0;
// while (count < 30) {
//   if (i % 5 === 0) {
//     sum += i;
//     count++;
//   }
//   i++;
// }
// console.log(sum);

// bai tap 2b lam lai
// let n = parseInt(prompt(`nhap so`));
// let i = 1;
// while (i <= n) {
//   if (n % i == 0) {
//     console.log(i);
//   }
//   i++;
// }

// lam lai bai 4
// let n = parseInt(prompt(`nhap so`));
// let a = 0;
// let i = 1;

// for (let j = 1; j < 10; j++) {
//   while (i < 10) {
//     a = n * i;
//     console.log(`${a} = ${n} * ${i}`);
//     i++;
//   }
//   console.log(j);
// }

// lam lai bai 5
// let count = 0;
// let i = 7;
// while (count < 3) {
//   let n = parseInt(prompt(`nhap so`));
//   if (n == i) {
//     alert(`chuc mung ban`);
//     break;
//   } else if (n < i) {
//     alert(`be hon`);
//   } else if (n > i) {
//     alert(`lon hon`);
//   }
//   count++;
// }
// if (count === 3) {
//   alert(`ban thua roi`);
// }

// bai toan chia het cho 7
// let sum = "";
// for (let i = 2000; i <= 3200; i++) {
//   if (i % 7 == 0 && i % 5 != 0) {
//     sum += i + " ";
//     // sum= sum + (i+"")
//   }
// }
// console.log(sum);

// bai toan chia het cho 7 dung for
// let sum = "";
// let i = 2000;
// while (i < 3200) {
//   if (i % 7 == 0 && i % 5 != 0) {
//     sum += i + " ";
//     // sum= sum + (i+"")
//   }
// }
// console.log(sum);

// bai tap: hãy đếm số lượng các số le không chia hết cho 5 hoac 7 năm trong 1 đoạn (a,b). tính cả a và b. với a,b nhập từ bán phím.
// let a = parseInt(prompt(`nhap so a`));
// let b = parseInt(prompt(`nhap so b`));
// let count = 0;
// for (let i = a; i <= b; i++) {
//   if (i % 2 === 0 || i % 5 === 0 || i % 7 === 0) continue;
//   count++;
//   console.log(i);
// }
// console.log(`cac so le ko chia het cho 5 va 7 co ${count} so`);

// bai tap 7 for continoue
// let n = parseInt(prompt(`nhap so n`));
// let sum = 0;
// for (let i = 0; i <= n; i++) {
//   if (i % 2 == 0) continue;
//   sum += i * i;
//   console.log(sum);
// }

// bai tap 7 while continoue
// let n = parseInt(prompt(`nhap so n`));
// let i = 1;
// let sum = 0;
// while (i <= n) {
//   if (i % 2 === 0) {
//     i++;
//     continue;
//   }
//   {
//     sum += i * i;
//   }
//   i++;
// }
// console.log(sum);

// Bài tập 9: Nhập vào 1 số và kiểm tra đấy có phải số nguyên tố hay không
// Note: Số nguyên tố là số chỉ chia hết cho 1 và chính nó, số đó không được chia hết số nào khoảng từ 1 đến chính số đó.
//  Ví dụ: 13 là số nguyên tố, vì nó chỉ chia hết cho 1 và 13, 13 không chia hết số nào trong khoảng số đấy.
// ** Các bước làm:
// - B1: Nhập số nguyên cần kiểm tra từ người dùng.
// - B2: Kiểm tra xem số đó có nhỏ hơn 2 hay không, vì tất cả các số nguyên tố lớn hơn 1.
// - B3: Duyệt qua tất cả các số từ 2 đến căn bậc hai của số đó (ví dụ: nếu số là n thì bạn chỉ cần duyệt từ 2 đến căn bậc hai của n).
// - B4: Kiểm tra xem số đó có chia hết cho bất kỳ số nào trong khoảng đó hay không. Nếu có, nó không phải là số nguyên tố. Nếu không, nó là số nguyên tố.
// - B5: Xuất kết quả cho người dùng.

// let n = parseInt(prompt(`nhap so n`));
// let isPrime = true;
// for (let i = 2; i < n; i++) {
//   if (n % i === 0) isPrime = false;
// }
// if (isPrime) console.log(`${n} phai la so nguyen to`);
// else console.log(`${n} khong phai la so nguyen to`);

// bai tap 5
// let choice;
// let isCheck = true;
// while (isCheck) {
//   choice = parseInt(
//     prompt(`Mời bạn nhập số mình chọn: .
//     1.Kiểm tra tính chẵn lẻ của số.
//     2.Kiểm tra số nguyên tố.
//     3.Kiểm tra số có chia hết cho 3 hay không
//     4.Thoát`)
//   );
//   switch (choice) {
//     case 1:
//       const number = parseInt(prompt("Nhập số: "));
//       if (number % 2 === 0) {
//         console.log("Số chẵn");
//       } else {
//         console.log("Số lẻ");
//       }
//       break;
//     case 2:
// const number2 = parseInt(prompt("Nhập số: "));
// let isPrime = true;
// for (let i = 2; i <= Math.sqrt(number2); i++) {
//   if (number2 % i === 0) {
//     isPrime = false;
//   }
// }
// if (isPrime) {
//   console.log("Số nguyên tố");
// } else {
//   console.log("Không phải số nguyên tố");
// }
//     case 3:
//       const number3 = parseInt(prompt("Nhập số: "));
//       if (number3 % 3 === 0) {
//         console.log("Số chia hết cho 3");
//       } else {
//         console.log("Số không chia hết cho 3");
//       }
//       break;
//     case 4:
//       isCheck = false;
//       break;
//     default:
//       console.log("Nhập sai, vui lòng nhập lại");
//       break;
//   }
// }

// baitap6
// let check = true;
// while (check) {
//   var choice = parseInt(
//     prompt(`1.Tính chu vi và diện tích hình chữ nhât.
//   2.Tính chu vi và diện tích hình tam giác.
//   3.TÍnh chu vi và diện tích hình tròn.
//   4.thoát`)
//   );
//   switch (choice) {
//     case 1:
//       var width = parseInt(prompt(`nhap so a`));
//       var length = parseInt(prompt(`nhap so b`));
//       var choiceBee = parseInt(
//         prompt(`1. tinhs chu vi.
//       2. tinh dien tich`)
//       );
//       switch (choiceBee) {
//         case 1:
//           perimeter = (width + length) * 2;
//           var p = perimeter;
//           console.log(`perimater is ${p}`);
//           break;
//         case 2:
//         default:
//           area = width * length;
//           var a = area;
//           console.log(`area is ${a}`);
//           break;
//       }
//       break;
//     case 2:
//       var width = parseInt(prompt(`nhap so a`));
//       var length = parseInt(prompt(`nhap so b`));
//       var deep = parseInt(prompt(`nhap so c`));
//       p = (width + length + deep) / 2;
//       perimeter = width + length + deep;
//       a = Math.sqrt(p * (p - width) * (p - length) * (p - deep));
//       console.log(`perimater is ${p}`);
//       console.log(`area is ${a}`);
//       break;
//     case 3:
//       var diameter = parseInt(prompt(`nhap so a`));
//       p = pi * diameter;
//       a = (diameter * diameter * Math.PI) / 4;
//       console.log(`perimater is ${p}`);
//       console.log(`area is ${a}`);
//       break;
//     case 4:
//       check = false;
//       break;
//     default:
//       console.log("Nhập sai, vui lòng nhập lại");
//       break;
//   }
// }

// Bài về mảng:
// let arr = [2, 4, 5, 7, 8];
// let isLocation = -1;
// let n = parseInt(prompt(`nhap mot so n`));
// for (let i = 0; i < arr.length; i++) {
//   if (n === arr[i]) {
//     isLocation = i;
//   }
// }
// console.log(isLocation);

//demo 1
// let students = ["Anh", "Trân", "Tính", "Sáng"];
// console.log(students.length);
// console.log(students[0]);
// console.log(students.length - 1);
//truy xuất các phần tử trong mảng
// for(let i = 0; i < students.length; i++){
//     console.log(students[i]);
// }

//for of()
// for (let student of students){
//     console.log(student);
// }

//đẩy thêm phần tử vào mảng
//lấy code pull
// students.push("Vua lì đòn");
// for(let i = 0; i < students.length; i++){
//     console.log(students[i]);
// }

//forEach()
//duyêt qua từng phần tử trong mảng
// students.forEach(function(student, index){
//     console.log(index, student);
// });

//filter()
//lọc ra những phần tử thỏa mãn điều kiện
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const numbersFilter = numbers.filter(number => number < 3) //numbers.filter(chứa điều kiện)
// console.log(numbersFilter);

//map()
//thêm một phần tử vào mảng mà vẫn giữ nguyên mảng cũ.ta sẽ nhận được mảng cũ + phần tử mới
// const numbersMap = numbers.map(number => number * 2);
// numbersMap.push(10);
// console.log(numbersMap);

//reduce()
//tính tổng các phần tử trong mảng
// const total = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(total);

//find()
//tìm kiếm phần tử đầu tiên trong mảng thỏa mãn điều kiện
// const numberFind = numbers.find(number => number > 5);
// console.log(numberFind);

// const ages = [18, 22,32, 33, 16, 40];
// const ageFind = ages.find((age) => age > 25);
// console.log(ageFind);

//findIndex()
// tìm kiếm vị trí của phần tử đầu tiên thỏa mãn điều kiện
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const findIndex = numbers.findIndex((number) => number > 5);
// console.log(findIndex);

//slice()
//cắt mảng
// const numbersSlice = numbers.slice(1, 4);
// console.log(numbersSlice);

// let arr=[...arr2,...arr3]

// BÀI TẬP MẢNG

//bài tập 1:nhập một số x và tìm vị trí giá trị x,nếu có in ra vị trí, nếu không in ra -1
// let arr = [2,4,5,7,8];
// let position = -1;
// let x = parseInt(prompt("Nhập vào một số x: "));
// for(let i = 0; i < arr.length; i++){
//     if(x === arr[i]){
//         position = i;
//     }
// }
// console.log(position);

// bai tap 1:

// let number = [1, 2, 3, 4, 5];
// const total = number.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   0
// );
// console.log(total);

// bai tap 2a:
// let number = [3, 4, 5, 4, 5];
// let max = number[0];
// let min = number[0];
// for (let i = 0; i < number.length; i++) {
//   if (number[i] > max) {
//     max = number[i];
//   }
//   if (number[i] < min) {
//     min = number[i];
//   }
// }
// console.log(`max ${max} va min ${min}`);

// bai tap 2b:
// let number = [2, 9, 6, 6, 7, 8];
// number.sort((a, b) => a - b);
// console.log(number);

// bai tap 2b...cach 2
// let arr = [2, 9, 6, 6, 7, 8];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] > arr[j]) {
//       let temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//     }
//   }
// }
// console.log(arr);

// let stack = [];
// stack.push(1, 2, 3, 4, 5);
// console.log(stack);

// bai tập đảo ngược
// arr = [1, 4, 2, 5, 9];
// for (let i = arr.length; i >= 0; i--) console.log(arr[i]);

//  tìm max = 9;
// let arr = [1, 4, 2, 9, 5];
// let max = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }
// console.log(max);

// const numbers = [5, 3, 4, 5, 4, 1];
// let max = 0;
// let secondMax = 0;
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > max) {
//     secondMax = max;
//     max = numbers[i];
//   } else if (numbers[i] > secondMax && numbers[i] !== max) {
//     secondMax = numbers[i];
//   }
// }
// console.log(secondMax);

// javascrip splice
// arr = [1, 2, 3, 4, 6];
// arr.splice(4, 0, 5);
// console.log(arr);

// bai tap 5
// let n = parseInt(prompt("Nhập vào một số nguyen:"));
// let arr = [3, 4, 5, 3];
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (n % arr[i] === 0) {
//     count++;
//   }
// }
// console.log(count);

// bai tap secsssion 14 (bai tap 3)
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let max = arr[0];
// let sum = 0;
// let average = 0;
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     arr[i] = max;
//   }
//   sum += arr[i];
// }
// average = sum / arr.length;
// console.log(`the max number is: ${max}`);
// console.log(`${average} is average`);

// Bài 2: Viết một chương trình nhận một số nhập vào và chèn dấu (_) giữa 2 số chẵn.

// Ví dụ nếu bạn nhập vào 245468 thì kết quả của chương trình sẽ là 2-454-6-8
// const str = "245468";
// const strSplit = str.split("");
// let result = [];

// for (let i = 0; i < strSplit.length; i++) {
//   if (str[i - 1] % 2 === 0 && str[i] % 2 === 0) {
//     result.push("-", str[i]);
//   } else {
//     result.push(str[i]);
//   }
// }

// Output: 2-454-6-8

// bai tap funtion
let numbers = [1, 2];
let numbers1 = [1, 2, 3];
let a = [3, 5, 6, 7];
function arraySum(arrayNumber) {
  let sum = 0;
  for (let i = 0; i < arrayNumber.length; i++) {
    sum += arrayNumber[i];
  }
  console.log(`sum ${sum}`);
}
arraySum(a);
