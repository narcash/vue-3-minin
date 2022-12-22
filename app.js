const App = {
    data() {
    return {
        title: 'Note Lists',
        placeholderString: "add note's name",
        inputValue: '',
        notes: ['Note 122222', 'Note 2']
        }   
    },
    methods: {
        addNewNoteHandler() {
            if(this.inputValue !== ''){
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        toUpperCase(item){
            return item.toUpperCase()
        },
        removeNoteHanler(i) {
            this.notes.splice(i, 1)
        }
    },
    computed: {
        doubleCountComputed() {
            return this.notes.length * 2
        }
    },
    watch: {
        inputValue(value) {
            if(value.length > 10){
                this.inputValue = ''
            }
            console.log('input value changed',value);
        }
    }
}


//  * Первый способ: 
// const app = Vue.createApp(App)
// app.mount('#app')
// * Второй способ:

Vue.createApp(App).mount('#app')