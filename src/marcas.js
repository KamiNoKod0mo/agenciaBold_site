import './marcas.css';
import logo1 from './images/LOGO1.png'
import logo2 from './images/LOGO2.png'
import logo3 from './images/LOGO3.png'
import logo4 from './images/LOGO4.png'
import logo5 from './images/LOGO5.png'
import icon1 from './images/icon1.svg';
import icon2 from './images/icon2.svg';
import icon3 from './images/icon3.svg';

export default function Marcas(){
	return(
		<div className="marcas">
			<section class="marcas">
	            <div class="center">
	                <img src={logo1} />
	                <img src={logo2} />
	                <img src={logo3} />
	                <img src={logo4} />
	                <img src={logo5} />

	            </div>
	        </section>

	        <section class="porque-nos">
            <div class="center">
                <h2>Por Que Nós?</h2>
                <p>Uma experiência incrível para seus clientes, resultados espetaculares para sua empresa.</p>

                <div class="diferenciais">
                    <div class="box-diferenciais">
                        <img src={icon1} />
                        <h3>Planejamento impecável</h3>
                        <p>Conte com a Agência Bold como sua parceira no planejamento de seus projetos, conteúdos, campanhas, estratégias. Nossos profissionais altamente qualificados estão preparados para qualquer desafio.</p>
                    </div>
                    <div class="box-diferenciais">
                        <img src={icon2} />
                        <h3>Planejamento impecável</h3>
                        <p>Conte com a Agência Bold como sua parceira no planejamento de seus projetos, conteúdos, campanhas, estratégias. Nossos profissionais altamente qualificados estão preparados para qualquer desafio.</p>
                    </div>
                    <div class="box-diferenciais">
                        <img src={icon3} />
                        <h3>Planejamento impecável</h3>
                        <p>Conte com a Agência Bold como sua parceira no planejamento de seus projetos, conteúdos, campanhas, estratégias. Nossos profissionais altamente qualificados estão preparados para qualquer desafio.</p>
                    </div>
                </div>
            </div>
        </section>

        
		</div>
	)
};

