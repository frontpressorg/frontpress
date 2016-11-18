angular.module("frontpress.apis.api-manager-map")
.constant("ApiManagerMap", {
    "totalPostsNumber": ["headers","X-WP-Total"],
    "allPostsPath": ["body"],
    "postTitle": ["title", "rendered"],
    "postId": ["id"],
    "postDate": ["date"],
    "siteName": ["name"]
});
