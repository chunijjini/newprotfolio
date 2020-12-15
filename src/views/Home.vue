<template>
    <div class="content"  ref="contents" >
        <vue-scroll :ops="ops" ref="vs" @handle-scroll="handleScroll" >
            <Header />
            <section class="home__content" :class="{ active: isActive }">
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
                                                    <source src="@/assets/video/Bullsone.mp4">    
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
                                                    <source src="@/assets/video/Hodoo.mp4">    
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

                            <div class="gallery__item galleryTarget">
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
                                                    <source src="@/assets/video/LG_signature.mp4">    
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
                                                    <source src="@/assets/video/Lineage_M.mp4">    
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
            </section>
            <section class="home__curators">
                <div class="text_wrapper">
                    Live your own <em>unique</em>
                </div>
                <div class="container">
                    <div class="label">About us</div>
                    <div class="featured">
                        <div class="video__content">
                            <div class="video__inner">
                                <div class="video__player">
                                    <video class="player" autoplay="false" controls preload="none" muted="false" playsinline>
                                        <source src="@/assets/video/Abene_Home.mp4" type="video/mp4">
                                        <source src="false" type="video/webm">
                                        <source src="false" type="video/ogg">
                                    </video>
                                </div>
                                <div class="video__poster">
                                    <div class="background__bg"></div>
                                    <div class="overlay"></div>
                                    <div class="video__trigger"></div>
                                </div>
                            </div>
                        </div>
                        <div class="name">Abene Mendizabal</div>
                        <div class="position">Founder & CEO Spain Collection</div>
                    </div>
                    <div class="label label--list">Ambassadors</div>
                </div>
            </section>
        </vue-scroll>
        
    </div>
</template>
<script>
    import { EventBus } from "@/utils/event-bus";
    import myMixin from '@/components/mixin/myMixin'
    import { gsap, TweenMax, Power0, Expo, Back, Bounce, SlowMo  } from "gsap/dist/gsap";
    import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin";
    gsap.registerPlugin(DrawSVGPlugin);

    const easings = [
        'easeInQuad',
        'easeOutQuad',
        'easeInOutQuad',
        'easeInCubic',
        'easeOutCubic',
        'easeInOutCubic',
        'easeInQuart',
        'easeOutQuart',
        'easeInOutQuart',
        'easeInQuint',
        'easeOutQuint',
        'easeInOutQuint'
    ];
     import Header from '@/components/Header.vue'
    export default {
        // mixins: [myMixin],
        name: 'Home',
        components: {
            Header
	    },
        data(){
            return{
                isActive: false,
                ops: {
                    scrollPanel: {
                        scrollingX: false,
                        easing: 'easeInQuad',
                        speed: 800
                    },
                    vuescroll: {
                        mode: 'native',
                        sizeStrategy: "number",
                        wheelScrollDuration: 0,
                        wheelDirectionReverse: false,
                        locking: true,
                        checkShifKey: true,
                    },
                    rail: {
                        background: '#00ff00',
                        keepShow: false,
                        size: '10px',
                        minSize: 0.2
                    },
                    //bar
                    bar: {
                        size : '10px',
                        opacity:0,
                        onlyShowBarOnScroll: false
                    },
                    easings,
                }
            }
        },
        created(){
            console.log( "Home created" );
            EventBus.$on("intros-end", introEnd => {
                if( introEnd ){
                    this.cardListShow();
                    this.isActive = true; 
                }
            });

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
            handleScroll( vertical, horizontal, nativeEvent ){
                let sT =  vertical.scrollTop;
                let item = document.querySelector( ".video--visible" );
                if( sT >= item.offsetTop ){
                    console.log( "해당 위치에 들어왔니?" ); 
                }

                let items = document.querySelectorAll( ".gallery__item" );
                items.forEach( function( el, index ){
                    console.log( el, index )
                })
             
               
            },
            resizeHandler(event){
                let wW = window.innerWidth ;
                console.log( wW );
            },
        },

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
    .__rail-is-horizontal{ display: none !important;}
    .home__content{ position: relative; will-change: initial;  width: 100vw;
        .home__text{ display: block; position: relative; padding:0 0 10vw; visibility: visible;
            .gallery{ position: relative; width: 100vw; height: 100vh; 
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
                            .item{ width: 20vw; height: 12.5vw;}
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

    .home__curators{ display: block; position: relative; padding:52.8vw 0 16vw; visibility: visible;
        .text_wrapper{ position: relative; width: auto; height: auto; margin-bottom: 1vw; line-height: .9; z-index: 2; color: #fff; font-size:7vw; text-align: center; text-transform: uppercase;}
        .container{ position: relative; width: 100vw; height: auto; margin:auto; background: #060707;
            .label{ position: relative; font-weight: bold; font-size:.7vw; line-height: 1.2; text-transform: uppercase; letter-spacing: 3px; margin-bottom: 6.5vw; bottom:-15vw;}
            .featured{ position: relative; width: 50vw; height: 35vw; margin: auto auto 9vw; bottom:-15vw;
                .video__content{ position: relative; width: 50vw; height: 30vw; top:0; left:0; right:0; bottom:0;
                    &:before{ content: ""; display: block; }
                    .video__inner{ position: absolute; width: 100%; height: 100%; top:0; right:0; bottom:0; left:0;
                        .video__player{ position: relative; top:0; left:0; width: 100%; height:100%; overflow: hidden;
                            video{ display: none; object-fit: cover; min-width: 100%; min-height: 100%; width: 100%; height: 100%; position: absolute; top:0; right:0; bottom:0; left:0; }
                        }
                        .video__poster{ position: absolute; top:0; right:0; bottom:0; left:0; width: 100%; height: 100%;  overflow: hidden;
                            .background__bg{ position: absolute; top: -1%; right:-1%; bottom:-1%; left:-1%; background:url( "../assets/images/caratula_video_abene_new.jpg"); background-position: top; background-repeat:no-repeat; background-size:cover; }
                            .overlay{ position: absolute; width: 100%; height: 100%; top:0; left:0; background: #000; opacity: 0.6; will-change: transform; }
                            .video__trigger{  width: 6.5vw; height: 6.5vw; border-radius: 50%; line-height: 6.5vw; position: absolute; left: 50%; top: 50%;   cursor: pointer; z-index: 10;
                                -webkit-transform: translateX(-50%) translateY(-50%); 
                                transform: translateX(-50%) translateY(-50%);
                                background-image: url("../assets/images/player.svg"); background-position: 50%; background-size: contain; background-repeat: no-repeat;
                                -webkit-transition: all .45s cubic-bezier(.05,.76,.38,1.015); transition: all .45s cubic-bezier(.05,.76,.38,1.015);  -webkit-transition: all .45s var(--ease-out); transition: all .45s var(--ease-out);
                            }
                        }
                    }
                }
                .name{ color: #fff; font-weight: 500; font-size:1vw; line-height: 1; text-align: center; margin-top: 2.6vw; }
                .position{ color: #fff; font-weight: 300; font-size:.7vw; line-height: 1; text-align: center; margin-top: .5vw; }
            }
        } 

    }
}
</style>  