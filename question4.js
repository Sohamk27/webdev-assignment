function calculate(){
    let op1 = document.querySelector('#operand1').value;
    let oprtr = document.querySelector('#operator').value;
    let op2 = document.querySelector('#operand2').value;
    if(op1=="" || op2=="" || oprtr=="") 
    {
        alert("Fill properly values");
    }

    let str = op1 + " " + oprtr + " " + op2 + " = ";
    op1 = parseInt(op1);
    op2 = parseInt(op2);
    
    if(oprtr == '+')
    {
        str = str + (op1 + op2);
        alert(str);
    } else if(oprtr == '-'){
      str = str + (op1 - op2);
      alert(str);
    }
    else if(oprtr == '*')
    {
      str = str + (op1 * op2);
      alert(str);
    }
    else if(oprtr == '/')
    {
      str = str + (op1 / op2);
      alert(str);
    } else 
    {
        alert("Fill correct Values");
    }
}

const btn = document.getElementById('btn');
btn.addEventListener('click', calculate);
