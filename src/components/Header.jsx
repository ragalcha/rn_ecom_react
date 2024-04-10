import React from 'react'
import { Outlet, Link } from "react-router-dom";
import { useEffect } from "react";
export default function Footer() {
    useEffect(() => {
        $(function () {     //Search Switch
            $('.search-switch').on('click', function () {
                $('.search-model').fadeIn(400);
            });

            $('.search-close-switch').on('click', function () {
                $('.search-model').fadeOut(400, function () {
                    $('#search-input').val('');
                });
            });

            $(".mobile-menu").slicknav({
                prependTo: '#mobile-menu-wrap',
                allowParentLinks: true
            });
            $('.collapse').on('shown.bs.collapse', function () {
                $(this).prev().addClass('active');
            });

            $('.collapse').on('hidden.bs.collapse', function () {
                $(this).prev().removeClass('active');
            });

            //Canvas Menu
            $(".canvas__open").on('click', function () {
                $(".offcanvas-menu-wrapper").addClass("active");
                $(".offcanvas-menu-overlay").addClass("active");
            });

            $(".offcanvas-menu-overlay").on('click', function () {
                $(".offcanvas-menu-wrapper").removeClass("active");
                $(".offcanvas-menu-overlay").removeClass("active");
            });

        });
    }, []);
    return (
        <>
            {/* <div id="preloder">
                <div className="loader"></div>
            </div> */}

            <div className="offcanvas-menu-overlay"></div>
            <div className="offcanvas-menu-wrapper">
                <div className="offcanvas__option">
                    <div className="offcanvas__links">
                        <Link to="/">Home</Link>
                        <Link to="/login">login</Link>
                        <Link to="/register">register</Link>
                    </div>
                    <div className="offcanvas__top__hover">
                        <span>INR <i className="arrow_carrot-down"></i></span>
                        <ul>
                            <li>INR</li>
                        </ul>
                    </div>
                </div>
                <div className="offcanvas__nav__option">
                    <Link to="/notfound" className="search-switch"><img src="img/icon/search.png" alt="" /></Link>
                    <Link to="/notfound"><img src="img/icon/heart.png" alt="" /></Link>
                    <Link to="/notfound"><img src="img/icon/cart.png" alt="" /> <span>0</span></Link>
                    <div className="price">0.00</div>
                </div>
                <div id="mobile-menu-wrap"></div>
                <div className="offcanvas__text">
                    <p>Free shipping, 30-day return or refund guarantee.</p>
                </div>
            </div>
            <header className="header">
                <div className="header__top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-7">
                                <div className="header__top__left">
                                    <p>Free shipping, 30-day return or refund guarantee.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-5">
                                <div className="header__top__right">
                                    <div className="header__top__links">
                                        <Link to="/">Home</Link>
                                        <Link to="/login">login</Link>
                                        <Link to="/register">register</Link>
                                    </div>
                                    <div className="header__top__hover">
                                        <span>INR <i className="arrow_carrot-down"></i></span>
                                        <ul>
                                            <li>INR</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3">
                            <div className="header__logo">
                                <Link to=""><img src="img/icon/rn02.webp" alt="" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <nav className="header__menu mobile-menu">
                                <ul>
                                    <li className="active"><Link to="./index.html">Home</Link></li>
                                    <li><Link to="/notfound">Shop</Link></li>
                                    <li><Link to="/notfound">Pages</Link>
                                        <ul className="dropdown">
                                            <li><Link to="/notfound">About Us</Link></li>
                                            <li><Link to="/notfound">Shop Details</Link></li>
                                            <li><Link to="/notfound">Shopping Cart</Link></li>
                                            <li><Link to="/notfound">Check Out</Link></li>
                                            <li><Link to="/notfound">Blog Details</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/notfound">Blog</Link></li>
                                    <li><Link to="/notfound">Contacts</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <div className="header__nav__option">
                                <Link to="/notfound" className="search-switch"><img src="img/icon/search.png" alt="" /></Link>
                                <Link to="/notfound"><img src="img/icon/heart.png" alt="" /></Link>
                                <Link to="/notfound"><img src="img/icon/cart.png" alt="" /> <span>0</span></Link>
                                <div className="price">0.00</div>
                            </div>
                        </div>
                    </div>
                    <div className="canvas__open"><i className="fa fa-bars"></i></div>
                </div>
            </header>
        </>
    )
}