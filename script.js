function getData() {
  const data = fetch('./data.json').then(res => res.json())
  return data
}


async function friendListsElement() {
  const friendLists = document.getElementById("friend_list");
  const data = await getData() 
  const lists = `
    ${data.map(i => `
       <div class="card-friend">
                <img src="${i.fotoselfie}" alt="${i.nama}" class="friend-img">
                <h3 class="friend-title">${i.nama}</h3>
                <p class="friend-about">
                    NIM : ${parseInt(i.nim)} <br>
                    TTL : ${i.ttl} <br>
                    ALAMAT : ${i.alamat} <br>
                    NO TLPN : ${i.no}
                </p>
            </div>
         </div>
    `).join("")}
  `;

  return friendLists.innerHTML = lists
}

friendListsElement()