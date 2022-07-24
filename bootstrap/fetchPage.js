import {
  createBaseTag,
  copyHeadTags,
  copyBodyTags,
  parseToHtml,
} from "./mount";

import { unmount } from "./unmount";

const appEnums = {
  welcome: "welcome",
  music: "music",
};

const base = (path) => `http://localhost:8000/${path}`;

export function downloadApp() {
  const appName = getAppname();
  if (!appName) {
    throw new Error(`App ${appName} not found`);
  }

  unmount();
  if (appName === appEnums.welcome) {
    loadWelcome();
  }

  if (appName === appEnums.music) {
    loadMusic();
  }
}

function getAppname() {
  const path = window.location.pathname;
  if (path.includes(appEnums.welcome)) {
    return appEnums.welcome;
  }

  if (path.includes(appEnums.music)) {
    return appEnums.music;
  }
}

function loadApp(baseUrl) {
  document.head.innerHTML = "";
  fetch(baseUrl)
    .then(parseToHtml)
    .then((html) => {
      createBaseTag(baseUrl);
      copyHeadTags(html);
      copyBodyTags(html);
    });
}

function loadWelcome() {
  loadApp(base("welcome/"));
}

function loadMusic() {
  loadApp(base("music/"));
}
