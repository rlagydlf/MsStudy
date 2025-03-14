class Solution {
    public int solution(int n) {
        int answer = 0;
        String str = "" + n;	// 12345 문자열 변환
        int[] numArray = new int[str.length()];	// 배열의 크기 지정


        for(int i=0; i < numArray.length; i++){
	        numArray[i] = n%10;
             n = n/10;
            answer += numArray[i];
        }
        return answer;
    }
}