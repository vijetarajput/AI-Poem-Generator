function displayPoem(response){
console.log("Poem generated...");

    new Typewriter("#poem",{
    strings:response.data.answer,
    autoStart:true,
    cursor:"",
    delay:1
    });
}

function generatePoem(event)
{
    event.preventDefault();

    let input = document.querySelector("#inputbox");

    let apiKey = "03ob4taaa6f366304d608c02ae4ad453";
    let prompt = `User instructions are: Generate an english poem about ${input.value}`;
    let context = "You are a great poem expert and love to write short and sweet poems. Your mission is to generate 6-10 lines maximum poem in basic HTML. Make sure to follow user instructions.< Make sure the title or the heading of the poem comes under <h1></h1>";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    axios.get(apiUrl).then(displayPoem);

    console.log(`Generating poem on ${input.value}`);
    let poem = document.querySelector("#poem");
    poem.classList.remove("hidden");
    poem.innerHTML = `<div class="blink_me">Generating poem about <strong>${input.value}</strong></div>`;
    
}

let formElement = document.querySelector("#form");
formElement.addEventListener("submit",generatePoem);    