#!/bin/bash

# Este script agrega el badge y estructura faltante a las tarjetas que no lo tienen
python3 << 'PYTHON_EOF'
import re

with open('diplomados.htm', 'r', encoding='utf-8') as f:
    content = f.read()

# Patrón para encontrar tarjetas sin estructura completa
# Buscar tarjetas que tienen precio pero no tienen status-badge
pattern = r'(<div class="thumb">\s*(?:<p class="number">1</p>\s*)?<a href="([^"]+)"><img src="([^"]+)" alt="[^"]+"></a>\s*<span class="price">(?:<em></em>)?(Bs \d+)</span>\s*</div>\s*<div class="down-content">\s*<span class="category">([^<]+)</span>\s*<a href="[^"]+"><i class="fa-regular fa-eye[^<]*</i></a>\s*</div>)'

def create_full_card(match):
    link = match.group(2)
    img_src = match.group(3)
    price = match.group(4)
    category = match.group(5).strip()
    
    # Extraer nombre del diplomado
    diploma_name = link.replace('dip-', '').replace('.htm', '').replace('-', ' ').upper()
    # Limitar longitud
    if len(diploma_name) > 50:
        diploma_name = diploma_name[:50]
    
    return f'''<div class="thumb">
              <a href="{link}"><img src="{img_src}" alt="{link.replace('.htm', '')}"></a>
              <span class="price">{price}</span>
              <span class="status-badge abiertas">ABIERTAS 2026</span>
            </div>
            <div class="down-content">
              <span class="diploma-type">Diplomado</span>
              <h4>{diploma_name}</h4>
              <div class="diploma-info">
                <span><i class="fa-regular fa-clock"></i> 6 MESES</span>
                <span><i class="fa-solid fa-laptop"></i> VIRTUAL</span>
                <span><i class="fa-regular fa-calendar"></i> 26 ENERO</span>
              </div>
              <div class="inscripcion-status">INSCRIPCIONES ABIERTAS</div>
              <span class="category">{category}</span>
              <div class="view-link">
                <a href="{link}"><i class="fa-regular fa-eye"></i></a>
              </div>
            </div>'''

content = re.sub(pattern, create_full_card, content, flags=re.DOTALL)

with open('diplomados.htm', 'w', encoding='utf-8') as f:
    f.write(content)

print("Tarjetas actualizadas!")
PYTHON_EOF
