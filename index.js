function hasTargetSum(array, target) {

  for(let i = 0; i < array.length; i++){

        deficit = target - array[i]

    for(let n = i + 1; n < array.length; n++){

          if(array[n] === deficit) return true
    }
  }
  return false
}

/* 
  O(n2)
*/

/*
 iterate through the list first
    calculate the deficit 
    iterate through the list second time 
      if the deficit is there return true else return false
  
*/

/*
  iterate through the array, while iterating we subtract the target from the number in the array 
  and check if the deficit is available in the array during the second iteration
*/
console.log(hasTargetSum([1,2,3,4,5], 6))
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
