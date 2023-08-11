// ordenar tal lista
//https://www.google.com/search?q=algoritmo+de+ordena%C3%A7ao&oq=algoritmo+de+ordena%C3%A7ao&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiABDIGCAIQRRhAMggIAxAAGBYYHjIICAQQABgWGB4yCAgFEAAYFhgeMggIBhAAGBYYHjIICAcQABgWGB7SAQg2NjE2ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#vhid=ew5hhjQWKokFFM&vssid=l
// https://www.treinaweb.com.br/blog/conheca-os-principais-algoritmos-de-ordenacao

// insertion sort

//teste execute();

function newList() {
  let lista = [];
  let tamanhoLista = Math.floor(Math.random() * 10);
  return [lista, tamanhoLista];
}

function insertList(lista, tamanhoLista) {
  for (let i = 0; i < tamanhoLista; i++) {
    let numRandom = Math.floor(Math.random() * 100);
    lista.push(numRandom);
  }
  return lista;
}

function orderList(lista) {
  // este loop vai da ultima para a primeira posição
  for (let j = lista.length; j >= 0; j--) {
    let auxiliary = lista[0];
    // esse loop joga a maior variavel para a ultima posição
    for (let i = 0; i < lista.length; i++) {
      if (lista[i] > lista[i + 1]) {
        auxiliary = lista[i];
        lista[i] = lista[i + 1];
        lista[i + 1] = auxiliary;
      }
    }
  }
  return lista;
}

function orderListNew(lista) {
  // se houver mudança = true, enquanto true roda o loop
  let loop = true;
  while (loop) {
    let auxiliary = lista[0];
    let houveMudança;
    // esse loop joga a maior variavel para a ultima posição
    // se houver um maior, ha mudança
    for (let i = 0; i < lista.length; i++) {
      if (lista[i] > lista[i + 1]) {
        auxiliary = lista[i];
        lista[i] = lista[i + 1];
        lista[i + 1] = auxiliary;
        houveMudança = true;
      }
    }
    // enquanto haver ordenaçao o loop sera rodado.
    if (!houveMudança) {
      // loop = false;
      break;
    }
  }
  return lista;
}

function orderListNewDecreasing(lista) {
  // se houver mudança = true, enquanto true roda o loop
  let loop = true;
  while (loop) {
    let auxiliary = lista[0];
    let houveMudança;
    // esse loop joga a maior variavel para a ultima posição
    // se houver um maior, ha mudança
    for (let i = lista.length; i >= 0; i--) {
      if (lista[i] < lista[i + 1]) {
        auxiliary = lista[i];
        lista[i] = lista[i + 1];
        lista[i + 1] = auxiliary;
        houveMudança = true;
      }
    }
    // enquanto haver ordenaçao o loop sera rodado.
    if (!houveMudança) {
      // loop = false;
      break;
    }
  }
  return lista;
}

// MAIN

// gera lista vazia e um tamanho de 0 a 10
function execute() {
  let novaLista = newList();
  insertList(novaLista[0], novaLista[1]);
  // primeira forma de ordenar
  // return orderList(novaLista[0]);
  // segunda forma de ordenar
  return orderListNew(novaLista[0]);
}

// executando em ordem decrescente.
function executeDesc() {
  let novaLista = newList();
  // insertList(lista, tamanhoLista);
  insertList(novaLista[0], novaLista[1]);
  return orderListNewDecreasing(novaLista[0]);
}
