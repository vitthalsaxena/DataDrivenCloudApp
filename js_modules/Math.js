const add = (x,y) => x+y;

exports.calculate = function(method, x, y)
{
    if(method == 'add')
    {
        return add(x,y);
    }
}