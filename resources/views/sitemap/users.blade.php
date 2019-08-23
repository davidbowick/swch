<?php echo '<?xml version="1.0" encoding="UTF-8"?>'; ?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    @foreach ($users as $user)
        <url>
            <loc>https://songwritingchallenge.com/{{ $user->username }}</loc>
            <lastmod>{{ $user->updated_at }}</lastmod>
            <changefreq>daily</changefreq>
            <priority>0.6</priority>
        </url>
    @endforeach
</urlset>