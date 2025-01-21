import './depcont.css';
import dep from './images/DEPOIMENTO1.png';
import rate from './images/RATE.svg';

import React from 'react';
import Slider from 'react-slick'; // Importa o componente do react-slick
import 'slick-carousel/slick/slick.css'; // Importa o CSS do Slick
import 'slick-carousel/slick/slick-theme.css'; // Importa o tema do Slick

export default function Depcont(){
	// Configurações do Slick Slider
	  const settings = {
	    dots: true,
	    arrows: false,
	    speed: 1000,
	    slidesToShow: 3,
	    slidesToScroll: 3,
	    autoplay: true,
	    autoplaySpeed: 3000,
	    pauseOnHover: false,
	    responsive: [
	      {
	        breakpoint: 768,
	        settings: {
	          slidesToShow: 1,
	          slidesToScroll: 1,
	        },
	      },
	    ],
	  };


	return(
		<div className="depcont">
			<section class="depoimentos">
	            <h1>Depoimentos</h1>
	            <div style={{display:"block"}} class="center">
	                <br/>
	                <div style={{maxwidth: "1200px"}} class="container-slider">
	                	<Slider {...settings}>
		                    <div class="container-slider-single">
		                        <img src={dep} />
		                        <h3>Miriam Souza</h3>
		                        <p>O trabalho da Agência Bold foi fundamental para o nosso posicionamento e nossas estratégias de 2021. Juntos tivemos excelentes resultados e nossos clientes ficaram surpresos com a qualidade. Foi um trabalho incrível feito a muitas mãos pela Uber e pelo time da Agência Bold.</p>
		                        <img src={rate} />
		                    </div>
		                   
		                    <div class="container-slider-single">
		                        <img src={dep} />
		                        <h3>Miriam Souza</h3>
		                        <p>O trabalho da Agência Bold foi fundamental para o nosso posicionamento e nossas estratégias de 2021. Juntos tivemos excelentes resultados e nossos clientes ficaram surpresos com a qualidade. Foi um trabalho incrível feito a muitas mãos pela Uber e pelo time da Agência Bold.</p>
		                        <img src={rate} />
		                    </div>
		                    <div class="container-slider-single">
		                        <img src={dep} />
		                        <h3>Miriam Souza</h3>
		                        <p>O trabalho da Agência Bold foi fundamental para o nosso posicionamento e nossas estratégias de 2021. Juntos tivemos excelentes resultados e nossos clientes ficaram surpresos com a qualidade. Foi um trabalho incrível feito a muitas mãos pela Uber e pelo time da Agência Bold.</p>
		                        <img src={rate} />
		                    </div>
		                    <div class="container-slider-single">
		                        <img src={dep} />
		                        <h3>Miriam Souza</h3>
		                        <p>O trabalho da Agência Bold foi fundamental para o nosso posicionamento e nossas estratégias de 2021. Juntos tivemos excelentes resultados e nossos clientes ficaram surpresos com a qualidade. Foi um trabalho incrível feito a muitas mãos pela Uber e pelo time da Agência Bold.</p>
		                        <img src={rate} />
		                    </div>
		                    <div class="container-slider-single">
		                        <img src={dep} />
		                        <h3>Miriam Souza</h3>
		                        <p>O trabalho da Agência Bold foi fundamental para o nosso posicionamento e nossas estratégias de 2021. Juntos tivemos excelentes resultados e nossos clientes ficaram surpresos com a qualidade. Foi um trabalho incrível feito a muitas mãos pela Uber e pelo time da Agência Bold.</p>
		                        <img src={rate} />
		                    </div>
		                    <div class="container-slider-single">
		                        <img src={dep} />
		                        <h3>Miriam Souza</h3>
		                        <p>O trabalho da Agência Bold foi fundamental para o nosso posicionamento e nossas estratégias de 2021. Juntos tivemos excelentes resultados e nossos clientes ficaram surpresos com a qualidade. Foi um trabalho incrível feito a muitas mãos pela Uber e pelo time da Agência Bold.</p>
		                        <img src={rate} />
		                    </div>
	                    </Slider>
	                </div>
	                
	            </div>

	        </section>

	        <section class="contato">
	            <h1>Entre em Contato</h1>
	            <div style={{maxwidth: "900px"}} class="center">
	                
	                <form method="post">
	                    <input type="text" placeholder="Seu Nome..." />
	                    <input type="email" placeholder="Seu e-mail" />
	                    <textarea placeholder="Sua Mensagem..."></textarea>
	                    <input type="submit" name="acao" value="Enviar!"/>
	                </form>
	            </div>
	        </section>
		</div>
	)
};





