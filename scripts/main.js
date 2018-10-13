var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
window.onload = function() {
      var heading1 = document.createElement("h2");
      var heading1Text= document.createTextNode("Politics in Norway");
      heading1.appendChild(heading1Text);
      document.body.appendChild(heading1);
   
      var heading1Parag = document.createElement("p");
      var heading1ParagText = document.createTextNode("Norway is a constitutional monarchy heading represented by King Harald V and headed by prime minister Erna Solberg");
      heading1Parag.appendChild(heading1ParagText);
      document.body.appendChild(heading1Parag);

}

var norwayImage = document.querySelector("img");
document.querySelector("img").onclick = () => {
    var mySrcValue = document.querySelector("img").getAttribute("src");// Get the img src's value
    if(mySrcValue === "https://thumb1.shutterstock.com/display_pic_with_logo/1276918/131563364/stock-photo-norway-green-landscape-rural-houses-and-yacht-in-cruise-port-olden-norwegian-fjords-131563364.jpg") {
        norwayImage.setAttribute("src","https://thumb1.shutterstock.com/display_pic_with_logo/1276918/487651600/stock-photo-alesund-norway-sept-seafront-of-town-and-sea-port-alesund-norway-487651600.jpg");
    } else {
        norwayImage.setAttribute("src","https://thumb1.shutterstock.com/display_pic_with_logo/1276918/131563364/stock-photo-norway-green-landscape-rural-houses-and-yacht-in-cruise-port-olden-norwegian-fjords-131563364.jpg");
    }
} 

var myButton = document.querySelector('button');


function createUserName() {
    var visitor = prompt("Enter your name, please!");
    localStorage.setItem("user", visitor);
    myHeading.textContent = "Morning " + visitor;
}


if(localStorage.getItem("user")) {
    var storedName  = localStorage.getItem("user");
    myHeading.textContent = "Morning, " + storedName;
} else {
    createUserName();
}


myButton.onclick = function() {
  createUserName();
}

 
 
 
document.querySelector("button").onclick = () => {
    createUserName();
}

window.alert("Here we go~");