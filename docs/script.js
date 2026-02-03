const protocols = {
  "1.7.2 ➤ 1.7.5": {
    "number": 4,
    "versions": ["1.7.2", "1.7.3", "1.7.4", "1.7.5"],
  },
  "1.7.6 ➤ 1.7.10": {
    "number": 5,
    "versions": ["1.7.6", "1.7.7", "1.7.8", "1.7.9", "1.7.10"],
  },
  "1.8 ➤ 1.8.9": {
    "number": 47,
    "versions": ["1.8", "1.8.1", "1.8.2", "1.8.3", "1.8.4", "1.8.5", "1.8.6", "1.8.7", "1.8.8", "1.8.9"],
  },
  "1.9": {
    "number": 107,
  },
  "1.9.1": {
    "number": 108,
  },
  "1.9.2": {
    "number": 109,
  },
  "1.9.3 ➤ 1.9.4": {
    "number": 110,
    "versions": ["1.9.3", "1.9.4"],
  },
  "1.10 ➤ 1.10.2": {
    "number": 210,
    "versions": ["1.10", "1.10.1", "1.10.2"],
  },
  "1.11": {
    "number": 315,
  },
  "1.11.1 ➤ 1.11.2": {
    "number": 316,
    "versions": ["1.11.1", "1.11.2"],
  },
  "1.12": {
    "number": 335,
  },
  "1.12.1": {
    "number": 338,
  },
  "1.12.2": {
    "number": 340,
  },
  "1.13": {
    "number": 393,
  },
  "1.13.1": {
    "number": 401,
  },
  "1.13.2": {
    "number": 404,
  },
  "1.14": {
    "number": 477,
  },
  "1.14.1": {
    "number": 480,
  },
  "1.14.2": {
    "number": 485,
  },
  "1.14.3": {
    "number": 490,
  },
  "1.14.4": {
    "number": 498,
  },
  "1.15": {
    "number": 573,
  },
  "1.15.1": {
    "number": 575,
  },
  "1.15.2": {
    "number": 578,
  },
  "1.16": {
    "number": 735,
  },
  "1.16.1": {
    "number": 736,
  },
  "1.16.2": {
    "number": 751,
  },
  "1.16.3": {
    "number": 753,
  },
  "1.16.4 ➤ 1.16.5": {
    "number": 754,
    "versions": ["1.16.4","1.16.5"],
  },
  "1.17": {
    "number": 755,
  },
  "1.17.1": {
    "number": 756,
  },
  "1.18 ➤ 1.18.1": {
    "number": 757,
    "versions": ["1.18","1.18.1"],
  },
  "1.18.2": {
    "number": 758,
  },
  "1.19": {
    "number": 759,
  },
  "1.19.1 ➤ 1.19.2": {
    "number": 760,
    "versions": ["1.19.1","1.19.2"],
  },
  "1.19.3": {
    "number": 761,
  },
  "1.19.4": {
    "number": 762,
  },
  "1.20 ➤ 1.20.1": {
    "number": 763,
    "versions": ["1.20","1.20.1"],
  },
  "1.20.2": {
    "number": 764,
  },
  "1.20.3 ➤ 1.20.4": {
    "number": 765,
    "versions": ["1.20.3","1.20.4"],
  },
  "1.20.5 ➤ 1.20.6": {
    "number": 766,
    "versions": ["1.20.5","1.20.6"],
  },
  "1.21 ➤ 1.21.1": {
    "number": 767,
    "versions": ["1.21","1.21.1"],
  },
  "1.21.2 ➤ 1.21.3": {
    "number": 768,
    "versions": ["1.21.2","1.21.3"],
  },
  "1.21.4": {
    "number": 769,
  },
  "1.21.5": {
    "number": 770,
  },
  "1.21.6": {
    "number": 771,
  },
  "1.21.7 ➤ 1.21.8": {
    "number": 772,
    "versions": ["1.21.7","1.21.8"],
  },
  "1.21.8": {
    "number": 772,
  },
  "1.21.9 ➤ 1.21.10": {
    "number": 773,
    "versions": ["1.21.9","1.21.10"],
  } 
}
createTableVersion();
function createTableVersion() {
  let tableProtocols = document.getElementById('table-protocols');
  if(tableProtocols) {
    let s = "";
    for(let version of Object.keys(protocols)) {
      s += `<li><input type="checkbox" checked id="${version}-option" onclick="updateResult();"></input><label for="${version}-option" style="margin-bottom: 0px;margin-top: 0px;"> ${version}</label><br></li>`
    }
    tableProtocols.innerHTML = s;
  }
}
function copyTextToClipboard(text) {
  let textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.bottom= 0;
  textArea.style.left= 0;

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  document.execCommand('copy');
  //alert('You text was copied! Ready to paste!\n\nThanks for using our tool!\n- AlonsoAliaga');
  
  alertCopied();
  document.body.removeChild(textArea);
}
function markBetween(min,max,whitelist) {
  let minNumber = protocols[min].number;
  let maxNumber = protocols[max].number;
  let whitelistMode = document.getElementById(`whitelist-mode`);
  if(typeof whitelist != "undefined" && whitelistMode) whitelistMode.checked = whitelist;
  for(let version of Object.keys(protocols)) {
    let versionOption = document.getElementById(`${version}-option`);
    if(versionOption) {
      let number = protocols[version].number;
      if(number >= minNumber && number <= maxNumber)
        versionOption.checked = true;
      else versionOption.checked = false;
    }
  }
  updateResult();
}
function markToHighest(min,whitelist) {
  if(typeof protocols[min] == "undefined") {
    return;
  }
  let minNumber = protocols[min].number;
  let whitelistMode = document.getElementById(`whitelist-mode`);
  if(typeof whitelist != "undefined" && whitelistMode) whitelistMode.checked = whitelist;
  for(let version of Object.keys(protocols)) {
    let versionOption = document.getElementById(`${version}-option`);
    if(versionOption) {
      let number = protocols[version].number;
      if(minNumber > number)
        versionOption.checked = false;
      else versionOption.checked = true;
    }
  }
  updateResult();
}
function markToLowest(max,whitelist) {
  let maxNumber = protocols[max].number;
  let whitelistMode = document.getElementById(`whitelist-mode`);
  if(typeof whitelist != "undefined" && whitelistMode) whitelistMode.checked = whitelist;
  for(let version of Object.keys(protocols)) {
    let versionOption = document.getElementById(`${version}-option`);
    if(versionOption) {
      let number = protocols[version].number;
      if(maxNumber < number)
        versionOption.checked = false;
      else versionOption.checked = true;
    }
  }
  updateResult();
}
function markAll() {
  for(let version of Object.keys(protocols)) {
    let versionOption = document.getElementById(`${version}-option`);
    if(versionOption) {
      versionOption.checked = true;
    }
  }
  updateResult();
}
function unmarkAll() {
  for(let version of Object.keys(protocols)) {
    let versionOption = document.getElementById(`${version}-option`);
    if(versionOption) {
      versionOption.checked = false;
    }
  }
  updateResult();
}
const wsiiData = document.getElementById("wsii-data");
let currentBlockedProtocols = [];
let allowedProtocols = [];
function updateResult() {
  let result = document.getElementById('result');
  if(result) {
    let list = [];
    let versionMode = document.getElementById(`version-mode`).checked;
    let whitelistMode = document.getElementById(`whitelist-mode`).checked;
    let thelegend = document.getElementById('thelegend');
    if(thelegend)
      thelegend.innerHTML = `&nbsp;&nbsp;&nbsp;Select client versions to ${whitelistMode?`<span style="background-color:#ffffff;border-radius:5px;padding:5px 15px 5px 15px;color:#4bad13">WHITELIST</span>`:`<span style="background-color:#ffffff;border-radius:5px;padding:5px 15px 5px 15px;color:#fc5044">BLACKLIST</span>`}&nbsp;&nbsp;&nbsp;`;
    currentBlockedProtocols = [];
    allowedProtocols = [];
    allowedVersions = [];
    for(let version of Object.keys(protocols)) {
      let versionOption = document.getElementById(`${version}-option`);
      if(versionOption) {
        let data = protocols[version];
        if(whitelistMode) {
          if(!versionOption.checked) {
            currentBlockedProtocols.push(data.number);
            if(versionMode) {
              if(data.versions && data.versions.length >= 1) {
                for(let a of data.versions) {
                  list.push(`"${a}"`);
                }
              }else{
                list.push(`"${version}"`);
              }
            }else{
              list.push(data.number);
            }
          }
        }else{
          if(versionOption.checked) {
            currentBlockedProtocols.push(data.number);
            if(versionMode) {
              if(data.versions && data.versions.length >= 1) {
                for(let a of data.versions) {
                  list.push(`"${a}"`);
                }
              }else{
                list.push(`"${version}"`);
              }
            }else{
              list.push(data.number);
            }
          }
        }
      }
    }
    result.innerHTML = `block-${versionMode?"versions":"protocols"}: [${list.join(", ")}]`;
    for(let version of Object.keys(protocols)) {
      let data = protocols[version];
      if(!currentBlockedProtocols.includes(data.number)) {
        allowedProtocols.push(data.number);
        if(typeof data.versions != "undefined") {
          allowedVersions = allowedVersions.concat(data.versions);
        }else {
          allowedVersions.push(version);
        }
      }
    }
    if(document.getElementById("wsii").checked) {
      updateWhatShouldIInstallData();
    }
  }
}
function test() {
  console.log("TESTING WORKS!")
}
function toggleWhatShouldIInstall() {
  let wsiiDiv = document.getElementById("what-should-i-install-div");
  if (document.getElementById('wsii').checked) {
    //wsii is enabled
    wsiiDiv.style.display = "inline";
    updateWhatShouldIInstallData();
  }else{
    //wsii is disabled
    wsiiDiv.style.display = "none";
  }
}
let pluginsSize = 100;
function updateWhatShouldIInstallData() {
  //console.log(`Updating WhatShouldIInstall data..`);
  let wsiiOption = document.getElementById("select-server-version");
  //console.log(`Selected is ${wsiiOption.value}`);
  //console.log(`Allowed protocols: [${allowedProtocols.join(", ")}]`)
  //console.log(`Allowed versions: [${allowedVersions.join(", ")}]`)
  if(!wsiiOption.value || wsiiOption.value == "none" || wsiiOption.value.includes("separator") || typeof serverVersions[wsiiOption.value] == "undefined") {
    wsiiData.innerText = ``
  }else{
    let versionData = serverVersions[wsiiOption.value];
    let protocol = versionData.protocol;
    let useViaRewind = false;
    let useViaBackwards = false;
    if(allowedProtocols.length == 0) {
      wsiiData.innerHTML = ``
      let span = document.createElement("span");
      span.style.fontSize = "25px";
      span.style.color = "#fc5044";
      span.innerText = `If you block all versions players cannot join..`
      wsiiData.appendChild(document.createElement("br"));
      wsiiData.appendChild(span);
    }else if(allowedProtocols.length == 1 && allowedProtocols[0] == protocol) {
      wsiiData.innerHTML = ``
      let span = document.createElement("span");
      span.style.fontSize = "25px";
      span.style.color = "#fc5044";
      span.innerText = `You don't need anything!`
      let span2 = document.createElement("span");
      span2.style.fontSize = "29px";
      span2.style.color = "#32e140";
      span2.innerText = `Players can join without issues!`
      wsiiData.appendChild(document.createElement("br"));
      wsiiData.appendChild(span);
      wsiiData.appendChild(document.createElement("br"));
      wsiiData.appendChild(span2);
    }else{
      if(protocol >= 107) { //Server 1.9+
        useViaRewind = [4,5].some(p=> allowedProtocols.includes(p));
        if(protocol >= 210) {//Server 1.10+
          for(let allowedProtocol of allowedProtocols) {
            if(allowedProtocol > 5) {
              if(allowedProtocol < protocol) {
                useViaBackwards = true;
              }
            }
          }
        }
      }else{//Server 1.8
        useViaRewind = allowedProtocols.includes(4);
      }
      if(!useViaRewind && !useViaBackwards) {
        wsiiData.innerHTML = ``
        let span = document.createElement("span");
        span.style.fontSize = "25px";
        span.style.color = "#fc5044";
        span.innerText = `You only need ViaVersion`
        wsiiData.appendChild(document.createElement("br"));
        wsiiData.appendChild(span);
        wsiiData.appendChild(document.createElement("br"));
        let link = document.createElement('a');
        link.href = 'https://alonsoaliaga.com/ViaVersion';
        let image = document.createElement('img');
        image.width = pluginsSize;
        image.height = pluginsSize;
        image.src = 'https://i.imgur.com/LfOXpEw.png';
        link.appendChild(image);
        wsiiData.appendChild(link);
      }else{
        wsiiData.innerHTML = ``
        let spanVV = document.createElement("span");
        spanVV.style.fontSize = "25px";
        spanVV.style.color = "#fc5044";
        spanVV.innerText = `Remember you must have ViaVersion!`
        wsiiData.appendChild(document.createElement("br"));
        wsiiData.appendChild(spanVV);
        
        let linkVV = document.createElement('a');
        linkVV.href = 'https://alonsoaliaga.com/ViaVersion';
        let imageVV = document.createElement('img');
        imageVV.width = pluginsSize;
        imageVV.height = pluginsSize;
        imageVV.src = 'https://i.imgur.com/LfOXpEw.png';
        linkVV.appendChild(imageVV);
        wsiiData.appendChild(document.createElement("br"));
        wsiiData.appendChild(linkVV);

        let spanVP = document.createElement("span");
        spanVP.style.fontSize = "25px";
        spanVP.style.color = "#fc5044";
        wsiiData.appendChild(document.createElement("br"));
        wsiiData.appendChild(spanVP);
        wsiiData.appendChild(document.createElement("br"));
        let installed = "";
        if(useViaRewind) {
          installed += `ViaRewind`
          let link = document.createElement('a');
          link.href = 'https://alonsoaliaga.com/ViaRewind';
          let image = document.createElement('img');
          image.width = pluginsSize;
          image.height = pluginsSize;
          image.src = 'https://i.imgur.com/pXBuYb1.png';
          image.style.padding = "0px 5px 0px 5px";
          link.appendChild(image);
          wsiiData.appendChild(link);

          let link2 = document.createElement('a');
          link2.href = 'https://hangar.papermc.io/ViaVersion/ViaRewindLegacySupport';
          let image2 = document.createElement('img');
          image2.width = pluginsSize;
          image2.height = pluginsSize;
          image2.src = 'https://www.spigotmc.org/data/resource_icons/52/52924.jpg';
          image2.style.padding = "0px 5px 0px 5px";
          link2.appendChild(image2);
          wsiiData.appendChild(link2);
        }
        if(useViaBackwards) {
          if(!useViaRewind) installed += `ViaBackwards`
          else installed += ` and ViaBackwards`
          let link = document.createElement('a');
          link.href = 'https://alonsoaliaga.com/ViaBackwards';
          let image = document.createElement('img');
          image.width = pluginsSize;
          image.height = pluginsSize;
          image.src = 'https://i.imgur.com/WloyIUh.png';
          image.style.padding = "0px 5px 0px 5px";
          link.appendChild(image);
          wsiiData.appendChild(link);
        }
        spanVP.innerText = `You must have ${installed} installed!`
      }
    }
  }
}
let serverVersions = {
  "none": {
    name: "Click here",
    disabled: true
  },
  "1.8.x-separator": {
    name: "1.8.x 🐰",
    disabled: true
  },
  "1.8.x": {
    protocol: 47,
    name: "1.8.x"
  },
  "1.9-separator": {
    name: "1.9 🛡️",
    disabled: true
  },
  "1.9": {
    protocol: 107,
    name: "1.9"
  },
  "1.9.1": {
    protocol: 108,
    name: "1.9.1"
  },
  "1.9.2": {
    protocol: 109,
    name: "1.9.2"
  },
  "1.9.3": {
    protocol: 110,
    name: "1.9.3"
  },
  "1.9.4": {
    protocol: 110,
    name: "1.9.4"
  },
  "1.10-separator": {
    name: "1.10 ❄️",
    disabled: true
  },
  "1.10": {
    protocol: 210,
    name: "1.10"
  },
  "1.10.1": {
    protocol: 210,
    name: "1.10.1"
  },
  "1.10.2": {
    protocol: 210,
    name: "1.10.2"
  },
  "1.11-separator": {
    name: "1.11 🗺️",
    disabled: true
  },
  "1.11": {
    protocol: 315,
    name: "1.11"
  },
  "1.11.1": {
    protocol: 316,
	  name: "1.11.1"
  },
  "1.11.2": {
    protocol: 316,
	  name: "1.11.2"
  },
  "1.12-separator": {
	  name: "1.12 🦜",
    disabled: true
  },
  "1.12": {
    protocol: 335,
	  name: "1.12"
  },
  "1.12.1": {
    protocol: 338,
	  name: "1.12.1"
  },
  "1.12.2": {
    protocol: 340,
	  name: "1.12.2"
  },
  "1.13": {
    protocol: 393,
	  name: "1.13"
  },
  "1.13-separator": {
	  name: "1.13 🐢",
    disabled: true
  },
  "1.13.1": {
    protocol: 401,
	  name: "1.13.1"
  },
  "1.13.2": {
    protocol: 404,
	  name: "1.13.2"
  },
  "1.14": {
    protocol: 477,
	  name: "1.14"
  },
  "1.14-separator": {
	  name: "1.14 🏗️",
    disabled: true
  },
  "1.14.1": {
    protocol: 480,
	  name: "1.14.1"
  },
  "1.14.2": {
    protocol: 485,
	  name: "1.14.2"
  },
  "1.14.3": {
    protocol: 490,
	  name: "1.14.3"
  },
  "1.14.4": {
    protocol: 498,
	  name: "1.14.4"
  },
  "1.15": {
    protocol: 573,
	  name: "1.15"
  },
  "1.15-separator": {
	  name: "1.15 🐝",
    disabled: true
  },
  "1.15.1": {
    protocol: 575,
	  name: "1.15.1"
  },
  "1.15.2": {
    protocol: 578,
	  name: "1.15.2"
  },
  "1.16": {
    protocol: 735,
	  name: "1.16"
  },
  "1.16-separator": {
	  name: "1.16 ⛏️",
    disabled: true
  },
  "1.16.1": {
    protocol: 736,
	  name: "1.16.1"
  },
  "1.16.2": {
    protocol: 751,
	  name: "1.16.2"
  },
  "1.16.3": {
    protocol: 753,
	  name: "1.16.3"
  },
  "1.16.4": {
    protocol: 754,
	  name: "1.16.4"
  },
  "1.16.5": {
    protocol: 754,
	  name: "1.16.5"
  },
  "1.17": {
    protocol: 755,
	  name: "1.17"
  },
  "1.17-separator": {
	  name: "1.17 🪔",
    disabled: true
  },
  "1.17.1": {
    protocol: 756,
	  name: "1.17.1"
  },
  "1.18-separator": {
	  name: "1.18 🗻",
    disabled: true
  },
  "1.18": {
    protocol: 757,
	  name: "1.18"
  },
  "1.18.1": {
    protocol: 757,
	  name: "1.18.1"
  },
  "1.18.2": {
    protocol: 758,
	  name: "1.18.2"
  },
  "1.19": {
    protocol: 759,
	  name: "1.19"
  },
  "1.19-separator": {
	  name: "1.19 🐸",
    disabled: true
  },
  "1.19.1": {
    protocol: 760,
	  name: "1.19.1"
  },
  "1.19.2": {
    protocol: 760,
	  name: "1.19.2"
  },
  "1.19.3": {
    protocol: 761,
	  name: "1.19.3"
  },
  "1.19.4": {
    protocol: 762,
	  name: "1.19.4"
  },
  "1.20-separator": {
	  name: "1.20 🐪",
    disabled: true
  },
  "1.20": {
    protocol: 763,
	  name: "1.20"
  },
  "1.20.1": {
    protocol: 763,
	  name: "1.20.1"
  },
  "1.20.2": {
    protocol: 764,
	  name: "1.20.1"
  },
  "1.20.3": {
    protocol: 765,
	  name: "1.20.3"
  },
  "1.20.4": {
    protocol: 765,
	  name: "1.20.4"
  },
  "1.20.5": {
    protocol: 766,
	  name: "1.20.5"
  },
  "1.20.6": {
    protocol: 766,
	  name: "1.20.6"
  },
  "1.21-separator": {
	  name: "1.21 🗝️",
    disabled: true
  },
  "1.21": {
    protocol: 767,
	  name: "1.21"
  },
  "1.21.1": {
    protocol: 767,
	  name: "1.21.1"
  },
  "1.21.2": {
    protocol: 768,
	  name: "1.21.2"
  },
  "1.21.3": {
    protocol: 768,
	  name: "1.21.3"
  },
  "1.21.4": {
    protocol: 769,
	  name: "1.21.4"
  },
  "1.21.5": {
    protocol: 770,
	  name: "1.21.5"
  },
  "1.21.6": {
    protocol: 771,
	  name: "1.21.6"
  },
  "1.21.7": {
    protocol: 772,
	  name: "1.21.7"
  },
  "1.21.8": {
    protocol: 772,
	  name: "1.21.8"
  },
  "1.21.9": {
    protocol: 773,
	  name: "1.21.9"
  },
  "1.21.10": {
    protocol: 773,
	  name: "1.21.10"
  }
}
loadServerVersions();
function loadServerVersions() {
  //console.log(`Loading server version..`);
  let select = document.getElementById('select-server-version');
  if(select) {
    for(let value of Object.keys(serverVersions)) {
      let versionData = serverVersions[value];
      if(versionData.name && versionData.name.length > 0) {
        //console.log(`Adding ${versionData.name} with value ${value}`);
        let option = document.createElement('option');
        option.innerHTML = versionData.name;
        option.style.textAlign = "center";
        option.setAttribute("value",`${value}`);
        if(value == "none") {
          option.setAttribute("selected",true);
        }
        if(versionData.disabled) {
          option.setAttribute("disabled",true);
        }
        select.appendChild(option);
      }
    }
    select.value = "none";
  }
}
let bottons = ["appearance-darkmode","appearance-wsii"]
function toggleDarkmode() {
    if (document.getElementById('darkmode').checked == true) {
      document.body.classList.add('dark');
      document.getElementById('result').classList.add("darktextboxes");
      for (let bID of bottons) {
        let b = document.getElementById(bID);
        if(b) {
          b.classList.remove("lightbuttonboxes");
          b.classList.add("darkbuttonboxes");
        }
      }
      document.getElementById("select-server-version").classList.add("dark");
      let success = document.getElementById('success_message');
      if(success) {
        success.classList.remove("successlight");
        success.classList.add("successdark");
      }
    } else {
      document.body.classList.remove('dark');
      document.getElementById('result').classList.remove("darktextboxes");
      //Buttons
      for (let bID of bottons) {
        let b = document.getElementById(bID);
        if(b) {
          b.classList.remove("darkbuttonboxes");
          b.classList.add("lightbuttonboxes");
        }
      }
      document.getElementById("select-server-version").classList.remove("dark");
      let success = document.getElementById('success_message');
      if(success) {
        success.classList.remove("successdark");
        success.classList.add("successlight");
      }
    }
    //console.log("Dark mode is now: "+(document.getElementById('darkmode').checked))
}
function checkSite(window) {
  let search = window.location.search;
  if(typeof search !== "undefined" && search.length > 0) {
    let parts = [];
    try{
      parts = atob(search.slice(1)).split("&");
    }catch(e) {}
    //console.log(parts);
    for(let part of parts) {
      let [k,v] = part.split("=");
      if(k == atob("YmV0YQ==")) {
        let wsiiDiv = document.getElementById("appearance-wsii");
        if(wsiiDiv && v == "true") {
          wsiiDiv.style.display = "inline"
        }
      }else if(k == atob("d3NpaQ==")) {
        let wsiiOption = document.getElementById("wsii")
        if(wsiiOption && v == "true") {
          wsiiOption.checked = true;
          let wsiiDiv = document.getElementById("what-should-i-install-div");
          if(wsiiDiv) {
            wsiiDiv.style.display = "inline"
          }
        }
      } 
    }
  }
  setTimeout(()=>{
    let href = window.location.href;
    if(!href.includes(atob("YWxvbnNvYWxpYWdhLmdpdGh1Yi5pbw=="))) {
      try{document.title = `Page stolen from https://${atob("YWxvbnNvYWxpYWdhLmdpdGh1Yi5pbw==")}`;}catch(e){}
      window.location = `https://${atob("YWxvbnNvYWxpYWdhLmdpdGh1Yi5pbw==")}/version-generator/`}
  });
  fetch('https://raw.githubusercontent.com/AlonsoAliaga/AlonsoAliagaAPI/refs/heads/main/api/tools/tools-list.json')
    .then(res => res.json())
    .then(content => {
      let toolsData = content;
      let toolsArray = []
      for(let toolData of toolsData) {
        let clazz = typeof toolData.clazz == "undefined" ? "" : ` class="${toolData.clazz}"`;
        let style = typeof toolData.style == "undefined" ? "" : ` style="${toolData.style}"`;
        toolsArray.push(`<span>💠</span> <span${clazz}${style}><a title="${toolData.description}" id="tool-priority-${toolData.priority}" href="${toolData.link}">${toolData.name}</a></span>`);
      }
      document.getElementById("tools-for-you").innerHTML = toolsArray.join(`<br>`);
    });
}
function loadChecking() {
 let href = window.location.href;
 if(!href.includes(atob("YWxvbnNvYWxpYWdhLmdpdGh1Yi5pbw=="))) return;
 let link = atob("aHR0cHM6Ly9hbG9uc29hcGkuZGlzY2xvdWQuYXBwL2NoZWNraW5nP3NpdGU9PHNpdGU+JmtleT08a2V5Pg==")
  .replace(/<site>/g,"version-generator").replace(/<key>/g,"KEY-A");
 let counter = document.getElementById("online-counter");
 if(counter) {
   $.ajax({
     url: link,
     type: "GET", /* or type:"GET" or type:"PUT" */
     dataType: "json",
     data: {
     },
     success: function (result) {
        //console.log(`Total fails: ${counter.dataset.failed}`)
        counter.dataset.failed = "0";
        counter.style.display = "flex";
        if(isNaN(result)) {
         counter.textContent = `🟡 You shouldn't be reading this. Report it on https://alonsoaliaga.com/discord`;
         counter.style.backgroundColor = "yellow";
        }else{
         //counter.textContent = `🟢 ${result} user${result==1?``:`s`} online using our Minecraft Profile Picture Generator!`;
         counter.textContent = `🟢 ${result} online using our Version Generator to configure their servers!`;
         counter.style.backgroundColor = "green";
        }
     },
     error: function (e) {
      //console.log(`Total fails: ${counter.dataset.failed}`)
      if(counter.style.display != "none") {
        let currentFails = +counter.dataset.failed;
        if(currentFails >= 1){
          counter.style.display = "none"
        }else{
          counter.textContent = `🔴 Check your internet connection!`;
          counter.style.backgroundColor = "#7c0000";
          counter.dataset.failed = `${currentFails + 1}`
        }
      }
     }
   });
 }
}
let times = 0;
function loadCounter() {
 let href = window.location.href;
 if(!href.includes(atob("YWxvbnNvYWxpYWdhLmdpdGh1Yi5pbw=="))) return;
 let link = atob("aHR0cHM6Ly9hbG9uc29hcGkuZGlzY2xvdWQuYXBwL2NvdW50ZXI/c2l0ZT08c2l0ZT4ma2V5PTxrZXk+").replace(/<site>/g,"version-generator").replace(/<key>/g,"KEY-A");
 let counter = document.getElementById("visitor-counter");
 if(counter) {
   $.ajax({
     url: link,
     type: "GET", /* or type:"GET" or type:"PUT" */
     dataType: "json",
     data: {
     },
     success: function (result) {
       if(isNaN(result))
         document.getElementById("counter-amount").innerHTML = "Click to return!";
       else document.getElementById("counter-amount").innerHTML = `Visits: ${result}`;
     },
     error: function (e) {
       times++;
       document.getElementById("counter-amount").innerHTML = "Click to return!";
       if(times <= 1) {
        setTimeout(()=>{
          loadCounter();
        },1000*10);
       }
     }
   });
 }
}

function forceParser() {
  //updateOutputText(event);
  setTimeout(()=>{
    $("#yaml_form").submit();
  },100);
}
function updateOutputText(event) {
  $("#yaml_form").submit();
}
function getUpdatedOutputText(data) {
  let obj;
  try{
    obj = JSON.parse(data);
  }catch(e) {
    return;
  }
  let indentationFormat = formats[document.getElementById('output-indentation').value] || formats.default;
  let result = JSON.stringify(obj, null, indentationFormat.space_key);
  return result;
}

let copiedTimeout;
function alertCopied() {
  if(copiedTimeout) {
    clearTimeout(copiedTimeout);
    var sb = document.getElementById("snackbar");
    sb.className = sb.className.replace("show", "");
  }
  var sb = document.getElementById("snackbar");

  //this is where the class name will be added & removed to activate the css
  sb.className = "show";

  copiedTimeout = setTimeout(()=>{ sb.className = sb.className.replace("show", ""); }, 3000);
}
toggleDarkmode();
document.addEventListener("DOMContentLoaded", () => {
  checkSite(window);
  loadCounter();
  updateResult();
  setTimeout(()=>{
    loadChecking();
    setInterval(()=>{
      loadChecking();
    },10000)
  },2500)
});
let adCuts = ["ad-1_7-1_8","ad-1_9_2-1_12_2","ad-1_16_4-and-above","ad-1_21-and-above"]
function lockCutsWithMessage(className,message,iconUrl='https://raw.githubusercontent.com/AlonsoAliaga/version-generator/main/assets/images/lock-icon.png') {
  let elements = adCuts.map(n=>document.getElementById(n)).filter(Boolean);
  for(let element of elements) {
    element = element.parentElement;
    if(!element) continue;
    element.classList.add(className);
    const ov = document.createElement('div');
    ov.className = 'overlay';
    ov.innerHTML = `<img src="${iconUrl}"><span>${message}</span>`;
    element.append(ov);
  }
}
function lockElementWithMessage(element,className,message,iconUrl='https://raw.githubusercontent.com/AlonsoAliaga/version-generator/main/assets/images/lock-icon.png') {
  if(element) {
    element.classList.add(className);
    const ov = document.createElement('div');
    ov.className = 'overlay';
    ov.innerHTML = `<img src="${iconUrl}"><span>${message}</span>`;
    element.append(ov);
  }
}
function processAds() {
  lockCutsWithMessage("adlocked",`Disable AdBlock for this shortcut!`)
}
