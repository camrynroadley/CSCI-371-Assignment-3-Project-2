window.onload = function () {

    var travel1 =
    {
        name: "Canada",
        continent: "North America",
        cities: ["Calgary", "Montreal", "Toronto"],
        photos: ["canada1.jpg", "canada2.jpg", "canada3.jpg"]
    };

    var travel2 =
    {
        name: "United States",
        continent: "North America",
        cities: ["Boston", "Chicago", "New York", "Seattle", "Washington"],
        photos: ["us1.jpg", "us2.jpg"]
    };

    var travel3 =
    {
        name: "Italy",
        continent: "Europe",
        cities: ["Florence", "Milan", "Naples", "Rome"],
        photos: ["italy1.jpg", "italy2.jpg", "italy3.jpg", "italy4.jpg", "italy5.jpg", "italy6.jpg"]
    };

    var travel4 =
    {
        name: "Spain",
        continent: "Europe",
        cities: ["Almeria", "Barcelona", "Madrid"],
        photos: ["spain1.jpg", "spain2.jpg"]
    };

    var travels = [travel1, travel2, travel3, travel4];

    document.write("<header><h2>Share Your Travels</h2></header>");

    for (var i = 0; i < travels.length; i++) {
        outputCountryBox(travels[i].name, travels[i].continent,
            travels[i].cities, travels[i].photos);
    }

    function outputCountryBox(name, continent, cities, photos) {
        document.write('<div class="item">');
        document.write("<h2>" + name + "</h2>");
        document.write("<p>" + continent + "</p>");
        outputCities(cities);
        outputPhotos(photos);

        function outputCities(cities) {
            document.write("<div>");
            document.write("<h3>Cities</h3>");
            document.write("<ul>");
            for (var i = 0; i < cities.length; i++) {
                document.write("<li>" + cities[i] + "</li>")
            }
            document.write("</ul>");
            document.write("</div>");
        }

        function outputPhotos(photos) {
            document.write("<div>");
            document.write("<h3>Popular Photos</h3>");
            for (var i = 0; i < photos.length; i++) {
                document.write('<img src="' + photos[i] + '" class="photo">')
            }
            document.write("</div>");
        }
        document.write("<button>Visit</button>");
        document.write("</div>");

    }
}

