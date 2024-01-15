document.addEventListener('DOMContentLoaded', function() {
  var downloadButton = document.querySelector('.download-btn');

  downloadButton.addEventListener('click', function() {
    alert('The Google Play Store page would open.');
    // You would replace the above line with actual logic, e.g.,
    // window.location.href = 'https://play.google.com/store/apps/details?id=your.app.id';
  });
});
