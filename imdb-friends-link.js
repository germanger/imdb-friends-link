$(document).ready(function () {

    // not a logged user
    if ($("#consumer_user_nav").length == 0) {
        return;
    }

    // Fetch user Id
    var friendsHref = $("#consumer_user_nav").find("a").first().attr("href");
    friendsHref = friendsHref.substring(0, friendsHref.lastIndexOf("/")) + "/boards/friends";
    
    // Create friends link
    var friendsAnchor = $('<li><a href="' + friendsHref + '">Your Friends</a></li>');
    
    // Append friends link
    $("#consumer_user_nav").find(".subNavListContainer").first().find("ul").first().append(friendsAnchor);
});