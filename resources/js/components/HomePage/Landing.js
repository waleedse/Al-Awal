import React, { Component } from 'react';

class Landing extends Component {
    render() {
        return (
            <div>
                {/* slideshow content begin */}
                <div className="uk-section uk-padding-remove-vertical">
                    <div className="uk-light in-slideshow uk-background-cover uk-background-top-center" style={{ backgroundImage: 'url(img/in-liquid-slide-bg.png)' }} data-uk-slideshow>
                        <ul className="uk-slideshow-items" style={{height:'780px'}}>
                            <li>
                                <div className="uk-container">
                                    <div className="uk-grid-medium" data-uk-grid>
                                        <div className="uk-width-1-2@s">
                                            <div className="uk-overlay mt-5">
                                                <h1>World's leading Most Trusted <br/> Forex Broker.</h1>
                                                <p className="uk-text-lead uk-visible@m">Trade forex, commodities, synthetic and stock indices from a single account</p>
                                                <a href="https://client.alawalcapital.co.uk/#/auth/login" className="uk-button uk-button-default uk-border-rounded  mr-2">Login</a>
                                                <a href="https://client.alawalcapital.co.uk/#/auth/signup" class="uk-button uk-button-default uk-border-rounded">Create Account</a>
                                            </div>
                                        </div>
                                        <div className="uk-width-1-2@s">
                                            <img className="in-slide-img" src="/img/2.svg" data-src="/img/2.svg" alt="image-slide" width={500} height={400}  />
                                        </div>
                                    </div>
                                </div>
                            </li>
                            {/* <li>
                                <div className="uk-container">
                                    <div className="uk-grid-medium" data-uk-grid>
                                        <div className="uk-width-1-2@s">
                                            <div className="uk-overlay mt-5">
                                                <h1>Award-winning trading platforms.</h1>
                                                <p className="uk-text-lead uk-visible@m">Explore endless trading opportunities with tight spreads and no commission</p>
                                                <a href="#" className="uk-button uk-button-default uk-border-rounded uk-visible@s">Login</a>
                                                <a href="#" class="uk-button uk-button-primary uk-border-rounded">Create Account</a>
                                            </div>
                                        </div>
                                        <div className="uk-width-1-2@s">
                                            <img className="in-slide-img" src="/img/3.svg" data-src="/img/3.svg" alt="image-slide" width={500} height={400}  />
                                        </div>
                                    </div>
                                </div>
                            </li> */}
                        </ul>
                        <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-previous data-uk-slideshow-item="previous" />
                        <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-next data-uk-slideshow-item="next" />
                        {/* <div className="uk-section uk-padding-remove-vertical in-slideshow-features uk-visible@m">
                            <div className="uk-container">
                                <div className="uk-grid uk-flex uk-flex-center">
                                    <div className="uk-width-5-6@m pt-5">
                                        <div className="uk-grid uk-child-width-1-6@m uk-text-center" data-uk-grid>
                                            <div className="uk-width-1-1">
                                                <p className="uk-text-lead">Why Trade with Al Awal Markets</p>
                                            </div>
                                            <div className="slide-icons-1">
                                                <img src="img/in-lazy.gif" data-src="img/in-liquid-icon-5.svg" alt="sample-icon" width={48} height={48} data-uk-img />
                                                <a className="uk-button uk-button-text uk-align-center" href="#">Swap Free
Account</a>
                                            </div>
                                            <div className="slide-icons-1">
                                                <img src="img/in-lazy.gif" data-src="img/in-liquid-icon-6.svg" alt="sample-icon" width={48} height={48} data-uk-img />
                                                <a className="uk-button uk-button-text uk-align-center" href="#"><span>24/5 multilingual </span>
customer support<i className="fas fa-angle-right uk-margin-small-left" /></a>
                                            </div>
                                            <div className="slide-icons-1">
                                                <img src="img/in-lazy.gif" data-src="img/in-liquid-icon-7.svg" alt="sample-icon" width={48} height={48} data-uk-img />
                                                <a className="uk-button uk-button-text uk-align-center" href="#">Crypto<i className="fas fa-angle-right uk-margin-small-left" /></a>
                                            </div>
                                            <div className="slide-icons-1">
                                                <img src="img/in-lazy.gif" data-src="img/in-liquid-icon-8.svg" alt="sample-icon" width={48} height={48} data-uk-img />
                                                <a className="uk-button uk-button-text uk-align-center" href="#">Shares<i className="fas fa-angle-right uk-margin-small-left" /></a>
                                            </div>
                                            <div className="slide-icons-1">
                                                <img src="img/in-lazy.gif" data-src="img/in-liquid-icon-9.svg" alt="sample-icon" width={48} height={48} data-uk-img />
                                                <a className="uk-button uk-button-text uk-align-center" href="#">Commodities<i className="fas fa-angle-right uk-margin-small-left" /></a>
                                            </div>
                                            <div className="slide-icons-1">
                                                <img src="img/in-lazy.gif" data-src="img/in-liquid-icon-10.svg" alt="sample-icon" width={48} height={48} data-uk-img />
                                                <a className="uk-button uk-button-text uk-align-center" href="#">All Markets<i className="fas fa-angle-right uk-margin-small-left" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                         <div className="container-fluid">
              <div className="row tradeWithRow ">
                <div className="col-12 ">
                  <h3 className="tradeWithTitle">Why Trade with Al Awal Markets </h3>
                  {/* <p className="tradeWithText">
                  Trade multiple financial products with the most reliable Forex Broker
                  </p> */}
                </div>
              </div>
            </div>
            <div className="container-fluid">
              <div className="row tradeWithFRow pb-4">
                <div className="col-lg-2 col-md-4 col-sm-2 feature_div">
                  <div className="tradeFeatureBox">
                    <div className="featureImageCircle">
                    <img src="https://img.icons8.com/fluency/38/000000/swap.png"/>
                    </div>
                    <h2 className="featureTitle mt-1">Swap Free <br/>Account</h2>
                    {/* <p className="featureText">
                    Seamless interest-free trading.
*Swap Free Accounts are available to all our clients

                    </p> */}
                  </div>
                </div>

                <div className="col-lg-2 col-md-4 col-sm-2 feature_div">
                  <div className="tradeFeatureBox">
                    <div className="featureImageCircle">
                    <img src="https://img.icons8.com/external-sbts2018-flat-sbts2018/40/4a90e2/external-medical-support-customer-support-sbts2018-flat-sbts2018.png"/>
                                        </div>
                    <h2 className="featureTitle mt-1">24/5 multilingual
 <br/>    customer support  </h2>
                    {/* <p className="featureText">
                    Offers lowest trading cost in the market (0.0 Pips)
to earn highest profits possible

                    </p> */}
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-2 feature_div ">
                  <div className="tradeFeatureBox">
                    <div className="featureImageCircle">
                    <img src="https://img.icons8.com/external-itim2101-flat-itim2101/40/4a90e2/external-secure-payment-mobile-payment-itim2101-flat-itim2101-1.png"/>
                    </div>
                    <h2 className="featureTitle mt-1">Secure   <br/> Trading  </h2>
                    {/* <p className="featureText">
                    Access to a larger portion of financial market
& increase potential profits

                    </p> */}
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-2 feature_div">
                  <div className="tradeFeatureBox">
                    <div className="featureImageCircle">
                    <img src="https://img.icons8.com/external-flat-geotatah/40/4a90e2/external-fast-gig-economy-flat-flat-geotatah.png"/>
                    </div>
                    <h2 className="featureTitle mt-1">
                    Fast
                    <br/>Execution
                    </h2>
                    {/* <p className="featureText">
                    Secure trading with NBP allows you to
not lose more than deposited

                    </p> */}
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-2 feature_div">
                  <div className="tradeFeatureBox">
                    <div className="featureImageCircle">
                    <img src="https://img.icons8.com/pastel-glyph/40/ffffff/lowest-price--v2.png"/>
                    </div>
                    <h2 className="featureTitle mt-1">
                      Lowest <br /> Spread
                    </h2>
                    {/* <p className="featureText">
                    Dedicated customer support team available
to assist you via various contact channels

                    </p> */}
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-2 feature_div">
                  <div className="tradeFeatureBox">
                    <div className="featureImageCircle">
                    <img src="https://img.icons8.com/officel/40/4a90e2/data-protection.png"/>
                    </div>
                    <h2 className="featureTitle mt-1">
                      Negative Balance <br /> Protection
                    </h2>
                    {/* <p className="featureText">
                    Dedicated customer support team available
to assist you via various contact channels

                    </p> */}
                  </div>
                </div>
              </div></div>
                    </div>
                </div>
            <div className="uk-section uk-section-secondary in-liquid-1">
  <div className="uk-container uk-light">
    <div className="uk-grid uk-flex uk-flex-middle">
      <div className="uk-width-1-2@m">
        <h2>Save time. Get <span className="in-highlight">higher return</span>. Multiply wealth.</h2>
      </div>
      <div className="uk-width-1-2@m">
        <a className="uk-button uk-button-default uk-border-rounded uk-align-right@m" href="#">Find out more<i className="fas fa-angle-right uk-margin-small-left" /></a>
      </div>
    </div>
    <div className="uk-child-width-1-3@m" data-uk-grid>
      <div>
        <div className="uk-card uk-card-secondary uk-border-rounded uk-cover-container" style={{height:'485px'}}>
          <div className="uk-card-media-top">
            <img src="/img/5.svg" data-src="img/in-liquid-object-1.svg" alt="sample-image" data-width data-height  />
          </div>
          <div className="uk-card-body">
            <h3>ECN price feed</h3>
            <p>One price for all traders, hedge fund or individual traders. The equality of opportunity creates a level playing field.</p>
          </div>
        </div>
      </div>
      <div>
        <div className="uk-card uk-card-secondary uk-border-rounded uk-cover-container" style={{height:'485px'}}>
          <div className="uk-card-media-top">
            <img src="/img/6.svg" data-src="img/in-liquid-object-2.svg" alt="sample-image" data-width data-height  />
          </div>
          <div className="uk-card-body">
            <h3>Liquidity</h3>
            <p>Our liquidity comes from direct connections to over 20 major liquidity providers. Achieve a fill in 1 click for EUR/USD 200 million notional in the European session.</p>
            {/* We provide institutional liquidity for all clients */}
          </div>
        </div>
      </div>
      <div>
        <div className="uk-card uk-card-secondary uk-border-rounded uk-cover-container" style={{height:'485px'}}>
          <div className="uk-card-media-top">
            <img src="/img/7.svg" data-src="img/in-liquid-object-3.svg" alt="sample-image" data-width data-height  />
          </div>
          <div className="uk-card-body">
            <h3>Automated trading</h3>
            <p>99% quality broker tick data available for free. Advanced back-testing functionality. Assistance with coding of strategies. Our liquidity & spreads optimise your automated trading results.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="uk-section in-liquid-14 py-0">
  <div className="uk-container mt-0 mb-0">
    <div className="uk-grid-large uk-flex uk-flex-middle" data-uk-grid>
      <div className="uk-width-expand@m">
        <h2>A broker you can <span className="in-highlight">Trust</span>.</h2>
        <p>Checkout our minimum qoutes.</p>
        <div className="uk-grid uk-grid-collapse uk-child-width-1-3@m uk-child-width-1-2@s uk-text-center uk-margin-medium-top">
          <div className="uk-tile uk-tile-default">
            <p className="uk-text-lead uk-margin-remove-bottom">EURUSD</p>
            <p className="uk-text-small uk-text-muted uk-margin-remove-top">0.1
</p>
          </div>
          <div className="uk-tile uk-tile-default">
            <p className="uk-text-lead uk-margin-remove-bottom">GBPUSD</p>
            <p className="uk-text-small uk-text-muted uk-margin-remove-top">0.4</p>
          </div>
          <div className="uk-tile uk-tile-default">
            <p className="uk-text-lead uk-margin-remove-bottom">USDJPY</p>
            <p className="uk-text-small uk-text-muted uk-margin-remove-top">0.2</p>
          </div>
          <div className="uk-tile uk-tile-default">
            <p className="uk-text-lead uk-margin-remove-bottom">DAX</p>
            <p className="uk-text-small uk-text-muted uk-margin-remove-top">1</p>
          </div>
          <div className="uk-tile uk-tile-default uk-visible@m">
            <p className="uk-text-lead uk-margin-remove-bottom">XAUUSD</p>
            <p className="uk-text-small uk-text-muted uk-margin-remove-top">0.1</p>
          </div>
          {/* <div className="uk-tile uk-tile-default uk-visible@m">
            <p className="uk-text-lead uk-margin-remove-bottom">2.11M</p>
            <p className="uk-text-small uk-text-muted uk-margin-remove-top">Daily Avg Revenue</p>
          </div> */}
        </div>
        {/* <a className="uk-button uk-button-text uk-border-rounded uk-margin-medium-top" href="#">Asset protection<i className="fas fa-angle-right uk-margin-small-left" /></a>
        <p className="uk-text-small">For additional information view our Investors Relations - <a href="#">clicking here.</a></p> */}
      </div>
      <div className="uk-width-1-2@m">
        <img className="uk-width-1-1 img_sheild"  src="/img/8.svg" data-src="img/in-liquid-object-5.svg" alt="sample-image" data-width data-height data-uk-img />
      </div>
    </div>
  </div>
</div>
<div className="uk-section uk-section-secondary in-liquid-10">
  <div className="uk-container uk-light">
    <div className="uk-grid-medium uk-child-width-1-4@m uk-flex uk-flex-middle" data-uk-grid>
      <div>
        <h2>Account types</h2>
        <p className="uk-text-lead">Explore different Account types to trade on your preferred market.</p>
        <a className="uk-button uk-button-default uk-border-rounded uk-margin-top" href="#">Start trading<i className="fas fa-angle-right uk-margin-small-left" /></a>
      </div>
      <div>
        <div className="uk-card uk-card-secondary uk-card-body uk-border-rounded uk-text-center">
          {/* <img className="uk-margin-small-bottom" src="img/in-lazy.gif" data-src="img/in-liquid-icon-16.svg" alt="wave-award" width={72} height={72} data-uk-img /> */}
          <h3 className="uk-margin-top">Cent Account</h3>
          <p>Spreads Starts From 1 PIP</p>
          <p>Minimum Deposit US$10</p>
          <p>Trade Size 0.01 Lot</p>
          <p>Max Leverage 1:500</p>
          <p>Hedging Allowed</p>
          <p>Zero Commission</p>
          <a class="uk-button uk-button-text uk-align-center" href="#">Open Demo Account<i class="fas fa-angle-right uk-margin-small-left"></i></a>
        </div>
      </div>
      <div>
        <div className="uk-card uk-card-secondary uk-card-body uk-border-rounded uk-text-center">
          {/* <img className="uk-margin-small-bottom" src="img/in-lazy.gif" data-src="img/in-liquid-icon-17.svg" alt="wave-award" width={72} height={72} data-uk-img /> */}
          <h3 className="uk-margin-top">Standard Account</h3>
          <p>Spreads Starts From 1 PIP</p>
          <p>Minimum Deposit US$50</p>
          <p>Trade Size 0.01 Lot</p>
          <p>Max Leverage 1:500</p>
          <p>Hedging Allowed</p>
          <p>Zero Commission</p>
          <a class="uk-button uk-button-text uk-align-center" href="#">Open Demo Account<i class="fas fa-angle-right uk-margin-small-left"></i></a>

        </div>
      </div>
      <div>
        <div className="uk-card uk-card-secondary uk-card-body uk-border-rounded uk-text-center">
          {/* <img className="uk-margin-small-bottom" src="img/in-lazy.gif" data-src="img/in-liquid-icon-18.svg" alt="wave-award" width={72} height={72} data-uk-img /> */}
          <h3 className="uk-margin-top">Trader Account</h3>
          <p>Spreads Starts From 0.8 PIP</p>
          <p>Minimum Deposit US$100</p>
          <p>Trade Size 0.01 Lot</p>
          <p>Max Leverage 1:500</p>
          <p>Hedging Allowed</p>
          <p>Zero Commission</p>
          <a class="uk-button uk-button-text uk-align-center" href="#">Open Demo Account<i class="fas fa-angle-right uk-margin-small-left"></i></a>

        </div>
      </div>
      {/* <div>
        <div className="uk-card uk-card-secondary uk-card-body uk-border-rounded uk-text-center">
          <img className="uk-margin-small-bottom" src="img/in-lazy.gif" data-src="img/in-liquid-icon-18.svg" alt="wave-award" width={72} height={72} data-uk-img />
          <h3 className="uk-margin-top">Scalpers</h3>
          <p>Spreads Starts From 0.5 PIP</p>
          <p>Minimum Deposit US$500</p>
          <p>Trade Size 0.01 Lot</p>
          <p>Max Leverage 1:500</p>
          <p>Hedging Allowed</p>
          <p>Zero Commission</p>
        </div>
      </div> */}
    </div>
  </div>
</div>
<div className="uk-section in-liquid-7 in-offset-top-10">
  <div className="uk-container">
    <div className="uk-grid uk-flex uk-flex-center">
      <div className="uk-width-5-6@m uk-background-contain uk-background-center-center" style={{backgroundImage: 'url(img/in-liquid-7-bg.png)'}} data-uk-img>
        <div className="uk-text-center">
          <h2 className="uk-margin-remove">Why SMART TRADERS Choose Us?</h2>
          {/* <p className="uk-text-lead uk-text-muted uk-margin-small-top">Improve your trading results with our industry-leading technology</p> */}
        </div>
        {/* <div className="uk-grid-medium uk-child-width-1-3@s uk-child-width-1-3@m uk-text-center uk-margin-top" data-uk-grid>
          <div>
            <img src="img/in-lazy.gif" data-src="img/in-liquid-award.svg" alt="wave-award" width={71} height={58} data-uk-img />
            <h6 className="uk-margin-small-top uk-margin-remove-bottom">Best CFD Broker</h6>
            <p className="uk-text-small uk-margin-remove-top">TradeON Summit 2020</p>
          </div>
          <div>
            <img src="img/in-lazy.gif" data-src="img/in-liquid-award.svg" alt="wave-award" width={71} height={58} data-uk-img />
            <h6 className="uk-margin-small-top uk-margin-remove-bottom">Best Execution Broker</h6>
            <p className="uk-text-small uk-margin-remove-top">Forex EXPO Dubai 2020</p>
          </div>
          <div>
            <img src="img/in-lazy.gif" data-src="img/in-liquid-award.svg" alt="wave-award" width={71} height={58} data-uk-img />
            <h6 className="uk-margin-small-top uk-margin-remove-bottom">Best Trading Platform</h6>
            <p className="uk-text-small uk-margin-remove-top">London Summit 2020</p>
          </div>
        </div> */}
        <img className="uk-align-center" src="/img/graph-devices.png" data-src="img/in-liquid-7-mockup.png" alt="sample-images" width={691} height={420}  />
        <div className="uk-grid-divider uk-child-width-1-2@s uk-child-width-1-4@m uk-text-center in-offset-top-10" data-uk-grid>
          <div>
            <h2 className="uk-margin-small-bottom">~0.01 lot
</h2>
            <p className="uk-text-small uk-text-uppercase uk-margin-remove-top">Minimum lot size
</p>
          </div>
          <div>
            <h2 className="uk-margin-small-bottom">$10
</h2>
            <p className="uk-text-small uk-text-uppercase uk-margin-remove-top">Minimum Deposit</p>
          </div>
          <div>
            <h2 className="uk-margin-small-bottom">Upto 1:500
</h2>
            <p className="uk-text-small uk-text-uppercase uk-margin-remove-top">Leverage</p>
          </div>
          <div>
            <h2 className="uk-margin-small-bottom">0.1
</h2>
            <p className="uk-text-small uk-text-uppercase uk-margin-remove-top">ECN Spreads from 0.1 pips
</p>
          </div>
        </div>
        <div className="uk-text-center uk-margin-medium-top">
          <a className="uk-button uk-button-primary uk-border-rounded uk-margin-small-right" href="#">Create account<i className="fas fa-angle-right uk-margin-small-left" /></a>
          <a className="uk-button uk-button-default uk-border-rounded" href="#">Discover platform<i className="fas fa-angle-right uk-margin-small-left" /></a>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="uk-section uk-section-muted in-liquid-5 uk-background-contain uk-background-top-center in-offset-bottom-40" style={{backgroundImage: 'url(img/in-liquid-5-bg.png)'}}>
  <div className="uk-container">
    <div className="uk-grid uk-flex uk-flex-center">
      <div className="uk-width-5-6@m">
        <div className="uk-text-center">
          <h4>Payment methods.</h4>
        </div>
        <div className="uk-grid-collapse uk-child-width-1-2@s uk-child-width-1-6@m uk-text-center uk-margin-medium in-client-logo-6" data-uk-grid>
        <div className="col-md-12 col-sm-12">
            <div className=" row paymentFlex">
              <div className=" ">
                <img
                  className="fitImage paymentImage"
                  src="/assets/images/payment1.png"
                  alt="paymentImage"
                ></img>
              </div>
              <div className=" ">
                <img
                  className="fitImage paymentImage"
                  src="/assets/images/payment2.png"
                  alt="paymentImage"
                ></img>
              </div>
              <div className=" ">
                <img
                  className="fitImage paymentImage"
                  src="/assets/images/payment3.png"
                  alt="paymentImage"
                ></img>
              </div>
              <div className=" ">
                <img
                  className="fitImage paymentImage"
                  src="/assets/images/payment4.png"
                  alt="paymentImage"
                ></img>
              </div>
              <div className=" ">
                <img
                  className="fitImage paymentImage"
                  src="/assets/images/payment5.png"
                  alt="paymentImage"
                ></img>
              </div>
              <div className=" ">
                <img
                  className="fitImage paymentImage"
                  src="/assets/images/payment6.png"
                  alt="paymentImage"
                ></img>
              </div>
              <div className=" ">
                <img
                  className="fitImage paymentImage"
                  src="/assets/images/payment7.png"
                  alt="paymentImage"
                ></img>
              </div>
              <div className=" ">
                <img
                  className="fitImage paymentImage"
                  src="/assets/images/localbank.png"
                  alt="paymentImage"
                ></img>
              </div>
              <div className=" ">
                <img
                  className="fitImage paymentImage"
                  src="/assets/images/paytrust.png"
                  alt="paymentImage"
                ></img>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>

            </div>
        );
    }
}

export default Landing;
