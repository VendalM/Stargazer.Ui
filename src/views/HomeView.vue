<template>
  <div class="container">
    <div class="slider_content">
      <div class="main_slider">
        <div class="main_slader_text">
          <h1 class="h_main_txt">STARGAZER</h1>
          <p class="p_main_txt">
            Психоматрица (квадрат Пифагора) позволит тебе четко увидеть
            заложенные еще при рождении сильные и слабые стороны твоей личности.
            <br />
            Лучшее понимание себя поможет чувствовать себя защищенным в условиях
            переменчивого мира, поможет в создании и укреплении гармоничных
            взаимоотношений, расширит твое понимание мира и его законов,
            обозначит направления для личностного роста и достижения новых
            высот.
          </p>
          <p class="p_main_txt">
            Психоматрица (квадрат Пифагора) — метод исследования личности, где
            составляется числовая таблица, в которой каждая ячейка соответствует
            определенному качеству или сфере проявления человека и содержит
            числовое значение, коэффициент. На основании значений каждого
            сектора составляется психологический портрет личности, максимально
            подробный и точный.
          </p>
          <button
            name="button"
            id="button"
            class="button_online"
            v-on:click="scrollToCalculator()"
          >
            Познать себя
          </button>
        </div>
      </div>
    </div>
    <div class="text_block_dis">
      <div class="img_b">
        <div class="square"></div>
        <div class="cosm">
          <img class="img_cosm" src="@/assets/image/sun.jpg" alt="" />
        </div>
      </div>
      <div class="txt_img_b">
        <h1 class="h_main_txt">ПРОЕКТ STARGAZER</h1>
        <p class="p_main_txt">
          Stargazer (пр. англ. Звездочёт) – уникальный научно-исследовательский
          проект команды молодых ученых в области IT, математики, статистики и
          анализа данных, а также специалистов-нумерологов, вдохновленных идеей
          применения законов научного исследования к древним системам
          самопознания.
        </p>
        <p class="p_main_txt">
          Мы предприняли попытку эмпирически оценить точность существующих в
          нумерологии описательных характеристик личности, а также выявить новые
          закономерности, что позволит вывести возможности интерпретации
          психоматрицы на качественно новый уровень.
        </p>
        <p class="p_main_txt">
          Отдельное внимание мы уделили удобству сервиса и доступности описаний
          характеристик личности пользователя.
        </p>
        <p class="p_main_txt">
          Сервис предназначен не только для обычных пользователей и нумерологов,
          но и для практикующих психологов и психотерапевтов, использующих
          психоматрицу Пифагора для первичной оценки личности клиента.
        </p>
      </div>
    </div>
    <div class="wrap">
      <div class="cube">
        <div class="front"></div>
        <div class="back"></div>
        <div class="top"></div>
        <div class="bottom"></div>
        <div class="left"></div>
        <div class="right"></div>
      </div>
    </div>
    <div class="cal_bloc">
      <div class="cal_bloc_text">
        <h1 class="h_main_txt" id="div_c">Познай себя</h1>
        <p class="p_main_txt">
          Перед тобой зеркало, вглядись. Внимательно посмотри на далекие звезды
          и найди в них отражение себя. Взгляни в собственную суть и отыщи в
          себе отражение ярчайших звезд. Позволь Звездочету помочь тебе
          познакомиться с собой настоящим.
        </p>
      </div>
      <div class="txt_inp">
        <div class="f_input">
          <p class="p_main_txt">Ваше имя</p>
          <input type="text" class="name_in" placeholder="Введите имя" />
        </div>
        <div class="f_input">
          <p class="p_main_txt">День рождения</p>
          <input type="date" class="name_in" />
        </div>
      </div>
      <button name="button" class="button_cal">
        <RouterLink to="/PythagoreanCalculator" class="link_cal">
          Рассчитать
        </RouterLink>
      </button>
    </div>
    <div class="dop_info">
      <div class="space_b">
        <div class="bloc_info">
          <div class="text_part">
            <h1 class="h_main_txt h_info_dop_txt">
              История <br />
              поколений
            </h1>
            <p class="p_main_txt">
              Созданная 8 веков назад древнегреческим философом и математиком
              Пифагором система математического описания гармонии человеческой
              личности не была забыта и смогла пройти сквозь время, доказывая
              свою актуальность и практическую применимость по сей день.
            </p>
          </div>
        </div>
      </div>
      <div class="space_b">
        <div class="bloc_info">
          <div class="text_part">
            <h1 class="h_main_txt h_info_dop_txt">
              Научный <br />
              подход
            </h1>
            <p class="p_main_txt">
              Применение современных методов научного познания позволяет
              продолжить развитие психоматрицы Пифагора. Исследовательский
              скептицизм и проверка гипотез экспериментом способны отделить
              уникальные знания от издержек суеверий.
            </p>
          </div>
        </div>
      </div>
      <div class="space_b">
        <div class="bloc_info">
          <div class="text_part">
            <h1 class="h_main_txt h_info_dop_txt">
              Улучшение <br />
              себя
            </h1>
            <p class="p_main_txt">
              Мы постоянно развиваемся, потому что нацелены на создание
              комплексного сервиса. С каждой версией Stargazer будет
              предоставлять более точные и качественные описания, рекомендации и
              прогнозы.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {
    HomeView,
  },
})
export default class HomeView extends Vue {
  scrollToCalculator() {
    const el = document.getElementById("div_c");
    if (el !== null) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }
}
</script>
