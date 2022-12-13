//isomorphic strings
// egg add=> true       foo bar => false

var isIsomorphic = function (s, t) {
    if (s.length !== t.length) {
        return false
    }
    let sMap = {}
    for (i = 0; i < s.length; i++) {
        if (!sMap[s[i]]) {
            if (Object.values(sMap).includes(t[i])) {
                return false
            }
            sMap[s[i]] = t[i]
        } else {
            if (sMap[s[i]] !== t[i]) {
                return false
            }
        }
    }
    return true
};

log(isIsomorphic("paper", "title"))