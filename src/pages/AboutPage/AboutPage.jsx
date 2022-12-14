import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "../AboutPage/AboutPage.css";
import pers2 from "../AboutPage/aboutpage img/pers2.JPG";
import Footer from "../../components/Footer/Footer.jsx";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="about-page container">
        <div className="about-child">
          <img src={pers2} alt="" />
        </div>
        <div>
          <h2>Первые шаги в мобилографии. Что важно учесть?</h2>
          <p>
            Каждый, наверное, видел, как делает свои первые шаги ребёнок. Он
            испуган, не уверен, и в любой момент может упасть, хотя, на первый
            взгляд, и совершает те же действия, что и взрослый человек. Так же
            дело обстоит и в сфере мобильной фотографии. С тех пор, как
            мобилография окончательно ворвалась в мировое сообщество – уже
            прошёл добрый десяток лет. Но даже сейчас, совсем нетрудно увидеть
            разительное отличие между снимком с камерофона, который был в руках
            у профессионального мобилографа, и аналогичным снимком «обычного
            смертного человека». Порой может даже не вериться в то, что
            профессионалы используют обычный мобильный телефон. И хотя,
            по-началу может показаться, что от фотографа только и ожидается, что
            выбрать подходящий момент и вовремя нажать на кнопку «затвора», но
            мобилография, и вправду, имеет свои особенности, не учитывая
            которые, довольно сложно получить хороший кадр, не говоря уже о
            шедевре. Поэтому давайте обратим внимание на несколько простых
            советов, следуя которым, каждый сможет грамотно сделать свои первые
            шаги в мобилографии.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
