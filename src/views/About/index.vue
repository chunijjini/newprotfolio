<template>
    <div style="height:10000px">
        <p>어바웃 페이지</p>
    </div>
</template>

<script>
    import { EventBus } from "@/utils/event-bus";
    import myMixin from '@/components/mixin/myMixin'
    import { gsap, TweenMax, Power0, Expo, Back, Bounce, SlowMo  } from "gsap/dist/gsap";

    export default {
        mixins: [myMixin],
        data(){
            return{

            }
        },

        methods:{
             handleScroll( evnet ){
                setInterval( function(){
                    console.log( window, window.scrollY );
                }, 1000 );
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>