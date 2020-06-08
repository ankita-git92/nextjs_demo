import * as React from 'react';
import Head from 'next/head';
import { getPosts } from "../pages/api/posts";


function Home() {

    return (
        <div className="container">
            <Head>
                <title>Work from home</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <main>
                <div>
                    {/* <!-- start section 1 design  --> */}
                    <div className="card-section" style={{ backgroundImage: `url("image/section1-bgimage.svg")` }}>
                        <div className="main-content">
                            <div className="card-content">
                                <h1 className="section1-card-title">
                                    Your Private Workspace Amidst Your Loving Abode!
          </h1>
                                <p className="card-button">
                                    <button type="button" className="Inquiry-button">
                                        Make an Inquiry
            </button>
                                </p>
                            </div>
                            <div className="card-block ">
                                <img src="image/section1-image.svg" className="image-section1" />
                            </div>
                        </div>
                    </div>
                    {/* <!-- end section 1 design  --> */}

                    {/* <!-- start section 2 design --> */}
                    <div>
                        <h1 className="card-main-title">
                            WORK FROM HOME
      </h1>
                        <h1 className="card-title">
                            Working from home is the New 9 to 5
      </h1>
                        <div className="main-div">
                            <div className="text-section">
                                <p className="card-innertext">
                                    Introducing Work From Home Membership Plan – the right blend of a private workspace & the comfort of
                                    working from home. The plan includes Work Pods that are aesthetically designed & enhances your
                                    productivity and also allows you to stay connected with your team through various work management tools!
          </p>
                            </div>
                            <div className="image-section">
                                <img src="image/section2.svg" className="image" />
                            </div>
                        </div>
                    </div>
                    {/* <!-- end section 2 design --> */}

                    {/* <!-- start section 3 design --> */}
                    <div>
                        <h1 className="card-main-title">
                            WHY WORK PODS
      </h1>
                        <h1 className="card-title">
                            Why work PODs
      </h1>
                        <div className="main-div">
                            <div className="aminities-section">
                                <div className="main-block">
                                    <div className="aminities-block">
                                        <img src="image/aminity1.svg" className="aminity-image" />
                                        <p className="aminity-text">Ergonomically Designed</p>
                                    </div>
                                    <div>
                                        <p className="aminity-innertext">
                                            Chairs that are ergonomically designed to provide a wide range of adjustments to suit your body
                                            postures and also promote well-being and performance.
              </p>
                                    </div>
                                </div>
                                <div className="main-block">
                                    <div className="aminities-block">
                                        <img src="image/aminity2.svg" className="aminity-image" />
                                        <p className="aminity-text">Modular Structure</p>
                                    </div>
                                    <p className="aminity-innertext">
                                        Modular design makes this Work Pod an easy-to-install structure & can also be comfortably moved from
                                        one place to another within your home.
            </p>
                                </div>
                                <div className="main-block">
                                    <div className="aminities-block">
                                        <img src="image/aminity3.svg" className="aminity-image" />
                                        <p className="aminity-text">Enhances Productivity</p>
                                    </div>
                                    <p className="aminity-innertext">
                                        Our Work Pods help you accomplish tasks from the comfort of your house. The structure is designed to
                                        overall enhance your productivity whille WFH.
            </p>
                                </div>
                            </div>
                            <div className="middle-image-section">
                                <div className="middle-image">
                                    <img src="image/middle-image.svg" className="aminity-middle-image " />
                                </div>
                            </div>
                            <div className="aminities-section">
                                <div className="main-block">
                                    <div className="aminities-block">
                                        <img src="image/aminity4.svg" className="aminity-image" />
                                        <p className="aminity-text">Power & Ventilation</p>
                                    </div>
                                    <p className="aminity-innertext">
                                        The pod is well-equipped with the basic necessities such as electrical plug points; exhaust fan & a
                                        ventilation system with air filters to keep the environment healthy.
            </p>
                                </div>
                                <div className="main-block">
                                    <div className="aminities-block">
                                        <img src="image/aminity5.svg" className="aminity-image" />
                                        <p className="aminity-text">Compact & Soundproof</p>
                                    </div>
                                    <p className="aminity-innertext">
                                        The design occupies minimum space enabling it to suit any kind of household. The pod is also
                                        soundproof which gives you a quiet place to work from.
            </p>
                                </div>
                                <div className="main-block">
                                    <div className="aminities-block">
                                        <img src="image/aminity6.svg" className="aminity-image" />
                                        <p className="aminity-text">Aesthetically Pleasing</p>
                                    </div>
                                    <p className="aminity-innertext">
                                        These Work Pods are designed keeping in mind pleasing aesthetics that keeps you motivated and includes
                                        elements such as planters to enhance your creativity.
            </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- end section 3 design --> */}

                    {/* <!-- start section 4 design --> */}
                    <div>
                        <div>
                            <h1 className="card-main-title">
                                CHALLENGES
        </h1>
                            <h1 className="card-title">
                                Challenges of Working Remotely
        </h1>
                            <p className="card-subtext">
                                Despite putting in endless efforts, a fact that we can all agree upon is that WFH has its own set of
                                limitations!

        </p>
                        </div>

                        <div className="card-content-layout d-flex">
                            <div className="card-image">
                                <img src="image/section3.svg" className="image" />
                            </div>
                            <div className="card-desc">

                                <ul className="card-challenges">
                                    <li>
                                        <span className="num-bg">1</span>
                                        <span className="crd-text">
                                            Lack of concentration & easy distractions
              </span>
                                    </li>
                                    <li>
                                        <span className="num-bg">2</span>
                                        <span className="crd-text">
                                            Lack of work management tools
              </span>
                                    </li>
                                    <li>
                                        <span className="num-bg">3</span>
                                        <span className="crd-text">
                                            Background noise during conference calls
              </span>
                                    </li>

                                    <li>
                                        <span className="num-bg">4</span>
                                        <span className="crd-text">
                                            No track of work being done
              </span>
                                    </li>
                                    <li>
                                        <span className="num-bg">5</span>
                                        <span className="crd-text">
                                            Feeling lazy working from the couch
              </span>
                                    </li>
                                    <li>
                                        <span className="num-bg">6</span>
                                        <span className="crd-text">
                                            Family members
                                            barging into the room
              </span>
                                    </li>
                                </ul>

                                <p>Get an exclusive work from home membership plan & mitigate work from home challenges.</p>

                                <div className="btn-wrap">
                                    <a href="#" className="btn theme-btn">Make an inquiry</a>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* <!-- end section 4 design --> */}

                    {/* <!-- start section 5 design --> */}
                    <div>
                        <div>
                            <h1 className="card-main-title">
                                WORKSPACE
        </h1>
                            <h1 className="card-title">
                                Benefits of Membership plan
        </h1>

                            <h4 className="card-sub-title">
                                Our WFH Membership Plan strikes the perfect balance between Work & Home!
        </h4>
                        </div>
                        <div className="card-layout">
                            <div className="membership-card-section">
                                <div className="image-title">
                                    <img src="image/blub-icon.svg" />
                                    <h1 className="title">
                                        Access to devx collab
            </h1>
                                </div>
                                <h4 className="description">
                                    Access an indigenous technology developed by DevX that allows you to participate in webinars, network with
                                    a community of 2000+ members & 30+ partners, access work management & productivity tools, & much more.
          </h4>
                            </div>
                            <div className="membership-card-section">
                                <div className="image-title">
                                    <img src="image/blub-icon.svg" />
                                    <h1 className="title">
                                        Wi-Fi connectivity
            </h1>
                                </div>
                                <h4 className="description">
                                    Access high-speed Wi-Fi network connectivity to speed up your tasks. From video conferencing to sending
                                    e-mails, access to high speed internet will make sure all your tasks finishes off within the stipulated
                                    time.
          </h4>
                            </div>
                            <div className="membership-card-section">
                                <div className="image-title">
                                    <img src="image/blub-icon.svg" />
                                    <h1 className="title">
                                        Range of Allied Services
            </h1>
                                </div>
                                <h4 className="description">
                                    Allows your business to leverage from our wide range of Allied Services such as Accounting Services,
                                    Corporate Innovation, Recruitment, Payroll, & HR Practices, Legal Services, Graphic & Web Designing,
                                    Digital Marketing, & more.
          </h4>
                            </div>
                        </div>
                        <div className="card-layout">
                            <div className="membership-card-section">
                                <div className="image-title">
                                    <img src="image/blub-icon.svg" />
                                    <h1 className="title">
                                        Work pods
            </h1>
                                </div>
                                <h4 className="description">
                                    The feeling of working from office in the comfort of your home. Compact & soundproof, these work pods are
                                    aesthetically designed to enhance productivity with necessary facilities such as power connections &
                                    proper ventilation.
          </h4>
                            </div>
                            <div className="membership-card-section">
                                <div className="image-title">
                                    <img src="image/blub-icon.svg" />
                                    <h1 className="title">
                                        Access to work space
            </h1>
                                </div>
                                <h4 className="description">
                                    Get access to DevX workspace for 3 days in a week. Book Meeting & Conference Rooms at any of our centres
                                    pan India & conduct team/client meetings or schedule interviews with your candidates through DevX Collab.
          </h4>
                            </div>
                            <div className="membership-card-section">
                                <div className="image-title">
                                    <img src="image/blub-icon.svg" />
                                    <h1 className="title">
                                        Business registration
            </h1>
                                </div>
                                <h4 className="description">
                                    Get your business a registration address to fulfil all your documentation needs. A registration address
                                    enables you to open a bank account, get necessary documents for your business, get an officially
                                    acceptable physical presence, etc.
          </h4>
                            </div>
                        </div>
                    </div>
                    {/* <!-- end section 5 design --> */}

                    {/* <!-- start section 6 design --> */}
                    <div>
                        <div>
                            <div className="card-top">
                                <h1 className="card-main-title">
                                    DEVX APPLICATION
          </h1>
                                <h1 className="card-title">
                                    Why be a part of DevX Community?
          </h1>
                                <p className="card-subtext">
                                    We are a lively bunch of enthusiastic individuals. What makes us stand out is our community of innovators
                                    & thinkers!
          </p>
                            </div>
                            <div className="card-content-layout flex-layout">
                                <div className="card-desc-section6">
                                    <p>
                                        In spite of not being physically around, we
                                        ensure that the community stays connected, always! Through regular online activities, our genial
                                        community managers see to it that
                                        each member feels the vibrancy of our community even while working from their Word Pods.
            </p>
                                    <ul className="card-challenges-section6">
                                        <li>
                                            <span className="img-bg"><img src="image/section6_1.svg" /></span>
                                            <span className="crd-text-section6">
                                                Network of Innovative Entrepreneurs
                </span>
                                        </li>
                                        <li>
                                            <span className="img-bg"><img src="image/section6_2.svg" /></span>
                                            <span className="crd-text-section6">
                                                Collaborations for your Business Needs
                </span>
                                        </li>
                                        <li>
                                            <span className="img-bg"><img src="image/section6_3.svg" /></span>
                                            <span className="crd-text-section6">
                                                Staying connected while Working From Home
                </span>
                                        </li>

                                        <li>
                                            <span className="img-bg"><img src="image/section6_4.svg" /></span>
                                            <span className="crd-text-section6">
                                                Access our Services Pan India
                </span>
                                        </li>
                                        <li>
                                            <span className="img-bg"><img src="image/section6_5.svg" /></span>
                                            <span className="crd-text-section6">
                                                Regular Online Activities to keep you Motivated
                </span>
                                        </li>
                                        <li>
                                            <span className="img-bg"><img src="image/section6_6.svg" /></span>
                                            <span className="crd-text-section6">
                                                Flexible Membership Benefits
                </span>
                                        </li>
                                    </ul>

                                    <div className="btn-wrap">
                                        <a href="#" className="btn theme-btn">Join DevX Community</a>
                                    </div>
                                </div>
                                <div className="devx-card-image">
                                    <img src="image/section6.svg" className="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- end section 6 design --> */}

                    {/* <!-- start section 7 design --> */}
                    <div>
                        <div>
                            <h1 className="space-card-title">
                                A Perfect blend of worldclassName<span className="color-text">
                                    Co-Working space <br />&Aesthetically designed pods.
          </span>
                            </h1>
                        </div>
                        <div className="image-row">
                            <div className="image-column">
                                <img src="image/image1.svg" />
                                <img src="image/image2.svg" />
                            </div>
                            <div className="image-column">
                                <img src="image/image3.svg" />
                                <img src="image/image4.svg" />
                            </div>
                            <div className="image-column">
                                <img src="image/image5.svg" />
                                <img src="image/image6.svg" />
                            </div>
                        </div>
                    </div>
                    {/* <!-- end section 7 design --> */}

                    {/* <!-- start section 8 design --> */}
                    <div className="location-section">
                        <div className="main-container">
                            <div className="card-top location-card-top">
                                <h1 className="card-main-title">
                                    EXPLORE OUR SPACES
          </h1>
                                <h1 className="card-title">
                                    Locations
          </h1>
                                <p className="card-subtext">
                                    Choose from a host of workspaces designed to suit the needs of all.
          </p>
                            </div>
                            <div className="theme-row">
                                <div className="theme-col-3">
                                    <div className="theme-card">
                                        <div className="theme-card-img">
                                            <img src="image/section8_1.svg" className="location-image" />
                                        </div>
                                        <div className="theme-card-txt">
                                            <div className="theme-card-title">
                                                Ahmedabad
                </div>
                                            <div className="theme-card-desc">
                                                Ahmedabad hosts two of our centres, a total of (40,000) sq. ft., making us the largest Co-working
                                                Space providers in Gujarat.
                </div>
                                            <div className="theme-card-more">
                                                <a href="#">Explore ></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="theme-col-3">
                                    <div className="theme-card">
                                        <div className="theme-card-img">
                                            <img src="image/section8_2.svg" className="location-image" />
                                        </div>
                                        <div className="theme-card-txt">
                                            <div className="theme-card-title">
                                                Vadodara
                </div>
                                            <div className="theme-card-desc">
                                                Our centre in Vadodara provides world className tech-enabled facilities and ensures a vibrant atmosphere
                                                for the co-workers.
                </div>
                                            <div className="theme-card-more">
                                                <a href="#">Explore ></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="theme-col-3">
                                    <div className="theme-card">
                                        <div className="theme-card-img">
                                            <img src="image/section8_3.svg" className="location-image" />
                                        </div>
                                        <div className="theme-card-txt">
                                            <div className="theme-card-title">
                                                Mumbai
                </div>
                                            <div className="theme-card-desc">
                                                Located close to the metro station in Andheri E., our tech-enabled centre in Mumbai provides a
                                                seamless experience for you.
                </div>
                                            <div className="theme-card-more">
                                                <a href="#">Explore ></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="theme-col-3">
                                    <div className="theme-card">
                                        <div className="theme-card-img">
                                            <img src="image/section8_3.svg" className="location-image" />
                                        </div>
                                        <div className="theme-card-txt">
                                            <div className="theme-card-title">
                                                Indore
                </div>
                                            <div className="theme-card-desc">
                                                Our centre in Indore, also a tech-enabled space, is a perfect place for the creative minds to work and
                                                co-create from!
                </div>
                                            <div className="theme-card-more">
                                                <a href="#">Explore ></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- end section 8 design --> */}

                    {/* <!-- start section 9 design --> */}
                    <div>
                        <div>
                            <h1 className="card-main-title">
                                GET STARTED
        </h1>
                            <h1 className="card-title">
                                Get Your Work From Home Membership Today,<br />
          and grab the Work Pod for free!
        </h1>

                            <div className="button-layout">
                                <button name="make" className="button">Make an Inquiry</button>
                            </div>
                        </div>
                    </div>
                    {/* <!-- end section 9 design  --> */}
                </div>

            </main>

            <style jsx>{`
        .card-section {
          background-size: cover;
        }
        .card-block {
          margin-bottom: 24px;
        }
        .card-main {
          background: #ffffff;
          box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.05);
          border-radius: 20px;
          padding-top: 32px;
        }
        .image-section1 {
          width: 100%;
        }
        .section1-card-title {
          font-family: Open Sans;
          font-style: normal;
          font-weight: bold;
          font-size: 70px;
          line-height: 85px;
          color: #ffffff;
          text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
        .card-content {
          width: 54%;
          padding: 5% 7% 0% 7%;
        }
        .card-content-layout {
          width: 54%;
          padding: 5% 7% 0% 7%;
        }
        .main-content {
          display: flex;
        }
        .Inquiry-button {
          width: 40%;
          height: 55px;
          color: #ffffff;
          border-radius: 10px;
          background: #009246;
          border: none;
          font-family: Open Sans;
          font-weight: 600;
          font-size: 18px;
          line-height: 25px;
          text-align: center;
          color: #FFFFFF;
        }
        /* end section1 css */
        
        /* start section 2 css */
        .card-main-title {
            position: absolute;
            font-family: Open Sans;
            font-style: normal;
            font-weight: bold;
            font-size: 100px;
            padding-left: 6%;
            line-height: 21px;
            color: #f2f2f2;
          }
          .card-title {
            position: relative;
            top: 75px;
            padding-left: 6%;
            font-family: Open Sans;
            font-weight: 600;
            font-size: 42px;
            line-height: 42px;
            color: #000000;
          }
          .main-div {
            display: flex;
            justify-content: space-between;
          }
          .text-section {
            padding: 10% 10% 5% 6%;
            align-items: center;
            display: flex;
          }
          .image-section {
           padding: 5% 5% 0 5%;
          }
          .card-innertext {
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 30px;
            color: #000000;
            font-family: Open Sans;
          }
          .image {
            width: 490px;
            height: 490px;
          }
        /* end section 2 css */
        
        /* start section 3 css  */
          .aminity-image {
            padding: 5px 15px 10px 0px;
          }
          .aminity-middle-image{
            padding: 5px 15px 10px 0px;
          }
          .aminities-section {
            padding: 12% 4% 0% 6%;
            display: block;
            width: 36%;
          }
          .aminity-text {
            padding: 0 2%;
            width: 100%;
            font-family: Open Sans;
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            line-height: 28px;
            color: #000000;
            margin-bottom: 0px;
          }
          .main-block {
            padding-bottom: 10%;
          }
          .aminities-block {
            display: flex;
          }
          .middle-image-section {
            padding: 8% 1% 0 5%;
          }
          .aminity-innertext {
            font-family: Open Sans;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 25px;
            color: #000000;
            padding: 0 0 5% 13%;
          }
        /* end section 3 css */
        
        /* start section 4 css */
        .d-flex {
            width:100%;
            display: flex; 
            align-items: flex-start;
          }
        .flex-layout{
          width:100%;
          display: flex; 
          align-items: flex-start;
        }
        .card-subtext{
            padding: 5% 0% 0% 6%;
        }
          .card-image {
              width: 50%;
              padding-right: 50px;
          }
          .card-desc {
              width: 50%;
          }
          .card-challenges {
              list-style: none;
              padding: 0;
              display: flex;
              flex-wrap: wrap;
              margin: 0 -15px;
          }
          .card-challenges li {
            width: 50%; 
            padding: 0 15px; 
            margin: 0 0 30px 0; 
            display: flex; 
            align-items: center;
          }
          .num-bg {
              font-size: 64px;
              line-height: 1em;
              font-weight: bold;
              color: #cce9da;
          }
          .crd-text {
              font-size: 18px;
              margin-left: -12px;
          }
        /* end section 4 css */
        /* start section 5 css */
        .card-sub-title {
            font-family: Open Sans;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 21px;
            color: #000000;
            padding: 5% 0% 0% 6%
          }
          .membership-card-section {
            background: #ffffff;
            box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
            border-radius: 20px;
            width: 30%;
            padding: 2% 0% 5%;
          }
          .title {
            font-family: Open Sans;
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            line-height: 25px;
            color: #000000;
          }
          .description {
            font-family: Open Sans;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 21px;
            color: #000000;
            padding: 0 5%;
            margin: 0px;
          }
          .card-layout {
            display: flex;
            justify-content: space-between;
            margin: 5% 6%;
          }
          .image-title {
            display: flex;
            justify-content: flex-start;
            align-items: center;
          }
        /* end section 5 css  */
        /* start section 6 css */
          .card-desc-section6 {
            width: 50%;
            padding-right: 50px;
          }
          .card-challenges-section6 {
            list-style: none;
            padding: 12px 0px;
            display: flex;
            flex-wrap: wrap;
            margin: 0 -15px;
          }
          .card-challenges-section6 li {
            width: 50%;
            padding: 0 15px;
            margin: 0 0 40px 0;
            display: flex;
            align-items: center;
          }
          .img-bg {
            margin-right: 25px;
          }
          .crd-text-section6 {
            font-weight: 600;
            font-size: 18px;
            line-height: 20px;
            color: #000000;
          }
          .theme-btn {
            background-color: #009246;
            color: #fff !important;
            width: 240px;
            display: inline-block;
            text-align: center;
            line-height: 55px;
            font-size: 18px;
            margin-bottom: 14px;
            font-weight: 600;
            border-radius: 10px;
          }
          .devx-card-image{
            width: 50%;
            display: flex;
            justify-content: flex-end;
            margin-top: -5%;
          }
        /* end section 6 css */
        
        /* start section 7 css */
        .space-card-title {
            padding: 6% 6% 1%;
            font-family: Open Sans;
            font-weight: 600;
            font-size: 42px;
            line-height: 56px;
            color: #000000;
          }
          .color-text {
            font-family: Open Sans;
            font-style: normal;
            font-weight: 800;
            font-size: 42px;
            line-height: 56px;
            color: #80c8a3;
          }
          .image-row {
            width: 100%;
            display: flex;
            padding: 0 6%;
          }
          .image-column img {
            width: 100%;
            padding: 5px;
            vertical-align: middle;
          }
        /* end section 7 css */
        
        /* start section 8 css */
        .location-section {
          margin-bottom: 70px;
        }
        .card-top.location-card-top {
          max-width: 100%;
          margin-bottom: 80px;
        }
        .theme-row {
          padding: 0 6%;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
        }
        .theme-col-3 {
          width: 23%;
         }
        .theme-card {
          background-color: #fff;
          box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
          border-radius: 20px;
        }
        .theme-card-img {
          margin-bottom: 10px;
        }
        .location-image{
          width: 100%;
        }
        .theme-card-txt {
          padding: 15px;
        }
        .theme-card-title {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 10px;
        }
        .theme-card-desc {
          margin-bottom: 12px;
        }
        .theme-card-more {
          margin-bottom: 5px;
        }
        .theme-card-more a {
          color: #0057ff;
        }
        /* end section 8 css */
        
        /* start section 9 css */
        .button {
            width: 13%;
            height: 50px;
            left: 100px;
            background: #009246;
            border-radius: 10px;
            font-family: Open Sans;
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            line-height: 25px;
            text-align: center;
            color: #ffffff;
            border: none;
          }
          .button-layout {
            padding: 7% 0 7% 6%;
          }
        /* end section 9 css */
        
        
      `}</style>

            <style jsx>{`
        @media screen and (max-width: 768px) {
        /* start section1 css */
        .card-block {
          display: block;
          margin-bottom: 24px;
        }
        .card-main {
          width: 100%;
          margin-bottom: 24px;
          padding-top: 0px;
        }
        .card-content {
          top: 0%;
        }
        .section1-card-title {
          font-size: 24px;
          line-height: 32px;
        }
        /* end section1 css */
    
        /* start section2 css */
        .main-div {
            display: block;
            margin-bottom: 24px;
          }
          .text-section {
            width: 100%;
          }
          .image-section {
            padding: 0% 5%;
          }
          .card-title {
            margin: 0px;
            font-family: Open Sans;
            font-weight: 600;
            font-size: 22px;
            line-height: 28px;
            color: #000000;
            position: relative;
            top: 80px;
            padding: 0px 10px;
            margin-bottom: 15%;
          }
          .card-main-title {
            font-family: Open Sans;
            font-style: normal;
            font-weight: bold;
            font-size: 36px;
            line-height: 30px;
            color: #f2f2f2;
            padding: 0px 5px;
            margin: 0px;
            margin-top: 20%;
          }
          .card-innertext {
            font-style: normal;
            font-weight: normal;
            font-size: 13px;
            line-height: 20px;
            color: #000000;
            padding-top: 25px;
          }
        /* end section2 css */
    
        /* start section 3 css */
          .image-section img {
            width: 100%;
            height: 100%;
          }
          .aminity-text {
            font-size: 14px;
          }
          .aminities-block {
            width: 100%;
          }
          .main-block {
            width: 100%;
            padding-bottom: 0px;
          }
          .aminities-section {
            padding: 16% 1% 0% 7%;
            display: block;
            width: 90%;
          }
        /* end section 3 css */
    
        /* start section 4 css */
          .card-content-layout {
            display: block;
          }
          .card-image {
            width: 100%;
            padding-right: 0;
            margin-bottom: 30px;
          }
          .card-desc {
            width: 100%;
          }
          .card-challenges li {width: 100%;}
        /* end section 4 css */
    
        /* start section 5 css */
        .card-sub-title {
          padding: 15% 5% 8%;
            font-size: 12px;
          }
          .membership-card-section {
            width: 100%;
            margin-bottom: 8%;
          }
          .card-layout {
            display: block;
          }
        /* end section 5 css  */
    
        /* start section 6 css */
          .card-challenges-section6 li {
            width: 100%;
          }
          .card-desc-section6 {
            width: 100%;
            padding-right: 0px;
          }
        /* end section 6 css */
        
        /* start section 7 css */
        .space-card-title {
            font-size: 26px;
            line-height: 28px;
            padding-left: 20px;
          }
          .color-text {
            font-size: 26px;
            line-height: 30px;
            font-weight: 500;
          }
          .image-row {
            display: block;
          }
          .image-column img {
            width: 100%;
            padding: 10px 5px;
            vertical-align: middle;
        }
        /* end section 7 css */
    
        /* start section 8 css */
        
        .card-top.location-card-top {
          margin-bottom: 50px;
        }
        .theme-row {
          flex-wrap: wrap;
        }
        .theme-col-3 {
          width: 100%;
          margin-bottom: 8%;
        }
        /* end section 8 css */
    
        /* start section 9 css */
        .button-layout {
          padding: 0;
          padding-top: 20%;
          text-align: center;
          }
          .button {
            width: 60%;
            height: 45px;
          }
        /* end section 9 css */
        .image {
          width:100%;
          height: 100%;
        }
        .aminity-middle-image{
          width: 100%;
          height: 100%;
        }
        .main-content {
          width: 100%;
        }
        .card-subtext {
          padding: 22% 0% 0% 4%;
        }
        .devx-card-image {
          width: 100%;
          margin: 15% 0;
        }
        .btn-wrap{
          text-align: center;
        }
        .Inquiry-button {
          width: 100%;
        }
      }
      `}</style>

            <style jsx global>{`
        body {font-family: 'Open Sans', sans-serif; font-size: 14px;}
        /* input[type="submit"] {cursor: pointer;} */
        /* input {-webkit-appearance: none;} */
        /* hr {display:block; height:1px; border:0; border-top:1px solid #cccccc; margin:1em 0; padding:0;} */
        /* input, select {vertical-align:middle;} */
        *, *:after, *:before {-webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; outline: none !important; -webkit-tap-highlight-color: rgba(0,0,0,0);}
        .clearfix:after {visibility: hidden; display: block; font-size: 0; content: " "; clear: both; height: 0;}
        a, a:hover, a:focus {outline: none; text-decoration: none; color: inherit;}
        /* h1, h2, h3, h4 {margin: 0 0 20px 0;}
        h1 {font-size: 36px;}
        h2 {font-size: 24px;}
        h3 {font-size: 18px;}
        h4 {font-size: 16px;} */
        p {margin: 0 0 15px 0; line-height: 1.6;}
        /* img {display: block; max-width: 100%;} */
      `}</style>
        </div >
    )
}
export default Home