<template>
  <div id="app">
    <div v-if="inProcess">Получение данных api</div>
    <Catalog v-else title="Каталог товаров" :items="apiData.list" :filters="apiData.params.filters"/>
  </div>
</template>

<script>

const apiData = {
  "params": {
    "filters": [
      {
        "type":"multicheckbox",
        "name":"Пол",
        "list": [
          {
            "name":"arrFilter_187_1298878781",
            "value":"Y",
            "htmlName":"Мужчины"
          }
        ]
      },
      {
        "type":"multicheckbox",
        "name":"Категория",
        "list": [
          {
            "name":"arrFilter_123_2244539910",
            "value":"Y",
            "htmlName":"Поло"
          }
        ]
      },
      {
        "type":"multicheckbox",
        "name":"Коллекция",
        "list":[
          {
            "name":"arrFilter_110_2783432118",
            "value":"Y",
            "htmlName":"Classic fit"
          },
          {
            "name":"arrFilter_110_2042728595",
            "value":"Y",
            "htmlName":"Loose fit"
          },
          {
            "name":"arrFilter_110_2746899714",
            "value":"Y",
            "htmlName":"Regular fit"
          },
          {
            "name":"arrFilter_110_3019611604",
            "value":"Y",
            "htmlName":"Slim fit"
          },
          {
            "name":"arrFilter_110_3903333416",
            "value":"Y",
            "htmlName":"Standart fit"
          }
        ]
      },
      {
        "type":"multicheckbox",
        "name":"Размер",
        "list": [
          {
            "name":"arrFilter_114_450215437",
            "value":"Y",
            "htmlName":"2"
          },
          {
            "name":"arrFilter_114_1842515611",
            "value":"Y",
            "htmlName":"3"
          },
          {
            "name":"arrFilter_114_4088798008",
            "value":"Y",
            "htmlName":"4"
          },
          {
            "name":"arrFilter_114_2226203566",
            "value":"Y",
            "htmlName":"5"
          },
          {
            "name":"arrFilter_114_498629140",
            "value":"Y",
            "htmlName":"6"
          },
          {
            "name":"arrFilter_114_1790921346",
            "value":"Y",
            "htmlName":"7"
          },
          {
            "name":"arrFilter_114_4194326291",
            "value":"Y",
            "htmlName":"8"
          },
          {
            "name":"arrFilter_114_2366072709",
            "value":"Y",
            "htmlName":"9"
          },
          {
            "name":"arrFilter_114_3252274669",
            "value":"Y",
            "htmlName":"XS"
          },
          {
            "name":"arrFilter_114_543223747",
            "value":"Y",
            "htmlName":"S"
          },
          {
            "name":"arrFilter_114_3664761504",
            "value":"Y",
            "htmlName":"M"
          },
          {
            "name":"arrFilter_114_2909332022",
            "value":"Y",
            "htmlName":"L"
          },
          {
            "name":"arrFilter_114_1288816664",
            "value":"Y",
            "htmlName":"XL"
          },
          {
            "name":"arrFilter_114_2431024381",
            "value":"Y",
            "htmlName":"XXL"
          }
        ]
      },
      {
        "type":"multicheckbox",
        "name":"Цвет",
        "list": [
          {
            "name":"arrFilter_115_1429022876",
            "value":"Y",
            "htmlName":"бежевый"
          },
          {
            "name":"arrFilter_115_2733696122",
            "value":"Y",
            "htmlName":"белый"
          },
          {
            "name":"arrFilter_115_3329184492",
            "value":"Y",
            "htmlName":"бирюзовый"
          },
          {
            "name":"arrFilter_115_239843172",
            "value":"Y",
            "htmlName":"бордовый"
          },
          {
            "name":"arrFilter_115_1035622396",
            "value":"Y",
            "htmlName":"голубой"
          },
          {
            "name":"arrFilter_115_3147032652",
            "value":"Y",
            "htmlName":"желтый"
          },
          {
            "name":"arrFilter_115_2262271943",
            "value":"Y",
            "htmlName":"зеленый"
          },
          {
            "name":"arrFilter_115_2239312846",
            "value":"Y",
            "htmlName":"коричневый"
          },
          {
            "name":"arrFilter_115_296768394",
            "value":"Y",
            "htmlName":"красный"
          },
          {
            "name":"arrFilter_115_143437932",
            "value":"Y",
            "htmlName":"оранжевый"
          },
          {
            "name":"arrFilter_115_613431997",
            "value":"Y",
            "htmlName":"розовый"
          },
          {
            "name":"arrFilter_115_2125338020",
            "value":"Y",
            "htmlName":"серый"
          },
          {
            "name":"arrFilter_115_319154010",
            "value":"Y",
            "htmlName":"синий"
          },
          {
            "name":"arrFilter_115_3348673657",
            "value":"Y",
            "htmlName":"темно-зеленый"
          },
          {
            "name":"arrFilter_115_1316387475",
            "value":"Y",
            "htmlName":"темно-серый"
          },
          {
            "name":"arrFilter_115_601720941",
            "value":"Y",
            "htmlName":"темно-синий"
          },
          {
            "name":"arrFilter_115_587804294",
            "value":"Y",
            "htmlName":"фиолетовый"
          },
          {
            "name":"arrFilter_115_1194409275",
            "value":"Y",
            "htmlName":"черный"
          }
        ]
      }
    ],
    "sort": [
      {
        "name":"default",
        "order":"desc",
        "text":"Умолчанию",
        "selected":true
      },
      {
        "name":"name",
        "order":"asc",
        "text":"По названию (А-Я)",
        "selected":false
      },
      {
        "name":"name",
        "order":"desc",
        "text":"По названию (Я-А)",
        "selected":false
      },
      {
        "name":"price",
        "order":"asc",
        "text":"По цене (возр)",
        "selected":false
      },
      {
        "name":"price",
        "order":"desc",
        "text":"По цене (убыв)",
        "selected":false
      }
    ],
    "meta": {
      "title":"Мужские поло Lacoste | Купить мужские футболки и рубашки поло в интернет-магазине Lacoste",
      "h1":"Мужские поло",
      "description":"Оригинальные мужские поло Lacoste. Купите мужские поло в официальном интернет-магазине Lacoste. Удобная оплата и бесплатная доставка по всей России!",
      "canonical":"//lacoste.ru/catalog/polo-muzh/"
    },
    "adv": {
      "id":"188"
    }
  },
  "info": {
    "name":"Поло",
    "count":372,
    "perPage":12,
    "curNumPage":1
  },
  "list":[
    {
      "name":"Поло Lacoste Regular fit",
      "code":"polo_lacoste_regular_fit_179_color_001",
      "sec_code":"polo-muzh",
      "colorsCount":1,
      "prices":{
        "old":"",
        "current":"от 7 480 руб."
      },
      "flags":{
      },
      "images":[
        "//static.lacoste.ru/upload/resize_cache/catalog/735_735_1/PH5522001.jpg",
        "//static.lacoste.ru/upload/resize_cache/catalog/735_735_1/PH5522001.01.jpg"
      ]
    },
    {
      "name":"Поло Lacoste",
      "code":"polo_lacoste_classic_fit_5_color_166",
      "sec_code":"polo-muzh",
      "colorsCount":1,
      "prices":{
        "old":"",
        "current":"от 6 980 руб."
      },
      "flags":{
      },
      "images":[
        "//static.lacoste.ru/upload/resize_cache/catalog/735_735_1/L1212166.jpg",
        "//static.lacoste.ru/upload/resize_cache/catalog/735_735_1/L1212166.01.jpg"
      ]
    },
    {
      "name":"Поло Lacoste",
      "code":"polo_lacoste_classic_fit_5_color_T01",
      "sec_code":"polo-muzh",
      "colorsCount":1,
      "prices":{
        "old":"",
        "current":"от 6 980 руб."
      },
      "flags":{
      },
      "images":[
        "//static.lacoste.ru/upload/resize_cache/catalog/735_735_1/L1212T01.jpg",
        "//static.lacoste.ru/upload/resize_cache/catalog/735_735_1/L1212T01.01.jpg"
      ]
    },
    {
      "name":"Поло Lacoste",
      "code":"polo_lacoste_classic_fit_5_color_476",
      "sec_code":"polo-muzh",
      "colorsCount":1,
      "prices":{
        "old":"",
        "current":"от 6 980 руб."
      },
      "flags":{
      },
      "images":[
        "//static.lacoste.ru/upload/resize_cache/catalog/735_735_1/L1212476.jpg",
        "//static.lacoste.ru/upload/resize_cache/catalog/735_735_1/L1212476.01.jpg"
      ]
    },
    {
      "name":"Поло Lacoste",
      "code":"polo_lacoste_classic_fit_5_color_001",
      "sec_code":"polo-muzh",
      "colorsCount":1,
      "prices":{
        "old":"",
        "current":"от 6 980 руб."
      },
      "flags":{
      },
      "images":[
        "//static.lacoste.ru/upload/resize_cache/catalog/735_735_1/L1212001.jpg",
        "//static.lacoste.ru/upload/resize_cache/catalog/735_735_1/L1212001.01.jpg"
      ]
    },
    {
      "name":"Поло Lacoste Classic fit с длинным рукавом",
      "code":"polo_lacoste_classic_fit_s_dlinnym_rukavom_color_166",
      "sec_code":"polo-muzh",
      "colorsCount":1,
      "prices":{
        "old":"",
        "current":"от 7 480 руб."
      },
      "flags":{
      },
      "images":[
        "//static.lacoste.ru/upload/resize_cache/catalog/735_735_1/L1312166.jpg",
        "//static.lacoste.ru/upload/resize_cache/catalog/735_735_1/L1312166.01.jpg"
      ]
    },
    {
      "name":"Поло Lacoste Regular fit",
      "code":"polo_lacoste_regular_fit_179_color_166",
      "sec_code":"polo-muzh",
      "colorsCount":1,
      "prices":{
        "old":"",
        "current":"от 7 480 руб."
      },
      "flags":{
      },
      "images":[
        "//static.lacoste.ru/upload/resize_cache/catalog/735_735_1/PH5522166.jpg",
        "//static.lacoste.ru/upload/resize_cache/catalog/735_735_1/PH5522166.01.jpg"
      ]
    },
    {
      "name":"Поло Lacoste Regular fit",
      "code":"polo_lacoste_regular_fit_179_color_T01",
      "sec_code":"polo-muzh",
      "colorsCount":1,
      "prices":{
        "old":"",
        "current":"от 7 480 руб."
      },
      "flags":{
      },
      "images":[
        "//static.lacoste.ru/upload/resize_cache/catalog/735_735_1/PH5522T01.jpg",
        "//static.lacoste.ru/upload/resize_cache/catalog/735_735_1/PH5522T01.01.jpg"
      ]
    },
    {
      "name":"Поло Lacoste Slim fit",
      "code":"polo_lacoste_slim_fit_18_color_031",
      "sec_code":"polo-muzh",
      "colorsCount":1,
      "prices":{
        "old":"",
        "current":"от 6 980 руб."
      },
      "flags":{
      },
      "images":[
        "//static.lacoste.ru/upload/resize_cache/catalog/735_735_1/PH4012031.jpg",
        "//static.lacoste.ru/upload/resize_cache/catalog/735_735_1/PH4012031.01.jpg"
      ]
    },
    {
      "name":"Поло Lacoste",
      "code":"polo_lacoste_101_color_166",
      "sec_code":"polo-muzh",
      "colorsCount":1,
      "prices":{
        "old":"",
        "current":"от 7 980 руб."
      },
      "flags":{
      },
      "images":[
        "//static.lacoste.ru/upload/resize_cache/catalog/735_735_1/PH9435166.jpg",
        "//static.lacoste.ru/upload/resize_cache/catalog/735_735_1/PH9435166.01.jpg"
      ]
    },
    {
      "name":"Поло Lacoste Slim fit",
      "code":"polo_lacoste_slim_fit_18_color_166",
      "sec_code":"polo-muzh",
      "colorsCount":1,
      "prices":{
        "old":"",
        "current":"от 6 980 руб."
      },
      "flags":{
      },
      "images":[
        "//static.lacoste.ru/upload/resize_cache/catalog/735_735_1/PH4012166.jpg",
        "//static.lacoste.ru/upload/resize_cache/catalog/735_735_1/PH4012166.01.jpg"
      ]
    },
    {
      "name":"Поло Lacoste Classic fit с длинным рукавом",
      "code":"polo_lacoste_classic_fit_s_dlinnym_rukavom_1_color_RUQ",
      "sec_code":"polo-muzh",
      "colorsCount":1,
      "prices":{
        "old":"",
        "current":"от 7 480 руб."
      },
      "flags":{
      },
      "images":[
        "//static.lacoste.ru/upload/resize_cache/catalog/735_735_1/L1313RUQ.jpg",
        "//static.lacoste.ru/upload/resize_cache/catalog/735_735_1/L1313RUQ.01.jpg"
      ]
    }
  ],
}



import Catalog from './components/Catalog.vue';

export default {
  name: 'app',
  data: function() {
    return {
      apiData: null,
    };
  },
  computed: {
    inProcess: function () {
      return this.$store.state.inProcess;
    }
  },
  created: function () {
    setTimeout(
      () => {
        this.apiData = apiData;
        this.$store.commit('changeProcessStatus');
      }, 3000);
  },
  components: {
    Catalog
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
