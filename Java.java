import java.util.*;

class reverse{
    public static void main(String[] args) {
        String str="yaseesnkjcgk",nstr="";
        char ch;
        for(int i=0;i<str.length();i++)
        ch=str.charAt(i);
        nstr=ch+nstr;
        System.out.println(nstr);
    }

}