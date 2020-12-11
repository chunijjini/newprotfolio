<template>
    <div class="content" >
        <Header />
        <div class="home__content" :class="{ active: isActive }">
            <div class="home__text">
                <div id="gallerys" class="gallery">
                    <div class="gallery__inner">
                        <div class="gallery__item">
                            <div class="item">
                                <div class="video">
                                    <div class="video__inner">
                                        <div class="video__player">
                                            <video autoplay preload="none" muted="muted" loop playsinline>
                                                <source src="@/assets/video/Flamenca-2.mp4">    
                                                <source src="false" type="video/webm">
                                                <source src="false" type="video/ogg">
                                            </video>      
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="background">
                                    <div class="background__bg bg__img_01"></div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="background">
                                    <div class="background__bg bg__img_02"></div>
                                </div>
                            </div>

                        </div>

                        <div class="gallery__item">
                            <div class="item">
                                <div class="video">
                                    <div class="video__inner">
                                        <div class="video__player">
                                            <video autoplay preload="none" muted="muted" loop playsinline>
                                                <source src="@/assets/video/Secuencia-01_6-1.mp4">    
                                                <source src="false" type="video/webm">
                                                <source src="false" type="video/ogg">
                                            </video>      
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="video">
                                    <div class="video__inner">
                                        <div class="video__player">
                                            <video autoplay preload="none" muted="muted" loop playsinline>
                                                <source src="@/assets/video/Secuencia-01-1.mp4">    
                                                <source src="false" type="video/webm">
                                                <source src="false" type="video/ogg">
                                            </video>      
                                        </div>
                                    </div>
                                </div>
                            </div>
                             <div class="item">
                                <div class="background">
                                    <div class="background__bg bg__img_03"></div>
                                </div>
                            </div>
                             <div class="item">
                                <div class="background">
                                    <div class="background__bg bg__img_04"></div>
                                </div>
                            </div>
                        </div>

                        <div class="gallery__item">
                            <div class="item">
                                <div class="video video--visible">
                                    <div class="video__inner">
                                        <div class="video__player">
                                            <video autoplay preload="none" muted="muted" loop playsinline>
                                                <source src="@/assets/video/Bg_Home.mp4">    
                                                <source src="false" type="video/webm">
                                                <source src="false" type="video/ogg">
                                            </video>      
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="background">
                                    <div class="background__bg bg__img_05"></div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="background">
                                    <div class="background__bg bg__img_06"></div>
                                </div>
                            </div>
                        </div>

                        <div class="gallery__item">
                            <div class="item">
                                <div class="video">
                                    <div class="video__inner">
                                        <div class="video__player">
                                            <video autoplay preload="none" muted="muted" loop playsinline>
                                                <source src="@/assets/video/Secuencia-01_2-1.mp4">    
                                                <source src="false" type="video/webm">
                                                <source src="false" type="video/ogg">
                                            </video>      
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                 <div class="video">
                                    <div class="video__inner">
                                        <div class="video__player">
                                            <video autoplay preload="none" muted="muted" loop playsinline>
                                                <source src="@/assets/video/Secuencia-01_8-1.mp4">    
                                                <source src="false" type="video/webm">
                                                <source src="false" type="video/ogg">
                                            </video>      
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="background">
                                    <div class="background__bg bg__img_07"></div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="background">
                                    <div class="background__bg bg__img_08"></div>
                                </div>
                            </div>
                        </div>

                        <div class="gallery__item">
                            <div class="item">
                                <div class="video">
                                    <div class="video__inner">
                                        <div class="video__player">
                                            <video autoplay preload="none" muted="muted" loop playsinline>
                                                <source src="@/assets/video/Secuencia-01_7-1.mp4">    
                                                <source src="false" type="video/webm">
                                                <source src="false" type="video/ogg">
                                            </video>      
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="background">
                                    <div class="background__bg bg__img_09"></div>
                                </div>
                            </div>
                              <div class="item">
                                <div class="background">
                                    <div class="background__bg bg__img_10"></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="text__wrapper">
                    <div class="title___box">
                        <div class="title__list">
                            <span>Spain</span>
                            <span>Collection</span>
                            <span>is</span>
                            <span>your</span>
                            <span>expert</span>
                            <span>partner</span>
                            <span>for</span>
                            <span>deluxe</span>
                        </div>
                        <div class="title__list"> 
                            <span>bespoke</span>
                            <span>travel</span>
                            <span>experiences</span> 
                            <span>in</span>
                        </div>
                    </div>
                </div>
            </div> 

        </div>
        <div class="home__curators">
            <div class="text_wrapper">
                Live your own <em>unique</em>
            </div>
        </div>
        
    </div>
</template>
<script>
    import { EventBus } from "@/utils/event-bus";
    import myMixin from '@/components/mixin/myMixin'
    import { gsap, TweenMax, Power0, Expo, Back, Bounce, SlowMo  } from "gsap/dist/gsap";
    import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin";
    gsap.registerPlugin(DrawSVGPlugin);

    import Header from '@/components/Header.vue'
    export default {
        mixins: [myMixin],
        name: 'Home',
        components: {
		 Header
	    },
        data(){
            return{
                isActive: false,
            }
        },
        created(){
            console.log( "Home created" );
            EventBus.$on("intros-end", introEnd => {
                if( introEnd ){
                    this.cardListShow();
                    this.isActive = true; 
                    // this.cardlistMove();
                }
            });
        },
        mounted: function(){
        },

        methods: {
            cardListShow: function(){
                let item = document.querySelectorAll( ".item" );
                item.forEach( function( element, index ){
                    TweenMax.set( element, { scale:.05, opacity:0 });
                    TweenMax.to( element,  0.45, { scale:1, opacity:1, ease:Back.easeInOut, delay:index * 0.025 });
                });
                this.cardlistMove();
                this.cardListHide();
            },
            cardlistMove : function(){
                let _this = this;
                let item = document.querySelectorAll( ".gallery__item" );
                let itemLine1 = item[0];
                let itemLine2 = item[1];
                let itemLine3 = item[2];
                let itemLine4 = item[3];
                let itemLine5 = item[4];
                TweenMax.to( itemLine1, 3, { x:0, y:62.6 + "vw",  ease:Expo.easeInOut });
                TweenMax.to( itemLine2, 3, { x:0, y:52.6 + "vw",  ease:Expo.easeInOut });
                TweenMax.to( itemLine3, 3, { x:0, y:107.6 + "vw",  ease:Expo.easeInOut });
                TweenMax.to( itemLine4, 3, { x:0.0794+"vw", y:37.6 + "vw",  ease:Expo.easeInOut });
                TweenMax.to( itemLine5, 3, { x:0, y:62.6 + "vw",  ease:Expo.easeInOut, onComplete:function(){
                     EventBus.$emit( "actions", true );
                     _this.textShow();
                }});
            },
            cardListHide: function(){
                let item = document.querySelectorAll( ".item .background" );
                let itemParent = item[0].parentNode;
                let itemArr  = [];
                for( let i = 0; i< item.length; i++ ){
                    itemArr.push( item[i].parentNode );
                }
                setTimeout( function(){
                    itemArr.forEach( function( index ){
                        TweenMax.set( itemArr, { opacity:1 });
                        TweenMax.to( itemArr, 0.1, { opacity:0, visibility:"hidden", ease:Power0.easeInOut, delay: index * 0.01 });
                    })
                },2000 )
            },
            textShow: function(){
                let textArr = [];
                let textTarget = document.querySelectorAll( ".title__list span" );

                textTarget.forEach( function( element, index ){
                    TweenMax.set( element, { y: 50, opacity:0 });
                    TweenMax.to( element, 0.35, { y: 0, opacity:1, ease:Power0.easeInOut, delay: index * 0.15 });
                })
            
            },
            handleScroll( evnet ){
                // let header = document.getElementById( "header" );
                TweenMax.to( header, 0.35, { y: -(window.scrollY), ease:Power0.easeInOut });
                console.log( header );
                console.log( window, window.scrollY );
            },
            resizeHandler(event){
                let wW = window.innerWidth ;
                console.log( wW );
            }
        }
        

    }
</script>

<style lang="scss" scoped> 
/*국문 폰트 */
%noto-m{ font-family: "NotoSansKR"; font-weight: 600; letter-spacing: -1px; }
%noto-d{ font-family: "NotoSansKR"; font-weight: 300; letter-spacing: -1px; }
%noto-r{ font-family: "NotoSansKR"; font-weight: 400;  letter-spacing: -1px;}
%noto-b{ font-family: "NotoSansKR"; font-weight: bold;  letter-spacing: -1px; }
// %jeju-h{ font-family: "JejuHallasan";   font-weight: bold; letter-spacing: -1px;}

/*영문 폰트*/
.ms{ font-family: "Montserrat";   font-weight: 300; letter-spacing: -1px;}
.mt{ font-family: "Metal";   font-weight: 300; letter-spacing: -1px;}
.pL{ font-family: "Michroma";  font-weight: 400;  letter-spacing: -0.1rem; }
.content{ display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; 
    .home__content{ position: relative; will-change: initial;  width: 100vw;
        .home__text{ display: block; position: relative; padding:0 0 10vw; visibility: visible;
            .gallery{ position: relative; width: 100vw; height: 100vh;margin-top: 5vw;
                .gallery__inner{ position: relative; width: 100vw; height: 100%;
                    .gallery__item{ position: absolute; height: auto; bottom:0;
                        .item{ position: relative; width: 15vw; height: 25vw; margin-bottom: 2.5vw; overflow: hidden; opacity: 0; transform: scale(.5);
                            .video{ position: absolute; width: 100%; height: 100%; top: 0; left: 0; right: 0; bottom: 0;
                                &:before{ content: ''; display: block; }
                                .video__inner{ position: absolute; width: 100%;  height: 100%; top: 0; left: 0; right: 0; bottom: 0;
                                    .video__player{ position: relative; left: 0; top: 0; width: 100%; height: 100%; overflow: hidden;
                                        video{ object-fit: cover; min-width: 100%; min-height: 100%; width: 100%; height: 100%; position: absolute; top: 0; left: 0; right: 0; bottom: 0; }
                                    }
                                }
                                &.video--visible{ width: 100vw; height: 100vh;top:50%; left:50%; transform: translate( -50%, -50%); }
                            }
                            .background{ position: absolute; width: 100%; height: 100%; top: 0; left: 0; overflow: hidden;
                                .background__bg{ position: absolute;  width: 102%; height: 102%; left: -1%; top: -1%; right: -1%; bottom: -1%; background-repeat: no-repeat; background-size: cover; background-position: 50%;
                                    &.bg__img_01{ background-image:url( '../assets/images/L_1.jpg'); }
                                    &.bg__img_02{ background-image:url( '../assets/images/L_3.jpg'); }
                                    &.bg__img_03{ background-image:url( '../assets/images/M_2.jpg'); }
                                    &.bg__img_04{ background-image:url( '../assets/images/S_1.jpg'); }
                                    &.bg__img_05{ background-image:url( '../assets/images/XL_01.jpg'); }
                                    &.bg__img_06{ background-image:url( '../assets/images/XL_05.jpg'); }
                                    &.bg__img_07{ background-image:url( '../assets/images/M_1.jpg'); }
                                    &.bg__img_08{ background-image:url( '../assets/images/S_2.jpg'); }
                                    &.bg__img_09{ background-image:url( '../assets/images/L_2.jpg'); }
                                    &.bg__img_10{ background-image:url( '../assets/images/L_4.jpg'); }
                                }
                            }
                        }

                        &:nth-child(1){ width: 15vw; left:-5vw; }
                        &:nth-child(2){ width: 20vw; left:12.5vw;
                            .item:nth-child(odd){ width: 20vw; height: 20vw; }
                            .item:nth-child(2n){ width: 20vw; height: 12.5vw; }
                        }
                        &:nth-child(3){ width: 30vw; left:50%; transform: translateX(-50%);
                            .item{ width: 30vw; height: 40vw;}
                        }
                        &:nth-child(4){ width: 20vw; right:12.5%;
                            .item{ width: 20vw; height: 12.5vw; }
                        }
                        &:nth-child(5){ width: 15vw; right:-5%;}
                    }
                }
            }
            .text__wrapper{ position: absolute; width: 60vw; height: auto; top:14.5vw; left:50%; transform: translate(-50%); text-align: center;
                .title___box{ font-size:2.73vw; line-height: 1.1; overflow: hidden;
                    .title__list{ overflow: hidden; white-space: nowrap; display: block; text-align:center; position: relative;
                        span{ position: relative; display: inline-block; @extend %noto-d; opacity: 0;}
                    }
                }
            }
        }
        // &::-webkit-scrollbar{ width: 1px; background-color: transparent;}
        // &::-webkit-scrollbar-thumb {background-color: transparent;}
        // &::-webkit-scrollbar-track {background-color: transparent; }
        &.active{ opacity: 1;  }
        &:after{ content: ''; display: block; clear: both; } 
    }
}
</style>  