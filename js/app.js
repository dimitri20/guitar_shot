const app = {
    data(){
        return{
            selectedRadio: null,
            guitars: [
                {
                    type: 'electric',
                    name: 'ელექტრო გიტარა',
                    id: 1,
                    checked: false
                }, 
                {
                    type: 'bass',
                    name: 'ბას გიტარა',
                    id: 2,
                    checked: false
                }, 
                {
                    type: 'acoustic',
                    name: 'აკუსტიკური გიტარა',
                    id: 3,
                    checked: false
                }, 
                {
                    type: 'classical',
                    name: 'კლასიკური გიტარა',
                    id: 4,
                    checked: false
                },
                {
                    type: 'electric-classical',
                    name: 'ელექტრო-კლასიკური გიტარა',
                    id: 5,
                    checked: false
                },
                {
                    type: 'electric-acoustic',
                    name: 'ელექტრო-აკუსტიკური გიტარა',
                    id: 6,
                    checked: false
                },
                {
                    type: 'accessories',
                    name: 'აქსესუარები',
                    id: 7,
                    checked: false
                },
                {
                    type: 'sound_amplifiers',
                    name: 'ხმის გამაძლიერებლები',
                    id: 8,
                    checked: false
                }
            ]
        }
    },
    methods: {
        toggleRadio(id){
            this.
        }
    },

    computed: {
        
    }
}

Vue.createApp(app).mount('#main-body');