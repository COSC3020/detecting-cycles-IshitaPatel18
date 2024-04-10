function hasCycle(graph) 
{
  let visitedNodes = [];
  for (let i = 0; i < graph.length; i++) 
  {
    if (checkCycle(graph, i, i, visitedNodes)) 
    {
      return true;
    }
    visitedNodes = [];
  }
  return false;
}

function checkCycle(graph, startNode, prevNode, visitedNodes) 
{
  visitedNodes.push(startNode);
  for (let i = 0; i < graph[startNode].length; i++) 
  {
    let node = graph[startNode][i];
    if (node != prevNode) 
    {
      if (visitedNodes.includes(node)) 
      {
        return true;
      }
      if (checkCycle(graph, node, startNode, visitedNodes)) 
      {
        return true;
      }
    }
  }
  return false;
}
