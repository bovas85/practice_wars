function validPhoneNumber(phoneNumber){
  return /^\(?([0-9]{3})\)\s([0-9]{3})-([0-9]{4})$/.test(phoneNumber);
}

// or 

function validPhoneNumber(phoneNumber){
  return /^\(\d{3}\) \d{3}\-\d{4}$/.test(phoneNumber);
}

/* from https://www.safaribooksonline.com/library/view/regular-expressions-cookbook/9781449327453/ch04s02.html

Problem
You want to determine whether a user entered a North American phone number, including the local area code, in a common format. These formats include 1234567890, 123-456-7890, 123.456.7890, 123 456 7890, (123) 456 7890, and all related combinations. If the phone number is valid, you want to convert it to your standard format, (123) 456-7890, so that your phone number records are consistent.

Solution
A regular expression can easily check whether a user entered something that looks like a valid phone number. By using capturing groups to remember each set of digits, the same regular expression can be used to replace the subject text with precisely the format you want.

^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$

var phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

if (phoneRegex.test(subjectString)) {
    var formattedPhoneNumber =
        subjectString.replace(phoneRegex, "($1) $2-$3");
} else {
    // Invalid phone number
}

*/