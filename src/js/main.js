$(document).ready(function () {

    //slider

    $('.galeria').bxSlider({
        mode: 'fade',
        captions: 'true',
        slidewidth: 1200,
        responsive: true,
        pager: true,
    });

    //Posts

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


});