function format() {
    let text = 'http://localhost:8080/planetHotels?planetName='+ document.getElementById("planetName").value +
                                                '&checkInDate=' + document.getElementById("checkInDate").value + 
                                                '&checkOutDate='  + document.getElementById("checkOutDate").value +
                                                '&numberOfPersons=' + document.getElementById("numberOfPersons").value;
    return text;                                            
}

function getAvailableHotels() {
    fetch(format())
    .then(resp => resp.json())
    .then(list => {
        let text = "";

        for (let x in list) {
            let hotel = list[x]

            for (let y in hotel) {
                if (y == "name") {
                    text += "<form action=\"sub/selectedHotel.html\" "
                         + "method=\"GET\" >"
                         + "<input type=\"submit\" "
                         + "name=\"hotelName\" "
                         + "value="
                         + "\"" + hotel[y] + "\" >"
                         + "</form>"
                         + "<br>" ;
                }
                else if (y == "availableRoomTypes") {
                    let roomTypes = hotel[y];
                    
                    for (let z in roomTypes) {
                        let roomType = roomTypes[z];
                        
                        for (let a in roomType) {
                            text += a + " : " + roomType[a] + "<br>";
                        }
                        text += "<br>";
                    }
                } 

                else {
                    text += y + " : " + hotel[y] + "<br>"; 
                } 
          
            }

            text += "<br>" + "<br>";
        }

        return text;
    })
    .then(todo => document.getElementById("demo").innerHTML= todo)
}
