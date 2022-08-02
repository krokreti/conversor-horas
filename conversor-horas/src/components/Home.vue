<template>
    <div class="container d-flex justify-content-center">
        <div class="box w-75 d-flex justify-content-center rounded-5 p-3">
            <div class="container">
                <div class="row box">
                    <h4 class="display-7 box d-flex justify-content-center">Faça a conversão do tempo em diversos formatos!</h4>
                </div>

                <div class="row box">

                <div class="col-5 box">
                    <div class="row box ">
                        <select class="form-select" >
                            <option value="0">Selecione uma opção:</option>
                            <option value="1">Segundos</option>
                            <option value="2">Minutos</option>
                            <option value="3">Horas</option>
                        </select>
                    </div>
                    <div class="row box">
                        Horas
                    </div>
                </div>
                <div class="col-2 box d-flex justify-content-center ">
                    <button type="button" class="btn btn-secondary" >
                        <i class="fa-solid fa-arrows-rotate" style="background: grey;"></i>
                    </button>
                </div>
                <div class="col-5 box">
                    <div class="row box">
                        <select class="form-select" aria-label="Default select example">
                            <option value="0">Selecione uma opção:</option>
                            <option value="1">Segundos</option>
                            <option value="2">Minutos</option>
                            <option value="3">Horas</option>
                        </select>
                    </div>
                    <div class="row box">
                        Horas
                    </div>
                </div>
                </div>
                <div class="row box d-flex justify-content-center">
                    <button type="button" class="btn btn-success">
                        Converter
                    </button>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="sass">
.form-select
    color: black
    background: #E7F6F2 
    $form-select-indicator-color: black
    &-indicator-color
        color: black
</style>

