/* Given an array, find the first-appearing item that occurs
   an even number of times in the array. 
   Handle multiple even-occurence items and return the first one.
   Return null if there are no even-occurence items. */


function findFirstEvenOccurence (arr) {
	var occurenceStore = {};

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] in occurenceStore) {
			occurenceStore[arr[i]]++;
		}
		else {
			occurenceStore[arr[i]] = 1;
		}
	}


	for (var j = 0; j < arr.length; j++) {
		if (arr[j] in occurenceStore && occurenceStore[arr[j]] % 2 === 0) {
			return arr[j];
		}
	}
	return null;
}
