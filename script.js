:root {
    --grafite: #2B2B2E;
    --dourado: #C99A44;
    --dourado-claro: #E5BD70;
    --branco: #ffffff;
    --cinza: #f5f5f3;
    --texto: #333333;
}


/* GERAL */

html {
    scroll-behavior: smooth;
}

body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    color: var(--texto);
}

section {
    scroll-margin-top: 80px;
}


/* MENU */

.navbar {
    background: rgba(43, 43, 46, 0.98);
    padding: 15px 0;
}

.navbar-brand {
    font-size: 1.4rem;
}

.navbar-brand span {
    color: var(--dourado);
}

.nav-link {
    color: white !important;
    margin-left: 8px;
}

.nav-link:hover {
    color: var(--dourado) !important;
}


/* BOTÃO */

.btn-dourado {
    background: var(--dourado);
    border: 1px solid var(--dourado);
    color: white;
    font-weight: bold;
}

.btn-dourado:hover {
    background: #a97d32;
    border-color: #a97d32;
    color: white;
}


/* HERO */

.hero {
    min-height: 100vh;

    background:
        linear-gradient(
            rgba(25, 25, 27, 0.88),
            rgba(43, 43, 46, 0.78)
        ),
        url("https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1800&q=80");

    background-size: cover;
    background-position: center;

    color: white;

    display: flex;
    align-items: center;
}

.hero-content {
    max-width: 750px;
    padding-top: 70px;
}

.hero h1 {
    font-size: clamp(3rem, 7vw, 5.5rem);
    font-weight: 800;
    line-height: 1.05;
}

.hero h1 span {
    color: var(--dourado);
}

.hero .lead {
    font-size: 1.25rem;
    max-width: 650px;
}


/* TÍTULOS */

.titulo-pequeno {
    color: #777;
    font-size: 0.8rem;
    font-weight: bold;
    letter-spacing: 2px;
}

.titulo-secao {
    text-align: center;
    max-width: 700px;
    margin: 0 auto 50px;
}

.titulo-secao h2 {
    font-size: 2.7rem;
    font-weight: 800;
}

.dourado {
    color: var(--dourado);
}


/* CAROUSEL */

.carousel-item {
    min-height: 350px;
    background-size: cover;
    background-position: center;
    color: white;
}

.slide1 {
    background:
        linear-gradient(
            rgba(43,43,46,.9),
            rgba(43,43,46,.6)
        ),
        url("https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=80");
}

.slide2 {
    background:
        linear-gradient(
            rgba(43,43,46,.9),
            rgba(43,43,46,.6)
        ),
        url("https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80");
}

.slide3 {
    background:
        linear-gradient(
            rgba(43,43,46,.9),
            rgba(43,43,46,.6)
        ),
        url("https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1600&q=80");
}

.carousel-text {
    padding-top: 80px;
    padding-bottom: 70px;
}

.carousel-text h2 {
    font-size: 2.6rem;
    font-weight: 800;
    margin-top: 15px;
}

.badge-dourado {
    background: var(--dourado);
    padding: 8px 14px;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: bold;
}


/* SEÇÕES */

.secao {
    padding: 90px 0;
}

.secao-escura {
    background: var(--grafite);
    color: white;
}


/* CARDS */

.card-servico {
    height: 100%;
    padding: 35px 30px;

    border: 1px solid #e5e5e5;
    border-radius: 15px;

    background: white;

    box-shadow: 0 8px 25px rgba(0,0,0,.06);

    transition: .25s;

    display: flex;
    flex-direction: column;
}

.card-servico:hover {
    transform: translateY(-7px);
    box-shadow: 0 15px 35px rgba(0,0,0,.12);
}

.card-servico h3 {
    font-size: 1.35rem;
    font-weight: 800;
    margin-top: 20px;
}

.card-servico p {
    color: #666;
    line-height: 1.7;
    flex-grow: 1;
}

.icone-servico {
    width: 60px;
    height: 60px;

    border-radius: 14px;

    background: #f4ead8;

    color: var(--dourado);

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.8rem;
}

.preco {
    color: var(--dourado);
    font-size: 1.1rem;
    font-weight: bold;
    margin: 20px 0;
}


/* ACCORDION */

.accordion-item {
    background: #343438;
    color: white;
    border-color: #555;
}

.accordion-button {
    background: #343438;
    color: white;
    font-weight: bold;
}

.accordion-button:not(.collapsed) {
    background: #303034;
    color: var(--dourado);
}

.accordion-body {
    color: #ddd;
}


/* DEPOIMENTOS */

.depoimento {
    height: 100%;

    padding: 25px;

    border: 1px solid #e5e5e5;
    border-radius: 15px;

    background: white;
}

.depoimento p {
    font-style: italic;
    color: #555;
    line-height: 1.6;
}

.depoimento strong {
    display: block;
}

.depoimento small {
    color: #888;
}

.avatar {
    width: 50px;
    height: 50px;

    border-radius: 50%;

    background: var(--grafite);
    color: var(--dourado-claro);

    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: bold;

    margin-bottom: 20px;
}


/* CONTATO */

.contato {
    background: #f5f5f3;
}

.formulario,
.contato-box {
    background: white;
    padding: 30px;

    border-radius: 15px;

    box-shadow: 0 8px 25px rgba(0,0,0,.06);
}

.contato-box h3 {
    font-weight: bold;
}

.contato-box i {
    color: var(--dourado);
    margin-right: 8px;
}


/* MAPA */

.mapa {
    width: 100%;
    height: 400px;
    border: 0;
    display: block;
}


/* RODAPÉ */

footer {
    background: #1e1e20;
    color: #bbb;
    padding: 45px 0;
}

footer h3 {
    color: white;
}

footer h3 span {
    color: var(--dourado);
}


/* RESPONSIVIDADE */

@media (max-width: 768px) {

    .hero {
        min-height: 750px;
    }

    .hero h1 {
        font-size: 3rem;
    }

    .hero .lead {
        font-size: 1rem;
    }

    .carousel-text h2 {
        font-size: 2rem;
    }

    .secao {
        padding: 65px 0;
    }

    .titulo-secao h2 {
        font-size: 2.2rem;
    }

    .btn-lg {
        margin-bottom: 10px;
    }

}
