let row=5;
let number="";

for(let  i=1; i<=row; i++){
    for (let j=1 ;j<=i ;j++){
        number+=j;
        }
        number+="\n";
    }
console.log(number);

let row2=5;
let stars="";

for(let m=1; m<=row2 ; m++){
    for(let n=1 ;n<=m; n++ ){
      stars+="*";
        }
    stars+="\n";
}
console.log(stars);

let n = 5;
let string = "";

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    string += " ";
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);