// Work around a Windows/Node 24 uv_os_get_passwd failure seen on this host.
// Capacitor's terminal helper only needs a shell path from os.userInfo().
const os = require('node:os');
const originalUserInfo = os.userInfo;

os.userInfo = function safeUserInfo() {
  try {
    return originalUserInfo.call(os);
  } catch {
    return {
      username: process.env.USERNAME || 'user',
      homedir: process.env.USERPROFILE || process.cwd(),
      shell: process.env.COMSPEC || 'cmd.exe',
      uid: -1,
      gid: -1,
    };
  }
};
