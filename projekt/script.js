function magic(){
    var header=document.getElementById('summary');
    header.parentNode.removeChild(header);
    
    var guzik=document.getElementById('bton');
    guzik.parentNode.removeChild(guzik)

    const section = document.createElement('section');
    section.innerHTML = '<h2>Ciekawostki</h2><p>Największy motocykl na świecie został zbudowany przez Holendra Franka T. van Zaja. Nazwany "Bigtoe", ten gigantyczny motocykl mierzył aż 5,10 metra długości i ważył ponad 4,5 tony. <br>Posiadał dwie ogromne opony ciężarowe, a sama konstrukcja wyglądała jak wydłużony motocykl chopper. "Bigtoe" został zarejestrowany jako pojazd drogowy i mógł osiągnąć prędkość do 8 km/h. To imponujące dzieło inżynieryjne przyciągało uwagę jako jeden z największych motocykli na świecie.</p><br><p>Pewnego razu w Stanach Zjednoczonych, grupa entuzjastów motocykli postanowiła stworzyć nietypowy projekt - motocykl zbudowany z zużytych, nieużywanych klamek do drzwi! Nazwali go żartobliwie "Klamer". Zbierając stare, zepsute lub nieużywane klamki do drzwi, zespół przekształcił je w ramę, łącząc je w taki sposób, by stworzyć nietypowy, ale funkcjonalny motocykl. Co więcej, udało im się wykorzystać elementy klamek jako elementy ozdobne na tym nietypowym pojeździe. Choć może to brzmieć jak absurdalny pomysł, "Klamer" stał się mini-atrakcją lokalnych imprez motocyklowych, wywołując wiele śmiechu i zdziwienia wśród widzów. To doskonały przykład, jak kreatywność i odrobina humoru mogą sprawić, że motocykl staje się zarówno wyjątkowy, jak i zabawny!</p>';
    document.body.appendChild(section);
    document.getElementById("magic").appendChild(section);
    }