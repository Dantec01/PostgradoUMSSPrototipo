import re
import os

# List of programs from the JS file
programas = [
  {"id": "dip-biomedica-2v", "url": "dip-biomedica-2v.htm"},
  {"id": "dip-ccialimentos-10v", "url": "dip-ccialimentos-10v.htm"},
  {"id": "dip-cdatos-4v", "url": "dip-cdatos-4v.htm"},
  {"id": "dip-ciberseguridad-1v", "url": "dip-ciberseguridad-1v.htm"},
  {"id": "dip-edusup-19v", "url": "dip-edusup-19v.htm"},
  {"id": "dip-estadistica-4v", "url": "dip-estadistica-4v.htm"},
  {"id": "dip-iergonomia-7v", "url": "dip-iergonomia-7v.htm"},
  {"id": "dip-isoldadura-1v", "url": "dip-isoldadura-1v.htm"},
  {"id": "dip-lutribologia-1v", "url": "dip-lutribologia-1v.htm"},
  {"id": "dip-mecatronicaedi-3v", "url": "dip-mecatronicaedi-3v.htm"},
  {"id": "dip-tbiocombustible-1v", "url": "dip-tbiocombustible-1v.htm"},
  {"id": "dip-trabaltoriesgo-3v", "url": "dip-trabaltoriesgo-3v.htm"},
  {"id": "maes-iaedusup-1v", "url": "maes-iaedusup-1v.htm"},
  {"id": "maes-imanufactura-1v", "url": "maes-imanufactura-1v.htm"},
  {"id": "maes-logisticaegcs-1v", "url": "maes-logisticaegcs-1v.htm"},
  {"id": "maes-sigcma-v15", "url": "maes-sigcma-v15.htm"},
  {"id": "maes-swia-1v", "url": "maes-swia-1v.htm"}
]

results = {}

for prog in programas:
    file_path = prog['url']
    if os.path.exists(file_path):
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
            modalidad = "Virtual" # Default
            
            # Pattern: <li><strong>Modalidad de Estudio:</strong> Virtual</li>
            match = re.search(r'<li><strong>Modalidad(?: de Estudio)?:</strong>\s*(.*?)</li>', content, re.IGNORECASE)
            
            if match:
                extracted = match.group(1).strip()
                # Clean up HTML tags if any
                extracted = re.sub(r'<[^>]+>', '', extracted).strip()
                
                if "presencial" in extracted.lower() and "semi" not in extracted.lower():
                    modalidad = "Presencial"
                elif "semipresencial" in extracted.lower() or "híbrido" in extracted.lower() or "hibrido" in extracted.lower():
                    modalidad = "Semipresencial"
                elif "virtual" in extracted.lower():
                    modalidad = "Virtual"
                else:
                    # Fallback if it's something else, keep extracted or default
                    modalidad = extracted.capitalize()
            else:
                # Fallback search in the whole content
                if "semipresencial" in content.lower() or "híbrido" in content.lower():
                    modalidad = "Semipresencial"
                elif "presencial" in content.lower():
                    modalidad = "Presencial"
            
            results[prog['id']] = modalidad
            print(f"{prog['id']}: {modalidad}")

# Generate the JS replacement code
print("\n--- JS Replacement ---")
for id, mod in results.items():
    print(f"'{id}': '{mod}'")
