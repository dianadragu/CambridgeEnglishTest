//PRIMUL SET
function getScore(){
    const correct = document.getElementsByClassName('correct');
    const wrong = document.getElementsByClassName('wrong');
    const wrong1 = document.getElementsByClassName('wrong1');
    
    var correctansw = 0; //2 puncte pt fiecare intrebare

    //se trece prin toate intrebarile
    for(var i = 1; i <= 5; i++) {
        var QsName = document.getElementsByName('q'+i);

        //se verifica toate intrebarile
        for(x = 0; x < QsName.length; x++){
        var QsValue = QsName[x];

            if(QsValue.value == "correct" && QsValue.checked)
                {
                    correctansw+=2;
                } 
            
        }  
     
    }

    document.getElementById("results1").innerHTML = "SCORE: " + correctansw + "/10";

    for(var i = 0; i < correct.length; i++){
        correct[i].style.backgroundColor = "rgb(34, 234, 34, 0.7)";
    }
 
    for(j=0;j<wrong1.length;j++){
        if(wrong1[j].checked == true){
            wrong[j].style.backgroundColor = "rgb(255, 0, 0, 0.7)";
        }
    }
          
    
    sessionStorage.setItem("score1", JSON.stringify(correctansw));
} 


//AL DOILEA SET
function getResults(){
    var y=0 //punctajul 

    //denumim variabilile
    var q1=document.getElementById('q1').value;
    var q2=document.getElementById('q2').value;
    var q3=document.getElementById('q3').value;
    var q4=document.getElementById('q4').value;
    var q5=document.getElementById('q5').value;
    var q6=document.getElementById('q6').value;
    var q7=document.getElementById('q7').value;
    var q8=document.getElementById('q8').value;
    var q9=document.getElementById('q9').value;
    var q10=document.getElementById('q10').value;
    var q11=document.getElementById('q11').value;
    var q12=document.getElementById('q12').value;
    var q13=document.getElementById('q13').value;
    var q14=document.getElementById('q14').value;
    var q15=document.getElementById('q15').value;

    const hello = document.querySelectorAll('.mystyle');

    //am pus conditiile

    if(q1 == "SINCE"){y+=2;} 
        else{
                hello[0].style.borderColor = "red";
            }
        
    if(q2 == "TOOK"){y+=2;} 
        else{
                hello[1].style.borderColor = "red";
    }

    if(q3 == "RATHER"){y+=2;} 
        else{
                hello[2].style.borderColor = "red";
    }

    if(q4 == "OFF"){y+=2;} 
        else{
                hello[3].style.borderColor = "red";
    }

    if(q5 == "MEMORABLE"){y+=2;} 
        else{
                hello[4].style.borderColor = "red";
    }

    if(q6 == "PROVED"){y+=2;} 
        else{
                hello[5].style.borderColor = "red";
    }

    if(q7 == "VARIETY"){y+=2;} 
        else{
                hello[6].style.borderColor = "red";
    }

    if(q8 == "ENJOYMENT"){y+=2;} 
        else{
                hello[7].style.borderColor = "red";
    }

    if(q9 == "SAFETY"){y+=2;} 
        else{
                hello[8].style.borderColor = "red";
    }

    if(q10 == "UNUSUAL"){y+=2;} 
        else{
                hello[9].style.borderColor = "red";
    }

    if(q11 == "RIDERS"){y+=2;} 
        else{
                hello[10].style.borderColor = "red";
    }

    if(q12 == "LOOKING FORWARD TO HEARING"){y+=2;} 
        else{
                hello[11].style.borderColor = "red";
    }

    if(q13 == "SEE THE POINT IN BUYING"){y+=2;} 
        else{
                hello[12].style.borderColor = "red";
    }

    if(q14 == "WAS NOT AS EXPENSIVE" ){y+=2;} 
        else{
                hello[13].style.borderColor = "red";
    }

    if(q15 == "WISH THAT I COULD COME"){y+=2;} 
        else{
                hello[14].style.borderColor = "red";
    }
    


    document.getElementById("results2").innerHTML = "SCORE: " + y + "/30";

    sessionStorage.setItem("score2", JSON.stringify(y));
}

//AL TREILEA SET
function f(){
    const corrected = document.getElementsByClassName('corrected');
    const wronged = document.getElementsByClassName('wronged');
    const wrong2 = document.getElementsByClassName('wrong2');
    
    var results = 0;

    for(var i = 1; i <= 5; i++) {
        var answers = document.getElementsByName('answer'+i);

        for(y = 0; y < answers.length; y++){
            var answerValue = answers[y];

                if(answerValue.value == "correct" && answerValue.checked)
                    {
                        results+=2;
                    } 
        }  
    }
    document.getElementById("results3").innerHTML = "SCORE:" + results + "/20";  

    for(var i = 0; i < corrected.length; i++){
        corrected[i].style.backgroundColor = "rgb(34, 234, 34, 0.7)";
    }
 
    for(j = 0; j < wrong2.length; j++){
        if(wrong2[j].checked == true){
            wronged[j].style.backgroundColor = "rgb(255, 0, 0, 0.7)";
        }
    }
        
    sessionStorage.setItem("score3", JSON.stringify(results));                
}

//AL PATRULEA SET
function g(){
    var points = 0;

    var p1 = true;
    var p2 = true;
    var p3 = true;
    var p4 = true;
    var p5 = true;
    var p6 = true;
    var p7 = true;
    var p8 = true;
    var p9 = true;
    var p10 = true;
    var p11 = true;
    var p12 = true;
    var p13 = true;
    var p14 = true;
    var p15 = true;

    var hi1 = document.getElementById('hi1');
    var hi2 = document.getElementById('hi2');
    var hi3 = document.getElementById('hi3');
    var hi4 = document.getElementById('hi4');
    var hi5 = document.getElementById('hi5');
    var hi6 = document.getElementById('hi6');
    var hi7 = document.getElementById('hi7');
    var hi8 = document.getElementById('hi8');
    var hi9 = document.getElementById('hi9');
    var hi10 = document.getElementById('hi10');
    var hi11= document.getElementById('hi11');
    var hi12= document.getElementById('hi12');
    var hi13= document.getElementById('hi13');
    var hi14= document.getElementById('hi14');
    var hi15= document.getElementById('hi15');

    
    var elemente1 = document.getElementsByClassName('wrong1');
    var elemente2 = document.getElementsByClassName('wrong2');
    var elemente3 = document.getElementsByClassName('wrong3');
    var elemente4 = document.getElementsByClassName('wrong4');
    var elemente5 = document.getElementsByClassName('wrong5');
    var elemente6 = document.getElementsByClassName('wrong6');
    var elemente7 = document.getElementsByClassName('wrong7');
    var elemente8 = document.getElementsByClassName('wrong8');
    var elemente9 = document.getElementsByClassName('wrong9');
    var elemente10 = document.getElementsByClassName('wrong10');
    var elemente11 = document.getElementsByClassName('wrong11');
    var elemente12 = document.getElementsByClassName('wrong12');
    var elemente13 = document.getElementsByClassName('wrong13');
    var elemente14 = document.getElementsByClassName('wrong14');
    var elemente15 = document.getElementsByClassName('wrong15');

    for(d = 0; d < elemente1.length; d++){
        if(elemente1[d].selected == true){
            hi1.style.borderColor = "red";
            p1 = false;
        }
    }

    for(d = 0; d < elemente2.length; d++){
        if(elemente2[d].selected == true){
            hi2.style.borderColor = "red";
            p2 = false;
        }
    }

    for(d = 0; d < elemente3.length; d++){
        if(elemente3[d].selected == true){
            hi3.style.borderColor = "red";
            p3 = false;
        }
    }

    for(d = 0; d < elemente3.length; d++){
        if(elemente3[d].selected == true){
            hi3.style.borderColor = "red";
            p3 = false;
        }
    }

    for(d = 0; d < elemente4.length; d++){
        if(elemente4[d].selected == true){
            hi4.style.borderColor = "red";
            p4 = false;
        }
    }

    for(d = 0; d < elemente5.length; d++){
        if(elemente5[d].selected == true){
            hi5.style.borderColor = "red";
            p5 = false;
        }
    }

    for(d = 0; d < elemente6.length; d++){
        if(elemente6[d].selected == true){
            hi6.style.borderColor = "red";
            p6 = false;
        }
    }

    for(d = 0; d < elemente7.length; d++){
        if(elemente7[d].selected == true){
            hi7.style.borderColor = "red";
            p7 = false;
        }
    }

    for(d = 0; d < elemente8.length; d++){
        if(elemente8[d].selected == true){
            hi8.style.borderColor = "red";
            p8 = false;
        }
    }

    for(d = 0; d < elemente9.length; d++){
        if(elemente9[d].selected == true){
            hi9.style.borderColor = "red";
            p9 = false;
        }
    }

    for(d = 0; d < elemente10.length; d++){
        if(elemente10[d].selected == true){
            hi10.style.borderColor = "red";
            p10 = false;
        }
    }

    for(d = 0; d < elemente11.length; d++){
        if(elemente11[d].selected == true){
            hi11.style.borderColor = "red";
            p11 = false;
        }
    }

    for(d = 0; d < elemente12.length; d++){
        if(elemente12[d].selected == true){
            hi12.style.borderColor = "red";
            p12 = false;
        }
    }

    for(d = 0; d < elemente13.length; d++){
        if(elemente13[d].selected == true){
            hi13.style.borderColor = "red";
            p13 = false;
        }
    }

    for(d = 0; d < elemente14.length; d++){
        if(elemente14[d].selected == true){
            hi14.style.borderColor = "red";
            p14 = false;
        }
    }

    for(d = 0; d < elemente15.length; d++){
        if(elemente15[d].selected == true){
            hi15.style.borderColor = "red";
            p15 = false;
        }
    }

    if(p1 == true) {points += 2;}
    if(p2 == true) {points += 2;}
    if(p3 == true) {points += 2;}
    if(p4 == true) {points += 2;}
    if(p5 == true) {points += 2;}
    if(p6 == true) {points += 2;}
    if(p7 == true) {points += 2;}
    if(p8 == true) {points += 2;}
    if(p9 == true) {points += 2;}
    if(p10 == true) {points += 2;}
    if(p11 == true) {points += 2;}
    if(p12 == true) {points += 2;}
    if(p13 == true) {points += 2;}
    if(p14 == true) {points += 2;}
    if(p15 == true) {points += 2;}     
  
    document.getElementById("results4").innerHTML = "SCORE: " + points + "/30";

    sessionStorage.setItem("score4", JSON.stringify(points));    
}

//ULTIMUL SET
function h(){

    const light = document.querySelectorAll('.en');

    var z=0 //punctajul 

    //denumim variabilile
    var p1=document.getElementById('p1').value;
    var p2=document.getElementById('p2').value;
    var p3=document.getElementById('p3').value;
    var p4=document.getElementById('p4').value;
    var p5=document.getElementById('p5').value;
    var p6=document.getElementById('p6').value;
    var p7=document.getElementById('p7').value;
    var p8=document.getElementById('p8').value;
    var p9=document.getElementById('p9').value;
    var p10=document.getElementById('p10').value;
   

    //am pus conditiile
    if(p1 == "came"){z++;} else{ light[0].style.borderColor = "red";}
    if(p2 == "bought"){z++;} else{ light[1].style.borderColor = "red";}
    if(p3 == "had eaten"){z++;} else{ light[2].style.borderColor = "red";}
    if(p4 == "are you doing"){z++;} else{ light[3].style.borderColor = "red";}
    if(p5 == "was waiting"){z++;} else{ light[4].style.borderColor = "red";}
    if(p6 == "will call"){z++;} else{ light[5].style.borderColor = "red";}
    if(p7 == "will have left"){z++;} else{ light[6].style.borderColor = "red";}
    if(p8 == "will be sleeping"){z++;} else{ light[7].style.borderColor = "red";}
    if(p9 == "taking"){z++;} else{ light[8].style.borderColor = "red";}
    if(p10 == "didn't mean"){z++;} else{ light[9].style.borderColor = "red";}
    
    document.getElementById("results5").innerHTML = "SCORE: " + z + "/10";

    sessionStorage.setItem("score5", JSON.stringify(z));
}

//SCORUL FINAL
function finalscore(){
    var s = 0;

    let score1 = JSON.parse(sessionStorage.getItem('score1'));
    let score2 = JSON.parse(sessionStorage.getItem('score2'));
    let score3 = JSON.parse(sessionStorage.getItem('score3'));
    let score4 = JSON.parse(sessionStorage.getItem('score4'));
    let score5 = JSON.parse(sessionStorage.getItem('score5'));

    s = score1 + score2 + score3 + score4 + score5;

    document.getElementById("textaici").innerHTML = "Your final score is " + s + "/100";
}


