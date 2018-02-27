//change the css names for desktop
$(document).ready(function () {
    //navigation / button
    //hides the navigation ASAP
    $("nav").hide();
    
    
    

    //when button is clicked the nav is visible
    $("button").click(function () {
        $("nav").show();

        //page jumps
        $(".navTop").click(function () {
            window.scrollTo(0, 0);
            $("nav").hide();
        });
        
        //page jumps
        $(".navAbout").click(function () {
            window.scrollTo(0, 752);
            $("nav").hide();
        });
        
        //page jumps
        $(".navType").click(function () {
            window.scrollTo(0, 1250);
            $("nav").hide();
        });
        
         //page jumps
        $(".navCharMap").click(function () {
            window.scrollTo(0, 2480);
            $("nav").hide();
        });
        
         //page jumps
        $(".navGall").click(function () {
            window.scrollTo(0, 3970);
            $("nav").hide();
        });
        
        //page jumps
        $(".navDemo").click(function () {
            window.scrollTo(0, 5000);
            $("nav").hide();
        });
    });
    
});
