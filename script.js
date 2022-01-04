
    document.getElementById("button").addEventListener("click", function(){
        document.querySelector(".bg-modal").style.display = "flex";
    });

    document.querySelector(".closeBtn").addEventListener("click", function(){
        document.querySelector(".bg-modal").style.display = "none";
    });
