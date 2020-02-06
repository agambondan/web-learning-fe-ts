export async function getDataArticles() {
    return await fetch('https://newsapi.org/v2/everything?q=bitcoin&from=2020-01-06&sortBy=publishedAt&apiKey=afdaec5184a348f2ba51c5668dc5add2', {method: "GET"
    })
        .then(async (result) => {
            console.log(result)
            return await result.json();
        });
}
