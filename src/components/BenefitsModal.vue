<template>
<div>
    <b-modal id="community_owned" size="lg" ok-only ok-title="Close" ok-variant="secondary" title="Community Owned">
        <div class="content">
            <p>Renouncing ownership avoids any possible manipulation by the owner, thus, preventing future revisions in the contract. What is in the contract always remains in the contract. It is up to the community to take up the charge, bringing their creative vision to success.</p>
            <p>
            You can verify the ownership is renounced by viewing the <a href="https://bscscan.com/token/0x3d86875413a7d2a1fba4742f7c8f5ac1c19bcd9e#readContract">contract</a> and seeing the owner is now set to 0x0000000000000000000000000000000000000000, which is a black hole equivalent (an account no one has access to).
        </p>
        </div>

    </b-modal>

    <b-modal id="passive_rewards" size="lg" ok-only ok-title="Close" ok-variant="secondary" title="Static Rewards">
        <div class="content">
           <p>Each time a <a href="https://bscscan.com/token/0x6eb8cbd709e0726aa7dd67f97aaefc478980c35c"> transaction</a> occurs, there is a 5% fee which is split up among MegaMan Token holders proportionally to their current holdings. Your additional tokens will automatically show up in your wallet, depending on where your wallet resides. Cha-ching!
        </p>
        </div>

    </b-modal>

    <b-modal id="megababy" size="lg" ok-only ok-title="Close" ok-variant="secondary" title="MegaBaby iNFT">
        <div class="content">
           <p>An NFT is a "Non Fungible Token" that exists as a smart contract on a block-chain. NFTs can be used to represent items such as photos, videos, audio, and other types of digital files. Each NFT is unique in its own right, and they can be owned by people who hold them in a smart-wallet.</p>
        <p>
            So, what is an iNFT, and what makes it so special?<br />
            An iNFT is an interactive NFT concept where the NFT you own can be modified and upgraded to add more value.<br /><br />

            The MegaBaby iNFT will allow you to:
        </p>
            <ul class="ml-4">
                <li>Feed him when he's hungry</li>
                <li>Play with him he's bored</li>
                <li>Care for him when he's sick</li>
                <li>Evolve him as he ages</li>
            </ul>

            As the MegaBaby evolves, there will be a chance to own rarer and rarer character fan art... and ultimately allowing you to sell or trade your iNFT MegaBaby on the open iNFT marketplace!
            <p></p>

        </div>

    </b-modal>

    <b-modal id="lp_injections" size="lg" ok-only ok-title="Close" ok-variant="secondary" title="LP Injections">
        <div class="content">
           <p>
               With MegaMan having such a strong following around the world, it is inevitable that people will want to get their hands on limited edition merchandise made by our team of creative artists! All merch will be purchased using the MegaMan Tokens, which will increase the value of MEGA. Each transaction will be added into the liquidity and burned forever!
        </p>
        <p>The development team will not take any direct profits from merch sales or iNFT transactions.</p>
        </div>

    </b-modal>
    </div>
</template>
<style>
.modal-content{
    background-color: #282535 !important;
}
.modal-header{
    padding: 1.5625rem 1.875rem !important;
    border-color: #3a3747 !important;
    color: #fff;
}
.modal-header .close{
    /* opacity:1; */
    padding: 1.9375rem 1.875rem;
    margin: -1.5625rem -1.875rem -1.5625rem 0;
    font-size:22px;
    font-weight:300;
    color: #827f92;
    transition: color .15s;
}
.modal-header .close:hover{
    color:#fff;
}
.modal-body{
    padding: 1.5625rem 1.875rem !important;
    color: #b9b7b0;
}
.modal-footer{
    padding: 1.875rem !important;
    border-color: #3a3747 !important;
}
.modal-footer .btn{
    font-size:0.75em;
    color:#fff;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    z-index: 0;
    border: 0
}
.modal-footer .btn-secondary{
    padding: 10px 25px;
    background-color: #2a2838;
    transform: skew(-3deg);
}
</style>