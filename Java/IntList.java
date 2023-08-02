public class IntList {
    public int data;
    public IntList next;

    public IntList(int f, IntList r) {
        this.data = f;
        this.next = r;
    }


    public static ArrayList<Integer> sortAlist(ArrayList<Integer> s) {
        System.out.println("this is the original list: " + s);
        for (int i = 0; i < s.size() - 1; i++) {
            int minIn = i;
            for (int j = i + 1; j < s.size(); j++) {
                int curr = s.get(minIn);
                int jurr = s.get(j);
                if (jurr < curr) {
                    minIn = j;
                }
            }
            int temp = s.get(minIn);
            s.set(minIn, s.get(i));
            s.set(i, temp);
        }
        return s;
    }



}





