function brickCalculator(floor)
{
var bricksperFeet=1000;
var firstTenFloor=10;
var firstTenFloorHeight=15;
var tenToTwentyFloorHeight=12;
var moreThanTwentyFloorHeight=10;

if(floor<=0)
{
    return 'floor number must be greater than 0';
}

else
{
    if(floor<=10)
    {
        var firstTenFloor = floor;
        return firstTenFloor*firstTenFloorHeight*bricksperFeet;
    }

    else if (floor>10  &&  floor<=20)
    {
        tenToTwentyFloor = floor-10;
        return (firstTenFloor*firstTenFloorHeight*bricksPerFeet)+(tenToTwentyFloor*tenToTwentyFloorHeight*bricksPerFeet);
    }

    else
    {
        tenToTwentyFloor=10;
        moreThanTwentyFloor=floor-20;
        return (firstTenFloor*firstTenFloorHeight*bricksPerFeet)+(tenToTwentyFloor*tenToTwentyFloorHeight*bricksPerFeet)+(moreThanTwentyFloor*moreThanTwentyFloorHeight*bricksPerFeet);
    }
  }
}
