<template>
    <div class="start-crypto">
        <div class="start-crypto-bg">
            <img src="../assets/images/banner.png">
        </div>

        <div class="container">
            <h5>start your cryptocurrency journey with</h5>
            <img style="max-width:80%" src="../assets/images/logo-name.svg">
            
            <div class="action_purchase">
                <b-button class="purchase" href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x3d86875413a7d2a1fba4742f7c8f5ac1c19bcd9e">PURCHASE ON PANCAKESWAP <span><img class="emoji" src="../assets/images/emoji.svg"> </span></b-button>
            </div>
        </div>
    </div>
</template>
<style scoped>
.start-crypto{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width:100%;
    overflow:hidden;
    min-height: 650px;
}
.start-crypto-bg{
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-size:cover;
    overflow: hidden;
    z-index: -100;
    background-color: #1f1d29;
}
.start-crypto-bg img{
    opacity: 0.5;
    position: absolute;
    object-fit: cover;
    top: 0px;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}
.start-crypto h5{
    font-size: 37px;
    font-weight: 500;
    font-family: 'Futura PT';
    color:#fff;
    text-transform: uppercase;
}
.action_purchase{
    margin-top:2rem;
}
.action_purchase .purchase{
    font-family: 'Futura PT';
    font-size:14px;
    font-weight: 600;
    letter-spacing: 0.07em;
    color:#fff;
    border-radius: 3px;
    padding: 13.5px 50px 13.5px 25px ;
    border:0;
    position: relative;

}
.emoji{
    max-width: 6%;
    position: absolute;
    top: 12px;
    right: 25px;
}
.purchase:hover{
    background: #fff !important;
}
.purchase:focus{
    box-shadow: unset !important;
    color:#d31c3e !important;
}
</style>