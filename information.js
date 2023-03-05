/*
alert(); - funksiyası ekrana bildiriş şəklində yazı çıxarır.
window.alert() - funksiyası ekrana bildiriş şəklində yazı çıxarır.  (BOM OBYEKT YÖNÜMLÜ)
document.write() - Səhifəyə hər hansı yazı daxil edir.
document.writeln() -Səhifəyə hər hansı yazı daxil edir.Yeni bir sətrə keçir.
script tagini <pre> taginin içində yazanda yazının şrifti dəyisir ve o zaman yeni sətrə kecir.Presiz keçmir.
<noscript> tagi o zaman istifadə olunur ki  istifadəçi saytın ayarlarında js-ə icazə vermir.Bu zaman onda ekranda yazı çıxır.
console.log("") - metodu browserde yazilari consoleda göstərir.
debugger; - skript daxilində səhvləri tapmaq və düzəltmək üçün istifaə olunur.Debugging bir prosesdir.
innerHTML - HTML teqlərinə müdaxilə edərək onlara hər hansı bir məlumat ötürə bilərik və ya dəyişdirə bilərik.
document.getElementById("dunya").innerHTML="World";

Məlumat tipləri 1.Sadə:ədədi(number),simvollu(string),məntiqi(boolean)  2.Mürəkkəb: massivlər(array),obyektlər(objects) 
3.Xüsusi:undefined,null

Dəyişən - müəyyən tip verilənləri özündə saxlayan adlı yaddaş sahəsidir.
Literal - dəyişənə mənimsədilə bilən verilən növüdür.Literallar hərf,ədəd vəya xüsusi simvollardan ibarət ola bilər.
1. Dəyişənin adları hərf və ya _(alt xətt) və $(dollar) simvolu ilə başlaya bilər.Əvvəlində rəqəm və ya digər simvollardan 
istifadə etmək olmaz.(Ədədləri ancaq dəyişənin adının sonunda və ya ortalarında istifadə etmək olar.Dəyişən adında yalnız 2simvoldan 
istifadə etmək olar.)Dəyişən adları yalnız ingilis əlifbası ilə yazılmalıdır.
2.Dəyişənin adları həmişə mənalı olmalıdır.Dəyişənin adına baxan zaman içindəki dəyəri bildirən bir məna olmalıdır. 
 (kanalAdi camel case) və ya kanal_adi (alt xətt simvolundan istifadə etdikdə hamısı balaca hərflə yazılır.Ən çox istifadə olunan
 camel casedi.)
 3.Case sensitive -JS böyük və kiçik hərflərə qarşı həssasdır. ad , Ad, AD,aD hamısı fərqli dəyişənlərdir.
 4.JS tərəfindən istifadə edilən açar sözləri dəyişən adında istifadə etmək olmaz.Məsələn if, float, var, for və s.

 Dəyişənlər 3 cür elan oluna bilir.
 var - Standart dəyişənləri elan etmək üçün istifadə edilir.Global dəyişəndir səhifənin hər yerində görünür.
 let - Blok əhatə dairəli lokal dəyişənləri elan etmək üçün istifadə edilir.Lokal dəyişəndir yalnız bir əhatə üçün istifadə olunur.
 const - Sabitləri elan etmək üçün istifadə edilir.   const ad="5" sabitlərə yerindəcə dəyər vermək lazımdır
 ( const ad; ----doğru deyil.)  const YAZİ= "Finish";  dəyişən adı sabit kimi hamısı böyük hərflərlə yazılır.
 escape operatorunda dəyişənin dəyərində hansısa simvoldan istifadə etmək istəyiriksə bu zaman simvoldan qabaq tərs slashdan (\)istifadə 
 olunur .   Məsələn : var ad= "\" Gullu Shammadli \""

 Operatorlar
 Qəbul etdiyi operand sayına görə operatorlar 3 qrupa bölünür.
        1.Unary - Bir operand qəbul edir.
        2.Binary - İki operand qəbul edir.
        3.Ternary - Üç operand qəbul edir.

        Ternary operatoruna proqramçılar bəzən qısa if yazılışı da deyirlər.
        sert?cavab1:cavab2;
    z= x + y burada x ,y operandlardır.
Apardığı əməliyyatlara görə isə operatorlar aşağıdakı qruplara bölünür.
        1.Mənimsətmə operatorları
        = -Mənimsətmə operatoru
        +=  -=   *=  /=  %=  **=  
        2.Riyazi operatorları   (+,-,*,\,**,%)
        3.Müqayisə operatorları
        == -   Tipini yoxlamır.
        === -  Eynilə bərabərdir yəni tipini də yoxlayır.
        !=      !==  <  >   <=   >=  
        4.Məntiqi operatorlar
        && - Və    || - Və ya    ! -Deyil
        5.Bitwise operatorlar
        &   - Və
        |   - Və ya
        ^   - Xor ---1^0=1 ,1^1=0 ,0^0=0
        ~   - Bitləri əksinə çevirir.
        <<  - Bitləri sola doğru sürüşdürür.
        >>  - Bitləri sağa doğru sürüşdürür.
        >>> - Bitləri sağa doğru sürüşdürür.Ancaq işarə biti mənfi ola bilməz!
        6.Xüsusi operatorlar
        + -Birləşdirmə operatoru  
        , - Əməliyyatları ardıcıl şəkildə yerinə yetirir.
        \ - escape qaçış operatoru      
        \n - növbəti sətirə keçir.
        \t -TAB    
        \r -carriage return      
        \v -vertical tab      
        \f -form feed
        \' -Tək dırnaq     
        \" -Cüt dırnaq   
        \\ Tərs slaş

        Operatorların üstünlük sırası
        1. . []
        2.() ,new
        3.! ,~ ,-, +, ++ ,-- ,typeof,void ,delete
        4.* ,/ ,%
        5. +, -
        6. << ,>> ,>>>
        7. < ,<= ,> ,>= ,in ,instanceof
        8. == ,!= ,=== ,!==
        9. &
        10. ^
        11. |
        12.&&
        13.||
        14.?;
        15.= ,+= , -= ,*= ,/= , %= , <<= , >>= ,>>>= , &= ,^= ,/=
        16.,
    Əgər a++ yazdıqda a-nın dəyəri 1 vahid artır amma əvvəlki dəyəri qaytarılır.
    Əgər ++a yazdıqda a-nın dəyəri 1 vahid artır həm də artırdığı qiyməti qaytarır.

Şərt əmrləri (if)
1.if - əgər
2.else if - əks halda əgər
3.else - əks halda

Şərt əmrləri(switch case)    Strukturu switch(sert)   case deyer:   document.write("kfng")  default: 

Xəta yoxlama əməliyyatları
try  - Xəta baş verməsi ehtimal olunan kodlar üçün istifadə olunur.
catch - Xəta baş verərsə işə düşəcək kodlar üçün istifadə olunur.
finally - Xəta baş verib-vermədiyinə baxmadan işə düşəcək kodlar üçün istifadə olunur.
throw - Xüsusi xəta yaratmaq üçün istifadə olunur.

try{}  catch(){} finally{}  throw(){}

Funksiyalar
1. function funksiyaAdı ( parametr  və ya parametrlər qəbul edir ){ #kod}
2.Funksiyanın adlarını istədiyiniz hərflərlə başlada bilərsiniz və yalnız ingilis əlifbasındakı hərflərdən istifadə etmək lazımdır.
3.Funksiyanın adları alt (_) xətt işarəsi ilə başlaya bilər. 
4.Funksiyanın adları dollar ($) işarəsi ilə başlaya bilər.
5.Funksiyanın adları rəqəmlə başlaya bilməz.Amma ikinci hərfdən başlayaraq rəqəm yaza bilərik.
6.Funksiyanın adlarına JS tərəfindən alınmış xüsusi ifadələri yaza bilmərik.Məsələn: if,for,function
7.Funksiya adları bir neçə dəfə elan oluna bilməz.
8.Funksiya adları kiçik və böyük hərflə fərqlənir.
9.Funksiyalarımız bir dəyişən kimi elan oluna bilər.
normalda function salam(){document.write("salam");}    dəyişən kimi---- var salam=function(){  document.write("salam");}

var - function block     let - block scope

Funksiya növləri
1. Parametr qəbul etməyən və  geriyə heç bir dəyər qaytarmayan.
2. Parametr və ya arqument qəbul edən və geriyə heç bir dəyər qaytarmayan.
3. Parametr qəbul edən və geriyə dəyər qaytaran.
4. Parametr qəbul etməyən və geriyə dəyər qaytaran.
Funksiyaları avtomatik çağırmaq üçün (funksiya hamısı burda yazılır)();

Massivlər(array) - özündə çoxlu saydaməlumat saxlayan dəyişən tipidir.
1. let students= ["Eli", "Vaqif", "Konul"];
   document.write(students[2]);

2. let students=new Array("Eli", "Vaqif", "Konul");
   document.write(students[2]);
*/