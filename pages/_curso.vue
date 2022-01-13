<template>
  <div>
    <div v-if="usuarioDefecto" class="row">
      <div class="col-sm-12">
        <card type="chart">
          <h1 class="card-title">{{ course.title }}</h1>
          <hr />
          <div class="row" style="padding: 10px">
            <div class="col-sm-6">
              <h4>{{ course.subtitle }}</h4>
              <h3 style="color: green">Alumnos Inscritos {{ alumnos }}</h3>
            </div>
            <div class="col-sm-6">
              <img :src="course.image" style="height: 300px; width: 100%" />
            </div>
          </div>
        </card>
      </div>

      <div class="col-lg-6">
        <card type="chart">
          <h2 style="text-align: center">Vista Previa Curso</h2>
          <div class="embed-container">
            <iframe
              :src="idVideoTrailer"
              frameborder="0"
              webkitAllowFullScreen
              mozallowfullscreen
              allowFullScreen
            >
            </iframe>
          </div>
          Trailer url -> {{ idVideoTrailer }}
        </card>
      </div>

      <div class="col-lg-6">
        <!-- Comprar curso -->
        <card type="chart">
          <h1 class="card-title">Descripción del Curso</h1>
          <hr />
          <div class="row" style="padding: 10px">
            <div class="col-sm-12">
              <h4>{{ course.description }}</h4>
              <h3 style="color: green">Alumnos Inscritos {{ alumnos }}</h3>
            </div>
          </div>
        </card>
        <!-- Comprar curso -->
        <card type="chart">
          <h1 class="card-title">Que Tecnologias Dominaras</h1>
          <hr />
          <div class="col-sm-12">
            <h4>{{ course.shortDescription }}</h4>
          </div>

          <span style="color: green; font-size: large" class="currency">{{
            course.price
          }}</span>
          <span style="color: gray; font-size: large">USD</span>
          <nuxt-link to="/login">
            <base-button type="info" size="sm">Comprar Curso</base-button>
          </nuxt-link>
        </card>
      </div>

      <div class="col-lg-6">
        <card type="chart">
          <ul class="list-container">
            <li v-for="secciones in secciones" class="item" :key="secciones.id">
              <p class="btn-item active">{{ secciones.nombre }}</p>
              <div class="item-content">
                <ul>
                  <li v-for="clases in secciones.clases" :key="clases.id">
                    <a>
                      {{ clases.nombreClase }}
                      <base-button
                        v-if="clases.estado"
                        @click="changeVideo(clases.urlVideo)"
                        class="button-course fa fa-play"
                        type="info"
                        size="sm"
                        >Ver Contenido</base-button
                      >
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </card>
      </div>

      <div class="col-lg-6">
        <card type="chart">
          <h1 class="card-title">Vistas previas de contenido</h1>
          <hr />
          <div class="embed-container">
            <iframe
              :src="contentVideo"
              frameborder="0"
              webkitAllowFullScreen
              mozallowfullscreen
              allowFullScreen
            >
            </iframe>
          </div>
        </card>
      </div>
    </div>

    <div v-if="usuarioLogiado" class="row">
      <div class="col-8">
        <card type="chart">
          <h1 class="card-title">Clases</h1>
          <hr />
          <div class="col-12 embed-container">
            <iframe
              :src="contentVideo"
              frameborder="0"
              webkitAllowFullScreen
              mozallowfullscreen
              allowFullScreen
            >
            </iframe>
          </div>
        </card>
        <!-- COMENTARIOS Y PREGUNTAS -->
        <div class="row">
          <div class="col-12">
            <card type="chart">
              <h1 class="card-title">Preguntas?</h1>
              <hr />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis quod consectetur esse veritatis fugiat voluptates
                dolore sequi beatae, non expedita totam distinctio maxime quae
                ducimus iste nobis tempora consequuntur. Voluptatem?
              </p>
            </card>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <card type="chart">
              <h1 class="card-title">Respuestas</h1>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laborum maxime vitae obcaecati a enim, fugiat saepe voluptas
                eaque rem excepturi, eius libero ipsam ad. Cum tempora sunt
                minus iure? Porro.
              </p>
            </card>
          </div>
        </div>
      </div>

      <div class="col-4" style="height: 100%; overflow-y: scroll">
        <!-- Comprar curso -->
        <card type="chart">
          <h1 class="card-title">Que Tecnologias Dominaras</h1>
          <hr />
          <div class="col-sm-12">
            <h4>{{ course.shortDescription }}</h4>
          </div>

          <span style="color: green; font-size: large" class="currency">{{
            course.price
          }}</span>
          <span style="color: gray; font-size: large">USD</span>
          <nuxt-link to="/pricing">
            <base-button type="info" size="sm">Comprar Curso</base-button>
          </nuxt-link>
        </card>
        <!-- Comprar curso -->
        <card type="chart" style="height: 100%; overflow-y: scroll">
          <ul class="list-container">
            <li v-for="secciones in secciones" class="item" :key="secciones.id">
              <p class="btn-item active">{{ secciones.nombre }}</p>
              <div class="item-content">
                <ul>
                  <li v-for="clases in secciones.clases" :key="clases.id">
                    <a>
                      {{ clases.nombreClase }}
                      <base-button
                        v-if="clases.estado"
                        @click="changeVideo(clases.urlVideo)"
                        class="button-course fa fa-play"
                        type="info"
                        size="sm"
                        >Ver Contenido</base-button
                      >
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </card>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
     alumnos: 24000,
      idVideoTrailer: "",
      contentVideo: "",
      urlContent: "",
      urlDefect: "https://player.vimeo.com/video/",
      secciones: [
        {
          id: 1,
          nombre: "Introduccion",
          clases: [
            {
              id: 1,
              nombreClase: "Entorno de desarrollo",
              urlVideo: "385702078",
              estado: true,
            },
            {
              id: 2,
              nombreClase: "vscode",
              urlVideo: "99232398",
              estado: true,
            },
            {
              id: 3,
              nombreClase: "archivos",
              urlVideo: "26326729",
              estado: false,
            },
          ],
        },
        {
          id: 2,
          nombre: "html",
          clases: [
            {
              id: 1,
              nombreClase: "Etiquetas",
              urlVideo: "26326729",
              estado: true,
            },
            {
              id: 2,
              nombreClase: "Formularios ",
              urlVideo: "4564541",
              estado: false,
            },
            {
              id: 3,
              nombreClase: "Archivos",
              urlVideo: "45645415641",
              estado: false,
            },
          ],
        },
        {
          id: 3,
          nombre: "Bootstrap",
          clases: [
            {
              id: 1,
              nombreClase: "Headers",
              urlVideo: "9876454654",
              estado: false,
            },
            {
              id: 2,
              nombreClase: "Tarjetas ",
              urlVideo: "1545454",
              estado: false,
            },
            {
              id: 3,
              nombreClase: "Grid system",
              urlVideo: "5686445",
              estado: false,
            },
          ],
        },
        {
          id: 4,
          nombre: "Javascript",
          clases: [
            {
              id: 1,
              nombreClase: "Variables",
              urlVideo: "634552252",
              estado: false,
            },
            {
              id: 2,
              nombreClase: "Array ",
              urlVideo: "121212121",
              estado: true,
            },
            {
              id: 3,
              nombreClase: "Objetos",
              urlVideo: "385625052",
              estado: true,
            },
          ],
        },
      ],
      usuarioDefecto: true,
      usuarioLogiado: true,
      logiado: this.$auth.loggedIn
    };
  },

  async asyncData({ params, $axios, store }) {
    const course = await $axios.get("/course", {
      params: { url: params.curso },
    });

    return {
      course: course.data,
    };
  },

  mounted() {
    this.idVideoTrailer = this.urlDefect + this.course.idTrailer;
    this.urlContent = this.secciones[0].clases[0].urlVideo
    this.contentVideo = this.urlDefect + this.urlContent;  
    this.events();
    this.sessionValidation();
  },
  methods: {
    changeVideo(url) {
      this.urlContent = url;
      this.contentVideo = this.urlDefect + this.urlContent;
      console.log("Id del vimeo -> " + this.urlContent);
      console.log(this.contentVideo);
    },
    events() {
      let btnPrueba = document.querySelectorAll(".item .btn-item");

      for (let i = 0; i < btnPrueba.length; i++) {
        btnPrueba[i].classList.remove("active");
        btnPrueba[i].addEventListener("click", function (e) {
          let btn = e.target;
          if (btn.className == "btn-item active") {
            for (let i = 0; i < btnPrueba.length; i++) {
              btnPrueba[i].classList.remove("active");
            }
          } else {
            for (let i = 0; i < btnPrueba.length; i++) {
              btnPrueba[i].classList.remove("active");
            }
            btn.classList.add("active");
          }
        });
      }
    },
    sessionValidation() {
      if (this.logiado == false) {
        this.usuarioDefecto = true;
        this.usuarioLogiado = false;
      } else {
        this.usuarioDefecto = false;
        this.usuarioLogiado = true;
      }
    },
  },
};
</script>
<style>
/* Estilos css barra acordion  */
.list-container {
  padding: 5px;
}
.list-container li a {
  font-weight: bold;
  display: block;
  padding: 10px 15px;
}
.list-container li a:hover {
  color: #fff;
  background: #1a95d5;
}
.btn-item {
  background: rgb(38, 41, 42);
  display: block;
  color: white;
  padding: 5px;
  font-weight: bold;
  border-bottom: 2px solid rgb(107, 179, 113);
}
.btn-item.active {
  background: #2dce89;
}
.btn-item:after {
  content: "\002b";
  float: right;
}
.btn-item.active:after {
  content: "\02212";
  float: right;
}
.item-content {
  overflow: hidden;
  max-height: 0px;
  opacity: 0;
  transition: 0.2s ease-in-out;
}
.active + .item-content {
  max-height: 100%;
  opacity: 1;
}
.button-course {
  float: right;
  bottom: 10px;
}
.embed-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
}
.embed-container iframe,
.embed-container object,
.embed-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
