var app = new Vue({
    el:"#app",
    data:{
        events:["喝水","吃饭","睡觉"],
        addedEvent:'',
        timeList:[],
        deleteLogo:"E:/web/sources/delete.png"
    },
    methods:{
        addEvent() {
            if(this.addedEvent != '')
            {
                this.events.push(this.addedEvent);
                this.addedEvent = "";
            }
        },
        deleteEvent(index) {
            if(index > -1)
            {
                this.events.splice(index,1);
            }

        }
    }
});