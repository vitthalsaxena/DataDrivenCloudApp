function helloCloud()
{
    console.log('Hello Cloud!');
}

helloCloud();

const helloCloud2=function(x,y)
{
    return x+y;
}

console.log(helloCloud2(3,4));

const helloCloud3 = () => 'Arrow function!';
console.log(helloCloud3());

const helloCloud4 = (name) => `Hello Cloud from ${name}!`;
console.log(helloCloud4('V'));