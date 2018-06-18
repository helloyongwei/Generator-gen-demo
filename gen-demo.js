//next返回一个对象
//value值： 上一个yield后面的值作为value值（注意不是yield的返回值）
//done表示是否结束， true表示结束
function* gene() {
    yield 1
    yield 2
    return 3
}
var gg = gene() //返回遍历器对象
gg.next()   //{value: 1, done: false}
gg.next()   //{value: 2, done: false}
gg.next()   //{value: 3, done: true}


//yield 后面的值是next的value值
//yield 返回undefined
function* gen() {
    var a = yield 1
    console.log('a')
    console.log(a)
    var b = yield a+1
    console.log('b')
    console.log(b)
    return 3
}

var g = gen()
g.next()    
//{value: 1, done: false}

g.next()    //不给next传值，上一次yield就返回undefined，也即a为undeinfed. value为undefined+1得到NaN
/*
a
undefined
{value: NaN, done: false}
*/

g.next()    //不给next传值，上一次yield就返回undefined，也即c为undeinfed
/*
b
undefined
{value: 3, done: true}
*/


//------给next传值------
//next的参数是上一次yield的值
var ge = gen()
ge.next()
//{value: 1, done: false}

/*
上一次yield返回值为10并赋值给a，a也为10。value为这次yield后面的值即a+1
*/
ge.next(10) 
/*
a
10
{value: 11, done: false}
*/

/*
next参数为空， 则上一次yield返回值为undefined并赋值给b， 则b为undefined
*/
ge.next()
/*
b
undefined
{value: 3, done: false}
*/
