const Header = (baslik, tarih, yazi) => {
  const headerDiv = document.createElement("div");
  headerDiv.classList = "header";

  const headerSpan = document.createElement("span");
  headerSpan.classList = "date";
  headerSpan.textContent = tarih;
  headerDiv.appendChild(headerSpan);

  const headerH1 = document.createElement("h1");
  headerH1.textContent = baslik;
  headerDiv.appendChild(headerH1);

  const headerSpan2 = document.createElement("span");
  headerSpan2.classList = "temp";
  headerSpan2.textContent = yazi;
  headerDiv.appendChild(headerSpan2);

  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //
  return headerDiv;
};

const headerEkleyici = (secici) => {
  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //
  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper"))
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))
  const headers = document.querySelector(secici);
  const baslik = "Teknoloji Zamanı";
  const tarih = "17 Kasım 2022";
  const yazi = "sağdaki yazı";
  const header = Header(baslik, tarih, yazi);

  headers.appendChild(header);
};

export { Header, headerEkleyici };
