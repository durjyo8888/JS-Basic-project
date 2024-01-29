function generate(){
    let quotes = {
        "- Alysha Speer":'"You never really know whats coming. A small wave, or maybe a big one. All you can really do is hope that when it comes, you can surf over it, instead of drown in its monstrosity."',
        "- C.S.Lewis":'"I was not born to be free---I was born to adore and obey."',
        "- Jenny Valentine":'"Even when you’d lost everything you thought there was to lose, somebody came along and gave you something for free."',
        "- Aaron Lauritsen":'"Life s trials will test you, and shape you, but don’t let them change who you are."',
        "- D.Antoinette Foy":'"I am in awe of flowers Not because of their colors,but because even though they have dirt in their roots,they still grow.They still bloom."'
    }
    let authors = Object.keys(quotes);
    let author = authors[Math.floor(Math.random()*authors.length)];
    let quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}