console.log(fn('aaazbcdeadcd'))

function fn(str) {
    let res = str
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            let tmp = swap(str, i, j)
            if (res > tmp)
                res = tmp
        }
    }
    return res
}

function swap(str, i, j) {
    str = str.split('')
    let tmp = str[i]
    str[i] = str[j]
    str[j] = tmp
    return str.join('')
}

console.log(fn2('DAB*B*ACD'))

function fn2(s) {
    let len = s.length
    if (len < 2) {
        return len
    }

    function getMax(left, right) {
        while (left >= 0 && right < len && (s[left] == '*' || s[right] == '*' || s[left] == s[right])) {
            left--
            right++
        }
        return {
            left: left + 1,
            right: right - 1
        }
    }
    let start = 0,
        end = 0
    for (let i = 0; i < len; i++) {
        let obj = getMax(i, i)
        let obj2 = getMax(i, i + 1)
        let f = obj.right - obj.left > obj2.right - obj2.left
        let maxObj = f ? obj : obj2
        if (maxObj.right - maxObj.left > end - start) {
            start = maxObj.left
            end = maxObj.right
        }
    }
    return end - start + 1
}

给一个字符串s， 你可以至多选择两个不同位置的字符进行交换（ 可以选择不交换， 保留原串）， 问所有可能中字典序最小的串。

有关字典序： 对于长度相同的串a和串b， 串a的字典序小于串b当且仅当存在一个位置i使得串a和串b的前i - 1 个字符完全相同且串a的第i个字符小于串b的第i个字符。 即a1 = b1, a2 = b2, ...ai - 1 = bi - 1 且ai < bi。



输入描述
一行一个字符串s， 保证串中都为小写字母('a'~'z')。 字符串长度 <= 200000

输出描述
输出一个串t， 表示所有可能中字典序最小的串。


样例输入
aaazbcdeadcd
样例输出
aaaabcdezdcd

题目描述：
回文子串是指字符串的一个子串， 这个子串从左往右和从右往左均一样， 例如“ ABBA” 和“ ABCBA”。

对于一个由大写英文字母和“ * ”号组成的字符串， 求它的最长回文子串的长度， 其中一个“ * ”号可以用来替代任意一个字符。

例如： 字符串“ AB * B * AC” 的最长回文子串的长度为6， 当第1个“ * ”号为“ B”， 第2个“ * ”号也为“ B” 时， 可以得到一个回文子串“ ABBBBA”。

输入一个包含大写英文字母和至少一个“ * ”号的字符串， 请输出最长回文子串的长度。



输入描述
单组输入。

输入1行， 包含一个由若干大写英文字母和至少一个“ * ”号组成的字符串， 其长度小于等于1000。

输出描述
输出一个正整数， 表示可以得到的最长回文子串的长度。


样例输入
DAB * B * ACD
样例输出
6