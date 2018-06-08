 // se crea el arrglo de los nodos
  var nodes = new vis.DataSet([
    {id: 1, label: 'perro'},
    {id: 2, label: 'gato'},
    {id: 3, label: 'avión'}
   
  ]);

  // se define el camino de los nodos
  var edges = new vis.DataSet([
    {from: 1, to: 2},
    {from: 1, to: 3},
    {from: 2, to: 1},
    {from: 3, to: 1}
      
  ]);

  // se crea el grafo
  var container = document.getElementById('grafo');
  var data = {
    nodes: nodes,
    edges: edges
  };
  var options = {};
  var network = new vis.Network(container, data, options);