//============================================ Datatypes ================================================
//========================================== Numbers =======================
// in Java, 'int' is the standard declaration for a number, think "integer"
int a = 5;
// for long numbers, we either add a suffix "L":
int b = 1,000,000L;
// or declare it by "long":
long c = 1,000,000;

//======================================== Strings =================================================
// for strings, we can either use "char":
char name = "Rob";
// or "String":
String name2 = "Bob";
// for methodological purposes, String is better because more methods can be used on it:
    //.starts/endsWith()
    //.indexOf()
    //.replace("a","b")
    //.toUpper/LowerCase()

// NOTE: Java methods are non-destructive, meaning that instances of variables with methods applied to them
// are returned as wholly seperate variables.
// the original variables are unchanged

//======================================= Arrays ======================================
// Arrays are in Java as well, but are instantiated differently:
int[] numbers = new int[3];
    numbers[0] = 10;
    numbers[1] = 20;
    numbers[2] = 30;
// or the shorcut:
int[] numbers2 = {10,20,30}
// or
String[] letters = {"l", "r", "w"}
//once created, an Array's length cannot be changed. Elements cannot be changed or removed,
//but can be 'manipulated' with methods:
Array.sort(numbers)
String arrayToString = Arrays.toString(numbers)

//================================= Mathematical Operations =================================
//mathematical operations in java are very similar to those in JavaScript, and follow the PEMDAS rule.

//================================== If/Else Statements =======================================
//just like javascript, if/else statements in java follow the if(condition) => result formula,
//but must be put in code blocks{} if there is more than one statement for a condition:
if (condition1)
 statement1
else if (condition2)
 statement2
else if (condition3){
    statement3
    statement3.01
}
else
 statement4
//                                    Ternary Operators
//again, pretty much the same as JavaScript:
String className = (income > 100_000) ? “First” : “Economy”;

//========================================= Loops =============================================
//looping through a given length is similar enough to Javascript:
    //forLoops
    //whileLoops
//when looping though arrays, however, because arrays are instantiated differently in Java,
//the way to loop through them is as follows:
      String[] cars = {"Volvo", "Honda", 'Hyundei'}    
      for (String i : cars) {
          System.out.println(i);
      }


//====================================== Java Functions ===============================================
//However, to actually run Java code, we must put inside a class like so:
public class Main {
  public static void myFunction(String[] args) {
    System.out.println("Hello World");
  }
}
//this code just 'console.logs("hello world")'

//================================= Anatomy of a Java Function ====================================
//taking the examply function 'myFunction()' above, we will break it down into it's parts:
//          'static' means that it belongs to the 'Main' class,
//          'void' means that this function does not have a return value
//          'myFunction' is just the name of the function, followed by parentheses

//=================================== Function Parameters ================================
//in this example, we create a function 'myMethod' and set the parameter:
//              'String', the datatype of the parameter
//              'fname', the nname of the parameter we will use inside the function
static void myMethod(String fname) {
  System.out.println(fname + " Doe");
}
//when it is time to actually call the method, we simply pass in the correct datatype:
  myMethod("John");
//in the case of a function taking an array:
static void loopThroughArray(String[] fArray){
          for (String i : fArray) { //this just prints out each element in the strinng array 'fArray'
          System.out.println(i);
      }
}
// of course, we can have a function that takes in multiple paramters:
static void namesWithAge(String fName int age){
    System.out.println(fname + "is" age)
}
namesWithAge("John", 26)
// remember when we said that 'void' means the function does not have a return value?
// what if a function DOES have a return value?
static int addtwoNums(int x){
    return 5 + x
}
//============================ Function Overloading =============================
// while you could technically instantiate two different functions that do the same thing, because Java has-
// us describe the datatype we are working with, we could have one function work with different datatypes:
static int addTwo(int x, int y){
    return x + y
}
static double addTwo(double x, double y){
    return x + y
}
public static void main(String[] args){
    int firstNum = addTwo(1, 2)
    double secondNum = addTwo(1.1, 2.2)
    System.out.println("int" + firstNum)
    System.out.println("double" + secondNum)
} //just make sure to match the respective datatypes :)

//========================================= Scope ============================================
// as in JavaScript, 'scope' is an important concept in Java. The convential usage is as follows:
    // variables are available to use anywhere in the method in which they are instantiated
        // they are NOT available to use BEFORE they are instantiated
    // if in a code block{}, the given variable can only be used inside that code block, 
    // only after it has been instantiated
    

//================================= Function Recursion =================================
// recursion is basically when a function just calls itself within itself.
// Peep Game: to prevent infinite recursion, try to have a condition that stops the recursion loop.
public class Main{
    public static void main(String[] args){
        int result = sum(10)
        System.out.println(result)
    }
    public static int sum(int k){
        if(k>0){
            return k + sum(k-1)
        }else{
            return 0
        }
    }
}
//=============================== Object Oriented Programming(OOP) with Java ============================
//because everything in java is or belongs to a class, Java is very good at handling Back-End work
public class Main{
    //instantiate a new 'x' property of the 'Main' class
    int x = 5
    public static void printX(String[] args){
        //creates a new instance 'myObj' of the 'Main' class
        Main myObj = new Main()
        //prints out the 'x' property of 'myObj'
        System.out.println(myObj.x)
    }
}
// you can create two classes, then access properties of the first in the second
public class First{
    int x = 5
}
class Second{
    public static void print(String[] args){
        First phirst = new First()
        System.out.println(phirst.x)
    }
}
// you can also change attributes of a first class in the second
public class Main{
    int x = 5
    final int y = 10 //'final' means that this attribute cannot be changed
    public static void main(String[] args){
        Main newObj = new Main()
        newObj.x = 40
        System.out.println(newObj.x)
    }
}

//================================= 'Static' vs 'Public' =======================================
// when we define a method as 'Static', we mean that it can be accessed without creating an object of
// whatever class that method is in.
// when we define a method as 'Public', we can only access the method by creating an object.

//==================================== Java Class Constructors ===========================
// just like javascript, whenever we create a class of something, we should also construct it with 
// whatever properties we want.
public class Main{
    //instantiate a property of 'Main'
    int x;
    //instantiate a constructor to define said properties
    public Main(){
        x = 5
    }
    public void print(String[] args){
        Main newObj = new Main()
        System.out.println(newObj.x)
    }
}
// constructors can also take parameters:
public class Maintwo{
    String fname
    int age;

    public Maintwo(String z, int y ){
        x = y;
        fname = z
    }
    public void printwo(String[] args){
        Maintwo twoObj = new Maintwo("John", 7)
        System.out.println(twoObj.fname + "is" + twoObj.age)
    }
}

//=========================== Abstract classes and methods =============================
// asides from 'public' and 'static', there are many modifiers we can use to further specify the kind of
// classes and methods, one of them being 'abstract'.
// abstract classes cannot define objects by themselves, but other classes can use them to define their own
// properties
asbtract class Main{
    public String fname = "json";
    public int x = 5;
    public abstract void study()
}
class Student extends Main{
    public int gradYear = 2021
    public void study(){
        System.out.println("Studying all day long")
    }
}
// from here we can use the usual Java instantiations
class Second {
  public static void main(String[] args) {
    // create an object of the Student class (which inherits attributes and methods from Main)
    Student myObj = new Student();

    System.out.println("Name: " + myObj.fname);
    System.out.println("Age: " + myObj.age);
    System.out.println("Graduation Year: " + myObj.graduationYear);
    myObj.study(); // call abstract method
  }
}

//============================== Private methods/attributes/properties ===========================
// as opposed to 'public' methods, 'private' methods can only be accessed in the same class it is 
// instantiated in. However, they can be accessed thrugh 'getter' and 'setter' methods.
public class Person{
    private String name;

    //'setter' function
    public void setName(String newName){
        this.name = newName
    }
    //'getter' function
    public String getName(){
        return name
    }
}
// which we can then use outside the class:
public class Main{
    public static void main(String[] args){
        Person rob = new Person;
        rob.setName("Rob")
        System.out.println(rob.getName())
    }
}

//=============================== Java packages and dependancies =================================
// in other languages, importing packages and dependancies might look like:
    // import * from 'react'
    // import 'randomFile.css'
    // import 'randomUrl.jpeg'
    // etc.
// java works the same way, but we're importing classes or packages(things with lots of classes included):
    // import java.util.Scanner
// in this example, 'java.util' is the package we're looking at, and 'Scanner' is the specific class 
// we want to import.
// if we want to import an entire package, we would do:
    //import java.util.*

//=============================== Classes within Classes =====================================
//                                aka Nested Classes
// when instantiating nested classes, usually you would need to instantiate the outer class before accessing
// its innner class...
class OuterClass{
    int x = 10;
    class InnerClass{
        int y = 12;
    }
}

public class Main{
    public static void main(String[] args){
        OuterClass outerObject = new OuterClass();
        OuterClass.InnerClass innerObject = outerObject.new InnerClass();
        System.out.println(outerObject.x + innerObject.y)
    }
}
// ...except if said inner class is 'static':
class NewOuter{
    int x = 2;
    static class NewInner{
        int y = 3;
    }
}
public class Main{
    public static void main(String[] args){
        OuterClass.InnerClass innerTwo = new OuterClass.InnerClass
    }
}
// you can also instantiate a method in the innerObject, then use that method to access properties of the
// outerObject