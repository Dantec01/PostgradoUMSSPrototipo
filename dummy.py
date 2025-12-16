import os

def enable_selection():
    filepath = os.path.join(os.getcwd(), 'assets', 'css', 'templatemo-lugx-gaming.css')
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Remove user-select: none;
    content = content.replace('user-select: none;', '/* user-select: none; */')
    
    # Remove selection background: none;
    content = content.replace('*::selection {', '/* *::selection {')
    content = content.replace('background: none;', '/* background: none; */')
    content = content.replace('*::-moz-selection {', '/* *::-moz-selection {')
    
    # Actually, let's just comment out the whole block if possible, or just the specific properties.
    # The replace above might be too aggressive if 'background: none;' is used elsewhere.
    
    # Let's try a more targeted approach with replace_string_in_file tool instead of a script, 
    # or write the script to be very specific.
    
    # Re-reading the file content to be sure.
    pass

if __name__ == "__main__":
    pass
