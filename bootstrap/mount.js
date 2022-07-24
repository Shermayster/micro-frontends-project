export function copyBodyTags(html) {
  const bodyNodes = html.querySelector("body");
  const app = document.createElement("div");
  for (const bodyNode of bodyNodes.children) {
    const node = document.adoptNode(bodyNode);
    node.classList.add("micro-app");
    app.appendChild(document.adoptNode(node));
  }
  document.getElementById("app").innerHTML = app.innerHTML;
}

export function copyHeadTags(html) {
  const headNodes = html.querySelector("head");
  for (const headNode of headNodes.children) {
    if (headNode.tagName === "SCRIPT") {
      document.head.appendChild(createScriptTag(headNode));
    } else {
      document.head.appendChild(document.adoptNode(headNode));
    }
  }
}
export function createBaseTag(baseUrl) {
  const el = document.createElement("base");
  el.href = baseUrl;
  document.head.appendChild(el);
}

function updateRequest(path) {
  return path.replace(/.*assets/, "assets");
}

export function parseToHtml(res) {
  return res
    .text()
    .then((str) => new DOMParser().parseFromString(str, "text/html"));
}

export function createScriptTag(node) {
  const script = document.createElement("script");
  script.type = "module";
  script.crossOrigin = "anonymous";
  script.src = updateRequest(node.src);
  return script;
}
