<template>
  <div id="player">
        <!-- 搜索框 start -->
        <div class="search">
            <input type="search" placeholder="请输入歌曲名称" v-model="song" @keyup.enter="getSongInfo">
            <button @click="getSongInfo">搜索</button>
        </div>
        <!-- 搜索框 end -->

        <!-- 显示框 start -->
        <div class="show">
            <ul>
                <li v-for="(song,index) in songList" :key="song">
                    {{ index + 1 }}&nbsp;&nbsp;
                    <img src="./assets/play.png" alt="jkj" @click="getSongUrl(index)">
                    
                    {{ song.name }}
                </li>
            </ul>
        </div>
        <!-- 显示框 end -->
        <!-- 播放框 start -->
        <div class="play">
            <audio :src="url" controls autoplay="autoplay"></audio>
        </div>
        <!-- 播放框 end -->
    </div>
</template>

<script>
import './assets/css/style.css'
import axios from 'axios'

export default {
    data() {
        return {
            song:"明年今日",
            songList:[],
            url:""
        }
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
}
</script>

<style>

</style>