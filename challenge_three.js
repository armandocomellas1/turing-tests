function combinationUtil(arr, n, r, index, data, i)
{

    // Current combination is ready to
    // be printed, print it
    if (index == r)
    {
        for (let j = 0; j < r; j++)
            document.write(data[j] + " ");

        document.write("</br>");

        return;
    }

    // When no more elements are there
    // to put in data[]
    if (i >= n)
        return;

    // current is included, put next
    // at next location
    data[index] = arr[i];
    combinationUtil(arr, n, r, index + 1,
                            data, i + 1);

    // current is excluded, replace
    // it with next (Note that i+1
    // is passed, but index is not
    // changed)
    combinationUtil(arr, n, r, index,
                            data, i + 1);
}

// The main function that prints all
// combinations of size r in arr[] of
// size n. This function mainly uses
// combinationUtil()
function printCombination(arr, n, r)
{

    // A temporary array to store all
    // combination one by one
    let data = new Array(r);
    data.fill(0);

    // Print all combination using
    // temporary array 'data[]'
    combinationUtil(arr, n, r, 0, data, 0);
}

let arr = [ 10, 20, 30, 40, 50 ];
let r = 3;
let n = arr.length;

printCombination(arr, n, r);