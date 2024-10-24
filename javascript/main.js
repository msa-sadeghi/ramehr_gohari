
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
            }
      },
      [key]:"c1"
}

console.log(student.name);
console.log(student[key]);
student.walk();
