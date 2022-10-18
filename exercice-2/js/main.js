const FREE_PATH_FLAG = 0;
const WALL_FLAG = 1;
const START_POSITION_FLAG = 2;
const FINISH_POSITION_FLAG = 3;

let maze = [
// 0  1  2  3 (j)
  [1, 2, 1, 1], // 0
  [1, 0, 0, 1], // 1
  [1, 1, 0, 1], // 2
  [1, 1, 0, 3], // 3 (i)
];

function get_start_position(maze) {
  /* Given a maze, it returns the start position as a list.

  @maze: Array[Array[int]]

  @return value: Array[i: int, j: int]
  */
  for (let i = 0; i < maze.length; i++) {
    let row = maze[i];
    for (let j = 0; j < row.length; j++) {
      let cell = row[j];
      if (cell == START_POSITION_FLAG) {
        return [i, j];
      }
    }
  }
  return [-1, -1];
}

function get_free_paths() {
    
}

let start_position = get_start_position(maze);
console.log(start_position);
