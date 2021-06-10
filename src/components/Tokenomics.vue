<template>
    <div class="container-fluid">
        
        <div class="container">
            <div class="transaction">
            <div class="row" >
               <div class="col-12 col-sm-12 col-md-12 col-lg-5">
                
                   <div class="number">
                       {{transaction.price}}
                   </div>
                   <div class="title">
                       Price
                   </div>
                 
                   </div> 
                   <div class="col-12 col-sm-6 col-md-3 col-lg-2">
                
                   <div class="number">
                       {{transaction.holders}}
                   </div>
                   <div class="title">
                       HOLDERS
                   </div>
                 
                   </div>
                   <div class="col-12 col-sm-6 col-md-3 col-lg-2">
                
                   <div class="number">
                       {{transaction.transfers}}
                   </div>
                   <div class="title">
                       TRANSFERS
                   </div>
                 
                   </div> 
                   <div class="col-12 col-sm-12 col-md-6 col-lg-3">
                
                   <div class="number">
                       {{transaction.market_cap}}
                   </div>
                   <div class="title">
                       MARKET CAP(USD)
                   </div>
                 
                   </div>  
                
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                <div class="update">
                    -- Updated Every 15 Minutes On Refresh --
                </div>
            </div>
            </div>
            
            <div class="transaction-detail">
                    <div class="title">
                        <div class="tokenomics-logo">
                            <img src="../assets/images/logo.svg">
                        </div>
                    <div class="heading">
                        <h5>TOKENOMICS</h5>
                        <span>MegaMan Token (MEGA)</span>
                    </div>
                    <div class="ownership">
                    <span>Ownership Renounced</span>
                </div>
                    </div>
                
                <div class="details">
    
                       <b-row>
                           <b-col> 
                               <ul>
                                   <li v-for="(item,index) in transaction_amount" :key="index">
                                    
                                   <div><b-icon icon="circle" class="mr-2" font-scale="0.9"></b-icon>{{item.title}}:</div>
                                   <div style="text-align:right;">{{item.amount}}</div>
                                   </li>
                               </ul>
                            
                            </b-col>
                       </b-row>

                        <b-row>
                           <b-col>
                                <ul>
                                   <li v-for="(item,index) in transaction_percentage" :key="index"> 
                                   
                                   <div> <b-icon icon="circle" class="mr-2" font-scale="0.9"></b-icon>{{item.title}}:</div>
                                   <div style="text-align:right;">{{item.percentage}}%</div>
                                   </li>
                               </ul>
                           </b-col>  
                        </b-row>

                           
                   </div>
                
                <div class="autolocking" >
                    <p class='mb-0'>100% Decentralization<span class="highlight">, Autolocking Liquidity,</span> Yield Generation Protocol, LP Injections</p>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            transaction:{price:"0.000000000397730", holders:"430", transfers:"1,587", market_cap:"$3,9777,380"},
            transaction_amount:[
                {title:"Max Supply", amount:"1,000,000,000,000,000"},
                {title:"Dev/Marketing Wallet", amount:"40,286,363,768,740"},
                {title:"Max Trade Limit", amount:"5,000,000,000,000"}
            ],
             transaction_percentage:[
                {title:"Transaction Fee", percentage:"10"},
                {title:"Automatic LP", percentage:"5"},
                {title:"Passive Rewards", percentage:"5"}
            ],
        }
    }
}
</script>
<style scoped>
@import "../assets/css/style-tokenomics.css";
</style>