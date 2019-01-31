
const winnerList = [
    { "season": "1999-00", "team": "real madrid", "country": "Spain" },
    { "season": "2000-01", "team": "bayern munich", "country": "Germany" },
    { "season": "2001-02", "team": "real madrid", "country": "Spain" },
    { "season": "2002-03", "team": "milan", "country": "Italy" },
    { "season": "2003-04", "team": "porto", "country": "Portugal" }
]

function countryWins(winnerList,countryName){
    let count = 0;
    winnerList.forEach(function(winnerDetails){
        if(winnerDetails.country == countryName){
            count++
        }
    })
    return count;
}
function countrywinsfilter(winnerList,countryName){
  
    let result = winnerList.filter(function(winnerDetails){
        return winnerDetails.country == countryName
    })
   
    return result.length;
    }

const result1 = countryWins(winnerList,'Spain')
console.log(result1)

const result2 = countryWins(winnerList,'Germany')
console.log(result2)

console.log(countryWins(winnerList,'Sportland'))

console.log(countrywinsfilter(winnerList,'Spain'))
