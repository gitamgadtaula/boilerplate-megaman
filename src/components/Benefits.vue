<template>
    <div class="benefits">
        <div class="container">
            <h2>WHY HOLD MEGAMAN TOKEN (MEGA)</h2>
            <div class="row vgap justify-content-center">

                <div class="col-12 col-md-6 col-lg-4">

                    <div class="features">

                        <div class="icon p-15">
                            <img src="../assets/images/community.svg" alt="community">
                        </div>

                        <div class="title">
                        <h4>Community owned</h4>
                        </div>

                        <div class="text">
                            Upon tokenomics optimization, ownership was renounced, leaving the project for the community to creatively take over.
                        </div>

                        <div class="action" v-b-modal.community_owned>
                            WHY IS THIS GOOD?
                        </div>

                    </div>
                </div>

                <div class="col-12 col-md-6 col-lg-4">

                    <div class="features">

                        <div class="icon p-15">
                            <img src="../assets/images/rewards.svg" alt="reward">
                        </div>

                        <div class="title">
                        <h4>Earn Passive Rewards</h4>
                        </div>

                        <div class="text">
                            Holders earn 5% reflection back on each transaction which incentivizes loyalty! Build your stash just by "hodling"...
                        </div>

                        <div class="action" v-b-modal.passive_rewards>
                            HOW DOES THIS WORK?
                        </div>
                        
                    </div>
                </div>

                <div class="col-12 col-md-6 col-lg-4">

                    <div class="features">

                        <div class="icon p-15">
                            <img src="../assets/images/game.svg" alt="game">
                        </div>

                        <div class="title">
                        <h4>Gamification</h4>
                        </div>

                        <div class="text">
                            Get the chance to own and play with the very first MegaBaby iNFT, which can be modified and evolved over time to add to the overall value.
                        </div>

                        <div class="action" v-b-modal.megababy>
                            WHAT IS THIS?
                        </div>
                        
                    </div>
                </div>

                <div class="col-12 col-md-6 col-lg-4">

                    <div class="features">

                        <div class="icon p-15">
                            <img src="../assets/images/security.svg" alt="security">
                        </div>

                        <div class="title">
                        <h4>Locked Liquidity</h4>
                        </div>

                        <div class="text">
                            At the time of renounced ownership, Liquidity was locked forever, stopping any possible rug pulls. This instills confidence in investors.
                        </div>

                        <!-- <div class="action">
                        </div> -->
                        
                    </div>
                </div>

                <div class="col-12 col-md-6 col-lg-4">

                    <div class="features">

                        <div class="icon p-15">
                            <img src="../assets/images/fire.svg" alt="fire">
                        </div>

                        <div class="title">
                        <h4>LP Injections</h4>
                        </div>

                        <div class="text">
                            All merch is considered fan-based art and not for profit. Any merch proceeds or transactions as a result of interaction with the iNFTs will be added into the liquidity and burned forever.
                        </div>

                        <div class="action" v-b-modal.lp_injections>
                            LEARN MORE
                        </div>
                        
                    </div>
                </div>

                <div class="col-12 col-md-6 col-lg-4">

                    <div class="features">

                        <div class="icon p-15">
                            <img src="../assets/images/layer.svg" alt="layer">
                        </div>

                        <div class="title">
                        <h4>Automatic LP</h4>
                        </div>

                        <div class="text">
                            With each transaction, a 5% fee goes to the Liquidity Pool. Increasing the LP will help stabilize the overall token as it grows.
                        </div>

                        <!-- <div class="action">
                        </div> -->
                        
                    </div>
                </div>

            </div>
        </div>
        <benefits-modal></benefits-modal>
    </div>
</template>

<script>
import BenefitsModal from "./BenefitsModal.vue"
export default {
    components:{ BenefitsModal}
}
</script>
<style scoped>
@import url("../assets/css/style-benefits.css");
</style>