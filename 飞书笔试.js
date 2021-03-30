// 张润钊面试
// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。lengthOfLongestSubstring('abcabcbb') = 3
function lengthOfLongestSubstring(str) {
    let map = new Map()
    let maxLen = 1
    let left = 0
    let right = -1
    for (let i = 0; i < str.length; i++) {
        if (!map.get(str[i])) {
            map.set(str[i], i)
            right++
        } else {
            maxLen = Math.max(right - left + 1, maxLen)
            left = map.get(str[i]) + 1
            right++
            for (let i = left; i <= right; i++) {
                map.set(str[i], i)
            }
        }
    }
    maxLen = Math.max(right - left + 1, maxLen)
    return res
}

function lengthOfLongestSubstring(str) {
    let res = -1;
    let len = str.length;
    let right = 0;
    let left = 0;
    while (right < len) {
        let char = str[right];
        let tmp = str.substring(left, right)
        if (tmp.indexOf(char) !== -1) {
            while (str[left] !== char) {
                left++;
            }
        }
        res = Math.max(res, right - left)
        right++;
    }
    return res;
}
// nlogn

// 有个 m * n 的矩形，每次只能向下或向右移动一格，问从左上角到右下角有几种方式？
function getSum(m, n) {

    const dp = new Array(m + 1).fill(0).map((ele, index) => new Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) {
        dp[i][0] = 1;
    }

    for (let i = 0; i <= n; i++) {
        dp[0][i] = 1;
    }
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }
    console.log(dp)
}

function getSum2(m, n) {
    let dp = Array(m).fill(Array(n).fill(1))
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }
}
// n*n
getSum(3, 4)

/*[['a', 'b'], ['n', 'm'], ['0', '1']]
 => ["an0", "an1", "am0", "am1", "bn0", "bn1", "bm0", "bm1"]*/
function fn(arr) {
    let
    return arr.reduce((pre, cur, index, arr) => {
        for (let i = 0; i < cur.length; i++) {
            for (let j = index; j < )
        }
        return pre
    }, [])
}
console.log(fn([
    ['a', 'b'],
    ['n', 'm'],
    ['0', '1']
]))


