const app = Vue.createApp({
    data() { 
        return {
            showBooks: true,
            title: 'The final empire',
            author: 'Brandon',
            age:32,
            cx:0,
            cy: 0
        }
    },
    methods: {
        changeTitle(title){
            this.title = title
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent() {
            this.age = this.age + 0.1*(100-this.age)
        },
        handleEvent2() {
            this.age = this.age + 0.1*(-this.age)
        },
        getcxy(e) {
            this.cx = e.clientX
            this.cy = e.clientY
        }

        

    }
})

app.mount('#app')