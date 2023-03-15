

function buttonClick(btn){
  if(btn.value === "Google"){
    let word = document.getElementById("text");
    let conv = encodeURIComponent(word.value); 
    let res = ("http://www.google.co.jp/search?q="+conv+"&sourceid=chrome&ie=UTF-8");
    window.open(res,`_blank`);
  }
  else if(btn.value === "Youtube"){
    let word = document.getElementById("text");
    let conv = encodeURIComponent(word.value); 
    let res = ("https://www.youtube.com/results?search_query="+conv);
    window.open(res,`_blank`);

  }
  else if(btn.value === "GoogleNews"){
    let word = document.getElementById("text");
    let conv = encodeURIComponent(word.value); 
    let res = ("https://news.google.com/search?q="+conv+"&hl=ja&gl=JP&ceid=JP%3Aja");
    window.open(res,`_blank`);
  }
  else if(btn.value === "Twitter"){
    let word = document.getElementById("text");
    let conv = encodeURIComponent(word.value); 
    let res = ("https://twitter.com/search?q="+conv+"&src=recent_search_click");
    window.open(res,`_blank`);
  }
  else if(btn.value === "Qiita"){
    let word = document.getElementById("text");
    let conv = encodeURIComponent(word.value); 
    let res = ("https://qiita.com/search?q="+conv);
    window.open(res,`_blank`);
  }
  else if(btn.value === "Stack overflow"){
    let word = document.getElementById("text");
    let conv = encodeURIComponent(word.value); 
    let res = ("https://ja.stackoverflow.com/search?q="+conv);
    window.open(res,`_blank`);
  }
  else if(btn.value === "Amazon"){
    let word = document.getElementById("text");
    let conv = encodeURIComponent(word.value); 
    let res = ("https://www.amazon.co.jp/s?k="+conv+"&__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=10YY8TA4TND9C&sprefix=%E3%82%BD%E3%83%BC%E3%82%B9%2Caps%2C162&ref=nb_sb_noss_1");
    window.open(res,`_blank`);
  }
  
  else if(btn.value === "楽天市場"){
    let word = document.getElementById("text");
    let conv = encodeURIComponent(word.value); 
    let res = ("https://search.rakuten.co.jp/search/mall/"+conv+"/");
    window.open(res,`_blank`);
  }
  else if(btn.value === "Yahooショッピング"){
    let word = document.getElementById("text");
    let conv = encodeURIComponent(word.value); 
    let res = ("https://shopping.yahoo.co.jp/search?first=1&tab_ex=commerce&fr=shp-prop&mcr=512a3fe4e507fc689cc91be1e16a8134&ts=1678875677&sretry=1&p="+conv+"&sc_i=shp_pc_top_searchBox");
    window.open(res,`_blank`);
  }
  else if(btn.value === "DeepL"){
    let word = document.getElementById("text");
    let conv = encodeURIComponent(word.value); 
    let res = ("https://www.deepl.com/ja/translator#en/ja/"+conv);
    window.open(res,`_blank`);
  }
  else if(btn.value === "weblio"){
    let word = document.getElementById("text");
    let conv = encodeURIComponent(word.value); 
    let res = ("https://ejje.weblio.jp/content/"+conv);
    window.open(res,`_blank`);
  }
}