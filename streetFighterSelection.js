// https://www.codewars.com/kata/5853213063adbd1b9b0000be/train/javascript
//You'll have to simulate the video game's character selection screen behaviour, more specifically the selection grid. Such screen looks like this:

function streetFighterSelection(fighters, position, moves) {
  let select = [];
  let shift = {
    'up':[-1, 0],
    'down':[1, 0],
    'left':[0, -1],
    'right':[0, 1],
  };

  let maping = moves.map (e => {
    for (let key in shift) if (key === e) return e = shift[key];
  }).reduce((prev, next) => {
    let [axY, axX] = [prev[0] + next[0], prev[1] + next[1]];
    if (axY > 1) axY = 1;
    if (axY < 0) axY = 0;
    if (axX < 0) axX = 6 + (axX % 6);
    if (axX > 5) axX = ~~(axX % 6);
    select.push(fighters[axY][axX]);
    return [axY, prev[1] + next[1]];
  }, position);
  return select;
}

const fighters = [
	["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
	["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
];
const position = [0,0];
const moves = [ 'up', 'left', 'down', 'right', 'up', 'left', 'down', 'right' ]
// const moves = [ 'right',
// 'right',
// 'right',
// 'right',
// 'right',
// 'down',
// 'left',
// 'down',
// 'down',
// 'up',
// 'down',
// 'up',
// 'left',
// 'right',
// 'right',
// 'up' ];
streetFighterSelection(fighters, position, moves);
