// Program to determine the compliment DNA strand from a given DNA strand. With 'A' and 'T' complimentary as well as 'C' and 'G'
function DNAStrand(dna) {
  let toArray = dna.split('');
  let complimentArray = toArray.map(
    function (letter) {
      if (letter === 'A') {
        return 'T';
      } else if (letter === 'T') {
        return 'A';
      } else if (letter === 'C') {
        return 'G';
      } else if (letter === 'G') {
        return 'C';
      }
    }
  )

  let complimentDNAStrand = complimentArray.join('');
  return complimentDNAStrand;

}
