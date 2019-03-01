<template>
<header>
    <nav class="navbar navbar-expand-lg navbar-light" :style="{backgroundColor: headBgColor, opacity: '0.7', textAlign: 'center'}" >
        <strong><a :style="{color: headTextColor, fontSize: '25px'}" class="navbar-brand" href="#">梁酱的新窝</a></strong>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
            <li class="nav-item">
                <router-link :style="{color: headTextColor, fontWeight: '500'}" :to="{name:'home'}" class="nav-item nav-link" href="#">首页 <span class="sr-only">(current)</span></router-link>
            </li>
            <li class="nav-item">
                <router-link :style="{color: headTextColor, fontWeight: '500'}" :to="{name:'about'}" class="nav-item nav-link" href="#">关于 <span class="sr-only">(current)</span></router-link>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                主题切换
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" :style="{backgroundColor: '#3bb1f5'}">
                <!-- <a class="dropdown-item" href="#" @mouseover="mouseOver" 
        	@mouseleave="mouseLeave" :style="active">Action</a> -->
                <a class="dropdown-item" href="#">白天</a>
                <a class="dropdown-item" href="#">黑夜</a>
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
            active: ''
        }
    },
    methods: {
        mouseOver: function(){
            this.active = 'background-color: red';
        },
        mouseLeave: function () {
            this.active = '';
        },
    }
}
</script>

<style scoped>
/* .dropdown-menu .dropdown-item:hover{
    background-color: red;
} */
</style>
