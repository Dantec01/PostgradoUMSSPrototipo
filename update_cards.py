import re

# Leer el archivo
with open('diplomados.htm', 'r', encoding='utf-8') as f:
    content = f.read()

# Patrón para encontrar las tarjetas antiguas
pattern = r'(<div class="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 )(ofertados|encurso)([^"]*?">\s*<div class="item">\s*<div class="thumb">\s*)<p class="number">1</p>\s*(<a href="([^"]+)"><img src="([^"]+)" alt="([^"]+)"></a>\s*)<span class="price"><em></em>(Bs \d+)</span>\s*</div>\s*<div class="down-content">\s*<span class="category">([^<]*)</span>\s*<a href="[^"]+"><i class="fa-regular fa-eye[^<]*</i></a>\s*</div>\s*</div>\s*</div>)'

def replace_card(match):
    col_start = match.group(1)
    status = match.group(2)
    area_classes = match.group(3)
    thumb_start = match.group(4)
    link = match.group(5)
    img_src = match.group(6)
    img_alt = match.group(7)
    price = match.group(8)
    category = match.group(9).strip()
    
    # Extraer nombre del diplomado del link
    diploma_name = link.replace('dip-', '').replace('.htm', '').replace('-', ' ').upper()
    
    # Nuevo HTML
    new_html = f'''<div class="col-lg-4 col-md-6 align-self-center mb-30 trending-items {status}{area_classes}>
          <div class="item">
            <div class="thumb">
              <a href="{link}"><img src="{img_src}" alt="{img_alt}"></a>
              <span class="price">{price}</span>
              <span class="status-badge abiertas">ABIERTAS 2026</span>
            </div>
            <div class="down-content">
              <span class="diploma-type">Diplomado</span>
              <h4>{diploma_name[:50]}</h4>
              <div class="diploma-info">
                <span><i class="fa-regular fa-clock"></i> 6 MESES</span>
                <span><i class="fa-solid fa-laptop"></i> VIRTUAL</span>
                <span><i class="fa-regular fa-calendar"></i> 26 ENERO</span>
              </div>
              <div class="inscripcion-status abiertas">INSCRIPCIONES ABIERTAS</div>
              <span class="category">{category}</span>
              <div class="view-link">
                <a href="{link}"><i class="fa-regular fa-eye"></i></a>
              </div>
            </div>
          </div>
        </div>'''
    
    return new_html

# Reemplazar todas las tarjetas
content = re.sub(pattern, replace_card, content, flags=re.DOTALL)

# Guardar el archivo
with open('diplomados.htm', 'w', encoding='utf-8') as f:
    f.write(content)

print("Tarjetas actualizadas correctamente!")
