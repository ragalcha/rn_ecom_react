import { useEffect } from "react";
export default function CategoriesPad() {
    useEffect(() => {
        $(function () {
                   /*------------------
          CountDown
      --------------------*/
      // For demo preview start
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();

      if (mm == 12) {
        mm = '01';
        yyyy = yyyy + 1;
      } else {
        mm = parseInt(mm) + 1;
        mm = String(mm).padStart(2, '0');
      }
      var timerdate = mm + '/' + dd + '/' + yyyy;
      // For demo preview end

      // Uncomment below and use your date //

      /* var timerdate = "2020/12/30" */

      $("#countdown").countdown(timerdate, function (event) {
        $(this).html(event.strftime("<div class='cd-item'><span>%D</span> <p>Days</p> </div>" + "<div class='cd-item'><span>%H</span> <p>Hours</p> </div>" + "<div class='cd-item'><span>%M</span> <p>Minutes</p> </div>" + "<div class='cd-item'><span>%S</span> <p>Seconds</p> </div>"));
      });
    });
}, []);
    return (
        <section className="categories spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="categories__text">
                        <h2>Clothings Hot <br /> <span>Shoe Collection</span> <br /> Accessories</h2>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="categories__hot__deal">
                        <img src="img/product-sale.png" alt=""/>
                        <div className="hot__deal__sticker">
                            <span>Sale Of</span>
                            <h5>$29.99</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 offset-lg-1">
                    <div className="categories__deal__countdown">
                        <span>Deal Of The Week</span>
                        <h2>Multi-pocket Chest Bag Black</h2>
                        <div className="categories__deal__countdown__timer" id="countdown">
                            <div className="cd-item">
                                <span>3</span>
                                <p>Days</p>
                            </div>
                            <div className="cd-item">
                                <span>1</span>
                                <p>Hours</p>
                            </div>
                            <div className="cd-item">
                                <span>50</span>
                                <p>Minutes</p>
                            </div>
                            <div className="cd-item">
                                <span>18</span>
                                <p>Seconds</p>
                            </div>
                        </div>
                        <a href="#" className="primary-btn">Shop now</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}