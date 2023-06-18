
Num1 =0;
Num2 =0;
Num3 =0;
Score = 0

Bet = document.getElementById("50");
Bet1 = document.getElementById("100");
Bet2 = document.getElementById("200");
score = document.getElementById("Score");
score1 = document.getElementById("Score1");
Result = document.getElementById("Result");

   
Generate_Num = function(Type,Num_Check){
 if (Type==1){
  Num = Math.floor(Math.random() * 13)+1;
 }else{
  while (true){
    Num = Math.floor(Math.random() * 10)+1;
    if(Num != Num_Check){
	  break;
	}
  }
 }
 return Num;
}

Start_Game = function(){
  Section1 = document.getElementById("Base1");
  Section1.setAttribute("style","display:none;");
  
  Section2 = document.getElementById("Base2");
  Section2.setAttribute("style","display:flex;");
  
  Section3 = document.getElementById("Base3");
  Section3.setAttribute("style","display:none;");
  
  Section4 = document.getElementById("Base4");
  Section4.setAttribute("style","display:none;");
  
  Flip_Button = document.getElementById("Flip");
  Flip_Button.setAttribute("style","display:block;");
  
  Home = document.getElementById("HOME");
  Home.setAttribute("style","display:none;");
  
  Play_Agian = document.getElementById("PLAY");
  Play_Agian.setAttribute("style","display:none;");
  
  Card1 = document.getElementById("Card1");
  Card1.src = 'BACKGROUND.png';
  
  Card2 = document.getElementById("Card2");
  Card2.src = 'BACKGROUND.png';
  
  Card3 = document.getElementById("Card3");
  Card3.src = 'BACKGROUND.png';
  
  if (Bet.checked == true){
    Score = 50;
  }else if (Bet1.checked == true){
    Score = 100;
  }else{
    Score = 200;
  }
  
  Result.innerHTML  = "";

  score.innerHTML = "Rs."+Score;
}
  
Restart_Game = function(){
  console.log(Score);
  if (Score < 20){
    Game_Over();
  }else{
    Card1 = document.getElementById("Card1");
    Card1.src = 'BACKGROUND.png';
  
    Card2 = document.getElementById("Card2");
    Card2.src = 'BACKGROUND.png';
  
    Card3 = document.getElementById("Card3");
    Card3.src = 'BACKGROUND.png';
  
    Flip_Button = document.getElementById("Flip");
    Flip_Button.setAttribute("style","display:block;");
  
    Home = document.getElementById("HOME");
    Home.setAttribute("style","display:none;");
  
    Play_Agian = document.getElementById("PLAY");
    Play_Agian.setAttribute("style","display:none;");
  
    Result.innerHTML  = "";
	}

}

Tutorial = function(){
  Section1 = document.getElementById("Base1");
  Section1.setAttribute("style","display:none;");
  
  Section4 = document.getElementById("Base4");
  Section4.setAttribute("style","display:flex;");
}

Game_Over = function(){
  Section2 = document.getElementById("Base2");
  Section2.setAttribute("style","display:none;");
  
  Section3 = document.getElementById("Base3");
  Section3.setAttribute("style","display:block;");
  
  score1.innerHTML = "Rs."+Score + "  Left";
}

Go_Home = function(){
  Section1 = document.getElementById("Base1");
  Section1.setAttribute("style","display:flex;");
  
  Section2 = document.getElementById("Base2");
  Section2.setAttribute("style","display:none;");
  
  Section3 = document.getElementById("Base3");
  Section3.setAttribute("style","display:none;");
}
  
Flip_Card = function(){
  Num1 = Generate_Num (1,0);
  Num2 = Generate_Num (2,Num1)
   
  Flip_Button = document.getElementById("Flip");
  Flip_Button.setAttribute("style","display:none;");
  
  Flip_Button1 = document.getElementById("INB");
  Flip_Button1.setAttribute("style","display:block;");
  
  Flip_Button2 = document.getElementById("NINB");
  Flip_Button2.setAttribute("style","display:block;");
  
  Card1 = document.getElementById("Card1");
  Card1.src = Num1+'.png';
  
  Card3 = document.getElementById("Card3");
  Card3.src = Num2+'.png';
}

Check = function(Type){
  Input = Type;
  Pointer = false
  Num3 = Generate_Num (1,0);
  Win = false;
  Lose = false;
  Diff  = 0;
  Reduction = 0;

  Card2 = document.getElementById("Card2");
  Card2.src = Num3+'.png';
  
  Flip_Button1 = document.getElementById("INB");
  Flip_Button1.setAttribute("style","display:none;");
  
  Flip_Button2 = document.getElementById("NINB");
  Flip_Button2.setAttribute("style","display:none;");
  
  if (Num1 > Num2){
    Diff = Num1 - Num2;
    if (Num3 < Num1 && Num3 > Num2){
	  Pointer = true;
	}else{
	  Pointer = false;
	}
  }else if (Num2 > Num1){
    Diff = Num2 - Num1;
    if (Num3 < Num2 && Num3 > Num1){
	  Pointer = true;
	}else{
	  Pointer = false;
	}
  }
  if ((Type == 1 && Pointer == true)|| (Type == 2 && Pointer == false)){
    Win = true;
  }else{
    Lose=true;
  }
  
  if (Diff >= 8 && Type == 2 && Pointer == false){
    Score += 20;
	Reduction = 20;
  }else if (Diff >= 5 && Diff <8 && Type == 2 && Pointer == false){
    Score += 10;
	Reduction = 10;
  }else  if (Diff >= 1 && Diff <5 && Type == 2 && Pointer == false){
    Score += 5;
	Reduction = 5;
  }
  
  if (Diff >= 8 && Type == 1 && Pointer == false){
    Score -= 5;
	Reduction = -5;
  }else if (Diff >= 5 && Diff <8 && Type == 1 && Pointer == false){
    Score -= 10;
	Reduction = -10;
  }else  if (Diff >= 1 && Diff <5 && Type == 1 && Pointer == false){
    Score -= 20;
	Reduction = -20;
  }
  
  if (Diff >= 8 && Type == 1 && Pointer == true){
    Score += 5;
	Reduction = 5;
  }else if (Diff >= 5 && Diff <8 && Type == 1 && Pointer == true){
    Score += 10;
	Reduction = 10;
  }else  if (Diff >= 1 && Diff <5 && Type == 1 && Pointer == true){
    Score += 20;
	Reduction = 20;
  }
  
   if (Diff >= 8 && Type == 2 && Pointer == true){
    Score -= 20;
	Reduction = -20;
  }else if (Diff >= 5 && Diff <8 && Type == 2 && Pointer == true){
    Score -= 10;
	Reduction = -10;
  }else  if (Diff >= 1 && Diff <5 && Type == 2 && Pointer == true){
    Score -= 5;
	Reduction = -5;
  }
 

  score.innerHTML = "Rs."+Score;
  
  if (Pointer == true){
  	  Result.innerHTML = "IN-BETWEEN" + '(' + Reduction + ')';
	}else if (Pointer == false){
	  Result.innerHTML = "NOT IN-BETWEEN" + '(' + Reduction + ')';
	}
  
  Home = document.getElementById("HOME");
  Home.setAttribute("style","display:block;");
  
  Play_Agian = document.getElementById("PLAY");
  Play_Agian.setAttribute("style","display:block;");
  
}

$(document).ready(function(){

      $('.Bet').click(function() {
         $('.Bet').not(this).prop('checked', false);
      });

   });
 

