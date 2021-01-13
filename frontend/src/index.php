<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>EcoCasa</title>
    <link rel="icon" href="./assets/images/iconlogo.svg" />

    <link rel="stylesheet" href="./assets/css/global.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

    <style>
        .container-devs{
            display:flex;
            flex-direction: column;
            align-items: center;
        }
        .teste {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            width: 60vw;

        }

        .teste2 {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            width: 60vw;

        }

        .teste img {
            width: 20vw !important;
            width: 20vh !important;
        }

        .teste2 img {
            width: 20vw !important;
            width: 20vh !important;

        }

        .cardDev {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    </style>
</head>

<body>
    <nav class="navbar navbar-expand-lg navbar-light shadow" id="menu">
        <div class="container">
            <a class="navbar-brand" href="./index.php">
                <img src="./assets/images/logopage.png" width="50%" title="Logo EcoLar">
            </a>
            <a class="btn btn-outline-light" href="./login_usuario.php">Entre ou Cadastre-se</a>
        </div>
    </nav>

    <section class="row container my-5 mx-auto px-0">
        <div id="carouselExampleIndicators" class="carousel slide col-lg-9 col-12" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active" id="imgcarousel">
                    <img class="d-block w-100" src="./assets/images/imgcarousel1.jpg" alt="Primeiro Slide">
                </div>
                <div class="carousel-item" id="imgcarousel">
                    <img class="d-block w-100" src="./assets/images/imgcarousel2.jpg" alt="Segundo Slide">
                </div>
                <div class="carousel-item" id="imgcarousel">
                    <img class="d-block w-100" src="./assets/images/imgcarousel3.jpg" alt="Terceiro Slide">
                </div>
                <div class="carousel-item" id="imgcarousel">
                    <img class="d-block w-100" src="./assets/images/imgcarousel4.jpeg" alt="Quarto Slide">
                </div>
                <div class="carousel-item " id="imgcarousel">
                    <img class="d-block w-100" src="./assets/images/imgcarousel5.jpeg" alt="Quinto Slide">
                </div>
            </div>
        </div>

        <div class="col-3 mt-lg-0 mt-5">
            <h2 class="text-center text-dark">Ocupação Anchieta</h2>
            <h5 class="text-center text-dark pt-2">É possível viver nessas áreas preservando os recursos naturais?</h5>
            <p class="pt-4 text-center">
                Os lotes estão em terrenos privados e estão sendo negociadas com o proprietário da área,
                o Instituto Anchieta do Grajaú, que inclui um projeto de urbanização. As fontes termais
                da região foram colocadas em quarentena e a Sabesp também estuda a implantação de instalações
                de saneamento básico.
            </p>
        </div>
        <div class="col-lg-12 col-12 mt-lg-5 mt-5">
            <h2 class="text-center text-dark">O que você conhece das ocupações por moradia?</h2>
            <p class="pt-4 text-center">
                Sempre vemos na televisão o momento em que a polícia invade o terreno com violência e as máquinas
                já estão lá fazendo o ‘serviço’ de Reintegração de Posse, a mando da Prefeitura.
                Mas o que vem antes? Às vezes vemos e não nos perguntamos por que as pessoas vivem lá e como vivem.
            </p>
            <p class="pt-3 text-center">
                “Estamos aqui pelo nosso direito a ter onde morar, onde viver, quem agora vive nesse terreno são famílias,
                muitas com crianças, que não teriam outro lugar para morar”
            </p>
            <p class="pt-3 text-right">
                <u><i>fala de um morador da ocupação.</i></u>
            </p>
        </div>
    </section>

    <section class="m-auto shadow border">
        <h2 class="text-center text-dark mt-5">Estatisticas</h2>
        <h4 class="text-center text-dark mt-5">A ocupação em números</h4>
        <div class="row container mx-auto py-5 px-0">
            <div class="col-md-4 col-12 my-5">
                <h2 class="text-center">70%</h2>
                <p class="text-center">
                    dos trabalhadores perderam os seus
                    empregos por conta da Pandemia
                </p>
            </div>

            <div class="col-md-4 col-12 my-5">
                <h2 class="text-center">R$1.045,00</h2>
                <p class="text-center">
                    muitos vivem com menos de um salário<br>
                    mínimo
                </p>
            </div>

            <div class="col-md-4 col-12 my-5">
                <h2 class="text-center">1100 Familias</h2>
                <p class="text-center">
                    é o número de familias que vivem nessa
                    ocupação<br>em extrema pobreza
                </p>
            </div>
            <p class="pt-3 text-right">
                <u><i>Informações cedidas pela organização Anchieta.</i></u>
            </p>
        </div>
        <div class="container-devs">
            <h2>Desenvolvedores</h2>
            <div class="col-12 teste mt-3">
                <div class="cardDev">
                    <img src="./assets/images/devs/edson.jpeg" alt="..." class="rounded-circle">
                    <h4>Edson</h4>
                    <div class="social">
                        <a href="google.com" alt="">teste</a>
                        <a href="google.com" alt="">teste</a>
                    </div>
                </div>
                <div class="cardDev">
                    <img src="./assets/images/devs/elnatan.jpeg" alt="..." class="rounded-circle">
                    <h4>Elnatan</h4>
                    <div class="social">
                        <a href="google.com" alt="">teste</a>
                        <a href="google.com" alt="">teste</a>
                    </div>
                </div>
                <div class="cardDev">
                    <img src="./assets/images/devs/frederico.jpeg" alt="..." class="rounded-circle">
                    <h4>Frederico</h4>
                    <div class="social">
                        <a href="google.com" alt="">teste</a>
                        <a href="google.com" alt="">teste</a>
                    </div>
                </div>
            </div>
            <div class="col-12 teste2 mt-3">
                <div class="cardDev">
                    <img src="./assets/images/devs/gustavo.jpeg" alt="..." class="rounded-circle">
                    <h4>Gustavo</h4>
                    <div class="social">
                        <a href="google.com" alt="">teste</a>
                        <a href="google.com" alt="">teste</a>
                    </div>
                </div>
                <div class="cardDev">
                    <img src="./assets/images/devs/taina.jpeg" alt="..." class="rounded-circle">
                    <h4>Taina</h4>
                    <div class="social">
                        <a href="google.com" alt="">teste</a>
                        <a href="google.com" alt="">teste</a>
                    </div>
                </div>
                <div class="cardDev">
                    <img src="./assets/images/devs/thamirez.jpeg" alt="..." class="rounded-circle">
                    <h4>Thamirez</h4>
                    <div class="social">
                        <a href="google.com" alt="">teste</a>
                        <a href="google.com" alt="">teste</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <footer>
        <div class="footer-copyright text-center py-3">&copy; Copyright: 2020. Todos os direitos Reservados <br /> Criado com <img draggable="false" class="emoji" alt=":heart:" src="https://s.w.org/images/core/emoji/11.2.0/svg/2764.svg" width="12px"> pelo <b>Squad
                9</b>. Para o <a href="https://www.recodepro.org.br/">Recode Pro</a>.
        </div>
    </footer>





    <script src="./js/validacao_form.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>
</body>

</html>