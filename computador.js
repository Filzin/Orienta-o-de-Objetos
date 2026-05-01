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

