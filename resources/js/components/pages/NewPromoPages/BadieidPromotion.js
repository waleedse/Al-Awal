import React from 'react';
import "./components/newPromoPage.css"
const BadieidPromotion = () => {
    return (
        <div>
           <div className="newPromoBg">
               <div className='container'>
            <div className='row'>
            <div className='col-md-6'>
               <div className='title'><span className='titleLg'>Al Awal Markets </span><br/>
     <span className="perText"> Eid Gift Offer </span> </div>
   <div className='title title2'>for all its clients</div>
   <button onClick={()=>{ window.open('https://my.alawalmarkets.net/register','_self')}} type="button" className='btnRegister'>REGISTER NOW</button>
          <a href="/badi-eid-promotion-terms"> <div className='text'>*Terms and conditions apply</div></a></div>

          <div className='col-md-6'>
                <img src='/assets/images/promotionpagebanner.svg' style={{width:'100%'}} />
            </div>
            </div>

           </div>
           </div>

<div className='basicRow promoUpto'>

   <div className='mainFlex'> <div className="contentSec">
        <div className='title'>Start Trading Now with Al Awal Markets to win exclusive BariEid Gifts.</div>
        <h3>Eligibility Criteria</h3>
        <div className='point'><img src="/assets/images/promoDone.png" className="pointDone" ></img> <span className='text'>
        All clients who sign up with Al Awal Marketsand full fill the following terms and conditionswill be eligible for Bari EidGift Offer. </span></div>
        <div className='point'><img src="/assets/images/promoDone.png" className="pointDone"></img> <span className='text'>
        During the offer period clients who deposit at least $100 in Live Trading Account.
        </span></div>
        <div className='point'><img src="/assets/images/promoDone.png" className="pointDone"></img> <span className='text'>
        During the offer period, clients need to execute at least 2 qualified trades.After that the gifts will be given based on the number of lots traded as per the table below
        </span></div>
        <div className='point'><img src="/assets/images/promoDone.png" className="pointDone"></img> <span className='text'>
        Bari Eid Gift Offer is available on all type of Live Trading Accountsat Al Awal Markets
        </span></div>

 <div className='point ml-4'>
    <a href="/badi-eid-promotion-terms" style={{fontSize:'14px'}} className="col-offset-2 " > *Terms and conditions apply</a>
     </div>

    </div>
    <div className="imgSec">

        <img src="/assets/images/promotionsecondbox.svg" alt="promoUpto" className='img'></img>
    </div></div>
</div>


          <div className='container text-center'>
                 <h2 className='text-center'>Client Reward List</h2>

                    <table className='table table-hover table-stripped text-center'>
                        <tbody>
                            <tr><td>5</td><td>Gift Box including T-Shirt, Wall Clock, Pen, Mug</td></tr>
                            <tr><td>10</td><td>Air Pods</td></tr>
                            <tr><td>15</td><td>Mibro Lite Smart Watch or similar</td></tr>
                            <tr><td>20</td><td>Mobile Phone worth Samsung Galaxy O01 core or similar</td></tr>
                            <tr><td>25</td><td>Mobile Galaxy A 12 Samsung or similar</td></tr>
                            <tr><td>30</td><td>Tablet A Samsung or similar</td></tr>
                            <tr><td>50</td><td>Road Prince 70 or similar</td></tr>
                            <tr><td>75</td><td>HP Laptop Chrome Book or similar</td></tr>
                            <tr><td>100</td><td>Honda 70 or similar</td></tr>
                            <tr><td>150</td><td>Samsung 55 inchSmart TV or similar</td></tr>
                            <tr><td>200</td><td>Honda 125 or similar</td></tr>
                            <tr><td>250</td><td>Suzuki 150 or similar</td></tr>
                            <tr><td>500</td><td>Iphone pro max 256 GB or similar</td></tr>
                            <tr><td>1,000</td><td>Dubai Trip</td></tr>
                            <tr><td>6,000</td><td>Suzuki Cultus or similar</td></tr>

                        </tbody>
                    </table>
                 </div>
        </div>
    );
};

export default BadieidPromotion;
