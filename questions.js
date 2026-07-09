// Baza pytań - Wprowadzenie do zarządzania (WDZ) - 64 pytania z 8 lekcji.

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
  },
  {
    id: 2, lekcja: 1, lekcjaName: "Podstawy zarządzania",
    question: "Koszt alternatywny podjęcia studiów stacjonarnych w PJATK to:",
    options: [
      { key: "a", text: "niepodjęcie w tym samym czasie studiów stacjonarnych na Politechnice Warszawskiej", correct: true },
      { key: "b", text: "koszt jedzenia spożytego w czasie studiów w PJATK", correct: false },
      { key: "c", text: "rezygnacja z kupna batonika Mars", correct: false },
    ],
  },
  {
    id: 3, lekcja: 1, lekcjaName: "Podstawy zarządzania",
    question: "Zasada, która mówi, że po sprzedaży produkcji przedsiębiorstwo powinno otrzymać zwrot swoich nakładów wraz z nadwyżką to:",
    options: [
      { key: "a", text: "zasada rachunku ekonomicznego", correct: false },
      { key: "b", text: "zasada przedsiębiorczości", correct: false },
      { key: "c", text: "zasada rentowności", correct: true },
    ],
  },
  {
    id: 4, lekcja: 1, lekcjaName: "Podstawy zarządzania",
    question: "Przykładem zastosowania zasady gospodarności w życiu może być:",
    options: [
      { key: "a", text: "kupno prezentów na Gwiazdkę 24 XII rano, w sklepach na Nowym Świecie w Warszawie", correct: false },
      { key: "b", text: "kupno prezentów na Gwiazdkę podczas sierpniowych wyprzedaży", correct: true },
      { key: "c", text: "urządzenie przyjęcia świątecznego dla rodziny w modnej restauracji sushi", correct: false },
    ],
  },
  {
    id: 5, lekcja: 1, lekcjaName: "Podstawy zarządzania",
    question: "(Z analizy przypadku) Jakie role według podziału Mintzberga pełnił Karol Miodownik (kierownik cukierni), gdy m.in. sprowadził domowy ekspres, wysłał pracownika do innej filii, negocjował umowę z klubem fitness i udzielił wywiadu?",
    options: [
      { key: "a", text: "przeciwdziałający zakłóceniom, dysponent zasobów, przywódca, przedsiębiorca, obserwator (monitor, radar), negocjator, rzecznik", correct: true },
      { key: "b", text: "przeciwdziałający zakłóceniom, przywódca, przedsiębiorca, obserwator (monitor, radar), negocjator", correct: false },
      { key: "c", text: "przeciwdziałający zakłóceniom, dysponent zasobów, przywódca, przedsiębiorca, rzecznik", correct: false },
    ],
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
  },
  {
    id: 7, lekcja: 2, lekcjaName: "Struktura organizacyjna",
    question: "Biało-czerwone logo uczelni oraz firmowe ubrania pracowników to:",
    options: [
      { key: "a", text: "artefakty behawioralne", correct: false },
      { key: "b", text: "artefakty językowe", correct: false },
      { key: "c", text: "artefakty fizyczne", correct: true },
    ],
  },
  {
    id: 8, lekcja: 2, lekcjaName: "Struktura organizacyjna",
    question: "Do zalet specjalizacji stanowisk pracy zaliczamy:",
    options: [
      { key: "a", text: "znużenie pracowników monotonią działań", correct: false },
      { key: "b", text: "szybkie przeszkolenie nowych pracowników do pracy", correct: true },
      { key: "c", text: "wąskie spojrzenie na organizację i brak wizji całości", correct: false },
    ],
  },
  {
    id: 9, lekcja: 2, lekcjaName: "Struktura organizacyjna",
    question: "Im wyższe są kwalifikacje podwładnych oraz im wyższy jest stopień formalizacji procedur w firmie, tym:",
    options: [
      { key: "a", text: "węższa powinna być rozpiętość kierowania", correct: false },
      { key: "b", text: "szersza może być rozpiętość kierowania", correct: true },
      { key: "c", text: "silniejsza musi być centralizacja władzy", correct: false },
    ],
  },
  {
    id: 10, lekcja: 2, lekcjaName: "Struktura organizacyjna",
    question: "Główna cecha struktury liniowej, która odróżnia ją od klasycznej struktury funkcjonalnej to:",
    options: [
      { key: "a", text: "złamanie zasady jedności rozkazodawstwa", correct: false },
      { key: "b", text: "zasada jedności rozkazodawstwa (pracownik ma tylko jednego bezpośredniego przełożonego)", correct: true },
      { key: "c", text: "wydzielenie stanowisk sztabowych o charakterze wyłącznie doradczym", correct: false },
    ],
  },
  {
    id: 11, lekcja: 2, lekcjaName: "Struktura organizacyjna",
    question: "Sytuacja, w której pracownik realizujący czasowy projekt podlega jednocześnie kierownikowi tego projektu oraz kierownikowi swojego stałego działu, występuje w strukturze:",
    options: [
      { key: "a", text: "dywizjonalnej (M)", correct: false },
      { key: "b", text: "macierzowej", correct: true },
      { key: "c", text: "holdingowej (H)", correct: false },
    ],
  },
  {
    id: 12, lekcja: 2, lekcjaName: "Struktura organizacyjna",
    question: "Miejsca, które hamują sprawny przebieg działań w podejściu procesowym, generując koszty i opóźnienia, nazywamy:",
    options: [
      { key: "a", text: "wąskimi gardłami", correct: true },
      { key: "b", text: "punktami krytycznymi Holdingu", correct: false },
      { key: "c", text: "artefaktami behawioralnymi", correct: false },
    ],
  },
  {
    id: 13, lekcja: 2, lekcjaName: "Struktura organizacyjna",
    question: "Wydzielenie ze struktury firmy zespołu pracowników i utworzenie na jego bazie zależnej spółki-córki, która nadal świadczy usługi dla firmy-matki, to:",
    options: [
      { key: "a", text: "outsourcing kontraktowy", correct: false },
      { key: "b", text: "podejście funkcjonalne typu U", correct: false },
      { key: "c", text: "outsourcing kapitałowy", correct: true },
    ],
  },
  {
    id: 14, lekcja: 2, lekcjaName: "Struktura organizacyjna",
    question: "(Z analizy przypadku) Jaką strukturę organizacyjną posiadała cukiernia rodziny Miodowników na samym początku działalności (gdy założyciel Stanisław decydował o wszystkim sam, a członkowie rodziny dzielili między siebie konkretne funkcje nadzorowane przez niego)?",
    options: [
      { key: "a", text: "macierzową", correct: false },
      { key: "b", text: "funkcjonalną (U)", correct: false },
      { key: "c", text: "liniową", correct: true },
    ],
  },
  {
    id: 15, lekcja: 2, lekcjaName: "Struktura organizacyjna",
    question: "(Z analizy przypadku) W jaką strukturę na poziomie makro przekształciła się cukiernia \"Sweet & Happy\" w czasach współczesnych, skoro filie posiadają samodzielność w bieżących działaniach, ale centrala decyduje o strategii produktowej, marketingu globalnym oraz zapewnia obsługę prawną i księgową?",
    options: [
      { key: "a", text: "dywizjonalną (D/M)", correct: true },
      { key: "b", text: "holdingową (H)", correct: false },
      { key: "c", text: "procesową", correct: false },
    ],
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
  },
  {
    id: 17, lekcja: 3, lekcjaName: "Szkoły zarządzania",
    question: "Według koncepcji idealnej biurokracji Maxa Webera, nowym kierownikiem działu prawnego w urzędzie powinna zostać osoba, która:",
    options: [
      { key: "a", text: "jest charyzmatycznym liderem o wybitnych cechach przywódczych, lubianym przez zarząd", correct: false },
      { key: "b", text: "posiada udokumentowane kompetencje merytoryczne i wykształcenie kierunkowe zgodne z przepisami legalno-prawnymi", correct: true },
      { key: "c", text: "jest spokrewniona z prezesem instytucji, co zapewnia ciągłość tradycji i lojalność", correct: false },
    ],
  },
  {
    id: 18, lekcja: 3, lekcjaName: "Szkoły zarządzania",
    question: "Kluczowym wnioskiem z eksperymentów przeprowadzonych przez Eltona Mayo w fabryce Hawthorne było to, że:",
    options: [
      { key: "a", text: "natężenie oświetlenia na stanowisku pracy jest najważniejszym czynnikiem fizycznym warunkującym wydajność", correct: false },
      { key: "b", text: "pracownik jest istotą społeczną, a samo zwrócenie na niego uwagi przez badaczy działa motywująco na jego efektywność", correct: true },
      { key: "c", text: "pracownicy zawsze pracują najefektywniej, gdy działają w pełni samodzielnie bez żadnego wpływu grupy rówieśniczej", correct: false },
    ],
  },
  {
    id: 19, lekcja: 3, lekcjaName: "Szkoły zarządzania",
    question: "Menadżer, który uważa, że pracownicy z natury są leniwi, nie chcą brać na siebie odpowiedzialności i do pracy można zmusić ich jedynie ścisłą kontrolą oraz strachem, reprezentuje:",
    options: [
      { key: "a", text: "Teorię Y McGregora", correct: false },
      { key: "b", text: "Podejście sytuacyjne Fiedlera", correct: false },
      { key: "c", text: "Teorię X McGregora", correct: true },
    ],
  },
  {
    id: 20, lekcja: 3, lekcjaName: "Szkoły zarządzania",
    question: "Według dwuczynnikowej teorii Fredericka Herzberga, zapewnienie pracownikowi wygodnego krzesła, dostępu do czystej toalety oraz terminowej wypłaty zasadniczej to:",
    options: [
      { key: "a", text: "motywatory, które bezpośrednio skłonią go do bicia rekordów wydajności", correct: false },
      { key: "b", text: "czynniki higieny, których brak wywoła niezadowolenie i spadek efektywności, ale ich obecność sama w sobie nie motywuje dodatkowo", correct: true },
      { key: "c", text: "realizacja potrzeby samorealizacji na najwyższym szczeblu hierarchii", correct: false },
    ],
  },
  {
    id: 21, lekcja: 3, lekcjaName: "Szkoły zarządzania",
    question: "Wykorzystanie zaawansowanych modeli matematycznych, programowania liniowego i symulacji komputerowych do planowania optymalnych rozkładów lotów w liniach lotniczych to domena:",
    options: [
      { key: "a", text: "szkoły ilościowej", correct: true },
      { key: "b", text: "szkoły klasycznej (nurtu administracyjnego)", correct: false },
      { key: "c", text: "podejścia sytuacyjnego", correct: false },
    ],
  },
  {
    id: 22, lekcja: 3, lekcjaName: "Szkoły zarządzania",
    question: "Sytuacja, w której wydawnictwo filmowe oraz producent odzieży należące do jednego holdingu łączą siły, by sprzedawać koszulki z postaciami z hitów kinowych, generując zysk większy niż suma ich osobnych działań, ilustruje opisywane w szkole systemowej zjawisko:",
    options: [
      { key: "a", text: "sprzężenia zwrotnego (feedback)", correct: false },
      { key: "b", text: "synergii", correct: true },
      { key: "c", text: "systemu zamkniętego", correct: false },
    ],
  },
  {
    id: 23, lekcja: 3, lekcjaName: "Szkoły zarządzania",
    question: "Przedstawiciel podejścia sytuacyjnego zapytany przez dyrektora o to, jaki styl przywództwa i system motywacyjny jest najlepszy dla wszystkich firm, odpowie:",
    options: [
      { key: "a", text: "\"Zawsze najlepszy jest system akordowy Taylora oparty na normach\"", correct: false },
      { key: "b", text: "\"Zawsze należy stosować podejście demokratyczne i realizować potrzebę przynależności\"", correct: false },
      { key: "c", text: "\"To zależy od zmiennych takich jak wielkość organizacji, rodzaj technologii czy cechy pracowników\"", correct: true },
    ],
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
  },
  {
    id: 25, lekcja: 4, lekcjaName: "Zarządzanie zasobami ludzkimi",
    question: "(Z analizy przypadku) W firmie Michała ocena okresowa polega na bezwzględnym zestawianiu wyników pracowników, nagradzaniu najlepszych i natychmiastowym zwalnianiu najsłabszych, co rodzi podejrzliwość i unikanie przyznawania się do błędów. Jaki model polityki personalnej tam panuje?",
    options: [
      { key: "a", text: "model kapitału ludzkiego", correct: false },
      { key: "b", text: "model mieszany", correct: false },
      { key: "c", text: "model sita", correct: true },
    ],
  },
  {
    id: 26, lekcja: 4, lekcjaName: "Zarządzanie zasobami ludzkimi",
    question: "Które z pytań zadanych kandydatce podczas rozmowy kwalifikacyjnej wprost narusza zasady równego traktowania i jest niedopuszczalne w świetle prawa?",
    options: [
      { key: "a", text: "\"Jakie są Pani oczekiwania finansowe na tym stanowisku?\"", correct: false },
      { key: "b", text: "\"Czy planuje Pani w najbliższym czasie zajść w ciążę i mieć dzieci?\"", correct: true },
      { key: "c", text: "\"Gdyby mogła Pani opisać swoje największe dotychczasowe osiągnięcie zawodowe, co by to było?\"", correct: false },
    ],
  },
  {
    id: 27, lekcja: 4, lekcjaName: "Zarządzanie zasobami ludzkimi",
    question: "(Z analizy przypadku) Krzysztof uczy Erykę produkcji słodyczy od podstaw, pyta o jej własne pomysły na receptury i pomaga jej samej znajdować rozwiązania w konkretnych sytuacjach przy stole rzemieślniczym. Z kolei Paweł rozmawia z nią o historii firmy, uczy odporności psychicznej i analizuje jej całościową długofalową karierę. Kto kim jest?",
    options: [
      { key: "a", text: "Krzysztof jest coachem, a Paweł mentorem", correct: true },
      { key: "b", text: "Krzysztof jest mentorem, a Paweł coachem", correct: false },
      { key: "c", text: "Obaj pełnią wyłącznie funkcję twardych selekcjonerów modelu sita", correct: false },
    ],
  },
  {
    id: 28, lekcja: 4, lekcjaName: "Zarządzanie zasobami ludzkimi",
    question: "Kompleksowa metoda oceny, w której pracownik otrzymuje poufną informację zwrotną od samego siebie, swojego przełożonego, współpracowników z zespołu, podwładnych oraz klientów to:",
    options: [
      { key: "a", text: "technika wydarzeń krytycznych", correct: false },
      { key: "b", text: "metoda 360°", correct: true },
      { key: "c", text: "portfolio personalne oparte na macierzy BCG", correct: false },
    ],
  },
  {
    id: 29, lekcja: 4, lekcjaName: "Zarządzanie zasobami ludzkimi",
    question: "(Z analizy przypadku) Pani Krysia spojrzała na nowego kierownika Piotra i stwierdziła: „Jest tak niesamowicie przystojny, przypomina Alvaro Solera, na pewno będzie fantastycznym, mądrym i skutecznym menedżerem”. Jaki błąd psychologiczny popełniła?",
    options: [
      { key: "a", text: "efekt Horna", correct: false },
      { key: "b", text: "błąd projekcji", correct: false },
      { key: "c", text: "efekt aureoli (halo)", correct: true },
    ],
  },
  {
    id: 30, lekcja: 4, lekcjaName: "Zarządzanie zasobami ludzkimi",
    question: "Gdy firma z przyczyn ekonomicznych (np. załamania rynku) musi przeprowadzić zwolnienia grupowe, ale pomaga zwalnianym pracownikom poprzez pisanie profesjonalnych CV, doradztwo zawodowe i psychologiczne oraz szukanie nowego zatrudnienia, stosuje:",
    options: [
      { key: "a", text: "outplacement (zwolnienia monitorowane)", correct: true },
      { key: "b", text: "błąd surowości w doborze kadr", correct: false },
      { key: "c", text: "rekrutację ukrytą", correct: false },
    ],
  },
  {
    id: 31, lekcja: 4, lekcjaName: "Zarządzanie zasobami ludzkimi",
    question: "(Z analizy przypadku) Monika kocha swoją pracę pielęgniarki, ponieważ czuje ogromną satysfakcję, gdy pomaga płaczącemu dziecku i widzi realną poprawę jego zdrowia. Z kolei Wojtek ceni pracę w HR, ale nienawidzi, gdy ktoś zakłóca jego czas z rodziną po 17.00 lub w weekendy, bo najważniejsza jest dla niego równowaga. Jakie kotwice kariery wg Scheina reprezentują?",
    options: [
      { key: "a", text: "Monika – Profesjonalizm; Wojtek – Autonomia i niezależność", correct: false },
      { key: "b", text: "Monika – Usługi i poświęcenie dla innych; Wojtek – Zintegrowany styl życia", correct: true },
      { key: "c", text: "Monika – Wyzwanie; Wojtek – Bezpieczeństwo i stabilizacja", correct: false },
    ],
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
  },
  {
    id: 33, lekcja: 5, lekcjaName: "Motywacja i przywództwo",
    question: "(Z analizy przypadku) Wojciech nie potrafi zintegrować się z nowym, zgranym zespołem w pokoju socjalnym i czuje się odrzucony, dlatego całą swoją energię przekierowuje w pisanie raportów i bicie rekordów sprzedaży na poziomie egzystencji. Która teoria zarządzania idealnie opisuje ten regres?",
    options: [
      { key: "a", text: "Teoria ERG Claytona Alderfera", correct: true },
      { key: "b", text: "Dwuczynnikowa teoria Herzberga", correct: false },
      { key: "c", text: "Model trzech potrzeb McClellanda", correct: false },
    ],
  },
  {
    id: 34, lekcja: 5, lekcjaName: "Motywacja i przywództwo",
    question: "(Z analizy przypadku) Zosia odmawia przyjęcia awansu na samodzielne, zdalne i świetnie płatne stanowisko w domu, ponieważ ponad wszystko przedkłada codzienną pracę w biurze ze swoimi koleżankami, z którymi jest silnie zaprzyjaźniona. Według McClellanda u Zosi dominuje potrzeba:",
    options: [
      { key: "a", text: "osiągnięć (dokonań)", correct: false },
      { key: "b", text: "władzy", correct: false },
      { key: "c", text: "przynależności (afiliacji)", correct: true },
    ],
  },
  {
    id: 35, lekcja: 5, lekcjaName: "Motywacja i przywództwo",
    question: "Według procesowej teorii oczekiwań Victora Vrooma, pracownik z zapałem podejmie się nowego, trudnego projektu tylko wtedy, gdy:",
    options: [
      { key: "a", text: "szef osobiście pokaże mu, że stosuje styl transformacyjny i wbiegnie z flagą do morza", correct: false },
      { key: "b", text: "dokładnie wie, co ma zrobić, ile wysiłku to wymaga oraz ma pewność, że obiecana nagroda jest warta tego trudu", correct: true },
      { key: "c", text: "w biurze zostanie zamontowana skrzynka na pomysły racjonalizatorskie", correct: false },
    ],
  },
  {
    id: 36, lekcja: 5, lekcjaName: "Motywacja i przywództwo",
    question: "Aby premia finansowa właściwie spełniała swoją funkcję motywacyjną w organizacji, musi:",
    options: [
      { key: "a", text: "być wypłacana co miesiąc w stałej, niezmiennej wysokości każdemu pracownikowi bez wyjątku", correct: false },
      { key: "b", text: "być traktowana jako stały element płacy zasadniczej zabezpieczający funkcję dochodową", correct: false },
      { key: "c", text: "być bezpośrednio uzależniona od wyników pracy i przyznawana za ponadstandardowe osiągnięcia", correct: true },
    ],
  },
  {
    id: 37, lekcja: 5, lekcjaName: "Motywacja i przywództwo",
    question: "Trener lokalnej drużyny piłkarskiej, który sam był niegdyś sławnym reprezentantem kraju i zdobywcą pucharów, sprawia że młodzi zawodnicy bezdyskusyjnie i z zachwytem wykonują jego polecenia. Lider ten czerpie siłę z:",
    options: [
      { key: "a", text: "władzy wymuszania (karania)", correct: false },
      { key: "b", text: "władzy odniesienia (autorytetu osobistego i charyzmy)", correct: true },
      { key: "c", text: "autorytetu formalnego wynikającego ze struktury", correct: false },
    ],
  },
  {
    id: 38, lekcja: 5, lekcjaName: "Motywacja i przywództwo",
    question: "(Z analizy przypadku) Szef Robert manipuluje zespołem, by zrobili reklamę po godzinach, tłumacząc to „widzimisię wiceprezesa i groźbą zwolnień”, ale jednocześnie ufa im i daje pełną swobodę techniczną. Według Reddina Robert to:",
    options: [
      { key: "a", text: "dyrektywny przywódca – życzliwy autokrata", correct: true },
      { key: "b", text: "separujący przywódca – dezerter", correct: false },
      { key: "c", text: "przywódca o zintegrowanym stylu idealnym", correct: false },
    ],
  },
  {
    id: 39, lekcja: 5, lekcjaName: "Motywacja i przywództwo",
    question: "Głównym założeniem wyróżniającym model sytuacyjny Freda Fiedlera spośród innych teorii przywództwa jest to, że:",
    options: [
      { key: "a", text: "lider musi elastycznie zmieniać swój styl w zależności od dojrzałości podwładnego niczym rodzic wobec dziecka", correct: false },
      { key: "b", text: "indywidualny styl przywództwa każdego lidera (zadaniowy lub relacyjny) jest stały i niezmienny, a diagnozuje się go testem NLW", correct: true },
      { key: "c", text: "obecność lidera w zespole nigdy nie jest konieczna, jeśli wprowadzono procedury i biurokrację", correct: false },
    ],
  },
  {
    id: 40, lekcja: 5, lekcjaName: "Motywacja i przywództwo",
    question: "Według teorii ścieżki do celu, styl nakazowy (lider wskazuje twardo drogę i wydaje polecenia) najlepiej sprawdza się w sytuacji, gdy:",
    options: [
      { key: "a", text: "podwładni mają ogromne, wieloletnie doświadczenie i są w pełni samodzielni", correct: false },
      { key: "b", text: "zadania są niezwykle proste, rutynowe i całkowicie jasne dla każdego", correct: false },
      { key: "c", text: "wewnątrz grupy występuje silny, paraliżujący konflikt utrudniający współpracę", correct: true },
    ],
  },
  {
    id: 41, lekcja: 5, lekcjaName: "Motywacja i przywództwo",
    question: "(Z analizy przypadku) Podczas kolacji konferencyjnej Weronika, Tomasz, Marcin i Kacper zamówili konkretne dania. Co zamówił Kacper, który opowiadał o swoim pradziadku Stanisławie – klasycznym przywódcy transformacyjnym?",
    options: [
      { key: "a", text: "naleśniki z serem (zwolennik teorii wzmocnienia)", correct: false },
      { key: "b", text: "placki ziemniaczane (zwolennik przywództwa transformacyjnego)", correct: true },
      { key: "c", text: "krokiety z pieczarkami (zwolennik modelu Fiedlera)", correct: false },
    ],
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
  },
  {
    id: 43, lekcja: 6, lekcjaName: "Różnice międzykulturowe",
    question: "Elementy kultury, które znajdują się pod wodą w metaforze kulturowej góry lodowej i są najtrudniejsze do zmiany to:",
    options: [
      { key: "a", text: "język, narodowe potrawy i tradycyjne stroje", correct: false },
      { key: "b", text: "normy, głęboko zakorzenione wartości oraz założenia podstawowe", correct: true },
      { key: "c", text: "styl uczenia się języków obcych i popularne gesty (np. kciuk w górę)", correct: false },
    ],
  },
  {
    id: 44, lekcja: 6, lekcjaName: "Różnice międzykulturowe",
    question: "W firmie o wysokim wskaźniku dystansu władzy (PDI) najbardziej typowym zjawiskiem będzie:",
    options: [
      { key: "a", text: "egalitarne traktowanie wszystkich członków zespołu, niezależnie od ich stanowiska", correct: false },
      { key: "b", text: "włączanie wszystkich podwładnych w procesy podejmowania decyzji strategicznych", correct: false },
      { key: "c", text: "autorytarny styl kierowania oraz ostentacyjne podkreślanie statusu szefa (np. osobna, złota winda)", correct: true },
    ],
  },
  {
    id: 45, lekcja: 6, lekcjaName: "Różnice międzykulturowe",
    question: "Inwestowanie wolnych środków finansowych w pewne, długoterminowe obligacje państwowe lub bezpieczne nieruchomości oraz budowanie wieloletnich, lojalnych relacji z kontrahentami charakteryzuje kultury o:",
    options: [
      { key: "a", text: "niskim wskaźniku unikania niepewności (UAI)", correct: false },
      { key: "b", text: "orientacji długoterminowej (wysokie LTO)", correct: true },
      { key: "c", text: "skrajnym indywidualizmie (IDV)", correct: false },
    ],
  },
  {
    id: 46, lekcja: 6, lekcjaName: "Różnice międzykulturowe",
    question: "Wybór gorzej płatnej pracy w publicznym szpitalu przez młodego lekarza w celu uczestnictwa w skomplikowanych operacjach pod okiem mentorów (zamiast łatwego i szybkiego zysku w prywatnej klinice kosmetycznej) to przykład:",
    options: [
      { key: "a", text: "kariery alternatywnej (poziomej) typowej dla kultur ceniących zyski krótkoterminowe", correct: false },
      { key: "b", text: "błędu kontrastu w kulturach męskich", correct: false },
      { key: "c", text: "realizacji założeń kultur kobiecych o niskim wskaźniku MAS", correct: true },
    ],
  },
  {
    id: 47, lekcja: 6, lekcjaName: "Różnice międzykulturowe",
    question: "Jeśli kierownik, oceniając projekt, wystawia przeciętnemu pracownikowi ocenę bardzo dobrą tylko dlatego, że bezpośrednio przed nim oceniał pracownika skrajnie niekompetentnego, popełnia błąd:",
    options: [
      { key: "a", text: "projekcji", correct: false },
      { key: "b", text: "kontrastu", correct: true },
      { key: "c", text: "hierarchii", correct: false },
    ],
  },
  {
    id: 48, lekcja: 6, lekcjaName: "Różnice międzykulturowe",
    question: "(Z analizy przypadku) Szef Robert, zmuszając pracowników do pracy nad projektem jogurtu po godzinach 17:00, manipuluje nimi emocjonalnie, używając argumentów o \"wspólnym dobru i groźbie ze strony nowego wiceprezesa\". Według modelu Reddina Robert reprezentuje styl:",
    options: [
      { key: "a", text: "dezertera", correct: false },
      { key: "b", text: "biurokraty", correct: false },
      { key: "c", text: "życzliwego autokraty", correct: true },
    ],
  },
  {
    id: 49, lekcja: 6, lekcjaName: "Różnice międzykulturowe",
    question: "(Z analizy przypadku) Na kolacji po wykładzie ze sztucznej inteligencji, student zorientowany na model Freda Fiedlera zamówił krokiety z pieczarkami. Kto to był?",
    options: [
      { key: "a", text: "Tomasz", correct: false },
      { key: "b", text: "Weronika", correct: false },
      { key: "c", text: "Marcin", correct: true },
    ],
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
  },
  {
    id: 51, lekcja: 7, lekcjaName: "Zarządzanie strategiczne",
    question: "(Z analizy przypadku) Do której kategorii macierzy BCG koncern Amazon zaliczyłby tradycyjne e-booki, na rynku których posiada ugruntowaną, dominującą pozycję rynkową, mimo że sam rynek książki elektronicznej jest już w pełni dojrzały i nie wykazuje dynamicznych wzrostów?",
    options: [
      { key: "a", text: "znaki zapytania", correct: false },
      { key: "b", text: "gwiazdy", correct: false },
      { key: "c", text: "dojne krowy", correct: true },
    ],
  },
  {
    id: 52, lekcja: 7, lekcjaName: "Zarządzanie strategiczne",
    question: "Określane przez Państwową Komisję Akredytacyjną restrykcyjne wymogi prawne, które musi spełnić każda nowa instytucja chcąca oferować studia wyższe, stanowią w modelu 5 sił Portera element analizy:",
    options: [
      { key: "a", text: "siły przetargowej dostawców surowców", correct: false },
      { key: "b", text: "zagrożenia ze strony nowych konkurentów (barier wejścia na rynek)", correct: true },
      { key: "c", text: "zagrożenia ze strony produktów substytucyjnych", correct: false },
    ],
  },
  {
    id: 53, lekcja: 7, lekcjaName: "Zarządzanie strategiczne",
    question: "(Z analizy przypadku) Firma Virgin Group rozwija równolegle linie lotnicze, sieć komórkową, winnice oraz komercyjne loty kosmiczne. Taki typ poszerzania portfolio o całkowicie odrębne, niepowiązane branże to:",
    options: [
      { key: "a", text: "dywersyfikacja niezależna", correct: true },
      { key: "b", text: "dywersyfikacja zależna", correct: false },
      { key: "c", text: "strategia jednego produktu", correct: false },
    ],
  },
  {
    id: 54, lekcja: 7, lekcjaName: "Zarządzanie strategiczne",
    question: "Firma oferująca luksusowe zegarki, która opiera swój sukces na unikatowości, prestiżu, najwyższej jakości wykonania oraz zatrudnianiu elitarnych rzemieślników zamiast masowej automatyzacji, realizuje wg Portera:",
    options: [
      { key: "a", text: "strategię przywództwa kosztowego", correct: false },
      { key: "b", text: "strategię odróżniania się (dyferencjacji)", correct: true },
      { key: "c", text: "strategię pośrodku drogi (stuck in the middle)", correct: false },
    ],
  },
  {
    id: 55, lekcja: 7, lekcjaName: "Zarządzanie strategiczne",
    question: "Sytuacja, w której przedsiębiorstwo zamiast walczyć cenowo z konkurentami na istniejącym nasyconym rynku, tworzy zupełnie nową, unikalną i dotąd nieistniejącą kategorię produktu (np. jadalne, ekologiczne naczynia jednorazowe), to realizacja:",
    options: [
      { key: "a", text: "benchmarkingu naśladowczego", correct: false },
      { key: "b", text: "Strategii Błękitnego Oceanu", correct: true },
      { key: "c", text: "marketingu pretendenta rynkowego", correct: false },
    ],
  },
  {
    id: 56, lekcja: 7, lekcjaName: "Zarządzanie strategiczne",
    question: "(Z analizy przypadku) Niewielka manufaktura płatnerza w baśniowym królestwie, która zrezygnowała z masowej produkcji mieczy dla regularnej armii królewskiej, a skupiła się wyłącznie na kuciu elitarnych, drogich mieczy dla wąskiej grupy wiedźminów, to w terminologii strategii marketingowych:",
    options: [
      { key: "a", text: "lider rynku", correct: false },
      { key: "b", text: "naśladowca rynkowy", correct: false },
      { key: "c", text: "specjalista rynkowy (nicher)", correct: true },
    ],
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
  },
  {
    id: 58, lekcja: 8, lekcjaName: "Podstawy ekonomii",
    question: "Zdanie: „Rząd powinien natychmiast obniżyć stopy procentowe i zapewnić bezpłatne mieszkanie socjalne każdemu obywatelowi” to klasyczny przykład:",
    options: [
      { key: "a", text: "twierdzenia ekonomii pozytywnej", correct: false },
      { key: "b", text: "założenia ceteris paribus", correct: false },
      { key: "c", text: "twierdzenia ekonomii normatywnej", correct: true },
    ],
  },
  {
    id: 59, lekcja: 8, lekcjaName: "Podstawy ekonomii",
    question: "Sytuacja, w której zmęczony sportowiec pije po biegu cztery identyczne butelki wody mineralnej, z czego pierwsza daje mu ogromne poczucie ulgi, a czwarta niemal nie sprawia mu już satysfakcji, to ilustracja:",
    options: [
      { key: "a", text: "prawa malejącej użyteczności krańcowej", correct: true },
      { key: "b", text: "paradoksu Giffena", correct: false },
      { key: "c", text: "kosztu przeciętnego w ujęciu Veblena", correct: false },
    ],
  },
  {
    id: 60, lekcja: 8, lekcjaName: "Podstawy ekonomii",
    question: "Struktura rynkowa, w której po stronie zakupu (popytu) działa tylko jeden, jedyny odbiorca kontrolujący ceny dostawców (np. państwo kupujące czołgi od fabryk zbrojeniowych) to:",
    options: [
      { key: "a", text: "monopol", correct: false },
      { key: "b", text: "monopson", correct: true },
      { key: "c", text: "oligopol", correct: false },
    ],
  },
  {
    id: 61, lekcja: 8, lekcjaName: "Podstawy ekonomii",
    question: "Jeśli w wyniku drastycznego wzrostu ceny chleba w ubogiej dzielnicy portowej, najmniej zamożni robotnicy paradoksalnie zaczynają kupować go więcej (ponieważ po zakupie chleba nie stać ich już na droższe mięso), mamy do czynienia z:",
    options: [
      { key: "a", text: "efektem demonstracji Veblena", correct: false },
      { key: "b", text: "popytem doskonale elastycznym", correct: false },
      { key: "c", text: "paradoksem Giffena", correct: true },
    ],
  },
  {
    id: 62, lekcja: 8, lekcjaName: "Podstawy ekonomii",
    question: "Cena biletów do kina wzrosła o 10%, a w reakcji na to liczba sprzedanych biletów spadła aż o 25% (wartość bezwzględna Edp = 2,5). Oznacza to, że popyt na bilety jest:",
    options: [
      { key: "a", text: "elastyczny", correct: true },
      { key: "b", text: "nieelastyczny", correct: false },
      { key: "c", text: "doskonale sztywny", correct: false },
    ],
  },
  {
    id: 63, lekcja: 8, lekcjaName: "Podstawy ekonomii",
    question: "Elastyczność mieszana popytu dwóch dóbr jest ujemna (Edx(py) < 0), co oznacza, że gwałtowny wzrost ceny dobra Y wywoła spadek popytu na dobro X. Dobra te to:",
    options: [
      { key: "a", text: "substytuty (np. masło i margaryna)", correct: false },
      { key: "b", text: "dobra komplementarne (np. kawa i śmietanka)", correct: true },
      { key: "c", text: "dobra niezależne konsumpcyjnie", correct: false },
    ],
  },
  {
    id: 64, lekcja: 8, lekcjaName: "Podstawy ekonomii",
    question: "Gdy dochód pana Jana wzrósł o 50%, całkowicie zrezygnował on z kupowania tanich ubrań na wagę w second-handach (Edi < 0), zastępując je odzieżą z salonów markowych. Dla pana Jana odzież używana to:",
    options: [
      { key: "a", text: "dobro podstawowe", correct: false },
      { key: "b", text: "dobro luksusowe", correct: false },
      { key: "c", text: "dobro niższego rzędu", correct: true },
    ],
  },
];
