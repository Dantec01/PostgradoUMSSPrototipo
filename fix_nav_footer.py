import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent

def get_footer_links_block(current_filename: str) -> str:
    links = [
        ("avisos.htm", "Avisos"),
        ("documentacion.htm", "Documentación"),
        ("ddigital.htm", "DDigital"),
        ("acercade.htm", "Acerca de"),
        ("preguntas_frecuentes.htm", "Preguntas Frecuentes"),
    ]
    
    lines = ['        <div class="footer-links">']
    for href, text in links:
        active_class = ' class="active"' if href == current_filename else ''
        lines.append(f'          <a href="{href}"{active_class}>{text}</a>')
    lines.append('        </div>')
    
    return '\n'.join(lines)


def remove_info_dropdown(html: str) -> str:
    # Remove the navbar dropdown item that contains "Información" and the htmlCss submenu.
    pattern = re.compile(
        r"\s*<li[^>]*>\s*\n?\s*<a\s+href=\"#\"\s*>\s*Información\s*</a>\s*\n?\s*"
        r"<i[^>]*htmlcss-arrow[^>]*>\s*</i>\s*\n?\s*"
        r"<ul\s+class=\"htmlCss-sub-menu\s+sub-menu\"\s*>.*?</ul>\s*\n?\s*</li>\s*",
        re.IGNORECASE | re.DOTALL,
    )
    return re.sub(pattern, "\n", html)


def rename_contactos_to_contacto(html: str) -> str:
    # Only rename the label when it links to contactos.htm
    return re.sub(
        r'(<a\s+href=\"contactos\.htm\"[^>]*>)\s*Contactos\s*(</a>)',
        r"\1Contacto\2",
        html,
        flags=re.IGNORECASE,
    )


def remove_inline_active_red_rule(html: str) -> str:
    # Remove the specific rule that forces the active nav item to red.
    rule_pattern = re.compile(
        r"\s*\.navbar\s*\.active\s*\{[^}]*background-color\s*:\s*red\s*;?[^}]*\}\s*",
        re.IGNORECASE | re.DOTALL,
    )
    html2 = re.sub(rule_pattern, "\n", html)

    # If a <style> block becomes empty/whitespace, remove it.
    empty_style_pattern = re.compile(r"<style>\s*</style>", re.IGNORECASE)
    html2 = re.sub(empty_style_pattern, "", html2)
    return html2


def ensure_footer_links_and_class(html: str, filename: str) -> str:
    footer_block = get_footer_links_block(filename)
    
    # Update footer links if they exist
    pattern_links = re.compile(
        r'<div class="footer-links">.*?</div>',
        re.IGNORECASE | re.DOTALL
    )
    
    if pattern_links.search(html):
        html = pattern_links.sub(footer_block, html)
    else:
        # Find the first copyright <p> and insert links right before it.
        p_pattern = re.compile(r"(?P<indent>\s*)<p(?P<attrs>[^>]*)>\s*Copyright\s+©", re.IGNORECASE)
        match = p_pattern.search(html)
        if match:
            indent = match.group("indent")
            insert = "\n" + footer_block.replace("        ", indent) + indent
            html = html[: match.start()] + insert + html[match.start() :]

    # Remove <br> tags before footer-links
    html = re.sub(r'(<br\s*/?>\s*)+<div class="footer-links">', r'\n        <div class="footer-links">', html, flags=re.IGNORECASE)

    # Add footer-copyright class if missing
    html = re.sub(
        r"<p(?!\s+class=)([^>]*)>\s*Copyright\s+©",
        r'<p class="footer-copyright"\1>Copyright ©',
        html,
        flags=re.IGNORECASE,
    )

    return html


def process_file(path: Path) -> bool:
    original = path.read_text(encoding="utf-8", errors="ignore")
    updated = original

    updated = remove_info_dropdown(updated)
    updated = rename_contactos_to_contacto(updated)
    updated = ensure_footer_links_and_class(updated, path.name)
    updated = remove_inline_active_red_rule(updated)

    if updated != original:
        path.write_text(updated, encoding="utf-8")
        return True
    return False


def main() -> int:
    changed = []

    for path in sorted(ROOT.glob("*.htm")):
        if process_file(path):
            changed.append(path.name)

    for path in sorted(ROOT.glob("*.html")):
        if process_file(path):
            changed.append(path.name)

    print(f"Archivos modificados: {len(changed)}")
    for name in changed:
        print(f"- {name}")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
