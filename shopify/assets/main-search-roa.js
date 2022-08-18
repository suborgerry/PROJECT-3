((window, undefined) => {
    const snize_search_results_page = '/search';

    if (window.location.pathname.indexOf(snize_search_results_page) !== -1 && typeof window.Shopify !== 'undefined') {
        const snize_search_results_page_classes = ' snize-results-page';
        const theme_name = Shopify.theme.name.toLowerCase();
        const theme_store_id = typeof Shopify.theme.theme_store_id !== 'undefined' && Shopify.theme.theme_store_id;

        const themes_for_css_hacking = Array(
            Array('alchemy', 657),
            Array('artisan', 856),
            Array('atlantic', 566),
            Array('blockshop', 606),
            Array('boost', 863),
            Array('boundless', 766),
            Array('brooklyn', 730),
            Array('california', 691),
            Array('canopy', 732),
            Array('capital', 812),
            Array('cascade', 859),
            Array('colors', 757),
            Array('crave', 1363),
            Array('craft', 1368),
            Array('dawn', 887),
            Array('debut', 796),
            Array('district', 735),
            Array('editions', 457),
            Array('editorial', 827),
            Array('empire', 838),
            Array('expression', 230),
            Array('flow', 801),
            Array('galleria', 851),
            Array('grid', 718),
            Array('handy', 826),
            Array('icon', 686),
            Array('impulse', 857),
            Array('ira', 790),
            Array('kagami', 747),
            Array('kingdom', 725),
            Array('label', 773),
            Array('launch', 793),
            Array('local', 833),
            Array('loft', 846),
            Array('lorenza', 798),
            Array('maker', 765),
            Array('masonry', 450),
            Array('minimal', 380),
            Array('mobilia', 464),
            Array('modular', 849),
            Array('motion', 847),
            Array('mr parker', 567),
            Array('narrative', 829),
            Array('pacific', 705),
            Array('palo alto', 777),
            Array('pipeline', 739),
            Array('pop', 719),
            Array('prestige', 855),
            Array('providence', 587),
            Array('reach', 853),
            Array('retina', 601),
            Array('sense', 1356),
            Array('showcase', 677),
            Array('showtime', 687),
            Array('simple', 578),
            Array('split', 842),
            Array('startup', 652),
            Array('story', 864),
            Array('supply', 679),
            Array('sunrise', 57),
            Array('symmetry', 568),
            Array('trademark', 816),
            Array('vantage', 459),
            Array('venture', 775),
            Array('venue', 836),
            Array('vogue', 808),
            Array('warehouse', 871)
        );

        let theme_name_for_hacking = '';

        themes_for_css_hacking.forEach((theme_array) => {
            theme_array.forEach((value, index) => {
                if (
                    (index === 0 && theme_name.indexOf(value) !== -1) ||
                    (index === 1 && value === theme_store_id)
                ) {
                    theme_name_for_hacking = theme_array.shift();
                }
            });
        });

        if (theme_name_for_hacking.length > 0) {
            snize_search_results_page_classes += ' snize-' + theme_name_for_hacking.replace(/ /g, '-') + '-css-fix';
        }

        document.body.className += snize_search_results_page_classes;
    }

    const snize_results = document.getElementById('snize_results');

    if (snize_results != null && snize_results != undefined && snize_results.innerHTML != '') {
        return;
    }

    if (window.location.href.indexOf('collection=') != -1) {
        const elements = document.getElementsByClassName('snize-search-results-page-title');
        const elementsArray = Array.prototype.slice.call(elements);

        elementsArray.forEach((domElement) => {
            domElement.style.display = 'none';
        });
    }
})(window);