function validProposal(person1, person2) {
  if (typeof person1 !== "object" || typeof person2 !== "object") {
    return "Invalid"
  }
  let condition = true;
  ageDifference = person1.age - person2.age;
  ageDifferenceUnsigned = Math.abs(ageDifference);

  if (person1.gender === person2.gender || ageDifferenceUnsigned > 7) {
    condition = false;
    return condition;
  } else {
    return condition;
  }
}


