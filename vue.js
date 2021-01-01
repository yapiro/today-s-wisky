const vm = new Vue({
    el:'#app',
    data:{
        img:'',
        resultopen:['./canadianclub.jpg','./hakusyu.jpg','./jackdaniels.jpg','./chivas-regal.jpg','./jameson.jpg'],
        imgtext:'',
        imgtextanswer:['カナディアンクラブ','白州','ジャックダニエル','シーバスリーガル','ジェムソン'],
        howtotext:'',
        howtodrink:['ストレート','水割り','ソーダ割り','トワイスアップ']
    },
    methods:{
        select(){
            const imgno = Math.floor(Math.random() * this.resultopen.length);
            this.img = this.resultopen[imgno]
            if(this.img===this.resultopen[0]){
               this.imgtext = this.imgtextanswer[0]
            }else if(this.img===this.resultopen[1]){
                this.imgtext = this.imgtextanswer[1]
            }else if(this.img===this.resultopen[2]){
                this.imgtext = this.imgtextanswer[2]
            }else if(this.img===this.resultopen[3]){
                this.imgtext = this.imgtextanswer[3]
            }else{
                this.imgtext = this.imgtextanswer[4]
            }
        },
        select2(){
            const drinking =  Math.floor(Math.random() * this.howtodrink.length);
            this.howtotext = this.howtodrink[drinking];
        }
    }
})