window.onload = function(){

    //main'ss animate
    let forums = document.getElementsByClassName("forum")
    for(let f of forums)
        f.classList.add("wow")

    let oddForums = document.querySelectorAll(".forum:nth-child(odd)")
    for(let f of oddForums)
        f.classList.add("animate__backInLeft")

    let evenForums = document.querySelectorAll(".forum:nth-child(even)")
    for(let f of evenForums)
        f.classList.add("animate__backInRight")

    //title's animate
    let tit = document.getElementsByClassName("title")
    for(let f of tit)
    {
        f.classList.add("wow")
        f.classList.add("animate__zoomIn")
    }

    //ads animate
    let ad = document.getElementsByClassName("ads")
    for(let f of ad)
    {
        f.classList.add("wow")
        f.classList.add("animate__fadeInUp")
    }

    //backButton click
    $(document).ready(function(){
        $("#backButton").hide()        
        $(window).scroll(function(){
            if($(this).scrollTop() >= 100)
                $("#backButton").show("slow")
            else
                $("#backButton").hide("slow")

        })
        $("#backButton").click(function(){
            $("html, body").animate({
                scrollTop: 0
            },1000)
        })
    })

    wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animate__animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
      }
      )
      wow.init();
}