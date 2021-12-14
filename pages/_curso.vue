<template>
  <div class="row">

    <div class="col-12">
      {{course}}
    </div>

  </div>
</template>
<script>




export default {


  async asyncData({ params, $axios, store }) {
    const course = await $axios.get("/course", {
      params: { url: params.curso }
    });

    return {
      course: course.data
    };
  },

}
</script>
<style></style>
