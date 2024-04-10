import { useState } from 'react'
import './App.css'
import RouterPath from './RouterPath.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import { Toaster } from 'react-hot-toast'
import { useEffect } from 'react'
import MainPage from './pages/MainPage.jsx'
import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import 'slicknav/dist/jquery.slicknav.js'
import 'jquery-nice-select/js/jquery.nice-select.js'
import 'jquery-countdown/dist/jquery.countdown.js'
import 'jquery.scrollbar/jquery.scrollbar.js'
import 'magnific-popup/dist/jquery.magnific-popup.js'
import 'owl.carousel/dist/owl.carousel.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'jquery/dist/jquery.min.js'
import { HashRouter } from "react-router-dom";
import 'nicescroll/dist/jquery.nicescroll.min.js';
function App() {
  // const [count, setCount] = useState(0)
  useEffect(() => {


    $(function () {
      var proQty = $('.pro-qty');
      proQty.prepend('<span class="fa fa-angle-up dec qtybtn"></span>');
      proQty.append('<span class="fa fa-angle-down inc qtybtn"></span>');
      proQty.on('click', '.qtybtn', function () {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
          var newVal = parseFloat(oldValue) + 1;
        } else {
          // Don't allow decrementing below zero
          if (oldValue > 0) {
            var newVal = parseFloat(oldValue) - 1;
          } else {
            newVal = 0;
          }
        }
        $button.parent().find('input').val(newVal);
      });

      var proQty2 = $('.pro-qty-2');
      proQty2.prepend('<span class="fa fa-angle-left dec qtybtn"></span>');
      proQty2.append('<span class="fa fa-angle-right inc qtybtn"></span>');
      proQty2.on('click', '.qtybtn', function () {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
          var newVal = parseFloat(oldValue) + 1;
        } else {
          // Don't allow decrementing below zero
          if (oldValue > 0) {
            var newVal = parseFloat(oldValue) - 1;
          } else {
            newVal = 0;
          }
        }
        $button.parent().find('input').val(newVal);
      });

      /*------------------
          Achieve Counter
      --------------------*/
      $('.cn_num').each(function () {
        $(this).prop('Counter', 0).animate({
          Counter: $(this).text()
        }, {
          duration: 4000,
          easing: 'swing',
          step: function (now) {
            $(this).text(Math.ceil(now));
          }
        });
      });
    });
  }, []);



  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "login",
          element: <LoginPage />,
        },
        {
          path: "register",
          element: <RegisterPage />,
        },
        {
          path: "*",
          element: <PageNotFound />,
        }
      ],
    },
  ]);
  
    return (
      <>
        <RouterProvider router={router} />
      </>
    );
  }
  
  export default App;
  