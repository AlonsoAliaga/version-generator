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
  alert('You text was copied! Ready to paste!\n\nThanks for using our tool!\n- AlonsoAliaga');
  document.body.removeChild(textArea);
}
function markBetween(min,max,blacklist) {
  let minNumber = protocols[min].number;
  let maxNumber = protocols[max].number;
  let whitelistMode = document.getElementById(`whitelist-mode`);
  if(whitelistMode) whitelistMode.checked = blacklist;
  for(let version of Object.keys(protocols)) {
    let versionOption = document.getElementById(`${version}-option`);
    if(versionOption) {
      let number = protocols[version].number;
      if(minNumber > number && number < maxNumber)
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
function updateResult() {
  let result = document.getElementById('result');
  if(result) {
    let list = [];
    let versionMode = document.getElementById(`version-mode`).checked;
    let whitelistMode = document.getElementById(`whitelist-mode`).checked;
    let thelegend = document.getElementById('thelegend');
    if(thelegend)
      thelegend.innerHTML = `&nbsp;&nbsp;&nbsp;Select versions to <span style="color: ${whitelistMode?"#4bad13":"#fc5044"}">${whitelistMode?"whitelist":"blacklist"}</span>&nbsp;&nbsp;&nbsp;`;
    for(let version of Object.keys(protocols)) {
      let versionOption = document.getElementById(`${version}-option`);
      if(versionOption) {
        let data = protocols[version];
        if(whitelistMode) {
          if(!versionOption.checked) {
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
  }
}
function test() {
  console.log("TESTING WORKS!")
}
function toggleDarkmode() {
    if (document.getElementById('darkmode').checked == true) {
      document.body.classList.add('dark');
      document.getElementById('result').classList.add("darktextboxes");
      
      document.getElementById('output-indentation').classList.remove("lightbuttonboxes");
      document.getElementById('output-indentation').classList.add("darkbuttonboxes");
      
      document.getElementById('appearance').classList.remove("lightbuttonboxes");
      document.getElementById('appearance').classList.add("darkbuttonboxes");
      let success = document.getElementById('success_message');
      if(success) {
        success.classList.remove("successlight");
        success.classList.add("successdark");
      }
    } else {
      document.body.classList.remove('dark');
      document.getElementById('result').classList.remove("darktextboxes");
      //Buttons
      document.getElementById('output-indentation').classList.remove("darkbuttonboxes");
      document.getElementById('output-indentation').classList.add("lightbuttonboxes");

      document.getElementById('appearance').classList.remove("darkbuttonboxes");
      document.getElementById('appearance').classList.add("lightbuttonboxes");
      let success = document.getElementById('success_message');
      if(success) {
        success.classList.remove("successdark");
        success.classList.add("successlight");
      }
    }
    //console.log("Dark mode is now: "+(document.getElementById('darkmode').checked))
}
function checkSite(window) {
  setTimeout(()=>{
    let href = window.location.href;
    if(!href.includes(atob("YWxvbnNvYWxpYWdhLmdpdGh1Yi5pbw=="))) {
      try{document.title = `Page stolen from https://${atob("YWxvbnNvYWxpYWdhLmdpdGh1Yi5pbw==")}`;}catch(e){}
      window.location = `https://${atob("YWxvbnNvYWxpYWdhLmdpdGh1Yi5pbw==")}/version-generator/`}
  });
}

let times = 0;
function loadCounter() {
 let link = atob("aHR0cHM6Ly9hbG9uc29hbGlhZ2EtcGFnZS1jb3VudC5nbGl0Y2gubWUvY291bnRlcj9zaXRlPTxzaXRlPiZrZXk9PGtleT4=").replace(/<site>/g,"version-generator").replace(/<key>/g,"KEY-A");
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
toggleDarkmode();