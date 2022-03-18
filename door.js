function doors(n) {
  let nth = n;
  let doorStatus = [];

  // Set n doors to closed
  for (let door = 0; door < nth; door++) {
    doorStatus.push("closed");
  }

  // Declare student variable and loop to fill in n Students into array
  let students = [];
  for (let student = 0; student < nth + 1; student++) {
    students.push(student);

    // If student is the first in, then open all doors
    if (student + 1 === 1) {
      for (let door = 0; door < nth; door++) {
        doorStatus[door] = "open";
      }

      // if door is closed and nth student can open it, open door and vice versa
    } else {
      let door = 0;
      while (door < nth) {
        if (doorStatus[door] === "closed" && (door + 1) % (student + 1) === 0) {
          doorStatus[door] = "open";
        } else if (
          doorStatus[door] === "open" &&
          (door + 1) % (student + 1) === 0
        ) {
          doorStatus[door] = "closed";
        }
        door++;
      }
    }
  }
  let openDoors = [];
  let open = 0;
  while (open < doorStatus.length) {
    if (doorStatus[open] === "open") openDoors.push(doorStatus[open]);
    open++;
  }

  return openDoors.length;
}

console.log(doors(5));
