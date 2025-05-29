 let currentInput = "";

 function append(value) {
     currentInput += value;
     document.getElementById("display").value = currentInput;
 }

 function clearnum() {
     currentInput = "";
     document.getElementById("display").value = "";
 }

 function del() {
     currentInput = currentInput.slice(0, -1);
     document.getElementById("display").value = currentInput
 }

 function calculate() {
     try {
         let result;
         let operatorFound = currentInput.match(/[-+=*/%]/);
         if (operatorFound) {
             let operator = operatorFound[0];
             let parts = currentInput.split(operator);
             let a = parseFloat(parts[0]);
             let b = parseFloat(parts[1]);
             switch (operator) {
                 case "+":
                     result = a + b;
                     break;
                 case "-":
                     result = a - b;
                     break;
                 case "*":
                     result = a * b;
                     break;
                 case "/":
                     result = a / b;
                     break;
                 case "%":
                     result = a % b;
                     break;
                 default:
                     throw new Error("Invalid Error ")
             }
             currentInput = result.toString();
             display.value = currentInput;

         }
     } catch (error) {
         display.value = "ERROR";
     }
 }