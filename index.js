var wikichanges = require("wikichanges");

var w = new wikichanges.WikiChanges({
  ircNickname: 'wikidatachangestest',
  wikipedias: ["#en.wikipedia"]
});

w.listen(function(change) {
  //console.log(change.page + " " + change.pageUrl);
  console.log(JSON.stringify(change, null, "\t" ));	
});
