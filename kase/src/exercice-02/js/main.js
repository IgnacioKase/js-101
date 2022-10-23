const FREE_PATH_FLAG = 0;
const WALL_FLAG = 1;
const START_POSITION_FLAG = 2;
const FINISH_POSITION_FLAG = 3;
const VISITED_CELL = 4;

let first_maze = [
// 0  1  2  3 (j)
  [1, 0, 1, 1], // 0
  [0, 2, 0, 1], // 1
  [1, 1, 0, 1], // 2
  [1, 1, 0, 3], // 3 (i)
];

function get_start_position(maze) {
  /* Given a maze, it returns the start position as a list.

  @maze: Array[Array[int]]

  @return value: Tuple[int, int]
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

function get_neighbours(position, maze) {
  /* Given a position and a maze, it returns the possible paths for that position
  @position: Tuple[int, int]: position where the paths will be found.
  @maze: Array[Array[int]]

  @return value: Array[Tuple[int, int]...] (max 4 positions in the array)

  Example, given the maze: [1, 2, 0, 0], the return output will be:
  [[0, 2]]
  */

  let neighbour = [];
  let i = position[0];
  let j = position[1];

  if ((i + 1) < maze.length) {
    neighbour.push([i + 1, j]);
  }
  if ((i - 1) >= 0) {
    neighbour.push([i - 1, j]);
  }
  if((j + 1) < maze[i].length) {
    neighbour.push([i, j + 1]);
  }
  if((j - 1) >= 0) {
    neighbour.push([i, j - 1]);
  }

  return neighbour;
}

function get_value_for_position(position, maze) {
  /* Get the value in the corresponding position
  @position: Tuple[int, int]
  @maze: Array[Array[int]]
  */
  let i = position[0];
  let j = position[1];

  return maze[i][j];
}

function filter_positions_by_value(positions, maze, flag_to_search) {
  let filtered_positions = []

  for(let index = 0; index < positions.length; index++) {
    let position = positions[index]
    let cell = get_value_for_position(position, maze)
    if(cell === flag_to_search) {
      filtered_positions.push(position)
    }
  }

  return filtered_positions
}

function get_available_paths(position, maze) {
  /* Given a position and a maze, it returns the possible paths for that position
  @position: Tuple[int, int]: position where the paths will be found.
  @maze: Array[Array[int]]

  @return value: Array[Tuple[int, int]...] (max 4 positions in the array)

  Example, given the maze: [1, 2, 0, 0], the return output will be:
  [[0, 2]]
  */

  let neighbours = get_neighbours(position, maze);
  return filter_positions_by_value(neighbours, maze, FREE_PATH_FLAG);
}

function is_next_to_the_finish_flag(position, maze) {
  /* It returns true if the given position is next to an exit.
  @position: Tuple[int, int]
  @maze: Array[Array[int]]

  @return value: Boolean

  Example, given the maze: [1, 2, 0, 0], the return output will be:
  [[0, 2]]
  */

  let neighbours = get_neighbours(position, maze);
  let filtered_positions = filter_positions_by_value(neighbours, maze, FINISH_POSITION_FLAG);
  return filtered_positions.length > 0;
}

function mark_cell_as_visited(position, maze) {
  /* Given a position and a maze it marks the position as visited */

  let i = position[0];
  let j = position[1];

  maze[i][j] = VISITED_CELL
}


let start_position = get_start_position(first_maze);
let paths = get_available_paths(start_position, first_maze);

let current_position = start_position;
while(paths.length > 0) {
  mark_cell_as_visited(current_position, first_maze);
  current_position = paths.shift();
  if(is_next_to_the_finish_flag(current_position, first_maze)) {
    console.log("The maze has a solution!");
    break;
  }
  let new_paths = get_available_paths(current_position, first_maze);
  paths = paths.concat(new_paths);
}
mark_cell_as_visited(current_position, first_maze);
console.log(first_maze)
