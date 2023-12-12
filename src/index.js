function generatePoem(event)
{
    event.preventDefault();

    new Typewriter("#poem",{
    strings:"Better than Heaven or Arcadia I love thee, O my India!",
    autoStart:true,
    cursor:"",
    delay:1
    });
}

let formElement = document.querySelector("#form");
formElement.addEventListener("submit",generatePoem);