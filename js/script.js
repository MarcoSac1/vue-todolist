const { createApp } = Vue


createApp({
    data() {
        return {
            todoList : [
                {
                    text: 'franco va al mare',
                    done: false
                },
            ],
        }
    },
    methods: {
        unDone : function(itemIndex) {
            this.todoList[itemIndex].done = !this.todoList[itemIndex].done;
        }
    }
}).mount('#app')