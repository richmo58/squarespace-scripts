function setNoTrackCookie() {
  document.cookie = "noTrackMe=true; max-age=31536000; path=/";
  alert('Cookie has been set. You won't be tracked on this device.');
}
