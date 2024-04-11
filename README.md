[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/3yAkp-x3)
# Detecting Cycles in Graphs

Kruskal's Algorithm adds edges to the minimum spanning tree, unless they would
add a cycle. In the lectures, we did not talk about how to do this -- you're
going to implement a function to detect cycles in a graph. Start with the
template I provided in `code.js`. You can use any data structures (i.e. any
graph representation) you like. The function should return `true` or `false`,
depending on whether the given graph contains a cycle or not.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

Side Note:

For this implementation, I have it so that the algorithm works on specifically an 
undirected graph, as Kruskal's Algorithm is meant for undirected graphs. If I
need to change it so that this algorithm works on directed graphs only, then I can
do that!

My Answer:

The worst-case situation for this implementation would occur if the algorithm
does not find a cycle and has to check every vertex, in case there is a cycle
but the starting node given doesn't connect to any node in the cycle. The for 
loop in the hasCycle function is in charge of iterating through every vertex
as it runs for the graph length, so we have |V| or number of vertices. Then 
the checkCycle function has a for loop that is iterating over the number of 
edges because it is searching all of the edges leading to neighboring nodes
until an edge leads to a node that results in a cycle or until everything
has been traversed and no cycle has been found. This is done recursively, so that
each edge connecting to neighboring nodes is iterated over, so this would run for |E|.
There is also a visitedNodes.push(startNode) before the for loop that is keeping track
of all the nodes that have been visited as a way to check if another node cycles back to
a past node, which runs for |V| as it will have pushed all the vertices in the worst case.
The checkCycle for loop and the visitedNodes are consecutive, so they can be added together
to get |V| + |E|. Now the checkCycle function is called inside the first for loop, and since the
body of the second function is a for loop, they are essentially nested. That gives
us |V|(|V| + |E|), so our worst case $\Theta$ complexity would be $\Theta(|V|(|V| + |E|))$.
