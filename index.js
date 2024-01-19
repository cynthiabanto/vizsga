function osszesOszto(szam) {
    var osztok = [];
    for (var i = 1; i <= szam; i++) {
        if (szam % i === 0) {
            osztok.push(i);
        }
    }
    return osztok;
}
function parosDarab(szamTomb) {
    var parosDb = 0;
    for (var _i = 0, szamTomb_1 = szamTomb; _i < szamTomb_1.length; _i++) {
        var szam_1 = szamTomb_1[_i];
        if (szam_1 % 2 === 0) {
            parosDb++;
        }
    }
    return parosDb;
}
function fuggvenyhivasPalindrom(fuggveny) {
    var eredetiSzoveg = fuggveny().replace(/\s/g, ''); // Szóközök eltávolítása
    var forditottSzoveg = eredetiSzoveg.split('').reverse().join('');
    return eredetiSzoveg === forditottSzoveg;
}
// Példa használat:
var szam = 24;
console.log("Az ".concat(szam, " sz\u00E1m oszt\u00F3i: ").concat(osszesOszto(szam).join(', ')));
var tomb = [2, 5, 8, 10, 15];
console.log("A t\u00F6mbben ".concat(parosDarab(tomb), " p\u00E1ros sz\u00E1m van."));
var szovegFuggveny = function () { return 'indul a görög aludni'; };
console.log("A sz\u00F6veg palindrom? ".concat(fuggvenyhivasPalindrom(szovegFuggveny)));
