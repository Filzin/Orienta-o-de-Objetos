class computador {

    constructor(id,marca = "lenovo",modelo,precoPorhora = 10 ,disponibilidade= true){
        this.id = id
        this.marca = marca
        this.modelo = modelo
        this.precoPorhora = precoPorhora
        this.disponibilidade = disponibilidade

    }
    checarDisponibilidade(){
        if (this.disponibilidade === true) {
            return true
        }
        else { 
            return false
        }
        
    }
    alugar(tempoHoras) {
        if(this.disponibilidade === true){

            this.disponibilidade = false;   
            let custoTotal = tempoHoras * this.precoPorhora;
            lanHouse.atualizarReceita(custoTotal)
            return custoTotal;
        }
        else {
            return "Computador indisponivel"
        }
     }
        liberar() {
           this.disponibilidade = true;
    }

}


class lanHouse{

    static totalReceita = 0

    constructor(nome) {
        this.nome = nome
        this.computadores = []
        
    }

  adicionarComputador (computador) {
            this.computadores.push(computador)
        }
    
    listarComputadores(){
        this.computadores.forEach(computador=>{

            console.log(`Computadores disponiveis:${computador.disponibilidade},Preço por Hora:${computador.precoPorhora}`)
        }
        )

    }
     static atualizarReceita(valor) { 
        lanHouse.totalReceita += valor
     }
  alugarComputador (id, tempoHoras){
    let comp = this.computadores.find(comp => comp.id === id )
    return comp.alugar(tempoHoras)
  }

  liberarComputador(id) {
    let comp = this.computadores.find(comp => comp.id === id)
    comp.liberar()
    
  }
}
    
