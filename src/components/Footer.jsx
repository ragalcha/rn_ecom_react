import { Link, NavLink } from "react-router-dom";
import { useEffect } from "react";
export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer__about">
                                <div className="footer__logo">
                                    <Link to="/notfound"><img src="img/icon/rn02.webp" alt="" /></Link>
                                </div>
                                <p>The customer is at the heart of our unique business model, which includes design.</p>
                                <Link to="/notfound"><img src="img/payment.png" alt="" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
                            <div className="footer__widget">
                                <h6>Shopping</h6>
                                <ul>
                                    <li><Link to="/notfound">Clothing Store</Link></li>
                                    <li><Link to="/notfound">Trending Shoes</Link></li>
                                    <li><Link to="/notfound">Accessories</Link></li>
                                    <li><Link to="/notfound">Sale</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6">
                            <div className="footer__widget">
                                <h6>Shopping</h6>
                                <ul>
                                    <li><Link to="/notfound">Contact Us</Link></li>
                                    <li><Link to="/notfound">Payment Methods</Link></li>
                                    <li><Link to="/notfound">Delivary</Link></li>
                                    <li><Link to="/notfound">Return & Exchanges</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 offset-lg-1 col-md-6 col-sm-6">
                            <div className="footer__widget">
                                <h6>NewLetter</h6>
                                <div className="footer__newslatter">
                                    <p>Be the first to know about new arrivals, look books, sales & promos!</p>
                                    <form action="#">
                                        <input type="text" placeholder="Your email" />
                                        <button type="submit"><span className="icon_mail_alt"></span></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="footer__copyright__text">

                                <p>Copyright ©
                                    <script>
                                        document.write(new Date().getFullYear());
                                    </script>2020
                                    All rights reserved | This template is made with <i className="fa fa-heart-o"
                                        aria-hidden="true"></i> by <Link href="https://colorlib.com" target="_blank">Colorlib</Link>
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="search-model">
                <div className="h-100 d-flex align-items-center justify-content-center">
                    <div className="search-close-switch">+</div>
                    <form className="search-model-form">
                        <input type="text" id="search-input" placeholder="Search here....." />
                    </form>
                </div>
            </div>
        </>
    )
}