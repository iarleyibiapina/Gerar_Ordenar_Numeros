<?php
    function newList(){
    $lista = [];
    $tamanhoLista = rand(0,10);
    return [$lista, $tamanhoLista];
    }

    function insertList($lista, $tamanhoLista){
        for($i=0; $i < $tamanhoLista; $i++){
          $numRandom = rand(0,100);
          array_push($lista, $numRandom);
        }
        return $lista;
    }

    function orderNewList($lista){
        $loop = true;
        while($loop){
            $auxiliary = $lista[0];
            $houveMudança = null;
            for($i=0; $i < count($lista); $i++){
                if($lista[$i + 1] != null){
                    if($lista[$i] > $lista[$i + 1]){
                        $auxiliary = $lista[$i];
                        $lista[$i] = $lista[$i +1];
                        $lista[$i + 1] = $auxiliary;
                        $houveMudança = true;
                    }            
                }
            }
            if(!$houveMudança){
                $loop = false;
            }
        }
        foreach($lista as $lis){
            echo " ". $lis;
        }
        return $lista;
    }

    function execute(){
        $novaLista = newList();
        $lista = insertList($novaLista[0], $novaLista[1]);
        return orderNewList($lista);
    }

    // a ordenação esta sendo feita, porem o php por padrao avisa sobre o erro de um valor indefinido alem do tamanho do array.
execute();  
?>