function solution(my_string) {
    var answer = '';
    for(var i = my_string.length; i>=0.; i--){
        answer += my_string.charAt(i);
    }
    return answer;
}