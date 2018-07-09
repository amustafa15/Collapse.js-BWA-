// var $j = jQuery.noConflict();
// //     $j(document).ready(function(){
// //         var readMoreHtml = $j(".read-more").html();
// //         var lessText = readMoreHtml.substr(0, 800);
// //         if(readMoreHtml.length > 800) {
// //             $j(".read-more").html(lessText).append("<a href='' class='read-more-link'>Show More</a>");
// //         } else {
// //             $j(".read-more").html(readMoreHtml);
// //         }
// //         $j("body").on("click", ".read-more-link", function(event){
// //             event.preventDefault();
// //             $j(this).parent(".read-more").html(readMoreHtml).append("<a href='' class='show-less-link'>Show Less</a>");
// //         });
// //         $j("body").on("click", ".show-less-link", function(event){
// //             event.preventDefault();
// //             $j(this).parent(".read-more").html(readMoreHtml.substr(0, 800)).append("<a href='' class='read-more-link'>Read More</a>");
// //         });
// //     });


    // $j(document).ready(function(){
    //     var readMoreHtmlOne = $j(".read-more1").html();
    //     var lessTextOne = readMoreHtmlOne.substr(0, 700);
    //     if(readMoreHtmlOne.length > 700) {
    //         $j(".read-more1").html(lessTextOne).append("<a href='' class='read-more-link1'>Show More</a>");
    //     } else {
    //         $j(".read-more1").html(readMoreHtmlOne);
    //     }
    //     $j("body").on("click", ".read-more-link1", function(event){
    //         event.preventDefault();
    //         $j(this).parent(".read-more1").html(readMoreHtmlOne).append("<a href='' class='show-less-link1'>Show Less</a>");
    //     });
    //     $j("body").on("click", ".show-less-link1", function(event){
    //         event.preventDefault();
    //         $j(this).parent(".read-more1").html(readMoreHtmlOne.substr(0, 700)).append("<a href='' class='read-more-link1'>Read More</a>");
    //     });
    // });

    // $j(document).ready(function(){
    //     var readMoreHtml = $j(".read-more2").html();
    //     var lessText = readMoreHtml.substr(0, 500);
    //     if(readMoreHtml.length > 500) {
    //         $j(".read-more2").html(lessText).append("<a href='' class='read-more-link2'>Show More</a>");
    //     } else {
    //         $j(".read-more2").html(readMoreHtml);
    //     }
    //     $j("body").on("click", ".read-more-link2", function(event){
    //         event.preventDefault();
    //         $(this).parent(".read-more2").html(readMoreHtml).append("<a href='' class='show-less-link2'>Show Less</a>");
    //     });
    //     $j("body").on("click", ".show-less-link2", function(event){
    //         event.preventDefault();
    //         $j(this).parent(".read-more2").html(readMoreHtml.substr(0, 500)).append("<a href='' class='read-more-link2'>Read More</a>");
    //     });
    // });

    // $j(document).ready(function(){
    //     var readMoreHtml = $j(".read-more3").html();
    //     var lessText = readMoreHtml.substr(0, 500);
    //     if(readMoreHtml.length > 500) {
    //         $j(".read-more3").html(lessText).append("<a href='' class='read-more-link3'>Show More</a>");
    //     } else {
    //         $j(".read-more3").html(readMoreHtml);
    //     }
    //     $j("body").on("click", ".read-more-link3", function(event){
    //         event.preventDefault();
    //         $j(this).parent(".read-more3").html(readMoreHtml).append("<a href='' class='show-less-link3'>Show Less</a>");
    //     });
    //     $j("body").on("click", ".show-less-link3", function(event){
    //         event.preventDefault();
    //         $j(this).parent(".read-more3").html(readMoreHtml.substr(0, 500)).append("<a href='' class='read-more-link3'>Read More</a>");
    //     });
    // });
    
    
    // $j(document).ready(function(){
    //     var readMoreHtml = $j(".read-more4").html();
    //     var lessText = readMoreHtml.substr(0, 500);
    //     if(readMoreHtml.length > 500) {    
    //         $j(".read-more4").html(lessText).append("<a href='' class='read-more-link4'>Show More</a>");
    //     } else {
    //         $j(".read-more4").html(readMoreHtml);
    //     }
    //     $j("body").on("click", ".read-more-link4", function(event){
    //         event.preventDefault();
    //         $j(this).parent(".read-more4").html(readMoreHtml).append("<a href='' class='show-less-link4'>Show Less</a>");
    //     });
    //     $j("body").on("click", ".show-less-link4", function(event){
    //         event.preventDefault();
    //         $j(this).parent(".read-more4").html(readMoreHtml.substr(0, 500)).append("<a href='' class='read-more-link4'>Read More</a>");
    //     });
    // });
var $ = jQuery.noConflict();
    $(document).ready(function(){
        var readMoreHtml = $(".read-more").html();
        var lessText = readMoreHtml.substr(0, 469);
        if(readMoreHtml.length > 469) {
            $(".read-more").html(lessText).append("<a href='' class='read-more-link'>Read More</a>");
        } else {
            $(".read-more").html(readMoreHtml);
        }
        $("body").on("click", ".read-more-link", function(event){
            event.preventDefault();
            $(this).parent(".read-more").html(readMoreHtml).append("<a href='' class='show-less-link'>Read Less</a>");
        });
        $("body").on("click", ".show-less-link", function(event){
            event.preventDefault();
            $(this).parent(".read-more").html(readMoreHtml.substr(0, 469)).append("<a href='' class='read-more-link'>Read More</a>");
        });
    });


    $(document).ready(function(){
        var readMoreHtmlOne = $(".read-more1").html();
        var lessTextOne = readMoreHtmlOne.substr(0, 422);
        if(readMoreHtmlOne.length > 422) {
            $(".read-more1").html(lessTextOne).append("<a href='' class='read-more-link1'>Read More</a>");
        } else {
            $(".read-more1").html(readMoreHtmlOne);
        }
        $("body").on("click", ".read-more-link1", function(event){
            event.preventDefault();
            $(this).parent(".read-more1").html(readMoreHtmlOne).append("<a href='' class='show-less-link1'>Read Less</a>");
        });
        $("body").on("click", ".show-less-link1", function(event){
            event.preventDefault();
            $(this).parent(".read-more1").html(readMoreHtmlOne.substr(0, 422)).append("<a href='' class='read-more-link1'>Read More</a>");
        });
    });

    $(document).ready(function(){
        var readMoreHtml = $(".read-more2").html();
        var lessText = readMoreHtml.substr(0, 503);
        if(readMoreHtml.length > 503) {
            $(".read-more2").html(lessText).append("<a href='' class='read-more-link2'>Read More</a>");
        } else {
            $(".read-more2").html(readMoreHtml);
        }
        $("body").on("click", ".read-more-link2", function(event){
            event.preventDefault();
            $(this).parent(".read-more2").html(readMoreHtml).append("<a href='' class='show-less-link2'>Read Less</a>");
        });
        $("body").on("click", ".show-less-link2", function(event){
            event.preventDefault();
            $(this).parent(".read-more2").html(readMoreHtml.substr(0, 503)).append("<a href='' class='read-more-link2'>Read More</a>");
        });
    });

    $(document).ready(function(){
        var readMoreHtml = $(".read-more3").html();
        var lessText = readMoreHtml.substr(0, 308);
        if(readMoreHtml.length > 308) {
            $(".read-more3").html(lessText).append("<a href='' class='read-more-link3'>Read More</a>");
        } else {
            $(".read-more3").html(readMoreHtml);
        }
        $("body").on("click", ".read-more-link3", function(event){
            event.preventDefault();
            $(this).parent(".read-more3").html(readMoreHtml).append("<a href='' class='show-less-link3'>Read Less</a>");
        });
        $("body").on("click", ".show-less-link3", function(event){
            event.preventDefault();
            $(this).parent(".read-more3").html(readMoreHtml.substr(0, 308)).append("<a href='' class='read-more-link3'>Read More</a>");
        });
    });
    
    
    $(document).ready(function(){
        var readMoreHtml = $(".read-more4").html();
        var lessText = readMoreHtml.substr(0, 458);
        if(readMoreHtml.length > 458) {    
            $(".read-more4").html(lessText).append("<a href='' class='read-more-link4'>Read More</a>");
        } else {
            $(".read-more4").html(readMoreHtml);
        }
        $("body").on("click", ".read-more-link4", function(event){
            event.preventDefault();
            $(this).parent(".read-more4").html(readMoreHtml).append("<a href='' class='show-less-link4'>Read Less</a>");
        });
        $("body").on("click", ".show-less-link4", function(event){
            event.preventDefault();
            $(this).parent(".read-more4").html(readMoreHtml.substr(0, 458)).append("<a href='' class='read-more-link4'>Read More</a>");
        });
    });