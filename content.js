(function() {
    alert("Are you ready for something amazing")

    function modifyProfilePictures() {
       
        var profilePictures = document.querySelectorAll("img.EntityPhoto-circle-3, img.update-components-actor__avatar-image");

        for (var i = 0; i < profilePictures.length; i++) {
            profilePictures[i].src = "https://images.squarespace-cdn.com/content/5e949a92e17d55230cd1d44f/1643338374594-WVJKK80W6SB9BZK86I5F/HelloLight_Mac.png?format=1500w&content-type=image%2Fpng";
            
        }
    }
    modifyProfilePictures();

    var observer = new MutationObserver(modifyProfilePictures);
    observer.observe(document.body, { childList: true, subtree: true });
})();
