$(document).ready(function() {

    $("#model-selection :nth-child(1) a").mouseover(function() {
        $("#index-bottom :nth-child(1), #index-bottom :nth-child(2)").addClass("show-explore");
    });


    $("#model-selection :nth-child(1) a").mouseout(function() {
        $("#index-bottom :nth-child(1), #index-bottom :nth-child(2)").removeClass("show-explore");
    });

    $("#model-selection :nth-child(2) a").mouseover(function() {
        $("#index-bottom :nth-child(4), #index-bottom :nth-child(5)").addClass("show-recommend");
    });


    $("#model-selection :nth-child(2) a").mouseout(function() {
        $("#index-bottom :nth-child(4), #index-bottom :nth-child(5)").removeClass("show-recommend");
    });

    // ,
    //  function() {
    //     $("#index-bottom :nth-child(1)， #index-bottom :nth-child(2)").removeClass("show-explore")
    //  }



})