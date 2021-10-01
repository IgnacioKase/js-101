# The escape room

Oh, no! You're trapped. An evil wizard has teleported you to a maze of 1's and 0's. You need to escape, but the question is: can you?

The maze is represented as an array of integers arrays. Like this one:

```
let maze = [
    [1, 2, 1, 1],
    [1, 0, 0, 1],
    [1, 1, 0, 1],
    [1, 1, 0, 3]
];
```

The numbers in the array have a meaning:

- 0: A free path, you can move around in these blocks.
- 1: A wall, you can not pass or walk through these ones.
- 2: The starting point, here is where the evil wizard has teleported you.
- 3: The exit. This is your objective.

You can escape if a path of 'O' exists between 2 and 3. You can only move to the left, right, up, and down. You can not move diagonally.

Create a function that returns `true` if you can escape from the maze, or `false` if you can't. Create appropriate tests for the function.

The function for the example from above should return `true`. But for the following maze, it should return `false`.

```
let maze = [
    [1, 2, 1, 1],
    [1, 0, 1, 1],
    [1, 1, 0, 1],
    [1, 1, 0, 3]
];
```
