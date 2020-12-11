<template>
    <div id="loading"  v-show="loading">
        <div class="loading-wrapper">
            <div class="mask">
                <div class="mask_bg"></div>
                <div class="mask_logo">
                    <svg id="svgR" class="svgloader" version="1.1" viewBox="0 0 400 400" >
                        <circle class="back" cx="200" cy="200" r="190" ></circle>
                        <circle class="front" cx="200" cy="200" r="190" stroke="#2e2f33" stroke-width="0" fill="transparent" transform="rotate(-90, 50, 50)" ></circle>
                    </svg>

                </div>
           


            </div>
        </div>
    </div>
</template> 
 
<script>
    import { EventBus } from "@/utils/event-bus";
    import { gsap, TweenMax, Power0, Expo, Back, Bounce, SlowMo  } from "gsap/dist/gsap";
    import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin";
    gsap.registerPlugin(DrawSVGPlugin);

    export default {
        name: 'loading', 
        data(){
            return{
                loading: true,
                introEnd : false
            }
        },
        created: function(){
            console.log( "loading created" );
        },
        mounted: function(){
            const _this = this;
            let pathR = document.querySelector(".front");
            TweenMax.set(pathR, {drawSVG:0});
            TweenMax.fromTo(pathR, 3, {drawSVG:"0"}, {drawSVG:'0 100%', ease:SlowMo, onComplete:function(){
                let loadingBox = document.querySelector( ".mask" );
                TweenMax.set( loadingBox, { autoAlpha:1 });
                TweenMax.to( loadingBox, 1.35, { autoAlpha:0,  x:0, y:100+ "%", transformOrigin:"0% 100%", ease:Expo.easeInOut, onComplete: function(){
                    _this.loading = false;
                    EventBus.$emit( "intros-end", true );
                }});
            }});
        },
        beforeDestroy: function(){
            this.loading = false;
        }
    }
</script>

<style lang="scss" scoped>
    #loading{ position: static;
        .loading-wrapper{
            display: block;
            position: fixed;
            left: 0;
            top: 0;
            background-color: transparent;
            color: white;
            width: 100%;
            height: 100%;
            font-size: 20pt;
            font-family: "Raleway", Helvetica, Arial, sans-serif;
            text-align: center;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            -ms-box-sizing: border-box;
            -o-box-sizing: border-box;
            box-sizing: border-box;
            z-index: 100; 
            .mask{
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                pointer-events: none;
                will-change: transform; 
                .mask_bg{
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    pointer-events: none;
                    // background-color: transparent;
                    background-color: #151515;
                    will-change: transform;  
                }
                .mask_logo{
                    position: absolute;
                    width: 5vw;
                    height: 5vw;
                    top: 50%;
                    left: 50%;
                    -webkit-transform: translate(-50%,-50%);
                    transform: translate(-50%,-50%);
                    background-image: url("../assets/images/intro/symbol_icon.svg");
                    background-repeat: no-repeat;
                    background-position: 50%;
                    svg{ display: block; width: 100%; height: 100%;
                        circle{
                            display: block; position: absolute; top: 0; left: 0; fill: none; stroke-width: 10; stroke: #fff;
                            &.back{ opacity: .2; stroke: white;}
                            &.front{
                                opacity: 1;
                                stroke-dasharray: 1197px;
                                stroke-dashoffset: 1197px;
                                -webkit-transform-origin: 50% 50%;
                                transform-origin: 50% 50%;
                                -webkit-transform: rotate(-90deg);
                                transform: rotate(-90deg);
                                stroke: #bf1826;
                            }
                        }
                    }
                }
            }
        }
    }
  
</style>