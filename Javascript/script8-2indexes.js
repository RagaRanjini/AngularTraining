a=[23,24,356,258,251]
a[8]=9090
a[-9]=18
a["Joseph"]="peter"
console.log(a.length)//9 including a[8] alone
console.log(a) //prints everything
/*
[
  23,
  24,
  356,
  258,
  251,
  <3 empty items>,
  9090,
  '-9': 18,
  Joseph: 'peter'
]
*/
for(let x in a) //------> efficient one !!!!
console.log(a[x],x)
/*
23 0
24 1
356 2
258 3
251 4
9090 8
18 -9
peter Joseph
*/