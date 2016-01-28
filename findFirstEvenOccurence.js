/* Given an array, find the first item that occurs
   an even number of times in the array. 
   Handle multiple even-occurence items and return the first one.
   Return null if there are no even-occurence items. */


// The below is my first draft from 4 months ago


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

	for (var key in occurenceStore) {
		if (occurenceStore[key] % 2 !== 0) {
			delete occurenceStore[key];
		}
	}

	for (var j = 0; j < arr.length; j++) {
		if (occurenceStore.hasOwnProperty(arr[j])) {
			return arr[j];
		}
		if (arr[j+1] === undefined) {
			return null;
		}
	}
}