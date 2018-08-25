var url = "https://restcountries.eu/rest/v2/name/";
var countriesList = $("#countries");

$("#search").click(searchCountries);

function searchCountries() {
  var countryName = $("#country-name").val();
  if (!countryName.length) countryName = "Poland";
  $.ajax({
    url: url + countryName,
    method: "GET",
    success: showCountriesList
  });
}

function showCountriesList(resp) {
  var dd = resp[0].capital;
  console.log(dd);
  countriesList.empty();
  //resp.forEach(function(item) {
  // $("<li>")
  //   .text(item.name)
  //   .appendTo(countriesList);
  //});
  var html = "";
  for (var i = 0; i < resp.length; i++) {
    html +=
      "<table>" +
      "<tr class='firstRow'><td class='col1'><div><img src=" +
      resp[i].flag +
      " alt='flag' height='100%' width='100%'></div></td><td class='col2'>" +
      resp[i].name +
      "</td></tr>" +
      "<tr class='colspan'><td colspan='2'>Background Informations:</td></tr>" +
      "<tr><td class='col1'>" +
      "capital" +
      "</td><td class='col2'> : " +
      resp[i].capital +
      "<td></tr>" +
      "<tr><td class='col1'>" +
      "area" +
      "</td><td class='col2'> : " +
      Intl.NumberFormat().format(resp[i].area) +
      "<td></tr>" +
      "<tr><td class='col1'>" +
      "population" +
      "</td><td class='col2'> : " +
      Intl.NumberFormat().format(parseInt(resp[i].population * 0.001)) +
      " thousands<td></tr>" +
      "<tr><td class='col1'>" +
      "language(s)" +
      "</td><td class='col2'> : " +
      joining(resp[i].languages) +
      "<td></tr>" +
      "<tr><td class='col1'>" +
      "currency" +
      "</td><td class='col2'> : " +
      joining(resp[i].currencies) +
      "<td></tr>" +
      "<tr class='colspan'><td colspan='2'></td></tr>" +
      "</table>";
  }
  $("#tableHtml").html(html);
}

function joining(input) {
  const tab = [];

  for (let i = 0; i < input.length; i++) {
    tab.push(input[i].name);
  }

  return tab.join(", ");
}
