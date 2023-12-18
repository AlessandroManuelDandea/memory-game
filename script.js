let click=0
    function showCard(x){
        x.classList.toggle("change");

        
        console.log(x)
        click++

        if(click==2){
            console.log('hello')
            click=0
        }
        
    }
  

