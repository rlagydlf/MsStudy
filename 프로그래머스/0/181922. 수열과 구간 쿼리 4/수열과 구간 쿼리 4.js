function solution(arr, queries) {
    // arr의 복사본을 만들어 작업합니다.
    let answer = [...arr];
    
    // 각 쿼리에 대해 반복
     for (var i = 0; i < queries.length; i++) {
        var s = queries[i][0];
        var e = queries[i][1];
        var k = queries[i][2];
        // s부터 e까지의 인덱스에 대해 반복
        for (let i = s; i <= e; i++) {
            // i가 k의 배수인 경우 해당 요소에 1을 더함
            if (k === 0 || i % k === 0) {
                answer[i] += 1;
            }
        }
    }
    
    return answer;
}
