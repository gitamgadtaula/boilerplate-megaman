<template>
<div class="preloader">
    <div class="preloader-bg"></div>
    <div class="preloader-hide">
        <div class="preloader-content">
            <div class="preloader-title">
                <img src="../assets/images/loading-logo.svg">
            </div>
            <div class="preloader-progress">
                <div style="transition-duration: 1000ms; width: 100%;"></div>
            </div>
        </div>
        
    </div>
    </div>
</template>
<style >
    .preloader-hide{
        /* visibility: hidden; */
        /* opacity: 0; */
    }
    .preloader {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* -o-transition: opacity .5s ease-in-out, visibility .5s ease-in-out;
    transition: opacity .5s ease-in-out, visibility .5s ease-in-out;
    -webkit-animation: preloader-show-content 1s ease-in-out;
    animation: preloader-show-content 1s ease-in-out; */
    z-index: 9999;
}
.preloader-title{
    font-size: 3.875rem;
}
.preloader-title img{
    max-width: 50%;
}
.preloader-progress {
    position: absolute;
    display: block;
    bottom: 10%;
    /* top:0; */
    left: 50%;
    width: 800px;
    min-width: 240px;
    max-width: 60%;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.15);
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
}
.preloader-progress div{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 80px;
    background-color: #fff;
    transform: translateX(-50%);
}
.preloader-bg{
    content: "";
    position: fixed;
    display: block;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #282535;
    z-index: -1;
}
</style>