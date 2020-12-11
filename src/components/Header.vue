<template>
    <div>
        <header :class="{ active: isActive }" id="header">
            <div class="header__menu">
                <nav>
                    <ul class="nav__list">
                        <li v-for="(item, index) in menuList" :key="index" >
                            <a :href="item.src">
                                {{ item.srcText }}
                                 <span class="nav_underline"></span>    
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="header__logo">
                <a href="javascript:;" ></a>
            </div>
        </header>
    </div>
</template>

<script>
    import { EventBus } from "@/utils/event-bus";
    import { gsap, TweenMax, Power0, Expo, Back, Bounce, SlowMo  } from "gsap/dist/gsap";
    export default {
        name: 'headers',
        data(){
            return{
                introEnd: '',
                actions: '',
                isActive: false,
                menuList: [
                    { src : "/", srcText : "Home" },
                    { src : "/about", srcText : "Abouts" },
                    { src : "/wroks", srcText : "Wroks" },
                    { src : "/contact", srcText : "Contact" }
                ]
            }
        },
        created(){
            console.log( "header created" );
            EventBus.$on("intros-end", introEnd => {
                if( introEnd ){
                     
                }
            });
        },
        methods:{
            headerShow: function(){
                EventBus.$on("actions", actions => {
                    let header = document.getElementById( "header" );
                    TweenMax.set( header, {  y: -20, opacity:0 });
                    TweenMax.to( header,  1, { y:0, opacity:1, ease:Expo.easeInOut });
                    
                    console.log( "headrr Show" )
                });
            }
        },
        mounted: function(){
            this.$nextTick(function() {
                this.headerShow();
            });
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
.mt{ font-family: "Metal";   font-weight: 400; letter-spacing: -1px;}
.pL{ font-family: "Michroma";  font-weight: 400;  letter-spacing: -0.1rem; }

    header{ position: relative; width: 70vw; height: 5vw; margin:5vw auto 0; opacity: 0; z-index: 10;
        .header__menu{ position: absolute; top:50%; left:0; width: 100%; height: auto; transform: translateY(-50%);
            .nav__list{
                li{ float: left;
                    a{ position: relative; display: inline-block; font-size:18px; font-weight: 300; padding:10px 0 1px;  @extend %noto-d;;  color: #0e0e0d;
                        .nav_underline{ position: absolute; bottom:-.3vw; left:0; width: 0; height: .05vw; background: #bf1826; transition: all .5s;}
                        &:hover{ color: #bf1826;
                            .nav_underline{ width: 100%; }
                        }
                    }
                    &:first-child{ margin-right: 2vw;}
                    &:nth-child(3){ float: right; margin-left:2vw; }
                    &:nth-child(4){ float: right; }
                }
            }
        }
        .header__logo{
            display: block; 
            position: absolute;
            width: 10vw;
            height: 7.5vw;
            top: 0;
            left: 50%;
            -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
            cursor: pointer;
            a{
                display: block;
                width: 100%;
                height: 100%;
                background-image: url("../assets/images/header/logo.svg");
                background-position: 50%;
                background-repeat: no-repeat;
                background-size: contain;
            }
        }
        &.active{ opacity: 1; }
    }
</style>