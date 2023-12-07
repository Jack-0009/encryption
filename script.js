function encrypt() {
  let text = document.getElementById("textInput").value;
  let encryptedText = CryptoJS.AES.encrypt(text, "سري جدا").toString();
  document.getElementById("outputText").value = encryptedText;
}

function decrypt() {
  let encryptedText = document.getElementById("textInput").value;
  let bytes  = CryptoJS.AES.decrypt(encryptedText, "سري جدا");
  let decryptedText = bytes.toString(CryptoJS.enc.Utf8);
  if (decryptedText) {
      document.getElementById("outputText").value = decryptedText;
  } else {
      alert("فشل في فك التشفير. تأكد من أن النص المشفر صحيح.");
  }
}

function copyText() {
  let text = document.getElementById("outputText");
  text.select();
  document.execCommand("copy");
  alert("تم نسخ النص!");
}
