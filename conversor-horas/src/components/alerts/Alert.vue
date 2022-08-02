<template>
   <div class="alert alert-danger" role="alert">
        {{msg}}
    </div>
</template>

<script>
export default {
    props: {
        msg: null,
    },

    data() {
        return {
            
        }
    },
}
</script>

<style>

</style>