

const app = {
    data() {
        return {
            category: '',
            name:'',
            player:'',
            games: {
            csgo: ['zafar', "aziz", 'john'],
            dota: ['jorj', "morj", ],
            pubg: ['ananas']
            },
                
            
            
        }
    },
    methods:  {
        add() {
    if(this.category != '' && this.name != '') {
        if(!this.games[this.category].includes(this.name.toLowerCase() )){
       
        this.games[this.name] != this.name.toUpperCase()  
        this.games[this.category].push(this.name.toLowerCase()) 
        this.name = this.category = ''
        }    
    }
    }
    },
}
// methods:  {
//     add() {
// if(this.category != '' && this.name != '') {
//     if(!this.games[this.category].includes(this.name.Upper())){
   
//     this.games[this.name] != this.name.toLowerCase()  
//     this.games[this.category].push(this.name.toLowerCase()) 
//     this.name = this.category = ''
//     }    
// }
// }
// },


       
        
Vue.createApp(app).mount('#app')

   
    
       