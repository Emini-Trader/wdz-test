// Baza pytań - Wprowadzenie do zarządzania (WDZ) - 116 pytań z 8 lekcji.
// Każde pytanie zawiera uzasadnienie poprawnej odpowiedzi oraz sekcję "Warto wiedzieć",
// oparte na materiałach źródłowych kursu (Temat 1-8) oraz na drugim zestawie pytań
// egzaminacyjnych, porównanym z bazą i uzupełnionym o nowe, niepowtarzające się treści.

const QUESTIONS = [
  // LEKCJA 1 - Podstawy zarządzania
  {
    id: 1, lekcja: 1, lekcjaName: "Podstawy zarządzania",
    question: "Ekonomia to nauka o:",
    options: [
      { key: "a", text: "sztuce gromadzenia bogactwa", correct: false },
      { key: "b", text: "sprawnym zarządzaniu gospodarstwem", correct: true },
      { key: "c", text: "obliczaniu Produktu Krajowego Brutto i stopy bezrobocia", correct: false },
    ],
    uzasadnienie: "Słowo „ekonomia” pochodzi od greckich słów oikos (dom) i nomos (prawo) i w dosłownym tłumaczeniu oznacza „prawa zarządzania gospodarstwem domowym” – czyli naukę o tym, jak sprawnie gospodarować posiadanymi środkami, by zaspokoić potrzeby. Wzorcowym „ekonomistą” jest w tym ujęciu dobra gospodyni domowa, zarządzająca ograniczonym budżetem tak, by starczyło na wszystkie potrzeby, a jednocześnie nic się nie zmarnowało.",
    wartoWiedziec: "Termin ten wprowadził już starożytny filozof Ksenofont w dziele „Ojkonomikos” – poradniku dla właścicieli gospodarstw, jak sprawnie zarządzać bydłem, gajami oliwnymi czy niewolnikami. Grecy mieli osobne słowo na samo gromadzenie bogactwa – chrematystyka – którym pogardzali jako celem samym w sobie; pieniądz miał być wyłącznie środkiem do rozwoju gospodarstwa, nigdy celem ostatecznym.",
  },
  {
    id: 2, lekcja: 1, lekcjaName: "Podstawy zarządzania",
    question: "Koszt alternatywny podjęcia studiów stacjonarnych w PJATK to:",
    options: [
      { key: "a", text: "niepodjęcie w tym samym czasie studiów stacjonarnych na Politechnice Warszawskiej", correct: true },
      { key: "b", text: "koszt jedzenia spożytego w czasie studiów w PJATK", correct: false },
      { key: "c", text: "rezygnacja z kupna batonika Mars", correct: false },
    ],
    uzasadnienie: "Koszt alternatywny (koszt utraconych możliwości) to potencjalne korzyści, z których musimy zrezygnować, podejmując daną decyzję. Ponieważ studia stacjonarne pochłaniają cały czas w danym okresie, wybór studiowania w PJATK oznacza utratę możliwości równoczesnego studiowania stacjonarnie na innej uczelni, np. Politechnice Warszawskiej – to właśnie definiuje koszt alternatywny tej decyzji.",
    wartoWiedziec: "Prostszym przykładem tego pojęcia jest wybór między batonikiem Mars a Snickers przy ograniczonym budżecie – zjedzenie jednego oznacza utratę możliwości zjedzenia drugiego. Koszt alternatywny to nie wydana kwota, lecz utracona korzyść: wydatki, które ponieślibyśmy tak czy inaczej (np. na jedzenie w trakcie studiów), nim nie są, bo wystąpiłyby niezależnie od podjętej decyzji.",
  },
  {
    id: 3, lekcja: 1, lekcjaName: "Podstawy zarządzania",
    question: "Zasada, która mówi, że po sprzedaży produkcji przedsiębiorstwo powinno otrzymać zwrot swoich nakładów wraz z nadwyżką to:",
    options: [
      { key: "a", text: "zasada rachunku ekonomicznego", correct: false },
      { key: "b", text: "zasada przedsiębiorczości", correct: false },
      { key: "c", text: "zasada rentowności", correct: true },
    ],
    uzasadnienie: "Zasada rentowności głosi, że po sprzedaży produkcji przedsiębiorstwo powinno odzyskać poniesione nakłady wraz z nadwyżką, czyli osiągnąć zysk – to jeden z głównych celów prowadzenia działalności gospodarczej. Odróżnia się ją od zasady rachunku ekonomicznego (porównanie skutków różnych wariantów przed podjęciem decyzji) oraz zasady przedsiębiorczości (elastyczne wykorzystywanie nowych możliwości).",
    wartoWiedziec: "Zasada rentowności ma zastosowanie nie tylko w firmie, ale i w gospodarstwie domowym – przykładowo warto raczej przeznaczyć oszczędności na studia dzieci na renomowanej uczelni (bo taka inwestycja „zwraca się” w postaci dobrze płatnej pracy) niż na kolejny samochód, który z założenia służy głównie wzbudzeniu zazdrości sąsiadów i żadnej „nadwyżki” nie generuje.",
  },
  {
    id: 4, lekcja: 1, lekcjaName: "Podstawy zarządzania",
    question: "Przykładem zastosowania zasady gospodarności w życiu może być:",
    options: [
      { key: "a", text: "kupno prezentów na Gwiazdkę 24 XII rano, w sklepach na Nowym Świecie w Warszawie", correct: false },
      { key: "b", text: "kupno prezentów na Gwiazdkę podczas sierpniowych wyprzedaży", correct: true },
      { key: "c", text: "urządzenie przyjęcia świątecznego dla rodziny w modnej restauracji sushi", correct: false },
    ],
    uzasadnienie: "Zasada gospodarności mówi, że przy danym nakładzie środków należy osiągnąć maksymalny efekt, albo dany efekt osiągnąć przy minimalnym nakładzie środków. Kupowanie prezentów świątecznych z wyprzedzeniem, podczas sierpniowych wyprzedaży, pozwala nabyć te same produkty za niższą cenę niż w przedświątecznym pośpiechu, a więc osiągnąć ten sam efekt (prezenty) mniejszym kosztem.",
    wartoWiedziec: "Zakupy w pośpiechu 24 grudnia w drogich sklepach na Nowym Świecie zwykle oznaczają wydanie więcej pieniędzy, a zorganizowanie przyjęcia świątecznego w modnej restauracji sushi to spory wydatek (choć oszczędza czas). Tańszą alternatywą, zgodną z zasadą gospodarności, byłoby „przyjęcie składkowe” w domu, gdzie każdy z uczestników przynosi jedno danie, obniżając łączny koszt przy zachowaniu efektu wspólnego świętowania.",
  },
  {
    id: 5, lekcja: 1, lekcjaName: "Podstawy zarządzania",
    question: "(Z analizy przypadku) Jakie role według podziału Mintzberga pełnił Karol Miodownik (kierownik cukierni), gdy m.in. sprowadził domowy ekspres, wysłał pracownika do innej filii, negocjował umowę z klubem fitness i udzielił wywiadu?",
    options: [
      { key: "a", text: "przeciwdziałający zakłóceniom, dysponent zasobów, przywódca, przedsiębiorca, obserwator (monitor, radar), negocjator, rzecznik", correct: true },
      { key: "b", text: "przeciwdziałający zakłóceniom, przywódca, przedsiębiorca, obserwator (monitor, radar), negocjator", correct: false },
      { key: "c", text: "przeciwdziałający zakłóceniom, dysponent zasobów, przywódca, przedsiębiorca, rzecznik", correct: false },
    ],
    uzasadnienie: "Karol Miodownik w opisanym dniu pełnił wszystkie siedem wskazanych ról: przeciwdziałającego zakłóceniom (awaryjne sprowadzenie domowego ekspresu, gdy zepsuł się firmowy), dysponenta zasobów (oddelegowanie pracownicy do organizacji nowej filii), przywódcy (zmotywowanie pracownicy do zostania dłużej w pracy), przedsiębiorcy (wprowadzenie nowego produktu do oferty), obserwatora (analiza rynku przed wprowadzeniem nowości), negocjatora (pertraktacje z klubem fitness) oraz rzecznika (wywiad dla lokalnej gazety). Odpowiedzi b i c są niepełne – pomijają odpowiednio dysponenta zasobów z rzecznikiem, oraz obserwatora z negocjatorem.",
    wartoWiedziec: "Mintzberg pogrupował wszystkie role kierownicze w trzy kategorie: interpersonalną (reprezentant, przywódca, łącznik), informacyjną (obserwator/monitor, propagator, rzecznik) oraz decyzyjną (przedsiębiorca, przeciwdziałający zakłóceniom, dysponent zasobów, negocjator) – łącznie 10 ról składowych. Tego dnia Karol nie pełnił tylko dwóch z dziesięciu ról – reprezentanta i łącznika – co dobrze ilustruje, jak szeroki wachlarz zachowań musi opanować menedżer nawet niewielkiej firmy.",
  },

  // LEKCJA 2 - Struktura organizacyjna
  {
    id: 6, lekcja: 2, lekcjaName: "Struktura organizacyjna",
    question: "Podejście twarde w zarządzaniu charakteryzuje się:",
    options: [
      { key: "a", text: "skupieniem na kompetencjach psychospołecznych i motywowaniu ludzi", correct: false },
      { key: "b", text: "traktowaniem organizacji jako maszyny, w której liczy się sprawność i mierzalna wiedza", correct: true },
      { key: "c", text: "przeciwdziałaniem zjawiskom patologicznym, takim jak mobbing", correct: false },
    ],
    uzasadnienie: "Podejście „twarde” opiera się na wiedzy mierzalnej, potwierdzonej dyplomami (np. znajomość języków, wiedza fachowa o strategii i strukturach), i porównuje organizację zarządzaną w ten sposób do maszyny, w której liczą się sprawność, szybkość, niezawodność i optymalizacja. Kompetencje psychospołeczne oraz przeciwdziałanie mobbingowi to elementy podejścia „miękkiego”, czyli przeciwnego bieguna tego podziału.",
    wartoWiedziec: "Autorzy materiału posługują się analogią wojskową – tak jak dowódcy muszą umieć zorganizować wojsko w dywizje czy pułki, tak menedżer „twardy” powinien umieć zorganizować zasoby firmy w sprawną strukturę pokonującą konkurencję. Warto jednak pamiętać, że naprawdę dobry menedżer łączy solidną wiedzę fachową („twardą”) z umiejętnościami komunikacyjnymi i budowania relacji („miękkimi”).",
  },
  {
    id: 7, lekcja: 2, lekcjaName: "Struktura organizacyjna",
    question: "Biało-czerwone logo uczelni oraz firmowe ubrania pracowników to:",
    options: [
      { key: "a", text: "artefakty behawioralne", correct: false },
      { key: "b", text: "artefakty językowe", correct: false },
      { key: "c", text: "artefakty fizyczne", correct: true },
    ],
    uzasadnienie: "Artefakty kultury organizacyjnej dzielą się na językowe (żargon, mity o założycielach), behawioralne (ceremonie, rytuały) oraz fizyczne (flagi, logo, kolory, ubiory firmowe). Logo uczelni i firmowe stroje pracowników są namacalnymi, wizualnymi elementami tożsamości organizacji, więc jednoznacznie należą do artefaktów fizycznych.",
    wartoWiedziec: "Ciekawym przykładem jest logo Google – różnokolorowe litery (w tym zielone „l” łamiące schemat trzech barw podstawowych) mają symbolizować podejście do rozwiązywania problemów oparte na łamaniu standardowych zasad i elemencie zabawy, wspierając kreatywność i zaangażowanie. To także artefakt fizyczny, choć jego znaczenie wykracza poza samą estetykę.",
  },
  {
    id: 8, lekcja: 2, lekcjaName: "Struktura organizacyjna",
    question: "Do zalet specjalizacji stanowisk pracy zaliczamy:",
    options: [
      { key: "a", text: "znużenie pracowników monotonią działań", correct: false },
      { key: "b", text: "szybkie przeszkolenie nowych pracowników do pracy", correct: true },
      { key: "c", text: "wąskie spojrzenie na organizację i brak wizji całości", correct: false },
    ],
    uzasadnienie: "Wśród zalet specjalizacji stanowisk pracy wymienia się wzrost efektywności pracowników dzięki wprawie, wyższy stopień wykorzystania maszyn oraz szybsze przeszkolenie nowych pracowników. Znużenie monotonią i wąskie spojrzenie na organizację są natomiast jednoznacznie klasyfikowane jako wady specjalizacji, nie zalety.",
    wartoWiedziec: "Kolejną wadą specjalizacji, obok wymienionych, jest dehumanizacja pracy, czyli sytuacja, w której pracownicy stają się swego rodzaju „trybikami w maszynie”. Zbyt wąska specjalizacja zmniejsza też elastyczność zespołu – w razie choroby jednej osoby koledzy z innych stanowisk nie są w stanie jej łatwo zastąpić.",
  },
  {
    id: 9, lekcja: 2, lekcjaName: "Struktura organizacyjna",
    question: "Im wyższe są kwalifikacje podwładnych oraz im wyższy jest stopień formalizacji procedur w firmie, tym:",
    options: [
      { key: "a", text: "węższa powinna być rozpiętość kierowania", correct: false },
      { key: "b", text: "szersza może być rozpiętość kierowania", correct: true },
      { key: "c", text: "silniejsza musi być centralizacja władzy", correct: false },
    ],
    uzasadnienie: "Im wyższe kwalifikacje podwładnych, tym mniej czasu kierownik musi poświęcać na nadzór nad każdym stanowiskiem, więc może mieć pod sobą więcej osób. Analogicznie wysoki stopień formalizacji procedur odciąża kierownika, bo pracownicy znajdują odpowiedzi na swoje pytania w dokumentacji zamiast szukać pomocy u przełożonego – oba czynniki pozwalają poszerzyć rozpiętość kierowania.",
    wartoWiedziec: "Inne czynniki wpływające na optymalną rozpiętość kierowania to: fizyczne rozproszenie podwładnych (im bardziej rozproszeni, tym węższa RK), zakres obowiązków kierownika poza nadzorem (im więcej innych zadań, tym węższa RK) oraz częstość nowych, niestandardowych problemów (im częstsze, tym węższa RK, bo pracownicy potrzebują więcej pomocy decyzyjnej).",
  },
  {
    id: 10, lekcja: 2, lekcjaName: "Struktura organizacyjna",
    question: "Główna cecha struktury liniowej, która odróżnia ją od klasycznej struktury funkcjonalnej to:",
    options: [
      { key: "a", text: "złamanie zasady jedności rozkazodawstwa", correct: false },
      { key: "b", text: "zasada jedności rozkazodawstwa (pracownik ma tylko jednego bezpośredniego przełożonego)", correct: true },
      { key: "c", text: "wydzielenie stanowisk sztabowych o charakterze wyłącznie doradczym", correct: false },
    ],
    uzasadnienie: "Struktura liniowa opiera się na faylowskiej zasadzie jedności rozkazodawstwa – każdy pracownik podlega tylko jednemu bezpośredniemu przełożonemu. To właśnie ta cecha odróżnia ją od klasycznej struktury funkcjonalnej, w której wielu wyspecjalizowanych kierowników może wydawać polecenia tym samym pracownikom, łamiąc jedność rozkazodawstwa.",
    wartoWiedziec: "Struktura liniowa to najstarsza znana struktura organizacyjna, typowa dla organizacji wojskowych. Mimo zalet takich jak prostota, przejrzystość i łatwość utrzymania dyscypliny, w swej klasycznej, „czystej” formie nadaje się właściwie tylko do małych firm – każdy kierownik musi wtedy zajmować się wszystkimi aspektami zarządzania swoją komórką, co przy większej skali staje się nadmiernym obciążeniem.",
  },
  {
    id: 11, lekcja: 2, lekcjaName: "Struktura organizacyjna",
    question: "Sytuacja, w której pracownik realizujący czasowy projekt podlega jednocześnie kierownikowi tego projektu oraz kierownikowi swojego stałego działu, występuje w strukturze:",
    options: [
      { key: "a", text: "dywizjonalnej (M)", correct: false },
      { key: "b", text: "macierzowej", correct: true },
      { key: "c", text: "holdingowej (H)", correct: false },
    ],
    uzasadnienie: "W klasycznej strukturze macierzowej organizacja jest podzielona na stałe jednostki funkcjonalne, a jednocześnie działają w niej czasowe zespoły projektowe – pracownik biorący udział w projekcie podlega wówczas zarówno kierownikowi swojej macierzystej jednostki, jak i kierownikowi projektu. To dokładnie sytuacja opisana w pytaniu.",
    wartoWiedziec: "Struktura macierzowa wywodzi się z przemysłu kosmicznego – pierwotnie stosowano ją w NASA. Choć sprzyja elastyczności i powstawaniu efektu synergii, ma też wady: łamie zasadę jedności rozkazodawstwa (co prowadzi do konfliktów kompetencyjnych między kierownikami), zwiększa liczbę stanowisk kierowniczych i generuje wysokie koszty wdrożenia.",
  },
  {
    id: 12, lekcja: 2, lekcjaName: "Struktura organizacyjna",
    question: "Miejsca, które hamują sprawny przebieg działań w podejściu procesowym, generując koszty i opóźnienia, nazywamy:",
    options: [
      { key: "a", text: "wąskimi gardłami", correct: true },
      { key: "b", text: "punktami krytycznymi Holdingu", correct: false },
      { key: "c", text: "artefaktami behawioralnymi", correct: false },
    ],
    uzasadnienie: "W podejściu procesowym organizację traktuje się jako zbiór procesów przebiegających przez granice komórek funkcjonalnych, a miejsca hamujące ich sprawny przebieg – generujące niepotrzebne koszty i opóźniające dostarczenie produktu lub usługi klientowi – nazywa się „wąskimi gardłami”. Ich identyfikacja to jeden z kluczowych kroków przy wdrażaniu zarządzania procesowego.",
    wartoWiedziec: "Podejście procesowe bywa kontrastowane z podejściem funkcjonalnym – przykładem jest dziekanat uczelni, gdzie procesy takie jak rekrutacja czy aktualizacja programu nauczania przebiegają przez wiele komórek (dziekanat, dział finansów, sekretariat) zamiast zamykać się w jednym dziale. Zaletą tego podejścia jest lepsze zrozumienie tworzenia wartości, ale wdrożenie wymaga ścisłych procedur i grozi przerostem biurokracji.",
  },
  {
    id: 13, lekcja: 2, lekcjaName: "Struktura organizacyjna",
    question: "Wydzielenie ze struktury firmy zespołu pracowników i utworzenie na jego bazie zależnej spółki-córki, która nadal świadczy usługi dla firmy-matki, to:",
    options: [
      { key: "a", text: "outsourcing kontraktowy", correct: false },
      { key: "b", text: "podejście funkcjonalne typu U", correct: false },
      { key: "c", text: "outsourcing kapitałowy", correct: true },
    ],
    uzasadnienie: "Outsourcing kapitałowy polega dokładnie na wydzieleniu ze struktury firmy zespołu pracowników wraz z potencjałem materialnym i utworzeniu na tej bazie zależnej kapitałowo spółki-córki, która nadal wykonuje prace na rzecz przedsiębiorstwa macierzystego. Odróżnia się to od outsourcingu kontraktowego, w którym firma zwalnia pracowników etatowych i zleca te zadania niezależnej, zewnętrznej firmie na podstawie kontraktu.",
    wartoWiedziec: "Klasycznym przykładem outsourcingu kontraktowego jest zwolnienie własnych sprzątaczek i zatrudnienie w ich miejsce zewnętrznej firmy sprzątającej. Kluczową przewagą outsourcingu kapitałowego jest możliwość ściślejszej kontroli nad działalnością spółki wykonującej wydzielone usługi, wymaga on jednak od firmy macierzystej odpowiedniego potencjału organizacyjnego, by taką spółkę-córkę w ogóle zorganizować.",
  },
  {
    id: 14, lekcja: 2, lekcjaName: "Struktura organizacyjna",
    question: "(Z analizy przypadku) Jaką strukturę organizacyjną posiadała cukiernia rodziny Miodowników na samym początku działalności (gdy założyciel Stanisław decydował o wszystkim sam, a członkowie rodziny dzielili między siebie konkretne funkcje nadzorowane przez niego)?",
    options: [
      { key: "a", text: "macierzową", correct: false },
      { key: "b", text: "funkcjonalną (U)", correct: false },
      { key: "c", text: "liniową", correct: true },
    ],
    uzasadnienie: "Na początku działalności cukiernia była małą firmą rodzinną, w której strategiczne decyzje podejmował wyłącznie Stanisław, a rodzina dzieliła się obowiązkami wokół niego, zachowując jeden, wyraźny szczyt hierarchii – to odpowiada najprostszemu, liniowemu modelowi typowemu dla małych organizacji, opartemu na zasadzie jedności rozkazodawstwa.",
    wartoWiedziec: "Firma nosiła pierwotnie imię babci Jadwigi, od której pochodziły rodzinne receptury na sernik, szarlotkę i makowe łamańce – na angielskojęzyczne „Sweet & Happy” zmieniono nazwę dopiero, gdy biznes przejęło kolejne pokolenie. To dobry przykład tego, jak firmy rodzinne z czasem rozwijają markę wraz ze zmianą pokoleniową zarządu.",
  },
  {
    id: 15, lekcja: 2, lekcjaName: "Struktura organizacyjna",
    question: "(Z analizy przypadku) W jaką strukturę na poziomie makro przekształciła się cukiernia \"Sweet & Happy\" w czasach współczesnych, skoro filie posiadają samodzielność w bieżących działaniach, ale centrala decyduje o strategii produktowej, marketingu globalnym oraz zapewnia obsługę prawną i księgową?",
    options: [
      { key: "a", text: "dywizjonalną (D/M)", correct: true },
      { key: "b", text: "holdingową (H)", correct: false },
      { key: "c", text: "procesową", correct: false },
    ],
    uzasadnienie: "Opis „Sweet & Happy” we współczesności niemal dosłownie odpowiada definicji struktury dywizjonalnej: kierownicy filii mają dużą swobodę w bieżącej działalności (zatrudnianie sezonowych pracowników, lokalne promocje), natomiast decyzje strategiczne, takie jak wprowadzanie nowych wyrobów, muszą uzgadniać z centralą, która zapewnia też księgowość i obsługę prawną.",
    wartoWiedziec: "Warto odróżnić to od struktury holdingowej (H), gdzie poszczególne jednostki są od siebie całkowicie niezależne, każda ma własnego dyrektora rozliczanego tylko z wyników, bez wspólnej centrali koordynującej kluczowe funkcje. Filie „Sweet & Happy” cieszą się realną autonomią operacyjną, ale nie mogą np. samodzielnie wprowadzić do sprzedaży nowego typu wyrobu bez zgody zarządu, bo uznano by to za zbyt istotną zmianę wizerunku marki.",
  },

  // LEKCJA 3 - Szkoły zarządzania
  {
    id: 16, lekcja: 3, lekcjaName: "Szkoły zarządzania",
    question: "Frederick Taylor, jako twórca zarządzania naukowego, uważał że powolność pracy robotników można wyeliminować poprzez:",
    options: [
      { key: "a", text: "naukowe opracowanie przez kierownika jedynej właściwej metody wykonania zadania i ścisłe przeszkolenie pracownika", correct: true },
      { key: "b", text: "wprowadzenie elastycznego czasu pracy i luźnej atmosfery na hali produkcyjnej", correct: false },
      { key: "c", text: "pozwolenie robotnikom na intuicyjne wykonywanie zadań według własnego uznania", correct: false },
    ],
    uzasadnienie: "Taylor uważał, że odpowiedzialność za tempo i jakość pracy powinna spoczywać na kierowniku, nie na robotniku – to kierownik miał w drodze naukowej obserwacji opracować jedyny najlepszy sposób wykonania zadania, a zadaniem pracownika było ścisłe trzymanie się przekazanej instrukcji po odpowiednim przeszkoleniu. Dzięki temu eliminowano „pozorowanie pracy” oraz przypadkowość wynikającą z niesprawdzonych, indywidualnych metod.",
    wartoWiedziec: "Taylor był też jednym z prekursorów ergonomii – badał m.in. optymalny kąt ustawienia stóp czy dobór odpowiedniego kształtu łopaty do różnych materiałów. Jego współpracownicy, małżeństwo Gilbrethów, poszli o krok dalej i za pomocą kamery filmowej analizowali ruchy robotników, dzieląc każdą pracę na 17 podstawowych mikroruchów zwanych „therbligami” (anagram nazwiska Gilbreth).",
  },
  {
    id: 17, lekcja: 3, lekcjaName: "Szkoły zarządzania",
    question: "Według koncepcji idealnej biurokracji Maxa Webera, nowym kierownikiem działu prawnego w urzędzie powinna zostać osoba, która:",
    options: [
      { key: "a", text: "jest charyzmatycznym liderem o wybitnych cechach przywódczych, lubianym przez zarząd", correct: false },
      { key: "b", text: "posiada udokumentowane kompetencje merytoryczne i wykształcenie kierunkowe zgodne z przepisami legalno-prawnymi", correct: true },
      { key: "c", text: "jest spokrewniona z prezesem instytucji, co zapewnia ciągłość tradycji i lojalność", correct: false },
    ],
    uzasadnienie: "Według Webera jedynym legalnym źródłem władzy w idealnej biurokracji jest władza legalno-prawna, a nie charyzma czy pochodzenie – powołania na stanowiska muszą się opierać wyłącznie na udokumentowanych, formalnych kompetencjach zgodnych z wymogami danego stanowiska. Dzięki temu instytucja działa w sposób bezosobowy, przewidywalny i wolny od arbitralnych, opartych na sympatii decyzji.",
    wartoWiedziec: "Choć słowo „biurokracja” kojarzy się dziś negatywnie, Weber używał go neutralnie – jako określenie typu porządku społecznego nastawionego na efektywność i pewność działania. Obok władzy legalno-prawnej wyróżniał też władzę charyzmatyczną (oparta na cechach osobowości przywódcy) oraz tradycyjną (np. dziedziczenie stanowiska) – obie uznawał za mniej racjonalne podstawy zarządzania.",
  },
  {
    id: 18, lekcja: 3, lekcjaName: "Szkoły zarządzania",
    question: "Kluczowym wnioskiem z eksperymentów przeprowadzonych przez Eltona Mayo w fabryce Hawthorne było to, że:",
    options: [
      { key: "a", text: "natężenie oświetlenia na stanowisku pracy jest najważniejszym czynnikiem fizycznym warunkującym wydajność", correct: false },
      { key: "b", text: "pracownik jest istotą społeczną, a samo zwrócenie na niego uwagi przez badaczy działa motywująco na jego efektywność", correct: true },
      { key: "c", text: "pracownicy zawsze pracują najefektywniej, gdy działają w pełni samodzielnie bez żadnego wpływu grupy rówieśniczej", correct: false },
    ],
    uzasadnienie: "Eksperymenty w Hawthorne pokazały, że wydajność pracy rosła niezależnie od tego, czy natężenie oświetlenia zwiększano, zmniejszano, czy w ogóle nie zmieniano – samo poczucie bycia obserwowanym i otoczenie szczególną uwagą badaczy wystarczyło, by zmotywować pracowników. Wniosek Mayo był przełomowy: pracownik to nie tylko „ludzkie narzędzie”, lecz istota społeczna (social man), na którą silnie wpływają relacje z innymi ludźmi.",
    wartoWiedziec: "Dalsze badania w Hawthorne wykazały, że grupa nieformalna, w której pracuje człowiek, ma na jego wydajność większy wpływ niż bodźce finansowe. Pracownicy sami, nieformalnie, ustalali własne „normy” wydajności i społecznie „karali” zarówno tych, którzy je przekraczali, jak i tych, którzy ich nie wyrabiali.",
  },
  {
    id: 19, lekcja: 3, lekcjaName: "Szkoły zarządzania",
    question: "Menadżer, który uważa, że pracownicy z natury są leniwi, nie chcą brać na siebie odpowiedzialności i do pracy można zmusić ich jedynie ścisłą kontrolą oraz strachem, reprezentuje:",
    options: [
      { key: "a", text: "Teorię Y McGregora", correct: false },
      { key: "b", text: "Podejście sytuacyjne Fiedlera", correct: false },
      { key: "c", text: "Teorię X McGregora", correct: true },
    ],
    uzasadnienie: "Opisana postawa – przekonanie, że pracownicy są z natury leniwi, unikają odpowiedzialności i można ich zmotywować jedynie przymusem, ścisłą kontrolą oraz strachem – to dokładnie założenia teorii X Douglasa McGregora, pesymistycznego poglądu na naturę ludzką w pracy. Menedżer wyznający teorię X stosuje metodę „kija i marchewki” oraz stały nadzór.",
    wartoWiedziec: "McGregor zestawił teorię X z przeciwstawną, optymistyczną teorią Y, której sam był zwolennikiem – zakłada ona, że ludzie z natury chcą pracować, są zdolni do samokontroli i szukania nowych rozwiązań. Co ciekawe, to często sposób traktowania pracowników przez menedżera – a nie „prawdziwa” natura ludzka – decyduje, czy będą się zachowywać zgodnie z założeniami teorii X, czy Y.",
  },
  {
    id: 20, lekcja: 3, lekcjaName: "Szkoły zarządzania",
    question: "Według dwuczynnikowej teorii Fredericka Herzberga, zapewnienie pracownikowi wygodnego krzesła, dostępu do czystej toalety oraz terminowej wypłaty zasadniczej to:",
    options: [
      { key: "a", text: "motywatory, które bezpośrednio skłonią go do bicia rekordów wydajności", correct: false },
      { key: "b", text: "czynniki higieny, których brak wywoła niezadowolenie i spadek efektywności, ale ich obecność sama w sobie nie motywuje dodatkowo", correct: true },
      { key: "c", text: "realizacja potrzeby samorealizacji na najwyższym szczeblu hierarchii", correct: false },
    ],
    uzasadnienie: "Herzberg wyróżnił czynniki higieny (np. wynagrodzenie, dostępność czystej toalety, wygodne krzesło) jako elementy, których obecność sama w sobie nie motywuje dodatkowo do pracy, ale ich brak wywołuje silne niezadowolenie i spadek zaangażowania. To odróżnia je od motywatorów, takich jak uznanie, osiągnięcia czy awans, które faktycznie skłaniają pracownika do zwiększonego wysiłku.",
    wartoWiedziec: "Przykładem czynnika higieny bywa nawet zepsuty ekspres do kawy w firmowym pokoju socjalnym – jego brak wywołuje rozczarowanie i spowolnienie tempa pracy, mimo że sprawny ekspres wcześniej wcale nie był dodatkową motywacją, a jedynie czymś oczywistym. To dobrze pokazuje asymetrię działania czynników higieny: ich brak szkodzi bardziej, niż ich obecność pomaga.",
  },
  {
    id: 21, lekcja: 3, lekcjaName: "Szkoły zarządzania",
    question: "Wykorzystanie zaawansowanych modeli matematycznych, programowania liniowego i symulacji komputerowych do planowania optymalnych rozkładów lotów w liniach lotniczych to domena:",
    options: [
      { key: "a", text: "szkoły ilościowej", correct: true },
      { key: "b", text: "szkoły klasycznej (nurtu administracyjnego)", correct: false },
      { key: "c", text: "podejścia sytuacyjnego", correct: false },
    ],
    uzasadnienie: "Wykorzystanie zaawansowanych modeli matematycznych, programowania liniowego i symulacji komputerowych do optymalizacji decyzji, takich jak rozkłady lotów, to klasyczny przykład zastosowań szkoły ilościowej. Szkoła ta wywodzi się z zespołów badań operacyjnych złożonych z matematyków, statystyków i fizyków, tworzonych podczas II wojny światowej do rozwiązywania problemów militarnych.",
    wartoWiedziec: "Po wojnie wielu członków tych zespołów przeszło do świata biznesu – najsłynniejszym przykładem jest grupa weteranów nazywana „Whiz Kids”, która pomogła zreformować zarządzanie w Ford Motor Company. Jednym z nich był Robert McNamara, późniejszy sekretarz obrony USA, a następnie prezes Banku Światowego.",
  },
  {
    id: 22, lekcja: 3, lekcjaName: "Szkoły zarządzania",
    question: "Sytuacja, w której wydawnictwo filmowe oraz producent odzieży należące do jednego holdingu łączą siły, by sprzedawać koszulki z postaciami z hitów kinowych, generując zysk większy niż suma ich osobnych działań, ilustruje opisywane w szkole systemowej zjawisko:",
    options: [
      { key: "a", text: "sprzężenia zwrotnego (feedback)", correct: false },
      { key: "b", text: "synergii", correct: true },
      { key: "c", text: "systemu zamkniętego", correct: false },
    ],
    uzasadnienie: "Sytuacja, w której dwie firmy z jednego holdingu współpracując osiągają wspólnie większy zysk niż suma ich osobnych działań, to podręcznikowy przykład synergii opisywanej przez szkołę systemową. Zjawisko to występuje, gdy współpraca elementów organizacji przynosi efekt większy niż suma efektów działania każdego z nich osobno.",
    wartoWiedziec: "Synergia to tylko jedno z kluczowych pojęć szkoły systemowej – równie ważne jest sprzężenie zwrotne (feedback), czyli mechanizm, dzięki któremu organizacja jako system otwarty otrzymuje z otoczenia informację zwrotną o skutkach swoich działań. Szkoła systemowa, rozwijana m.in. przez Ludwiga von Bertalanffy'ego i Norberta Wienera, starała się połączyć dorobek szkoły klasycznej, behawioralnej i ilościowej w jedną spójną całość.",
  },
  {
    id: 23, lekcja: 3, lekcjaName: "Szkoły zarządzania",
    question: "Przedstawiciel podejścia sytuacyjnego zapytany przez dyrektora o to, jaki styl przywództwa i system motywacyjny jest najlepszy dla wszystkich firm, odpowie:",
    options: [
      { key: "a", text: "\"Zawsze najlepszy jest system akordowy Taylora oparty na normach\"", correct: false },
      { key: "b", text: "\"Zawsze należy stosować podejście demokratyczne i realizować potrzebę przynależności\"", correct: false },
      { key: "c", text: "\"To zależy od zmiennych takich jak wielkość organizacji, rodzaj technologii czy cechy pracowników\"", correct: true },
    ],
    uzasadnienie: "Zwolennik podejścia sytuacyjnego odrzuca istnienie jednego uniwersalnego rozwiązania dla wszystkich organizacji – twierdzi, że optymalny styl zarządzania zależy od zmiennych sytuacyjnych, takich jak wielkość organizacji, stopień rutynowości technologii, niepewność otoczenia czy indywidualne różnice między pracownikami. Dlatego typową odpowiedzią na pytanie o „najlepsze” rozwiązanie jest właśnie „to zależy”.",
    wartoWiedziec: "Zidentyfikowano ponad 100 różnych zmiennych sytuacyjnych wpływających na to, jakie metody zarządzania sprawdzą się najlepiej w danej organizacji. Zaletą tego podejścia, rozwijanego m.in. przez Freda Fiedlera, jest duża elastyczność, ale krytycy zarzucają mu, że nie daje menedżerom konkretnych, gotowych narzędzi do rozwiązywania problemów.",
  },

  // LEKCJA 4 - Zarządzanie zasobami ludzkimi
  {
    id: 24, lekcja: 4, lekcjaName: "Zarządzanie zasobami ludzkimi",
    question: "Posiadany przez firmę patent na unikatową recepturę kremu oraz prawa autorskie do kodu źródłowego programu zaliczamy do:",
    options: [
      { key: "a", text: "zasobów informacyjnych", correct: false },
      { key: "b", text: "własności intelektualnej", correct: true },
      { key: "c", text: "zasobów rynkowych", correct: false },
    ],
    uzasadnienie: "Patent na recepturę oraz prawa autorskie do kodu to elementy prawnie chronione, więc zaliczają się do kategorii własności intelektualnej, obejmującej m.in. patenty, prawa autorskie, zastrzeżone wzory i know-how. To nie są zwykłe dane (zasoby informacyjne) ani powiązania z rynkiem (zasoby rynkowe), lecz mechanizmy prawnej ochrony unikatowych rozwiązań firmy.",
    wartoWiedziec: "Kategoria własności intelektualnej to stosunkowo nowe dopełnienie klasycznego podziału zasobów – obok tradycyjnych zasobów ludzkich, finansowych, rzeczowych i informacyjnych. Współcześnie do „bogactwa” organizacji zalicza się też zasoby rynkowe (np. marka, lojalność klientów), organizacyjne (kultura, systemy zarządzania) i relacyjne (więzi z otoczeniem, np. z bankami).",
  },
  {
    id: 25, lekcja: 4, lekcjaName: "Zarządzanie zasobami ludzkimi",
    question: "(Z analizy przypadku) W firmie Michała ocena okresowa polega na bezwzględnym zestawianiu wyników pracowników, nagradzaniu najlepszych i natychmiastowym zwalnianiu najsłabszych, co rodzi podejrzliwość i unikanie przyznawania się do błędów. Jaki model polityki personalnej tam panuje?",
    options: [
      { key: "a", text: "model kapitału ludzkiego", correct: false },
      { key: "b", text: "model mieszany", correct: false },
      { key: "c", text: "model sita", correct: true },
    ],
    uzasadnienie: "Opisana sytuacja – bezwzględne porównywanie wyników, nagradzanie najlepszych i szybkie zwalnianie najsłabszych – to typowy przejaw modelu sita, który zakłada, że dorosłego pracownika nie da się już zmienić, więc trzeba „przesiać” kadrę i eliminować słabszych. Rodzi to rywalizację, podejrzliwość i ukrywanie błędów, bo pracownicy boją się konsekwencji.",
    wartoWiedziec: "Przeciwieństwem modelu sita jest model kapitału ludzkiego, w którym zwalnianie jest ostatecznością, a firma stawia na szkolenia i budowanie zaufania. Choć model sita bywa z pozoru tańszy (brak wydatków na szkolenia), w praktyce koszty niezdrowej rywalizacji i wysokiej rotacji mogą okazać się wyższe niż inwestycja w rozwój ludzi.",
  },
  {
    id: 26, lekcja: 4, lekcjaName: "Zarządzanie zasobami ludzkimi",
    question: "Które z pytań zadanych kandydatce podczas rozmowy kwalifikacyjnej wprost narusza zasady równego traktowania i jest niedopuszczalne w świetle prawa?",
    options: [
      { key: "a", text: "\"Jakie są Pani oczekiwania finansowe na tym stanowisku?\"", correct: false },
      { key: "b", text: "\"Czy planuje Pani w najbliższym czasie zajść w ciążę i mieć dzieci?\"", correct: true },
      { key: "c", text: "\"Gdyby mogła Pani opisać swoje największe dotychczasowe osiągnięcie zawodowe, co by to było?\"", correct: false },
    ],
    uzasadnienie: "Pytanie o plany macierzyńskie wprost ingeruje w prywatność kandydatki i dotyczy cechy niezwiązanej z wymogami stanowiska, podczas gdy selekcja kandydatów powinna opierać się wyłącznie na obiektywnych wymaganiach pracy. Zadawanie takich pytań narusza zasadę równych szans w zatrudnieniu i jest formą dyskryminacji.",
    wartoWiedziec: "Zasada równych szans obowiązuje na każdym etapie rekrutacji – dotyczy też testów i kwestionariuszy, które muszą badać wyłącznie kompetencje zawodowe. Niedopuszczalne są również np. pytania o stan zdrowia czy poglądy polityczne kandydata, chyba że dana cecha jest obiektywnie uzasadniona charakterem pracy.",
  },
  {
    id: 27, lekcja: 4, lekcjaName: "Zarządzanie zasobami ludzkimi",
    question: "(Z analizy przypadku) Krzysztof uczy Erykę produkcji słodyczy od podstaw, pyta o jej własne pomysły na receptury i pomaga jej samej znajdować rozwiązania w konkretnych sytuacjach przy stole rzemieślniczym. Z kolei Paweł rozmawia z nią o historii firmy, uczy odporności psychicznej i analizuje jej całościową długofalową karierę. Kto kim jest?",
    options: [
      { key: "a", text: "Krzysztof jest coachem, a Paweł mentorem", correct: true },
      { key: "b", text: "Krzysztof jest mentorem, a Paweł coachem", correct: false },
      { key: "c", text: "Obaj pełnią wyłącznie funkcję twardych selekcjonerów modelu sita", correct: false },
    ],
    uzasadnienie: "Krzysztof pracuje z Eryką „jeden na jednego” nad konkretnym zadaniem, pyta o jej własne pomysły i pozwala jej samodzielnie dochodzić do rozwiązań – to cechy typowe dla coachingu. Paweł natomiast koncentruje się na całościowym, długofalowym rozwoju Eryki – historia firmy, odporność psychiczna, kariera – co jest istotą mentoringu, w którym mentor troszczy się o przyszłość podopiecznego, a nie tylko o bieżące zadanie.",
    wartoWiedziec: "Podobnie jak trener sportowy dopasowuje metody do indywidualnych potrzeb zawodnika, coach w pracy koncentruje się na „sposobie” dochodzenia do wymiernych rezultatów w krótkim horyzoncie. Mentor z kolei powinien cieszyć się dużym autorytetem i zaufaniem podopiecznego, dlatego często jest to osoba stojąca kilka szczebli wyżej w hierarchii firmy.",
  },
  {
    id: 28, lekcja: 4, lekcjaName: "Zarządzanie zasobami ludzkimi",
    question: "Kompleksowa metoda oceny, w której pracownik otrzymuje poufną informację zwrotną od samego siebie, swojego przełożonego, współpracowników z zespołu, podwładnych oraz klientów to:",
    options: [
      { key: "a", text: "technika wydarzeń krytycznych", correct: false },
      { key: "b", text: "metoda 360°", correct: true },
      { key: "c", text: "portfolio personalne oparte na macierzy BCG", correct: false },
    ],
    uzasadnienie: "Metoda 360° polega na tym, że pracownik otrzymuje poufną, anonimową informację zwrotną z wielu perspektyw jednocześnie – od siebie samego, przełożonego, kolegów z zespołu, podwładnych oraz klientów. Ta wszechstronność (nazwa nawiązuje do pełnego koła, 360 stopni) odróżnia ją od prostszych metod ograniczonych do jednej perspektywy.",
    wartoWiedziec: "Warunkiem koniecznym rzetelności metody 360° jest zachowanie poufności i anonimowości ocen – bez tego respondenci mogliby bać się szczerości. Portfolio personalne, wspomniane jako błędna odpowiedź, to zupełnie inne narzędzie – zaadaptowana z zarządzania strategicznego macierz BCG, w której pracowników klasyfikuje się np. jako „gwiazdy”, „dojne krowy”, „znaki zapytania” czy „psy”.",
  },
  {
    id: 29, lekcja: 4, lekcjaName: "Zarządzanie zasobami ludzkimi",
    question: "(Z analizy przypadku) Pani Krysia spojrzała na nowego kierownika Piotra i stwierdziła: „Jest tak niesamowicie przystojny, przypomina Alvaro Solera, na pewno będzie fantastycznym, mądrym i skutecznym menedżerem”. Jaki błąd psychologiczny popełniła?",
    options: [
      { key: "a", text: "efekt Horna", correct: false },
      { key: "b", text: "błąd projekcji", correct: false },
      { key: "c", text: "efekt aureoli (halo)", correct: true },
    ],
    uzasadnienie: "Pani Krysia na podstawie jednej cechy – atrakcyjnego wyglądu Piotra – automatycznie uogólniła, że będzie on też mądrym i skutecznym menedżerem. To klasyczny przykład efektu aureoli (halo), czyli sugerowania się jedną pozytywną cechą ocenianej osoby i przenoszenia tego wrażenia na inne, niezwiązane obszary jej kompetencji.",
    wartoWiedziec: "Efekt aureoli ma swoje lustrzane odbicie – efekt Horna, gdzie jedna cecha negatywna (np. spóźnianie się) prowadzi do uogólnienia osoby jako gorszej we wszystkich innych aspektach. Oba różnią się od błędu projekcji, polegającego na nieświadomym przypisywaniu ocenianemu własnych cech, uczuć czy motywacji oceniającego.",
  },
  {
    id: 30, lekcja: 4, lekcjaName: "Zarządzanie zasobami ludzkimi",
    question: "Gdy firma z przyczyn ekonomicznych (np. załamania rynku) musi przeprowadzić zwolnienia grupowe, ale pomaga zwalnianym pracownikom poprzez pisanie profesjonalnych CV, doradztwo zawodowe i psychologiczne oraz szukanie nowego zatrudnienia, stosuje:",
    options: [
      { key: "a", text: "outplacement (zwolnienia monitorowane)", correct: true },
      { key: "b", text: "błąd surowości w doborze kadr", correct: false },
      { key: "c", text: "rekrutację ukrytą", correct: false },
    ],
    uzasadnienie: "Opisane działania – pomoc w pisaniu CV, doradztwo zawodowe i psychologiczne oraz wsparcie w znalezieniu nowego zatrudnienia – to istota outplacementu, czyli zwolnień monitorowanych. Celem tego programu jest złagodzenie negatywnych skutków utraty pracy, a dotychczasowy pracodawca realnie stara się pomóc zwalnianemu w znalezieniu nowej pracy.",
    wartoWiedziec: "Outplacement stosuje się zwłaszcza przy zwolnieniach grupowych wynikających z przyczyn ekonomicznych leżących po stronie firmy, a nie z winy pracownika. Korzyść odnosi z niego nie tylko zwalniany, ale i sama firma – dobrze przeprowadzony program buduje jej wizerunek jako pracodawcy odpowiedzialnego społecznie.",
  },
  {
    id: 31, lekcja: 4, lekcjaName: "Zarządzanie zasobami ludzkimi",
    question: "(Z analizy przypadku) Monika kocha swoją pracę pielęgniarki, ponieważ czuje ogromną satysfakcję, gdy pomaga płaczącemu dziecku i widzi realną poprawę jego zdrowia. Z kolei Wojtek ceni pracę w HR, ale nienawidzi, gdy ktoś zakłóca jego czas z rodziną po 17.00 lub w weekendy, bo najważniejsza jest dla niego równowaga. Jakie kotwice kariery wg Scheina reprezentują?",
    options: [
      { key: "a", text: "Monika – Profesjonalizm; Wojtek – Autonomia i niezależność", correct: false },
      { key: "b", text: "Monika – Usługi i poświęcenie dla innych; Wojtek – Zintegrowany styl życia", correct: true },
      { key: "c", text: "Monika – Wyzwanie; Wojtek – Bezpieczeństwo i stabilizacja", correct: false },
    ],
    uzasadnienie: "Monika czerpie satysfakcję z bezpośredniej pomocy innym i realnej poprawy ich losu – to rdzeń kotwicy „usługi i poświęcenie dla innych”, typowej dla zawodów takich jak lekarz czy pielęgniarka. Wojtek z kolei najbardziej ceni zachowanie równowagi między pracą a życiem prywatnym – to definicja kotwicy „zintegrowany styl życia”, gdzie liczy się umiar, a nie maksymalizacja kariery czy dochodów.",
    wartoWiedziec: "Koncepcja kotwic kariery Edgara Scheina wyróżnia w sumie osiem wartości, m.in. profesjonalizm (dążenie do bycia ekspertem), przywództwo (chęć zarządzania zespołem), autonomię i niezależność (praca bez biurokratycznych ograniczeń) czy wyzwanie (poszukiwanie coraz trudniejszych zadań). Zrozumienie własnej kotwicy pomaga zarówno pracownikowi w planowaniu kariery, jak i działowi HR w doborze odpowiednich zadań dla poszczególnych osób.",
  },
  {
    id: 47, lekcja: 4, lekcjaName: "Zarządzanie zasobami ludzkimi",
    question: "Jeśli kierownik, oceniając projekt, wystawia przeciętnemu pracownikowi ocenę bardzo dobrą tylko dlatego, że bezpośrednio przed nim oceniał pracownika skrajnie niekompetentnego, popełnia błąd:",
    options: [
      { key: "a", text: "projekcji", correct: false },
      { key: "b", text: "kontrastu", correct: true },
      { key: "c", text: "hierarchii", correct: false },
    ],
    uzasadnienie: "Kierownik nie porównuje pracy tego pracownika do obiektywnych kryteriów, lecz do wrażenia pozostawionego przez osobę ocenianą bezpośrednio wcześniej – to definicja błędu kontrastu, jednej z pułapek psychologicznych w ocenie okresowej pracowników.",
    wartoWiedziec: "Błąd kontrastu to jeden z wielu błędów w sztuce oceniania, obok błędu projekcji (przypisywania ocenianemu własnych motywacji oceniającego), błędu łagodności/surowości (systematyczne zawyżanie lub zaniżanie ocen), efektu aureoli/Horna (uogólnianie oceny na podstawie jednej cechy) czy efektu ostatnich dokonań (sugerowanie się tylko końcówką ocenianego okresu).",
  },

  // LEKCJA 5 - Motywacja i przywództwo
  {
    id: 32, lekcja: 5, lekcjaName: "Motywacja i przywództwo",
    question: "Menadżer, który motywuje swój zespół handlowców wyłącznie poprzez oferowanie prowizji (procentu od wartości sprzedaży), bazuje bezpośrednio na założeniach:",
    options: [
      { key: "a", text: "szkoły zasobów ludzkich Douglasa McGregora", correct: false },
      { key: "b", text: "szkoły zarządzania naukowego Fredericka Taylora", correct: true },
      { key: "c", text: "teorii sprawiedliwości Johna Adamsa", correct: false },
    ],
    uzasadnienie: "Zgodnie z zasadami zarządzania naukowego Taylora, jedynym motywatorem pracownika jest wynagrodzenie ściśle powiązane z wydajnością pracy – klasycznym przykładem takiego narzędzia, stosowanym też współcześnie, jest prowizja handlowców za przekroczenie targetu sprzedaży.",
    wartoWiedziec: "Frederick Taylor traktował pracownika jako „ludzkie narzędzie” motywowane wyłącznie pieniędzmi, ignorując czynniki psychospołeczne. Założenie to skrytykowała później szkoła behawioralna – eksperymenty w Hawthorne pokazały, że człowiek jest „istotą społeczną”, dla której liczy się też uwaga i relacje.",
  },
  {
    id: 33, lekcja: 5, lekcjaName: "Motywacja i przywództwo",
    question: "(Z analizy przypadku) Wojciech nie potrafi zintegrować się z nowym, zgranym zespołem w pokoju socjalnym i czuje się odrzucony, dlatego całą swoją energię przekierowuje w pisanie raportów i bicie rekordów sprzedaży na poziomie egzystencji. Która teoria zarządzania idealnie opisuje ten regres?",
    options: [
      { key: "a", text: "Teoria ERG Claytona Alderfera", correct: true },
      { key: "b", text: "Dwuczynnikowa teoria Herzberga", correct: false },
      { key: "c", text: "Model trzech potrzeb McClellanda", correct: false },
    ],
    uzasadnienie: "Wojciech nie zaspokoił potrzeby kontaktów społecznych (relatedness) w nowym zespole, więc zgodnie z teorią ERG Alderfera nastąpiła u niego regresja – nadrabia brak przyjaznych relacji zwiększonym wysiłkiem na niższym poziomie potrzeb, czyli egzystencji.",
    wartoWiedziec: "Teoria ERG to uproszczenie hierarchii Maslowa do trzech poziomów (Existence, Relatedness, Growth). W przeciwieństwie do Maslowa, Alderfer założył, że gdy wyższa potrzeba pozostaje niezaspokojona, człowiek cofa się na niższy poziom i stara się ją tam zrekompensować – to właśnie zjawisko regresji.",
  },
  {
    id: 34, lekcja: 5, lekcjaName: "Motywacja i przywództwo",
    question: "(Z analizy przypadku) Zosia odmawia przyjęcia awansu na samodzielne, zdalne i świetnie płatne stanowisko w domu, ponieważ ponad wszystko przedkłada codzienną pracę w biurze ze swoimi koleżankami, z którymi jest silnie zaprzyjaźniona. Według McClellanda u Zosi dominuje potrzeba:",
    options: [
      { key: "a", text: "osiągnięć (dokonań)", correct: false },
      { key: "b", text: "władzy", correct: false },
      { key: "c", text: "przynależności (afiliacji)", correct: true },
    ],
    uzasadnienie: "Zosia odrzuciła awans, bo ceniła nade wszystko możliwość pracy w znanym, przyjaznym zespole – według modelu McClellanda to przejaw dominującej potrzeby przynależności (afiliacji), czyli pragnienia dobrych, bliskich relacji międzyludzkich w grupie.",
    wartoWiedziec: "Model McClellanda zakłada, że każdego człowieka motywują trzy czynniki (władza, osiągnięcia, przynależność) w różnym natężeniu. Osoby o silnej potrzebie afiliacji często nie odnajdują się w pracy zdalnej, bo brakuje im częstego, bezpośredniego kontaktu ze współpracownikami.",
  },
  {
    id: 35, lekcja: 5, lekcjaName: "Motywacja i przywództwo",
    question: "Według procesowej teorii oczekiwań Victora Vrooma, pracownik z zapałem podejmie się nowego, trudnego projektu tylko wtedy, gdy:",
    options: [
      { key: "a", text: "szef osobiście pokaże mu, że stosuje styl transformacyjny i wbiegnie z flagą do morza", correct: false },
      { key: "b", text: "dokładnie wie, co ma zrobić, ile wysiłku to wymaga oraz ma pewność, że obiecana nagroda jest warta tego trudu", correct: true },
      { key: "c", text: "w biurze zostanie zamontowana skrzynka na pomysły racjonalizatorskie", correct: false },
    ],
    uzasadnienie: "Według teorii oczekiwań Vrooma pracownik angażuje się w zadanie dopiero, gdy wie, ile wysiłku będzie musiał włożyć, jaki będzie efekt jego pracy i czy wynagrodzenie za ten efekt jest warte poniesionego trudu. Brak takich informacji skutkuje brakiem entuzjazmu, nawet gdy propozycja brzmi atrakcyjnie.",
    wartoWiedziec: "Nawet jeśli pracownik nie wypowiada tych pytań na głos, dobry kierownik zlecający zadanie powinien od razu jasno przekazać jego zakres, szacowany czas oraz przewidzianą nagrodę – inaczej ryzykuje spadek zaangażowania zespołu, tak jak w przypadku lektorów niepoinformowanych o szczegółach nowego projektu.",
  },
  {
    id: 36, lekcja: 5, lekcjaName: "Motywacja i przywództwo",
    question: "Aby premia finansowa właściwie spełniała swoją funkcję motywacyjną w organizacji, musi:",
    options: [
      { key: "a", text: "być wypłacana co miesiąc w stałej, niezmiennej wysokości każdemu pracownikowi bez wyjątku", correct: false },
      { key: "b", text: "być traktowana jako stały element płacy zasadniczej zabezpieczający funkcję dochodową", correct: false },
      { key: "c", text: "być bezpośrednio uzależniona od wyników pracy i przyznawana za ponadstandardowe osiągnięcia", correct: true },
    ],
    uzasadnienie: "Premia, w przeciwieństwie do pensji zasadniczej, jest składnikiem wynagrodzenia zależnym od wyników. By pełniła funkcję motywacyjną, musi być przyznawana za ponadstandardowe osiągnięcia, a nie wypłacana wszystkim w stałej wysokości – inaczej traci swój motywacyjny charakter i staje się de facto elementem płacy.",
    wartoWiedziec: "Wynagrodzenie pełni cztery funkcje: dochodową (zaspokojenie potrzeb pracownika), motywacyjną (zachęta do lepszej pracy), kosztową (zbyt wysokie płace mogą zagrozić płynności finansowej firmy) oraz społeczną (wyznacznik prestiżu i pozycji wśród innych).",
  },
  {
    id: 37, lekcja: 5, lekcjaName: "Motywacja i przywództwo",
    question: "Trener lokalnej drużyny piłkarskiej, który sam był niegdyś sławnym reprezentantem kraju i zdobywcą pucharów, sprawia że młodzi zawodnicy bezdyskusyjnie i z zachwytem wykonują jego polecenia. Lider ten czerpie siłę z:",
    options: [
      { key: "a", text: "władzy wymuszania (karania)", correct: false },
      { key: "b", text: "władzy odniesienia (autorytetu osobistego i charyzmy)", correct: true },
      { key: "c", text: "autorytetu formalnego wynikającego ze struktury", correct: false },
    ],
    uzasadnienie: "To niemal podręcznikowy przykład władzy odniesienia: znany, odnoszący sukcesy piłkarz, który zostaje trenerem lokalnego klubu, sprawia że młodzi zawodnicy utożsamiają się z nim i chętnie naśladują jego polecenia dzięki jego autorytetowi osobistemu i charyzmie, a nie formalnemu stanowisku.",
    wartoWiedziec: "Władza odniesienia jest uznawana za najważniejsze źródło władzy w organizacji – silniejsze niż autorytet formalny (wynikający ze stanowiska), władza nagradzania, wymuszania (karania) czy władza ekspercka (oparta na unikatowej wiedzy).",
  },
  {
    id: 38, lekcja: 5, lekcjaName: "Motywacja i przywództwo",
    question: "(Z analizy przypadku) Szef Robert manipuluje zespołem, by zrobili reklamę po godzinach, tłumacząc to „widzimisię wiceprezesa i groźbą zwolnień”, ale jednocześnie ufa im i daje pełną swobodę techniczną. Według Reddina Robert to:",
    options: [
      { key: "a", text: "dyrektywny przywódca – życzliwy autokrata", correct: true },
      { key: "b", text: "separujący przywódca – dezerter", correct: false },
      { key: "c", text: "przywódca o zintegrowanym stylu idealnym", correct: false },
    ],
    uzasadnienie: "Robert to życzliwy autokrata – traktuje pracowników instrumentalnie i manipuluje nimi (presja czasu, straszenie oceną wiceprezesa), ale jednocześnie stara się ich nie zrażać, ufa im i pozwala na samodzielne działanie przy realizacji zadania.",
    wartoWiedziec: "W modelu Reddina styl dyrektywny dzieli się na dwie odmiany: mniej efektywnego Autokratę (apodyktyczny, liczą się dla niego tylko zadania, nie potrafi budować dobrego klimatu w zespole) oraz bardziej efektywnego Życzliwego autokratę, który mimo instrumentalnego podejścia do ludzi potrafi osiągać satysfakcjonujące rezultaty.",
  },
  {
    id: 39, lekcja: 5, lekcjaName: "Motywacja i przywództwo",
    question: "Głównym założeniem wyróżniającym model sytuacyjny Freda Fiedlera spośród innych teorii przywództwa jest to, że:",
    options: [
      { key: "a", text: "lider musi elastycznie zmieniać swój styl w zależności od dojrzałości podwładnego niczym rodzic wobec dziecka", correct: false },
      { key: "b", text: "indywidualny styl przywództwa każdego lidera (zadaniowy lub relacyjny) jest stały i niezmienny, a diagnozuje się go testem NLW", correct: true },
      { key: "c", text: "obecność lidera w zespole nigdy nie jest konieczna, jeśli wprowadzono procedury i biurokrację", correct: false },
    ],
    uzasadnienie: "Zdaniem Fiedlera styl danego lidera (zorientowany na zadania lub na relacje) jest cechą stałą i niezmienną – nie można go dowolnie zmieniać w zależności od sytuacji. Styl mierzy się kwestionariuszem NLW (Najmniej Lubianego Współpracownika): wysoki wynik oznacza styl zorientowany na relacje, niski – na zadania.",
    wartoWiedziec: "W przeciwieństwie do modelu Fiedlera, model ewolucyjny Hersey'a i Blancharda zakłada, że lider POWINIEN zmieniać swój styl w miarę wzrastania dojrzałości podwładnego – od dyrektywnego na początku do pełnej swobody, gdy pracownik jest już samodzielny (relacja na wzór rodzic – dziecko).",
  },
  {
    id: 40, lekcja: 5, lekcjaName: "Motywacja i przywództwo",
    question: "Według teorii ścieżki do celu, styl nakazowy (lider wskazuje twardo drogę i wydaje polecenia) najlepiej sprawdza się w sytuacji, gdy:",
    options: [
      { key: "a", text: "podwładni mają ogromne, wieloletnie doświadczenie i są w pełni samodzielni", correct: false },
      { key: "b", text: "zadania są niezwykle proste, rutynowe i całkowicie jasne dla każdego", correct: false },
      { key: "c", text: "wewnątrz grupy występuje silny, paraliżujący konflikt utrudniający współpracę", correct: true },
    ],
    uzasadnienie: "Styl nakazowy z teorii ścieżki do celu najlepiej sprawdza się właśnie wtedy, gdy podwładni sami nie potrafią dojść do porozumienia – odgórne rozstrzygnięcie przez lidera pomaga rozwiązać sytuację konfliktową paraliżującą współpracę zespołu.",
    wartoWiedziec: "Teoria ścieżki do celu (Evans i House) wyróżnia cztery style przywództwa: nakazowy, wspierający, partycypacyjny oraz zorientowany na dokonania. Lider może je elastycznie zmieniać w zależności od sytuacji – w przeciwieństwie do modelu Fiedlera, gdzie styl lidera jest stały.",
  },

  // LEKCJA 6 - Różnice międzykulturowe
  {
    id: 42, lekcja: 6, lekcjaName: "Różnice międzykulturowe",
    question: "Podczas negocjacji biznesowych kontrahent z Tajlandii nie odpowiedział werbalnie na propozycję Amerykanina, lecz przesunął filiżankę ze spodkiem bliżej niego. Sytuacja ta wynika z faktu, że:",
    options: [
      { key: "a", text: "Taj uważał ofertę za obraźliwą i demonstracyjnie przerwał rozmowy", correct: false },
      { key: "b", text: "Tajlandia to kultura wysokokontekstowa, w której decyzje i intencje często komunikuje się niewerbalnie", correct: true },
      { key: "c", text: "Tajlandia to kultura niskokontekstowa, w której unika się pisemnych ustaleń", correct: false },
    ],
    uzasadnienie: "Tajlandia, jako kraj Dalekiego Wschodu, jest kulturą wysokokontekstową, w której istotne informacje przekazuje się subtelnymi sygnałami niewerbalnymi, a nie tylko wprost słowami. Przesuwając filiżankę bliżej Amerykanina, Taj faktycznie udzielił odpowiedzi twierdzącej – tylko w swoim kodzie kulturowym, którego nisko-kontekstowy Amerykanin nie odczytał, oczekując wyraźnej werbalnej deklaracji.",
    wartoWiedziec: "W kulturach wysokokontekstowych liczą się subtelne sygnały – głębokość ukłonu, strój czy ranga osób oddelegowanych do rozmów – a ustaleń rzadziej dokładnie spisuje się na piśmie, w przeciwieństwie do kultur niskokontekstowych (typowo krajów zachodnich, zwłaszcza USA), gdzie liczy się jasny przekaz słowny i pisemna dokumentacja.",
  },
  {
    id: 43, lekcja: 6, lekcjaName: "Różnice międzykulturowe",
    question: "Elementy kultury, które znajdują się pod wodą w metaforze kulturowej góry lodowej i są najtrudniejsze do zmiany to:",
    options: [
      { key: "a", text: "język, narodowe potrawy i tradycyjne stroje", correct: false },
      { key: "b", text: "normy, głęboko zakorzenione wartości oraz założenia podstawowe", correct: true },
      { key: "c", text: "styl uczenia się języków obcych i popularne gesty (np. kciuk w górę)", correct: false },
    ],
    uzasadnienie: "Zgodnie z metaforą kulturowej góry lodowej, najgłębiej ukryta i najtrudniejsza do zmiany warstwa kultury to normy, głęboko zakorzenione wartości oraz założenia podstawowe – reguły tak oczywiste dla członków danej kultury, że nie potrafią nawet racjonalnie uzasadnić ich istnienia, bo one „po prostu są”.",
    wartoWiedziec: "Elementy widoczne „nad wodą” – język, ubiór, formy przywitania czy zwyczaje kulinarne – są stosunkowo łatwe do zmiany i można je szybko przyswoić np. z przewodnika. Dobrym przykładem założenia podstawowego jest japoński zwyczaj głębokiego kłaniania się osobom na wysokim stanowisku – dalsze dopytywanie, dlaczego należy okazywać ten szacunek, prowadzi wprost do niekwestionowalnego fundamentu kultury.",
  },
  {
    id: 44, lekcja: 6, lekcjaName: "Różnice międzykulturowe",
    question: "W firmie o wysokim wskaźniku dystansu władzy (PDI) najbardziej typowym zjawiskiem będzie:",
    options: [
      { key: "a", text: "egalitarne traktowanie wszystkich członków zespołu, niezależnie od ich stanowiska", correct: false },
      { key: "b", text: "włączanie wszystkich podwładnych w procesy podejmowania decyzji strategicznych", correct: false },
      { key: "c", text: "autorytarny styl kierowania oraz ostentacyjne podkreślanie statusu szefa (np. osobna, złota winda)", correct: true },
    ],
    uzasadnienie: "Wysoki wskaźnik dystansu władzy (PDI) oznacza, że społeczeństwo akceptuje duże nierówności hierarchiczne i podkreślanie statusu przełożonych. W takich kulturach menedżerowie rządzą w sposób autorytarny, a widoczne oznaki statusu – jak osobna, luksusowa winda dla kadry kierowniczej – są normą, a nie ekscesem.",
    wartoWiedziec: "Kraje o wysokim PDI to m.in. Malezja, Rosja czy Chiny, a przeciwny biegun reprezentują np. Dania, Szwecja czy Nowa Zelandia, gdzie relacje w pracy są egalitarne. PDI wpływa też na styl decyzyjny – w kulturach o niskim PDI podwładni są włączani w podejmowanie decyzji, w kulturach o wysokim PDI decyzje zapadają odgórnie.",
  },
  {
    id: 45, lekcja: 6, lekcjaName: "Różnice międzykulturowe",
    question: "Inwestowanie wolnych środków finansowych w pewne, długoterminowe obligacje państwowe lub bezpieczne nieruchomości oraz budowanie wieloletnich, lojalnych relacji z kontrahentami charakteryzuje kultury o:",
    options: [
      { key: "a", text: "niskim wskaźniku unikania niepewności (UAI)", correct: false },
      { key: "b", text: "orientacji długoterminowej (wysokie LTO)", correct: true },
      { key: "c", text: "skrajnym indywidualizmie (IDV)", correct: false },
    ],
    uzasadnienie: "Inwestowanie w pewne, długoterminowe obligacje i nieruchomości oraz budowanie wieloletnich, lojalnych relacji z kontrahentami to zachowania typowe dla kultur o wysokiej orientacji długoterminowej (LTO). W takich kulturach ceni się cierpliwość, oszczędność i zapobiegliwość, a horyzont planowania obejmuje nie tylko życie danej osoby, ale też jej dzieci i wnuków.",
    wartoWiedziec: "Wskaźnik LTO dotyczy m.in. Korei Południowej, Chin czy Japonii jako krajów o wysokim LTO. Dla kontrastu w kulturach o niskim LTO (klasyczny przykład: Stany Zjednoczone) liczy się dzień dzisiejszy i szybki zysk – stąd większa skłonność do inwestowania np. w akcje czy kryptowaluty z nadzieją na natychmiastowy zwrot.",
  },
  {
    id: 46, lekcja: 6, lekcjaName: "Różnice międzykulturowe",
    question: "Wybór gorzej płatnej pracy w publicznym szpitalu przez młodego lekarza, w celu zdobycia wartościowego doświadczenia i pewnego zawodu w przyszłości (zamiast łatwego i szybkiego zysku w prywatnej klinice kosmetycznej), to przykład kultur o:",
    options: [
      { key: "a", text: "niskiej orientacji długoterminowej, w których liczy się przede wszystkim szybki zysk", correct: false },
      { key: "b", text: "orientacji długoterminowej (wysokie LTO)", correct: true },
      { key: "c", text: "niskim wskaźniku unikania niepewności (UAI)", correct: false },
    ],
    uzasadnienie: "W kulturach o wysokim wskaźniku LTO chętnie inwestuje się w zdobywanie wartościowej wiedzy i doświadczenia, dzięki którym w przyszłości będzie się miało pewny, dobrze płatny zawód – zamiast szukać łatwego, szybkiego zysku. Dokładnie to ilustruje wybór młodego lekarza: rezygnuje z bieżących zarobków na rzecz cennego doświadczenia zdobywanego pod okiem mentorów.",
    wartoWiedziec: "Analogiczny przykład z materiałów kursu wprost przeciwstawia inwestowanie w renomowane studia medyczne (wysokie LTO) zakupowi sportowego auta czy spekulacyjnym kryptowalutom (niskie LTO, gdzie liczy się szybki, bieżący zysk). To inny wymiar niż MAS (męskość/kobiecość), który dotyczy stopnia, w jakim społeczeństwo premiuje asertywność i rywalizację względem współpracy i równowagi praca–życie – nie horyzontu czasowego inwestycji czy wyboru kariery.",
  },
  {
    id: 49, lekcja: 6, lekcjaName: "Różnice międzykulturowe",
    question: "(Z analizy przypadku) Podczas konferencji w Warszawie czworo znajomych – Kacper, Weronika, Tomasz i Marcin – poszło na wspólną kolację po nieplanowanym szkoleniu z AI (zastępczym za odwołany z powodu mgły wykład). Przy stole rozgorzała dyskusja o motywowaniu pracowników i stylach przywództwa. Jedna z osób przekonywała, że styl przywódcy – zadaniowy albo relacyjny – jest cechą stałą danej osoby, a o jego skuteczności decyduje sytuacja: relacje z zespołem, struktura zadań i posiadana władza. Ta sama osoba zamówiła wtedy krokiety z pieczarkami. Kto to był?",
    options: [
      { key: "a", text: "Tomasz", correct: false },
      { key: "b", text: "Weronika", correct: false },
      { key: "c", text: "Marcin", correct: true },
    ],
    uzasadnienie: "To Marcin bronił poglądu charakterystycznego dla modelu Fiedlera: „Wszystko zależy od sytuacji. Różni liderzy się sprawdzają w różnych sytuacjach. Ważne, jakie jest zadanie do wykonania, jaką masz konkretnie władzę, czy twoi pracownicy się poważają i szanują” – to niemal dosłowne przywołanie trzech czynników modelu Fiedlera (relacja przywódca–podwładny, struktura zadań, władza związana ze stanowiskiem).",
    wartoWiedziec: "W tej samej rozmowie Tomasz bronił poglądów zarządzania naukowego i teorii wzmocnienia Skinnera (nagrody i kary), Weronika reprezentowała podejście szkoły psychologicznej (indywidualne potrzeby, sprawiedliwość), a Kacper – wspominając pradziadka Stanisława, założyciela cukierni, z której wyrosła dzisiejsza sieć „Sweet & Happy” – utożsamiał się z przywództwem transformacyjnym.",
  },

  // LEKCJA 7 - Zarządzanie strategiczne
  {
    id: 50, lekcja: 7, lekcjaName: "Zarządzanie strategiczne",
    question: "Gdyby wyższa uczelnia o profilu informatycznym (np. PJATK) wpisała do swojej analizy SWOT czynnik: „ogólnoświatowy trend automatyzacji procesów biznesowych i rosnące zapotrzebowanie rynkowe na programistów”, zakwalifikowałaby go jako:",
    options: [
      { key: "a", text: "silną stronę (czynnik wewnętrzny)", correct: false },
      { key: "b", text: "szansę (czynnik zewnętrzny)", correct: true },
      { key: "c", text: "strategiczną jednostkę biznesową (SJB)", correct: false },
    ],
    uzasadnienie: "Trend automatyzacji i rosnący popyt na programistów to zjawisko zachodzące w otoczeniu uczelni, a nie jej wewnętrzna cecha, więc zgodnie z definicją SWOT (szanse to trendy w otoczeniu działające na korzyść firmy) należy zakwalifikować go jako szansę. Dla uczelni o profilu informatycznym oznacza to potencjalny wzrost liczby kandydatów na kierunki informatyczne.",
    wartoWiedziec: "Częsty błąd to pomylenie szansy z mocną stroną: to, że uczelnia dysponuje nowoczesnym sprzętem komputerowym, nie jest szansą, lecz mocną stroną (czynnikiem wewnętrznym), bo to cecha samej uczelni, a nie trend w jej otoczeniu. Z kolei niż demograficzny, mimo że dotyczy tej samej branży edukacyjnej, jest przykładem zagrożenia zewnętrznego, bo mniejszy przyrost naturalny oznacza mniej potencjalnych kandydatów na studia.",
  },
  {
    id: 51, lekcja: 7, lekcjaName: "Zarządzanie strategiczne",
    question: "(Z analizy przypadku) Do której kategorii macierzy BCG koncern Amazon zaliczyłby tradycyjne e-booki, na rynku których posiada ugruntowaną, dominującą pozycję rynkową, mimo że sam rynek książki elektronicznej jest już w pełni dojrzały i nie wykazuje dynamicznych wzrostów?",
    options: [
      { key: "a", text: "znaki zapytania", correct: false },
      { key: "b", text: "gwiazdy", correct: false },
      { key: "c", text: "dojne krowy", correct: true },
    ],
    uzasadnienie: "E-booki to dla Amazona dojrzały rynek, na którym firma ma dominującą, ugruntowaną pozycję (duży względny udział), ale sam rynek nie rośnie już dynamicznie – to podręcznikowa definicja „dojnej krowy”: wysoko dochodowego produktu niewymagającego dalszych inwestycji, generującego gotówkę, którą można przeznaczyć na inne obszary działalności.",
    wartoWiedziec: "W tej samej logice rozwiązania cloud computing można sklasyfikować jako „gwiazdę” – bo rynek chmurowy dynamicznie rośnie, a firma wciąż w niego intensywnie inwestuje. Zupełnie nowa platforma streamingowa byłaby raczej „znakiem zapytania” (mały udział na rosnącym rynku), a schyłkowy segment z niewielkim udziałem i silną konkurencją – „psem”.",
  },
  {
    id: 52, lekcja: 7, lekcjaName: "Zarządzanie strategiczne",
    question: "Określane przez Państwową Komisję Akredytacyjną restrykcyjne wymogi prawne, które musi spełnić każda nowa instytucja chcąca oferować studia wyższe, stanowią w modelu 5 sił Portera element analizy:",
    options: [
      { key: "a", text: "siły przetargowej dostawców surowców", correct: false },
      { key: "b", text: "zagrożenia ze strony nowych konkurentów (barier wejścia na rynek)", correct: true },
      { key: "c", text: "zagrożenia ze strony produktów substytucyjnych", correct: false },
    ],
    uzasadnienie: "Restrykcyjne wymogi akredytacyjne stawiane przez ustawę o szkolnictwie wyższym działają jak formalna bariera wejścia – żaden nowy podmiot nie może zacząć oferować studiów wyższych bez ich spełnienia, co ogranicza liczbę potencjalnych nowych konkurentów na rynku edukacyjnym. Dlatego takie wymogi analizuje się w ramach siły „zagrożenie ze strony nowych konkurentów”, a nie np. siły dostawców czy substytutów.",
    wartoWiedziec: "Model stworzył amerykański ekonomista Michael E. Porter. Produktami substytucyjnymi dla oferty uczelni (inna z pięciu sił) byłyby raczej kursy programowania online czy certyfikaty branżowe – te produkty nie muszą spełniać wymogów ustawy o szkolnictwie wyższym, więc podlegają zupełnie innej analizie niż bariery wejścia.",
  },
  {
    id: 53, lekcja: 7, lekcjaName: "Zarządzanie strategiczne",
    question: "(Z analizy przypadku) Firma Virgin Group rozwija równolegle linie lotnicze, sieć komórkową, winnice oraz komercyjne loty kosmiczne. Taki typ poszerzania portfolio o całkowicie odrębne, niepowiązane branże to:",
    options: [
      { key: "a", text: "dywersyfikacja niezależna", correct: true },
      { key: "b", text: "dywersyfikacja zależna", correct: false },
      { key: "c", text: "strategia jednego produktu", correct: false },
    ],
    uzasadnienie: "Dywersyfikacja niezależna polega na wejściu firmy w zupełnie niepowiązane ze sobą branże w celu rozłożenia ryzyka biznesowego, a Virgin Group jest klasycznym przykładem tej strategii – jej portfolio obejmuje lotnictwo, muzykę, telekomunikację, winnice oraz loty kosmiczne, czyli sektory niemające ze sobą wspólnego mianownika technologicznego ani produktowego.",
    wartoWiedziec: "Przeciwieństwem jest dywersyfikacja zależna, której przykładem jest Apple – firma zaczynała od komputerów osobistych, a kolejne produkty (iPod, iPhone, iPad, Apple Watch) są ze sobą powiązane wspólną technologią i ekosystemem. Skrajnym przeciwieństwem dywersyfikacji jest „strategia jednego produktu” (np. Ferrari) – ryzykowna, bo utrata zainteresowania jednym produktem może zagrozić całej firmie, czego przykładem był upadek pozycji Nokii, zbyt mocno skupionej na telefonach z systemem Symbian.",
  },
  {
    id: 54, lekcja: 7, lekcjaName: "Zarządzanie strategiczne",
    question: "Firma oferująca luksusowe zegarki, która opiera swój sukces na unikatowości, prestiżu, najwyższej jakości wykonania oraz zatrudnianiu elitarnych rzemieślników zamiast masowej automatyzacji, realizuje wg Portera:",
    options: [
      { key: "a", text: "strategię przywództwa kosztowego", correct: false },
      { key: "b", text: "strategię odróżniania się (dyferencjacji)", correct: true },
      { key: "c", text: "strategię pośrodku drogi (stuck in the middle)", correct: false },
    ],
    uzasadnienie: "Firma stawiająca na unikatowość, prestiż i pracę elitarnych rzemieślników zamiast masowej automatyzacji realizuje strategię odróżniania się (dyferencjacji) – polega ona na tworzeniu oferty postrzeganej przez klientów jako wyjątkowa i wartościowa, co pozwala utrzymywać wysokie marże, tak jak w przypadku takich marek jak Rolex, Chanel czy Hermès.",
    wartoWiedziec: "Dla kontrastu firma realizująca strategię przywództwa kosztowego (np. sieć dyskontów Aldi) podkreśla rezygnację z kosztownej aranżacji sklepów i szumnej reklamy na rzecz „koncentracji na tym, co najważniejsze” – czyli najniższej ceny przy akceptowalnej jakości. Firma, która próbuje być jednocześnie tania i unikalna bez jasnego wyboru, wpada w pułapkę „stuck in the middle” i traci klientów obu segmentów.",
  },
  {
    id: 55, lekcja: 7, lekcjaName: "Zarządzanie strategiczne",
    question: "Sytuacja, w której przedsiębiorstwo zamiast walczyć cenowo z konkurentami na istniejącym nasyconym rynku, tworzy zupełnie nową, unikalną i dotąd nieistniejącą kategorię produktu (np. jadalne, ekologiczne naczynia jednorazowe), to realizacja:",
    options: [
      { key: "a", text: "benchmarkingu naśladowczego", correct: false },
      { key: "b", text: "Strategii Błękitnego Oceanu", correct: true },
      { key: "c", text: "marketingu pretendenta rynkowego", correct: false },
    ],
    uzasadnienie: "Strategia Błękitnego Oceanu polega na tworzeniu nowej, dotąd niezagospodarowanej przestrzeni rynkowej zamiast rywalizacji na zatłoczonym, konkurencyjnym rynku („czerwonym oceanie”). Jadalne, ekologiczne naczynia jednorazowe to dokładnie taki przypadek – produkt na tyle innowacyjny, że tworzy zupełnie nową kategorię, zamiast konkurować ceną z istniejącymi produktami.",
    wartoWiedziec: "Koncepcję tę stworzyli Won Chan Kim i Renée Mauborgne z francuskiej szkoły biznesu INSEAD. Za klasyczne przykłady zastosowania tej strategii w praktyce podaje się kapsułki do ekspresów Nespresso oraz autonomiczne odkurzacze Roomba – oba produkty stworzyły nowe kategorie rynkowe, zamiast walczyć ceną z istniejącą konkurencją.",
  },
  {
    id: 56, lekcja: 7, lekcjaName: "Zarządzanie strategiczne",
    question: "(Z analizy przypadku) Niewielka manufaktura płatnerza w baśniowym królestwie, która zrezygnowała z masowej produkcji mieczy dla regularnej armii królewskiej, a skupiła się wyłącznie na kuciu elitarnych, drogich mieczy dla wąskiej grupy wiedźminów, to w terminologii strategii marketingowych:",
    options: [
      { key: "a", text: "lider rynku", correct: false },
      { key: "b", text: "naśladowca rynkowy", correct: false },
      { key: "c", text: "specjalista rynkowy (nicher)", correct: true },
    ],
    uzasadnienie: "Strategia specjalisty rynkowego (nichera) polega na obsłudze wąskiej niszy pomijanej przez większych graczy, co pozwala unikać bezpośredniej konfrontacji z liderem czy pretendentem rynkowym, a mimo małej skali – osiągać znaczące dochody. Płatnerz kujący elitarne, drogie miecze wyłącznie dla wiedźminów dokładnie odpowiada temu wzorcowi.",
    wartoWiedziec: "Liderem rynku byłaby w tej analogii firma zaopatrująca armię królewską i najważniejszych wielmożów, a naśladowcą lub pretendentem – producent broni średniej jakości dla mniej zamożnej szlachty. W realnym świecie przykładem specjalisty rynkowego jest np. ModCloth, firma wyspecjalizowana w modzie retro, podczas gdy liderami rynku bywają giganci tacy jak Coca-Cola czy Google.",
  },

  // LEKCJA 8 - Podstawy ekonomii
  {
    id: 57, lekcja: 8, lekcjaName: "Podstawy ekonomii",
    question: "Badanie poziomu stopy bezrobocia, wskaźnika inflacji oraz zmian w wolumenie handlu międzynarodowego państwa to obszar:",
    options: [
      { key: "a", text: "mikroekonomii", correct: false },
      { key: "b", text: "makroekonomii", correct: true },
      { key: "c", text: "wyłącznie ekonomii normatywnej", correct: false },
    ],
    uzasadnienie: "Stopa bezrobocia, inflacja i handel międzynarodowy to tzw. „wielkie agregaty” gospodarcze – zbiorcze wskaźniki opisujące całą gospodarkę państwa, a nie decyzje pojedynczych konsumentów czy firm. Badaniem takich zjawisk w skali całego kraju zajmuje się właśnie makroekonomia, w odróżnieniu od mikroekonomii skupionej na zachowaniach pojedynczych podmiotów.",
    wartoWiedziec: "Makroekonomia analizuje też m.in. PKB oraz globalną podaż i popyt, natomiast mikroekonomia bada decyzje konsumentów i producentów oraz ich wzajemne interakcje – np. dlaczego dany klient kupuje więcej lub mniej konkretnego towaru. Obie dziedziny razem tworzą pełny obraz ekonomii, definiowanej najogólniej jako nauka o sprawnym zarządzaniu gospodarstwem – od domowego po całe państwo.",
  },
  {
    id: 58, lekcja: 8, lekcjaName: "Podstawy ekonomii",
    question: "Zdanie: „Rząd powinien natychmiast obniżyć stopy procentowe i zapewnić bezpłatne mieszkanie socjalne każdemu obywatelowi” to klasyczny przykład:",
    options: [
      { key: "a", text: "twierdzenia ekonomii pozytywnej", correct: false },
      { key: "b", text: "założenia ceteris paribus", correct: false },
      { key: "c", text: "twierdzenia ekonomii normatywnej", correct: true },
    ],
    uzasadnienie: "Zdanie zawiera słowo „powinien” i wyraża subiektywny sąd wartościujący dotyczący pożądanego kształtu polityki gospodarczej, a nie obiektywny, weryfikowalny opis faktów. To właśnie odróżnia ekonomię normatywną (odpowiada na pytanie „jak powinno być?”) od ekonomii pozytywnej (odpowiada na pytanie „jak jest?”).",
    wartoWiedziec: "Granica bywa subtelna – zdania ekonomii pozytywnej wcale nie muszą być prawdziwe, wystarczy, że da się je zweryfikować obiektywnymi metodami (np. twierdzenie o wzroście stopy bezrobocia można sprawdzić w danych statystycznych, nawet jeśli okaże się fałszywe).",
  },
  {
    id: 59, lekcja: 8, lekcjaName: "Podstawy ekonomii",
    question: "Sytuacja, w której zmęczony sportowiec pije po biegu cztery identyczne butelki wody mineralnej, z czego pierwsza daje mu ogromne poczucie ulgi, a czwarta niemal nie sprawia mu już satysfakcji, to ilustracja:",
    options: [
      { key: "a", text: "prawa malejącej użyteczności krańcowej", correct: true },
      { key: "b", text: "paradoksu Giffena", correct: false },
      { key: "c", text: "kosztu przeciętnego w ujęciu Veblena", correct: false },
    ],
    uzasadnienie: "Opisana sytuacja to klasyczna ilustracja prawa malejącej użyteczności krańcowej: w miarę spożywania kolejnych identycznych jednostek danego dobra satysfakcja z każdej następnej jednostki jest coraz mniejsza, mimo że same butelki są obiektywnie identyczne.",
    wartoWiedziec: "To samo prawo tłumaczy np. dlaczego pierwsza gałka lodów smakuje najbardziej, a kolejne coraz mniej. Użyteczność krańcowa (marginalna) to jedno z trzech kluczowych pojęć obok wartości całkowitej i przeciętnej – wprowadzenie pojęć krańcowych przez prekursorów mikroekonomii „zrewolucjonizowało” praktyczne zastosowania tej nauki, np. przy obliczaniu optymalnej wielkości produkcji.",
  },
  {
    id: 60, lekcja: 8, lekcjaName: "Podstawy ekonomii",
    question: "Struktura rynkowa, w której po stronie zakupu (popytu) działa tylko jeden, jedyny odbiorca kontrolujący ceny dostawców (np. państwo kupujące czołgi od fabryk zbrojeniowych) to:",
    options: [
      { key: "a", text: "monopol", correct: false },
      { key: "b", text: "monopson", correct: true },
      { key: "c", text: "oligopol", correct: false },
    ],
    uzasadnienie: "Monopson to struktura rynku, w której po stronie popytu działa tylko jeden odbiorca, kontrolujący warunki zakupu wobec wielu dostawców. Podręcznikowym przykładem jest przemysł zbrojeniowy, gdzie jedynym nabywcą broni i sprzętu wojskowego od licznych fabryk jest zwykle państwo.",
    wartoWiedziec: "Monopson jest lustrzanym odbiciem monopolu, w którym to jeden sprzedawca dominuje po stronie podaży. Do pełnej rodziny struktur rynkowych należą też: konkurencja doskonała (wielu sprzedawców identycznego towaru), duopol (dwóch sprzedawców), oligopol (kilku sprzedawców) i konkurencja monopolistyczna (wielu sprzedawców podobnych, lecz nie identycznych towarów).",
  },
  {
    id: 61, lekcja: 8, lekcjaName: "Podstawy ekonomii",
    question: "Jeśli w wyniku drastycznego wzrostu ceny chleba w ubogiej dzielnicy portowej, najmniej zamożni robotnicy paradoksalnie zaczynają kupować go więcej (ponieważ po zakupie chleba nie stać ich już na droższe mięso), mamy do czynienia z:",
    options: [
      { key: "a", text: "efektem demonstracji Veblena", correct: false },
      { key: "b", text: "popytem doskonale elastycznym", correct: false },
      { key: "c", text: "paradoksem Giffena", correct: true },
    ],
    uzasadnienie: "To klasyczny paradoks Giffena: po wzroście ceny podstawowego dobra (chleba) ubodzy konsumenci kupują go jeszcze więcej, ponieważ po zakupie tej samej ilości chleba zostaje im za mało pieniędzy na droższe produkty (np. mięso), więc resztę środków przeznaczają na dodatkowy chleb, by zaspokoić głód.",
    wartoWiedziec: "Dobro objęte tym mechanizmem nazywa się „dobrem Giffena” – to dobro niższego rzędu, bez bliskich substytutów, którego konsumpcja stanowi na tyle dużą część wydatków ubogiego nabywcy, że zmiana ceny wyraźnie wpływa na jego realny dochód. Nie należy mylić go z paradoksem Veblena, dotyczącym odwrotnej sytuacji – dóbr luksusowych, na które popyt rośnie wraz z ceną, bo wysoka cena jest oznaką prestiżu.",
  },
  {
    id: 62, lekcja: 8, lekcjaName: "Podstawy ekonomii",
    question: "Cena biletów do kina wzrosła o 10%, a w reakcji na to liczba sprzedanych biletów spadła aż o 25% (wartość bezwzględna Edp = 2,5). Oznacza to, że popyt na bilety jest:",
    options: [
      { key: "a", text: "elastyczny", correct: true },
      { key: "b", text: "nieelastyczny", correct: false },
      { key: "c", text: "doskonale sztywny", correct: false },
    ],
    uzasadnienie: "Skoro procentowa zmiana liczby sprzedanych biletów (25%) jest większa niż procentowa zmiana ceny (10%), wartość bezwzględna elastyczności cenowej popytu wynosi 2,5, czyli więcej niż 1 – a to oznacza, że popyt jest elastyczny, czyli silnie reaguje na zmiany ceny.",
    wartoWiedziec: "Gdy popyt jest elastyczny (Edp>1), bardziej opłacalna bywa obniżka ceny niż jej podwyżka, bo utrata klientów przy podwyżce przewyższa dodatkowy zysk jednostkowy. Przeciwną sytuacją jest popyt nieelastyczny (Edp<1), gdzie podniesienie ceny zwykle zwiększa zyskowność, a skrajnymi przypadkami są popyt doskonale nieelastyczny (Edp=0) oraz doskonale elastyczny (Edp→∞).",
  },
  {
    id: 63, lekcja: 8, lekcjaName: "Podstawy ekonomii",
    question: "Elastyczność mieszana popytu dwóch dóbr jest ujemna (Edx(py) < 0), co oznacza, że gwałtowny wzrost ceny dobra Y wywoła spadek popytu na dobro X. Dobra te to:",
    options: [
      { key: "a", text: "substytuty (np. masło i margaryna)", correct: false },
      { key: "b", text: "dobra komplementarne (np. kawa i śmietanka)", correct: true },
      { key: "c", text: "dobra niezależne konsumpcyjnie", correct: false },
    ],
    uzasadnienie: "Ujemna elastyczność mieszana (krzyżowa) popytu oznacza, że wzrost ceny jednego dobra powoduje spadek popytu na drugie – a to charakteryzuje dobra komplementarne, czyli takie, które się nawzajem uzupełniają, jak kawa i śmietanka: gdy kawa drożeje i pijemy jej mniej, potrzebujemy też mniej śmietanki, mimo że jej cena się nie zmieniła.",
    wartoWiedziec: "Przeciwną sytuację obserwuje się w przypadku substytutów (dóbr mogących się nawzajem zastępować, jak masło i margaryna) – tam elastyczność mieszana jest dodatnia: podwyżka ceny masła zwiększa popyt na margarynę, bo konsumenci szukają tańszej alternatywy.",
  },
  {
    id: 64, lekcja: 8, lekcjaName: "Podstawy ekonomii",
    question: "Gdy dochód pana Jana wzrósł o 50%, całkowicie zrezygnował on z kupowania tanich ubrań na wagę w second-handach (Edi < 0), zastępując je odzieżą z salonów markowych. Dla pana Jana odzież używana to:",
    options: [
      { key: "a", text: "dobro podstawowe", correct: false },
      { key: "b", text: "dobro luksusowe", correct: false },
      { key: "c", text: "dobro niższego rzędu", correct: true },
    ],
    uzasadnienie: "Odzież z second-handu to typowy przykład dobra niższego rzędu – konsumenci sięgają po nią głównie z konieczności finansowej, a gdy ich dochód rośnie, z ulgą z niej rezygnują na rzecz towarów lepszej jakości. Ujemna elastyczność dochodowa (Edi<0) właśnie to opisuje: wzrost dochodu powoduje spadek popytu na dane dobro.",
    wartoWiedziec: "Sprzedawcy dóbr niższego rzędu są jedynymi na rynku, którzy nie zyskują na wzbogaceniu się swoich klientów – to odróżnia ich od sprzedawców dóbr normalnych (Edi>0), które dzielą się na dobra podstawowe (np. pasta do zębów – popyt rośnie wolniej niż dochód) oraz dobra luksusowe (np. biżuteria czy sushi – popyt rośnie szybciej niż dochód).",
  },

  // Dodatkowe pytania z drugiego zestawu (porównanie i uzupełnienie bazy)

  // LEKCJA 1 - Podstawy zarządzania
  {
    id: 65, lekcja: 1, lekcjaName: "Podstawy zarządzania",
    question: "Cztery podstawowe funkcje kierownicze to:",
    options: [
      { key: "a", text: "przyjmowanie do pracy, kontrolowanie, ocenianie, zwalnianie", correct: false },
      { key: "b", text: "planowanie, organizowanie, kierowanie, kontrolowanie", correct: true },
      { key: "c", text: "planowanie, negocjowanie, budżetowanie, kontrolowanie", correct: false },
    ],
    uzasadnienie: "Klasyczny podział funkcji kierowniczych obejmuje planowanie (wyznaczanie celów), organizowanie (przydzielanie zadań i zasobów), kierowanie/przewodzenie (motywowanie ludzi do współpracy) oraz kontrolowanie (pomiar efektów i wprowadzanie korekt). To fundament, na którym opierają się wszystkie inne narzędzia zarządzania.",
    wartoWiedziec: "Podział ten spopularyzował francuski inżynier i teoretyk zarządzania Henri Fayol, twórca także 14 zasad zarządzania (m.in. podziału pracy, jedności rozkazodawstwa czy ładu). Choć od czasów Fayola minęło ponad 100 lat, te cztery funkcje wciąż stanowią podstawę większości podręczników do zarządzania.",
  },
  {
    id: 66, lekcja: 1, lekcjaName: "Podstawy zarządzania",
    question: "Interesariusze organizacji to inaczej:",
    options: [
      { key: "a", text: "akcjonariusze organizacji", correct: false },
      { key: "b", text: "klienci organizacji", correct: false },
      { key: "c", text: "wszyscy zainteresowani kondycją organizacji", correct: true },
    ],
    uzasadnienie: "Interesariusze (ang. stakeholders) to szersza kategoria niż tylko akcjonariusze czy klienci – obejmuje wszystkie podmioty zainteresowane kondycją firmy i mające na nią wpływ, m.in. pracowników, klientów, dostawców, rządy, media czy lokalną społeczność.",
    wartoWiedziec: "Akcjonariusze (shareholders) to tylko jedna, wąska grupa interesariuszy – ci, którzy mają bezpośredni udział kapitałowy w firmie. Współczesne zarządzanie coraz częściej podkreśla konieczność uwzględniania interesów wszystkich grup interesariuszy, nie tylko właścicieli, m.in. w ramach koncepcji społecznej odpowiedzialności biznesu (CSR).",
  },

  // LEKCJA 2 - Struktura organizacyjna
  {
    id: 67, lekcja: 2, lekcjaName: "Struktura organizacyjna",
    question: "Niektóre ważne czynniki wpływające na budowę struktury organizacyjnej to:",
    options: [
      { key: "a", text: "nie ma żadnych ważnych czynników, budowa struktury organizacyjnej to zbędna formalność", correct: false },
      { key: "b", text: "przede wszystkim różnego rodzaju kodeksy — struktury wszystkich organizacji są ściśle określone prawnie", correct: false },
      { key: "c", text: "strategia organizacji, jej kultura, misja, cele i charakter działalności, wielkość i geograficzny zakres jej działalności czy stosowane technologie", correct: true },
    ],
    uzasadnienie: "Struktura organizacyjna nie powstaje przypadkowo ani nie jest odgórnie narzucona przez prawo — kształtuje ją zestaw czynników (determinantów) specyficznych dla danej firmy: jej strategia, misja, kultura, wielkość, zasięg geograficzny działalności oraz stosowana technologia.",
    wartoWiedziec: "To dlatego dwie firmy z tej samej branży mogą mieć zupełnie inne struktury – mała, lokalna piekarnia potrzebuje prostej struktury liniowej, a globalna korporacja z wieloma oddziałami raczej struktury dywizjonalnej lub holdingowej. Zmiana strategii firmy (np. ekspansja zagraniczna) niemal zawsze wymusza też przebudowę jej struktury organizacyjnej.",
  },
  {
    id: 68, lekcja: 2, lekcjaName: "Struktura organizacyjna",
    question: "Punktem wyjścia do budowy struktury organizacyjnej jest:",
    options: [
      { key: "a", text: "podział pracy", correct: true },
      { key: "b", text: "ilość posiadanego kapitału", correct: false },
      { key: "c", text: "prawna forma organizacji", correct: false },
    ],
    uzasadnienie: "Zanim zaprojektuje się hierarchię czy zasady raportowania, trzeba najpierw zdecydować, jak podzielić całościowe zadanie organizacji na mniejsze, przypisywalne konkretnym stanowiskom części — czyli dokonać podziału pracy. To on determinuje, jakie stanowiska w ogóle powstaną i jak będą się do siebie odnosić.",
    wartoWiedziec: "Podział pracy (specjalizacja) to jeden z najstarszych i najważniejszych mechanizmów w teorii organizacji – opisywał go już Adam Smith na przykładzie fabryki szpilek, pokazując, że rozbicie produkcji na proste, powtarzalne czynności wielokrotnie zwiększa wydajność w porównaniu do sytuacji, gdy jeden pracownik wykonuje cały proces samodzielnie.",
  },
  {
    id: 69, lekcja: 2, lekcjaName: "Struktura organizacyjna",
    question: "Im wyższy jest stopień fizycznego rozproszenia geograficznego podwładnych (np. praca w wielu odległych oddziałach), tym:",
    options: [
      { key: "a", text: "szersza powinna być rozpiętość kierowania", correct: false },
      { key: "b", text: "węższa powinna być rozpiętość kierowania", correct: true },
      { key: "c", text: "rozpiętość kierowania nie ma znaczenia", correct: false },
    ],
    uzasadnienie: "Im bardziej podwładni są rozproszeni geograficznie, tym trudniej kierownikowi efektywnie ich nadzorować i koordynować ich pracę – dlatego rozpiętość kierowania (liczba osób podległych jednemu szefowi) powinna być w takiej sytuacji węższa niż w przypadku zespołu pracującego w jednym miejscu.",
    wartoWiedziec: "Rozpiętość kierowania zależy też od innych czynników: kwalifikacji podwładnych (wyższe kwalifikacje pozwalają na szerszą RK), stopnia formalizacji (więcej procedur pisemnych pozwala na szerszą RK) oraz częstości występowania nowych, nietypowych problemów (im częstsze, tym węższa RK potrzebna, by kierownik zdążył pomóc w ich rozwiązaniu).",
  },
  {
    id: 70, lekcja: 2, lekcjaName: "Struktura organizacyjna",
    question: "Decentralizacji organizacji (przesunięciu władzy decyzyjnej w dół hierarchii) sprzyja:",
    options: [
      { key: "a", text: "zatrudnienie wysoce kompetentnej kadry kierowniczej średniego i niższego szczebla", correct: true },
      { key: "b", text: "stabilne otoczenie organizacji", correct: false },
      { key: "c", text: "potrzeba częstego podejmowania decyzji strategicznych wysokiego szczebla", correct: false },
    ],
    uzasadnienie: "Decentralizacja polega na przekazywaniu uprawnień decyzyjnych niższym szczeblom zarządzania, co jest bezpieczne i skuteczne tylko wtedy, gdy ci menedżerowie średniego i niższego szczebla mają wystarczające kompetencje, by podejmować trafne decyzje samodzielnie, bez każdorazowej konsultacji z centralą.",
    wartoWiedziec: "Decentralizacji sprzyja też niestabilne, dynamicznie zmieniające się otoczenie – w takich warunkach czekanie na decyzję centrali oznacza utratę cennego czasu, więc lepiej, by decyzje zapadały bliżej miejsca, w którym pojawia się problem (por. zasada delegowania uprawnień).",
  },
  {
    id: 71, lekcja: 2, lekcjaName: "Struktura organizacyjna",
    question: "Zasada delegowania uprawnień mówi, że:",
    options: [
      { key: "a", text: "przydzielenie danemu stanowisku zadań musi się wiązać z przyznaniem odpowiednich uprawnień i odpowiedzialności", correct: false },
      { key: "b", text: "uprawnienia decyzyjne powinny być zlokalizowane możliwie jak najbliżej miejsca, w którym występują problemy wymagające podjęcia decyzji", correct: true },
      { key: "c", text: "kierownik powinien za wszelką cenę unikać przekazywania swoich uprawnień podwładnym", correct: false },
    ],
    uzasadnienie: "Zasada delegowania uprawnień głosi, że decyzje powinny zapadać jak najbliżej miejsca, w którym pojawia się problem — dzięki temu są podejmowane szybciej i przez osoby najlepiej znające lokalny kontekst, zamiast czekać na decyzję z odległej centrali.",
    wartoWiedziec: "Nie należy mylić tej zasady z zasadą równoważności, która mówi, że zadania muszą iść w parze z odpowiednimi uprawnieniami i odpowiedzialnością (to opisuje raczej pierwsza z błędnych odpowiedzi w tym pytaniu) – to dwie różne, choć powiązane zasady organizacyjne.",
  },
  {
    id: 72, lekcja: 2, lekcjaName: "Struktura organizacyjna",
    question: "Za jedną z wad formalizacji (stopnia pisemnego zdefiniowania celów i procedur) należy uznać:",
    options: [
      { key: "a", text: "instytucjonalizację doświadczenia organizacji", correct: false },
      { key: "b", text: "zmniejszenie potrzeby koordynacji organizacji poprzez hierarchię", correct: false },
      { key: "c", text: "usztywnienie organizacji", correct: true },
    ],
    uzasadnienie: "Wysoki stopień formalizacji, choć daje stabilność i odciąża kierowników, ma też swoją cenę: usztywnia organizację, utrudniając szybkie reagowanie na nietypowe sytuacje niewpisujące się w istniejące procedury (tzw. wyuczona nieudolność).",
    wartoWiedziec: "Formalizacja ma też zalety, wymienione błędnie jako wady w dystraktorach tego pytania: instytucjonalizacja doświadczenia (spisane procedury zachowują wiedzę organizacji nawet po odejściu pracowników) oraz zmniejszenie potrzeby bieżącej koordynacji przez hierarchię (bo pracownicy sami znajdują odpowiedzi w dokumentacji).",
  },
  {
    id: 73, lekcja: 2, lekcjaName: "Struktura organizacyjna",
    question: "Trener Gmoch, który analizuje taktyki drużyn zagranicznych i przekazuje wnioski trenerowi Górskiemu (podejmującemu decyzje o składzie i taktyce), zajmował stanowisko:",
    options: [
      { key: "a", text: "liniowe", correct: false },
      { key: "b", text: "sztabowe", correct: true },
      { key: "c", text: "wykonawcze", correct: false },
    ],
    uzasadnienie: "Trener Gmoch dostarczał ekspercką analizę i rekomendacje, ale to trener Górski podejmował ostateczne decyzje o taktyce i składzie — to klasyczny przykład stanowiska sztabowego (doradczego, eksperckiego), które nie wydaje bezpośrednich poleceń, w odróżnieniu od stanowisk liniowych, które faktycznie zarządzają podwładnymi i podejmują decyzje.",
    wartoWiedziec: "Trzeci typ stanowisk to stanowiska wykonawcze – zajmują się bezpośrednim tworzeniem produktu lub usługi (np. sami piłkarze na boisku), bez funkcji zarządczych czy doradczych. Konflikty między sztabem a linią są częste – linia bywa nieufna wobec „oderwanej od realiów” wiedzy sztabu, a sztab czuje, że jego rekomendacje są ignorowane.",
  },
  {
    id: 74, lekcja: 2, lekcjaName: "Struktura organizacyjna",
    question: "Jednym z powodów konfliktów między Sztabem a Linią może być:",
    options: [
      { key: "a", text: "nieuznawanie przez Linię autorytetu i przydatności w praktyce wiedzy Sztabu", correct: true },
      { key: "b", text: "precyzyjne określenie zakresu kompetencji Linii i Sztabu", correct: false },
      { key: "c", text: "integrowanie działalności Linii i Sztabu", correct: false },
    ],
    uzasadnienie: "Menedżerowie liniowi, odpowiedzialni za bieżące wyniki i mający bezpośredni kontakt z realiami operacyjnymi, często nie doceniają wiedzy eksperckiej sztabu, uznając ją za teoretyczną, oderwaną od praktyki lub zbędną — to jedno z głównych źródeł napięć między tymi dwoma typami stanowisk.",
    wartoWiedziec: "Precyzyjne określenie zakresu kompetencji obu stron oraz świadome integrowanie ich działalności to z kolei sposoby na ZAPOBIEGANIE takim konfliktom, a nie ich przyczyny – dobrze zaprojektowana struktura liniowo-sztabowa stara się właśnie unikać tych napięć, jasno rozdzielając role doradcze od decyzyjnych.",
  },
  {
    id: 75, lekcja: 2, lekcjaName: "Struktura organizacyjna",
    question: "Do jednej z zalet struktury smukłej (z dużą liczbą szczebli hierarchii i małą rozpiętością kierowania) zaliczamy:",
    options: [
      { key: "a", text: "długi kanał przekazywania informacji", correct: false },
      { key: "b", text: "dużą samodzielność pracowników", correct: false },
      { key: "c", text: "możliwość dokładnej i bieżącej kontroli pracy podwładnych", correct: true },
    ],
    uzasadnienie: "Wąska rozpiętość kierowania w strukturze smukłej oznacza, że każdy kierownik nadzoruje niewielu podwładnych, co pozwala na dokładną, bieżącą kontrolę ich pracy. To odróżnia strukturę smukłą od płaskiej, gdzie szeroka rozpiętość kierowania wymusza większą samodzielność pracowników, bo kierownik fizycznie nie jest w stanie kontrolować wszystkich na bieżąco.",
    wartoWiedziec: "Długi kanał przekazywania informacji, wymieniony w dystraktorze, jest w rzeczywistości WADĄ struktury smukłej — im więcej szczebli hierarchii musi przejść informacja, tym większe ryzyko jej zniekształcenia lub opóźnienia (tzw. efekt głuchego telefonu).",
  },
  {
    id: 76, lekcja: 2, lekcjaName: "Struktura organizacyjna",
    question: "Jedną z typowych cech struktury funkcjonalnej jest:",
    options: [
      { key: "a", text: "jedność rozkazodawstwa", correct: false },
      { key: "b", text: "łatwość utrzymania dyscypliny", correct: false },
      { key: "c", text: "podział organizacji na różne wyspecjalizowane działy, np. marketingu, produkcji, księgowości", correct: true },
    ],
    uzasadnienie: "Struktura funkcjonalna organizuje firmę wokół wyspecjalizowanych działów odpowiadających poszczególnym funkcjom biznesowym (marketing, produkcja, finanse, HR itd.), w których pracownicy grupowani są według rodzaju wykonywanej pracy, a nie np. obsługiwanego produktu czy regionu.",
    wartoWiedziec: "W klasycznej wersji struktura funkcjonalna łamie zasadę jedności rozkazodawstwa – pracownik może otrzymywać polecenia od kilku wyspecjalizowanych kierowników jednocześnie (np. od kierownika produkcji i kierownika jakości), co odróżnia ją od struktury liniowej, gdzie jedność rozkazodawstwa jest ściśle zachowana.",
  },
  {
    id: 77, lekcja: 2, lekcjaName: "Struktura organizacyjna",
    question: "Do charakterystycznych cech struktury liniowo-sztabowej zaliczamy:",
    options: [
      { key: "a", text: "jednoczesne uzyskanie jedności rozkazodawstwa i specjalistycznego wsparcia dla zarządzania", correct: true },
      { key: "b", text: "złamanie zasady jedności rozkazodawstwa", correct: false },
      { key: "c", text: "brak możliwości uzyskania przez kierowników liniowych specjalistycznego wsparcia", correct: false },
    ],
    uzasadnienie: "Struktura liniowo-sztabowa łączy zalety struktury liniowej (jedność rozkazodawstwa — pracownik ma tylko jednego przełożonego) z dostępem do specjalistycznej wiedzy komórek doradczych (sztabu), które wspierają kierowników liniowych merytorycznie, ale nie wydają im bezpośrednich poleceń.",
    wartoWiedziec: "To właśnie próba połączenia najlepszych cech obu prostszych struktur (liniowej i funkcjonalnej) czyni strukturę liniowo-sztabową jedną z najpopularniejszych form organizacyjnych we współczesnych średnich i dużych firmach.",
  },
  {
    id: 78, lekcja: 2, lekcjaName: "Struktura organizacyjna",
    question: "Struktura z dyrekcją generalną na czele oraz podległymi jej gigantycznymi pionami funkcjonalnymi (np. HR, Finanse, R&D, Produkcja) obejmującymi całą organizację to:",
    options: [
      { key: "a", text: "struktura dywizjonalna (D/M)", correct: false },
      { key: "b", text: "struktura holdingowa (H)", correct: false },
      { key: "c", text: "struktura funkcjonalna (U)", correct: true },
    ],
    uzasadnienie: "Struktura U-funkcjonalna (uniwersalna) to typ struktury makroorganizacyjnej stosowany w dużych firmach, w której całą organizację dzieli się na gigantyczne piony funkcjonalne (np. cały dział HR, cały dział finansów) podległe bezpośrednio dyrekcji generalnej — w przeciwieństwie do struktury dywizjonalnej, gdzie każda dywizja ma własne, lokalne funkcje wsparcia.",
    wartoWiedziec: "Pozostałe dwie struktury makroorganizacyjne to: struktura holdingowa (H) — zbiór niezależnych, niepowiązanych ze sobą jednostek ocenianych tylko za wyniki, oraz struktura dywizjonalna (D/M) — samodzielne dywizje wg produktu lub geografii, gdzie centrala kontroluje tylko kluczowe decyzje strategiczne i finanse.",
  },

  // LEKCJA 3 - Szkoły zarządzania
  {
    id: 79, lekcja: 3, lekcjaName: "Szkoły zarządzania",
    question: "Jaką odpowiedź na pytanie o źródło „bogactwa narodów” dał Adam Smith?",
    options: [
      { key: "a", text: "złoto i srebro", correct: false },
      { key: "b", text: "żyzna ziemia", correct: false },
      { key: "c", text: "praca ludzka", correct: true },
    ],
    uzasadnienie: "Adam Smith, autor „Bogactwa narodów” (1776), przeciwstawił się merkantylistycznemu przekonaniu, że bogactwo kraju to zgromadzone złoto i srebro. Uznał, że prawdziwym źródłem bogactwa jest praca ludzka — a konkretnie jej produktywność, którą można znacząco zwiększyć dzięki podziałowi pracy.",
    wartoWiedziec: "Smith zilustrował to na słynnym przykładzie fabryki szpilek: jeden robotnik pracujący samodzielnie mógłby wykonać najwyżej kilkadziesiąt szpilek dziennie, ale dziesięciu robotników, z których każdy wykonuje jedną wyspecjalizowaną czynność w łańcuchu produkcyjnym, może wyprodukować ich razem kilkadziesiąt tysięcy.",
  },
  {
    id: 80, lekcja: 3, lekcjaName: "Szkoły zarządzania",
    question: "Adam otrzymał propozycję samodzielnego, ambitnego projektu (otwarcie nowej filii) i bardzo się ucieszył. Zgodnie z hierarchią potrzeb Maslowa, która potrzeba nie była u niego wcześniej spełniana?",
    options: [
      { key: "a", text: "potrzeba przynależności", correct: false },
      { key: "b", text: "potrzeba samorealizacji", correct: true },
      { key: "c", text: "potrzeba bezpieczeństwa", correct: false },
    ],
    uzasadnienie: "Samodzielny, ambitny projekt daje możliwość realizacji własnych pomysłów, rozwoju kompetencji i osiągnięcia czegoś znaczącego — to właśnie potrzeba samorealizacji, znajdująca się na szczycie hierarchii Maslowa. Entuzjastyczna reakcja Adama sugeruje, że wcześniej nie miał okazji jej zaspokoić w swojej dotychczasowej, rutynowej pracy.",
    wartoWiedziec: "Według Maslowa potrzeby niższego rzędu (fizjologiczne, bezpieczeństwa, przynależności, szacunku) muszą być zaspokojone, zanim człowiek zacznie dążyć do samorealizacji. Menedżerowie chcący zmotywować pracowników poprzez ambitne projekty powinni więc najpierw upewnić się, że podstawowe potrzeby zespołu (stabilność zatrudnienia, dobre relacje w zespole) są już spełnione.",
  },
  {
    id: 81, lekcja: 3, lekcjaName: "Szkoły zarządzania",
    question: "Które z poniższych zdań wypowiedziałby zwolennik teorii Y Douglasa McGregora?",
    options: [
      { key: "a", text: "ludzie z natury są ambitni i chcą dobrze pracować", correct: true },
      { key: "b", text: "ludzie z natury są leniwi, gdyby wygrali dużo pieniędzy, do końca życia nic by nie robili", correct: false },
      { key: "c", text: "wydajność pracy możemy zapewnić poprzez ścisłą i surową kontrolę pracy ludzi", correct: false },
    ],
    uzasadnienie: "Teoria Y McGregora to optymistyczny pogląd na naturę ludzką w pracy: zakłada, że ludzie z natury chcą pracować, są ambitni, zdolni do samokontroli i szukania nowych rozwiązań, a praca jest dla nich naturalną potrzebą rozwoju. Pozostałe dwa zdania to typowe przekonania zwolennika pesymistycznej teorii X.",
    wartoWiedziec: "McGregor był osobiście gorącym zwolennikiem teorii Y i uważał, że to często sposób traktowania pracowników przez menedżera — a nie „prawdziwa” natura ludzka — decyduje, czy pracownicy będą zachowywać się zgodnie z założeniami teorii X, czy teorii Y (efekt samospełniającej się przepowiedni).",
  },
  {
    id: 82, lekcja: 3, lekcjaName: "Szkoły zarządzania",
    question: "Które z następujących zdań mogłoby zostać wypowiedziane przez reprezentanta szkoły systemowej?",
    options: [
      { key: "a", text: "w pracy skup się na swoim zadaniu i nie interesuj się innymi działami", correct: false },
      { key: "b", text: "organizacja powinna być jak najbardziej odizolowana od otoczenia", correct: false },
      { key: "c", text: "pamiętaj, że jakość wykonania butów w dziale produkcji będzie mieć wpływ na efektywność działu marketingu", correct: true },
    ],
    uzasadnienie: "Szkoła systemowa postrzega organizację jako system otwarty — zestaw wzajemnie powiązanych części wchodzących w interakcję ze sobą i z otoczeniem. Zgodnie z tym podejściem, wynik pracy jednego działu (np. jakość produktu z produkcji) nieuchronnie wpływa na inne działy (np. na to, jak łatwo dział marketingu będzie mógł sprzedać ten produkt).",
    wartoWiedziec: "Dwie pozostałe odpowiedzi reprezentują dokładne przeciwieństwo myślenia systemowego – izolowanie się od innych działów i od otoczenia jest charakterystyczne dla organizacji traktowanej jako system zamknięty, co szkoła systemowa uznaje za błędne i nieefektywne podejście do zarządzania.",
  },

  // LEKCJA 4 - Zarządzanie zasobami ludzkimi
  {
    id: 83, lekcja: 4, lekcjaName: "Zarządzanie zasobami ludzkimi",
    question: "Wieloletnie, zaufane relacje firmy z bankiem finansującym jej inwestycje oraz z kluczowymi dostawcami surowców zaliczamy do zasobów:",
    options: [
      { key: "a", text: "rynkowych", correct: false },
      { key: "b", text: "relacyjnych", correct: true },
      { key: "c", text: "organizacyjnych", correct: false },
    ],
    uzasadnienie: "Zasoby relacyjne to więzi firmy z jej otoczeniem — np. relacje z bankami, kontrahentami czy dostawcami — które budują się latami i są trudne do skopiowania przez konkurencję, dając realną przewagę w postaci lepszych warunków finansowania czy priorytetowej obsługi.",
    wartoWiedziec: "To jeden z tzw. zasobów nowoczesnych, obok zasobów rynkowych (marka, lojalność klientów, kanały dystrybucji), własności intelektualnej (patenty, know-how) oraz zasobów organizacyjnych (struktura, kultura firmy, systemy zarządzania). Razem uzupełniają one klasyczny podział na zasoby ludzkie, finansowe, rzeczowe i informacyjne.",
  },
  {
    id: 84, lekcja: 4, lekcjaName: "Zarządzanie zasobami ludzkimi",
    question: "Które z poniższych pytań zadanych kandydatce podczas rozmowy kwalifikacyjnej jest niewłaściwe i niedopuszczalne w świetle prawa?",
    options: [
      { key: "a", text: "\"Czy może Pani powiedzieć kilka słów o sobie?\"", correct: false },
      { key: "b", text: "\"Czy ucieszył Panią wynik ostatnich wyborów w Polsce?\"", correct: true },
      { key: "c", text: "\"Jakie są Pani słabe strony?\"", correct: false },
    ],
    uzasadnienie: "Pytanie o poglądy polityczne kandydatki (np. o stosunek do wyników wyborów) nie ma żadnego związku z jej kompetencjami zawodowymi i narusza zasadę równego traktowania w zatrudnieniu — podobnie jak pytania o plany rodzinne czy stan zdrowia. Pytania o autoprezentację czy słabe strony są natomiast standardowym i w pełni dopuszczalnym elementem rekrutacji.",
    wartoWiedziec: "Poza poglądami politycznymi prawo zabrania też pytań o m.in. plany macierzyńskie, orientację seksualną, przynależność związkową czy stan zdrowia niezwiązany bezpośrednio z wymaganiami stanowiska. Zasada jest prosta: selekcja kandydatów powinna opierać się wyłącznie na obiektywnych wymaganiach danej pracy.",
  },
  {
    id: 85, lekcja: 4, lekcjaName: "Zarządzanie zasobami ludzkimi",
    question: "Grzegorz przyznał Adamowi podwyżkę po obejrzeniu jego dyplomu ukończenia prestiżowych studiów. Jakie kryterium oceny zastosował?",
    options: [
      { key: "a", text: "efektywnościowe", correct: false },
      { key: "b", text: "formalne", correct: true },
      { key: "c", text: "behawioralne", correct: false },
    ],
    uzasadnienie: "Kryterium formalne opiera się na udokumentowanych kwalifikacjach pracownika — dyplomach, certyfikatach, ukończonych kursach — a nie na jego rzeczywistych wynikach pracy (kryterium efektywnościowe) czy postawach i zachowaniu w zespole (kryterium behawioralne).",
    wartoWiedziec: "Poleganie wyłącznie na kryteriach formalnych bywa ryzykowne — świetny dyplom nie zawsze przekłada się na realne wyniki w pracy. Dlatego dobre systemy oceny pracowników łączą wszystkie trzy typy kryteriów: formalne, efektywnościowe i behawioralne, by uzyskać pełniejszy obraz kompetencji danej osoby.",
  },
  {
    id: 86, lekcja: 4, lekcjaName: "Zarządzanie zasobami ludzkimi",
    question: "Marek ocenił projekt Ady — debiutantki w finale ogólnopolskiego konkursu — wyjątkowo surowo, mimo że był on obiektywnie dobry jak na pierwszą próbę. Jaki błąd popełnił Marek?",
    options: [
      { key: "a", text: "błąd surowości", correct: true },
      { key: "b", text: "błąd atrybucji", correct: false },
      { key: "c", text: "efekt pierwszego wrażenia", correct: false },
    ],
    uzasadnienie: "Marek systematycznie zaniżył ocenę, nie uwzględniając kontekstu (debiut, pierwsza próba) — to typowy błąd surowości, polegający na nieproporcjonalnie krytycznym ocenianiu, niezależnie od faktycznej jakości pracy.",
    wartoWiedziec: "Błąd surowości ma swoje lustrzane odbicie — błąd łagodności, czyli systematyczne zawyżanie ocen. Oba zniekształcają rzeczywisty obraz kompetencji ocenianych osób i utrudniają sprawiedliwe porównywanie pracowników między sobą, np. przy podejmowaniu decyzji o awansach czy premiach.",
  },

  // LEKCJA 5 - Motywacja i przywództwo
  {
    id: 87, lekcja: 5, lekcjaName: "Motywacja i przywództwo",
    question: "Według teorii sprawiedliwości Johna Adamsa:",
    options: [
      { key: "a", text: "każdy pracownik powinien dostawać premię w takiej samej wysokości", correct: false },
      { key: "b", text: "pracownicy porównują wynagrodzenia, które otrzymali za swoją pracę, do wynagrodzeń otrzymanych przez kolegów z pracy", correct: true },
      { key: "c", text: "każdy powinien skupić się na swojej pracy i nie porównywać się do innych", correct: false },
    ],
    uzasadnienie: "Według teorii sprawiedliwości ludzie nieustannie oceniają, czy otrzymana nagroda jest sprawiedliwa w stosunku do poniesionych nakładów (czasu, wysiłku, doświadczenia), porównując się przy tym z innymi osobami, np. kolegami z pracy wykonującymi podobne zadania.",
    wartoWiedziec: "Jeśli pracownik dojdzie do wniosku, że został potraktowany niesprawiedliwie (np. otrzymał niższą premię niż kolega za tę samą pracę), jego motywacja gwałtownie spada — może ograniczyć swój wkład, zażądać podwyżki, a nawet zmienić osobę, z którą się porównuje. Warto pamiętać, że poczucie niesprawiedliwości kumulujące się przez dłuższy czas potrafi w pewnym momencie gwałtownie „wybuchnąć”.",
  },
  {
    id: 88, lekcja: 5, lekcjaName: "Motywacja i przywództwo",
    question: "Według teorii wzmocnienia Burrhusa Skinnera:",
    options: [
      { key: "a", text: "pracownicy nie będą się spóźniać, jeśli będą wiedzieć, że za każde spóźnienie stracą część premii, a za brak spóźnień otrzymają premię o 20% wyższą", correct: true },
      { key: "b", text: "pracownicy nie będą się spóźniać, jeśli wytłumaczymy im wagę ich pracy dla społeczeństwa", correct: false },
      { key: "c", text: "pracownicy nie będą się spóźniać, jeśli szef będzie dawał dobry przykład i sam zawsze przychodził na czas", correct: false },
    ],
    uzasadnienie: "Skinner, jeden z najważniejszych przedstawicieli behawioryzmu, uważał, że zachowania ludzi (podobnie jak zwierząt) są kształtowane przez bodźce zewnętrzne — nagrody i kary — a nie przez wewnętrzne przekonania czy cudzy przykład. Jasno określony, konsekwentnie stosowany system premii i kar (np. za spóźnienia) skutecznie wzmacnia pożądane zachowania.",
    wartoWiedziec: "Teoria wzmocnienia była krytykowana za ignorowanie czynników wewnętrznych, takich jak poczucie decyzyjności — badania pokazały, że pracownicy pracują wydajniej, gdy czują, że sami sprawują kontrolę nad sytuacją, a nie działają wyłącznie ze strachu przed karą narzuconą z zewnątrz.",
  },
  {
    id: 89, lekcja: 5, lekcjaName: "Motywacja i przywództwo",
    question: "Dyrektor zakładu obuwniczego obawia się, że podwyżka płac o postulowane 20% mogłaby realnie zagrozić płynności finansowej firmy. Której funkcji płacy dotyczy ten przykład?",
    options: [
      { key: "a", text: "kosztowej", correct: true },
      { key: "b", text: "społecznej", correct: false },
      { key: "c", text: "dochodowej", correct: false },
    ],
    uzasadnienie: "Funkcja kosztowa płacy dotyczy tego, że wynagrodzenia stanowią dla firmy realny koszt prowadzenia działalności — jeśli będą zbyt wysokie w stosunku do możliwości finansowych przedsiębiorstwa, mogą zagrozić jego płynności, a w skrajnym przypadku doprowadzić nawet do bankructwa.",
    wartoWiedziec: "Płaca pełni w sumie cztery funkcje: dochodową (zaspokojenie potrzeb materialnych pracownika), motywacyjną (zachęta do lepszej pracy), kosztową (wydatek dla firmy) oraz społeczną (wyznacznik prestiżu i pozycji). Dobry system wynagrodzeń musi równoważyć wszystkie cztery, a nie skupiać się tylko na jednej z nich.",
  },
  {
    id: 90, lekcja: 5, lekcjaName: "Motywacja i przywództwo",
    question: "Stefan, właściciel firmy, uważa, że najlepsi spośród przyjętych na staż studentów sami sobie poradzą i nie widzi sensu w przeprowadzaniu z nimi rozmów poznawczych na temat ich potrzeb i potencjału. Jakie podejście do rozwoju kariery zaprezentował Stefan?",
    options: [
      { key: "a", text: "niewidzialna ręka", correct: true },
      { key: "b", text: "poszukiwanie pereł", correct: false },
      { key: "c", text: "planowanie karier", correct: false },
    ],
    uzasadnienie: "Podejście „niewidzialna ręka” zakłada, że firma nie musi ingerować w rozwój kariery pracowników, bo najzdolniejsi i tak sami sobie poradzą — Stefan właśnie to zakłada, rezygnując ze świadomego rozpoznawania potencjału stażystów.",
    wartoWiedziec: "Przeciwieństwem jest podejście „poszukiwanie pereł”, zakładające, że w firmie mogą kryć się ukryte talenty warte celowego odnalezienia i rozwinięcia, oraz „planowanie karier”, gdzie firma świadomie projektuje ścieżkę rozwoju każdego pracownika, łącząc jego indywidualne potrzeby z możliwościami organizacji.",
  },
  {
    id: 91, lekcja: 5, lekcjaName: "Motywacja i przywództwo",
    question: "Jaka nagroda byłaby najlepszą motywacją do dalszej wytężonej pracy dla znakomicie ocenionej podczas oceny okresowej pracowniczki działu R&D, która zawsze uwielbiała się uczyć i zdobywać nową, wartościową wiedzę?",
    options: [
      { key: "a", text: "wyjazd integracyjny do 5-gwiazdkowego hotelu, pełen degustacji i zabaw", correct: false },
      { key: "b", text: "wyjazd szkoleniowy do prestiżowego centrum naukowego na zaawansowany kurs w jej dziedzinie", correct: true },
      { key: "c", text: "awans na stanowisko kierownicze dużego zespołu", correct: false },
    ],
    uzasadnienie: "Skuteczna nagroda musi być dopasowana do indywidualnych wartości i potrzeb konkretnego pracownika, a nie uniwersalna dla wszystkich. Skoro dana osoba zawsze najbardziej ceniła sobie zdobywanie wiedzy, możliwość udziału w zaawansowanym szkoleniu w jej dziedzinie będzie dla niej najlepszą, najbardziej motywującą nagrodą — znacznie skuteczniejszą niż standardowy wyjazd integracyjny czy awans na stanowisko kierownicze, które wiąże się z zupełnie innym zestawem obowiązków (zarządzanie ludźmi zamiast badań).",
    wartoWiedziec: "To dobra ilustracja zasady indywidualizacji nagród i kar — jednego z warunków skuteczności systemu motywacyjnego. Nagroda, która nie odpowiada faktycznym wartościom i priorytetom danej osoby, może okazać się kompletnie nieskuteczna, nawet jeśli obiektywnie jest atrakcyjna dla większości ludzi.",
  },
  {
    id: 92, lekcja: 5, lekcjaName: "Motywacja i przywództwo",
    question: "Pracownica ceniona za ogromną wiedzę finansową (studia, zdany egzamin na biegłego rewidenta, wieloletnie doświadczenie), z którą chętnie konsultuje się nawet sam prezes firmy, dysponuje władzą:",
    options: [
      { key: "a", text: "ekspercką", correct: true },
      { key: "b", text: "odniesienia", correct: false },
      { key: "c", text: "formalną (wynikającą ze stanowiska)", correct: false },
    ],
    uzasadnienie: "Władza ekspercka opiera się na posiadaniu specjalistycznej, unikatowej i ważnej z punktu widzenia organizacji wiedzy — dokładnie tak jak w przypadku pracownicy, której kompetencje finansowe (potwierdzone studiami i egzaminem na biegłego rewidenta) sprawiają, że nawet prezes firmy chętnie korzysta z jej rad, mimo że nie zajmuje ona stanowiska kierowniczego.",
    wartoWiedziec: "Taką władzą może dysponować też np. znakomity szef kuchni w restauracji czy doświadczony informatyk sprawujący pieczę nad systemami firmy — w każdym przypadku źródłem wpływu nie jest formalne stanowisko ani charyzma, lecz unikatowa, trudna do zastąpienia wiedza.",
  },
  {
    id: 93, lekcja: 5, lekcjaName: "Motywacja i przywództwo",
    question: "Według założeń ewolucyjnego modelu przywództwa Hersey'a i Blancharda:",
    options: [
      { key: "a", text: "styl lidera powinien być niezmienny", correct: false },
      { key: "b", text: "lider powinien zachowywać się jednakowo wobec wszystkich pracowników", correct: false },
      { key: "c", text: "styl lidera powinien się zmieniać w zależności od stopnia dojrzałości pracownika", correct: true },
    ],
    uzasadnienie: "Model ewolucyjny Hersey'a i Blancharda opiera się na założeniu, że relacja między przywódcą a podwładnym powinna rozwijać się w miarę nabierania doświadczenia przez podwładnego — na wzór relacji rodzic-dziecko. Lider powinien więc stopniowo zmieniać swój styl: od dyrektywnego na początku (gdy podwładni czują się niepewnie) do dawania dużej swobody, gdy są już bardzo samodzielni.",
    wartoWiedziec: "To założenie stoi w bezpośredniej sprzeczności z modelem Fiedlera, który twierdzi, że indywidualny styl przywództwa danego lidera jest cechą stałą i niezmienną. Wadą modelu Hersey'a i Blancharda jest trudność w obiektywnym ustaleniu, na jakim dokładnie poziomie dojrzałości znajduje się dany podwładny.",
  },
  {
    id: 94, lekcja: 5, lekcjaName: "Motywacja i przywództwo",
    question: "Mikołaj, wypełniając test NLW (Najmniej Lubianego Współpracownika), przyznał zaskakująco wysokie punkty koledze, którego jednocześnie najmniej lubił spośród całego zespołu. Jaki jest styl przywództwa Mikołaja według teorii Fiedlera?",
    options: [
      { key: "a", text: "zorientowany na ludzi (demokratyczny)", correct: true },
      { key: "b", text: "zorientowany na zadania (autokratyczny)", correct: false },
      { key: "c", text: "zmienny, w zależności od sytuacji", correct: false },
    ],
    uzasadnienie: "W kwestionariuszu NLW, im więcej punktów lider przyzna osobie, której najmniej lubi, tym bardziej jest to znak, że nawet w ocenie kogoś nielubianego stara się dostrzec jego pozytywne cechy — co świadczy o stylu zorientowanym na relacje (demokratycznym). Niski wynik oznaczałby styl zorientowany na zadania.",
    wartoWiedziec: "Zgodnie z modelem Fiedlera styl lidera jest cechą stałą, zdiagnozowaną raz za pomocą testu NLW — nie zmienia się w zależności od sytuacji (to odróżnia model Fiedlera od modelu ewolucyjnego Hersey'a i Blancharda czy teorii ścieżki do celu, gdzie lider może dostosowywać swój styl).",
  },
  {
    id: 95, lekcja: 5, lekcjaName: "Motywacja i przywództwo",
    question: "Które z następujących zachowań jest najbardziej typowe dla przywódcy transformacyjnego?",
    options: [
      { key: "a", text: "przeprowadzenie rozmów z wszystkimi pracownikami działu w celu rozpoznania ich indywidualnych potrzeb", correct: false },
      { key: "b", text: "skonstruowanie precyzyjnego systemu premii i kar", correct: false },
      { key: "c", text: "wbiegnięcie w garniturze, z flagą firmy, do morza w celu pokazania podwładnym determinacji i wizji ekspansji firmy", correct: true },
    ],
    uzasadnienie: "Przywódcy transformacyjni to z reguły charyzmatyczni wizjonerzy, którzy prezentują niestandardowe, spektakularne zachowania, by przekonać podwładnych do swojej wizji wielkiej zmiany — dokładnie jak w tym symbolicznym, teatralnym geście. Rozpoznawanie indywidualnych potrzeb i konstruowanie systemów premiowych to z kolei typowe narzędzia liderów transakcyjnych, opierających zarządzanie na ciągłej wymianie nagród i kar.",
    wartoWiedziec: "Przywódcy transformacyjni bywają kontrowersyjni i nie zawsze postrzegani pozytywnie — cechuje ich dążenie do realizacji wizji wielkiej zmiany organizacyjnej. Przykłady takich postaci ze świata biznesu to Steve Jobs, a z historii — postacie budzące skrajne emocje, jak Napoleon czy Mahatma Gandhi, których łączyła zdolność do budzenia silnej wewnętrznej motywacji u swoich zwolenników.",
  },
  {
    id: 96, lekcja: 5, lekcjaName: "Motywacja i przywództwo",
    question: "W której z opisanych poniżej sytuacji obecność przywódcy nie byłaby raczej konieczna?",
    options: [
      { key: "a", text: "grupa trzech doświadczonych stolarzy, pracujących w firmie od dziesięciu lat, ma zamontować standardową altankę dla znanego, wieloletniego klienta", correct: true },
      { key: "b", text: "firma ma do wykonania nowatorski projekt, który nie jest jeszcze do końca doprecyzowany z klientem", correct: false },
      { key: "c", text: "w czteroosobowej grupie narasta konflikt o podział zadań projektowych", correct: false },
    ],
    uzasadnienie: "Koncepcja substytutów przywództwa mówi, że obecność lidera nie zawsze jest konieczna — jej potrzebę redukują m.in. wysokie doświadczenie pracowników oraz jasno sprecyzowane, rutynowe zadania. Trzej doświadczeni stolarze montujący standardową, dobrze im znaną altankę dla stałego klienta dokładnie spełniają te warunki, więc nie potrzebują bieżącego nadzoru przywódcy.",
    wartoWiedziec: "W przeciwieństwie do tego, nowatorski, niedoprecyzowany projekt oraz narastający konflikt w zespole to sytuacje, w których obecność przywódcy jest wręcz bardzo pożądana — brak jasnych wytycznych lub nierozwiązany konflikt to warunki, w których grupa bez lidera łatwo się gubi lub paraliżuje samą siebie.",
  },

  // LEKCJA 6 - Różnice międzykulturowe
  {
    id: 97, lekcja: 6, lekcjaName: "Różnice międzykulturowe",
    question: "W społeczeństwach o wysokim wskaźniku męskości (MAS) kupuje się więcej:",
    options: [
      { key: "a", text: "luksusowej biżuterii", correct: true },
      { key: "b", text: "kawy", correct: false },
      { key: "c", text: "samochodów rodzinnych", correct: false },
    ],
    uzasadnienie: "Kultury o wysokim wskaźniku MAS (męskość) cenią asertywność, rywalizację, osiąganie sukcesu oraz dobra luksusowe jako symbol statusu i wygranej rywalizacji — stąd większy popyt na przedmioty takie jak luksusowa biżuteria, będące wizualnym dowodem sukcesu materialnego.",
    wartoWiedziec: "Krajami o wysokim MAS są np. Japonia i Włochy, a przeciwny biegun (kultury „kobiece”, ceniące współpracę, dobre relacje i równowagę praca-życie) reprezentują np. Szwecja i Holandia. Warto nie mylić tego wymiaru z rzeczywistą płcią biologiczną — dotyczy on wartości cenionych przez całe społeczeństwo, niezależnie od płci jego członków.",
  },
  {
    id: 98, lekcja: 6, lekcjaName: "Różnice międzykulturowe",
    question: "Które z poniższych działań jest typowe dla kultury kolektywistycznej (niski wskaźnik IDV)?",
    options: [
      { key: "a", text: "kontynuowanie przez syna tego samego zawodu, co ojciec i dziadek, zgodnie z oczekiwaniami rodziny", correct: true },
      { key: "b", text: "przerwa w prestiżowych studiach na wymarzoną, samodzielną podróż rowerem dookoła świata", correct: false },
      { key: "c", text: "zwolnienie z pracy niekompetentnego krewnego, mimo rodzinnych koneksji", correct: false },
    ],
    uzasadnienie: "Kultura kolektywistyczna stawia lojalność wobec grupy (rodziny, wspólnoty) ponad indywidualne cele i wybory jednostki. Kontynuowanie rodzinnego zawodu z pokolenia na pokolenie, zgodnie z oczekiwaniami rodziny, jest klasycznym przejawem takiej postawy — jednostka podporządkowuje swoje osobiste aspiracje tradycji i oczekiwaniom grupy.",
    wartoWiedziec: "Pozostałe dwa przykłady reprezentują raczej indywidualizm: samodzielna, nieplanowana podróż wbrew utartej ścieżce (autonomia jednostki) oraz zwolnienie niekompetentnego krewnego (priorytet obiektywnych kryteriów nad lojalnością rodzinną) — w kulturach kolektywistycznych zatrudnianie krewnych jest zwykle traktowane jako wyraz zaufania, a nie nepotyzmu, i trudniej byłoby ich zwolnić.",
  },
  {
    id: 99, lekcja: 6, lekcjaName: "Różnice międzykulturowe",
    question: "Odpowiedź „wszystko dobrze!”, wypowiedziana z szerokim uśmiechem na pytanie „co słychać?”, nawet gdy dzień był trudny, to znak kraju o:",
    options: [
      { key: "a", text: "niskim wskaźniku IVR (powściągliwość)", correct: false },
      { key: "b", text: "wysokim wskaźniku IVR (tolerancja/przyzwolenie)", correct: true },
      { key: "c", text: "wysokim wskaźniku UAI (unikanie niepewności)", correct: false },
    ],
    uzasadnienie: "Wysoki wskaźnik IVR (indulgence, tolerancja/przyzwolenie) oznacza swobodne, otwarte wyrażanie radości, zabawy i pozytywnych emocji jako coś naturalnego i społecznie akceptowanego — łatwy, entuzjastyczny uśmiech i pogodna odpowiedź na pytanie o samopoczucie dobrze to ilustrują.",
    wartoWiedziec: "Przeciwieństwem jest niski IVR (powściągliwość), typowy np. dla niektórych krajów azjatyckich, gdzie normy społeczne silniej tłumią spontaniczne okazywanie emocji i dążenie do przyjemności, a odpowiedzi na pytania o samopoczucie bywają bardziej powściągliwe i stonowane.",
  },
  {
    id: 100, lekcja: 6, lekcjaName: "Różnice międzykulturowe",
    question: "Który wybór kariery jest typowy dla kultury o wysokim wskaźniku unikania niepewności (UAI)?",
    options: [
      { key: "a", text: "założenie własnego zespołu muzycznego za pieniądze zarobione podczas pracy sezonowej", correct: false },
      { key: "b", text: "niezmienianie stabilnej pracy w urzędzie na rzecz niepewnej, własnej działalności gospodarczej", correct: true },
      { key: "c", text: "aplikowanie do firmy zaraz po jej przejęciu przez nowego, kontrowersyjnego właściciela", correct: false },
    ],
    uzasadnienie: "Wysoki wskaźnik UAI oznacza silny strach przed zmianami, niepewnością i ryzykiem oraz potrzebę stabilności — dokładnie to ilustruje wybór pozostania na pewnym, stabilnym etacie w urzędzie zamiast podjęcia ryzyka związanego z założeniem własnej firmy.",
    wartoWiedziec: "Kraje o wysokim UAI to m.in. Grecja i Polska, gdzie ceni się sztywne przepisy i stabilne zatrudnienie. Niskie UAI (np. Singapur, USA) wiąże się z większą akceptacją ryzyka jako naturalnej części życia zawodowego i mniejszą liczbą barier formalnych do podjęcia nowych, niepewnych przedsięwzięć.",
  },
  {
    id: 101, lekcja: 6, lekcjaName: "Różnice międzykulturowe",
    question: "Zdanie: „Nie można im ufać, oni zawsze pomogą przyjacielowi [nawet łamiąc zasady]” najprawdopodobniej wypowiedzą:",
    options: [
      { key: "a", text: "przedstawiciele kultury kolektywistycznej o indywidualistach", correct: false },
      { key: "b", text: "uniwersaliści o partykularystach", correct: true },
      { key: "c", text: "partykularyści o uniwersalistach", correct: false },
    ],
    uzasadnienie: "Uniwersaliści uważają, że reguły i umowy powinny obowiązywać zawsze, bez wyjątków i bez względu na relacje osobiste. Taka krytyka — zarzut, że komuś „nie można ufać”, bo bez wahania łamie zasady dla dobra przyjaciela — jest typowym stanowiskiem uniwersalistów wobec partykularystów, dla których to właśnie konkretne relacje i okoliczności decydują o zastosowaniu reguł.",
    wartoWiedziec: "Partykularyzm jest typowy np. dla Rosji, gdzie zachowanie i stosowanie zasad zależy od konkretnych okoliczności i relacji (w tym pomocy przyjaciołom), podczas gdy uniwersalizm charakteryzuje np. Szwajcarię, gdzie sztywne reguły i umowy obowiązują zawsze, niezależnie od sytuacji czy tego, kogo dotyczą.",
  },
  {
    id: 102, lekcja: 6, lekcjaName: "Różnice międzykulturowe",
    question: "W kulturze o statusie przypisanym (a nie osiąganym):",
    options: [
      { key: "a", text: "bardzo prawdopodobne jest, że szefem zostanie niemłody mężczyzna pochodzący z szanowanej w okolicy rodziny", correct: true },
      { key: "b", text: "szefem zostanie osoba, która ma za sobą najwyższą, wymierną efektywność sprzedaży", correct: false },
      { key: "c", text: "w pracy nie używa się żadnych tytułów niezwiązanych bezpośrednio z pełnioną funkcją", correct: false },
    ],
    uzasadnienie: "Status przypisany oznacza, że szacunek i pozycja społeczna wynikają z cech takich jak wiek, płeć, pochodzenie czy przynależność do określonej klasy społecznej, a nie z osobistych osiągnięć — stąd w takich kulturach starszy mężczyzna z szanowanej rodziny ma dużą szansę objąć stanowisko kierownicze niezależnie od jego rzeczywistych kompetencji zawodowych.",
    wartoWiedziec: "Przeciwieństwem jest status osiągany, typowy np. dla Norwegii, gdzie szacunek wynika z osobistego sukcesu, wykształcenia i realnych dokonań (jak w opcji o efektywności sprzedaży) — czyli z tego, co dana osoba faktycznie zrobiła, a nie kim jest z urodzenia.",
  },
  {
    id: 103, lekcja: 6, lekcjaName: "Różnice międzykulturowe",
    question: "„Kupimy ziemniaki od nielubianego Adama, bo jego oferta jest najlepsza cenowo” — takie podejście do biznesu jest typowe dla kultury:",
    options: [
      { key: "a", text: "kolektywistycznej", correct: false },
      { key: "b", text: "wycinkowej", correct: true },
      { key: "c", text: "całościowej", correct: false },
    ],
    uzasadnienie: "Kultura wycinkowa oddziela sferę biznesową od prywatnej — oferta jest oceniana czysto merytorycznie, na podstawie obiektywnych kryteriów (tu: ceny), niezależnie od osobistych sympatii czy antypatii wobec sprzedawcy.",
    wartoWiedziec: "W kulturze całościowej (np. w Chinach), gdzie sfery życia się przenikają, interesy robi się niemal wyłącznie z ludźmi, których się dobrze zna, lubi i sprawdziło prywatnie — sam fakt niechęci do Adama prawdopodobnie wykluczyłby go jako partnera biznesowego, niezależnie od atrakcyjności jego oferty cenowej.",
  },
  {
    id: 104, lekcja: 6, lekcjaName: "Różnice międzykulturowe",
    question: "Jan poczuł się urażony, gdy Wiktor przerwał mu w pół zdania, wyrażając entuzjastyczną, emocjonalną zgodę na jego propozycję. Jaki można wyciągnąć z tego wniosek?",
    options: [
      { key: "a", text: "Jan to przedstawiciel kultury o wyższej powściągliwości, a Wiktor — o wyższej emocjonalności", correct: true },
      { key: "b", text: "Jan to przedstawiciel kultury o wyższej emocjonalności, a Wiktor — o wyższej powściągliwości", correct: false },
      { key: "c", text: "Jan to kolektywista, a Wiktor indywidualista", correct: false },
    ],
    uzasadnienie: "Jan poczuł się urażony samym faktem przerwania mu w trakcie wypowiedzi — nawet w formie entuzjastycznej zgody — co wskazuje na kulturę o wyższej powściągliwości, ceniącą kontrolę emocji i dystans. Wiktor natomiast, spontanicznie i entuzjastycznie przerywający rozmówcy, reprezentuje kulturę o wyższej emocjonalności, w której bezpośrednie, żywiołowe wyrażanie uczuć jest naturalne i akceptowane.",
    wartoWiedziec: "Powściągliwość jest typowa np. dla Japonii, gdzie utrzymuje się surową kontrolę uczuć i dystans emocjonalny w kontaktach zawodowych, podczas gdy emocjonalność charakteryzuje np. Egipt, gdzie spontaniczne, silne wyrażanie emocji jest czymś naturalnym i oczekiwanym, a nie oznaką braku profesjonalizmu.",
  },
  {
    id: 105, lekcja: 6, lekcjaName: "Różnice międzykulturowe",
    question: "Które powiedzenie najlepiej pasuje do kultury wewnątrzsterownej?",
    options: [
      { key: "a", text: "„Każdy jest kowalem swego losu”", correct: true },
      { key: "b", text: "„Taka karma”", correct: false },
      { key: "c", text: "„Nasz los zapisany jest w gwiazdach”", correct: false },
    ],
    uzasadnienie: "Kultura wewnątrzsterowna opiera się na przekonaniu o pełnej kontroli jednostki nad własnym losem — powiedzenie „każdy jest kowalem swego losu” doskonale oddaje tę filozofię: to nasze własne decyzje i wysiłek, a nie zewnętrzne siły, kształtują naszą przyszłość.",
    wartoWiedziec: "Kultury wewnątrzsterowne (np. USA) cechuje przekonanie o pełnej kontroli nad własnym losem i skłonność do agresywnej walki konkurencyjnej, podczas gdy kultury zewnątrzsterowne (np. Chiny) akceptują wpływ otoczenia, losu czy sił wyższych na bieg wydarzeń i dążą raczej do harmonijnej współpracy z otoczeniem niż do jego kontrolowania.",
  },

  // LEKCJA 7 - Zarządzanie strategiczne
  {
    id: 106, lekcja: 7, lekcjaName: "Zarządzanie strategiczne",
    question: "Misja Google, według oficjalnej deklaracji firmy, brzmi:",
    options: [
      { key: "a", text: "uporządkowanie światowych zasobów informacji i uczynienie ich powszechnie dostępnymi i użytecznymi", correct: true },
      { key: "b", text: "umożliwienie osiągania więcej każdej osobie i organizacji na świecie", correct: false },
      { key: "c", text: "edukacja obywateli i przygotowanie ich do przewodzenia w społeczeństwie", correct: false },
    ],
    uzasadnienie: "Oficjalna misja Google to „zorganizowanie światowych zasobów informacji oraz uczynienie ich powszechnie dostępnymi i użytecznymi”. Dobra misja organizacji powinna być realistyczna, dopasowana do jej rzeczywistej działalności i motywująca dla pracowników — właśnie taka jest misja Google, ściśle powiązana z jej podstawowym biznesem wyszukiwania informacji.",
    wartoWiedziec: "Pozostałe dwie opcje to również prawdziwe misje znanych organizacji, tylko przypisane do niewłaściwych firm: „umożliwienie osiągania więcej każdej osobie i organizacji na świecie” to misja Microsoftu, a „edukacja obywateli” nawiązuje do misji Harvard College. To dobry przykład na to, że misja powinna być specyficzna — jasno odróżniająca daną organizację od innych, nawet działających w podobnej branży.",
  },
  {
    id: 107, lekcja: 7, lekcjaName: "Zarządzanie strategiczne",
    question: "Do zagrożeń w analizie SWOT uczelni o profilu informatycznym (np. PJATK) zaliczymy:",
    options: [
      { key: "a", text: "niż demograficzny", correct: true },
      { key: "b", text: "rosnącą popularność produktów wegańskich", correct: false },
      { key: "c", text: "brak parkingu dla studentów w pobliżu uczelni", correct: false },
    ],
    uzasadnienie: "Niż demograficzny to niekorzystny trend zachodzący w otoczeniu uczelni (mniejszy przyrost naturalny oznacza mniej potencjalnych kandydatów na studia w nadchodzących latach) — to klasyczne zagrożenie zewnętrzne w analizie SWOT, niezależne od działań samej uczelni.",
    wartoWiedziec: "Rosnąca popularność produktów wegańskich jest zupełnie niezwiązana z działalnością uczelni informatycznej, więc nie stanowi dla niej ani szansy, ani zagrożenia. Brak parkingu to z kolei słaba strona (czynnik wewnętrzny, zależny od samej uczelni), a nie zagrożenie zewnętrzne — łatwo pomylić te dwie kategorie SWOT, warto więc zawsze pytać: czy to coś, na co uczelnia ma bezpośredni wpływ, czy nie?",
  },
  {
    id: 108, lekcja: 7, lekcjaName: "Zarządzanie strategiczne",
    question: "Do której kategorii macierzy BCG koncern Amazon zaliczyłby swoją platformę streamingową Amazon Live, działającą na dynamicznie rosnącym, ale wciąż mocno rozdrobnionym rynku, na którym Amazon ma jeszcze niewielki udział?",
    options: [
      { key: "a", text: "znaki zapytania", correct: true },
      { key: "b", text: "gwiazdy", correct: false },
      { key: "c", text: "dojne krowy", correct: false },
    ],
    uzasadnienie: "Znak zapytania to kategoria BCG opisująca produkty z małym udziałem w szybko rosnącym rynku — dokładnie taką pozycję zajmuje Amazon Live: rynek streamingu rośnie dynamicznie, ale Amazon nie ma na nim jeszcze dominującej pozycji. Takie produkty wymagają dużych inwestycji, by ewentualnie przekształcić się w „gwiazdę”.",
    wartoWiedziec: "W tej samej analizie BCG dla Amazona tradycyjne e-booki (dojrzały rynek, dominująca pozycja) to „dojna krowa”, a rozwiązania cloud computing (SaaS), na dynamicznie rosnącym rynku z silną pozycją Amazona, to „gwiazda” — pokazuje to, że duża firma może jednocześnie mieć produkty we wszystkich czterech ćwiartkach macierzy BCG.",
  },
  {
    id: 109, lekcja: 7, lekcjaName: "Zarządzanie strategiczne",
    question: "W macierzy McKinseya (GE), ekskluzywne apartamenty na wynajem, będące liderem rynku w bardzo atrakcyjnym segmencie, powinny zostać zakwalifikowane do strategii:",
    options: [
      { key: "a", text: "inwestuj/rozwijaj", correct: true },
      { key: "b", text: "utrzymuj/rozwijaj selektywnie", correct: false },
      { key: "c", text: "ograniczaj/wycofuj", correct: false },
    ],
    uzasadnienie: "Macierz McKinseya klasyfikuje jednostki biznesowe na podstawie dwóch wieloczynnikowych wymiarów: atrakcyjności branży oraz siły danej jednostki na rynku. Segment ekskluzywnych apartamentów, będący jednocześnie bardzo atrakcyjny i mający silną, wiodącą pozycję rynkową, spełnia oba warunki najwyższej kategorii — należy więc w niego dalej inwestować i go rozwijać.",
    wartoWiedziec: "Macierz McKinseya (stworzona przez firmę doradczą McKinsey we współpracy z General Electric) jest rozwinięciem prostszej macierzy BCG — zamiast dwóch pojedynczych miar (tempo wzrostu rynku i względny udział w rynku) stosuje bardziej złożone, wieloczynnikowe wskaźniki, co pozwala na bardziej precyzyjną analizę portfela produktów firmy.",
  },
  {
    id: 110, lekcja: 7, lekcjaName: "Zarządzanie strategiczne",
    question: "Co można uznać za wyróżniającą się kompetencję (core competency) firmy McDonald's, leżącą u podstaw jej globalnego sukcesu?",
    options: [
      { key: "a", text: "oferowanie wyjątkowo zdrowych posiłków o niskiej zawartości tłuszczu, soli i cukru", correct: false },
      { key: "b", text: "zdolność do skutecznego standaryzowania i skalowania operacji przy jednoczesnym dostosowywaniu się do lokalnych warunków na całym świecie", correct: true },
      { key: "c", text: "tworzenie wyjątkowo atrakcyjnych, wysoko opłacanych miejsc pracy", correct: false },
    ],
    uzasadnienie: "Wyróżniająca się kompetencja to unikatowa umiejętność organizacyjna, trudna do skopiowania przez konkurencję, leżąca u podstaw przewagi konkurencyjnej firmy. McDonald's zawdzięcza swój globalny sukces właśnie zdolności do zachowania spójnych standardów jakości i procesów operacyjnych przy jednoczesnym elastycznym dostosowywaniu menu i podejścia do lokalnych rynków (tzw. „myśl globalnie, działaj lokalnie”).",
    wartoWiedziec: "Zdrowa żywność i wysokie wynagrodzenia nie są tradycyjnie kojarzone z modelem biznesowym McDonald's — to raczej obszary, w których firma bywa krytykowana. Wyróżniająca się kompetencja to zawsze coś, co firma robi wyjątkowo dobrze na tle konkurencji i co realnie napędza jej sukces rynkowy, a nie ogólnie pożądana cecha.",
  },

  // LEKCJA 8 - Podstawy ekonomii
  {
    id: 111, lekcja: 8, lekcjaName: "Podstawy ekonomii",
    question: "Dobra wolne to inaczej:",
    options: [
      { key: "a", text: "dobra dostępne bez ograniczeń, do których każdy ma bezpłatny dostęp (np. powietrze)", correct: true },
      { key: "b", text: "dobra niezatrzymane przez celników na granicy", correct: false },
      { key: "c", text: "dobra wytwarzane przez człowieka w celu zaspokojenia potrzeb", correct: false },
    ],
    uzasadnienie: "Dobra wolne to dobra naturalne, występujące w praktycznie nieograniczonej ilości, do których każdy ma darmowy, nieograniczony dostęp — klasycznym przykładem jest powietrze czy woda w naturalnym środowisku. Przeciwieństwem są dobra ekonomiczne, czyli dobra rzadkie, zwykle wytworzone przez człowieka, do których dostęp jest ograniczony i najczęściej płatny.",
    wartoWiedziec: "Rozróżnienie to jest fundamentalne dla całej ekonomii, która zajmuje się właśnie zarządzaniem dobrami rzadkimi (ekonomicznymi) w warunkach ograniczonych zasobów wobec nieograniczonych potrzeb ludzkich. Dobra wolne, ze względu na swoją powszechną dostępność, nie podlegają typowej analizie rynkowej podaży i popytu.",
  },
  {
    id: 112, lekcja: 8, lekcjaName: "Podstawy ekonomii",
    question: "Przy dokonywaniu racjonalnego wyboru ekonomicznego powinniśmy brać pod uwagę:",
    options: [
      { key: "a", text: "tylko nasze bieżące potrzeby, bez uwzględniania dostępnych środków", correct: false },
      { key: "b", text: "hierarchię potrzeb oraz dostępność posiadanych środków", correct: true },
      { key: "c", text: "wyłącznie subiektywną atrakcyjność rozważanego dobra", correct: false },
    ],
    uzasadnienie: "Racjonalny wybór ekonomiczny to decyzja oparta na hierarchii potrzeb (co jest dla nas ważniejsze) oraz na dostępności środków (ile faktycznie możemy sobie pozwolić wydać), dążąca do maksymalizacji rezultatu przy minimalizacji nakładów, z uwzględnieniem kosztu alternatywnego podjętej decyzji.",
    wartoWiedziec: "W praktyce ludzie często dokonują wyborów nieracjonalnych, kierując się emocjami, chwilowym impulsem czy właśnie samą subiektywną atrakcyjnością dobra, bez realnej oceny, czy dana potrzeba jest priorytetowa i czy stać nas na jej zaspokojenie — ekonomia behawioralna bada właśnie takie odstępstwa od modelu racjonalnego konsumenta.",
  },
  {
    id: 113, lekcja: 8, lekcjaName: "Podstawy ekonomii",
    question: "Pojęcie ceteris paribus, często stosowane w modelach ekonomicznych, oznacza:",
    options: [
      { key: "a", text: "wszystko inne bez zmian", correct: true },
      { key: "b", text: "przez ciernie do gwiazd", correct: false },
      { key: "c", text: "jeśli chcesz pokoju, szykuj się do wojny", correct: false },
    ],
    uzasadnienie: "Ceteris paribus to łacińskie założenie modelowe oznaczające „wszystko inne bez zmian” — pozwala ono badać zależność między dwoma wybranymi czynnikami (np. ceną a popytem) w izolacji od wpływu wszystkich pozostałych zmiennych rynkowych, które w rzeczywistości też mogłyby się zmieniać.",
    wartoWiedziec: "Bez założenia ceteris paribus analiza ekonomiczna byłaby znacznie trudniejsza — w prawdziwym świecie wiele czynników zmienia się jednocześnie (np. cena, dochody konsumentów, ceny dóbr substytucyjnych), więc izolowanie wpływu jednej zmiennej to podstawowe narzędzie upraszczające budowę modeli ekonomicznych.",
  },
  {
    id: 114, lekcja: 8, lekcjaName: "Podstawy ekonomii",
    question: "Struktura rynku, w której dane towary oferuje kilku dużych sprzedawców (np. rynek telefonii komórkowej), to:",
    options: [
      { key: "a", text: "konkurencja monopolistyczna", correct: false },
      { key: "b", text: "konkurencja doskonała", correct: false },
      { key: "c", text: "oligopol", correct: true },
    ],
    uzasadnienie: "Oligopol to struktura rynkowa zdominowana przez kilku dużych producentów/sprzedawców, którzy mają na tyle duży udział w rynku, że ich decyzje (np. cenowe) wzajemnie na siebie wpływają — typowym przykładem jest rynek telefonii komórkowej, gdzie działa zwykle tylko kilku znaczących operatorów.",
    wartoWiedziec: "To odróżnia oligopol od konkurencji doskonałej (bardzo wielu sprzedawców identycznego produktu, żaden nie wpływa samodzielnie na cenę rynkową) oraz od konkurencji monopolistycznej (dość duża liczba sprzedawców oferujących podobne, ale zróżnicowane marką lub cechami produkty).",
  },
  {
    id: 115, lekcja: 8, lekcjaName: "Podstawy ekonomii",
    question: "Obrazy pewnego malarza zyskały na popularności (wzrósł na nie popyt) po tym, jak wzrosła ich i tak już bardzo wysoka cena. Mamy do czynienia z:",
    options: [
      { key: "a", text: "paradoksem Giffena", correct: false },
      { key: "b", text: "paradoksem Veblena", correct: true },
      { key: "c", text: "standardową, odwrotną relacją między ceną a popytem", correct: false },
    ],
    uzasadnienie: "Paradoks Veblena dotyczy dóbr luksusowych (tzw. dóbr Veblena), których cechą wyróżniającą jest wysoka cena jako symbol prestiżu i statusu majątkowego — im wyższa cena, tym silniejszy efekt demonstracji zamożności, co paradoksalnie zwiększa, a nie zmniejsza popyt. Dzieła sztuki są klasycznym przykładem takich dóbr.",
    wartoWiedziec: "Nie należy mylić paradoksu Veblena z paradoksem Giffena, który dotyczy zupełnie odwrotnej sytuacji — dóbr pierwszej potrzeby (jak chleb) kupowanych przez najuboższych konsumentów, u których wzrost ceny paradoksalnie też zwiększa popyt, ale z zupełnie innego powodu: braku środków na droższe substytuty, a nie chęci demonstrowania statusu.",
  },
  {
    id: 116, lekcja: 8, lekcjaName: "Podstawy ekonomii",
    question: "Cena śliwek wzrosła o 12%, a w reakcji na to popyt na nie spadł o 10%. Popyt na śliwki jest:",
    options: [
      { key: "a", text: "elastyczny", correct: false },
      { key: "b", text: "nieelastyczny", correct: true },
      { key: "c", text: "doskonale elastyczny", correct: false },
    ],
    uzasadnienie: "Elastyczność cenowa popytu to stosunek procentowej zmiany popytu do procentowej zmiany ceny: 10% / 12% ≈ 0,83, czyli wartość mniejsza niż 1. Oznacza to, że popyt reaguje na zmianę ceny słabiej niż proporcjonalnie — jest więc nieelastyczny.",
    wartoWiedziec: "Gdy popyt jest nieelastyczny (Edp<1), podwyżka ceny zazwyczaj zwiększa łączny utarg sprzedawcy, bo procentowy spadek liczby sprzedanych sztuk jest mniejszy niż procentowy wzrost ceny jednostkowej — to przeciwna sytuacja niż w przypadku popytu elastycznego (Edp>1), gdzie podwyżka ceny obniża utarg.",
  },
  {
    id: 117, lekcja: 8, lekcjaName: "Podstawy ekonomii",
    question: "Elastyczność cenowa popytu (Edp) pewnego dobra X wynosi 0. Oznacza to, że:",
    options: [
      { key: "a", text: "jeśli zmieni się cena dobra X, popyt na nie pozostanie dokładnie taki sam", correct: true },
      { key: "b", text: "jeśli zmieni się cena dobra X, popyt na nie zmieni się w dokładnie tej samej proporcji", correct: false },
      { key: "c", text: "cena dobra X jest stała i nie może się zmienić", correct: false },
    ],
    uzasadnienie: "Popyt doskonale nieelastyczny (sztywny), czyli Edp=0, oznacza, że wielkość popytu w ogóle nie reaguje na zmiany ceny — konsumenci kupią dokładnie tę samą ilość danego dobra niezależnie od tego, ile ono kosztuje. Klasycznym przykładem jest jedyny na rynku lek ratujący życie, na który popyt pozostaje stały bez względu na cenę.",
    wartoWiedziec: "To skrajny przeciwny biegun w stosunku do popytu doskonale elastycznego (Edp→∞), gdzie nawet minimalna podwyżka ceny całkowicie zeruje sprzedaż — typowego dla warunków konkurencji doskonałej, gdzie każdy sprzedawca oferuje identyczny produkt i nie ma żadnej swobody cenowej.",
  },
  {
    id: 118, lekcja: 8, lekcjaName: "Podstawy ekonomii",
    question: "Elastyczność mieszana (krzyżowa) popytu dwóch dóbr A i B jest dodatnia (Edx(py)>0). Oznacza to, że dobra A i B są:",
    options: [
      { key: "a", text: "niezależne jedno od drugiego", correct: false },
      { key: "b", text: "dobrami komplementarnymi", correct: false },
      { key: "c", text: "substytutami", correct: true },
    ],
    uzasadnienie: "Dodatnia elastyczność mieszana popytu oznacza, że wzrost ceny jednego dobra powoduje wzrost popytu na drugie — a to charakteryzuje dobra substytucyjne (zamienne), jak masło i margaryna: gdy masło drożeje, konsumenci częściej sięgają po tańszą margarynę.",
    wartoWiedziec: "Sytuacja odwrotna — ujemna elastyczność mieszana — charakteryzuje dobra komplementarne (uzupełniające się), jak kawa i śmietanka, gdzie wzrost ceny jednego dobra obniża popyt na drugie, bo konsumuje się je zwykle razem.",
  },
];
