function validContact(contact) {

  if(typeof(contact)!=="string"){
    return "Invalid";
  }

  let isTrue = true;
  const sliced = contact.slice(0, 2);
  const hasSpaces = contact.includes(" ");
  let numeric_check = true;
  for (number of num) {
    if (num[number] >= "0" && num[number] <= "9") {
      numeric_check = true;
    } else {
      numeric_check = false;
      break;
    }
  }

  if (contact.length !== 11 || sliced !== "01" || hasSpaces === true || numeric_check!== true) {
    isTrue = false;
    return isTrue;
  } else {
    return isTrue;
  }
}