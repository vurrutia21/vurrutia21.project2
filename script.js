function printData(countries) {
    var countryMarkupList = [];
    for (let country of countries) {
      countryMarkupList.push(`
        <div class="country-card">
          <h3>${country.name}</h3>
          <img class="country-img" src="${country.flag}" alt="flag of ${country.name}" />
        </div>
      `);
    }
    const markup = countryMarkupList.join("");
  
    $(".js-country-container").html(markup);
  }
  
  function errorHandling() {
    const region = $("[name=region]").val();
    $(".js-country-container").html(`
      Region ${encodeURIComponent(region)} does not exist.
    `);
  }
  
  function loadCountries() {
    const region = $("[name=region]").val();
    $.get(`https://restcountries.eu/rest/v2/region/${region}`)
      .done(printData)
      .fail(errorHandling);
  }
  
  // $("[name=region]").change(loadCountries);
  $(".js-load-countries").click(loadCountries);
  
  loadCountries();