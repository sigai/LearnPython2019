#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

from wordpress_xmlrpc import Client, WordPressPost
from wordpress_xmlrpc.methods.posts import NewPost, GetPosts
import ssl

ssl._create_default_https_context = ssl._create_unverified_context

site = "https://www.freeerror.com/xmlrpc.php"
wp = Client(site, "admin", "gsYD5KzMiSFC%tLuzDxEL5WkSqKq^ly9LmUZEkxdVD4bIu*D")

post = WordPressPost()

post.title = "_test_title"
post.content = "_test_content"
post.terms_names = {
    "post_tag" : ["_test_tag1", "_test_tag2"],
    "category": ["dll"]
}
post.post_status = "publish"

wp.call(NewPost(post))

posts = wp.call(GetPosts())
post = posts[0]
print(post)
print(dir(post))
print(post.struct)
