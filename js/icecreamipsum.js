
var flavours = ["vanilla", "white chocolate", "chocolate", "mint", "peppermint", "banana", "blueberry", "cheesecake", "pecan", "butter", "butterscotch", "raspberry", "caramel", "cherry", "chocolate chip", "marshmellow", "coffee", "mocha", "cookies and cream", "cake", "maple", "nut", "orange", "peanut butter", "apple", "shortcake", "almond", "caramel"];

var descriptions = ["dessert", "frozen", "flavour", "ice", "cone", "cup", "scoop", "toppings", "sundae", "soft serve", "sorbet", "froyo", "gelato", "popsicle", "sherbet", "sorbet", "chunky", "snow cones"];

function randomNumber(x, y)
{
  return Math.floor(Math.random() * (y - x + 1)) + x;
}

function getAWord(includeFlavours, includeDesc)
{
  var listofwords = [];
  
  if(includeFlavours == true) {listofwords = listofwords.concat(flavours);}
  if(includeDesc == true) {listofwords = listofwords.concat(descriptions);}
  
  console.log(includeFlavours + " " + includeDesc);
  return listofwords[randomNumber(0, listofwords.length - 1)];
}

function formSentence(typeOfWords)
{
  var x = randomNumber(4, 13);
  var sentence = "";
  
  for(var i = 0; i < x; i++)
  {
    if(typeOfWords == 0)
    {
      var getWord = getAWord(true, true);
    }
    else if(typeOfWords == 1)
    {
        var getWord = getAWord(true, false);
    }
    
    console.log(typeOfWords + " / " + getWord);
    sentence += getWord;
    
    if(randomNumber(0, 7) == 0)
    {
      sentence += ","
    }
    
    if(i != x-1)
    {
      sentence += " ";
    }
  }
  sentence += ". ";
  sentence = sentence.substr(0,1).toUpperCase() + sentence.substr(1).toLowerCase();
  
  return sentence;
}

function formParagraph(numberOfSentences, typeOfWords)
{
  var paragraph = "<p>";
  
  for(var i = 0; i < numberOfSentences; i++)
  {
    paragraph += formSentence(typeOfWords);
  }
  
  paragraph += "</p>";
  
  return paragraph;
}


function generateText(p, s, t) 
{
  console.log("Generating " + p + " paragraph(s), each containing " + s + " sentence(s). Type: " + t);
  
  var generated = "";
  
  for(var i = 0; i < p; i++)
  {
    generated += formParagraph(s, t);
  }
  
  document.getElementById("output").innerHTML = generated;
  
  document.getElementById("output").className = "output";
}