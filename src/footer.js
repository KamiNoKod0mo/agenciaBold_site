import "./footer.css";

export default function Footer(){
	return(
		<div className='footer'>
			<footer>
            <div style={{maxWidth: "1280px"}} class="center">
                <div class="text-footer">
                    <p>Todos os direitos reservados a Danki Code</p>
                </div>
                <div class="items-menu">
                    <a href="#">Início</a>
                        <a href="#">Por que nós?</a>
                        <a href="#">Depoimentos</a>
                        <a class="contact-btn" href="">Entre em Contato</a>
                </div>
            </div>
        </footer>
		</div>
	)
};

