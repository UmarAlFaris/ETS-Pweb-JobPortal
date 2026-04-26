'use strict';

function getCheckedValues(nodeList) {
    const values = [];
    for (const input of nodeList) {
        if (input && input.checked) {
            values.push(String(input.value || '').trim().toLowerCase());
        }
    }
    return values;
}

function applyFilters(cards, categoryInputs, locationInputs) {
    const selectedCategories = getCheckedValues(categoryInputs);
    const selectedLocations = getCheckedValues(locationInputs);

    for (const card of cards) {
        const cardCategory = String(card?.dataset?.category || '').trim().toLowerCase();
        const cardLocation = String(card?.dataset?.location || '').trim().toLowerCase();

        const matchesCategory =
            selectedCategories.length === 0 || selectedCategories.includes(cardCategory);
        const matchesLocation =
            selectedLocations.length === 0 || selectedLocations.includes(cardLocation);

        const shouldShow = matchesCategory && matchesLocation;
        card.classList.toggle('hidden', !shouldShow);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const filterContainer = document.querySelector('.filter-container');
    const cards = Array.from(document.querySelectorAll('.job-card'));

    const categoryInputs = Array.from(
        document.querySelectorAll('input[type="checkbox"][name="category"]')
    );
    const locationInputs = Array.from(
        document.querySelectorAll('input[type="checkbox"][name="location"]')
    );

    if (cards.length === 0 || (!filterContainer && categoryInputs.length === 0 && locationInputs.length === 0)) {
        return;
    }

    const run = () => applyFilters(cards, categoryInputs, locationInputs);

    if (filterContainer) {
        filterContainer.addEventListener('change', (event) => {
            const target = event.target;
            if (target && target.matches('input[type="checkbox"]')) {
                run();
            }
        });
    } else {
        for (const input of [...categoryInputs, ...locationInputs]) {
            input.addEventListener('change', run);
        }
    }

    run();
});
