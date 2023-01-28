import axios from "axios";
const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //  <div class="headline">{ anabaslik }</div>
  //  <div class="author">
  //       <div class="img-container">
  //         <img src={ yazarFoto }>
  //       </div>
  //       <span>{ yazarAdı } tarafından</span>
  //  </div>
  // </div>
  //
  const cardDiv = document.createElement("div");
  cardDiv.classList = "card";

  const cardDiv2 = document.createElement("div");
  cardDiv2.classList = "headline";
  cardDiv2.textContent = makale.anabaslik;
  cardDiv.appendChild(cardDiv2);

  const cardDiv3 = document.createElement("div");
  cardDiv3.classList = "author";
  cardDiv.appendChild(cardDiv3);

  const cardDiv4 = document.createElement("div");
  cardDiv4.classList = "img-container";
  cardDiv3.appendChild(cardDiv4);

  const cardİmg = document.createElement("img");
  cardİmg.src = makale.yazarFoto;
  cardDiv4.appendChild(cardİmg);

  const cardSpan = document.createElement("span");
  cardSpan.textContent = `${makale.yazarAdi} tarafından`;
  cardDiv3.appendChild(cardSpan);

  return cardDiv;
};

const cardEkleyici = (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //

  const cards = document.querySelector(secici);
  axios({
    method: "get",
    url: "http://localhost:5001/api/makaleler",
  }).then(function (response) {
    console.log(response);
    const dataS = response.data.makaleler;
    for (const key in dataS) {
      for (let i = 0; i < dataS[key].length; i++) {
        cards.appendChild(Card(dataS[key][i]));
      }
    }
  });
};

export { Card, cardEkleyici };
