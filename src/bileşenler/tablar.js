import axios from "axios";
import { konular } from "../mocks/data";

const Tablar = (konu) => {
  // GÖREV 3
  // ---------------------
  // Tek argümanı bir dizi ("konu") olan bu fonksiyonu uygulayın.
  // Örnek olarak, konu dizisi şu şekilde deklare edilmişse ['javascript', 'bootstrap', 'teknoloji']
  // fonksiyon aşağıdaki şekilde bir DOM öğesi döndürecek.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">teknoloji</div>
  // </div>
  //

  const tabsDiv = document.createElement("div");
  tabsDiv.classList = "topics";

  const tabsDiv2 = document.createElement("div");
  tabsDiv2.classList = "tab";
  tabsDiv2.textContent = konu[0];
  tabsDiv.appendChild(tabsDiv2);

  const tabsDiv3 = document.createElement("div");
  tabsDiv3.classList = "tab";
  tabsDiv3.textContent = konu[1];
  tabsDiv.appendChild(tabsDiv3);

  const tabsDiv4 = document.createElement("div");
  tabsDiv4.classList = "tab";
  tabsDiv4.textContent = konu[2];
  tabsDiv.appendChild(tabsDiv4);

  const tabsDiv5 = document.createElement("div");
  tabsDiv5.classList = "tab";
  tabsDiv5.textContent = konu[3];
  tabsDiv.appendChild(tabsDiv5);

  const tabsDiv6 = document.createElement("div");
  tabsDiv6.classList = "tab";
  tabsDiv6.textContent = konu[4];
  tabsDiv.appendChild(tabsDiv6);

  return tabsDiv;
};

const tabEkleyici = (secici) => {
  // GÖREV 4
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu işlevi uygulayın.
  // Konuları bu uç noktadan almalıdır: `http://localhost:5001/api/konular` (console.log ile test edin!).
  // Yanıtın içindeki konu dizisini bulun ve Tablar bileşenini kullanarak tabları oluşturun.
  // Tabları, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //

  const tabbs = document.querySelector(secici);

  axios({
    method: "get",
    url: "http://localhost:5001/api/konular",
  }).then(function (response) {
    console.log(response);
    tabbs.appendChild(Tablar(response.data.konular));
  });
};

export { Tablar, tabEkleyici };
