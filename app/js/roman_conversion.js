
//original: Giles Edkins, 2001
console.log(toarabic("i"));
function toarabic(num) {
    vals = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    num = num.toUpperCase().replace(/[^IVXLCDM]/g, '').replace(/VV/g, 'X').replace(/LL/g, 'C').replace(/DD/g, 'M');
    var bits = [],
        i = 0,
        j = 0,
        k, l, n = num.length,
        last = 9999,
        rep = 0,
        sum = 0,
        valid = 1;
    for (; i < n; i++) {
        if (!(bits[j] = vals[num.charAt(i)])) {
            valid = 0;
            break;
        }
        if (j > 0) {
            k = bits[j];
            l = bits[j - 1];
            if (k === l * 5 || k === l * 10) {
                bits[--j] = k - l;
            }
        }
        j++;
    }
    if (valid) {
        for (i = 0; i < j; i++) {
            k = bits[i];
            sum += k;
            if ((last < k) ||
                (rep > 1 && last == k) ||
                (last == k && k != 1 && k != 10 && k != 100 && k != 1000) ||
                last == k * 4 || last == k * 9 || last * 4 == k * 9 || last * 5 == k * 9) {
                valid = 0;
                break;
            }
            rep = (last == k) ? rep + 1 : 0;
            last = k;
        }
    }
    return valid ? sum : 'Enter a proper Roman number please.';
}
