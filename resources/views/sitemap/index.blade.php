<?php echo '<?xml version="1.0" encoding="UTF-8"?>'; ?>

<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <sitemap>
        <loc>https://songwritingchallenge.com/sitemap/posts</loc>
        <lastmod>{{ $post->updated_at }}</lastmod>
    </sitemap>
    <sitemap>
        <loc>https://songwritingchallenge.com/sitemap/users</loc>
        <lastmod>{{ $user->updated_at }}</lastmod>
    </sitemap>
    <sitemap>
        <loc>https://songwritingchallenge.com/sitemap/prompts</loc>
        <lastmod>{{ $prompt->updated_at }}</lastmod>
    </sitemap>
    <sitemap>
        <loc>https://songwritingchallenge.com/sitemap/showcases</loc>
        <lastmod>{{ $showcase->updated_at }}</lastmod>
    </sitemap>
</sitemapindex>