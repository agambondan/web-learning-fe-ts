export async function getUserData() {
    return await fetch('https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes', {method: "GET"
    })
        .then((result) => {
            const data =  result.json();
            return data;
        });
}
