(function () {
    'use strict';

    const solutionsByPage = {
        '1-faux-plafonds.html': [
            ['9-faux-plafond-modulaire.html', 'Faux plafond modulaire', 'Des plafonds modulaires faciles à intégrer, entretenir et adapter à chaque espace intérieur.'],
            ['10-faux-plafond-continu.html', 'Faux plafond continu', 'Des plafonds continus aux finitions soignées pour des espaces élégants et confortables.'],
            ['77-faux-plafond-monolithique.html', 'Faux plafond monolithique', 'Une finition monolithique sobre et homogène pour valoriser les volumes et le confort acoustique.']
        ],
        '9-faux-plafond-modulaire.html': [
            ['31-dalles.html', 'Dalles', 'Des dalles de plafond aux finitions variées pour répondre aux exigences de vos espaces.'],
            ['32-ossatures.html', 'Ossatures', 'Des ossatures fiables pour une pose précise et durable de vos plafonds modulaires.'],
            ['33-accessoires.html', 'Accessoires', 'Les accessoires essentiels pour compléter vos systèmes et soigner chaque détail de pose.']
        ],
        '10-faux-plafond-continu.html': [
            ['34-plaques.html', 'Plaques', 'Des plaques adaptées aux besoins de performance, de finition et de résistance de vos cloisons.'],
            ['35-ossatures.html', 'Ossatures', 'Des structures robustes pour réaliser des plafonds continus stables et parfaitement alignés.'],
            ['37-accessoires.html', 'Accessoires', 'Des accessoires de montage et de finition pour compléter efficacement votre installation.'],
            ['38-enduits-et-colles.html', 'Enduits et colles', 'Des produits de collage et de finition pour obtenir des surfaces régulières et durables.'],
            ['44-isolation.html', 'Isolation', 'Des solutions isolantes pour améliorer le confort thermique et acoustique de vos espaces.'],
            ['55-trappes-de-visite.html', 'Trappes de visite', 'Des trappes discrètes pour accéder facilement aux installations intégrées dans vos plafonds.']
        ],
        '41-isolations-and-toitures.html': [
            ['54-isolations.html', 'Isolations', 'Des matériaux isolants pour améliorer le confort et les performances de vos bâtiments.'],
            ['42-etancheite.html', 'Étanchéité', 'Des membranes et systèmes d’étanchéité pour protéger durablement toitures et ouvrages.']
        ],
        '2-cloisons-et-contre-cloisons.html': [
            ['11-plaques.html', 'Plaques', 'Des plaques conçues pour réaliser des cloisons adaptées aux contraintes de vos projets.'],
            ['12-ossatures.html', 'Ossatures', 'Des profils robustes pour construire des cloisons stables et assurer une pose précise.'],
            ['13-accessoires.html', 'Accessoires', 'Les accessoires nécessaires pour assembler et finaliser vos systèmes de cloisonnement.'],
            ['14-enduits-et-colles.html', 'Enduits et colles', 'Des produits de collage et de finition pour des parois régulières et durables.'],
            ['45-isolations.html', 'Isolations', 'Des isolants adaptés aux cloisons pour renforcer le confort acoustique et thermique.'],
            ['15-carreaux-de-platre.html', 'Carreaux de plâtre', 'Des carreaux pratiques et résistants pour aménager et séparer vos espaces intérieurs.']
        ],
        '69-ossatures-legeres.html': [
            ['71-structure-lsf-light-steel-framing.html', 'Structure LSF (Light Steel Framing)', 'Une structure légère en acier pour des constructions précises, solides et performantes.']
        ],
        '5-faux-planchers.html': [
            ['19-dalles-planchers-techniques.html', 'Dalles planchers techniques', 'Des dalles résistantes pour composer des planchers techniques selon vos besoins.'],
            ['56-structure-planchers-techniques.html', 'Structures planchers techniques', 'Des structures réglables pour installer des planchers techniques stables et accessibles.'],
            ['57-colles-planchers-techniques.html', 'Colles planchers techniques', 'Des colles adaptées à la pose et à la finition des planchers techniques.']
        ],
        '6-revetements-de-sols-souples.html': [
            ['46-moquette.html', 'Moquette', 'Des moquettes confortables et résistantes pour aménager vos espaces professionnels.'],
            ['60-pvc-et-vinyle.html', 'PVC et vinyle', 'Des revêtements en PVC et vinyle faciles à entretenir, disponibles en finitions variées.'],
            ['47-bruit-d-impact.html', 'Bruit d’impact', 'Des solutions pour limiter les bruits d’impact et améliorer le confort acoustique des sols.'],
            ['48-autonivelant.html', 'Autonivelant', 'Des produits autonivelants pour préparer des supports réguliers avant la pose du revêtement.']
        ],
        '61-traitement-de-murs-et-sols.html': [
            ['63-primaire-d-adherence.html', 'Primaire d’adhérence', 'Des primaires qui préparent les supports et renforcent l’adhérence des finitions.'],
            ['64-anti-humidite.html', 'Anti-humidité', 'Des traitements conçus pour protéger vos murs et sols contre les problèmes d’humidité.'],
            ['65-rebouchage-et-lissage.html', 'Rebouchage et lissage', 'Des enduits pour reboucher, lisser et préparer vos surfaces avant finition.']
        ],
        '78-revetement-acoustique-decoratif.html': [
            ['80-panneau-en-bois.html', 'Panneau en bois', 'Des panneaux décoratifs en bois pour habiller vos espaces et améliorer leur acoustique.'],
            ['81-panneau-en-fibres-de-polyester-recyclees.html', 'Panneau en fibres de polyester recyclées', 'Des panneaux acoustiques décoratifs fabriqués à partir de fibres de polyester recyclées.'],
            ['79-plaque-perforee-acoustique.html', 'Plaque perforée acoustique', 'Des plaques perforées qui associent finition soignée et absorption acoustique.']
        ],
        '8-projection-de-mortiers.html': [
            ['24-machines-de-projection.html', 'Machines de projection', 'Des machines performantes pour projeter les mortiers avec régularité sur chantier.'],
            ['25-pieces-de-rechange.html', 'Pièces de rechange', 'Des pièces de rechange pour maintenir vos équipements de projection en service.'],
            ['26-outillages.html', 'Outillages', 'Des outils adaptés pour accompagner les travaux de projection et de finition.'],
            ['27-baguettes.html', 'Baguettes', 'Des baguettes pratiques pour réaliser des finitions précises et protéger les arêtes.'],
            ['28-mailles.html', 'Mailles', 'Des mailles de renfort pour consolider les enduits et limiter les fissurations.']
        ]
    };

    const rootSolutions = {
        '1-faux-plafonds.html': 'Faux plafonds',
        '41-isolations-and-toitures.html': 'Isolations & toitures',
        '2-cloisons-et-contre-cloisons.html': 'Cloisons & contre-cloisons',
        '69-ossatures-legeres.html': 'Ossatures légères',
        '5-faux-planchers.html': 'Faux planchers',
        '72-cloisons-mobiles.html': 'Cloisons mobiles',
        '6-revetements-de-sols-souples.html': 'Revêtements de sols souples',
        '73-cloisons-amovibles.html': 'Cloisons amovibles',
        '61-traitement-de-murs-et-sols.html': 'Traitement de murs et sols',
        '74-cabines-acoustiques.html': 'Cabines acoustiques',
        '78-revetement-acoustique-decoratif.html': 'Revêtement acoustique décoratif',
        '75-cabines-sanitaires.html': 'Cabines sanitaires',
        '8-projection-de-mortiers.html': 'Projection de mortiers'
    };

    const currentPage = decodeURIComponent(window.location.pathname.split('/').pop());
    const subSolution = Object.keys(solutionsByPage).reduce(function (match, page) {
        if (match) {
            return match;
        }

        const child = solutionsByPage[page].find(function (solution) {
            return solution[0] === currentPage;
        });

        return child ? { page: page, name: child[1] } : null;
    }, null);
    const currentName = subSolution ? subSolution.name : rootSolutions[currentPage];

    if (!currentName) {
        return;
    }

    const header = document.querySelector('header.header_absolute');
    const pageSlider = document.querySelector('.page_slider');
    if (!header || !pageSlider) {
        throw new Error('Unable to find the solution page header or hero.');
    }
    const heroSlideImage = pageSlider.querySelector('img[src]');
    if (!heroSlideImage) {
        throw new Error('Unable to find a hero image for the solution page.');
    }

    document.body.classList.add('solution-detail-page');

    const hero = document.createElement('section');
    hero.className = 'solution-detail-hero';

    const heroImage = document.createElement('img');
    heroImage.className = 'solution-detail-hero__image';
    heroImage.src = heroSlideImage.getAttribute('src');
    heroImage.alt = '';
    heroImage.fetchPriority = 'high';

    const heroContent = document.createElement('div');
    heroContent.className = 'solution-detail-hero__content';
    const eyebrow = document.createElement('p');
    eyebrow.className = 'solution-detail-hero__eyebrow';
    eyebrow.textContent = 'Nos solutions';
    const heroTitle = document.createElement('h1');
    heroTitle.textContent = currentName;

    heroContent.append(eyebrow, heroTitle);
    hero.append(heroImage, heroContent);
    header.after(hero);
    pageSlider.remove();

    const subSolutions = solutionsByPage[currentPage];
    const productSection = document.getElementById('list-produits');
    if (!productSection) {
        throw new Error('Unable to find the solution product catalogue.');
    }
    productSection.hidden = true;

    if (!subSolutions) {
        return;
    }

    const productGridSection = productSection.nextElementSibling;
    if (!productGridSection || !productGridSection.querySelector('.products.columns-4')) {
        throw new Error('Unable to find the solution product catalogue.');
    }
    productGridSection.classList.add('solution-parent-product-list');

    const images = [
        '../storage/projects/October2021/2KdoafN3tu7y6eONsNBb-cropped.jpg',
        '../storage/projects/October2021/20Ka4CbIwrFFD9gzXPGT-cropped.jpg',
        '../storage/projects/October2021/62DEJqkpVwryCzrArPdf-cropped.jpg',
        '../storage/projects/October2021/3mLmTKcoutAZied6dgeZ-cropped.jpg',
        '../storage/projects/October2021/lQtYzDlj4aYk3saMrTyV-cropped.webp',
        '../storage/projects/October2021/fk0FD8AglC2uM4TP6YQw-cropped.jpg'
    ];

    const catalogue = document.createElement('section');
    catalogue.className = 'solution-subcatalogue';

    const heading = document.createElement('div');
    heading.className = 'solution-subcatalogue__heading';
    const title = document.createElement('h2');
    title.textContent = 'Nos sous-solutions';
    heading.append(title);

    const grid = document.createElement('div');
    grid.className = 'solution-subcatalogue__grid';

    subSolutions.forEach(function (solution, index) {
        const [href, name, description] = solution;
        const card = document.createElement('article');
        card.className = 'solution-card';

        const imageLink = document.createElement('a');
        imageLink.className = 'solution-card__image';
        imageLink.href = href;
        const image = document.createElement('img');
        image.src = images[index % images.length];
        image.alt = 'Découvrir ' + name;
        image.loading = 'lazy';
        imageLink.append(image);

        const body = document.createElement('div');
        body.className = 'solution-card__body';
        const cardTitle = document.createElement('h3');
        const titleLink = document.createElement('a');
        titleLink.href = href;
        titleLink.textContent = name;
        cardTitle.append(titleLink);

        const text = document.createElement('p');
        text.textContent = description;

        const cardLink = document.createElement('a');
        cardLink.className = 'solution-card__link';
        cardLink.href = href;
        cardLink.append(document.createTextNode('Découvrir'));
        const arrow = document.createElement('span');
        arrow.setAttribute('aria-hidden', 'true');
        arrow.textContent = '→';
        cardLink.append(arrow);

        body.append(cardTitle, text, cardLink);
        card.append(imageLink, body);
        grid.append(card);
    });

    catalogue.append(heading, grid);
    hero.after(catalogue);
}());
