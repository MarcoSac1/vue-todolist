const { createApp } = Vue


createApp({
    data() {
        return {
            todoList : [
                {
                    text: 'franco va al mare',
                    done: false
                },
                {
                    text: 'dire di NO a gli sconosciuti',
                    done: true
                },
                {
                    text: 'gino vola',
                    done: false
                },
                {
                    text: 'comprare cavoli amari',
                    done: true
                },
                {
                    text: 'antonio mangia sempre',
                    done: false
                },
            ],
            newTaskContent: '',
        }
    },
    methods: {
        unDone: function(itemIndex) {
            this.todoList[itemIndex].done = !this.todoList[itemIndex].done;
        },

        createNewTask: function(newContent) {
            const newTask = {
                text: newContent,
                done: false,
            }
            this.todoList.push(newTask);
            this.clearInput();
        },
        
        clearInput(){
            this.newTaskContent= '';
        },

        removeTask:function(taskIndex) {
            this.todoList.splice(taskIndex, 1);
        }


    }
}).mount('#app')