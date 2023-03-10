// iskoristiti star wars api za dobivanje podataka o likovima iz star warsa
// prikažite ime, godinu rođenja, boju kose i očiju
// ako nema lika u bazi, tada obavjestiti korisnika da lik ne postoji u bazi
// ako imamo problem s dohvatom podataka, također obavjestiti korisnika
// potom svaki file (html, css, javascript) postaviti na vlastitu granu, kasnije spojiti različite grane u jednu main / master

$(document).ready(function(){
    $("#character-form").submit(function(event){
        event.preventDefault();
        var imeLika = $("character-name").val();
        var url = "https://swapi.dev/api/people/?search=" + imeLika;
        $.ajax({
            url: url,
            dataType: "json",
            type:"GET",
            success: function(data){
                if(data.results.length > 0){
                    var lik = data.results[0];
                    // prikaži ime , godina, spol...
                    var likInfo = "<h1>" + lik.name + "</h1>";
                    linkInfo += "<p>" + lik.birth_year + "</p>";
                    linkInfo += "<p>" + lik.gender + "</p>";
                    linkInfo += "<p>" + lik.hair_color + "</p>";
                    linkInfo += "<p>" + lik.eye_color + "</p>";
                    $("character-info").html(likInfo);
           
                }
                else{
                    $("character-info").html("<p>Podaci o liku nisu pronađeni</p>")
                }

            },
            error:function(){
                $("character-info").html("<p>Podaci nisu dohvaćeni. Molimo pokušajte kasnije!</p>")
            }
        });
    });
});