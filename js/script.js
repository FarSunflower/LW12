function name(errname){
  while(errname=="" || errname==null){
  errname=prompt("Please enter your Nickname");
  if(errname=="" || errname==null){
  alert("please entern nick name")};
  }
  alert("Please choose lvl");
return errname;

  }
  
var minus=0, plus=0, count=0, nameU, array1, array2, num1=0, flag=-1;
nameU=name(nameU);
let ranarray=[0,1,2,3,4,5,6,7,8,9];
$("#b1").on("click", function(){
  if(flag!=0){
  ranarray.sort(()=>Math.random()-0.5);
  array1=["Always","Yes","No","Star","Circle","Triangle","Fridge","Sky","Lamp","Table"];
  array2=["завжди","так","ні","зірка","круг","трикутник","холодильник","небо","лампа","стіл"];
  $("#but1").html(array1[ranarray[num1]]);
  $("#stat").html("< "+ 1 +"/" + ranarray.length + " >");
  num1=0;
  num2=num1+1;
  minus=0;
  plus=0;
  $("#plus").html(minus);
  $("#minus").html(minus);
  count=0;
  flag=0;
  $("#b1").css("background", "purple");
  $("#b2").css("background", "white");
  $("#b3").css("background", "white");

  }
})
$("#b2").on("click", function(){
  if(flag!=1){
  ranarray.sort(()=>Math.random()-0.5);
  array1=["Justice","Knowledge","Mirror","Patience","Access","Age","Aim","Allow","Angle","Deep"];
  array2=["справедливість","знання","дзеркало","терпіння","доступ","вік","ціль","дозволяти","кут","глибокий"];
  $("#but1").html(array1[ranarray[num1]]);
  $("#stat").html("< "+ 1 +"/" + ranarray.length + " >");
  num1=0;
  num2=num1+1;
  minus=0;
  plus=0;
  $("#plus").html(minus);
  $("#minus").html(minus);
  count=0;
  flag=1;
  $("#b1").css("background", "white");
  $("#b2").css("background", "purple");
  $("#b3").css("background", "white");

  }
})
$("#b3").on("click", function(){
  if(flag!=2){
  ranarray.sort(()=>Math.random()-0.5);
  array1=["Success","Millennium","Panacea","Parody","Umbrage","Workout","Across","Frightened","Director","Viewer"];
  array2=["успіх","тисячоліття","панацея","пародія","образа","тренування","через","наляканий","режисер","глядач"];
  $("#but1").html(array1[ranarray[num1]]);
  $("#stat").html("< "+ 1 +"/" + ranarray.length + " >");
  num1=0;
  num2=num1+1;
  minus=0;
  plus=0;
  $("#plus").html(minus);
  $("#minus").html(minus);
  count=0;
  flag=2;
  $("#b1").css("background", "white");
  $("#b2").css("background", "white");
  $("#b3").css("background", "purple");
  }
})
$("#stat").html("< "+ 1 +"/" + ranarray.length + " >");
$("#but1").on("click",function() {
  if(flag==-1){
    alert("Please choose lvl");
    return 0;
  }
  $("#but1").attr('disabled','true');
  setTimeout(winAndLose, 0);
  function winAndLose(){
    if(flag==0){
      $("#b2").attr('disabled','true');
      $("#b3").attr('disabled','true');
    }
    else if(flag==1){
      $("#b1").attr('disabled','true');
      $("#b3").attr('disabled','true');
    }
    else if(flag==2){
      $("#b1").attr('disabled','true');
      $("#b2").attr('disabled','true');
    }
  if(count==10){location.reload();} //перезавантаження сторінки
  //якщо правильно
  if($("input").val().toLowerCase()==array2[ranarray[num1]]){
    $("#but1").animate({left:0}, 1000).fadeOut(500);
    $("#plus").html(plus=plus+1);
    $("#plus").html(plus-1);
  count++;

  $("input").val("");

  setTimeout( function(){
  if(count==10){
    $("#but1").html("click to reload page");
  }},1000)
  }
  //якщо не правильно 
  else {
    if($("#but1").width()>=110){
    $("#but1").animate({left:550}, 1000).fadeOut(500);}
    else{$("#but1").animate({left:400}, 1000).fadeOut(500)}
    $("#minus").html(minus=minus+1);
    $("#minus").html(minus-1);
  count++;

  $("input").val("");
  setTimeout( function(){
  if(count==10){
    $("#but1").html("click to reload page");
  }},1000)
  }}
  //повертае картку в початкове положення, та зміна статистики
  setTimeout(change, 1500);
  function change(){
    if(flag==0){
      $("#b2").removeAttr('disabled');
      $("#b3").removeAttr('disabled');
    }
    else if(flag==1){
      $("#b1").removeAttr('disabled');
      $("#b3").removeAttr('disabled');
    }
    else if(flag==2){
      $("#b1").removeAttr('disabled');
      $("#b2").removeAttr('disabled');
    }
    num1++;
    $("#but1").html(array1[ranarray[num1]]);
    $("#but1").removeAttr('disabled');
    if($("#but1").width()>=110){
    $("#but1").animate({left:275}, 0).fadeIn(200);}
    else{
      $("#but1").animate({left:200}, 0).fadeIn(200);
    }
    $("#plus").html(plus);
    $("#minus").html(minus);
  let num2=num1+1;
  if(num2<ranarray.length+1){
  $("#stat").html("< "+ num2 +"/" + ranarray.length + " >");}
  }

  //кінцевий результат
  setTimeout(finish, 1750);
  function finish(){

  if(count==10){
    switch(plus){
      case 0:
        text="Bad";
        break;
      case 1:
        text="Bad";
        break;
      case 2:
        text="Beginer";
        break;
        case 3:
        text="Beginer";
        break;
      case 4:
        text="Okay";
        break;
        case 5:
        text="Okay";
        break;
      case 6:
        text="Normal";
        break;
        case 7:
        text="Normal";
        break;
      case 8:
        text="Advanced";
        break;
        case 9:
          text="Advanced";
          break;
      case 10:
        text="Native";
        break;
      default:
        text="...";
        break;
    }
    alert(nameU+ " lvl english is "+ text);
  }};
});