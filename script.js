const URI = "https://api.npoint.io/20c1afef1661881ddc9c";
const btn = document.getElementById("btn");
const card = document.querySelector(".main");

btn.addEventListener("click", async () => {
  const data = fetch(URI, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then(async (res) => {
    const data = await res.json();
    data.teamsList.forEach((item, i) => {
      card.innerHTML += `
                <div class="items">
                    <div class="head">${data.playerList[i].Id}</div>
                    <h3>player name</h3>
                     <h1>${data.playerList[i].PFName}</h1>
                    <div class="summary"> 
                        <div> 
                            <h1>${data.playerList[i].Skill}</h1>
                            <h4>skills</h4>
                        </div>
                        <div class="c">
                            <h2>${
                              data.playerList[i].IsActive == 1
                                ? "ACTIVE"
                                : "INACTIVE"
                            } </h2>
                            <h4>${data.playerList[i].TName}</h4>
                        </div>
                    </div>
                    <h5>plays • ${data.playerList[i].SkillDesc}</h5>
                </div>`;
    });
  });
});
