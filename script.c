#include <stdlib.h>
#include <stdio.h>
#include <math.h>   
// ordenando com C (decrescente)
// tamanho do array definido em 5.
int orderList(int list[5], int tam){
    int loopDecrement;
    int loopIncrement;
    int i;
    for (loopDecrement = --tam; loopDecrement >= 0; loopDecrement--){
        int auxiliary = list[0];
            // printf("\n");
        for(loopIncrement = 0; loopIncrement < tam; loopIncrement++){
            if(list[loopIncrement] > list[loopIncrement + 1]){
                auxiliary = list[loopIncrement];
                list[loopIncrement] = list[loopIncrement + 1];
                list[loopIncrement + 1] = auxiliary;
            }
            //     for (i=0; i<tam; i++){
            //     printf("| %d  ", list[i]);
            //     }
            // printf("\n");
        }
    }
}

int orderListAscTwo(int list[5], int tam){
    int loop = 1;
    int loopIncrement;
    int i;

    do{
        int auxiliary = list[0];
        int houveMudanca = 0;
            // printf("\n");
        for(loopIncrement = 0; loopIncrement < tam; loopIncrement++){
            if(list[loopIncrement] > list[loopIncrement + 1] && list[loopIncrement + 1] != NULL){
                auxiliary = list[loopIncrement];
                list[loopIncrement] = list[loopIncrement + 1];
                list[loopIncrement + 1] = auxiliary;
                houveMudanca = 1;
            }
            //     printf("%d", loopIncrement);
            //     for (i=0; i<tam; i++){
            //     printf("| %d  ", list[i]);
            //     }
            // printf("\n");
        }
        if(!houveMudanca){
            loop = 0;
        }
    }while(loop);
}

int orderListDescTwo(int list[5], int tam){
    int loop = 1;
    int loopIncrement;
    int i;

    do{
        int auxiliary = list[0];
        int houveMudanca = 0;
            // printf("\n");
        for(loopIncrement = 0; loopIncrement < tam; loopIncrement++){
            if(list[loopIncrement] < list[loopIncrement + 1] && list[loopIncrement + 1] != NULL){
                auxiliary = list[loopIncrement];
                list[loopIncrement] = list[loopIncrement + 1];
                list[loopIncrement + 1] = auxiliary;
                houveMudanca = 1;
            }
            //     printf("%d", loopIncrement);
            //     for (i=0; i<tam; i++){
            //     printf("| %d  ", list[i]);
            //     }
            // printf("\n");
        }
        if(!houveMudanca){
            loop = 0;
        }
    }while(loop);
}



int main (){
    // trocando apenas o sinal < > altera a ordem da lista

    // testes
    // int list[] = {100,50,25,5,0};
    // int list[] = {123,456,768,910,911};
    int list[] = {0,100,60,85,30};
    int tam = sizeof(list)/sizeof(list[0]);
    int i;
    // printf("\n %d", tam);

    printf("ORDER LIST VERSION 1");
    orderList(list, tam);
        for (i=0; i<tam; i++){
        printf("\n %d ", list[i]);
    }
    printf("\n");


    printf("\n");
    printf("ORDERED LIST VERSION 2\n");

    printf("ORDERED IN ASC");
    orderListAscTwo(list, tam);
    for (i=0; i<tam; i++){
        printf("\n %d ", list[i]);
    }
    printf("\n");


    printf("ORDERED IN DESC");
    orderListDescTwo(list, tam);
    for (i=0; i<tam; i++){
        printf("\n %d ", list[i]);
    }
    
}