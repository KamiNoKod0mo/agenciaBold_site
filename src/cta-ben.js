import './cta-ben.css';
import checklist from './images/checklist.svg';
import macbook from './images/mackbook.png';


export default function CtaBen(){


	return(
		<div class="cta-ben">
			<section class="cta">
	             <h2>Vamos Começar Seu Projeto?</h2>
	             <h4>Fale agora mesmo com um de nossos consultores!</h4>
	             <a href="/contato">Entrar em Contato</a>
		    </section>

		    <section class="beneficios">
		        <div style={{ maxWidth: '1280px' }} class="center">
		            <div class="lista-beneficios">
		                <h1>Benefícios Para Você</h1>
		                <br/>
		                <p><img src={checklist} /><span>Garantia de resultados, pague de acordo com o desempenho do seu projeto ou campanha.</span></p>
		                <p><img src={checklist} /><span>Garantia de resultados, pague de acordo com o desempenho do seu projeto ou campanha.</span></p>
		                <p><img src={checklist} /><span>Garantia de resultados, pague de acordo com o desempenho do seu projeto ou campanha.</span></p>
		                <p><img src={checklist} /><span>Garantia de resultados, pague de acordo com o desempenho do seu projeto ou campanha.</span></p>
		            </div>
		            <div class="img-beneficios">
		                <img src={macbook} />
		            </div>
		        </div>
		    </section>
		</div>
	)
};