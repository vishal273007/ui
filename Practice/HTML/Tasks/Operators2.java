public class ClassA{
    int meth1(){ //meth1() [returned value = 40]
        int a=10;
        a++; //a=11
        System.out.println(a++); //12 a=12

        a++; //a=13
        System.out.println(++a); //14 a=14
        System.out.println(a++); //14 a=15
        System.out.println(a++); //15 a=16
        
        a--; //a=15
        System.out.println(--a); //14 a=14

        a=a++ +3; //a=14 + 3 = 17 [it's post increment here, so, the value will be written here and then incremented by one. ]
        System.out.println("a value ====> "+a); //17
        System.out.println(a++); //17 a=18

        --a; //17
        System.out.println(--a); //17 a=17
        System.out.println(a--); //17 a=16
        a=a-- +3; //a= 16 + 3 = 19 []
        return a++ + ++a; // 19 + 21 = 40 [first, post increment value will be written without increment, then it's value will be incremented by and then incremented value will be incremented by 1 due to pre_increment operator ahead]
    }

    void meth2(){ //main()
        int a=20;
        int x=new ClassA().meth1()+a++; //Creating an object and calling a method at once [x = 40 + 20 = 60, a= 21]
        System.out.println(x++ + a++); //60 + 21 = 81, a=22
        System.out.println(a++); //22, a=23
        System.out.println(x); //60

    }

    public static void main(String[] args) {
        System.out.println("Start");
        new ClassA().meth2(); // Creating an object and calling a method at once
        System.out.println("Java is awesome");
    }
}