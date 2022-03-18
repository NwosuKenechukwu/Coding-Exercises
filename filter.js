function filter_list(l) {
  let numOnly = [];
  let num = 0;
  while (num < l.length) {
    if (typeof l[num] === "number") {
      numOnly.push(l[num]);
    }
    num++;
  }
  return numOnly;
}

console.log(filter_list([1, 2, 20, 50, "ajg", "jdfkgh", 4, 69, "JOg"]));
