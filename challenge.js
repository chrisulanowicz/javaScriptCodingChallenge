module.exports = function(){
	return {
		multiply: function(num1, num2) {
			if(num2 == 1) {
				return num1;
			}
			return num1 + multiply(num1, num2-1);
		},
		permutations: function(str1, str2, result){
			if(str = "") {
				result += str2 + " ";
			}
			return permutations(str1)
		},
		myStringify: function(obj) {
			var temp = "{";
			for(var key in obj) {
				if(obj.hasOwnProperty(key)) {
					// console.log(key + " " + obj[key]);
					temp +='"' + key + '":"' + obj[key] + '",'
				}
			}
			result = temp.slice(0, -1) + "}";
			return result;
		}
	}
};

// function multiply(num1, num2) {
// 	if(num2 == 1) {
// 		return num1;
// 	}
// 	return num1 + multiply(num1, num2-1);
// }
// // console.log(multiply(4,4));


// function myStringify(obj) {
// 	var temp = "{";
// 	for(var key in obj) {
// 		if(obj.hasOwnProperty(key)) {
// 			// console.log(key + " " + obj[key]);
// 			temp +='"' + key + '":"' + obj[key] + '",'
// 		}
// 	}
// 	result = temp.slice(0, -1) + "}";
// 	return result;
// }
// var testObject = {"first_name": "Chris", "last_name": "Ulanowicz", "age": 40}
// console.log(myStringify(testObject));