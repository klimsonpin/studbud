const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const btn = document.getElementById("search-btn");

//The event listener checks for the input value then uses that value to fetch the definition from the dictionary API.
btn.addEventListener("click", () => {
    let inpWord = document.getElementById("input-word").value;
    fetch(`${url}${inpWord}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            //Once the defintion is received the div class result inputs new html containing the word,meaning,details, and examples from the dictionaryAPI.
            result.innerHTML = `
            <div class="word">
                    <h3>${inpWord}</h3>
                
                </div>
                <div class="details">
                    <p>${data[0].meanings[0].partOfSpeech}</p>
                    <p>/${data[0].phonetic}/</p>
                </div>
                <p class="word-meaning">
                   ${data[0].meanings[0].definitions[0].definition}
                </p>
                <p class="word-example">
                    ${data[0].meanings[0].definitions[0].example || ""}
                </p>`;
            sound.setAttribute("src", `https:${data[0].phonetics[0].audio}`);
        })
        .catch(() => {
            result.innerHTML = `<h3 class="error">No results found for <h3>${inpWord}</h3></h3>`;
        });
});
