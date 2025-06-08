//----------********** Non Primitive Data Types **********----------

//                      ---------------------
//                      ****** array ********
//                      ---------------------


const months = ["january", "Feburary","March", "April", "May", "June"];


/* Array methods:
   ==============
Arrays provide a lot of methods. To make things easier, in this chapter, 
they are split into groups.

Add/remove items:
=================
We already know methods that add and remove items from the beginning or the end:

1) push(new element)     – adds items to the last index,
2) pop()                 – delete an item from original array in last index,
3) shift()               – delete an item from the 1st index [0],
4) unshift(new element)  – adds items to the 1st index [0],
5) lenght()              - returns the length (size) of an array, 
6) typeOf                - return typeOf variable,
7) toString()            - converts an array to a string of (comma separated) array values.


1) The push() method adds a new element to an array (at the end):
   marks.push(July);
   console.log(months);

2) The pop() method removes the last element from an array:
   marks.pop();
   console.log(months);

3) The shift() method removes the first array element and "shifts" all other elements to a lower index.
   marks.shift();
   console.log(months);

4) The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
   marks.unshift(December);
   console.log(months);

5) The length property returns the length (size) of an array:
   console.log(months.length); 

6) The typeof property returns the type of variable:
   console.log(typeof months);

7) The JavaScript method toString() converts an array to a string of (comma separated) array values.
   console.log(months.toString());
______________________________________________________________________________________________

splice:
=======
How to delete an element from the array?
The arrays are objects, so we can try to use delete:

1   let arr = ["I", "go", "home"];
2   
3   delete arr[1]; // remove "go"
4   
5   alert( arr[1] ); // undefined
6   
7   // now arr = ["I",  , "home"];
8   alert( arr.length ); // 3Here are a few others.

The element was removed, but the array still has 3 elements, we can see that arr.length == 3.
That’s natural, because delete obj.key removes a value by the key. It’s all it does. 
Fine for objects. But for arrays we usually want the rest of the elements to shift and occupy the freed place.
 We expect to have a shorter array now.So, special methods should be used
The arr.splice method is a Swiss army knife for arrays. It can do everything: insert, remove and replace elements.

The syntax is:

1   let arr = ["I", "study", "JavaScript"];
2   arr.splice(1, 1); // from index 1 remove 1 element
3   alert( arr ); // ["I", "JavaScript"]
------------------------------------------------------------------------------------------




//--(08)--//The splice() method can be used to add new items to an array:
// marks.splice(2, 0, "Lemon", "Kiwi" );
// console.log(marks);


//--(09)--//The slice() method slices out a piece of an array into a new array:
// marks.slice(1);
// console.log(marks);
*/
