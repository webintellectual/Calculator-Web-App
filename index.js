let str = "";
let bttns = document.querySelectorAll("button")

// console.log(eval("10.1*10"));

Array.from(bttns).forEach((bttn)=>{
    bttn.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            str = eval(str);
            document.querySelector('input').value = str;
        }
        else if(e.target.innerHTML == 'CLEAR'){
            str = "";
            document.querySelector('input').value = str;
        }
        else if(e.target.innerHTML == "\u2190"){
            str = str.substring(0,str.length-1);
            document.querySelector('input').value = str;
        }
        else{
            str = str + e.target.innerHTML;
            document.querySelector('input').value = str;
        }
    })
})
