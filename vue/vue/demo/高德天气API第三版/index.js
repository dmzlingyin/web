var app = new Vue({
    el:"#app",
    data:{
        weather:[],
        sun:['晴'],
        cloud:['阴','少云','晴间多云','多云'],
        // cloudy:['阴'],
        wind:['有风','平静','微风','和风','清风','强风/劲风','疾风','大风','烈风','风暴','狂暴风','飓风','热带风暴'],
        haze:['霾','中度霾','重度霾','严重霾'],
        shower:['阵雨','雷阵雨','雷阵雨并伴有冰雹','强阵雨','强雷阵雨'],
        rain:['小雨','中雨','大雨','暴雨','大暴雨','特大暴雨','极端降雨','毛毛雨/细雨','雨','小雨-中雨','中雨-大雨','大雨-暴雨','暴雨-大暴雨','大暴雨-特大暴雨','雨雪天气','雨夹雪','阵雨夹雪','冻雨'],
        snow:['雪','阵雪','小雪','中雪','大雪','暴雪','小雪-中雪','中雪-大雪','大雪-暴雪'],
        dust:['浮沉','扬沙','沙尘暴','强沙尘暴','龙卷风'],
        fog:['雾','浓雾','强浓雾','轻雾','大雾','特强浓雾'],
        message:"天气信息",
        city:"140300",
        province:"",
        timer:""
    },
    mounted() {
        this.getWeatherInfo();
        this.timer = setInterval(this.getWeatherInfo,600000);
    },
    methods:{
       
        getWeatherInfo() {
            var that = this;
            axios.get("https://restapi.amap.com/v3/weather/weatherInfo?extensions=all&key=5202b4197397024ecadc81122ca42d85&city=" + this.city).then(function(response) {
            console.log("hello");
            that.city = response.data.forecasts[0].city;
            that.province = response.data.forecasts[0].province;
            that.weather = response.data.forecasts[0].casts.slice(0,3);
            // that.weather[0].dayweather = "nihk";
            // that.weather = [{"date":"2020-10-13","dayweather":"大风"},
            // {"date":"2020-10-13","dayweather":"晴"},
            // {"date":"2020-10-13","dayweather":"雷阵雨并伴有冰雹"},
            // {"date":"2020-10-13","dayweather":"扬沙"}];
            // console.log(that.city);
            // console.log(that.province);
            // console.log(that.weather[1].date);
            });
        }
    }
});

// https://api.seniverse.com/v3/weather/now.json?key=S4cvyxZ4wWUni59k4&location=beijing&language=zh-Hans&unit=c