// Exercicio Cadastro de Artista

function cadastrarArtista(x,y,z){
    let listaArtistas = []
    listaArtistas.push(x,y,z)    
    console.log(listaArtistas) 
}

cadastrarArtista("Maria Rita","MPB",["sabado","domingo"])
cadastrarArtista("Emicida","Rap",["sexta","sabado"])

// Exercicio Artistas Disponíveis

let listaArtistas = [
    {
        nome:"Maria Rita",
        estiloMusical:"MPB",
        diasDisponiveis:["sábado","domingo"]
    },
    {
        nome:"Emicida",
        estiloMusical:"Rap",
        diasDisponiveis:["sexta","sábado"]
    },
    {
        nome:"Liniker",
        estiloMusical:"Soul",
        diasDisponiveis:["quinta-feira","domingo"]
    },
    {
        nome:"Duda Beat",
        estiloMusical:"Pop",
        diasDisponiveis:["quarta-feira","sexta-feira"]
    }    
]

function artistasDisponiveis(diaSemana){    
    for (let i = 0;i<=listaArtistas.length;i++){
        const artistaDia = listaArtistas.filter((artista=>{           
            if(diaSemana === artista.diasDisponiveis[i]){
                console.log(`Artista: ${artista.nome} - Estilo: ${artista.estiloMusical}`)          
            }
            return 
        }))                
    }       
}
artistasDisponiveis("domingo")