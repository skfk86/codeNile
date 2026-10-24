#!/usr/bin/env bash
# يحمّل كل مكتبات CDN داخل www/vendor ويعيد كتابة الروابط
# حتى يعمل التطبيق بدون إنترنت (عدا Firebase sync والإعلانات).
set -euo pipefail
WWW="${1:-www}"
V="$WWW/vendor"
mkdir -p "$V/cm/mode" "$V/cm/addon" "$V/cm/theme" "$V/fa/css" "$V/fa/webfonts" "$V/fonts" "$V/firebase"

CM=https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16
FA=https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1
FB=https://www.gstatic.com/firebasejs/10.12.0
get(){ curl -fsSL --retry 3 "$1" -o "$2"; }

get $CM/codemirror.min.js                     $V/cm/codemirror.min.js
get $CM/codemirror.min.css                    $V/cm/codemirror.min.css
get $CM/theme/material-darker.min.css         $V/cm/theme/material-darker.min.css
get $CM/mode/javascript/javascript.min.js     $V/cm/mode/javascript.min.js
get $CM/addon/edit/matchbrackets.min.js       $V/cm/addon/matchbrackets.min.js
get $CM/addon/edit/closebrackets.min.js       $V/cm/addon/closebrackets.min.js
get $CM/addon/selection/active-line.min.js    $V/cm/addon/active-line.min.js

get $FA/css/all.min.css $V/fa/css/all.min.css
for f in fa-solid-900 fa-regular-400 fa-brands-400 fa-v4compatibility; do
  for ext in woff2 ttf; do get "$FA/webfonts/$f.$ext" "$V/fa/webfonts/$f.$ext" || true; done
done

for m in app analytics auth firestore; do get "$FB/firebase-$m.js" "$V/firebase/firebase-$m.js"; done
sed -i "s#$FB/#./#g" $V/firebase/*.js

# Cairo font (Google Fonts CSS → local woff2)
UA="Mozilla/5.0 (Linux; Android 14) AppleWebKit/537.36 Chrome/126 Mobile Safari/537.36"
curl -fsSL -A "$UA" "https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&display=swap" -o $V/fonts/cairo.css
i=0
for u in $(grep -o 'https://fonts.gstatic.com[^)]*' $V/fonts/cairo.css | sort -u); do
  i=$((i+1)); get "$u" "$V/fonts/cairo-$i.woff2"; sed -i "s#$u#cairo-$i.woff2#g" $V/fonts/cairo.css
done

for f in "$WWW"/*.html; do
  sed -i \
    -e "s#$CM/codemirror.min.js#vendor/cm/codemirror.min.js#g" \
    -e "s#$CM/codemirror.min.css#vendor/cm/codemirror.min.css#g" \
    -e "s#$CM/theme/material-darker.min.css#vendor/cm/theme/material-darker.min.css#g" \
    -e "s#$CM/mode/javascript/javascript.min.js#vendor/cm/mode/javascript.min.js#g" \
    -e "s#$CM/addon/edit/matchbrackets.min.js#vendor/cm/addon/matchbrackets.min.js#g" \
    -e "s#$CM/addon/edit/closebrackets.min.js#vendor/cm/addon/closebrackets.min.js#g" \
    -e "s#$CM/addon/selection/active-line.min.js#vendor/cm/addon/active-line.min.js#g" \
    -e "s#$FA/css/all.min.css#vendor/fa/css/all.min.css#g" \
    -e "s#$FB/#./vendor/firebase/#g" \
    -e "s#https://fonts.googleapis.com/css2?family=Cairo[^\"]*#vendor/fonts/cairo.css#g" \
    "$f"
done
echo "✅ vendorized:"; du -sh "$V"
grep -c "cdnjs\|gstatic\|googleapis" "$WWW/index.html" || true
