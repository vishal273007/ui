public class ClassA{

    void meth1(){
        int a=34;
        int b=21;
        int c=a++ + ++b; //c = 34 + 22 = 56, a=35, b=22
        int d=--a + --b + c--; //d = 34 + 21 + 56 = 111, a=34, b=21, c= 55
        int e=a+ +b+ +c+ +d--; //e = 34 + 22 + 55 + 111 = 222, d=110
        int f=-a + b-- + -c + -d++; //f = -34 + 21 + -55 + -110 = -278, d=111
        int sum = a+b+c+d+e+f; // 34 + 21 + 55 + 111 + 222 + -278 = 343 -278 = 65
        System.out.println("sum: "+sum); //65
    }



    public static void main(String[] args) {
        ClassA aobj=new ClassA(); //creating an object
        aobj.meth1(); //calling an method with object reference name
    }
}