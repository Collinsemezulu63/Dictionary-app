const wordInput = document.querySelector("input").value;
const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${wordInput}`;
async function getWord() {
  // console.log(wordInput);
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new error("This word is incorrect");
    }
    const data = await response.json();
    console.log(data);
    displayWord(data);
  } catch (error) {
    alert(error.message);
  }
}

function displayWord(W) {
  document.querySelector("section").innerHTML = `
            <div class="cont">
                <div class="wrapper1">
                    <div class="word-cont">
                        <h1 class="word">${W[0].word}</h1>
                        <p class="part-of-speech">${
                          W[0].meanings[0].partOfSpeech
                        }<span class="phonetics" style="margin:0px 5px">${
    W[0].phonetic
  }</span></p>
                    </div>
                    <i class="fas fas fa-volume-up" style="cursor: pointer;"></i>
                </div>
                <div class="wrapper">
                    <h3>Meaning</h3>
                    <p class="meaning">${
                      W[0].meanings[0].definitions[0].definition
                    }</p>
                </div>
                <div class="wrapper">
                    <h3>Antonyms</h3>
                    <p class="example">${
                      W[0].meanings[0].antonyms
                        ? W[0].meanings[0].antonyms
                        : "No antonymys for this word"
                    }</p>
                </div>
                <div class="wrapper">
                    <h3>Synonyms</h3>
                    <p class="synonyms">${
                      W[0].meanings[0].synonyms
                        ? W[0].meanings[0].synonyms
                        : "No synonyms for this word"
                    }
                    </p>
                </div>
            `;
}
