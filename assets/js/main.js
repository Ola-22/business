$("document").ready(function($) {
    $(function() {

        $(".flipster").flipster({
            style: 'carousel',
            enableNav: false,
        });

    });

    $('.blog-posts .see-more').click(function() {
        $('.blog-posts .hidden-row').slideDown(400);
        $(this).hide();
    });


})