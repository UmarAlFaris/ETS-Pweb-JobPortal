document.querySelector('.filter-container').addEventListener('change', filterJobs);

filterJobs();

function filterJobs() {
    var i, j;

    var categoryCheckboxes = document.getElementsByName('category');
    var checkedCategories = [];
    for (i = 0; i < categoryCheckboxes.length; i++) {
        if (categoryCheckboxes[i].checked == true) {
            checkedCategories.push(categoryCheckboxes[i].value);
        }
    }

    var locationCheckboxes = document.getElementsByName('location');
    var checkedLocations = [];
    for (i = 0; i < locationCheckboxes.length; i++) {
        if (locationCheckboxes[i].checked == true) {
            checkedLocations.push(locationCheckboxes[i].value);
        }
    }

    var cards = document.getElementsByClassName('job-card');
    
    for (j = 0; j < cards.length; j++) {
        var cardCategory = cards[j].getAttribute('data-category');
        var cardLocation = cards[j].getAttribute('data-location');
        
        var categoryMatch = false;
        var locationMatch = false;

        if (checkedCategories.length == 0 || checkedCategories.indexOf(cardCategory) > -1) {
            categoryMatch = true;
        }

        if (checkedLocations.length == 0 || checkedLocations.indexOf(cardLocation) > -1) {
            locationMatch = true;
        }

        if (categoryMatch == true && locationMatch == true) {
            cards[j].style.display = "block";
        } else {
            cards[j].style.display = "none";
        }
    }
}