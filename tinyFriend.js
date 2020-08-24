function tinyFriend(friends)
{
    var tiny=friends[0];//imagine friends of zero is the value of tiny

    if( friends.length == 0 )
    {
        return 'Array is empty';
    }

    for(var i=0; i<friends.length; i++)
    {
        var length=friends[i].length;

        if(length<tiny.length)
        {
            tiny=friends[i];
        }
    }

    return tiny;
}