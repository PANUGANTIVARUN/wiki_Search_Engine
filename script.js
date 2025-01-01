let searchInputEl = document.getElementById("searchInput")
let searchResultsEl = document.getElementById("searchResults")
let spinnerEl = document.getElementById("spinner")

function createandsearchresult(result) {
    let divEl = document.createElement("div")
    searchResultsEl.appendChild(divEl)

    let ulEl = document.createElement("a")
    ulEl.classList.add("result-title")
    ulEl.setAttribute("href", result.link)
    ulEl.textContent = result.title
    divEl.appendChild(ulEl)

    let brEl = document.createElement("br")
    divEl.appendChild(brEl)

    let liEl = document.createElement("a")
    liEl.classList.add("link-url")
    liEl.setAttribute("href", result.link)
    liEl.textContent = result.link
    divEl.appendChild(liEl)

    let pEl = document.createElement("p")
    pEl.classList.add("link-description")
    pEl.textContent = result.description
    divEl.appendChild(pEl)
}

function displayResults(searchresults) {
    spinnerEl.classList.toggle("d-none")
    for (let result of searchresults) {
        //let result = searchresults[each] use this if you use (for each in searchresults)
        //console.log(result)
        createandsearchresult(result);
    }
}
//let result = searchresults[0]
//createandsearchresult(result);
//console.log(res)
//title 



function searchwiki(event) {

    if (event.key === "Enter") {
        spinnerEl.classList.toggle("d-none")
        searchResultsEl.innerHTML = "";
        let search = searchInputEl.value
        //console.log(search);
        let url = "https://apis.ccbp.in/wiki-search?search=" + search

        let options = {
            method: "GET"
        }
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                //console.log(jsonData)
                let {
                    search_results
                } = jsonData
                displayResults(search_results);
            })
    }
}

searchInputEl.addEventListener("keydown", searchwiki);