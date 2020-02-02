$(document).ready(function () {

    //slider

    if (window.location.href.indexOf('index') > -1) {

        $('.galeria').bxSlider({
            mode: 'fade',
            captions: 'true',
            slidewidth: 1200,
            responsive: true,
            pager: true,
        });

    }

    //Posts
    if (window.location.href.indexOf('index') > -1) {
        var posts = [{
                title: 'Prueba de titulo 1',
                date: 'Publicado el dia ' + moment().format("dddd") + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de text. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de text. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de text. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de text. '
            },
            {
                title: 'Prueba de titulo 2',
                date: 'Publicado el dia ' + moment().format("dddd") + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de text. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de text. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de text. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de text. '
            },
            {
                title: 'Prueba de titulo 3',
                date: 'Publicado el dia ' + moment().format("dddd") + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de text. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de text. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de text. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de text. '
            },
            {
                title: 'Prueba de titulo 4',
                date: 'Publicado el dia ' + moment().format("dddd") + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de text. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de text. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de text. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de text. '
            },
        ];

        posts.forEach((item, index) => {
            var post =
                `
        <article class="post">
            <h2>${item.title}</h2>
            <span class="date">${item.date}</span>
            <p>
                ${item.content}
            </p>
            <a href="#" class="button-more">Leer más</a>
        </article>`;

            console.log(post);

            $("#posts").append(post);

        });

    }

    /*Selector de tema*/

    var theme = $("#theme");

    $("#to-green").click(function () {
        theme.attr("href", "src/css/green.css");
    });

    $("#to-blue").click(function () {
        theme.attr("href", "src/css/blue.css");
    });

    $("#to-red").click(function () {
        theme.attr("href", "src/css/red.css");
    });

    //Login falso

    $("#login form").submit(function () {
        var form_name = $("#form_name").val();

        localStorage.setItem("form_name", form_name);

    });

    var form_name = localStorage.getItem("form_name");

    if (form_name != null && form_name != "undefined") {
        var about_parrafo = $("#about p");

        about_parrafo.html("<br><strong>Bienvenido, " + form_name + "</strong>");
        about_parrafo.append("<a href='#' id='logout'>Cerrar sesion</a>");

        $("#login").hide();

        $("#logout").click(function () {
            localStorage.clear();
            location.reload();
        });
    }

    //Acordeon

    if (window.location.href.indexOf('about') > -1) {
        $("#acordeon").accordion();
    }

    //Reloj

    if (window.location.href.indexOf('reloj') > -1) {
        setInterval(function(){
            var reloj= moment().format("hh:mm:ss");
            $('#reloj').html(reloj);
        },1000);

    }


});