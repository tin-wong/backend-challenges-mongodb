require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: Number,
  favoriteFoods: [String]
})

const Person = mongoose.model('Person', personSchema);

const createAndSavePerson = (done) => {
  let person1 = new Person({name: "Person 1", age: 30, favoriteFoods:["noodles"]});
  person1.save().then(doc => {
    done(null, doc);
  }).catch(err => {
    console.error(err);
  })
};

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople).then(doc => {
    done(null, doc);
  }).catch(err => {
    console.error(err);
  })
};

const findPeopleByName = (personName, done) => {
  Person.find({name: personName}).then(doc => {
    done(null, doc);
  }).catch(err => {
    console.error(err);
  })
};

const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods: food}).then(doc => {
    done(null, doc);
  }).catch(err => {
    console.error(err);
  })
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;