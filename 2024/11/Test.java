
class Test {

    public static boolean isPalindrome(String s) {
        int start = 0;
        int end = s.length() - 1;
        while (start < end) {
            char c1 = Character.toLowerCase(s.charAt(start));
            char c2 = Character.toLowerCase(s.charAt(end));

            while (start <= end && !Character.isLetterOrDigit(c1)) {
                start++;
                if (start <= end) {
                    c1 = Character.toLowerCase(s.charAt(start));
                }
            }

            while (start <= end && !Character.isLetterOrDigit(c2)) {
                end--;
                if (start <= end) {
                    c2 = Character.toLowerCase(s.charAt(end));
                }
            }

            if (c1 != c2) {
                return false;
            }
            start++;
            end--;
        }
        return true;
    }

}
