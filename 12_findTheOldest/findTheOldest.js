// function to add yearOfDeath to persons missing it
function correct(person) {

    const currentYear = (new Date()).getFullYear();

    if (person.yearOfDeath === undefined) {
        person['yearOfDeath'] = currentYear;
    }

    return person;
}

const findTheOldest = function(people) {

    correctedPeople = people.map(correct)

    oldest = correctedPeople.sort(function(a, b) {

        const lastPerson = a.yearOfDeath - a.yearOfBirth;
        const nextPerson = b.yearOfDeath - b.yearOfBirth;

        return lastPerson > nextPerson ? -1 : 1;
    })
    
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
