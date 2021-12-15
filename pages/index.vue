<template>
  <div class="row">
    <div class="col-12">
      {{course}}
    </div>
    
    <div v-for="course in course" class="col-lg-4" :key="course._id" >
      <card  type="chart" >
        <img :src="course.image" style="height: 200px; width:100%">  
        <hr>
        <p>{{course.title}}</p>
        <nuxt-link :to="course.url" type="info" size="sm">Ver Curso</nuxt-link>
        <span style="color: green; font-size: large" class="currency">{{course.price}}</span>
        <span style="color: gray; font-size: large">USD</span>
                          
      </card>
    </div>
  
  </div>
</template>
<script>
export default {
  
  data() {
    return {
    
    };
  },
   async asyncData({$axios, store }) {
   
   const course = await $axios.get("/courses", {
      
    });

    return {
      course: course.data
    };
  },
  mounted() {
   
  },
  methods: {
    verCurso()
    {
       this.$notify({
              type: "danger",
              icon: "tim-icons icon-alert-circle-exc",
              message: "Proximamente detalle del curso"
            });

    }
  },
};
</script>
<style></style>
