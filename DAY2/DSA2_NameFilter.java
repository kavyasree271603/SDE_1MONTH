public class DSA2_NameFilter {
    public static void main(String[] args) {
        String[] names = {"Bujji", "Lakshmi", "Krishna", "Sai", "Nandini"};

        System.out.println("Names with more than 5 letters:");
        for (String name : names) {
            if (name.length() > 5) {
                System.out.println(name);
            }
        }
    }
}
