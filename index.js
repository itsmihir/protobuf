const Schema = require("./sports_pb.js")

const cricket = new Schema.Sport();
cricket.setName("Cricket");
cricket.setIsTeamRequired(true)
cricket.setNumberOfPlayersRequired(11);


const sports = new Schema.Sports();
sports.addSports(cricket);

// Serialize the object to binary
const bytes = sports.serializeBinary();
console.log(bytes);


// Deserialize the object from binary
const data = Schema.Sports.deserializeBinary(bytes);
console.log(data.toObject());