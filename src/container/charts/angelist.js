// Read in data from stdin.
process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
process.stdin.on("data", function (chunk) {
  input += chunk;
});
// Print to stdout.
process.stdin.on("end", function () {
  var locations = JSON.parse(input);
  let output = [];
  let x = [];

  locations.sort((a, b) => {
    return a.name > b.name;
  })

  let parents = locations.filter((p, pos) => {
    return !p.parent_id
  });

  let childrens = locations.filter((p, pos) => {
    return p.parent_id
  });
  let subChildrens = childrens.filter((p, pos) => {
    return p.parent_id
  });
  parents.map((l, i) => {
    let id = l.id
    console.log(l.name)
    childrens.map((c, i) => {
      if (c.parent_id === id) {
        let child = `-${c.name}`
        console.log(child)
        let id = c.id;
        subChildrens.map((s, i) => {
          if (s.parent_id === id) {
            console.log(`--${s.name}`)
          }
        });
      }
    });
  });

});