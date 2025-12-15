import os
import re

# Configuration
root_dir = '.'
domain = 'https://posgrado.fcyt.umss.edu.bo'
old_index = 'posgrado_fcyt_umss_edu_default.html'
new_index = 'index.html'

# Get list of all .htm and .html files in the current directory
files = [f for f in os.listdir(root_dir) if f.endswith(('.htm', '.html'))]

def fix_content(content):
    # Replace old index file name
    content = content.replace(old_index, new_index)
    
    # Replace absolute asset links
    content = content.replace(f'{domain}/assets/', 'assets/')
    
    # Replace domain root with index.html
    content = re.sub(f'href="{re.escape(domain)}/?"', f'href="{new_index}"', content)
    
    # Replace other links
    def replace_link(match):
        full_url = match.group(1)
        path = full_url.replace(domain + '/', '')
        
        if path == '' or path == '#':
            return f'href="{path}"'
            
        # Check if it already has an extension
        if path.endswith('.htm') or path.endswith('.html'):
            return f'href="{path}"'
            
        # Check if a corresponding .htm file exists
        potential_file = f'{path}.htm'
        if potential_file in files:
            return f'href="{potential_file}"'
            
        # If not found, maybe it's a download or something else.
        # If it looks like a file (has extension), keep relative path
        if '.' in path:
             return f'href="{path}"'

        # Default to appending .htm
        return f'href="{path}.htm"'

    # Regex to find href="..." starting with domain
    pattern = f'href="({re.escape(domain)}/[^"]*)"'
    content = re.sub(pattern, replace_link, content)
    
    return content

for filename in files:
    filepath = os.path.join(root_dir, filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content = fix_content(content)
    
    if content != new_content:
        print(f'Updating {filename}...')
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)

print('Done.')
