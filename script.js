// Assignment Code
  var generateBtn = document.querySelector("#generate"); // look for a element #generate (id) 
  // console.log (generateBtn) // 
// Write password to the #password input

function generatePassword() {

  var lenghtpassword = prompt(" select the lenght of the password, make sure it is between 8 to 128 chracteres");
  console.log(lenghtpassword);

  var lenght=parseInt(lenghtpassword) // turn input in number 
  console.log(lenght);
  
  // certify the password is between 8 and 128 chracteres 
  while(lenght>128 || lenght<8) {
  var lenghtpassword = prompt(" select the lenght of the password, make sure it is between 8 to 128 chracteres");
  console.log(lenghtpassword);

  var lenght=parseInt(lenghtpassword)

  }

  
//ask if they want a lowercase 
  var lowercase = confirm("Do you want to add lowercase to your password?");
  console.log(lowercase);

//ask if they want a upper case
  var uppercase = confirm("Do you want to add uppercase to your password?");
  console.log(uppercase);

  // ask if they want a special chracter 
  var special = confirm("Do you want to add special chracter to your password?");
  console.log(special);
  //Math.random, create an array or string with number and characters 
  // ask if they want to add numbers 
  var numeric = confirm("Do you want to add a numeric chracter to your password?");
  console.log(numeric);

  while(lowercase+uppercase+special+numeric==0) {
    var lenghtpassword = confirm(" >>>> Please select at least one of the options <<<< ");

    //ask if they want a lowercase 
  var lowercase = confirm("Do you want to add lowercase to your password?");
  console.log(lowercase);

//ask if they want a upper case
  var uppercase = confirm("Do you want to add uppercase to your password?");
  console.log(uppercase);

  // ask if they want a special chracter 
  var special = confirm("Do you want to add special chracter to your password?");
  console.log(special);
  //Math.random, create an array or string with number and characters 
  // ask if they want to add numbers 
  var numeric = confirm("Do you want to add a numeric chracter to your password?");
  console.log(numeric);


  }


   var lowercaselist = ["a","b","c","d","e","f","g","h","i","j","k"]
   var uppercaselist = ["A","B","C","D","E","F","G","Y","P","Q","S"]
   var speciallist = ["*","&","%","$","#","#","?","+","[","}","/"]
   var numericlist = ["1","2","3","4","5","6","7","8","9","0","8"]

   var passwordText = ""

   var numrandom = Math.floor((Math.random() * 10) + 1);

   console.log( "math random ",+numrandom)
   console.log("testing", + numericlist[2])
 
 for (let i = 0; i < lenght;) {

  if(numeric&&i<lenght){
  var numrandom = Math.floor((Math.random() * 10) + 1);
  console.log( "position",+numrandom)

  console.log("numerico",+numericlist[numrandom] )

  i++;
  passwordText+=numericlist[numrandom];
  

  }

  
  if(uppercase&&i<lenght){

  var numrandom = Math.floor((Math.random() * 10) + 1);
  console.log( "position",+numrandom)

  console.log("uppercase"+uppercaselist[numrandom])
  i++;

  passwordText+=uppercaselist[numrandom];

  }

 

  if(lowercase&&i<lenght){

    var numrandom = Math.floor((Math.random() * 10) + 1);
    console.log( "position",+numrandom)
  
    console.log("lowercase",+lowercaselist[numrandom])
    i++;
    passwordText+=lowercaselist[numrandom];
    }
   

    if(special&&i<lenght){

      var numrandom = Math.floor((Math.random() * 10) + 1);
      console.log( "position",+numrandom)

      console.log("Special case", +speciallist[numrandom])
      i++;
      passwordText+=speciallist[numrandom];
      
      }
   
  


}

generatePassword = passwordText.slice(0, lenght) ; 


return generatePassword;

}




function writePassword() { 
  var password = generatePassword(); // calling the function , this will create the password with the funciton generatepassword and will save under the password var
  var passwordText = document.querySelector("#password"); // its loking for an id #password on the index 

  passwordText.value = password;// show the password 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); // click event , so once the button is clecke is gonna run the funcion writePassword 
