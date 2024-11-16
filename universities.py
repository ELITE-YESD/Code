from flask import Flask, request, jsonify
import pandas as pd

print("Before loading the Excel file...")
try:
    data = pd.read_excel(r"C:\Users\이찬우\Desktop\Coding\HTML\Code\2023-2_연세대_점수+최종합격대학.xlsx")
    print("Excel file loaded successfully.")
except Exception as e:
    print(f"Error loading Excel file: {e}")

print("After loading the Excel file...")

app = Flask(__name__)

@app.route('/get-university', methods=['GET'])
def get_university():
    score = request.args.get('score', type=float)
    result = data[data['환산 점수'] == score]

    if not result.empty:
        university = result.iloc[0]['최종 배정 대학']
        return jsonify({'university': university})
    else:
        return jsonify({'error': '해당 점수에 대한 데이터가 없습니다.'})

print("Starting Flask app...")
if __name__ == '__main__':
    print("Flask app is about to run...")
    app.run(debug=True)
