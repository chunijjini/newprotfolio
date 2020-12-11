// myMixin.js 추가
// import bus from '@/utils/bus.js';

let myMixin = {
    created(){
        window.addEventListener('scroll', this.handleScroll );
        window.addEventListener('resize', this.resizeHandler);
        window.addEventListener( "mousewheel", this.mouseWheelEvent ) 

     },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll );
        window.removeEventListener('resize', this.resizeHandler);
        window.removeEventListener( "mousewheel", this.mouseWheelEvent ) 
    },

    methods: {
        handleScroll( event  ) {
            let $header = document.getElementById( "header" );
            return $header;
            // console.log( event );
        },
        resizeHandler( event ){
        },

        mouseWheelEvent( event ){ 
        }, 
    
    },
    mounted(){
        this.$nextTick(() => {
            this.resizeHandler();
            this.handleScroll();
        });
 
        // bus.$emit('end:spinner');
    }

    
// //이벤트 보낼때
//   EventBus.$emit("use-eventbus", this.clickedCount);

//   //이벤트 받을떄
//   EventBus.$on("use-eventbus", clickedCount => {
//       this.receivedClickCount = clickedCount;
//     });
  
  
  
//   //이벤트 한번만
//     EventBus.$once("use-eventbus", clickedCount => {
//       this.receivedClickCount = clickedCount;
//     });
  
  
//   //이벤트 끄기
//     EventBus.$off("use-eventbus");


//인터넷 체크
// if (agent.indexOf("msie") != -1) {
//   alert("인터넷익스플로러 브라우저입니다.");
// }


};

export default myMixin;