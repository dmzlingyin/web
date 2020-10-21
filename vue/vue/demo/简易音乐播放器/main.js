var player = new Vue({
    el:"#player",
    data:{
        song:"明年今日",
        songList:[],
        url:""
    },
    methods:{
        getSongInfo() {
            var that = this;
            axios.get("https://autumnfish.cn/search?keywords=" + this.song).then(function(response){
                that.songList = response.data.result.songs;
            },function(){});
        },
        getSongUrl(index) {
            var that = this;
            axios.get("https://autumnfish.cn/song/url?id=" + this.songList[index].id).then(function(response){
                // console.log(response);
                that.url = response.data.data[0].url;
                console.log(that.url);
            },function(){});
        }
    }
});