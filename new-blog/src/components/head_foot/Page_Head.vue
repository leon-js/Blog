<template>
<header>
    <nav class="navbar navbar-expand-lg navbar-light" :class="{headNight: isApple}">
        <strong><a :style="{color: headTextColor, fontSize: '25px'}" class="navbar-brand" href="#">梁酱的新窝</a></strong>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon" :class="{navbarTogglerIconNight: isApple}" ></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
            <li class="nav-item">
                <router-link :style="{ fontWeight: '500'}" :class="{navItem: isApple}" :to="{name:'home'}" class="nav-item nav-link" href="#">首页 <span class="sr-only">(current)</span></router-link>
            </li>
            <li class="nav-item">
                <router-link :style="{ fontWeight: '500'}" :class="{navItem: isApple}" :to="{name:'about'}" class="nav-item nav-link" href="#">关于 <span class="sr-only">(current)</span></router-link>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" :class="{navItem: isApple}" aria-expanded="false">
                主题切换
                </a>
                <div class="dropdown-menu showMenu" aria-labelledby="navbarDropdownMenuLink" :class="{showMenuNight: isApple}">
                <!-- <a class="dropdown-item" href="#" @mouseover="mouseOver" 
        	@mouseleave="mouseLeave" :style="active">Action</a> -->
                <button class="dropdown-item" @mouseover="mouseOverMoring" @mouseleave="mouseLeaveMoring" :style="activeMoring" @click="changeWhite" >白天</button>
                <button class="dropdown-item" @mouseover="mouseOverNight" @mouseleave="mouseLeaveNight" :style="activeNight" @click="changeBlack" >黑夜</button>
                </div>
            </li>
            </ul>
            <div class="navbar-nav ml-auto">
                    <!-- <img :src="head_Portrait" v-show="isLogin" class="round_icon"  alt=""> -->
                    <!-- <a class="nav-item nav-link" v-show="isLogin">{{currenuser}}</a>
                    <a id="tuichu" href="javascript:void(0);" @click="shachusession"  class="nav-item nav-link" v-show="isLogin">Sign out</a> -->
                    <!-- <router-link :to="{name:'isloginLink'}" class="nav-item nav-link" v-show="!isLogin">Log in</router-link> -->
                    <router-link :style="{ fontWeight: '500'}" :class="{navItem: isApple}" :to="{name:'about'}" class="nav-item nav-link" href="#">Login<span class="sr-only">(current)</span></router-link>
            </div>
        </div>
    </nav>
</header>
</template>

<script>
export default {
    name: 'Page_Head',
    data() {
        return {
            headBgColor  : this.globalColor.HeadBgColorMorning,
            headTextColor: this.globalColor.HeadTextColorMorning,
            activeMoring : '',
            activeNight  : '',
            isApple      : false
        }
    },
    created(){
        if(localStorage.getItem("theam") == 'moring'){
            this.isApple = false;
        }else if(localStorage.getItem("theam") == 'night'){
            this.isApple = true;
        }else{

        }
    },
    methods: {
        mouseOverMoring: function(){
            this.activeMoring = 'background-color: white;color: black';
        },
        mouseLeaveMoring: function () {
            this.activeMoring = '';
        },
        mouseOverNight: function(){
            this.activeNight = 'background-color: black;color: white';
        },
        mouseLeaveNight: function () {
            this.activeNight = '';
        },
        changeWhite(){
            this.isApple = false;
            localStorage.setItem("theam",'moring');
            console.log(localStorage.getItem("theam"),'head');
            this.$emit('changeTheam',this.isApple);
        },
        changeBlack(){
            this.isApple = true;
            localStorage.setItem("theam",'night');
            console.log(localStorage.getItem("theam"),'head');
            this.$emit('changeTheam',this.isApple);
        }
    },
    computed: {
        
    }
}
</script>

<style>
/* .dropdown-menu .dropdown-item:hover{
    background-color: red;
} */
.navbar-light{
    background-color: lightskyblue;
    opacity         : 0.7;
    text-align      : center;
}
.headNight{
    background-color: black;
    opacity         : 0.7;
    text-align      : center;
}
.navbar-light .navbarTogglerIconNight {
    background-image: url(../../assets/Night_guide.svg);
}
.navbar-light .navbar-nav .nav-link:focus {
    color           : white;
}
.navbar-light .navbar-nav .nav-link:hover {
    color           : yellow;
}
.navbar-light .navbar-nav .navItem:focus {
    color           : #e4d8d5;
}
.navbar-light .navbar-nav .navItem:hover {
    color           : white;
}
.navbar-light .navbar-nav .nav-link {
    color           : white;
}
.navbar-light .navbar-nav .navItem{
    color           : #e4d8d5;
}
.navbar-light .navbar-nav .navItem:hover{
    color           : white;
}
.nav-item .nav-link .navItem a:hover{
    color           : #e4d8d5;
}
.navbar-light .navbar-nav .show>.nav-link {
    color           : #f769ad;
}
.navbar-nav .dropdown-menu {
    position        : static;
    float           : none;
    width           : 200px;
    margin          : 0 auto;
}
.showMenu{
    background-color: #7acafb;
    text-align      : center;
}
.showMenuNight{
    background-color:gray;
}
.navbar-nav .nav-item .dropdown{
    z-index         : 1;
}
button:focus{
    outline         : none;
}
</style>
