import type { BlogArticleContent } from "../types";

export const de: BlogArticleContent = {
  title: "Wie du KI in dein Produkt bringst, ohne Geld zu verbrennen",
  description:
    "Wie JoinMyTrip KI mit Verstand eingeführt hat, und was jede nicht-technische Gründerin davon kopieren kann: klein anfangen, eine ehrliche Zahl messen, die Regeln vorher festlegen.",
  kicker: "Case Study · JoinMyTrip",
  tags: ["KI-Features", "Produktstrategie", "Case Study"],
  lede: (
    <>
      Ein Reise-Startup wollte KI einbauen. Das Spannende ist nicht die KI. Sondern wie
      sichergestellt wurde, dass sie sich lohnt, bevor eine einzige Zeile davon entstand.
    </>
  ),
  body: (
    <>
      <p>
        Stell Dir das Meeting vor. Alle sind sich einig, das Produkt braucht KI. Jemand skizziert
        einen Chatbot, der die ganze Reise plant, redet wie ein erfahrener Reiseberater, merkt sich
        Deinen Namen. Im Kopf sieht die Demo großartig aus. Dann stellt jemand die einzige Frage,
        die wirklich zählt: Woran erkennen wir, dass es funktioniert hat, und was tun wir, wenn
        nicht? Der Raum wird still.
      </p>

      <p>
        In genau dieser Stille sterben viele Budgets. Das hier ist die Geschichte von{" "}
        <a href="https://joinmytrip.com" target="_blank" rel="noreferrer noopener">
          JoinMyTrip
        </a>
        , einem Reise-Startup, das an genau dieser Weggabelung stand und den langweiligen,
        disziplinierten Weg gewählt hat. Du brauchst kein Informatikstudium, um das hier zu
        verstehen. Wenn Du ein Produkt verantwortest, gehört die Lektion Dir.
      </p>

      <aside>
        <p>Die ganze Idee in fünf Zügen</p>
        <ul>
          <li>Fang mit der kleinsten Version der KI an, die überhaupt nützlich sein könnte.</li>
          <li>Leg die eine Zahl fest, die den Erfolg beweist, bevor Du baust.</li>
          <li>Miss gegen Dein aktuelles Produkt, nicht gegen Deine Hoffnungen.</li>
          <li>
            Schreib die Entscheidungsregeln vorher auf, damit man das Ergebnis nicht wegdiskutieren
            kann.
          </li>
          <li>Finanzier die teure Version erst, wenn die günstige es sich verdient hat.</li>
        </ul>
      </aside>

      <h2>Das Feature, nach dem niemand gefragt hat</h2>

      <p>
        JoinMyTrip ist ein Marktplatz für Gruppenreisen. Gastgeber, die TripLeader heißen, nehmen
        kleine Gruppen mit auf echte Abenteuer, und Reisende schließen sich der Reise an, die zu
        ihnen passt. Der Katalog war gut. Die Filter waren es auch: Ziel, Zeitraum, Budget, die
        Stimmung der Reise, die Art der Gruppe. Das Problem waren nicht die Reisen. Sondern dass die
        passende zu finden hieß, sich durch Filter um Filter zu klicken, und irgendwo in der Mitte
        stiegen die Leute leise aus.
      </p>

      <p>
        Die aufregende Lösung wäre ein voller KI-Concierge gewesen: ein Chat, der Fragen stellt und
        Reisen empfiehlt wie eine Freundin, die schon überall war. Die Lösung, die tatsächlich
        zuerst live ging, war kleiner, fast unspektakulär. Eine Box. Du beschreibst Deine Reise in
        einem einzigen Satz, etwa{" "}
        <em>"Tauch-Trip in Asien im September, kleine Gruppe, günstig"</em>, und die KI setzt die
        Filter für Dich. Die Filter bleiben sichtbar, Du kannst also nachjustieren. Ein Schritt.
        Kein Gespräch.
      </p>

      <p>
        Warum dort anfangen? Weil diese kleine Box alles wiederverwendet, was schon funktioniert,
        und fast nichts riskiert. Die Filter waren gebaut und gut. Die KI hat nur eine Aufgabe:
        einen Satz in ein paar Einstellungen zu übersetzen, die das Produkt ohnehin versteht. Sie
        kann nicht abschweifen, kein Reiseziel erfinden und Dir keine Reise anbieten, die es nicht
        gibt, weil sie nur aus Filtern schöpfen kann, die bereits da sind.
      </p>

      <blockquote>
        Die kleinste nützliche Version eines KI-Features ist meist die, für die man sich beim Launch
        ein bisschen geniert. Bring sie trotzdem raus. Es ist die günstigste Frage, die Du Deinen
        Kunden je stellst.
      </blockquote>

      <h2>Leg die Messlatte fest, bevor Du baust</h2>

      <p>
        Hier ist die Falle, in die fast jedes Team tappt. Du launchst das schicke Feature und gehst
        dann im Dashboard auf die Jagd nach irgendeiner Zahl, die gestiegen ist, um es zum Erfolg zu
        erklären. Das ist kein Messen. Das ist die Suche nach guten Nachrichten.
      </p>

      <p>
        JoinMyTrip hat es umgekehrt gemacht. Die Messlatte kam zuerst, und es war eine einzige Zahl:
        Haben nach der Box mehr Leute tatsächlich eine Reise geöffnet, um sie anzusehen? Das liegt
        nah am Feature, passiert oft genug, um es schnell abzulesen, und lässt sich kaum
        vortäuschen.
      </p>

      <p>
        Achte darauf, was sie <strong>nicht</strong> gewählt haben. Sie haben die Box nicht an
        Buchungen gemessen. Buchungen sind das eigentliche Ziel, aber auf so einer Seite sind sie
        selten, viel zu selten, um in einem vernünftigen Zeitraum daraus zu lernen. Wenn Du auf ein
        Buchungssignal wartest, wartest Du Monate und kannst das Feature trotzdem nicht vom Rauschen
        trennen. Also wurden Buchungen etwas, das man als Trend beobachtet, nicht die Zahl, auf der
        die Entscheidung ruht. Wähl eine Messlatte, die Du diesen Monat wirklich ablesen kannst,
        nicht die, die Du gern bewegen würdest.
      </p>

      <h2>Beweise, dass es das Feature war, nicht das Wetter</h2>

      <p>
        Angenommen, die Zahl steigt nach dem Launch. Woher weißt Du, dass es an Deiner KI-Box lag
        und nicht an einem langen Wochenende, einer Marketing-Aktion oder schlicht Glück? Weißt Du
        nicht, es sei denn, Du baust es so auf, dass Du es kannst.
      </p>

      <p>
        Der Trick ist einfach, und Du brauchst keine Statistik dafür. Zeig die neue Box einer
        zufälligen Hälfte Deiner Besucher. Lass die andere Hälfte auf genau der Seite, die Du heute
        hast. Lass beides über dieselben Wochen laufen. Jetzt vergleich die zwei Gruppen. Was für
        ein Unterschied auch immer auftaucht, es ist das Feature, denn alles andere, die Saison, die
        Kampagne, die Laune des Internets, traf beide Hälften gleich. Ohne diese zurückgehaltene
        Hälfte erzählst Du Dir nur eine Geschichte.
      </p>

      <h2>Schreib die Regeln auf, bevor Du die Ergebnisse siehst</h2>

      <p>
        Bevor ein einziger Besucher die Box sah, hat JoinMyTrip festgehalten, was jedes Ergebnis
        bedeuten würde. Klarer Gewinn, dann geht es an alle. Gewinn nur in einer Ecke der Seite,
        dann geht es genau dorthin. Flach, aber nicht schädlich, dann bleibt es an und sammelt
        weiter Daten. Schwach, dann geht es zurück in die Werkstatt, statt weggeworfen zu werden.
      </p>

      <p>
        Das klingt nach Bürokratie. Es ist in Wahrheit das ganze Spiel. Erst nach den Zahlen zu
        entscheiden, was als Erfolg zählt, ist der Weg, auf dem sich kluge Teams einreden, Dinge zu
        behalten, die nicht funktionieren. Einigt Euch auf die Latte, solange niemand den Spielstand
        kennt, dann lässt sich das Ergebnis später nicht schönreden.
      </p>

      <h2>Lass die teure Version sich ihren Platz verdienen</h2>

      <p>
        Der große KI-Concierge, der alle im ersten Meeting begeistert hat, wurde nie gestrichen. Er
        musste warten. Er wird nur gebaut, wenn die günstige Box beweist, dass die Leute ihre Reisen
        wirklich lieber in Worten beschreiben, als Filter zu klicken. Die kleine, sichere Wette ist
        die Eintrittskarte für die große, teure.
      </p>

      <p>
        Und weil der Concierge in Bau und Betrieb mehr kostet, gilt für ihn eine höhere Latte. Die
        Box musste nur mehr Leute dazu bringen, eine Reise zu öffnen. Der Concierge muss das
        bewegen, was die Rechnungen bezahlt: echte Buchungen, nicht nur Klicks. Günstige Features
        darf man an günstigen Signalen messen. Teure Features müssen den Umsatz berühren. Pass die
        Größe des Beweises an die Größe der Wette an.
      </p>

      <h2>Die fünf Züge, die Du kopieren kannst</h2>

      <p>
        Du betreibst keinen Reise-Marktplatz, und das ist egal. Das Muster passt auf fast jedes
        Produkt, das über KI nachdenkt:
      </p>

      <ul>
        <li>
          <strong>Schrumpf die Idee.</strong> Finde die kleinste Version der KI, die
          wiederverwendet, was Du schon hast, und trotzdem für sich nützlich sein könnte.
        </li>
        <li>
          <strong>Benenn zuerst die Messlatte.</strong> Eine ehrliche Zahl, nah am Feature, häufig
          genug, um sie bald abzulesen.
        </li>
        <li>
          <strong>Halt eine Hälfte zurück.</strong> Miss das Feature gegen Dein echtes Produkt,
          damit Du Signal von Saison unterscheiden kannst.
        </li>
        <li>
          <strong>Leg die Regeln vorher fest.</strong> Entscheide, wie ausrollen, behalten und
          einstellen aussehen, bevor die Daten da sind.
        </li>
        <li>
          <strong>Verdien Dir die große Wette.</strong> Lass das günstige Experiment den teuren Bau
          freischalten, und halt den teuren Bau an eine höhere Latte.
        </li>
      </ul>

      <p>
        Nichts davon ist Vorsicht um der Vorsicht willen. Es geht darum, Dein Geld in die Version
        von KI zu stecken, die Deine Kunden wirklich wollen, und herauszufinden, welche das ist, zum
        Preis einer kleinen Box statt eines großen Umbaus. Das ist der Unterschied zwischen KI
        einbauen, weil sie auf der Roadmap steht, und KI einbauen, weil sie sich ihren Platz
        verdient.
      </p>

      <p>
        Wenn Du gerade über ein KI-Feature nachdenkst, ist das Nützlichste, was Du tun kannst,
        herauszufinden, wie klein der erste ehrliche Schritt sein kann. Meistens ist genau das das
        ganze Gespräch.
      </p>
    </>
  ),
};
