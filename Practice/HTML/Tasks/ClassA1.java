
//OPERATORS IN JAVA

public class ClassA{
    void meth1(){
        System.out.println("meth1() called");
        int i=100;
        System.out.println(i); //100 x=100
        System.out.println(i++); //100 x=101
        System.out.println(i); //101 x=101
        System.out.println(++i); //102 x=102
        System.out.println(i); //102 x=102
        System.out.println(i--); //102 x=101
        System.out.println(i); //101 x=101
        System.out.println(--i); //100 x=100
        System.out.println(i); //100 x=100
    }

    void meth2(){
        System.out.println("meth2() called");
        
        int x=10;
        System.out.println(x++); //10 x=11
        System.out.println(x++); //11 x=12
        System.out.println(x++); //12 x=13

        x++; //x=14

        System.out.println(--x); //13 x=13
        System.out.println(x++); //13 x=14
        System.out.println(++x); //15 x=15

        --x; // x=14

        System.out.println(x--); //14 x=13

        ++x; //x=14

        System.out.println(x); //14 x=14
        System.out.println(x++); //14 x=15

        x++; //x=16

        System.out.println(x--); //16 x=15
        System.out.println(x); //15 x=15
    }

    public static void main(String[] args) {
        ClassA aobj=new ClassA();
        aobj.meth1();
        System.out.println("-----------------------------");
        aobj.meth2();
    }
}