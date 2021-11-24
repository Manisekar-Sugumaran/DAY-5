var revilpalindrome=()=>{

// Javascript Program to check whether the
// Array is palindrome or not
  
function palindrome(arr, n)
{
    // Initialise flag to zero.
    let flag = 0;
 
    // Loop till array size n/2.
    for (let i = 0; i <= n / 2 && n != 0; i++) {
 
        // Check if first and last element are different
        // Then set flag to 1.
        if (arr[i] != arr[n - i - 1]) {
            flag = 1;
            break;
        }
    }
 
    // If flag is set then print Not Palindrome
    // else print Palindrome.
    if (flag == 1)
        console.log("Not Palindrome");
    else
        console.log("Palindrome");
}
 
// Driver code.
  
    let arr = [ 1, 2, 3, 2, 1 ];
    let n = arr.length;
 
    palindrome(arr, n);
};
revilpalindrome();