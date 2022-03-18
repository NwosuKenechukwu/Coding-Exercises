function doors(n) {
  let nth = n;
  let doorStatus = [];

  // Set n doors to closed
  for (let door = 0; door < nth; door++) {
    doorStatus.push("closed");
  }
  console.log(doorStatus);

  // Declare student variable and loop to fill in n Students into array
  let students = [];
  for (let student = 0; student < nth; student++) {
    students.push(student + 1);
    console.log(students);

    // If student is the first in, then open all doors
    if (student + 1 === 1) {
      for (let door = 0; door < nth; door++) {
        doorStatus[door] = "open";
      }

      // if student is
    } else if (doorStatus[student] === "open") {
      let door = 1;
      while (door < nth) {
        if ((door + 1) % (student + 1) === 0) {
          doorStatus[door] = "closed";
        }
        door++;
      }
    } else {
      let door = 1;
      while (door < nth) {
        if ((door + 1) % (student + 1) === 0) {
          doorStatus[door] = "open";
        }
        door++;
      }
    }
    console.log(doorStatus);
  }

  // console.log(students);
  // return doorStatus;
}

console.log(doors(50));
