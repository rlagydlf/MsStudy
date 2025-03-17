class Solution {
    public String solution(String my_string) {
        String answer = "";
        char c = ' ';
        for(int i = 0; i<my_string.length(); i++){
            c = my_string.charAt(i);
            switch(c){
                case 'a' : break;
                case 'e' : break;
                case 'i' : break;    
                case 'o' : break;
                case 'u' : break;
                
                default : answer += c;
            
            
            }
        }
        return answer;
    }
}