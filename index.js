

let number = document.getElementById("numberArea");
let button = document.querySelectorAll("button");



button.forEach(button => {

    button.addEventListener("click",() => {
        let value = button.innerText;

      switch(value){
        case "C" :
            number.value = "";
            break;
            case "←" : number.value = number.value.slice(0,-1);break ;           
        case "%" : number.value = (parseFloat(number.value)/100).toString();break;
        case "+":
        case "-":
        case "x":   
        case"/" :
        case "00" : 
        case "1":
        case "2":
        case "3":  
        case "4": 
        case "5":
          case"6":
          case "7":
            case "8":
              case "9":
                case "0":
                  case ".":
                  if(number.value === "0" && !isNaN(value) ) {
                        number.value = value;
                    } else {
                        number.value += value;
                  };
                 break;
        case "=" : 
                  let expression = number.value.replace(/x/g,"*");
                  try {
                    number.value = math.evaluate(expression);
                  } catch(error){
                     number.value = "Error";
                  }
                    break;
        default: number.value += value;break;
      }
    });
});
