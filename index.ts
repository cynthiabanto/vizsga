function osszesOszto(szam: number): number[] {
  const osztok: number[] = [];
  for (let i = 1; i <= szam; i++) {
      if (szam % i === 0) {
          osztok.push(i);
      }
  }
  return osztok;
}

function parosDarab(szamTomb: number[]): number {
  let parosDb = 0;
  for (const szam of szamTomb) {
      if (szam % 2 === 0) {
          parosDb++;
      }
  }
  return parosDb;
}

function fuggvenyhivasPalindrom(fuggveny: () => string): boolean {
  const eredetiSzoveg = fuggveny().replace(/\s/g, ''); // Szóközök eltávolítása
  const forditottSzoveg = eredetiSzoveg.split('').reverse().join('');
  return eredetiSzoveg === forditottSzoveg;
}

// Példa használat:
const szam = 24;
console.log(`Az ${szam} szám osztói: ${osszesOszto(szam).join(', ')}`);
const tomb = [2, 5, 8, 10, 15];
console.log(`A tömbben ${parosDarab(tomb)} páros szám van.`);
const szovegFuggveny = () => 'indul a görög aludni';
console.log(`A szöveg palindrom? ${fuggvenyhivasPalindrom(szovegFuggveny)}`);
