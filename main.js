const num = +prompt("raqam kiriting");
let newText = document.createElement("p")
switch(num){
    case 1:
        newText.textContent = "yanvar";
        document.body.appendChild(newText)
        newText.style.backgroundColor = "red";
        newText.style.color = "white";
        document.body.style.backgroundColor = "black"
        break;
     case 2:
            newText.textContent = "fevral";
            document.body.appendChild(newText)
            newText.style.backgroundColor = "black";
            newText.style.color = "white";
            document.body.style.backgroundColor = "red"
            break;
            case 3:
                newText.textContent = "mart";
                document.body.appendChild(newText)
                newText.style.backgroundColor = "green";
                newText.style.color = "white";
                document.body.style.backgroundColor = "yellow"
                break;
                case 4:
                    newText.textContent = "aprel";
                    document.body.appendChild(newText)
                    newText.textContent = "mart";
                    newText.style.backgroundColor = "pink";
                    newText.style.color = "white";
                    document.body.style.backgroundColor = "green"
                    break;

                    case 5:
                        newText.textContent = "may";
                        document.body.appendChild(newText)
                        newText.style.backgroundColor = "yellow";
                        newText.style.color = "white";
                        document.body.style.backgroundColor = "green"
                        
                        break;
                        
                    case 6:
                        newText.textContent = "iyun";
       document.body.appendChild(newText)
       newText.style.backgroundColor = "";
       newText.style.color = "white";
       document.body.style.backgroundColor = "green"
                        break;
                        
                    case 7:
                        newText.textContent = "iyul";
                        document.body.appendChild(newText)
                        newText.style.backgroundColor = "yellow";
                        newText.style.color = "white";
                        document.body.style.backgroundColor = "green"
                        default:
                            newText.textContent = ("bu oy kiritilmagan");
                        document.body.appendChild(newText)
}           