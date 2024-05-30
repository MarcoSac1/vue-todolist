# vue-todolist
Descrizione:

Rifare l'esercizio della to do list visto insieme a lezione.
Ogni oggetto dovra' avere almeno due proprietà:
text, una stringa che indica il testo del todo
done, un booleano (true/false) che indica se il todo è stato fatto oppure no

MILESTONE 1

Stampare all'interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

MILESTONE 3

Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante o premendo il tasto invio, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

Bonus:
1 - cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
2 -  aggiungere un altro bottone che permetta la modifica di un task gia' esistente

<!-- workflow -->

- creo un arrai di ogetti 
    - ogni ogetto avra le seguenti proprietà
        - text, una stringa che indica il testo del todo
        - done, un booleano (true/false) che indica se il todo è stato fatto oppure no
- creo un ul nel html con il relativo parent 
    - uso v-for nel parent (li) e stampo al suo interno il contenuto del ogetto (text) 
- creo una che inverte il done per gestire il line trough
- creo una funzione che mi permette tramite un input di creare un nuovo elemento della lista
- creo un funzione che mi permette di rimuovere un task
        