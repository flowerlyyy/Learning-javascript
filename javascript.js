// var ad="1";
// var Ad="2";
// var AD="3";
// var aD="4";
// var yazi= '"ByteCode Academy"';
// var yazi2= "\"Gullu Shammadli\"";
// // var default="5";
// document.write(ad + "<br>");
// document.write(Ad + "<br>");
// document.write(AD +"<br>");
// document.write(aD +"<br>");
// // document.write(default);
// document.write(yazi + "<br>");
// document.write(yazi2+ "<br>");

// var a, b,c;
// a=4;
// document.write(a + "<br>");

// let x=4;
// let y=x++;
// let m=10;
// let n=++m;
// document.write("x=" + x +"<br>");
// document.write("y=" + y + "<br>");
// document.write("m=" + m +"<br>");
// document.write("n=" + n +"<br>");

// let qiymet=-5;
// switch(qiymet){
//     case 2: 
//     document.write("Qeyri-kafi");
//     break;
//     case 3:
//     document.write("Kafi");
//     break;
//     case 4:
//     document.write("Yaxsi");
//     break;
//     case 5:
//     document.write("Ela");
//     break;
//     default:
//     document.write("Qiymet duzgun teyin olunmayib");
// }

// function calculate(){
//     let number1=parseInt(document.getElementById('number1').value);
//     let number2=parseInt(document.getElementById('number2').value);
//     let operation=document.getElementById('operation').value;
//     if(operation=="+"){
//         document.getElementById('result').value=number1 + number2;
//     }else if(operation=="-"){
//         document.getElementById('result').value=number1 - number2;
//     }else if(operation=="*"){
//         document.getElementById('result').value=number1 * number2;
//     }else if(operation=="/"){
//         document.getElementById('result').value=number1 / number2;
//     }else {
//         document.getElementById('result').value=number1 % number2;
//     }
// }

// let qiymet=18;
// // if(qiymet<15){
// //     document.write("Eded 15den kicikdir");
// // }else{
// //     document.write("Eded 15den boyukdur.");
// // }
// qiymet<15? document.write("Eded 15den kicikdir"): document.write("Eded 15den boyukdur.");

// function salam(){
//     document.write("Hi.Good Morning");
// }
// salam();

// function func(){
//     if(true){
//     var a=3;
//     let b=4;
//     document.writeln(a);
//     document.writeln(b);
//     }
//     document.writeln(a);
//     document.writeln(b);
// }
// func();
// // 1-ci növ
// function salamdunya(){
//     let salam="Salam Dunya";
//     document.write(salam);
// }

// // 2-ci növ
// function topla(eded1,eded2){
//     document.write(eded1 +eded2);
// }
// topla(5,8);

// // 3-cü gün
// function topla2(eded3, eded4){
//     return eded3 + eded4;
// }
// topla2(5,8);

// // 4-cü gün
// function pi(){
//     return 3.1415;
// }
// var pi=pi();
// document.write(pi);

// let number=+prompt("Enter number: ");
// let fact=1;
// for(let i=1; i<=number ;i++){
// fact=fact*i;
// if(i==number){
//     console.log(`Our result is ${fact}`);
// }
// }

// function factorial(value){
//     if(value<=0){
//         return 1;
//     }else{
//         return value * factorial(value -1);
//     }
// }
// let fact2= factorial(6);
// console.log(fact2);

// let students= ["Eli", "Vaqif", "Konul"];
// document.write(students[2] + "<br>");

// let students2=new Array("Eli", "Vaqif", "Konul");
//    document.write(students2[1] + "<br>");

// let examples=new Array(100);
// document.write(examples.length + "<br>");
// examples[0]="first";
// examples[1]="second";
// examples[2]="third";
// document.write(examples[1]);

let students=["Gullu", "Omer", "Esmer", "Ferid" ,"Tuncay", "Aylin", "Duygu", "Rena", "Dilek"];
for(let i=0; i<students.length;i++){
    document.write(students[i] +"<br>");
}

let children=new Array();
children['name']="Gullu";
children['surname']="Shammadli";
children['age']=21;
children['course']=3;
document.write(children['age']);
