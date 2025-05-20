function willSuccess(marks) {
  let fail = 0;
  let pass = 0;
  if (typeof marks == "object") {
    for (let i = 0; i < marks.length; i++) {
      if (typeof marks[i] !== "number") {
        return "Invalid";
      }
    }
  } else {
    return "Invalid";
  }

  // for ( let i = 0; i < marks.length; i++){
  //     if ( typeof(marks[i])
  // }

  for (const mark of marks) {
    if (mark < 50) {
      fail++;
    } else {
      pass++;
    }
  }

  if (pass > fail) {
    return true;
  } else return false;
}


