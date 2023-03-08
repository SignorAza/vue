

const app = {
    data() {
        return {
            category: '',
            name:'',
            player:'',
            games: {
            csgo: ['Zafar', "Aziz", 'John'],
            dota: ['Jorj', "Morj", ],
            pubg: ['Ananas']
            },
                
            
            
        }
    },
    methods:  {
        add() {
    if(this.category != '' && this.name != '') {
        if(!this.games[this.category].includes(this.name)){
        this.games[this.name] != this.name  
        this.games[this.category].push(this.name) 
        this.name = this.category = ''
        }    
    }
    }
    },
}


       
        
Vue.createApp(app).mount('#app')

   
    
       