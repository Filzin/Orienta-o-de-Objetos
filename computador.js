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

        let existe = this.computadores.find(comp => comp.id === computador.id) 
        
        if(existe) {
            return "Já existe um computador com esse ID."
        }
        else{
           this.computadores.push(computador)
        
        }

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

    let validar = this.computadores.find(comp => comp.id === id)

    if(validar.disponibilidade === false) {
    return "Este computador já esta sendo usado"
    }

     if(tempoHoras <= 0){
     return "Tempo Inválido"
     }
    
    return validar.alugar(tempoHoras)
  }

  liberarComputador(id) {
    let comp = this.computadores.find(comp => comp.id === id)
    comp.liberar()
  }
  resumo() {
    console.log(` O Total de computadores cadastrados são de: ${this.computadores.length}`)

 let disponiveis = this.computadores.filter(comp => comp.disponibilidade === true).length
 
 console.log(`Quantidade de computadores disponiveis são: ${disponiveis}`)
   
 console.log(`A receita total consumida foi: ${lanHouse.totalReceita}`)
    
  } 
 
  

  
}
    
function testarLanHouse() {
    let comp1 = new computador(1, "Del" , "Inspiron")
    let comp2 = new computador(2, "Lenovo", "LOQ")
    let lan = new lanHouse (" LanHouse do Fábio") 

    lan.adicionarComputador(comp1)
    lan.adicionarComputador(comp2)


    lan.listarComputadores()

    console.log(lan.alugarComputador(1,5))

    console.log(lan.alugarComputador(1,2))

    lan.liberarComputador(1)

    lan.listarComputadores()

 console.log(lanHouse.totalReceita)

 lan.resumo()


 

 
}
testarLanHouse()