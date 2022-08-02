<template>
    <div class="container d-flex justify-content-center">
        <div class="box rounded-5 p-5" id="caixa">
            <div class="container box" >
                <div class="row box">
                    <h4 class="display-7 box d-flex justify-content-center">Faça a conversão do tempo em diversos formatos!</h4>
                </div>

                <div class="row box d-flex justify-content-center mb-3 align-items-center flex-wrap" >
                    <input class="form-control" v-model="value" type="number" placeholder="Digite o valor" style="width: 10em;" required >
                </div>
                <div class="row box d-flex justify-content-center">
                    <div class="col-12 col-sm-5 box">
                        <div class="row box">
                            <h5 class="box">Selecione:</h5>
                            <select class="form-select" aria-label="Default select example" placeholder="Escolhe uma opção" v-model="converter">
                            <option value="0">-</option>
                            <option value="1">Segundos</option>
                            <option value="2">Minutos</option>
                            <option value="3">Horas</option>
                            </select>
                        </div>
                    </div>
                </div>
                
                <div class="box mb-3 mt-3 w-100 d-flex justify-content-center">
                    <div class="row box" >
                        <button class="btn btn-secondary box" @click="changeOptions" style="width:4em;">
                            <i class="fa-solid fa-arrows-rotate box " style="background:#6c757d;"></i>
                        </button>
                    </div>
                </div>

                <div class="row box d-flex justify-content-center">
                    <div class="col-12 col-sm-5 box">
                        <div class="row box">
                            <h5 class="box">Selecione:</h5>
                            <select class="form-select" aria-label="Default select example" placeholder="Escolhe uma opção" v-model="convertido">
                            <option value="0">-</option>
                            <option value="1">Segundos</option>
                            <option value="2">Minutos</option>
                            <option value="3">Horas</option>
                        </select>
                    </div>
                </div>
                </div>
                
                <div class="row box d-flex justify-content-center mt-3">
                    <button type="button" class="btn btn-success" @click="conversao">
                        Converter
                    </button>
                    <span class="mt-3 box d-flex justify-content-center" v-if="resultado!=null">{{ resultado }}</span>
                    <AlertVue :msg="msg" v-if="showMsg" class="mt-3"/>
                </div>
            </div>
            
        </div>
    </div>
    
</template>

<script>
import AlertVue from './alerts/Alert.vue';
import {conversor} from '../assets/conversor';
export default {
    data() {
        return {
            converter: null,
            convertido: null,
            value: null,
            msg: null,
            showMsg: false,
            resultado: null,
        }
    },
    components: {
        AlertVue,
    },

    methods: {

        changeOptions() {
            var mudar = this.converter;
            this.converter = this.convertido;
            this.convertido = mudar;
        },
        conversao() {
            if(this.value==null) {
                this.msg = "Por favor, digite um valor!";
                this.showMsg = true;
                setTimeout(()=> this.showMsg = false, 3000);
            } else if(this.converter==0 || this.convertido==0) {
                this.msg = "Por favor, escolha uma opção válida!";
                this.showMsg = true;
                setTimeout(()=> this.showMsg = false, 3000);
            } else if(this.converter == this.convertido) {
                this.msg = "As duas opções são iguais, escolha uma opção diferente!";
                this.showMsg = true;
                setTimeout(()=> this.showMsg = false, 3000);
            } 
            else {
                var con = new conversor();
                var tipoConversao = "convert" + this.converter + "to" + this.convertido
                this.resultado = con.chooseMethod(tipoConversao, this.value);
            }
        },
    },
}
</script>

<style lang="sass">
.form-select
    color: #fff
    background: #395B64 
    $form-select-indicator-color: black
    &-indicator-color
        color: black
 
</style>

