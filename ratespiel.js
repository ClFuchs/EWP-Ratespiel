// Erstelle eine Zufallszahl zwischen 1 und 100. Hier nichts aendern
let randomNumber = Math.floor(Math.random() * 100 + 1);

// TODO 1: Initalisieren Sie nach dieser Zeile eine Variable für die Versuchsanzahl.
let versuche_start = 7;
let versuche = 7;

/**
 * TODO 2: Erstellen Sie ein on-Click-Event für den Start-Button.
 * TODO 3: Setzen Sie den Versuchszähler auf 7 zurück (vergessen Sie dabei die Versuchsvariable nicht!).
 * TODO 4: Leeren Sie das Resultatsfeld.
 */
$("#start").on("click", function() {
	if (versuche!=7)
			{
			versuche = 7;
			}
    $("#versuchsanzahl").text(versuche);
	console.log(versuche);
	$("#resultat").text("");
	}
);

/**
 * TODO 5: Erstellen Sie ein on-Click-Event für den Check-Button
 * TODO 6: Lesen Sie den User-Input in eine Variable ein. Nutzen Sie zum auslesen folgende Codezeile (nach dem Sternchen):
 * $("#user-input").val();
 *
 * TODO 7: Überprüfen Sie die verschiedenen Bedindungen, die eintreten können. Geben entsprechende Nachrichten
 * und manipulieren Sie die Versuchszählervariable und das dazugehörige Feld dementsprechend.
 *
 * TODO 8: Sollte der Wert der Versuchszählervariable auf 0 fallen, geben Sie eine Nachricht aus, dass der Spieler verloren hat.
 */
$("#check").on("click", function() {
	let input = $("#user-input").val();
	console.log(versuche);
	if (versuche == 0)
		{
			$("#resultat").text("Sie haben verloren.");
		}
	else if (input == randomNumber)
		{
    $("#resultat").text("Ihre Zahl stimmt mit der Zufallszahl überein. Herzlichen Glückwunsch. Sie können nun ein neues Spiel beginnen.");
		}
	else if (input < randomNumber)
		{
			$("#resultat").text("Ihre Zahl ist kleiner als die Zufallszahl. Sie müssen eine höhere Zahl wählen.");
			versuche = versuche -1;
			$("#versuchsanzahl").text(versuche);

		}
	else if (input > randomNumber)
		{
			$("#resultat").text("Ihre Zahl ist größer als die Zufallszahl. Sie müssen eine niedrigere Zahl wählen.");
			versuche = versuche -1;
			$("#versuchsanzahl").text(versuche);
		}
	}
);

			