const App = {
    // data() {
    // return {
    //     title: 'Note Lists',
    //     placeholderString: "add note's name",
    //     inputValue: '',
    //     notes: ['Note 122222', 'Note 2']
    //     }   
    // }
    data: () => ({
        myHtml: '<h1>Vue 3 App</h1>',
        title: 'I am Groot!',
        person: {
            firstName: 'Nar',
            lastName: 'Mirmanov',
            profession: 'Front-End Developer'
        },
        items: [1, 2]
    }),
    computed: {
        evenItems() {
            return this.items.filter(i => i % 2 === 0)
        }
    },
    methods: {
        addItem (e) {
            this.items.unshift(this.$refs.myInput.value)
            this.$refs.myInput.value = ''
        }
    }
    // methods: {
    //     addNewNoteHandler() {
    //         if(this.inputValue !== ''){
    //             this.notes.push(this.inputValue)
    //             this.inputValue = ''
    //         }
    //     },
    //     toUpperCase(item){
    //         return item.toUpperCase()
    //     },
    //     removeNoteHanler(i) {
    //         this.notes.splice(i, 1)
    //     }
    // },
    // computed: {
    //     doubleCountComputed() {
    //         return this.notes.length * 2
    //     }
    // },
    // watch: {
    //     inputValue(value) {
    //         if(value.length > 10){
    //             this.inputValue = ''
    //         }
    //         console.log('input value changed',value);
    //     }
    // }
}


//  * Первый способ: 
// const app = Vue.createApp(App)
// app.mount('#app')
// * Второй способ:

Vue.createApp(App).mount('#app')