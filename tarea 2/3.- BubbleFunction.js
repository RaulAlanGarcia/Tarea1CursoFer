

function reArrange(arrayUnfixed)
{
    var reArray;
    do {
         reArray = false;
        for (var i=0; i < arrayUnfixed.length-1; i++) {
            if (arrayUnfixed[i] > arrayUnfixed[i+1]) {
                var temp = arrayUnfixed[i];
                arrayUnfixed[i] = arrayUnfixed[i+1];
                arrayUnfixed[i+1] = temp;
                 reArray = true;
            }
        }
    } while ( reArray);
    console.log(arrayUnfixed);
}
 
reArrange([34, 203, 3, 746, 200, 984, 198, 764, 9]);
