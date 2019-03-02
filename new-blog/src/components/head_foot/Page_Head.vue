<template>
<header>
    <nav class="navbar navbar-expand-lg navbar-light nihao" >
        <strong><a :style="{fontSize: '25px',padding: '0'}" class="navbar-brand" href="#">梁酱的新窝</a></strong>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
            <li class="nav-item">
                <router-link :style="{ fontWeight: '500'}" :to="{name:'home'}" class="nav-item " href="#">首页 <span class="sr-only">(current)</span></router-link>
            </li>
            <li class="nav-item">
                <router-link :style="{ fontWeight: '500'}" :to="{name:'about'}" class="nav-item " href="#">关于 <span class="sr-only">(current)</span></router-link>
            </li>
            <li class="nav-item dropdown">
                <a class=" dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                主题切换
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" :style="{backgroundColor: '#3bb1f5', textAlign: 'center'}">
                <!-- <a class="dropdown-item" href="#" @mouseover="mouseOver" 
        	@mouseleave="mouseLeave" :style="active">Action</a> -->
                <button class="dropdown-item" @click="changeWhite" >白天</button>
                <button class="dropdown-item" @click="changeBlack" >黑夜</button>
                </div>
            </li>
            </ul>
        </div>
    </nav>
</header>
</template>

<script>
export default {
    name: 'Page_Head',
    data() {
        return {
            headBgColor: this.globalColor.HeadBgColorMorning,
            headTextColor: this.globalColor.HeadTextColorMorning,
            // active: ''
            isApple: false
        }
    },
    methods: {
        // mouseOver: function(){
        //     this.active = 'background-color: red';
        // },
        // mouseLeave: function () {
        //     this.active = '';
        // },
        changeWhite(){
            this.isApple = false
            localStorage.setItem("theam",'moring')
            console.log(localStorage.getItem("theam"),'head')
            this.$emit('changeTheam',this.isApple)
        },
        changeBlack(){
            this.isApple = true
            localStorage.setItem("theam",'night')
            console.log(localStorage.getItem("theam"),'head')
            this.$emit('changeTheam',this.isApple)
        }
    },
    computed: {
        
    }
}
</script>

<style scoped>
/* .dropdown-menu .dropdown-item:hover{
    background-color: red;
} */
.nihao{
    background-color:lightskyblue;
    opacity: 0.7; 
    text-align: center;
}
.nihao a{
    color: white;
    display: block;
    padding: .5rem 1rem;
}
</style>
