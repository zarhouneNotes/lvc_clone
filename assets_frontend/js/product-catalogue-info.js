(function () {
    var groups = [
        ["Dalles de faux plafonds", 5, "Dalle de plâtre|Dalle perforée acoustique|Dalle en laine de roche|Dalle en fibre minérale|Dalle en vinyle|Dalle métallique|Dalle en bois"],
        ["Plaques de faux plafonds, cloisons et contre-cloisons", 5, "Plaque standard|Plaque hydrofuge|Plaque flamme|Plaque très humide|Plaque phonique|Plaque dure|Plaque perforée acoustique|Plaque ciment"],
        ["Ossatures", 6, "Fourrure|Cornière galvanisée|Primaire|Suspente fourrure|Montant|Rail|Oméga|Cornière renfort d’angle|Profilé T24/T15|T-Décor T24/T15"],
        ["Accessoires", 7, "Cheville laiton|Cheville hourdis|Attache M6|Demi-collier|Écrou|Tige filetée|Suspente coulisseau|Raccord de tige|Cheville à frapper|Bande à joint|Bande grillagée|Bande armée|Vis autoforeuse TRPF|Vis autoperceuse TTPC|Suspente pivot|Raccord de fourrure"],
        ["Enduits et colles", 8, "Enduit Lent 24H|Enduit 8H (PLA 10)|Enduit Universelle 8H|Enduit 4H|Enduit Hydro|Enduit Sans bande|Prégylys 45|Pregywab|Isocol Expert|Isocol Mortier|Pregycolle"],
        ["Trappes de visite", 9, "Trappe hydro|Trappe coupe-feu|Trappe perforée"],
        ["Isolation", 9, "Laine de roche|Laine minérale|Laine de verre|Polystyrène extrudé XPS|Polyuréthane PIR|Liège|Membrane acoustique|Bruit d’impact"],
        ["Faux planchers", 10, "Dalle bois aggloméré|Dalle sulfate de calcium|Dalle métallique perforée|Traverses|Vérins|Frein filet sans solvant|Colle de vérins"],
        ["Revêtements de sols", 11, "Dalles moquette|Sol PVC|Colle moquette|Colle PVC"],
        ["Revêtement mural en bois", 12, "Panneau acoustique MDF"],
        ["Traitement murs et sols", 12, "Autonivelant|Résine acrylique|Imperméabilisant|Revêtement réflectif|Enduit d’étanchéité|Anti-humidité|Primaire d’adhérence|Rebouchage et lissage"],
        ["Projection de mortiers", 13, "PFT G4 Smart|PFT Ritmo L|Levier à cames avec bague de sûreté|Gicleur enduit fin"],
        ["Projection de mortiers", 14, "Balle de nettoyage (fixe)|Stator Twister|Rotor|Débitmètre d’eau|Lance de projection|Câble de rallonge|Rondo raccordement|Tuyau d’air/d’eau|Arbre de malaxage"],
        ["Outillages", 14, "Rabot-râpe métallique|Couteau à enduire manche bois|Cisaille Aviation|Truelle d’angle extérieur et intérieur|Pistolet pour cartouches|Poche double avec ceinture|Agitateur électrique|Pistolet à colle professionnel + accessoires"],
        ["Outillages", 15, "Mélangeur|Lame de rabot-râpe|Cordeau géant à poignée|Transporteur à tige|Chariot porte-plaques|Lève-plaque Levpano|Lève-plaque|Plateforme|Platoire dentée à colle inox|Gratton espagnol|Règle à niveau|Règle biseautée|Frottoir spongieux|Truelle à lisser|Taloche à éponge rouge grossière|Taloche à éponge rouge fine"],
        ["Baguettes", 16, "Baguette intérieure|Baguette extérieure|Baguette avec maille"],
        ["Mailles / grilles", 16, "Maille mortiers ciment|Maille mortiers plâtre"],
        ["Étanchéité", 16, "Membrane bitumineuse|Drainage|Géotextile"],
        ["Peinture décorative et vernis", 17, "Peinture à base de solvant|Spray métallique|Vernis teinté bois|Vernis acrylique à base d’eau|Vernis acrylique à base de solvant|Poudre métallique|Teinture bois prête à l’emploi|Teinture bois concentrée|Vernis et finition|Pâtes à bois"]
    ];

    var subcategories = {
        "fourrure": "Faux plafond continu",
        "corniere galvanisee": "Faux plafond continu",
        "primaire": "Faux plafond continu",
        "suspente fourrure": "Faux plafond continu",
        "montant": "Cloison et contre-cloison",
        "rail": "Cloison et contre-cloison",
        "omega": "Cloison et contre-cloison",
        "corniere renfort dangle": "Cloison et contre-cloison",
        "profile t24 t15": "Faux plafond modulaire",
        "t-decor t24 t15": "Faux plafond modulaire",
        "enduit lent 24h": "Enduits lents et rapides",
        "enduit 8h (pla 10)": "Enduits lents et rapides",
        "enduit universelle 8h": "Enduits lents et rapides",
        "enduit 4h": "Enduits lents et rapides",
        "enduit hydro": "Enduits lents et rapides",
        "enduit sans bande": "Enduits lents et rapides",
        "pregylys 45": "Enduits lents et rapides",
        "pregywab": "Enduits lents et rapides",
        "isocol expert": "Colles pour plaques de plâtre",
        "isocol mortier": "Colles pour plaques de plâtre",
        "pregycolle": "Colles pour plaques de plâtre",
        "dalle bois agglomere": "Dalles de faux plancher",
        "dalle sulfate de calcium": "Dalles de faux plancher",
        "dalle metallique perforee": "Dalles de faux plancher",
        "traverses": "Structure de faux plancher",
        "verins": "Structure de faux plancher",
        "frein filet sans solvant": "Colle de faux plancher",
        "colle de verins": "Colle de faux plancher",
        "dalles moquette": "Moquette",
        "sol pvc": "PVC",
        "colle moquette": "Colle moquette et PVC",
        "colle pvc": "Colle moquette et PVC",
        "pft g4 smart": "Machines de projection",
        "pft ritmo l": "Machines de projection",
        "levier a cames avec bague de surete": "Pièces de rechange",
        "gicleur enduit fin": "Pièces de rechange",
        "balle de nettoyage (fixe)": "Pièces de rechange",
        "stator twister": "Pièces de rechange",
        "rotor": "Pièces de rechange",
        "debitmetre d’eau": "Pièces de rechange",
        "lance de projection": "Pièces de rechange",
        "cable de rallonge": "Pièces de rechange",
        "rondo raccordement": "Pièces de rechange",
        "tuyau d’air/d’eau": "Pièces de rechange",
        "arbre de malaxage": "Pièces de rechange",
        "rabot-rape metallique": "Outillage plaquiste",
        "couteau a enduire manche bois": "Outillage plaquiste",
        "cisaille aviation": "Outillage plaquiste",
        "truelle d’angle exterieur et interieur": "Outillage plaquiste",
        "pistolet pour cartouches": "Outillage plaquiste",
        "poche double avec ceinture": "Outillage plaquiste",
        "agitateur electrique": "Outillage plaquiste",
        "pistolet a colle professionnel + accessoires": "Outillage plaquiste",
        "melangeur": "Outillage plaquiste",
        "lame de rabot-rape": "Outillage plaquiste",
        "cordeau geant a poignee": "Outillage plaquiste",
        "transporteur a tige": "Outillage plaquiste",
        "chariot porte-plaques": "Outillage plaquiste",
        "leve-plaque levpano": "Outillage plaquiste",
        "leve-plaque": "Outillage plaquiste",
        "plateforme": "Outillage plaquiste",
        "platoire dentee a colle inox": "Outillage mortiers",
        "gratton espagnol": "Outillage mortiers",
        "regle a niveau": "Outillage mortiers",
        "regle biseautee": "Outillage mortiers",
        "frottoir spongieux": "Outillage mortiers",
        "truelle a lisser": "Outillage mortiers",
        "taloche a eponge rouge grossiere": "Outillage mortiers",
        "taloche a eponge rouge fine": "Outillage mortiers",
        "peinture a base de solvant": "Gamme Easy Color",
        "spray metallique": "Gamme Easy Color",
        "vernis teinte bois": "Gamme Easy Color",
        "vernis acrylique a base d’eau": "Gamme Easy Color",
        "vernis acrylique a base de solvant": "Gamme Easy Color",
        "poudre metallique": "Gamme Easy Color",
        "teinture bois prete a l’emploi": "Gamme Nari",
        "teinture bois concentree": "Gamme Nari",
        "vernis et finition": "Gamme Nari",
        "pates a bois": "Gamme Nari"
    };

    var brands = {
        "plaque ciment": "Aquapanel",
        "enduit lent 24h": "Semin",
        "enduit 8h (pla 10)": "Pladis",
        "enduit universelle 8h": "Semin",
        "enduit 4h": "Semin",
        "enduit hydro": "Semin",
        "enduit sans bande": "Semin",
        "pregylys 45": "Siniat",
        "isocol expert": "Semin",
        "isocol mortier": "Semin",
        "pregycolle": "Siniat",
        "laine de roche": "Rockwool",
        "laine minerale": "Volcalis",
        "laine de verre": "Isover",
        "colle moquette": "Ardex",
        "colle pvc": "Ardex",
        "autonivelant": "Ardex",
        "resine acrylique": "Ardex",
        "impermeabilisant": "Ardex",
        "enduit d’etancheite": "Ardex",
        "anti-humidite": "Semin",
        "primaire d’adherence": "Semin",
        "pft g4 smart": "PFT",
        "pft ritmo l": "PFT",
        "levier a cames avec bague de surete": "PFT",
        "gicleur enduit fin": "PFT",
        "balle de nettoyage (fixe)": "PFT",
        "stator twister": "PFT",
        "rotor": "PFT",
        "debitmetre d’eau": "PFT",
        "lance de projection": "PFT",
        "cable de rallonge": "PFT",
        "rondo raccordement": "PFT",
        "tuyau d’air/d’eau": "PFT",
        "arbre de malaxage": "PFT"
    };

    var characteristics = {
        "profile t24 t15": [["Type", "T24/T15"]],
        "t-decor t24 t15": [["Type", "T24/T15"]],
        "cheville laiton": [["Matière", "Laiton"]],
        "attache m6": [["Filetage", "M6"]],
        "vis autoforeuse trpf": [["Type", "TRPF"]],
        "vis autoperceuse ttpc": [["Type", "TTPC"]],
        "enduit lent 24h": [["Référence", "CE 78 Lent"], ["Temps de prise", "24 h"]],
        "enduit 8h (pla 10)": [["Temps de prise", "8 h"], ["Conditionnement", "25 kg"]],
        "enduit universelle 8h": [["Référence", "CE 78"], ["Temps de prise", "8 h"]],
        "enduit 4h": [["Référence", "CE 78 Rapide"], ["Temps de prise", "4 h"]],
        "enduit hydro": [["Référence", "CE 78 Hydro"]],
        "enduit sans bande": [["Référence", "CE 86"]],
        "pregylys 45": [["Référence", "P45"]],
        "pregycolle": [["Référence", "Prégycolle 120"]],
        "rebouchage et lissage": [["Référence", "Sem-Light"]],
        "pft g4 smart": [["Modèle", "G4 Smart"]],
        "pft ritmo l": [["Modèle", "Ritmo L"]],
        "gicleur enduit fin": [["Type", "S14"]],
        "balle de nettoyage (fixe)": [["Diamètre nominal", "DN25"], ["Type", "Fixe"]],
        "stator twister": [["Référence", "D 6-3"]],
        "rotor": [["Référence", "B 4-2 L"]],
        "debitmetre d’eau": [["Plage", "150 à 1 500 l/h"]],
        "rondo raccordement": [["Diamètre nominal", "DN25"]],
        "tuyau d’air/d’eau": [["Diamètre nominal", "DN12"], ["Longueur", "11 m"], ["Modèle", "Geka I"]],
        "arbre de malaxage": [["Modèle", "Bionik G4"]],
        "agitateur electrique": [["Modèle", "Tecmix"]],
        "cordeau geant a poignee": [["Longueur", "42 cm"]],
        "chariot porte-plaques": [["Nombre de roues", "2"], ["Charge maximale", "900 kg"]],
        "leve-plaque levpano": [["Modèle", "Levpano"]],
        "regle a niveau": [["Longueur", "2 m"]],
        "regle biseautee": [["Longueur", "1,50 m"]],
        "truelle a lisser": [["Largeur", "280 mm"]],
        "taloche a eponge rouge grossiere": [["Dimensions", "15 x 29 cm"], ["Dureté", "Dure"], ["Grain", "Grossier"]],
        "taloche a eponge rouge fine": [["Dimensions", "15 x 29 cm"], ["Dureté", "Dure"], ["Grain", "Fin"]],
        "maille mortiers ciment": [["Matière", "Fibre de verre"]],
        "peinture a base de solvant": [["Gamme", "Easy Color"], ["Application", "Bois, enduits, béton (surface préparée)"], ["Base", "Solvant"]],
        "spray metallique": [["Gamme", "Easy Color"], ["Application", "Bois, enduits, béton (surface préparée)"]],
        "vernis teinte bois": [["Gamme", "Easy Color"], ["Application", "Bois, enduits, béton (surface préparée)"]],
        "vernis acrylique a base d’eau": [["Base", "Eau"], ["Usage", "Intérieur"]],
        "vernis acrylique a base de solvant": [["Base", "Solvant"]],
        "teinture bois prete a l’emploi": [["Format", "Prête à l’emploi"]],
        "teinture bois concentree": [["Format", "Concentrée"]],
        "vernis et finition": [["Type", "2K PU"], ["Usage", "Intérieur et extérieur"]]
    };

    var aliases = {
        "dalleenlainederoche": "laine de roche",
        "dalleenlainedeverre": "laine de verre",
        "dalleenmetal": "dalle metallique",
        "plaqueba13standard": "plaque standard",
        "plaqueba13hydrofuge": "plaque hydrofuge",
        "plaqueba13flamme": "plaque flamme",
        "plaquetreshumideba13": "plaque tres humide",
        "plaquephoniqueba13": "plaque phonique",
        "plaquedureba13": "plaque dure",
        "plaqueperforeeacoustiqueba13maroc": "plaque perforee acoustique",
        "fourrures": "fourrure",
        "montants": "montant",
        "rails": "rail",
        "primaires": "primaire",
        "profilt24t15": "profile t24 t15",
        "raccorddefourrureeclisse": "raccord de fourrure",
        "raccorddetigemanchons": "raccord de tige",
        "trappedevisitecoupefeu": "trappe coupe-feu",
        "trappedevisitecoupefeumaroc": "trappe coupe-feu",
        "trappedevisitehydro": "trappe hydro",
        "trappedevisiteperforee": "trappe perforee",
        "suspentecroix": "suspente fourrure",
        "metalliqueperfore": "dalle metallique perforee",
        "boisagglomere": "dalle bois agglomere",
        "sulfatedecalcium": "dalle sulfate de calcium",
        "lvt": "sol pvc",
        "luxuryvinyltileslvt": "sol pvc",
        "panneauenbois": "panneau acoustique mdf",
        "dallesmoquettes": "dalles moquette",
        "membranebitumeuse": "membrane bitumineuse",
        "impermeabilisantdesstructuresenmaconnerieetenbeton": "impermeabilisant",
        "ragreageetlissagedessolsinterieurs": "autonivelant",
        "etancheiteliquide": "enduit d’etancheite",
        "pftg4": "pft g4 smart",
        "piedsreglablescompletsverins": "verins",
        "frottoirmonoblocspongieuxorangefin": "frottoir spongieux",
        "platoirdentecarreacolleinox": "platoire dentée à colle inox",
        "regleaniveau2mmob": "regle a niveau",
        "reglebiseautee150m2m250mmob": "regle biseautee",
        "talocheaeponge15x29cmcompletepft": "taloche a eponge rouge grossiere",
        "talocheaeponge15x29cmcompletepftfine": "taloche a eponge rouge fine",
        "maillemortier": "maille mortiers ciment",
        "mailleplatrier": "maille mortiers platre",
        "balledenettoyagefixepourdn25pft": "balle de nettoyage (fixe)",
        "gicleurenduitfins14pft": "gicleur enduit fin",
        "statortwisterd63pincamisapft": "stator twister",
        "rotorb42lpft": "rotor",
        "lancedeprojectiondn2560030gekapft": "lance de projection",
        "cablederallonge5x4mmred532a25m400v3phpft": "cable de rallonge",
        "debitmetredeau15015001hpft": "debitmetre d’eau",
        "tuyaudairdeaudn12gekai11mpft": "tuyau d’air/d’eau",
        "agitateurelectriquetecmix1600w": "agitateur electrique",
        "levieracamesavecbaguedesuretepft": "levier à cames avec bague de sûreté",
        "plateformeninja": "plateforme",
        "grattonespagnol480pointesde8mm": "gratton espagnol",
        "rondodn25raccordementhydrauliquemalefemelle10mpft": "rondo raccordement",
        "arbredemalaxagebionikg4enduitpft": "arbre de malaxage",
        "collemultiusagepourmoquetteetpvc": "colle pvc",
        "chariotporteplaques2roues900kgmob": "chariot porte-plaques",
        "transporteurdeplaquesatige42cm": "transporteur a tige",
        "grattonespanol480pointesde8mm": "gratton espagnol",
        "truellealisserpetitetaloche280mmpft": "truelle a lisser",
        "talocheaeponge15x29cmcompleterougefinedurepft": "taloche a eponge rouge fine",
        "leveplaquelevpano3roues": "leve-plaque",
        "leveplaqueeasyprolevpano4roues": "leve-plaque levpano"
    };

    var groupedPages = {
        "enduitsrapidesetlents": ["Enduit Lent 24H", "Enduit 8H (PLA 10)", "Enduit Universelle 8H", "Enduit 4H", "Enduit Hydro", "Enduit Sans bande", "Prégylys 45", "Pregywab"],
        "colles": ["Isocol Expert", "Isocol Mortier", "Pregycolle"],
        "collepourplancherstechniques": ["Frein filet sans solvant", "Colle de vérins"]
    };

    var categoryPages = [
        { title: "EASY COLOR", products: ["Peinture à base de solvant", "Spray métallique", "Vernis teinté bois", "Vernis acrylique à base d’eau", "Vernis acrylique à base de solvant", "Poudre métallique"] },
        { title: "NARI", products: ["Teinture bois prête à l’emploi", "Teinture bois concentrée", "Vernis et finition", "Pâtes à bois"] },
        { title: "Traitement murs et sols", products: ["Résine acrylique", "Revêtement réflectif"] }
    ];

    var suppliedDescriptions = {
        "Résine acrylique": "Résine acrylique d’accrochage.",
        "Revêtement réflectif": "Revêtement réflectif en seau.",
        "Peinture à base de solvant": "Peinture décorative métallisée à séchage rapide.",
        "Spray métallique": "Peinture décorative métallique en spray.",
        "Vernis teinté bois": "Vernis teinté pour bois.",
        "Vernis acrylique à base d’eau": "Vernis acrylique pour l’intérieur.",
        "Vernis acrylique à base de solvant": "Vernis acrylique.",
        "Poudre métallique": "Poudre métallique décorative.",
        "Teinture bois prête à l’emploi": "Teinture bois prête à l’emploi.",
        "Teinture bois concentrée": "Teinture bois concentrée universelle.",
        "Vernis et finition": "Vernis polyuréthane 2K de finition.",
        "Pâtes à bois": "Pâte à bois de réparation."
    };

    function normalize(value) {
        return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "");
    }

    function findByName(map, key) {
        var normalizedKey = normalize(key);
        var mapKey;
        for (mapKey in map) {
            if (normalize(mapKey) === normalizedKey) return map[mapKey];
        }
        return null;
    }

    var products = [];
    groups.forEach(function (group) {
        group[2].split("|").forEach(function (name) {
            var key = normalize(name);
            products.push({
                name: name,
                category: group[0],
                page: group[1],
                subcategory: findByName(subcategories, key) || "",
                brand: findByName(brands, key) || "",
                characteristics: findByName(characteristics, key) || [],
                description: findByName(suppliedDescriptions, name) || ""
            });
        });
    });

    window.LVC_PRODUCT_CATALOGUE_INFO = products;
    window.LVC_PRODUCT_CATALOGUE_ALIASES = aliases;

    function makeElement(tag, className, text) {
        var element = document.createElement(tag);
        if (className) element.className = className;
        if (text) element.textContent = text;
        return element;
    }

    document.querySelectorAll("body:has(.product-section) ul.products > li.product").forEach(function (card) {
        var title = card.querySelector(".woocommerce-loop-product__title");
        if (!title || card.querySelector(".product-card__details")) return;

        var titleKey = normalize(title.textContent);
        var productKey = normalize(aliases[titleKey] || titleKey);
        var product = products.find(function (item) {
            return normalize(item.name) === productKey;
        });
        if (!product) {
            var categoryTitle = document.querySelector("#list-produits .title-tag");
            product = {
                brand: "",
                description: "",
                characteristics: [],
                subcategory: "",
                category: categoryTitle ? categoryTitle.textContent.trim() : "Produits"
            };
        }

        var details = makeElement("div", "product-card__details");
        if (product.brand) details.appendChild(makeElement("p", "product-card__brand", product.brand));
        details.appendChild(makeElement(
            "p",
            "product-card__description",
            product.description || "Consultez la fiche pour les caractéristiques et la disponibilité."
        ));

        var features = makeElement("ul", "product-card__features");
        var featureLabels = product.characteristics.length
            ? product.characteristics.slice(0, 2).map(function (item) { return item[0] + " : " + item[1]; })
            : [product.subcategory || product.category];
        featureLabels.forEach(function (label) {
            features.appendChild(makeElement("li", "", label));
        });
        details.appendChild(features);

        var copyContainer = card.querySelector(".product-wrap .wrap-right") || title.parentElement;
        copyContainer.appendChild(details);

        var action = card.querySelector(".product_type_simple");
        if (action) action.setAttribute("aria-label", "Voir le produit " + title.textContent.trim());
    });

    function makeProductSection(product, categoryFallback) {
        var sectionClass = "product-catalogue-details" + (categoryFallback ? " product-catalogue-details--category" : "");
        var section = makeElement("section", sectionClass);
        var heading = makeElement("h4", "product-catalogue-details__title", "Informations catalogue · " + product.name);
        var table = makeElement("table", "product-catalogue-details__table");
        var body = document.createElement("tbody");
        var rows = [["Catégorie", product.category]];

        if (product.description) rows.push(["Description", product.description]);
        if (product.subcategory) rows.push(["Sous-catégorie", product.subcategory]);
        if (product.brand) rows.push(["Marque", product.brand]);

        if (product.characteristics.length) {
            rows.push(["Caractéristiques techniques", product.characteristics.map(function (item) {
                return item[0] + " : " + item[1];
            }).join(" · ")]);
        } else {
            rows.push(["Caractéristiques techniques", "Non renseignées dans le catalogue"]);
        }
        rows.push(["Page du catalogue", String(product.page)]);

        rows.forEach(function (item) {
            var row = document.createElement("tr");
            row.appendChild(makeElement("th", "", item[0]));
            row.appendChild(makeElement("td", "", item[1]));
            body.appendChild(row);
        });
        table.appendChild(body);

        var actions = makeElement("div", "product-catalogue-details__actions");
        var quote = makeElement("a", "product-catalogue-details__button product-catalogue-details__button--primary", "Demander un devis");
        quote.href = "../contact.html?produit=" + encodeURIComponent(product.name);
        quote.setAttribute("aria-label", "Demander un devis pour " + product.name);
        var documents = document.querySelector("#product-documents .list-catalogues, .summary.entry-summary .list-catalogues");
        var catalogue = makeElement("a", "product-catalogue-details__button", documents ? "Consulter les fiches techniques" : "Voir les catalogues");
        catalogue.href = documents ? "#product-catalogue-documents" : "../espace-pro.html";
        catalogue.setAttribute("aria-label", "Consulter les documents pour " + product.name);
        if (documents) documents.id = "product-catalogue-documents";
        actions.appendChild(quote);
        actions.appendChild(catalogue);
        section.appendChild(heading);
        section.appendChild(table);
        section.appendChild(actions);
        return section;
    }

    var title = document.querySelector("#produit-details .summary.entry-summary .product_title.entry-title");
    var categoryTitle = title ? null : document.querySelector("#list-produits .title-tag");
    if (!title && !categoryTitle) return;

    var titleKey = normalize((title || categoryTitle).textContent);
    var groupedNames = groupedPages[titleKey];
    if (!groupedNames && categoryTitle) {
        for (var categoryIndex = 0; categoryIndex < categoryPages.length; categoryIndex++) {
            if (normalize(categoryPages[categoryIndex].title) === titleKey) {
                groupedNames = categoryPages[categoryIndex].products;
                break;
            }
        }
    }
    var matchedName = normalize(aliases[titleKey] || titleKey);
    var matchedProducts = groupedNames
        ? products.filter(function (product) { return groupedNames.indexOf(product.name) !== -1; })
        : products.filter(function (product) {
            return normalize(product.name) === matchedName;
        });

    if (!matchedProducts.length) return;

    var description = title ? title.nextElementSibling : categoryTitle.parentElement.parentElement.querySelector(".product-category-description");
    var insertionPoint = description && description.matches("div, p") ? description : (title || categoryTitle);
    var fragment = document.createDocumentFragment();
    matchedProducts.forEach(function (product) {
        fragment.appendChild(makeProductSection(product, !!categoryTitle));
    });
    insertionPoint.after(fragment);
})();
