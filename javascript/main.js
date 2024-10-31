
var key = "className";
var student ={
      name:"ali",
      family:"blalalla",
      age:20,
      walk: function(){
            var i = 10;
            while(i){
                  document.getElementById("demo").innerHTML += "*";
                  i--;
                  console.log(i)
            }
      },
      [key]:"c1"
}

if("name" in student){
      console.log("name exists")
}
      

for(p in student){
      if(typeof student[p] === "function"){
            student[p]();
      }
      else
      console.log(student[p])
}


