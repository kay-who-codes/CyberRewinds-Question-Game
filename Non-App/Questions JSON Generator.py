import json
import os

# Define the file names
txt_filename = 'questions.txt'
json_filename = 'questions.json'

# Check if the questions.txt file exists in the current directory
if os.path.exists(txt_filename):
    # Read the questions from the text file with the correct encoding (UTF-8)
    with open(txt_filename, 'r', encoding='utf-8') as txt_file:
        questions = [line.strip() for line in txt_file.readlines()]
    
    # Create the JSON structure
    json_data = {
        "questions": questions
    }
    
    # Write the data to a JSON file with the correct encoding (UTF-8)
    with open(json_filename, 'w', encoding='utf-8') as json_file:
        json.dump(json_data, json_file, indent=2, ensure_ascii=False)
    
    print(f"Successfully converted questions to {json_filename}")
else:
    print(f"{txt_filename} not found in the current directory.")
