//feet to Mile............................................................................

function feetToMile(feet)
{
    if(feet<0)
    {
        return 'Length cannot be negative.';
    }

    else
    {
        var mile=feet/5280; //1 mile=5280 feet
        var mileFixed=mile.toFixed(5);//fixed the mile
        return mileFixed;
    }
}