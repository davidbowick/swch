<?php echo '<?xml version="1.0" encoding="UTF-8"?>'; ?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    @foreach ($prompts as $prompt)
        <url>
            <loc>https://songwritingchallenge.com/{{ $prompt->slug }}</loc>
            <lastmod>{{ $prompt->updated_at }}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>0.6</priority>
        </url>
    @endforeach
</urlset>