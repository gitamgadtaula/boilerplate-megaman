<template>
    
        <b-navbar toggleable="lg" >
            <div class="container">
            <b-navbar-brand href="#"><img src="../assets/images/logo.svg" width="72px"><span class="logo_name"><img width="72px" src="../assets/images/logo-name.svg"> </span>
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="nav-body">
                    <b-nav-item href="#">Home</b-nav-item>
                    <b-nav-item href="#">Tokenomics</b-nav-item>
                    <b-nav-item href="#">Benefits</b-nav-item>
                    <b-nav-item href="#">iNFT Gamification</b-nav-item>
                    <b-nav-item href="#">Roadmap</b-nav-item>
                  
                    <b-nav-item-dropdown text="FAQs" right>
                    <b-dropdown-item href="#">How To Buy</b-dropdown-item>
                    <b-dropdown-item href="#">Who Are We?</b-dropdown-item>
                    <b-dropdown-item href="#">Marketing Blurb</b-dropdown-item>
                    <b-dropdown-item href="#">What is An iNFT?</b-dropdown-item> 
                    <b-dropdown-item href="#">Contact Us</b-dropdown-item>

                    </b-nav-item-dropdown>
                </b-navbar-nav>

                <b-navbar-nav class="nav-footer ml-auto">
                    <b-nav-item href="#"><b-icon icon="twitter"></b-icon></b-nav-item>
                    <b-nav-item href="#"><vue-fontawesome icon="paper-plane"></vue-fontawesome></b-nav-item>
                    <b-nav-item href="#"><vue-fontawesome icon="paper-plane"></vue-fontawesome></b-nav-item>
                    <b-nav-item href="#"><vue-fontawesome icon="paper-plane"></vue-fontawesome></b-nav-item>
                    <b-nav-item href="#"><vue-fontawesome icon="paper-plane"></vue-fontawesome></b-nav-item>
                </b-navbar-nav>
            </b-collapse>
            </div>
        </b-navbar>
    
</template>
<style scoped>
.navbar::before{
    content:"";
    position: absolute;
    display: block;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(40, 37, 53, 0.9);
    z-index: -1;
}
.navbar{
    position: fixed;
    min-height: 100px;
    z-index: 999;
    opacity: 0.97;
    width: 100%;
}

</style>