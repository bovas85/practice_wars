// Setup
var collection = {
    2548: {
      album: "Slippery When Wet",
      artist: "Bon Jovi",
      tracks: [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    2468: {
      album: "1999",
      artist: "Prince",
      tracks: [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    1245: {
      artist: "Robert Palmer",
      tracks: [ ]
    },
    5439: {
      album: "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function update(id, prop, value) {
    if (value !== "" && prop !== "tracks"){
      collection[id][prop] = value;
    }
    if (prop === "tracks") {
      collection[id][prop].push(value);
    }
    if (value === ""){
        delete collection[id][prop];
    }
  return collection;
}
// Alter values below to test your code
update(1245, "tracks", "Addicted to Love");

/*
 After update(5439, "artist", "ABBA"), artist should be "ABBA"
 After update(2548, "artist", ""), artist should not be set
 After update(1245, "tracks", "Addicted to Love"), tracks should have "Addicted to Love" as the last element.
 After update(2548, "tracks", ""), tracks should not be set
*/