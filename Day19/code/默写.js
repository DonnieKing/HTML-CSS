//定义一个人类 Person

//构造函数
function Person(name,age,sex)
{
	this.name = name;
	this.age = age;
	this.sex = sex;
}

//原型
Person.prototype.say = function(){
	return "我叫"+this.name+"，我今年"+this.age+"。";
}

//定义一个学生类 Student 继承 Person

//继承构造函数

function Student(name,age,sex)
{
	Person.call(this,name,age,sex);
}

//继承原型
// Student.prototype = Person.prototype;

for(var i in Person.prototype)
{
	Student.prototype[i] = Person.prototype[i];
}

var haiyang = new Student("海洋",20,"男");
haiyang.say();

