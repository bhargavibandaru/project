import java.util.*;
public class Main {
    public static void main(String[] args) {
        
        Integer[] myArray = {1, 2, 3, 4, 5, 6, 7};

        // Convert the array to a List
        List<Integer> list = Arrays.asList(myArray);
        Collections.shuffle(list);
        
        // Convert the List back to an array
        Integer[] shuffledArray = list.toArray(new Integer[0]);
        System.out.println(Arrays.toString(shuffledArray));
    }
}
