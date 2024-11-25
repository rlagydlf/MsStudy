function solution(s1, s2) {
    var answer = 0;
    for(var i = 0; i<s2.length; i++){
        for(var j = 0; j<s1.length; j++){
            if(s1[j]==s2[i]){
                answer++;
            }
        }
    }
    return answer;
}