# debug_pages_trace.py
from playwright.sync_api import sync_playwright
import json, time, sys

URL = "https://ftj2006.github.io/suzuki-manual-scrapper/suzuki-manual/index.html"
out = {"console": [], "requests": []}

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()
    page.on("console", lambda msg: out["console"].append({"type": msg.type, "text": msg.text}))
    def on_request(request):
        out["requests"].append({
            "url": request.url,
            "method": request.method,
            "resourceType": request.resource_type,
            "headers": dict(request.headers)
        })
    def on_requestfailed(req):
        out["requests"].append({"url": req.url, "failed": True, "failureText": req.failure})
    page.on("request", on_request)
    page.on("requestfailed", on_requestfailed)
    page.on("pageerror", lambda e: out["console"].append({"type":"pageerror","text":str(e)}))
    page.goto(URL, wait_until="networkidle", timeout=60000)
    # give scripts a bit more time
    time.sleep(1.5)
    # also capture each iframe's document HEAD base and the DOM for quick inspection
    frames_info = []
    for f in page.frames:
        try:
            base = f.eval_on_selector("head base", "el => el ? el.getAttribute('href') : null")
        except Exception:
            base = None
        frames_info.append({"name": f.name, "url": f.url, "base": base})
    out["frames"] = frames_info
    browser.close()

with open("pages_trace.json", "w", encoding="utf-8") as fh:
    json.dump(out, fh, indent=2)
print("Wrote pages_trace.json with console + requests + frames info")
