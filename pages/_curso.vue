<template>
  <div class="row">

    <div class="col-12">
      {{course}}
      <br>
      {{alumnos}}
    </div>

  </div>
</template>
<script>




export default {

data(){
  return {
    alumnos: 24000
  }
},

  async asyncData({ params, $axios, store }) {
   
   const course = await $axios.get("/course", {
      params: { url: params.curso }
    });

    return {
      course: course.data
    };
  },

  mounted(){
    console.log(this.course)
  }



}
</script>
<style></style>
