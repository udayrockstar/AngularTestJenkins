var tid, f = document.forms.f.elements,
    vals = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
// original: Dougie Lawson, http://web.ukonline.co.uk/dougie.lawson/
function toroman(num) {
    num = parseInt(num, 10);
    if (num > 0 && num < 6000) {
        var mill = ['', 'M', 'MM', 'MMM', 'MMMM', 'MMMMM'],
            cent = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
            tens = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
            ones = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
            m, c, t, r = function(n) {
                n = (num - (num % n)) / n;
                return n;
            };
        m = r(1000);
        num = num % 1000;
        c = r(100);
        num = num % 100;
        t = r(10);
        return mill[m] + cent[c] + tens[t] + ones[num % 10];
    } else {
        return 'Numbers from 1 to 5999 only please.';
    }
}
//original: Giles Edkins, 2001
function toarabic(num) {
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

function convert(n) {
    if (n.search && n.search.substring(1)) {
        n = n.search.substring(1);
    } else {
        n = f.arabic.value || new Date().getFullYear();
    }
    if (isNaN(+n)) {
        f.roman.value = n;
        f.arabic.value = toarabic(f.roman.value);
    } else {
        f.arabic.value = n;
        f.roman.value = toroman(f.arabic.value);
    }
    return false;
}

function count(n) {
    var m = +f.arabic.value + n;
    if (m < 1) {
        m = 5999;
    }
    if (m > 5999) {
        m = 1;
    }
    f.arabic.value = m;
    f.roman.value = toroman(m);
    f.stopc.disabled = false;
    tid = window.setTimeout('count(' + n + ');', 400);
}

function stopcount() {
    window.clearTimeout(tid);
    f.stopc.disabled = true;
}

function focused() {
    stopcount();
    this.select();
}
f.arabic.onfocus = focused;
f.roman.onfocus = focused;
f.arabic.onkeyup = function(e) {
    this.form.elements.roman.value = toroman(this.value);
}
f.roman.onkeyup = function(e) {
    e = e || window.event || {};
    var k = String.fromCharCode(e.keyCode || e.which).toUpperCase();
    if (k >= 'A' && k <= 'Z' && !vals[k]) {
        this.value = this.oldvalue || '';
    } else {
        this.form.elements.arabic.value = toarabic(this.value);
    }
    this.oldvalue = this.value;
}
window.onunload = stopcount;
convert(location);
