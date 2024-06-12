import os

def count_lines(file_path):
    with open(file_path, 'r', encoding='utf-8', errors='ignore') as file:
        return len(file.readlines())

def scan_directory(directory):
    total_lines = 0
    file_line_counts = {}
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith(('.html', '.js', '.css')):
                file_path = os.path.join(root, file)
                line_count = count_lines(file_path)
                file_line_counts[file_path] = line_count
                total_lines += line_count
    
    return total_lines, file_line_counts

def main(directory):
    total_lines, file_line_counts = scan_directory(directory)
    max_file = max(file_line_counts, key=file_line_counts.get)
    max_lines = file_line_counts[max_file]

    print(f"Total number of lines in directory: {total_lines}")
    print(f"File with the highest number of lines: {max_file} ({max_lines} lines)")

# Replace 'your_directory_path' with the path to your directory
directory_path = 'your_directory_path'
main(directory_path)
