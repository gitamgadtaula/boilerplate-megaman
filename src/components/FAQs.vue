<template>
  <div class="faqs_container">
    <div class="top-banner">
    <div class="banner-bg"></div>
      <div class="banner-bg">
        <img src="../assets/images/bg-banner-3.jpg" />
      </div>
      <div class="banner-content">
        <div class="container">
          <h2>FAQs</h2>
        </div>
      </div>
    </div>
    <div class="faqs-accordion">
    <div class="container">
      <div class="accordion">

        <b-card no-body class="mb-3">
          <b-card-header header-tag="header" class="p-0" role="tab">
            <b-button block v-b-toggle.accordion-1 
              >HOW DO I BUY MEGAMAN BSC? 
              <strong v-if="isVisible" aria-hidden="true" class="ml-auto"><b-icon icon="chevron-right"></b-icon></strong>
              <strong v-else aria-hidden="true" class="ml-auto"><b-icon icon="chevron-down"></b-icon></strong>
              </b-button
            >
          </b-card-header>
          <b-collapse
            id="accordion-1"
            accordion="my-accordion"
            role="tabpanel"
          >
            <b-card-body>
              <b-card-text
                >
                <ol>
                    <li>Download <a href="#">Trust Wallet </a> your mobile device</li>
                    <li><a href="#">Purchase some Smart Chain (BNB)</a></li>
                    <li>Go to the "DApps" at the bottom, and then go to PancakeSwap. iPhone users may need to enable the trust browser.</li>
                    <li>Click "Select a currency" and enter this contract address: 0x3d86875413a7d2a1fba4742f7c8f5ac1c19bcd9e</li>
                    <li>It should populate with MegaMan</li>
                    <li>Click on the slider icon <b-icon icon="sliders" font-size="12px"></b-icon> (to the right of the Exchange title) and set slippage tolerance to "8%"</li>
                    <li>Input how much you want</li>
                    <li>Confirm</li>
                </ol>
                <p>You are now a proud owner of MegaMan Token! Make sure you add a custom token to your Trust Wallet home screen in order to see your tokens.</p>
                </b-card-text
              >
            </b-card-body>
          </b-collapse>
        </b-card>

    <b-card no-body class="mb-3">
          <b-card-header header-tag="header" class="p-0" role="tab">
            <b-button block v-b-toggle.accordion-2 
              >WHAT SLIPPAGE SHOULD I USE 
              <strong v-if="isVisible" aria-hidden="true" class="ml-auto"><b-icon icon="chevron-right"></b-icon></strong>
              <strong v-else aria-hidden="true" class="ml-auto"><b-icon icon="chevron-down"></b-icon></strong>
              </b-button
            >
          </b-card-header>
          <b-collapse
            id="accordion-2"
            accordion="my-accordion"
            role="tabpanel"
          >
            <b-card-body>
              <b-card-text
                >
                <p>Use 11% slippage when you buy MegaMan Token as there is a 5% Automatic LP fee and a 5% Redistribution back to holders fee</p>
                </b-card-text
              >
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-3">
          <b-card-header header-tag="header" class="p-0" role="tab">
            <b-button block v-b-toggle.accordion-3 
              >WHO ARE YOU?</b-button
            >
          </b-card-header>
          <b-collapse
            id="accordion-3"
            accordion="my-accordion"
            role="tabpanel"
          >
            <b-card-body>
              <b-card-text
                >
                <p>We, like you, are just dedicated fans. Our team has years of combined experience developing block-chain & web-based applications. You can view the lead developer's social media profile <span class="tweet"><b-icon icon="twitter"></b-icon></span> and get to know him (Crypto Batman) in the <a href="#"> Telegram Group.</a></p>
                </b-card-text
              >
            </b-card-body>
          </b-collapse>
        </b-card>

         <b-card no-body class="mb-3">
          <b-card-header header-tag="header" class="p-0" role="tab">
            <b-button block v-b-toggle.accordion-4 
              >WHAT IS AN INFT?</b-button
            >
          </b-card-header>
          <b-collapse
            id="accordion-4"
            accordion="my-accordion"
            role="tabpanel"
          >
            <b-card-body>
              <b-card-text
                >
                <p>An NFT is a "Non Fungible Token" that exists as a smart contract on a block-chain. NFTs can be used to represent items such as photos, videos, audio, and other types of digital files. Each NFT is unique in its own right, and they can be owned by people who hold them in a smart-wallet.</p>
                <p>So, what is an iNFT, and what makes it so special?<br/>
                An iNFT is an interactive NFT concept where the NFT you own can be modified and upgraded to add more value.</p>
                </b-card-text
              >
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-3">
          <b-card-header header-tag="header" class="p-0" role="tab">
            <b-button block v-b-toggle.accordion-5 
              >DO YOU HAVE A MARKETING BLURB I CAN SHARE?</b-button
            >
          </b-card-header>
          <b-collapse
            id="accordion-5"
            accordion="my-accordion"
            role="tabpanel"
          >
            <b-card-body>
              <b-card-text
                >
                <p>Coming Soon</p>
                </b-card-text
              >
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-3">
          <b-card-header header-tag="header" class="p-0" role="tab">
            <b-button block v-b-toggle.accordion-6 
              >HOW CAN I CONTACT YOU?</b-button
            >
          </b-card-header>
          <b-collapse
            id="accordion-6"
            accordion="my-accordion"
            role="tabpanel"
          >
            <b-card-body>
              <b-card-text
                >
                <p>You can reach us through any of our social media channels. The lead developer goes by "Crypto Batman" in Telegram.</p>
                </b-card-text
              >
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-3">
          <b-card-header header-tag="header" class="p-0" role="tab">
            <b-button block v-b-toggle.accordion-7 
              >SOME OF YOUR WEBSITE DOESN'T LOOK LIKE MEGAMAN...</b-button
            >
          </b-card-header>
          <b-collapse
            id="accordion-7"
            accordion="my-accordion"
            role="tabpanel"
          >
            <b-card-body>
              <b-card-text
                >
                <p>Yes, that is true. Even though we are huge MegaMan fans, we also love games in general... we've been gamers since Wolfenstein 3D and Mario Bros. Our site envisions the MegaMan Universe in a more realistic and gritty environment. Just like this token, we like to think outside the box and decided to incorporate many different genres into the site.</p>
                </b-card-text
              >
            </b-card-body>
          </b-collapse>
        </b-card>



      </div>
    </div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            isVisible:true,
        }
    }
}
</script>
<style scoped>
@import "../assets/css/faqs.css";
</style>