 /* Task#1 */

 let user = {};
 user.name = "John";
 user.surname = "Smith";
 user.name = "Pete";
 delete user.name;

 /* Task#2 */

 const user = {
   name: "John",
 };
 user.name = "Pete"; /* это будет работать корректно, так как
                        мы обращаемся к содержимому объекта user, изменение
                        которого доступно; а вот изменить имя объекта у нас
                        не получится, ведь const защищает переменную от
                        изменений.*/

 /* Task#3 */

 let salaries = {
   John: 100,
   Ann: 160,
   Pete: 130,
 };
 let sum = salaries.John + salaries.Ann + salaries.Pete;
 console.log(sum); // простой вариант

 /* Если же состав команды будет очень большим, то вышеприведенное решение становится
    не оптимальным, поэтому, немного разобравшись с объектами, решил задачу, используя цикл
    'for...in' */

 let salaries = {
   John: 100,
   Ann: 160,
   Pete: 130,
 };
 let sum = 0;
 for (let key in salaries) {
   sum = sum + salaries[key];
 }
 console.log(sum);