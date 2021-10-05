// Start

let maze = [
    [1, 2, 1, 1],
    [1, 0, 0, 1],
    [1, 1, 0, 1],
    [1, 1, 0, 3]
];

let accountant = 0;



function escape_from_maze(final){

    if (path[index] = 3){

        break;
        return true;

    }

}



function path_of_maze(path){

    for (let index = 0; index < path.length; index++) {

        if (path[index] != 1 && path[index] !=(previous)){

            previous = path[index]  // seguro se puede romper poniendo 4 0 juntos ?
            accountant += 1 //contador de pasos
            escape_from_maze(path[index])

        }else{

            return false;

        }
    }
}



function enter_the_maze(room){

    for (let index = 0; index < room.length; index++) {

        if (room[index] = 2){
            path_of_maze(room)

        }else{

            throw ("The maze has no beginning");

        }
    }
}



function test() {

    assert_equal(enter_the_maze(room));
    assert_equal(enter_the_maze(room));
    assert_equal(enter_the_maze(room));
    assert_throw(enter_the_maze(room));
    assert_throw(enter_the_maze(room));
    assert_equal(enter_the_maze(room));
    assert_throw(enter_the_maze(room));
    assert_throw(enter_the_maze(room));
    
    console.log("================");
    console.log("All tests passed");
    console.log("================");
}



test()