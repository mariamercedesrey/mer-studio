#!/usr/bin/env bash
# TTFB of the home vs an inner page, 5 runs each (curl time_starttransfer, seconds → ms). Usage: scripts/ttfb.sh https://deploy-preview-NN--<site>.netlify.app
# "/" goes through the default-language Edge Function; "/work/the-mile/" does not, so the gap between them is the function's cost.
# Redirects are NOT followed (-L off): the es-AR case measures the 302 itself.
base="${1:?base URL, e.g. https://deploy-preview-33--mer-studio.netlify.app}"
run() { # label path [curl args…]
  local label="$1" path="$2"; shift 2; local t=()
  curl -s -o /dev/null "$@" "$base$path" >/dev/null # warm DNS/TLS/edge cache, not counted
  for _ in 1 2 3 4 5; do t+=("$(curl -s -o /dev/null -w '%{time_starttransfer}' "$@" "$base$path" | awk '{printf "%d", $1*1000}')"); done
  printf '%-34s %s ms   median %s\n' "$label" "${t[*]}" "$(printf '%s\n' "${t[@]}" | sort -n | sed -n 3p)"
}
run '/ Accept-Language en-US' / -H 'Accept-Language: en-US,en;q=0.9'
run '/ Accept-Language es-AR (302)' / -H 'Accept-Language: es-AR,es;q=0.9'
run '/ User-Agent Googlebot' / -A 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
run '/work/the-mile/ (no Edge Function)' /work/the-mile/
