const food =["apple", "banana", "mango","orenge",];

let last_add = food.push("malta","strawberry");//["apple", "banana", "mango","orenge","malta","strawberry"]
let last_del =food.pop();//["apple", "banana", "mango","orenge","malta",]
let fast_add = food.unshift("pineapple","olive");//["pineapple","olive","apple", "banana", "mango","orenge","malta"]
let fast_del =food.shift();//[ 'olive', 'apple', 'banana', 'mango', 'orenge', 'malta' ]
console.log(food);//[ 'olive', 'apple', 'banana', 'mango', 'orenge', 'malta' ]