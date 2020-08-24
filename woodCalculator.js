//wood calculator................................

function woodCalculator( chair,table,bed)
{
    var woodPerChair = 1;
    var woodPerTable = 3;
    var woodPerBed   = 5;

    if ((chair<0) || (table<0) || (Bed<0))
    {
        return 'Input cannot be invalid';
    }

    else 
    {
        var totalWood = ( chair * woodPerChair ) + ( table * woodPerTable ) + ( bed*woodPerBed);
        return totalWood;
    }
}