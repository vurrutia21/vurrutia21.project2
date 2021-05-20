function printData(countries) {
    console.log(countries);
    var countryMarkupList = [];
    for (let country of countries)
        countryMarkupList.push(`
            <div>
                <h3>${country.name}</h3>
                <img src="$(country.flag)" alt="flag of ${country.name}" />
            </div>
        `);
}
    console.log(countryMarkupList.join(""));

    fetch('https://restcountries.eu/rest/v2/all')
    .then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data);
    })
        let imageUrl = data.message;
        console.log(imageUrl);
})