$( function() {
    // init tabs
    $( ".services-tab" ).tabs();
    $( ".portfolio-tab" ).tabs();
    // init portfolio tabs

    //init reviews carousel
    $('.reviews-carousel').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000
    });
    // init Slicknav
    $('.nav').slicknav({
        appendTo: "#header .container-fluid",
        label: ""
    });

} );