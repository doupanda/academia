<template>
  <div class="row">

      <div class="col-sm-12" >
      <card type="chart">
          <h1 class="card-title">{{course.title}}</h1>
          <hr>
          <div class="row" style="padding:10px">
             <div class="col-sm-6">
               <h4>{{course.subtitle}}</h4>
               <h3 style="color:green"> Alumnos Inscritos {{alumnos}}</h3>
            </div>
             <div class="col-sm-6">
               <img :src="course.image" style="height: 300px; width:100%">
            </div> 
           </div> 
      </card>
    </div>

  <div class="row">
     <div class="col-sm-7" >
      <card type="chart">
          <h1 class="card-title">Trailer</h1>
          <hr>
                  <iframe :src="url" width="800" height="550" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                  {{url}}
                
      </card>
    </div>

    <div class="col-sm-5" >
      <card type="chart">
          <h1 class="card-title">Que Tecnologias Dominaras</h1>
          <hr>
             <div class="col-sm-12">
               <h4>{{course.shortDescription}}</h4>
            </div>
          
             <span style="color: green; font-size: large" class="currency">{{course.price}}</span>
             <span style="color: gray; font-size: large">USD</span>
            
             <base-button  type="info" size="sm">Comprar Curso</base-button>
             
      </card>
     </div> 
    </div>

    
      <div class="col-sm-12" >
      <card type="chart">
          <h1 class="card-title">Descripción del Curso</h1>
          <hr>
          <div class="row" style="padding:10px">
             <div class="col-sm-12">
               <h4>{{course.description}}</h4>
               <h3 style="color:green"> Alumnos Inscritos {{alumnos}}</h3>
            </div>
            
           </div> 
      </card>
    </div>

       <div class="col-sm-12" >
      <card type="chart">
          <h1 class="card-title">Contenido del curso</h1>
          <hr>
          <div class="row" style="padding:10px">
             <div class="col-sm-12">
              <ul>
                <li>Video1</li>
                <li>video2</li>
                <li>video3</li>
              </ul>
            </div>
            
           </div> 
      </card>
    </div>
    
    
   </div> 
</template>
<script>




export default {

data(){
  return {
    alumnos: 24000,
    url: "",
    urlIdVimeo: "26326729",
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
    this.url = "https://player.vimeo.com/video/"+this.urlIdVimeo;
    console.log(this.course)
  }



}
</script>
<style></style>
